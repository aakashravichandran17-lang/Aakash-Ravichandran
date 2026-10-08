import type { EducationItem } from '../models/education.model';
import type { ExperienceItem } from '../models/experience.model';
import type { NavLink, Profile, Stat } from '../models/profile.model';
import type { Project, ProjectFilter } from '../models/project.model';
import type { Service } from '../models/service.model';
import type { SkillCategory } from '../models/skill.model';
import type { SocialLink } from '../models/social.model';

/* ==========================================================================
 *  PORTFOLIO DATA — single source of truth
 * --------------------------------------------------------------------------
 *  Edit everything about the site from this file. Nothing else in the app
 *  hardcodes personal content.
 *
 *  ⚠️  REPLACE THESE PLACEHOLDERS:
 *     - profile.email (in contact + social links)
 *     - social links (GitHub / LinkedIn URLs)
 *     - project githubUrl / liveUrl (only shown when present)
 * ========================================================================== */

export const PROFILE: Profile = {
  name: 'Aakash Ravichandran',
  shortName: 'Aakash',
  logo: 'AAKASH.DEV',
  role: 'Frontend / Full Stack Developer',
  tagline: 'I build modern, responsive and user-friendly web applications.',
  location: 'Madurai, Tamil Nadu, India',
  availability: 'Open to opportunities',
  bio: [
    'I am a passionate developer interested in building modern, responsive and user-friendly web applications. I work with Angular, React, JavaScript, TypeScript, Node.js, Express.js and MongoDB.',
    'I am a B.Com graduate who moved into software development through self-learning and hands-on projects. I enjoy turning ideas into real, working products and I am continuously learning new technologies.',
    'Beyond code, I have a strong interest in UI/UX design and video editing, which helps me build interfaces that are both functional and visually polished.',
  ],
  // Optional — add a link to your résumé PDF if you have one.
  // resumeUrl: 'assets/Aakash-Ravichandran-Resume.pdf',
};

/** Email is used by the contact section and the social links. */
export const EMAIL = 'aakashravichandran17@email.com'; // ⚠️ REPLACE ME

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'home', label: 'Home', target: 'home' },
  { id: 'about', label: 'About', target: 'about' },
  { id: 'skills', label: 'Skills', target: 'skills' },
  { id: 'projects', label: 'Projects', target: 'projects' },
  { id: 'experience', label: 'Experience', target: 'experience' },
  { id: 'contact', label: 'Contact', target: 'contact' },
];

/* -------------------------------------------------------------------------- */
/*  Social links                                                              */
/* -------------------------------------------------------------------------- */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    icon: 'brandGithub',
    url: 'https://github.com/aakashravichandran17-lang', // ⚠️ REPLACE ME
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'brandLinkedin',
    url: 'https://www.linkedin.com/in/aakashravichandran17/', // ⚠️ REPLACE ME
  },
  {
    id: 'email',
    label: 'Email',
    icon: 'mail',
    url: `mailto:${EMAIL}`,
  },
];

