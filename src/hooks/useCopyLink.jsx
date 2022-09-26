import { useState } from 'react'

export default function useCopyLink () {
  const [copiedMessage, setCopiedMessage] = useState(false)
  const [shareLink, setShareLink] = useState()

  const handleCopy = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(shareLink)
      setCopiedMessage(true)
      return setTimeout(() => {
        setCopiedMessage(false)
      }, 2500)
    }
  }

  return { copiedMessage, setCopiedMessage, setShareLink, handleCopy }
}
