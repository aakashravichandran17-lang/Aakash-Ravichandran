import { Injectable } from '@angular/core';
import {
  CONTACT_CTA,
  EDUCATION,
  EMAIL,
  EXPERIENCE,
  NAV_LINKS,
  PROFILE,
  PROJECTS,
  PROJECT_FILTERS,
  SERVICES,
  SKILL_CATEGORIES,
  SOCIAL_LINKS,
  STATS,
} from '../data/portfolio.data';

/**
 * Read-only access to the central portfolio data.
 * Components depend on this service instead of importing data directly, which
 * keeps templates declarative and makes the data easy to swap or mock.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = PROFILE;
  readonly email = EMAIL;
  readonly navLinks = NAV_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly stats = STATS;
  readonly education = EDUCATION;
  readonly experience = EXPERIENCE;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly projects = PROJECTS;
  readonly projectFilters = PROJECT_FILTERS;
  readonly services = SERVICES;
  readonly contactCta = CONTACT_CTA;
}
