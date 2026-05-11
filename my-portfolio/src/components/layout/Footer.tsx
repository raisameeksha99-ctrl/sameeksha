import { SITE, SOCIAL_LINKS, NAV_LINKS } from '@/constants'
import { Container } from '@/components'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-12 bg-[var(--bg-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-base text-[var(--fg)]">
              {SITE.name}<span className="text-[var(--color-brand-500)]">.</span>
            </span>
            <span className="text-xs text-[var(--fg-subtle)]">{SITE.role}</span>
          </div>

          {/* Nav */}
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-[var(--fg-subtle)] hover:text-[var(--fg)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-xs font-medium text-[var(--fg-subtle)] hover:text-[var(--color-brand-500)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-xs text-[var(--fg-subtle)]">
            © {year} {SITE.name}. Designed &amp; built with intention.
          </p>
        </div>
      </Container>
    </footer>
  )
}
