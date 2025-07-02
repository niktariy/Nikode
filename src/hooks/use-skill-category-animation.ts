import { useState, useLayoutEffect } from "react";
import { useScroll, MotionValue } from "framer-motion";

interface UseSkillCategoryAnimationReturn {
  categoryHeight: number;
  scrollYProgress: MotionValue<number>;
  motionAllowed: boolean;
}

export const useSkillCategoryAnimation = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  listRef: React.RefObject<HTMLUListElement | null>
): UseSkillCategoryAnimationReturn => {
  const [categoryHeight, setCategoryHeight] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(true);

  // Проверяем prefers-reduced-motion
  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference) and (width > 900px) and (pointer: fine)');
    setMotionAllowed(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMotionAllowed(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"]
  });

  useLayoutEffect(() => {
    function updateHeight() {
      if (listRef.current) {
        setCategoryHeight(listRef.current.offsetWidth);
      }
    }
    updateHeight(); // Call once on mount

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [listRef]);

  return { categoryHeight, scrollYProgress, motionAllowed };
}; 