export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools'
  | 'uiux'
  | 'creative';

export interface Skill {
  readonly name: string;
  /** Icon name from the globally registered icon set. */
  readonly icon: string;
}

export interface SkillCategory {
  readonly id: SkillCategoryId;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly accent: string;
  readonly skills: readonly Skill[];
}
