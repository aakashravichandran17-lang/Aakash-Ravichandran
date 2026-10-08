import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import type { SkillCategory } from '../../models/skill.model';

@Component({
  selector: 'app-skill-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  template: `
    <article class="skill-card glass" [style.--accent]="category().accent">
      <header class="skill-card__head">
        <span class="skill-card__icon" aria-hidden="true">
          <ng-icon [name]="category().icon" size="20" />
        </span>
        <div>
          <h3 class="skill-card__title">{{ category().title }}</h3>
          <p class="skill-card__desc">{{ category().description }}</p>
        </div>
      </header>

      <ul class="skill-card__list" role="list">
        @for (skill of category().skills; track skill.name) {
          <li class="skill-chip">
            <ng-icon class="skill-chip__icon" [name]="skill.icon" size="16" aria-hidden="true" />
            <span>{{ skill.name }}</span>
          </li>
        }
      </ul>
    </article>
  `,
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  readonly category = input.required<SkillCategory>();
}
