'use client'

import { useState } from 'react'
import { File, Folder, Tree, type TreeViewElement } from "@/components/ui/file-tree"
import styles from './file-structure.module.css'

const fileIdToName: Record<string, string> = {
  '2': 'layout.tsx',
  '3': 'page.tsx',
  '5': 'utils.ts',
  '7': 'base.css',
  '8': 'components.css',
  '9': 'layout.css',
  '10': 'normalize.css',
  '11': 'tokens.css',
}

const fileDescriptions: Record<string, string> = {
  'layout.tsx': 'Next.js의 루트 레이아웃 파일입니다. 모든 페이지에 공통으로 적용되는 HTML 구조와 스타일을 정의합니다.',
  'page.tsx': '홈페이지를 렌더링하는 파일입니다. Next.js App Router에서는 각 폴더의 page.tsx가 해당 경로의 페이지가 됩니다.',
  'utils.ts': '프로젝트 전반에서 사용하는 유틸리티 함수들을 모아놓은 파일입니다.',
  'base.css': 'HTML 요소들의 기본 스타일을 정의하는 파일입니다. normalize.css와 tokens.css를 불러온 후 기본 스타일을 적용합니다.',
  'components.css': '여러 페이지에서 공통으로 사용하는 컴포넌트 스타일을 정의하는 파일입니다. 레이아웃 클래스, 버튼, 텍스트 스타일 등이 포함되어 있습니다.',
  'layout.css': '페이지의 레이아웃 구조를 만드는 클래스들을 정의하는 파일입니다. 사이드바, 헤더, 푸터 등 페이지의 큰 틀을 잡을 때 사용합니다.',
  'normalize.css': '브라우저마다 다른 기본 스타일을 통일시켜주는 파일입니다. 모든 브라우저에서 동일한 스타일로 시작할 수 있게 해줍니다.',
  'tokens.css': '프로젝트 전체에서 사용하는 디자인 토큰을 정의하는 파일입니다. 폰트 크기, 행간, 자간 등이 포함되어 있습니다.',
}

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
  const [selectedFileId, setSelectedFileId] = useState<string>('2')
  const selectedFileName = fileIdToName[selectedFileId] || 'layout.tsx'

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>기본 파일 구조</h1>
      <p className={styles.description}>
        새 프로젝트를 만들었을 때 기본적으로 생성되는 파일 구조입니다. 
        각 폴더와 파일의 역할을 이해하면 프로젝트를 더 쉽게 이해할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>프로젝트 구조</h2>
        <div className={styles.wrapper}>
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
                <File value="2" onClick={() => setSelectedFileId('2')}>
                  <p>layout.tsx</p>
                </File>
                <File value="3" onClick={() => setSelectedFileId('3')}>
                  <p>page.tsx</p>
                </File>
              </Folder>
              <Folder element="lib" value="4">
                <File value="5" onClick={() => setSelectedFileId('5')}>
                  <p>utils.ts</p>
                </File>
              </Folder>
              <Folder element="styles" value="6">
                <File value="7" onClick={() => setSelectedFileId('7')}>
                  <p>base.css</p>
                </File>
                <File value="8" onClick={() => setSelectedFileId('8')}>
                  <p>components.css <span className={styles.incomplete}>(미완성)</span></p>
                </File>
                <File value="9" onClick={() => setSelectedFileId('9')}>
                  <p>layout.css <span className={styles.incomplete}>(미완성)</span></p>
                </File>
                <File value="10" onClick={() => setSelectedFileId('10')}>
                  <p>normalize.css</p>
                </File>
                <File value="11" onClick={() => setSelectedFileId('11')}>
                  <p>tokens.css</p>
                </File>
              </Folder>
            </Tree>
          </div>

          <div className={styles.descriptionPanel}>
            <h3 className={styles.descriptionTitle}>파일 설명</h3>
            <div className={styles.descriptionContent}>
              <div className={styles.fileName}>{selectedFileName}</div>
              <p className={styles.fileDescription}>
                {fileDescriptions[selectedFileName] || '파일을 선택하면 설명이 표시됩니다.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

