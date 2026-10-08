import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
  protected readonly email = this.portfolio.email;
  protected readonly socials = this.portfolio.socialLinks;
  protected readonly quickLinks = this.portfolio.navLinks.filter((link) =>
    ['home', 'about', 'projects', 'contact'].includes(link.id),
  );

  protected readonly year = new Date().getFullYear();

  protected navigate(event: Event, target: string): void {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${target}`);
  }
}
