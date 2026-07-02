import { useEffect, useState } from 'react';

const DEFAULT_ROLES = [
  'Front-End AI Engineering Intern @ FlyRank AI',
  'Software Engineering Student',
  'Full-Stack Developer',
  'ML Engineer',
  'Agentic AI Engineer',
  'Problem Solver',
];

export function useTypewriter(roles = DEFAULT_ROLES, startDelay = 1000) {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    const startId = setTimeout(type, startDelay);
    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, [roles, startDelay]);

  return text;
}
