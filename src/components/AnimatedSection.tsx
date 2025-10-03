import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
    delay?: number;
}

const AnimatedSection = ({
    children,
    className = '',
    animation = 'fade-in',
    delay = 0
}: AnimatedSectionProps) => {
    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        freezeOnceVisible: true,
    });

    const animationClasses = {
        'fade-in': isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        'slide-up': isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        'slide-left': isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
        'slide-right': isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    };

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
