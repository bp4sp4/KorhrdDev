'use client'

import { useState } from 'react'
import styles from './spacing.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

const spacingUnits = [
  { name: 'unit-1', value: '0.125rem', px: '2px' },
  { name: 'unit-2', value: '0.25rem', px: '4px' },
  { name: 'unit-3', value: '0.5rem', px: '8px' },
  { name: 'unit-4', value: '0.75rem', px: '12px' },
  { name: 'unit-5', value: '1rem', px: '16px' },
  { name: 'unit-6', value: '1.25rem', px: '20px' },
  { name: 'unit-7', value: '1.5rem', px: '24px' },
  { name: 'unit-8', value: '2rem', px: '32px' },
  { name: 'unit-9', value: '2.5rem', px: '40px' },
  { name: 'unit-10', value: '3rem', px: '48px' },
  { name: 'unit-11', value: '3.5rem', px: '56px' },
  { name: 'unit-12', value: '4rem', px: '64px' },
  { name: 'unit-13', value: '6rem', px: '96px' },
  { name: 'unit-14', value: '7.5rem', px: '120px' },
  { name: 'unit-15', value: '10rem', px: '160px' },
]

export default function SpacingPage() {
  const [copiedUnit, setCopiedUnit] = useState<string | null>(null)

  const handleCopy = async (unit: string) => {
    try {
      await navigator.clipboard.writeText(`var(--${unit})`)
      setCopiedUnit(unit)
      setTimeout(() => setCopiedUnit(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spacing</h1>
      <p className={styles.description}>
        프로젝트에서 사용하는 간격 시스템입니다. padding이나 margin을 줄 때 이 값들을 사용하면 일관된 디자인을 유지할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing Unit 시스템</h2>
        <p className={styles.text}>
          모든 간격은 <code>--unit-1</code>부터 <code>--unit-15</code>까지의 CSS 변수를 사용합니다. 
          이 값들은 <code>tokens.css</code>에 정의되어 있으며, padding이나 margin에 사용할 수 있습니다.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>px</th>
                <th>복사</th>
              </tr>
            </thead>
            <tbody>
              {spacingUnits.map((unit) => (
                <tr key={unit.name}>
                  <td>
                    <code className={styles.code}>{unit.name}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{unit.value}</code>
                  </td>
                  <td className={styles.pxValue}>{unit.px}</td>
                  <td>
                    <button
                      className={styles.copyButton}
                      onClick={() => handleCopy(unit.name)}
                      title={`var(--${unit.name}) 복사`}
                    >
                      {copiedUnit === unit.name ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.33333 2.66667H12C12.7364 2.66667 13.3333 3.26362 13.3333 4V10.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.6667 5.33333H4C3.26362 5.33333 2.66667 5.93029 2.66667 6.66667V13.3333C2.66667 14.0697 3.26362 14.6667 4 14.6667H10.6667C11.403 14.6667 12 14.0697 12 13.3333V6.66667C12 5.93029 11.403 5.33333 10.6667 5.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법 예시</h2>
        <p className={styles.text}>
          CSS Modules나 전역 CSS에서 <code>var(--unit-*)</code> 형식으로 사용합니다.
        </p>

        <div className={styles.exampleGrid}>
          <div className={styles.exampleCard}>
            <h3 className={styles.exampleTitle}>CSS Modules에서 사용</h3>
            <CopyableCodeBlock code={`/* component.module.css */
.container {
  padding: var(--unit-5); /* 16px */
  margin-bottom: var(--unit-7); /* 24px */
  gap: var(--unit-3); /* 8px */
}

.section {
  padding: var(--unit-7) var(--unit-8); /* 24px 32px */
  margin-top: var(--unit-5); /* 16px */
}`} />
          </div>

          <div className={styles.exampleCard}>
            <h3 className={styles.exampleTitle}>전역 CSS에서 사용</h3>
            <CopyableCodeBlock code={`/* styles/components.css */
.card {
  padding: var(--unit-5); /* 16px */
  margin-bottom: var(--unit-7); /* 24px */
  gap: var(--unit-4); /* 12px */
}

.sidebar {
  padding: var(--unit-7); /* 24px */
  gap: var(--unit-3); /* 8px */
}`} />
          </div>
        </div>
      </section>

  

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주의사항</h2>
        <div className={styles.warningBox}>
          <ul className={styles.warningList}>
            <li>✅ 가급적 CSS 변수 사용 (<code>var(--unit-*)</code>)</li>
            <li>✅ 의미에 맞는 간격 선택 (작은 간격: unit-1~3, 중간 간격: unit-4~7, 큰 간격: unit-8~15)</li>
            <li>✅ 일관된 간격 시스템 유지</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
