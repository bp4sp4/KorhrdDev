'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function TitlePage() {
  const titleData = typographyData.filter(item => item.name.startsWith('Title'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Title</h1>
      <p className={styles.description}>
        섹션 제목이나 중요한 헤딩에 사용되는 타이포그래피입니다.
      </p>

      <div className={styles.grid}>
        {titleData.map((item, index) => (
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

