import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { RevealDirective } from '../../directives/reveal.directive';
import type { ProjectCategory } from '../../models/project.model';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ProjectCardComponent } from './project-card.component';

type ActiveFilter = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, RevealDirective, SectionHeaderComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly portfolio = inject(PortfolioService);

  protected readonly filters = this.portfolio.projectFilters;
  protected readonly activeFilter = signal<ActiveFilter>('all');

  /** Reactive, derived list of projects for the selected filter. */
  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.portfolio.projects;
    return filter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(filter));
  });

  protected setFilter(filter: ActiveFilter): void {
    this.activeFilter.set(filter);
  }

  /** Pre-computed counts per filter (avoids calling methods in the template). */
  protected readonly filterCounts = computed<Record<string, number>>(() => {
    const projects = this.portfolio.projects;
    const counts: Record<string, number> = { all: projects.length };
    for (const filter of this.filters) {
      counts[filter.id] =
        filter.id === 'all'
          ? projects.length
          : projects.filter((p) => p.categories.includes(filter.id as ProjectCategory)).length;
    }
    return counts;
  });
}
