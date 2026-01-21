import styles from "./pretendard.module.css";

export default function PretendardPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pretendard 폰트 설정</h1>
      <p className={styles.description}>
        Pretendard는 한국어와 영문을 모두 지원하는 현대적인 웹 폰트입니다.
        프로젝트 초기에 설정하여 일관된 타이포그래피를 적용할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Pretendard 폰트 다운로드 및 설정
        </h2>

        <div
          style={{
            backgroundColor: "#EFF6FF",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            border: "2px solid #2563EB",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              margin: "0 0 1rem 0",
              fontSize: "1.125rem",
              lineHeight: "1.6",
              color: "#111827",
              fontWeight: "600",
            }}
          >
            1단계: Pretendard 폰트 다운로드
          </p>
          <p
            style={{
              margin: "0 0 1.5rem 0",
              fontSize: "0.9375rem",
              lineHeight: "1.6",
              color: "#4B5563",
            }}
          >
            아래 버튼을 클릭하여 Pretendard 폰트를 다운로드하세요.
          </p>
          <a
            href="https://github.com/orioncactus/pretendard/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Pretendard 최신 버전 다운로드
          </a>
          <p
            style={{
              margin: "1rem 0 0 0",
              fontSize: "0.8125rem",
              lineHeight: "1.6",
              color: "#6B7280",
            }}
          >
            또는{" "}
            <a
              href="https://github.com/orioncactus/pretendard/releases"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563EB", textDecoration: "underline" }}
            >
              모든 릴리즈 보기
            </a>
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#F9FAFB",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #E5E7EB",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              margin: "0 0 1rem 0",
              fontSize: "1.125rem",
              lineHeight: "1.6",
              color: "#111827",
              fontWeight: "600",
            }}
          >
            📦 2단계: 폰트 파일 추출 및 복사
          </p>
          <ol
            style={{
              margin: "0 0 1rem 0",
              paddingLeft: "1.5rem",
              lineHeight: "1.75",
            }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              다운로드한{" "}
              <code
                style={{
                  backgroundColor: "#E5E7EB",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Pretendard-*.zip
              </code>{" "}
              파일을 압축 해제하세요.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              압축 해제한 폴더에서{" "}
              <code
                style={{
                  backgroundColor: "#E5E7EB",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                web/static/woff2
              </code>{" "}
              경로로 이동하세요.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              다음 4개의 폰트 파일을 복사하세요:
              <ul style={{ margin: "0.5rem 0 0 1.5rem", lineHeight: "1.75" }}>
                <li>
                  <code
                    style={{
                      backgroundColor: "#E5E7EB",
                      padding: "0.125rem 0.375rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Pretendard-Regular.woff2
                  </code>
                </li>
                <li>
                  <code
                    style={{
                      backgroundColor: "#E5E7EB",
                      padding: "0.125rem 0.375rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Pretendard-Medium.woff2
                  </code>
                </li>
                <li>
                  <code
                    style={{
                      backgroundColor: "#E5E7EB",
                      padding: "0.125rem 0.375rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Pretendard-SemiBold.woff2
                  </code>
                </li>
                <li>
                  <code
                    style={{
                      backgroundColor: "#E5E7EB",
                      padding: "0.125rem 0.375rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Pretendard-Bold.woff2
                  </code>
                </li>
              </ul>
            </li>
            <li>
              프로젝트의{" "}
              <code
                style={{
                  backgroundColor: "#E5E7EB",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                public/fonts
              </code>{" "}
              폴더에 복사하세요. (폴더가 없으면 생성하세요)
            </li>
          </ol>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #D1D5DB",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "0.875rem",
                lineHeight: "1.6",
                color: "#111827",
                fontWeight: "600",
              }}
            >
              📁 최종 폴더 구조:
            </p>
            <pre
              style={{
                margin: 0,
                fontSize: "0.8125rem",
                color: "#374151",
                backgroundColor: "#F9FAFB",
                padding: "0.75rem",
                borderRadius: "0.25rem",
                overflow: "auto",
              }}
            >
              {`public/
  fonts/
    Pretendard-Regular.woff2
    Pretendard-Medium.woff2
    Pretendard-SemiBold.woff2
    Pretendard-Bold.woff2`}
            </pre>
          </div>
        </div>
      </section>

    </div>
  );
}
