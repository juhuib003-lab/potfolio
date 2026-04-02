import { useEffect, useRef } from 'react';
import '../App.css';

/* ────────────────────────────────────────
   데이터
──────────────────────────────────────── */
const INFO = {
  name: '박주희',
  role: '풀스택 / 프론트엔드 개발자',
  desc: 'DB 설계부터 화면 구현까지 전체 흐름을 이해하는 개발자입니다.\n사용자 경험과 서버 안정성을 함께 고려하며 성장하고 싶습니다.',
};

const SKILLS_ROW1 = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🔵', name: 'TypeScript' },
  { icon: '🟠', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '☕', name: 'Java' },
  { icon: '🐍', name: 'Python' },
];

const SKILLS_ROW2 = [
  { icon: '🍃', name: 'Spring Boot' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🗄️', name: 'MariaDB' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🤖', name: 'Brity RPA' },
  { icon: '🎨', name: 'Figma' },
  { icon: '🐙', name: 'Git/GitHub' },
];

const PROJECTS = [
  {
    num: '01',
    title: 'SORA MARKET',
    desc: '쇼핑몰 웹사이트 구현. 상품·리뷰 DB 테이블 설계, 관리자 페이지 상품 등록·수정·삭제 및 사용자 검색 기능 구현.',
    tags: ['Java', 'Spring Boot', 'JavaScript', 'Oracle DB', 'Mybatis'],
    period: '2025.12.01 – 2025.12.12',
    link: 'https://github.com/juhuib003-lab/first-project.git',
  },
  {
    num: '02',
    title: '수익성 자동 분석',
    desc: '손익비용 데이터 분석 시각화 및 엑셀 자동화 구축. RPA로 전자공시시스템 재무 데이터 자동 수집 및 이메일 전송 자동화.',
    tags: ['Python', 'JavaScript', 'Brity RPA', 'Excel'],
    period: '2026.02.27 – 2026.03.10',
    link: null,
  },
];

/* ────────────────────────────────────────
   메인 컴포넌트
──────────────────────────────────────── */
export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="pf-wrap">

      {/* NAV */}
      <nav className="pf-nav">
        <span className="nav-logo">JOOHEE.DEV</span>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="section hero-section">

        <p className="hero-eyebrow">FRONTEND DEVELOPER</p>

        <h1 className="hero-title">
          <span className="line"><span className="word">안녕하세요,</span></span>
          <span className="line">
            <span className="word">
              <span className="accent-text">{INFO.name}</span>입니다.
            </span>
          </span>
        </h1>

        <p className="hero-desc">
          {INFO.role}<br />
          {INFO.desc.split('\n').map((t, i) => (
            <span key={i}>{t}<br /></span>
          ))}
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact me →</a>
        </div>

        <div className="scroll-ind">
          <span>SCROLL</span>
          <div className="scroll-dot" />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <p className="section-label">TECH STACK</p>
        <h2 className="section-title">기술 및 도구</h2>

        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...SKILLS_ROW1, ...SKILLS_ROW1].map((s, i) => (
              <span className="skill-badge" key={i}>
                <span className="ico">{s.icon}</span> {s.name}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track reverse">
            {[...SKILLS_ROW2, ...SKILLS_ROW2].map((s, i) => (
              <span className="skill-badge" key={i}>
                <span className="ico">{s.icon}</span> {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <p className="section-label" ref={addRef}>SELECTED PROJECTS</p>
        <h2 className="section-title" ref={addRef}>주요 프로젝트</h2>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="project-card reveal"
              ref={addRef}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-num">{p.num} · {p.period}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>#{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-ghost" style={{ marginTop: '20px', display: 'inline-block', fontSize: '12px' }}>
                  GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <span>© 2025 {INFO.name}. All rights reserved.</span>
        <span>FRONTEND DEVELOPER</span>
      </footer>

    </div>
  );
}
