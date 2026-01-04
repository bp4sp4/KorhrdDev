'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function CaptionPage() {
  const captionData = typographyData.filter(item => item.name.startsWith('Caption'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Caption</h1>
      <p className={styles.description}>
        캡션이나 가장 작은 텍스트에 사용되는 타이포그래피입니다.
      </p>

      <div className={styles.grid}>
        {captionData.map((item, index) => (
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

