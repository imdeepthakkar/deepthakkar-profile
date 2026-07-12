export interface GitHubEvent {
  id: string
  type: string
  repo: { name: string; url: string }
  createdAt: string
  message?: string
  sha?: string
}

export interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalForks: number
}

const GITHUB_USERNAME = "imdeepthakkar"
const BASE_URL = "https://api.github.com"

function makeHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "portfolio-app",
  }
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`
  }
  return headers
}

export async function getGitHubActivity(): Promise<GitHubEvent[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/events?per_page=10`,
      {
        headers: makeHeaders(),
        next: { revalidate: 60 },
      }
    )
    if (!res.ok) return []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = await res.json()
    return data.map((event) => {
      const base: GitHubEvent = {
        id: event.id,
        type: event.type,
        repo: {
          name: event.repo.name,
          url: `https://github.com/${event.repo.name}`,
        },
        createdAt: event.created_at,
      }
      if (event.type === "PushEvent" && event.payload?.commits?.length > 0) {
        const commit = event.payload.commits[0]
        base.message = commit.message.split("\n")[0].slice(0, 80)
        base.sha = commit.sha.slice(0, 7)
      }
      return base
    })
  } catch {
    return []
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`, {
        headers: makeHeaders(),
        next: { revalidate: 300 },
      }),
      fetch(`${BASE_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers: makeHeaders(),
        next: { revalidate: 300 },
      }),
    ])
    if (!userRes.ok || !reposRes.ok) {
      return { publicRepos: 0, followers: 0, following: 0, totalStars: 0, totalForks: 0 }
    }
    const user = await userRes.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const repos: any[] = await reposRes.json()
    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
    const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0)
    return {
      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      totalStars,
      totalForks,
    }
  } catch {
    return { publicRepos: 0, followers: 0, following: 0, totalStars: 0, totalForks: 0 }
  }
}
