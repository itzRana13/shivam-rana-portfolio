import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// GitHub API types
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  size: number;
}

export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  stars: number;
  forks: number;
  language: string | null;
  updated: string;
}

// GitHub API functions
export async function fetchUserRepos(username: string, limit: number = 20): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
      {
        headers: {
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'Portfolio-App'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.name.includes('test') && repo.description);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchRepoLanguages(repo: GitHubRepo): Promise<string[]> {
  try {
    const response = await fetch(repo.languages_url, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Portfolio-App'
      }
    });

    if (!response.ok) {
      return [repo.language || 'Unknown'];
    }

    const languages = await response.json();
    return Object.keys(languages).slice(0, 5); // Top 5 languages
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return [repo.language || 'Unknown'];
  }
}

export function formatRepoAsProject(repo: GitHubRepo, languages: string[]): ProjectData {
  // Clean up the description
  const description = repo.description 
    ? repo.description.replace(/[^\w\s.,!?-]/g, '').substring(0, 150) + '...'
    : 'A project built with modern web technologies.';

  // Create demo URL from homepage or construct from repo name
  const demo = repo.homepage || `https://${repo.name}.vercel.app`;

  return {
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description,
    tech: languages,
    github: repo.html_url,
    demo,
    image: '', // We'll need to handle this separately
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updated: repo.updated_at
  };
}