export type User = {
  name: string;
  age: number;
  id: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
};

export type GithubSearchResponse = {
  total_count: number;
  items: GithubUser[];
};
