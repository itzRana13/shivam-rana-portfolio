import { useState, useEffect } from 'react';
import { fetchUserRepos, fetchRepoLanguages, formatRepoAsProject, type ProjectData } from '@/lib/utils';

export function useGitHubRepos(username: string, limit: number = 8) {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const repos = await fetchUserRepos(username, limit);
        
        if (repos.length === 0) {
          setError('No repositories found or API rate limit exceeded');
          return;
        }

        // Fetch languages for each repo and format as projects
        const projectsWithLanguages = await Promise.all(
          repos.slice(0, limit).map(async (repo) => {
            const languages = await fetchRepoLanguages(repo);
            return formatRepoAsProject(repo, languages);
          })
        );

        setProjects(projectsWithLanguages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        console.error('Error in useGitHubRepos:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username, limit]);

  return { projects, loading, error, refetch: () => {
    if (username) {
      setLoading(true);
      setError(null);
      // Re-trigger the effect
      const fetchRepos = async () => {
        try {
          const repos = await fetchUserRepos(username, limit);
          const projectsWithLanguages = await Promise.all(
            repos.slice(0, limit).map(async (repo) => {
              const languages = await fetchRepoLanguages(repo);
              return formatRepoAsProject(repo, languages);
            })
          );
          setProjects(projectsWithLanguages);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        } finally {
          setLoading(false);
        }
      };
      fetchRepos();
    }
  }};
}
