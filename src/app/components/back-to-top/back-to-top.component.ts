import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

/**
 * Floating "back to top" button that appears after scrolling down.
 */
@Component({
  selector: 'app-back-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  template: `
    <button
      type="button"
      class="back-to-top"
      [class.back-to-top--visible]="visible()"
      [attr.aria-hidden]="!visible()"
      [attr.tabindex]="visible() ? 0 : -1"
      aria-label="Back to top"
      (click)="scrollToTop()"
    >
      <ng-icon name="arrowUp" size="20" aria-hidden="true" />
    </button>
  `,
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.visible.set(window.scrollY > 520);
  }

  protected scrollToTop(): void {
    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#home');
  }
}
