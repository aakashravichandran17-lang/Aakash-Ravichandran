import { Injectable, signal } from '@angular/core';

/**
 * Tracks which section is currently in view so the navbar can highlight the
 * matching link. Uses IntersectionObserver and exposes a read-only signal.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly _activeSection = signal<string>('home');
  readonly activeSection = this._activeSection.asReadonly();

  private observer?: IntersectionObserver;
  private sectionIds: string[] = [];

  /**
   * Observe the given section ids. Safe to call once after the view initialises.
   */
  observeSections(ids: readonly string[]): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.disconnect();
    this.sectionIds = [...ids];

    const sections = this.sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry closest to the top of the viewport that is visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          this._activeSection.set(visible[0].target.id);
        }
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
