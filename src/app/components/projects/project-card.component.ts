import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import type { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  template: `
    <article class="project glass" [style.--accent]="project().accent">
      <div class="project__glow" aria-hidden="true"></div>

      <header class="project__head">
        <span class="project__icon" aria-hidden="true">
          <ng-icon [name]="project().icon" size="22" />
        </span>
        <h3 class="project__title">{{ project().name }}</h3>
      </header>

      <p class="project__desc">{{ project().description }}</p>

      <div class="project__tech">
        @for (tech of project().technologies; track tech) {
          <span class="chip">{{ tech }}</span>
        }
      </div>

      <div class="project__features">
        <p class="project__features-title">Key Features</p>
        <ul class="project__feature-list" role="list">
          @for (feature of project().features; track feature) {
            <li class="project__feature">
              <ng-icon name="check" size="14" aria-hidden="true" />
              <span>{{ feature }}</span>
            </li>
          }
        </ul>
      </div>

      <!--
        Actions: a real anchor is rendered only when a URL exists.
        Otherwise a disabled, non-interactive control is shown so the UI stays
        honest and the layout stays consistent.
      -->
      <footer class="project__actions">
        @if (project().githubUrl) {
          <a
            class="btn btn--ghost btn--sm"
            [href]="project().githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="'View ' + project().name + ' source code on GitHub'"
          >
            <ng-icon name="brandGithub" size="16" aria-hidden="true" />
            GitHub
          </a>
        } @else {
          <span class="btn btn--ghost btn--sm is-disabled" aria-disabled="true">
            <ng-icon name="brandGithub" size="16" aria-hidden="true" />
            GitHub
          </span>
        }

        @if (project().liveUrl) {
          <a
            class="btn btn--primary btn--sm"
            [href]="project().liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="'Open live demo of ' + project().name"
          >
            <ng-icon name="externalLink" size="16" aria-hidden="true" />
            Live Demo
          </a>
        } @else {
          <span class="btn btn--primary btn--sm is-disabled" aria-disabled="true">
            <ng-icon name="externalLink" size="16" aria-hidden="true" />
            Live Demo
          </span>
        }
      </footer>
    </article>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
