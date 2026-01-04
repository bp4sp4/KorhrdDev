'use client'

import { useState } from 'react'
import styles from './logo-guide.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

interface LogoItem {
  src: string
  alt: string
  fileName: string
  isDark?: boolean
}

const LogoCard = ({ src, alt, fileName, isDark = false }: LogoItem) => {
  const [showDownload, setShowDownload] = useState(false)

  const handleImageClick = () => {
    setShowDownload(true)
  }

  const handleDownload = async () => {
    try {
      const imageUrl = `/images/${encodeURIComponent(src)}`
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      setShowDownload(false)
    } catch (err) {
      console.error('Failed to download:', err)
    }
  }

  const handleClose = () => {
    setShowDownload(false)
  }

  return (
    <div className={styles.logoCard}>
      <div 
        className={`${styles.logoImageWrapper} ${isDark ? styles.darkBg : ''}`}
        onClick={handleImageClick}
        title="클릭하여 다운로드"
      >
        <img 
          src={`/images/${encodeURIComponent(src)}`}
          alt={alt}
          className={styles.logoImage}
        />
        {showDownload && (
          <div className={styles.downloadOverlay}>
            <div className={styles.downloadButtons}>
              <button 
                className={styles.downloadBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  handleDownload()
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V10M8 10L5.5 7.5M8 10L10.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                다운로드
              </button>
              <button 
                className={styles.closeBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <p className={styles.logoFileName}>{fileName}</p>
    </div>
  )
}

export default function LogoGuidePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로고 가이드</h1>
      <p className={styles.description}>
        프로젝트에서 사용하는 로고 사용 규칙입니다. 
        로고의 크기, 여백, 색상 등 사용 가이드를 확인할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>로고 사용 규칙</h2>
        <p className={styles.text}>
          로고를 사용할 때는 다음 규칙을 준수해야 합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>최소 여백</h3>
          <p className={styles.text}>
            로고 주변에는 최소한의 여백이 필요합니다. 로고의 높이만큼 여백을 확보해야 합니다.
          </p>
          <CopyableCodeBlock code={`.logo-container {
  padding: 1rem; /* 로고 높이와 동일한 여백 */
}`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>최소 크기</h3>
          <p className={styles.text}>
            로고는 최소 크기를 유지해야 합니다. 너무 작게 사용하면 가독성이 떨어집니다.
          </p>
          <CopyableCodeBlock code={`.logo {
  min-width: 120px;
  min-height: 40px;
}`} />
        </div>


      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>로고 이미지 목록</h2>
        <p className={styles.text}>
          프로젝트에서 사용 가능한 모든 로고 이미지입니다. 각 로고는 밝은 배경용(black)과 어두운 배경용(white) 버전을 제공합니다.
          이미지를 클릭하면 다운로드가 가능합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>심볼</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="symbol@2x.png"
              alt="symbol"
              fileName="symbol@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Eduvisors</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="Eduvisors_full_white@2x.png"
              alt="Eduvisors full white"
              fileName="Eduvisors_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="Eduvisors_full_black@2x.png"
              alt="Eduvisors full black"
              fileName="Eduvisors_full_black@2x.png"
            />
            <LogoCard 
              src="Eduvisors_default_white@2x.png"
              alt="Eduvisors default white"
              fileName="Eduvisors_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="Eduvisors_default_black@2x.png"
              alt="Eduvisors default black"
              fileName="Eduvisors_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생그룹</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생그룹_full_whtie@2x.png"
              alt="한평생그룹 full white"
              fileName="한평생그룹_full_whtie@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생그룹_full_black@2x.png"
              alt="한평생그룹 full black"
              fileName="한평생그룹_full_black@2x.png"
            />
            <LogoCard 
              src="한평생그룹_default_white@2x.png"
              alt="한평생그룹 default white"
              fileName="한평생그룹_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생그룹_default_black@2x.png"
              alt="한평생그룹 default black"
              fileName="한평생그룹_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생교육</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생교육_full_white@2x.png"
              alt="한평생교육 full white"
              fileName="한평생교육_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생교육_full_black@2x.png"
              alt="한평생교육 full black"
              fileName="한평생교육_full_black@2x.png"
            />
            <LogoCard 
              src="한평생교육_default_white@2x.png"
              alt="한평생교육 default white"
              fileName="한평생교육_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생교육_default_black@2x.png"
              alt="한평생교육 default black"
              fileName="한평생교육_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 직업훈련</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 직업훈련_full_white@2x.png"
              alt="한평생 직업훈련 full white"
              fileName="한평생 직업훈련_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 직업훈련_full_black@2x.png"
              alt="한평생 직업훈련 full black"
              fileName="한평생 직업훈련_full_black@2x.png"
            />
            <LogoCard 
              src="한평생 직업훈련_default_white@2x.png"
              alt="한평생 직업훈련 default white"
              fileName="한평생 직업훈련_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 직업훈련_default_black@2x.png"
              alt="한평생 직업훈련 default black"
              fileName="한평생 직업훈련_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 요양보호사교육원</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 요양보호사교육원_full_white@2x.png"
              alt="한평생 요양보호사교육원 full white"
              fileName="한평생 요양보호사교육원_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 요양보호사교육원_full_black@2x.png"
              alt="한평생 요양보호사교육원 full black"
              fileName="한평생 요양보호사교육원_full_black@2x.png"
            />
            <LogoCard 
              src="한평생 요양보호사교육원_default_white@2x.png"
              alt="한평생 요양보호사교육원 default white"
              fileName="한평생 요양보호사교육원_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 요양보호사교육원_default_black@2x.png"
              alt="한평생 요양보호사교육원 default black"
              fileName="한평생 요양보호사교육원_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 에듀바이저스</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 에듀바이저스_full_white@2x.png"
              alt="한평생 에듀바이저스 full white"
              fileName="한평생 에듀바이저스_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 에듀바이저스_full_black@2x.png"
              alt="한평생 에듀바이저스 full black"
              fileName="한평생 에듀바이저스_full_black@2x.png"
            />
            <LogoCard 
              src="한평생 에듀바이저스_default_white@2x.png"
              alt="한평생 에듀바이저스 default white"
              fileName="한평생 에듀바이저스_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 에듀바이저스_default_black@2x.png"
              alt="한평생 에듀바이저스 default black"
              fileName="한평생 에듀바이저스_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 실습지원</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 실습지원_ full_white@2x.png"
              alt="한평생 실습지원 full white"
              fileName="한평생 실습지원_ full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 실습지원_ full_black@2x.png"
              alt="한평생 실습지원 full black"
              fileName="한평생 실습지원_ full_black@2x.png"
            />
            <LogoCard 
              src="한평생 실습지원_ default_white@2x.png"
              alt="한평생 실습지원 default white"
              fileName="한평생 실습지원_ default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 실습지원_ default_black@2x.png"
              alt="한평생 실습지원 default black"
              fileName="한평생 실습지원_ default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 바로취업</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 바로취업_full_white@2x.png"
              alt="한평생 바로취업 full white"
              fileName="한평생 바로취업_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 바로취업_full_black@2x.png"
              alt="한평생 바로취업 full black"
              fileName="한평생 바로취업_full_black@2x.png"
            />
            <LogoCard 
              src="한평생 바로취업_default_white@2x.png"
              alt="한평생 바로취업 default white"
              fileName="한평생 바로취업_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 바로취업_default_black@2x.png"
              alt="한평생 바로취업 default black"
              fileName="한평생 바로취업_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>한평생 바로기업</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="한평생 바로기업_full_white@2x.png"
              alt="한평생 바로기업 full white"
              fileName="한평생 바로기업_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 바로기업_full_black@2x.png"
              alt="한평생 바로기업 full black"
              fileName="한평생 바로기업_full_black@2x.png"
            />
            <LogoCard 
              src="한평생 바로기업_default_white@2x.png"
              alt="한평생 바로기업 default white"
              fileName="한평생 바로기업_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="한평생 바로기업_default_black@2x.png"
              alt="한평생 바로기업 default black"
              fileName="한평생 바로기업_default_black@2x.png"
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>(주)한평생교육</h3>
          <div className={styles.logoGrid}>
            <LogoCard 
              src="(주)한평생교육_full_white@2x.png"
              alt="(주)한평생교육 full white"
              fileName="(주)한평생교육_full_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="(주)한평생교육_full_black@2x.png"
              alt="(주)한평생교육 full black"
              fileName="(주)한평생교육_full_black@2x.png"
            />
            <LogoCard 
              src="(주)한평생교육_default_white@2x.png"
              alt="(주)한평생교육 default white"
              fileName="(주)한평생교육_default_white@2x.png"
              isDark={true}
            />
            <LogoCard 
              src="(주)한평생교육_default_black@2x.png"
              alt="(주)한평생교육 default black"
              fileName="(주)한평생교육_default_black@2x.png"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
