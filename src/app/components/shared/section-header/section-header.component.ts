import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Reusable section heading: eyebrow label, title and optional subtitle.
 */
@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section__head" [class.section__head--center]="center()">
      @if (eyebrow()) {
        <span class="eyebrow">{{ eyebrow() }}</span>
      }
      <h2 class="section__title" [id]="headingId()">
        {{ title() }}
        @if (highlight()) {
          <span class="gradient-text"> {{ highlight() }}</span>
        }
      </h2>
      @if (subtitle()) {
        <p class="section__subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly highlight = input<string>();
  readonly subtitle = input<string>();
  readonly center = input(false);
  /** Optional id applied to the inner heading, for `aria-labelledby`. */
  readonly headingId = input<string>();
}
