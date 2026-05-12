declare module '*.mdx' {
  import type { ReactNode } from 'react'
  import { CaseStudyMetadata } from '@/types/case-study'
  
  export const frontmatter: CaseStudyMetadata
  
  export default function MDXContent(props: {
    components?: Record<string, React.ComponentType<any>>
  }): ReactNode
}
