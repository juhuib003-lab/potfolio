import React, { useEffect, useRef } from 'react';

// INFO 여기다 직접 적기
const INFO = {
  email: 'swngmls3571@naver.com',
  phone: '010-2365-2157',
  github: 'https://github.com/juhuib003-lab',
};

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">CONTACT</p>
      <h2 className="contact-title">
        함께 성장할<br /><span className="accent-text">준비가 되었습니다.</span>
      </h2>
      <div className="contact-list" ref={ref}>
        {[
          { label: 'EMAIL',  val: INFO.email,  href: `mailto:${INFO.email}` },
          { label: 'PHONE',  val: INFO.phone,  href: `tel:${INFO.phone.replace(/-/g,'')}` },
          { label: 'GITHUB', val: 'github.com/juhuib003-lab', href: INFO.github },
        ].map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
            <span className="c-label">{c.label}</span>
            <span className="c-val">{c.val}</span>
            <span className="c-arr">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}