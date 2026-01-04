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
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <div className={styles.usageBox}>
          <p className={styles.usageText}>
            <strong>1. 색상 선택하기</strong><br />
            아래에 있는 색상 팔레트에서 원하는 색상을 찾으세요. 각 색상은 번호가 작을수록 진하고, 번호가 클수록 밝습니다.
          </p>
          <p className={styles.usageText}>
            <strong>2. 색상 복사하기</strong><br />
            색상 박스를 클릭하면 색상 코드(예: #0051FF)가 자동으로 복사됩니다. 복사된 색상 코드를 CSS나 코드에 바로 사용할 수 있습니다.
          </p>
          <p className={styles.usageText}>
            <strong>3. 색상 사용하기</strong><br />
            복사한 색상 코드를 CSS 파일이나 인라인 스타일에 붙여넣어 사용하세요. 예: <code>color: #0051FF;</code>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>색상 팔레트</h2>
        <p className={styles.sectionDescription}>
          아래 색상들을 클릭하면 색상 코드가 복사됩니다. 마우스를 올리면 색상 코드가 표시됩니다.
        </p>

      <div className={styles.wrapper}>
        <div className={styles.desktop2}>
            <div className={styles.paletteContainer}>
              <div className={styles.palette}>
                <div className={styles.paletteHeader}>
                  <h3 className={styles.paletteTitle}>Blue</h3>
                  <p className={styles.paletteDescription}>주요 색상으로, 버튼, 링크, 강조 영역 등에 사용합니다.</p>
                </div>
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
                <div className={styles.paletteHeader}>
                  <h3 className={styles.paletteTitle}>Green</h3>
                  <p className={styles.paletteDescription}>성공, 완료, 긍정적인 상태를 나타낼 때 사용합니다.</p>
                </div>
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
                <div className={styles.paletteHeader}>
                  <h3 className={styles.paletteTitle}>Gray</h3>
                  <p className={styles.paletteDescription}>텍스트, 배경, 구분선 등 일반적인 UI 요소에 사용합니다.</p>
                </div>
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
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>색상 사용 팁</h2>
        <div className={styles.tipBox}>
          <p className={styles.tipText}>
            <strong>💡 팁:</strong> 색상은 번호가 작을수록 진하고, 번호가 클수록 밝습니다. 
            예를 들어 Blue 1은 가장 진한 파란색이고, Blue 10은 가장 밝은 파란색입니다.
          </p>
          <p className={styles.tipText}>
            <strong>💡 팁:</strong> 텍스트 색상으로 사용할 때는 진한 색상(Gray 1~4)을, 
            배경 색상으로 사용할 때는 밝은 색상(Gray 7~10)을 사용하는 것이 좋습니다.
          </p>
        </div>
      </section>
    </div>
  )
}
