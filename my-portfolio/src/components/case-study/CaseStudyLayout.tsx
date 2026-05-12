import React from 'react'
import { motion } from 'framer-motion'
import { RootLayout } from '@/components/layout'
import { Container, Heading, Text } from '@/components'
import { fadeUp, staggerContainer } from '@/lib/animations'
import type { CaseStudyMetadata } from '@/types/case-study'

interface CaseStudyLayoutProps {
  children: React.ReactNode
  metadata: CaseStudyMetadata
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ children, metadata }) => {
  return (
    <RootLayout>
      <article className="pb-24">
        {/* Hero Section */}
        <header className="relative py-20 md:py-32 overflow-hidden border-b border-[var(--border)]">
           <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
            style={{ background: 'var(--color-brand-500)' }}
          />
          
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium text-[var(--color-brand-500)] mb-4 tracking-wide uppercase"
              >
                {metadata.category}
              </motion.p>
              
              <motion.div variants={fadeUp}>
                <Heading as="h1" size="xl" gradient>
                  {metadata.title}
                </Heading>
              </motion.div>
              
              <motion.div variants={fadeUp} className="mt-6 max-w-2xl">
                <Text size="xl" balance className="opacity-80">
                  {metadata.description}
                </Text>
              </motion.div>

              <motion.div 
                variants={fadeUp}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[var(--border)]"
              >
                <div>
                  <Text variant="subtle" size="xs" className="uppercase tracking-widest font-semibold mb-2">Role</Text>
                  <Text size="sm">{metadata.role}</Text>
                </div>
                <div>
                  <Text variant="subtle" size="xs" className="uppercase tracking-widest font-semibold mb-2">Duration</Text>
                  <Text size="sm">{metadata.duration}</Text>
                </div>
                <div>
                  <Text variant="subtle" size="xs" className="uppercase tracking-widest font-semibold mb-2">Category</Text>
                  <Text size="sm">{metadata.category}</Text>
                </div>
                <div>
                  <Text variant="subtle" size="xs" className="uppercase tracking-widest font-semibold mb-2">Tools</Text>
                  <Text size="sm">{metadata.tags?.join(', ') || 'N/A'}</Text>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </header>

        {/* Content */}
        <Container className="mt-16">
          <div className="max-w-4xl mx-auto prose prose-invert prose-brand">
            {children}
          </div>
        </Container>
      </article>
    </RootLayout>
  )
}
