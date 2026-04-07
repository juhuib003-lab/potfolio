import { useEffect, useRef } from 'react';
import '../App.css';
import profileImg from '../증명사진.jpg';

const INFO = {
  name: '박주희',
  role: 'Frontend Developer',
  desc: '사용자 경험과 데이터 흐름을 함께 고민하는 개발자',
  email: 'swngmls3571@naver.com',
};

const SKILLS_ROW1 = [
  { icon: '⚛️', name: 'React',      tip: '컴포넌트 구조 설계 및 상태관리' },
  { icon: '🟨', name: 'JavaScript', tip: '비동기 처리 및 DOM 제어' },
  { icon: '🔵', name: 'TypeScript', tip: '타입 기반 안정성 확보' },
  { icon: '🟠', name: 'HTML5',      tip: '시맨틱 구조 설계' },
  { icon: '🎨', name: 'CSS3',       tip: '반응형 및 애니메이션 구현' },
  { icon: '☕', name: 'Java',       tip: '객체지향 프로그래밍' },
  { icon: '🐍', name: 'Python',     tip: '데이터 분석 및 자동화' },
];

const SKILLS_ROW2 = [
  { icon: '🍃', name: 'Spring Boot', tip: 'REST API 서버 구축' },
  { icon: '🟢', name: 'Node.js',     tip: '서버사이드 JS 개발' },
  { icon: '🗄️', name: 'MariaDB',    tip: 'DB 설계 및 쿼리 최적화' },
  { icon: '🔥', name: 'Firebase',    tip: '실시간 DB 및 인증 연동' },
  { icon: '🤖', name: 'Brity RPA',   tip: '업무 자동화 프로세스 구축' },
  { icon: '🎨', name: 'Figma',       tip: 'UI 설계 및 프로토타이핑' },
  { icon: '🐙', name: 'Git/GitHub',  tip: '버전 관리 및 협업' },
];

