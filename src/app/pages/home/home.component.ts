import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { EducationComponent } from '../../components/education/education.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ServicesComponent } from '../../components/services/services.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollSpyService } from '../../services/scroll-spy.service';

/**
 * Single-page home layout that composes every portfolio section in order.
 */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ServicesComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-experience />
    <app-education />
    <app-services />
    <app-contact />
  `,
})
export class HomeComponent {
  private readonly portfolio = inject(PortfolioService);
  private readonly scrollSpy = inject(ScrollSpyService);

  constructor() {
    // Wait until the DOM is rendered, then observe sections for active nav state.
    afterNextRender(() => {
      const ids = this.portfolio.navLinks.map((link) => link.target);
      this.scrollSpy.observeSections(ids);
    });
  }
}
