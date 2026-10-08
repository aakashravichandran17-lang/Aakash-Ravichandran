/**
 * Categories used by the Projects filter tabs.
 * Keep these in sync with the labels defined in `portfolio.data.ts`.
 */
export type ProjectCategory = 'frontend' | 'fullstack' | 'ai' | 'business';

export interface Project {
  /** Stable identifier used for `track` in templates. */
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly features: readonly string[];
  /** One or more categories the project belongs to (used by the filter). */
  readonly categories: readonly ProjectCategory[];
  /** Lucide / Simple Icons icon name shown on the card. */
  readonly icon: string;
  /** Accent color (any valid CSS color) applied to the card highlight. */
  readonly accent: string;
  /** Only shown when defined — never invent repository URLs. */
  readonly githubUrl?: string;
  /** Only shown when defined — never invent demo URLs. */
  readonly liveUrl?: string;
}

/** A selectable filter tab in the Projects section. */
export interface ProjectFilter {
  readonly id: 'all' | ProjectCategory;
  readonly label: string;
  readonly icon: string;
}
