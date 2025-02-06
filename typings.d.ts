export type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
};

export type Adjective = {
  adjective: string;
};

export type TechnologyProps = {
  children: React.ReactNode;
  name: string;
};
