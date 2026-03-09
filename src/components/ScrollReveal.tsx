import { useInView } from '@/hooks/use-in-view';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

const delayClasses = {
  0: '',
  1: 'delay-100',
  2: 'delay-200',
  3: 'delay-300',
};

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useInView({ threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  return (
    <div
      ref={ref}
      className={`animate-in-view ${delayClasses[delay]} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
