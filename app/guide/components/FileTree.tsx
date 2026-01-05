'use client'

import styles from './FileTree.module.css'

interface FileTreeItem {
  name: string
  type: 'file' | 'folder'
  children?: FileTreeItem[]
}

interface FileTreeProps {
  data: FileTreeItem[]
  level?: number
}

export default function FileTree({ data, level = 0 }: FileTreeProps) {
  return (
    <div className={styles.tree}>
      {data.map((item, index) => (
        <div key={index} className={styles.item} style={{ paddingLeft: `${level * 1.5}rem` }}>
          {item.type === 'folder' ? (
            <>
              <span className={styles.folderIcon}>📁</span>
              <span className={styles.name}>{item.name}</span>
            </>
          ) : (
            <>
              <span className={styles.fileIcon}>📄</span>
              <span className={styles.name}>{item.name}</span>
            </>
          )}
          {item.children && (
            <div className={styles.children}>
              <FileTree data={item.children} level={level + 1} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}



