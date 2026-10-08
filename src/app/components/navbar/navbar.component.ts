import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly portfolio = inject(PortfolioService);
  private readonly scrollSpy = inject(ScrollSpyService);

  protected readonly navLinks = this.portfolio.navLinks;
  protected readonly logo = this.portfolio.profile.logo;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = this.scrollSpy.activeSection;

  ngOnInit(): void {
    this.updateScrolled();
  }

  ngOnDestroy(): void {
    this.scrollSpy.disconnect();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.updateScrolled();
  }

  private updateScrolled(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /** Smooth-scroll to a section and update the URL hash without a full jump. */
  protected navigate(event: Event, target: string): void {
    event.preventDefault();
    this.closeMenu();

    const element = document.getElementById(target);
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `#${target}`);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
