import { useEffect, useRef, useState } from 'react';

const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

export default function Reveal({
  children,
  className = '',
  animation = '',
  style,
  as: Component = 'div',
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setActive(entry.isIntersecting);
      });
    }, revealOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${animation} ${active ? 'active' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
