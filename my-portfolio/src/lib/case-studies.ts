import type { CaseStudyModule, CaseStudyMetadata } from '@/types/case-study'

export async function getAllCaseStudies(): Promise<CaseStudyMetadata[]> {
  const modules = import.meta.glob('../content/case-studies/*.mdx')
  const projects: CaseStudyMetadata[] = []

  for (const path in modules) {
    const mod = (await modules[path]()) as CaseStudyModule
    projects.push({
      ...mod.frontmatter,
      slug: mod.frontmatter.slug || path.split('/').pop()?.replace('.mdx', '') || ''
    })
  }

  return projects
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyModule | null> {
  const modules = import.meta.glob('../content/case-studies/*.mdx')
  
  for (const path in modules) {
    const mod = (await modules[path]()) as CaseStudyModule
    if (mod.frontmatter.slug === slug || path.includes(slug)) {
      return mod
    }
  }

  return null
}
