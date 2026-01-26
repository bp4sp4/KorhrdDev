import styles from "./environment-variables.module.css";
import CopyableCodeBlock from "../components/CopyableCodeBlock";

export default function EnvironmentVariablesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>환경 변수 관리 가이드</h1>

      {/* 환경 변수 기본 규칙 및 프로젝트 환경 변수 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기본 규칙 및 설정</h2>
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>NEXT_PUBLIC_ 접두사</h3>
          <p className={styles.text}>
            클라이언트 컴포넌트에서 사용할 환경 변수는{" "}
            <code className={styles.code}>NEXT_PUBLIC_</code> 접두사를 붙입니다.
          </p>
          <div className={styles.tip}>
            <p>
              <strong>주의:</strong> NEXT_PUBLIC_ 접두사가 붙은 변수는
              브라우저에 노출되므로, 민감한 정보는 사용하지 마세요.
            </p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>.env.local 예시</h3>
          <CopyableCodeBlock
            code={`# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# BREVO (이메일 서비스)
BREVO_API_KEY=your-brevo-api-key

# Slack
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Vercel은 자동으로 환경 변수를 관리하므로 별도 설정 불필요`}
          />
        </div>
      </section>

      {/* 실제 사용 예시 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>실제 사용 예시</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>Supabase</h3>
          <CopyableCodeBlock
            code={`// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server Component에서 Service Role Key 사용
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);`}
          />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>BREVO (이메일)</h3>
          <CopyableCodeBlock
            code={`// app/api/send-email/route.ts
export async function POST(request: Request) {
  const brevoApiKey = process.env.BREVO_API_KEY;
  
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': brevoApiKey!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: [{ email: 'user@example.com' }],
      subject: 'Hello',
      htmlContent: '<p>Email content</p>',
    }),
  });
  
  return Response.json(await response.json());
}`}
          />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>Slack Webhook</h3>
          <CopyableCodeBlock
            code={`// app/api/slack/route.ts
export async function POST(request: Request) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  const response = await fetch(webhookUrl!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: '알림 메시지',
    }),
  });
  
  return Response.json({ success: response.ok });
}`}
          />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>Vercel 환경 변수 설정</h3>
          <ul className={styles.list}>
            <li>Vercel 프로젝트 → Settings → Environment Variables</li>
            <li>환경별로 다른 값 설정 (Production, Preview, Development)</li>
            <li>환경 변수 변경 후 재배포 시 적용</li>
          </ul>
        </div>
      </section>

      {/* 보안 주의사항 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>보안 주의사항</h2>
        <div className={styles.warning}>
          <p>
            <strong>중요:</strong> .env.local 파일은 절대 Git에 커밋하지
            마세요. 모든 API 키와 비밀번호는 서버 전용 변수로 설정해야 합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
