'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function HeadlinePage() {
  const headlineData = typographyData.filter(item => item.name.startsWith('Headline'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Headline</h1>
      <p className={styles.description}>
        부제목이나 작은 헤딩에 사용되는 타이포그래피입니다.
      </p>

      <div className={styles.grid}>
        {headlineData.map((item, index) => (
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

