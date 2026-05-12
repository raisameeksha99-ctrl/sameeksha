import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RootLayout } from '@/components/layout'
import { Container, Section, Heading, Text, Button } from '@/components'
import { fadeUp, staggerContainer, defaultViewport } from '@/lib/animations'
import { SITE } from '@/constants'
import { getAllCaseStudies } from '@/lib/case-studies'
import type { CaseStudyMetadata } from '@/types/case-study'

export default function HomePage() {
  const [projects, setProjects] = useState<CaseStudyMetadata[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const data = await getAllCaseStudies()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <RootLayout>
      {/* ── Hero ─────────────────────────────── */}
      <Section
        id="hero"
        className="min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden"
      >
        {/* Gradient orbs — ambient background */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: 'var(--color-brand-500)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: 'var(--color-accent-500)' }}
        />

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-[var(--color-brand-500)] mb-4 tracking-wide uppercase"
            >
              {SITE.role}
            </motion.p>

            <motion.div variants={fadeUp}>
              <Heading as="h1" gradient>
                {SITE.tagline}
              </Heading>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 max-w-xl">
              <Text size="lg" balance>
                Architecture is set up. Start building your portfolio sections here —
                the foundation is ready for animations, interactions, and great design.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4 flex-wrap">
              <Button size="lg" asChild>
                <a href="#work">View my work</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#about">About me</a>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* ── Selected Work ─────────────────────────────── */}
      <Section id="work" className="bg-[var(--bg-subtle)]">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <Heading as="h2">Selected Work</Heading>
              <Text className="mt-3 mx-auto max-w-md" balance>
                Case studies and projects will live here.
              </Text>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <motion.div key={project.slug} variants={fadeUp}>
                    <Link 
                      to={`/projects/${project.slug}`}
                      className="group block overflow-hidden rounded-[var(--radius-xl)] bg-[var(--bg-muted)] border border-[var(--border)] transition-all hover:border-[var(--color-brand-500)]"
                    >
                      <div className="aspect-[4/3] flex flex-col items-center justify-center p-8">
                        <Text variant="subtle" size="sm" className="mb-2 uppercase tracking-widest">{project.category}</Text>
                        <Heading as="h3" size="md" className="group-hover:text-[var(--color-brand-500)] transition-colors">
                          {project.title}
                        </Heading>
                        <Text variant="subtle" size="xs" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Case Study →
                        </Text>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                [1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="aspect-[4/3] rounded-[var(--radius-xl)] bg-[var(--bg-muted)] border border-[var(--border)] flex items-center justify-center"
                  >
                    <Text variant="subtle" size="sm">Project {i}</Text>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ── Placeholder: About ─────────────────────────────── */}
      <Section id="about">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <Heading as="h2">About me</Heading>
              <Text className="mt-4" balance>
                Your story and design philosophy will go here.
              </Text>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="aspect-square rounded-[var(--radius-2xl)] bg-[var(--bg-muted)] border border-[var(--border)]"
            />
          </motion.div>
        </Container>
      </Section>

      {/* ── Placeholder: Contact ───────────────────────────── */}
      <Section id="contact" className="bg-[var(--bg-subtle)]">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center max-w-xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Heading as="h2">Let&apos;s work together</Heading>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-4">
              <Text balance>Contact section will be built here.</Text>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Button size="xl" asChild>
                <a href={`mailto:${SITE.email}`}>Get in touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </RootLayout>
  )
}
