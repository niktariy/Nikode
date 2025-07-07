import { useEffect, useRef } from 'react';

export function useCursorParallax(
  selector = '.parallax',
  maxStrength = 40,
  minStrength = 10,
  idleAmplitude = 10,
  idleSpeed = 1.25
) {
  const idleRef = useRef(false);
  const lastMoveRef = useRef(Date.now());
  const idleFrame = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      idleRef.current = false;
      lastMoveRef.current = Date.now();

      const { clientX, clientY, view } = e;
      const { innerWidth, innerHeight } = view || window;
      const maxDist = Math.sqrt(innerWidth ** 2 + innerHeight ** 2);

      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const dist = Math.sqrt((clientX - elCenterX) ** 2 + (clientY - elCenterY) ** 2);

        const strength = minStrength + (maxStrength - minStrength) * (dist / maxDist);
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    };

    const animateIdle = () => {
      if (!idleRef.current) return;
      idleFrame.current += 1;
      const t = idleFrame.current / 60; // 60fps

      document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        const phase = t * idleSpeed + i;
        const y = Math.sin(phase) * idleAmplitude;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });

      animationFrame = requestAnimationFrame(animateIdle);
    };

    const checkIdle = () => {
      if (Date.now() - lastMoveRef.current > 700) {
        if (!idleRef.current) {
          idleRef.current = true;
          idleFrame.current = 0;
          animateIdle();
        }
      }
      animationFrame = requestAnimationFrame(checkIdle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(checkIdle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [selector, maxStrength, minStrength, idleAmplitude, idleSpeed]);
} 