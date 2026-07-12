import { GitHubStats } from "./github"

export interface MockAnalytics {
  activeUsers: number
  featuresShipped: number
  uptimePercent: number
}

export interface CombinedMetrics {
  github: GitHubStats
  analytics: MockAnalytics
}

export function getMockAnalytics(): MockAnalytics {
  return {
    activeUsers: 1247,
    featuresShipped: 38,
    uptimePercent: 99.97,
  }
}
