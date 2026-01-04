'use client'

import { File, Folder, Tree, type TreeViewElement } from "@/components/ui/file-tree"
import styles from './file-structure.module.css'

const ELEMENTS: TreeViewElement[] = [
  {
    id: "1",
    isSelectable: true,
    name: "app",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "layout.tsx",
      },
      {
        id: "3",
        isSelectable: true,
        name: "page.tsx",
      },
    ],
  },
  {
    id: "4",
    isSelectable: true,
    name: "lib",
    children: [
      {
        id: "5",
        isSelectable: true,
        name: "utils.ts",
      },
    ],
  },
  {
    id: "6",
    isSelectable: true,
    name: "styles",
    children: [
      {
        id: "7",
        isSelectable: true,
        name: "base.css",
      },
      {
        id: "8",
        isSelectable: true,
        name: "components.css",
      },
      {
        id: "9",
        isSelectable: true,
        name: "layout.css",
      },
      {
        id: "10",
        isSelectable: true,
        name: "normalize.css",
      },
      {
        id: "11",
        isSelectable: true,
        name: "tokens.css",
      },
    ],
  },
]

export default function FileStructurePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>기본 파일 구조</h1>
      <p className={styles.description}>
        새 프로젝트를 만들었을 때 기본적으로 생성되는 파일 구조입니다. 
        각 폴더와 파일의 역할을 이해하면 프로젝트를 더 쉽게 이해할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>프로젝트 구조</h2>
        <div className={styles.treeContainer}>
          <Tree
            className={styles.tree}
            style={{ height: 'auto' }}
            initialSelectedId="2"
            initialExpandedItems={[
              "1",
              "4",
              "6",
            ]}
            elements={ELEMENTS}
          >
            <Folder element="app" value="1">
              <File value="2">
                <p>layout.tsx</p>
              </File>
              <File value="3">
                <p>page.tsx</p>
              </File>
            </Folder>
            <Folder element="lib" value="4">
              <File value="5">
                <p>utils.ts</p>
              </File>
            </Folder>
            <Folder element="styles" value="6">
              <File value="7">
                <p>base.css</p>
              </File>
              <File value="8">
                <p>components.css</p>
              </File>
              <File value="9">
                <p>layout.css</p>
              </File>
              <File value="10">
                <p>normalize.css</p>
              </File>
              <File value="11">
                <p>tokens.css</p>
              </File>
            </Folder>
          </Tree>
        </div>
      </section>
    </div>
  )
}

