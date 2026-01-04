'use client'

import { useState } from 'react'
import styles from './color-palette.module.css'

export default function ColorPalettePage() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const blueColors = [
    { name: 'Blue 1', hex: '#00184D' },
    { name: 'Blue 2', hex: '#002980' },
    { name: 'Blue 3', hex: '#0039B2' },
    { name: 'Blue 4', hex: '#0049E5' },
    { name: 'Blue 5', hex: '#0051FF' },
    { name: 'Blue 6', hex: '#2469FF' },
    { name: 'Blue 7', hex: '#4C85FF' },
    { name: 'Blue 8', hex: '#7FA8FF' },
    { name: 'Blue 9', hex: '#B2CAFF' },
    { name: 'Blue 10', hex: '#E5EDFF' },
  ]

  const greenColors = [
    { name: 'Green 1', hex: '#002E19' },
    { name: 'Green 2', hex: '#009146' },
    { name: 'Green 3', hex: '#00C257' },
    { name: 'Green 4', hex: '#00E961' },
    { name: 'Green 5', hex: '#095633' },
    { name: 'Green 6', hex: '#2AF678' },
    { name: 'Green 7', hex: '#4EFF92' },
    { name: 'Green 8', hex: '#95FFB6' },
    { name: 'Green 9', hex: '#C4FFD5' },
    { name: 'Green 10', hex: '#E6FFEC' },
  ]

  const grayColors = [
    { name: 'Gray 1', hex: '#010101' },
    { name: 'Gray 2', hex: '#1D1D1D' },
    { name: 'Gray 3', hex: '#3D3D3D' },
    { name: 'Gray 4', hex: '#656565' },
    { name: 'Gray 5', hex: '#919191' },
    { name: 'Gray 6', hex: '#B2B2B2' },
    { name: 'Gray 7', hex: '#D0D0D0' },
    { name: 'Gray 8', hex: '#E4E4E4' },
    { name: 'Gray 9', hex: '#F2F2F2' },
    { name: 'Gray 10', hex: '#FAFAFA' },
  ]

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopiedHex(hex)
      setTimeout(() => setCopiedHex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>색상 팔레트</h1>
      <p className={styles.description}>
        프로젝트에서 사용하는 색상 목록입니다. 여기에 있는 색상만 사용하면 디자인이 일관되게 보입니다. 
        각 색상을 클릭하면 색상 코드가 복사됩니다.
      </p>

      <div className={styles.wrapper}>
        <div className={styles.desktop2}>
            <div className={styles.paletteContainer}>
              <div className={styles.palette}>
                <h3 className={styles.paletteTitle}>Blue</h3>
                <div className={styles.swatches}>
                  {blueColors.map((color, index) => (
                    <div 
                      key={index} 
                      className={styles.swatch}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleCopy(color.hex)}
                      title={`클릭하여 ${color.hex} 복사`}
                    >
                      {copiedHex === color.hex && (
                        <div className={styles.copyIndicator}>
                          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{color.hex}</span>
                        </div>
                      )}
                      {copiedHex !== color.hex && (
                        <div className={styles.hexCode}>{color.hex}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.palette}>
                <h3 className={styles.paletteTitle}>Green</h3>
                <div className={styles.swatches}>
                  {greenColors.map((color, index) => (
                    <div 
                      key={index} 
                      className={styles.swatch}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleCopy(color.hex)}
                      title={`클릭하여 ${color.hex} 복사`}
                    >
                      {copiedHex === color.hex && (
                        <div className={styles.copyIndicator}>
                          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{color.hex}</span>
                        </div>
                      )}
                      {copiedHex !== color.hex && (
                        <div className={styles.hexCode}>{color.hex}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.palette}>
                <h3 className={styles.paletteTitle}>Gray</h3>
                <div className={styles.swatches}>
                  {grayColors.map((color, index) => (
                    <div 
                      key={index} 
                      className={styles.swatch}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleCopy(color.hex)}
                      title={`클릭하여 ${color.hex} 복사`}
                    >
                      {copiedHex === color.hex && (
                        <div className={styles.copyIndicator}>
                          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{color.hex}</span>
                        </div>
                      )}
                      {copiedHex !== color.hex && (
                        <div className={styles.hexCode}>{color.hex}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
