import React, { useEffect, useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          // 자식 요소들 순차적으로 등장 (stagger 효과)
          const items = containerRef.current?.querySelectorAll('.about-item');
          items?.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 300);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={containerRef} style={{ textAlign: 'center' }}>

      <span className="about-item section-label" style={{ justifyContent: 'center' }}>
        INTRODUCTION
      </span>

      <h1 className="about-item" style={{
        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
        fontWeight: 800,
        lineHeight: 1.2,
        margin: '0 0 2rem 0',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        ABOUT ME
      </h1>

      <p className="about-item" style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'var(--muted)',
        maxWidth: '680px',
        lineHeight: 1.9,
        wordBreak: 'keep-all',
        margin: '0 auto',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        고등학교 IT모바일과를 시작으로 GTQ, 웹디자인개발기능사를 취득하며
        화면 구현의 재미를 알게 되었습니다.<br /><br />
        HTML·CSS·JavaScript로 직접 사이트를 구현하면서 서버와 데이터까지
        다루고 싶다는 욕심이 생겼고, 풀스택 개발 과정을 통해
        SORA MARKET 쇼핑몰 구현과 수익성 자동분석 시스템 등
        실제 프로젝트를 수행하며 실무 역량을 쌓아왔습니다.<br /><br />
        DB 설계부터 화면 반영까지 전체 데이터 흐름을 이해하는 개발자,
        사용자 화면 감각과 서버 안정성을 함께 고려하는 개발자로 성장하겠습니다.
      </p>

      <div className="about-item" style={{
        marginTop: '3rem',
        width: '60px',
        height: '2px',
        background: 'var(--accent)',
        marginInline: 'auto',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }} />

    </section>
    
  );
}