import { useEffect, useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const items = containerRef.current?.querySelectorAll('.about-item');
          items?.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 250);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section" ref={containerRef}>

      <p className="about-item section-label">ABOUT</p>

      <h2 className="about-item about-title">
        흐름을 이해하는 개발자
      </h2>

      <p className="about-item about-desc">
        고등학교 IT모바일과를 시작으로 GTQ, 웹디자인개발기능사를 취득하며
        화면 구현의 재미를 알게 되었습니다.<br /><br />
        HTML·CSS·JavaScript로 직접 사이트를 구현하면서 서버와 데이터까지
        다루고 싶다는 욕심이 생겼고, 풀스택 개발 과정을 통해
        SORA MARKET 쇼핑몰 구현과 수익성 자동분석 시스템 등
        실제 프로젝트를 수행하며 실무 역량을 쌓아왔습니다.<br /><br />
        DB 설계부터 화면 반영까지 전체 데이터 흐름을 이해하는 개발자,
        사용자 화면 감각과 서버 안정성을 함께 고려하는 개발자로 성장하겠습니다.
      </p>

      <div className="about-item about-line" />

    </section>
  );
}