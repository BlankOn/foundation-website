import { useState } from 'react'

type SpamFreeProps = {
  /**
   * The value written backwards and split into pieces, so it never appears
   * as plain text in the source or built files.
   * Example: '+62 800-1234-567' -> ['765-', '4321-', '008 ', '26+']
   */
  parts: string[]
  /** Button text shown before the value is revealed, e.g. "Show number". */
  revealLabel: string
  className?: string
  buttonClassName?: string
}

const decode = (parts: string[]) => parts.join('').split('').reverse().join('')

/**
 * Hides a phone number or email behind a button. The value is put together
 * only when someone clicks, and shown as plain text with no tel:/mailto:
 * link, so bots that read the page without clicking never see it.
 */
export function SpamFree({
  parts,
  revealLabel,
  className,
  buttonClassName,
}: SpamFreeProps) {
  const [value, setValue] = useState<string | null>(null)

  if (value) {
    return (
      <span className={className} aria-live="polite">
        {value}
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setValue(decode(parts))}
      className={buttonClassName}
    >
      {revealLabel}
    </button>
  )
}