const PROJECTS = [
  {
    num: '01',
    title: 'SORA MARKET',
    desc: '쇼핑몰 웹사이트 구현. 상품·리뷰 DB 테이블 설계, 관리자 페이지 상품 등록·수정·삭제 및 사용자 검색 기능 구현.',
    detail: '데이터 흐름 충돌 문제를 API 구조 정리로 해결하며 서버-클라이언트 연동을 직접 경험했습니다.',
    tags: ['Java', 'Spring Boot', 'JavaScript', 'Oracle DB', 'Mybatis'],
    period: '2025.12.01 – 2025.12.12',
    link: 'https://github.com/juhuib003-lab/first-project.git',
  },
  {
    num: '02',
    title: '수익성 자동 분석',
    desc: '손익비용 데이터 분석 시각화 및 엑셀 자동화 구축. RPA로 전자공시시스템 재무 데이터 자동 수집 및 이메일 전송 자동화.',
    detail: '반복 업무를 자동화해 처리 시간을 대폭 단축, 실무에서 자동화의 효과를 직접 검증했습니다.',
    tags: ['Python', 'JavaScript', 'Brity RPA', 'Excel'],
    period: '2026.02.27 – 2026.03.10',
    link: 'https://github.com/juhuib003-lab/rpa-project.git',
    pptLink: 'https://www.canva.com/design/DAHEYP6Dids/2KtbXtFvGsZCot_lYr_83A/edit?utm_content=DAHEYP6Dids&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
];

const CERTIFICATIONS = [
  { year: '2024', title: '웹디자인개발기능사', org: '한국산업인력공단' },
  { year: '2018', title: '전자출판기능사',     org: '한국산업인력공단' },
  { year: '2018', title: '전산회계운용사 3급', org: '대한상공회의소' },
  { year: '2017', title: 'GTQ 2급',           org: '한국생산성본부' },
  { year: '2017', title: 'GTQi 3급',          org: '한국생산성본부' },
];

const EDUCATION = [
  {
    period: '2025.11 – 2026.04',
    title: '차세대 AI 예측 Solution 개발',
    org: '(주)글로벌OP아카데미',
    desc: 'Java, Python 기반 AI 솔루션 개발 과정',
  },
];

export default function Home() {
  const animRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target); // 한 번 등장하면 해제
          }
        });
      },
      { threshold: 0.12 }
    );
    animRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (el) => {
    if (el && !animRefs.current.includes(el)) animRefs.current.push(el);
  };

  return (
    <div className="pf-wrap">

      {/* TOP BAR */}
      <header className="top-bar">
        <span className="top-bar-logo">JOOHEE.DEV</span>
        <nav className="top-bar-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="top-bar-status">
          <span className="status-dot" />Open to Work
        </span>
      </header>
      <div className="top-bar-sub">
        {INFO.name}: {INFO.desc}
      </div>

      {/* HERO */}
      <section id="hero" className="section hero-section">
        <div className="hero-watermark">JOOHEE</div>
        <p className="hero-eyebrow">안녕하세요,</p>
        <h1 className="hero-title">{INFO.name}</h1>
        <p className="hero-role">{INFO.role}</p>
        <p className="hero-desc">{INFO.desc}</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact me →</a>
        </div>
        <div className="scroll-ind">
          <span>SCROLL</span>
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="about-grid">

          {/* 사진 — 왼쪽에서 등장 */}
          <div className="about-photo-wrap anim-left" ref={ref}>
            <div className="about-deco-text">
              <span>흐름을</span>
              <span><em>읽는</em></span>
            </div>
            <div className="photo-placeholder">
              <img src={profileImg} alt="박주희" />
            </div>
          </div>

          {/* 텍스트 — 오른쪽에서 등장 */}
          <div className="about-content anim-right" ref={ref}>
            <p className="section-label" style={{opacity:1,transform:'none'}}>ABOUT 박주희</p>
            <p className="about-desc">
              고등학교 IT모바일과를 시작으로 GTQ, 웹디자인개발기능사를 취득하며
              화면 구현의 재미를 알게 되었습니다.
            </p>
            <p className="about-desc">
              HTML·CSS·JavaScript로 직접 사이트를 구현하면서 서버와 데이터까지
              다루고 싶다는 욕심이 생겼고, 풀스택 개발 과정을 통해
              SORA MARKET 쇼핑몰 구현과 수익성 자동분석 시스템 등
              실제 프로젝트를 수행하며 실무 역량을 쌓아왔습니다.
            </p>
            <p className="about-desc">
              DB 설계부터 화면 반영까지 전체 데이터 흐름을 이해하는 개발자,
              사용자 화면 감각과 서버 안정성을 함께 고려하는 개발자로 성장하겠습니다.
            </p>
            <a href="https://www.notion.so/2b3ec95a9a3582978dc081ae60812e5d"
              className="about-resume-btn" target="_blank" rel="noreferrer">
              ❯ 자기소개서 더보기
            </a>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <p className="section-label anim-up" ref={ref}>TECH STACK</p>
        <h2 className="section-title anim-up" ref={ref} style={{transitionDelay:'0.1s'}}>기술 및 도구</h2>

        <div className="anim-up" ref={ref} style={{transitionDelay:'0.2s'}}>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...SKILLS_ROW1, ...SKILLS_ROW1].map((s, i) => (
                <span className="skill-badge" key={i}>
                  <span className="ico">{s.icon}</span> {s.name}
                  <span className="skill-tip">{s.tip}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track reverse">
              {[...SKILLS_ROW2, ...SKILLS_ROW2].map((s, i) => (
                <span className="skill-badge" key={i}>
                  <span className="ico">{s.icon}</span> {s.name}
                  <span className="skill-tip">{s.tip}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <p className="section-label anim-up" ref={ref}>SELECTED PROJECTS</p>
        <h2 className="section-title anim-up" ref={ref} style={{transitionDelay:'0.1s'}}>주요 프로젝트</h2>

        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="project-row anim-up"
              ref={ref}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="project-left">{p.num}</div>
              <div className="project-main">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-period">{p.period}</p>
                <p className="project-desc">{p.desc}</p>
                <p className="project-detail">→ {p.detail}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>#{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-right">
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'4px'}}><span style={{fontSize:'13px',fontFamily:'Space Mono, monospace',letterSpacing:'0.05em'}}>GitHub</span><span>↗</span></a>
                  : <span>—</span>
                }
                {p.pptLink && (
                  <a href={p.pptLink} target="_blank" rel="noreferrer" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'4px',marginTop:'12px'}}>
                    <span style={{fontSize:'13px',fontFamily:'Space Mono, monospace',letterSpacing:'0.05em'}}>PPT</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="section credentials-section">
        <p className="section-label anim-up" ref={ref}>CREDENTIALS</p>
        <h2 className="section-title anim-up" ref={ref} style={{transitionDelay:'0.1s'}}>자격 및 교육</h2>

        {/* 자격증 */}
        <p className="cred-subheading anim-up" ref={ref} style={{transitionDelay:'0.15s'}}>자격증</p>
        <div className="cred-list">
          {CERTIFICATIONS.map((c, i) => (
            <div
              className="cred-item anim-left"
              key={i}
              ref={ref}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="cred-year">{c.year}</span>
              <div className="cred-info">
                <h3 className="cred-title">{c.title}</h3>
                <p className="cred-org">{c.org}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 교육 */}
        <p className="cred-subheading anim-up" ref={ref} style={{transitionDelay:'0.1s', marginTop:'48px'}}>교육 이력</p>
        <div className="cred-list">
          {EDUCATION.map((e, i) => (
            <div
              className="cred-item anim-left"
              key={i}
              ref={ref}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="cred-year" style={{minWidth:'120px', fontSize:'10px'}}>{e.period}</span>
              <div className="cred-info">
                <h3 className="cred-title">{e.title}</h3>
                <p className="cred-org">{e.org}</p>
                <p className="cred-desc">{e.desc}</p>
              </div>
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
