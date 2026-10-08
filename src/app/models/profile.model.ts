export interface Stat {
  readonly id: string;
  /** Non-numeric label — avoids inventing fake statistics. */
  readonly value: string;
  readonly label: string;
  readonly icon: string;
}

export interface NavLink {
  readonly id: string;
  readonly label: string;
  /** In-page anchor target (section id). */
  readonly target: string;
}

export interface Profile {
  readonly name: string;
  readonly shortName: string;
  readonly logo: string;
  readonly role: string;
  readonly tagline: string;
  readonly location: string;
  readonly availability: string;
  readonly bio: readonly string[];
  readonly resumeUrl?: string;
}
