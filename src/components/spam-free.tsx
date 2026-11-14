import { useEffect, useState } from 'react'

type SpamFreeProps = {
  /**
   * The value written backwards and split into pieces, so it never appears
   * as plain text in the source or built files.
   * Example: '+62 800-1234-567' -> ['765-', '4321-', '008 ', '26+']
   */
  parts: string[]
  className?: string
}

const decode = (parts: string[]) => parts.join('').split('').reverse().join('')

/**
 * Shows a phone number or email as plain text, only in the browser after the
 * page loads. There is no tel:/mailto: link, so bots have less to find.
 */
export function SpamFree({ parts, className }: SpamFreeProps) {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    setValue(decode(parts))
  }, [parts])

  return (
    <span className={className} aria-hidden={value ? undefined : true}>
      {value ?? '•••'}
    </span>
  )
}
