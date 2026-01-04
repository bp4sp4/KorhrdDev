import styles from './spacing.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function SpacingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>간격(Spacing)</h1>
      <p className={styles.description}>
        요소들 사이의 간격을 일관되게 유지하기 위해 8px를 기준으로 한 간격 시스템을 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>간격 시스템</h2>
        <p className={styles.text}>
          모든 여백과 간격은 8px의 배수로 정합니다. 이렇게 하면 디자인이 깔끔하고 일관성 있게 보입니다. 
          예를 들어 8px, 16px, 24px, 32px 같은 값들을 사용합니다.
        </p>

        <CopyableCodeBlock code={`:root {
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
}`} />
      </section>
    </div>
  )
}

