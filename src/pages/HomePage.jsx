import { apiClient } from '@/services/http';

const structureItems = [
  'src/app: 애플리케이션 루트 구성',
  'src/pages: 화면 단위 컴포넌트',
  'src/components: 재사용 UI 컴포넌트',
  'src/services: API 통신/외부 연동',
  'src/styles: 전역 스타일',
];

export default function HomePage() {
  return (
    <section className="content-card">
      <div>
        <p className="section-label">Project Structure</p>
        <h2>기본 작업 시작점</h2>
      </div>

      <ul className="structure-list">
        {structureItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="hint-box">
        <p>API 기본 경로 예시</p>
        <code>{apiClient.baseUrl}</code>
      </div>
    </section>
  );
}
