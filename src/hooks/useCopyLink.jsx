import { useState } from 'react'

export default function useCopyLink ({ link }) {
  const [copiedMessage, setCopiedMessage] = useState(false)

  const handleCopy = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(link)
      setCopiedMessage(true)
      /* return setTimeout(() => {
        setCopiedMessage(false)
      }, 2000) */
    }
  }

  return { copiedMessage, setCopiedMessage, handleCopy }
}
