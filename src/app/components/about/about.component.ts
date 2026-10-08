import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon, RevealDirective, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
  protected readonly stats = this.portfolio.stats;

  protected readonly highlights = [
    { icon: 'graduationCap', label: 'B.Com Graduate moving into software development' },
    { icon: 'penTool', label: 'Strong interest in modern UI/UX design' },
    { icon: 'sparkles', label: 'Continuously learning new technologies' },
    { icon: 'briefcase', label: 'Building websites and web apps for businesses' },
  ] as const;
}
