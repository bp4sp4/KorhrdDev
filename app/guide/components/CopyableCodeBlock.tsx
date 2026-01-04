'use client'

import { useState } from 'react'
import styles from './CopyableCodeBlock.module.css'

interface CopyableCodeBlockProps {
  code: string
}

export default function CopyableCodeBlock({ code }: CopyableCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.codeBlockWrapper}>
      <div className={styles.codeBlock}>
        <pre><code>{code}</code></pre>
      </div>
      <button 
        className={styles.copyButton}
        onClick={handleCopy}
        aria-label="코드 복사"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33333 2.66667H11.3333C12.0697 2.66667 12.6667 3.26362 12.6667 4V11.3333C12.6667 12.0697 12.0697 12.6667 11.3333 12.6667H5.33333C4.59695 12.6667 4 12.0697 4 11.3333V4C4 3.26362 4.59695 2.66667 5.33333 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 1.33333H4C3.26362 1.33333 2.66667 1.93029 2.66667 2.66667V10.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  )
}

