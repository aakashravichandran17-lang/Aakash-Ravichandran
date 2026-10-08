import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgIcon, RevealDirective, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly portfolio = inject(PortfolioService);

  protected readonly profile = this.portfolio.profile;
  protected readonly email = this.portfolio.email;
  protected readonly socials = this.portfolio.socialLinks;

  protected readonly submitted = signal(false);
  protected readonly sending = signal(false);
  protected readonly success = signal(false);

  /** Typed Reactive Form with synchronous validation. */
  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
  });

  /** Whether a field's error message should be displayed. */
  protected showError(control: 'name' | 'email' | 'subject' | 'message'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.submitted());
  }

  protected onSubmit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);

    /*
     * No backend yet — intentionally. This is where you would integrate:
     *   - EmailJS:        emailjs.send(...)
     *   - Your REST API:  this.http.post('/api/contact', this.form.getRawValue())
     *   - Or a serverless function.
     */
    const payload = this.form.getRawValue();
    console.info('[contact] ready to submit:', payload);

    // Simulate a short async round-trip so the UI can show a success state.
    setTimeout(() => {
      this.sending.set(false);
      this.form.reset();
      this.submitted.set(false);
      this.success.set(true);
    }, 650);
  }

  protected dismissSuccess(): void {
    this.success.set(false);
  }
}
