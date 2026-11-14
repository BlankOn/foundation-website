import { useEffect, useState } from 'react'

type SpamFreeProps = {
  /**
   * The value written backwards and split into pieces, so it never appears
   * as plain text in the server-rendered HTML.
   * Example: '+62 800-1234-567' -> ['765-', '4321-', '008 ', '26+']
   */
  parts: string[]
  /** Link type: `tel` for phone numbers, `mailto` for email addresses. */
  type: 'tel' | 'mailto'
  className?: string
}

const decode = (parts: string[]) => parts.join('').split('').reverse().join('')

/**
 * Shows a phone number or email only in the browser, after the page loads.
 * Bots that read the raw HTML see a placeholder instead of the real value.
 */
export function SpamFree({ parts, type, className }: SpamFreeProps) {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    setValue(decode(parts))
  }, [parts])

  if (!value) {
    return (
      <span className={className} aria-hidden="true">
        •••
      </span>
    )
  }

  const href =
    type === 'tel' ? `tel:${value.replace(/[^+\d]/g, '')}` : `mailto:${value}`

  return (
    <a href={href} className={className}>
      {value}
    </a>
  )
}
