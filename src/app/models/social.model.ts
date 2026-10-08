export type SocialPlatform = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  readonly id: SocialPlatform;
  readonly label: string;
  readonly icon: string;
  /**
   * Placeholder value — replace with your real profile URL.
   * Email uses a `mailto:` URL.
   */
  readonly url: string;
}
