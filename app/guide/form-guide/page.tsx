import styles from './form-guide.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function FormGuidePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>폼 가이드</h1>
      <p className={styles.description}>
        입력 폼, 검증, 에러 처리 패턴을 일관되게 적용하는 방법을 안내합니다.
      </p>

      {/* 기본 폼 구조 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기본 폼 구조</h2>
        <p className={styles.text}>
          모든 폼 필드는 일관된 구조를 따릅니다: 라벨, 입력 필드, 도움말/에러 메시지 순서로 구성됩니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>기본 입력 필드</h3>
          <CopyableCodeBlock code={`// 기본 입력 필드
<div className={styles.formField}>
  <label className={styles.text_label} htmlFor="email">
    이메일
  </label>
  <input 
    type="email" 
    id="email"
    className={styles.input}
    placeholder="example@email.com"
  />
  <span className={styles.text_helper}>
    8자 이상 입력해주세요
  </span>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label} htmlFor="email-example">
                  이메일
                </label>
                <input 
                  type="email" 
                  id="email-example"
                  className={styles.input}
                  placeholder="example@email.com"
                />
                <span className={styles.text_helper}>
                  8자 이상 입력해주세요
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>필수 입력 필드</h3>
          <p className={styles.text}>
            필수 입력 필드는 라벨에 별표(*)를 추가하여 표시합니다.
          </p>
          <CopyableCodeBlock code={`// 필수 입력 필드
<div className={styles.formField}>
  <label className={\`\${styles.text_label} \${styles.text_labelRequired}\`} htmlFor="name">
    이름
  </label>
  <input 
    type="text" 
    id="name"
    className={styles.input}
    placeholder="홍길동"
    required
  />
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={`${styles.text_label} ${styles.text_labelRequired}`} htmlFor="name-example">
                  이름
                </label>
                <input 
                  type="text" 
                  id="name-example"
                  className={styles.input}
                  placeholder="홍길동"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 입력 필드 타입 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>입력 필드 타입</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>텍스트 영역 (Textarea)</h3>
          <CopyableCodeBlock code={`// 텍스트 영역
<div className={styles.formField}>
  <label className={styles.text_label} htmlFor="message">
    메시지
  </label>
  <textarea 
    id="message"
    className={styles.textarea}
    placeholder="메시지를 입력하세요"
    rows={4}
  />
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label} htmlFor="message-example">
                  메시지
                </label>
                <textarea 
                  id="message-example"
                  className={styles.textarea}
                  placeholder="메시지를 입력하세요"
                  rows={4}
                />
              </div>
            </form>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>선택 필드 (Select)</h3>
          <CopyableCodeBlock code={`// 선택 필드
<div className={styles.formField}>
  <label className={styles.text_label} htmlFor="category">
    카테고리
  </label>
  <select id="category" className={styles.select}>
    <option value="">선택해주세요</option>
    <option value="option1">옵션 1</option>
    <option value="option2">옵션 2</option>
    <option value="option3">옵션 3</option>
  </select>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label} htmlFor="category-example">
                  카테고리
                </label>
                <select id="category-example" className={styles.select}>
                  <option value="">선택해주세요</option>
                  <option value="option1">옵션 1</option>
                  <option value="option2">옵션 2</option>
                  <option value="option3">옵션 3</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>체크박스 (Checkbox)</h3>
          <CopyableCodeBlock code={`// 체크박스
<div className={styles.formField}>
  <label className={styles.text_label}>취미</label>
  <div className={styles.checkboxGroup}>
    <div className={styles.checkboxItem}>
      <input type="checkbox" id="hobby1" className={styles.checkbox} />
      <label htmlFor="hobby1">독서</label>
    </div>
    <div className={styles.checkboxItem}>
      <input type="checkbox" id="hobby2" className={styles.checkbox} />
      <label htmlFor="hobby2">운동</label>
    </div>
    <div className={styles.checkboxItem}>
      <input type="checkbox" id="hobby3" className={styles.checkbox} />
      <label htmlFor="hobby3">영화 감상</label>
    </div>
  </div>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label}>취미</label>
                <div className={styles.checkboxGroup}>
                  <div className={styles.checkboxItem}>
                    <input type="checkbox" id="hobby1-example" className={styles.checkbox} />
                    <label htmlFor="hobby1-example">독서</label>
                  </div>
                  <div className={styles.checkboxItem}>
                    <input type="checkbox" id="hobby2-example" className={styles.checkbox} />
                    <label htmlFor="hobby2-example">운동</label>
                  </div>
                  <div className={styles.checkboxItem}>
                    <input type="checkbox" id="hobby3-example" className={styles.checkbox} />
                    <label htmlFor="hobby3-example">영화 감상</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>라디오 버튼 (Radio)</h3>
          <CopyableCodeBlock code={`// 라디오 버튼
<div className={styles.formField}>
  <label className={styles.text_label}>성별</label>
  <div className={styles.radioGroup}>
    <div className={styles.radioItem}>
      <input type="radio" id="male" name="gender" className={styles.radio} value="male" />
      <label htmlFor="male">남성</label>
    </div>
    <div className={styles.radioItem}>
      <input type="radio" id="female" name="gender" className={styles.radio} value="female" />
      <label htmlFor="female">여성</label>
    </div>
  </div>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label}>성별</label>
                <div className={styles.radioGroup}>
                  <div className={styles.radioItem}>
                    <input type="radio" id="male-example" name="gender-example" className={styles.radio} value="male" />
                    <label htmlFor="male-example">남성</label>
                  </div>
                  <div className={styles.radioItem}>
                    <input type="radio" id="female-example" name="gender-example" className={styles.radio} value="female" />
                    <label htmlFor="female-example">여성</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 검증 및 에러 처리 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>검증 및 에러 처리</h2>
        <p className={styles.text}>
          입력 필드 검증은 사용자가 입력하는 동안 또는 제출 시점에 수행됩니다. 에러가 발생하면 명확하게 표시해야 합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>에러 상태 필드</h3>
          <p className={styles.text}>
            검증 실패 시 입력 필드에 에러 스타일을 적용하고 에러 메시지를 표시합니다.
          </p>
          <CopyableCodeBlock code={`// 에러 상태 입력 필드
<div className={styles.formField}>
  <label className={\`\${styles.text_label} \${styles.text_labelRequired}\`} htmlFor="email-error">
    이메일
  </label>
  <input 
    type="email" 
    id="email-error"
    className={\`\${styles.input} \${styles.inputError}\`}
    placeholder="example@email.com"
    aria-invalid="true"
  />
  <span className={styles.text_error}>
    올바른 이메일 형식이 아닙니다
  </span>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={`${styles.text_label} ${styles.text_labelRequired}`} htmlFor="email-error-example">
                  이메일
                </label>
                <input 
                  type="email" 
                  id="email-error-example"
                  className={`${styles.input} ${styles.inputError}`}
                  placeholder="example@email.com"
                  aria-invalid="true"
                  defaultValue="invalid-email"
                />
                <span className={styles.text_error}>
                  올바른 이메일 형식이 아닙니다
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>비활성화 필드</h3>
          <p className={styles.text}>
            특정 조건에서 입력 필드를 비활성화할 수 있습니다.
          </p>
          <CopyableCodeBlock code={`// 비활성화 필드
<div className={styles.formField}>
  <label className={styles.text_label} htmlFor="disabled">
    비활성화된 필드
  </label>
  <input 
    type="text" 
    id="disabled"
    className={styles.input}
    placeholder="이 필드는 비활성화되어 있습니다"
    disabled
  />
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label} htmlFor="disabled-example">
                  비활성화된 필드
                </label>
                <input 
                  type="text" 
                  id="disabled-example"
                  className={styles.input}
                  placeholder="이 필드는 비활성화되어 있습니다"
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 전체 폼 예제 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>전체 폼 예제</h2>
        <p className={styles.text}>
          여러 입력 필드가 포함된 완전한 폼 예제입니다.
        </p>

        <CopyableCodeBlock code={`// 전체 폼 예제
<form className={styles.formExample}>
  <div className={styles.formField}>
    <label className={\`\${styles.text_label} \${styles.text_labelRequired}\`} htmlFor="full-name">
      이름
    </label>
    <input 
      type="text" 
      id="full-name"
      className={styles.input}
      placeholder="홍길동"
      required
    />
  </div>

  <div className={styles.formField}>
    <label className={\`\${styles.text_label} \${styles.text_labelRequired}\`} htmlFor="full-email">
      이메일
    </label>
    <input 
      type="email" 
      id="full-email"
      className={styles.input}
      placeholder="example@email.com"
      required
    />
    <span className={styles.text_helper}>
      회원가입에 필요한 이메일입니다
    </span>
  </div>

  <div className={styles.formField}>
    <label className={styles.text_label} htmlFor="full-message">
      메시지
    </label>
    <textarea 
      id="full-message"
      className={styles.textarea}
      placeholder="메시지를 입력하세요"
      rows={4}
    />
  </div>

  <div className={styles.formActions}>
    <button type="button" className={\`\${styles.btn} \${styles.btn_secondary}\`}>
      취소
    </button>
    <button type="submit" className={\`\${styles.btn} \${styles.btn_primary}\`}>
      제출하기
    </button>
  </div>
</form>`} />

        <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
        <div className={styles.exampleGroup}>
          <form className={styles.formExample}>
            <div className={styles.formField}>
              <label className={`${styles.text_label} ${styles.text_labelRequired}`} htmlFor="full-name-example">
                이름
              </label>
              <input 
                type="text" 
                id="full-name-example"
                className={styles.input}
                placeholder="홍길동"
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={`${styles.text_label} ${styles.text_labelRequired}`} htmlFor="full-email-example">
                이메일
              </label>
              <input 
                type="email" 
                id="full-email-example"
                className={styles.input}
                placeholder="example@email.com"
                required
              />
              <span className={styles.text_helper}>
                회원가입에 필요한 이메일입니다
              </span>
            </div>

            <div className={styles.formField}>
              <label className={styles.text_label} htmlFor="full-message-example">
                메시지
              </label>
              <textarea 
                id="full-message-example"
                className={styles.textarea}
                placeholder="메시지를 입력하세요"
                rows={4}
              />
            </div>

            <div className={styles.formActions}>
              <button type="button" className={`${styles.btn} ${styles.btn_secondary}`}>
                취소
              </button>
              <button type="submit" className={`${styles.btn} ${styles.btn_primary}`}>
                제출하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 베스트 프랙티스 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>베스트 프랙티스</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>접근성 고려사항</h3>
          <ul className={styles.list}>
            <li>모든 입력 필드는 <code>label</code>과 연결되어야 합니다 (<code>htmlFor</code>와 <code>id</code> 사용)</li>
            <li>에러 상태에는 <code>aria-invalid="true"</code> 속성을 추가하세요</li>
            <li>에러 메시지는 입력 필드 바로 아래에 표시하세요</li>
            <li>필수 입력 필드는 <code>required</code> 속성과 라벨의 별표(*)로 표시하세요</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>검증 시점</h3>
          <ul className={styles.list}>
            <li><strong>실시간 검증:</strong> 사용자가 입력하는 동안 검증 (이메일, 비밀번호 등)</li>
            <li><strong>포커스 아웃 검증:</strong> 입력 필드를 벗어날 때 검증</li>
            <li><strong>제출 시 검증:</strong> 폼 제출 버튼을 클릭할 때 모든 필드 검증</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>에러 메시지 작성</h3>
          <div className={styles.warning}>
            <p>
              <strong>❌ 피해야 할 표현:</strong> "잘못된 입력", "에러"<br />
              <strong>✅ 권장 표현:</strong> "올바른 이메일 형식이 아닙니다", "비밀번호는 8자 이상이어야 합니다"
            </p>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoBoxTitle}>폼 관련 클래스명</h4>
          <ul className={styles.infoBoxList}>
            <li><code>.form_field</code> - 폼 필드 컨테이너</li>
            <li><code>.input</code> - 기본 입력 필드</li>
            <li><code>.input_error</code> - 에러 상태 입력 필드</li>
            <li><code>.textarea</code> - 텍스트 영역</li>
            <li><code>.select</code> - 선택 필드</li>
            <li><code>.text_helper</code> - 도움말 텍스트</li>
            <li><code>.text_error</code> - 에러 메시지</li>
            <li><code>.text_labelRequired</code> - 필수 필드 라벨</li>
          </ul>
        </div>

        <div className={styles.tip}>
          <p>
            <strong>💡 팁:</strong> 모든 폼은 일관된 스타일과 구조를 따르도록 하세요. 
            사용자가 어떤 페이지에서든 같은 방식으로 폼을 사용할 수 있도록 해야 합니다.
          </p>
        </div>
      </section>
    </div>
  )
}