/* -------------------------------------------------------------------------- */
/*  About statistics — intentionally non-numeric (no fake claims)             */
/* -------------------------------------------------------------------------- */
export const STATS: readonly Stat[] = [
  { id: 'projects', value: 'Multiple', label: 'Projects Built', icon: 'layers' },
  { id: 'stack', value: 'Modern', label: 'Tech Stack', icon: 'cpu' },
  { id: 'learning', value: 'Continuous', label: 'Learning Mindset', icon: 'sparkles' },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */
export const EDUCATION: readonly EducationItem[] = [
  {
    id: 'bcom',
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'Madurai Kamaraj University',
    period: '2022 - 2025',
    description:
      'Graduated with a strong foundation in analytical thinking and business processes, while independently building software development skills through projects.',
    icon: 'graduationCap',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary',
    institution: 'Tamil Nadu State Board',
    period: '2021 - 2022',
    description:
      'Completed higher secondary education and developed an early interest in computers and web technologies.',
    icon: 'school',
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience — safe, editable placeholders (no invented employers/dates)    */
/* -------------------------------------------------------------------------- */
export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    id: 'freelance',
    role: 'Frontend / Web Development',
    company: '', // ⚠️ Add a company name when applicable
    period: 'Ongoing',
    description:
      'Worked on web development projects and gained practical experience with modern frontend and backend technologies.',
    highlights: [
      'Built responsive business and portfolio websites',
      'Developed full-stack applications with Angular, Node.js and MongoDB',
      'Practised clean UI/UX and reusable component architecture',
    ],
    icon: 'briefcase',
  },
  {
    id: 'self-learning',
    role: 'Self-Learning & Personal Projects',
    company: 'Independent',
    period: '2023 - Present',
    description:
      'Continuously learning and building real-world projects to strengthen frontend and full-stack development skills.',
    highlights: [
      'Explored Angular, React and TypeScript through hands-on projects',
      'Implemented REST APIs, authentication and real-time features',
      'Focused on modern, responsive and accessible interfaces',
    ],
    icon: 'rocket',
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive, component-driven interfaces.',
    icon: 'monitor',
    accent: '#3b82f6',
    skills: [
      { name: 'Angular', icon: 'brandAngular' },
      { name: 'React', icon: 'brandReact' },
      { name: 'TypeScript', icon: 'brandTypescript' },
      { name: 'JavaScript', icon: 'brandJavascript' },
      { name: 'HTML5', icon: 'brandHtml5' },
      { name: 'CSS3', icon: 'code' },
      { name: 'Tailwind CSS', icon: 'brandTailwind' },
      { name: 'Bootstrap', icon: 'brandBootstrap' },
      { name: 'Responsive Design', icon: 'smartphone' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Creating APIs and server-side logic.',
    icon: 'server',
    accent: '#22c55e',
    skills: [
      { name: 'Node.js', icon: 'brandNode' },
      { name: 'Express.js', icon: 'brandExpress' },
      { name: 'REST APIs', icon: 'network' },
      { name: 'JWT Authentication', icon: 'brandJwt' },
      { name: 'Socket.io', icon: 'brandSocketio' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Modelling and storing application data.',
    icon: 'database',
    accent: '#10b981',
    skills: [
      { name: 'MongoDB', icon: 'brandMongodb' },
      { name: 'MongoDB Atlas', icon: 'cloud' },
      { name: 'Mongoose', icon: 'brandMongoose' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Day-to-day development workflow.',
    icon: 'wrench',
    accent: '#f59e0b',
    skills: [
      { name: 'Git', icon: 'brandGit' },
      { name: 'GitHub', icon: 'brandGithub' },
      { name: 'VS Code', icon: 'code' },
      { name: 'Postman', icon: 'brandPostman' },
      { name: 'npm', icon: 'brandNpm' },
      { name: 'pnpm', icon: 'brandPnpm' },
      { name: 'Bun', icon: 'brandBun' },
    ],
  },
  // {
  //   id: 'uiux',
  //   title: 'UI / UX',
  //   description: 'Designing interfaces and micro-interactions.',
  //   icon: 'palette',
  //   accent: '#a855f7',
  //   skills: [
  //     { name: 'Figma', icon: 'brandFigma' },
  //     { name: 'UI/UX Design', icon: 'penTool' },
  //     { name: 'GSAP', icon: 'brandGsap' },
  //     { name: 'AOS', icon: 'sparkle' },
  //     { name: 'Swiper', icon: 'layers' },
  //   ],
  // },
  // {
  //   id: 'creative',
  //   title: 'Creative',
  //   description: 'Video editing and motion design.',
  //   icon: 'video',
  //   accent: '#ec4899',
  //   skills: [
  //     { name: 'Adobe Premiere Pro', icon: 'clapperboard' },
  //     { name: 'Adobe After Effects', icon: 'film' },
  //     { name: 'DaVinci Resolve', icon: 'brandDavinciResolve' },
  //     { name: 'Video Editing', icon: 'scissors' },
  //   ],
  // },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/*  Add githubUrl / liveUrl only when the URL actually exists.                */
/* -------------------------------------------------------------------------- */
export const PROJECTS: readonly Project[] = [
  {
    id: 'connecthub',
    name: 'ConnectHub',
    description:
      'A social networking web application with user authentication, profiles, follow and unfollow functionality, and other social features.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    features: [
      'User registration',
      'User login',
      'JWT authentication',
      'User profiles',
      'Follow / Unfollow',
      'Followers / Following',
      'Protected routes',
      'REST API integration',
    ],
    categories: ['fullstack'],
    icon: 'users',
    accent: '#3b82f6',
  },
  // {
  //   id: 'instagram-clone',
  //   name: 'Instagram Clone',
  //   description:
  //     'A social media application inspired by modern social networking platforms, built to practice full-stack development.',
  //   technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  //   features: [
  //     'Authentication',
  //     'User profiles',
  //     'Follow system',
  //     'Social interactions',
  //     'API integration',
  //     'MongoDB database',
  //   ],
  //   categories: ['fullstack'],
  //   icon: 'image',
  //   accent: '#ec4899',
  // },
  // {
  //   id: 'whatsapp-clone',
  //   name: 'WhatsApp Clone',
  //   description:
  //     'A real-time messaging application inspired by WhatsApp with chat and group communication features.',
  //   technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
  //   features: [
  //     'Real-time messaging',
  //     'Group chat',
  //     'Socket.io communication',
  //     'Message status',
  //     'User authentication',
  //     'Chat interface',
  //   ],
  //   categories: ['fullstack'],
  //   icon: 'messageCircle',
  //   accent: '#22c55e',
  // },
  // {
  //   id: 'e-repair',
  //   name: 'E-Repair',
  //   description:
  //     'A responsive service-based website UI for an electronic repair/service business.',
  //   technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
  //   features: [
  //     'Responsive design',
  //     'Service sections',
  //     'Modern UI',
  //     'Mobile-friendly layout',
  //   ],
  //   categories: ['frontend', 'business'],
  //   icon: 'wrench',
  //   accent: '#f59e0b',
  // },
  {
    id: 'jarvis-ai',
    name: 'JARVIS AI Assistant',
    description:
      'An AI assistant project inspired by JARVIS, designed to explore voice interaction, AI integration, automation and smart assistant functionality.',
    technologies: ['Angular / React', 'Node.js', 'AI APIs', 'TypeScript'],
    features: [
      'AI assistant concept',
      'Voice interaction',
      'Natural language commands',
      'Automation concepts',
      'Modern futuristic interface',
    ],
    categories: ['ai', 'fullstack'],
    icon: 'bot',
    accent: '#8b5cf6',
  },
  // {
  //   id: 'salon-website',
  //   name: 'Salon Website',
  //   description:
  //     'A modern business website concept designed for local salons and businesses.',
  //   technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
  //   features: [
  //     'Responsive design',
  //     'Services section',
  //     'Gallery',
  //     'Contact section',
  //     'Business information',
  //     'Modern animations',
  //   ],
  //   categories: ['frontend', 'business'],
  //   icon: 'scissors',
  //   accent: '#a855f7',
  // },
];

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  { id: 'all', label: 'All', icon: 'layoutGrid' },
  { id: 'frontend', label: 'Frontend', icon: 'monitor' },
  { id: 'fullstack', label: 'Full Stack', icon: 'layers' },
  { id: 'ai', label: 'AI', icon: 'bot' },
  { id: 'business', label: 'Business', icon: 'briefcase' },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */
export const SERVICES: readonly Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Professional websites that represent your business online with a modern look.',
    icon: 'briefcase',
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Clean personal portfolio sites that showcase your work and skills.',
    icon: 'user',
  },
  {
    id: 'salon-websites',
    title: 'Salon Websites',
    description: 'Attractive salon and local business websites with services and gallery sections.',
    icon: 'scissors',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    description: 'Layouts that look and work great on every device, from mobile to desktop.',
    icon: 'smartphone',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-impact landing pages designed to convert visitors into customers.',
    icon: 'rocket',
  },
  {
    id: 'custom-apps',
    title: 'Custom Web Applications',
    description: 'Full-stack web apps built around your specific requirements.',
    icon: 'layoutGrid',
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Pixel-focused frontend work with Angular, React and modern CSS.',
    icon: 'code',
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing updates, fixes and improvements to keep your site healthy.',
    icon: 'wrench',
  },
];

export const CONTACT_CTA = "Have a project in mind? Let's build it together.";
