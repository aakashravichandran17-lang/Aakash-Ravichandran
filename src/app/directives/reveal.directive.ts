import { Directive, ElementRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

/**
 * Adds a lightweight, performant scroll-reveal animation using IntersectionObserver.
 *
 * Usage:
 *   <div appReveal>…</div>
 *   <div appReveal [revealDelay]="120">…</div>
 *
 * Uses a signal so it works with Angular's zoneless change detection, and
 * automatically respects `prefers-reduced-motion`: content is shown immediately
 * with no animation when the user has requested reduced motion.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.reveal--visible]': 'visible()',
    '[style.transition-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Delay in milliseconds before the reveal transition starts. */
  readonly revealDelay = input(0);

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  protected readonly visible = signal(false);

  private readonly prefersReducedMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngOnInit(): void {
    if (this.prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      this.visible.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.visible.set(true);
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
