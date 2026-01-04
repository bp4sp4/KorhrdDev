'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function HeadingPage() {
  const headingData = typographyData.filter(item => item.name.startsWith('Heading'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Heading</h1>
      <p className={styles.description}>
        문서의 주요 섹션 제목에 사용되는 타이포그래피입니다.
      </p>

      <div className={styles.grid}>
        {headingData.map((item, index) => (
          <TypographyCard
            key={index}
            item={item}
            index={index}
            getTypographyStyle={getTypographyStyle}
            getCopyCode={getCopyCode}
          />
        ))}
      </div>
    </div>
  )
}

