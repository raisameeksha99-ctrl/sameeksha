export interface CaseStudyMetadata {
  title: string;
  description: string;
  role: string;
  duration: string;
  category: string;
  thumbnail: string;
  slug: string;
  tags?: string[];
}

export interface CaseStudyModule {
  default: React.ComponentType;
  frontmatter: CaseStudyMetadata;
}
