export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React + Vite Frontend</p>
        <h1>my-tree-front</h1>
        <p className="hero-copy">
          Spring Boot backend 프로젝트인 <strong>my-tree-back</strong>와 연결할 프론트엔드 기본
          구조가 준비된 상태다.
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
}
