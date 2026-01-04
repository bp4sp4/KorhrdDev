'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function DisplayPage() {
  const displayData = typographyData.filter(item => item.name.startsWith('Display'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Display</h1>
      <p className={styles.description}>
        가장 큰 크기의 타이포그래피로, 주로 히어로 섹션이나 주요 제목에 사용됩니다.
      </p>

      <div className={styles.grid}>
        {displayData.map((item, index) => (
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

