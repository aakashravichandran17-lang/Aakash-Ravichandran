export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  /** Leave empty until a real company name is available. */
  readonly company: string;
  readonly period: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly icon: string;
}
