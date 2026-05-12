import React from 'react'
import { Heading, Text } from '@/components'

export const MDXComponents = {
  h1: (props: any) => <Heading as="h1" size="xl" className="mt-12 mb-6" {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" className="mt-16 mb-6 pb-2 border-b border-[var(--border)]" {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" className="mt-8 mb-4" {...props} />,
  p: (props: any) => <Text className="mb-6 leading-relaxed opacity-90" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2 opacity-90" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 space-y-2 opacity-90" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2 my-8 italic bg-[var(--bg-subtle)] rounded-r-lg" 
      {...props} 
    />
  ),
  img: (props: any) => (
    <div className="my-12">
      <img className="rounded-2xl border border-[var(--border)] w-full object-cover shadow-2xl" {...props} />
      {props.alt && <p className="text-center text-sm mt-4 opacity-50 italic">{props.alt}</p>}
    </div>
  ),
  // Section Wrapper for case study parts
  Section: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="py-12 first:pt-0">
      <Heading as="h2" size="lg" className="mb-8">{title}</Heading>
      {children}
    </section>
  ),
  // Grid for images or cards within MDX
  Grid: ({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 my-12`}>
      {children}
    </div>
  )
}
