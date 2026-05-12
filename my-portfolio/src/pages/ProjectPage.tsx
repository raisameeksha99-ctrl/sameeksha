import { useEffect, useState, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { getCaseStudyBySlug } from '@/lib/case-studies'
import type { CaseStudyModule } from '@/types/case-study'
import { CaseStudyLayout } from '@/components/case-study/CaseStudyLayout'
import { MDXComponents } from '@/components/case-study/MDXComponents'
import { Container, Text, Button, Heading } from '@/components'
import { ArrowLeft } from 'lucide-react'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<CaseStudyModule | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProject() {
      if (!slug) return
      setLoading(true)
      const data = await getCaseStudyBySlug(slug)
      setProject(data)
      setLoading(false)
    }
    loadProject()
  }, [slug])

  if (loading) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <Text>Loading project...</Text>
      </Container>
    )
  }

  if (!project) {
    return (
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Heading as="h1">Project not found</Heading>
        <Button className="mt-6" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Container>
    )
  }

  const { default: Content, frontmatter } = project

  return (
    <MDXProvider components={MDXComponents}>
      <CaseStudyLayout metadata={frontmatter}>
        <Suspense fallback={<div>Loading content...</div>}>
          <Content />
        </Suspense>
      </CaseStudyLayout>
    </MDXProvider>
  )
}
