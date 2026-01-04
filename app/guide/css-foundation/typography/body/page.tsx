'use client'

import styles from '../typography.module.css'
import TypographyCard from '../components/TypographyCard'
import { typographyData, getTypographyStyle, getCopyCode } from '../utils'

export default function BodyPage() {
  const bodyData = typographyData.filter(item => item.name.startsWith('Body'))

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Body</h1>
      <p className={styles.description}>
        본문 텍스트에 사용되는 타이포그래피입니다. Normal과 Reading 두 가지 스타일이 있습니다.
      </p>

      <div className={styles.grid}>
        {bodyData.map((item, index) => (
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

