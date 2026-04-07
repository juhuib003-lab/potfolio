import { useEffect, useRef } from 'react';

const INFO = {
  email: 'swngmls3571@naver.com',
  phone: '010-2365-2157',
  github: 'https://github.com/juhuib003-lab',
};

const LINKS = [
  { label: 'EMAIL',  val: INFO.email,               href: `mailto:${INFO.email}` },
  { label: 'PHONE',  val: INFO.phone,                href: `tel:${INFO.phone.replace(/-/g, '')}` },
  { label: 'GITHUB', val: 'github.com/juhuib003-lab', href: INFO.github },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const itemRefs   = useRef([]);

  useEffect(() => {
    // 섹션 전체 등장
    const sectionObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) sectionObs.observe(sectionRef.current);

    // 연락처 아이템 stagger
    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = itemRefs.current.indexOf(e.target);
            setTimeout(() => e.target.classList.add('visible'), i * 120);
          }
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((el) => el && itemObs.observe(el));

    return () => { sectionObs.disconnect(); itemObs.disconnect(); };
  }, []);

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>

      <p className="section-label contact-label">CONTACT</p>

      <h2 className="contact-title">
        함께 성장할<br />
        <span className="accent-text">준비가 되었습니다.</span>
      </h2>

      <div className="contact-list">
        {LINKS.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === 'GITHUB' ? '_blank' : undefined}
            rel="noreferrer"
            className="contact-item contact-item-reveal"
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <span className="c-label">{c.label}</span>
            <span className="c-val">{c.val}</span>
            <span className="c-arr">↗</span>
          </a>
        ))}
      </div>

    </section>
  );
}
