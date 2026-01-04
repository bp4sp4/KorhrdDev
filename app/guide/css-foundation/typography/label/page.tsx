'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function LabelPage() {
  const labelData = typographyData.filter(item => item.name.startsWith('Label'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Label</h1>
      <p className={styles.description}>
        라벨이나 작은 텍스트에 사용되는 타이포그래피입니다.
      </p>

      <div className={styles.grid}>
        {labelData.map((item, index) => (
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

