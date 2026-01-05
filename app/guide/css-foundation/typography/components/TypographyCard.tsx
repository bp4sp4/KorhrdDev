'use client'

import { useState } from 'react'
import styles from './TypographyCard.module.css'

interface TypographyItem {
  name: string
  size: string
  lineHeight: string
  letterSpacing: string
  preview: string
  previewLatin: string
  previewMixed: string
  cssVar: string
}

interface TypographyCardProps {
  item: TypographyItem
  index: number
  getTypographyStyle: (item: TypographyItem) => { fontSize: string; lineHeight: string; letterSpacing: string }
  getCopyCode: (item: TypographyItem) => string
}

export default function TypographyCard({ item, index, getTypographyStyle, getCopyCode }: TypographyCardProps) {
  const [copied, setCopied] = useState(false)
  const style = getTypographyStyle(item)
  const copyCode = getCopyCode(item)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.specs}>
            <span className={styles.spec}>{item.size}</span>
            <span className={styles.spec}>{item.lineHeight}</span>
            <span className={styles.spec}>{item.letterSpacing}</span>
          </div>
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

      <div className={styles.previewSection}>
        <div className={styles.previewBox}>
          <div style={style} className={styles.previewText}>
            {item.preview}
          </div>
        </div>
        <div className={styles.previewBox}>
          <div style={style} className={styles.previewText}>
            {item.previewLatin}
          </div>
        </div>
        <div className={styles.previewBox}>
          <div style={style} className={styles.previewText}>
            {item.previewMixed}
          </div>
        </div>
      </div>

      <div className={styles.codeSection}>
        <div className={styles.codeBlock}>
          <pre><code>{copyCode}</code></pre>
        </div>
      </div>
    </div>
  )
}



