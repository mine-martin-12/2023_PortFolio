export const profile = {
  name: 'Martin Ndungu Wangondu',
  shortName: 'Martin',
  role: 'Software Engineer',
  tagline: 'Software Engineer · Data Analyst · AI Trainer',
  location: 'Nairobi, Kenya',
  years: '6+ years',
  email: 'wangondumn@gmail.com',
  phone: '+254 713 403 290',
  resume: '/Martin-Ndungu-Resume.pdf',
  summary:
    'I build scalable web applications, turn messy data into clear decisions, and train AI systems to be more accurate. Six-plus years across full-stack engineering, data analysis and model evaluation.',
  socials: {
    github: 'https://github.com/mine-martin-12',
    linkedin: 'https://www.linkedin.com/in/martin-w-4749b21b1/',
    kaggle: 'https://www.kaggle.com/minemartin',
    twitter: 'https://twitter.com/martin_mine',
  },
};

// Contact form delivery via Web3Forms (https://web3forms.com).
// Get a free access key by entering your email on their site, then paste it here.
// The key is designed to be public. Until it is set, the form opens a pre-filled
// email instead of posting, so messages are never lost.
export const contactForm = {
  web3formsKey: '',
};

export const stats = [
  { value: 6, suffix: '+', label: 'Years of experience' },
  { value: 25, suffix: '+', label: 'Projects delivered' },
  { value: 30, suffix: '%', label: 'Avg. performance gain' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind', 'Sass'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'TypeORM', 'REST APIs', 'Python'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MS SQL Server'],
  },
  {
    title: 'AI & Data',
    items: ['Prompt engineering', 'Data annotation', 'RLHF', 'Model evaluation'],
  },
  {
    title: 'DevOps',
    items: ['Git & GitHub', 'CI/CD', 'Linux', 'Cloud deployment', 'Agile'],
  },
];

export const experience = [
  {
    role: 'Prompt Engineer',
    company: 'LabelBox / Alignerr',
    period: 'Jun 2024 — Present',
    points: [
      'Improved AI response accuracy by 30% through rigorous testing and validation.',
      'Raised training efficiency 25% with structured dataset annotation.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Stream4Tech LLC',
    period: 'Oct 2022 — Jun 2024',
    points: [
      'Built scalable APIs and services, improving response times by 30%.',
      'Automated CI/CD pipelines and cut system downtime by 25%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Automata Systems',
    period: 'Mar 2021 — Sep 2021',
    points: [
      'Shipped React, TypeScript and Node.js apps with 30% faster load times.',
      'Reviewed code and mentored juniors, cutting bugs by 25%.',
    ],
  },
  {
    role: 'ICT Intern',
    company: 'Thika School of Medical Health Sciences',
    period: 'Jan 2019 — Apr 2019',
    points: [
      'Maintained web applications and improved data retrieval efficiency by 30%.',
    ],
  },
];

export const education = [
  {
    title: 'Diploma in Information Communication Technology',
    org: 'Thika Technical Training Institute',
    period: '2018 — 2021',
  },
  {
    title: 'Kenya Certificate of Secondary Education',
    org: 'St. Augustine Secondary School',
    period: '2012 — 2015',
  },
];

export const certificates = [
  { title: 'Intermediate Python', org: 'DataCamp', period: '2023' },
  { title: 'Introduction to Python', org: 'DataCamp', period: '2023' },
  { title: 'HTML Master Class', org: 'Udemy', period: '2020' },
  { title: 'C++ Beginner Online Course', org: 'Udemy', period: '2020' },
  { title: 'Google Go Programming', org: 'Udemy', period: '2019' },
];

export const projects = [
  {
    title: 'WashWise Business Hub',
    subtitle: 'Smart Laundry Management System',
    description:
      'End-to-end laundry operations platform: orders, customers, billing and reporting in one dashboard.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: '/thumb5.jpg',
    link: 'https://laundry-mngt.vercel.app/',
  },
  {
    title: 'Smart POS',
    subtitle: 'Point of Sale Management System',
    description:
      'Web POS with inventory tracking, sales analytics and multi-user roles for retail businesses.',
    stack: ['React', 'NestJS', 'MongoDB'],
    image: '/thumb6.jpg',
    link: 'https://web-pos-alpha.vercel.app/',
  },
  {
    title: 'Analytics Dashboard',
    subtitle: 'Data visualisation suite',
    description:
      'Reporting dashboard turning raw operational data into charts, KPIs and exportable reports.',
    stack: ['Next.js', 'Python', 'Charting'],
    image: '/thumb1.jpg',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Storefront & admin',
    description:
      'Product catalogue, cart, checkout and admin panel built on a modular API architecture.',
    stack: ['React', 'Express', 'MySQL'],
    image: '/thumb3.jpg',
    link: '#',
  },
];

export const valueProps = [
  {
    icon: 'target',
    title: 'Measurable results',
    text: 'I track impact, not just tasks: 30% faster APIs, 25% less downtime and 30% more accurate AI responses in recent roles.',
  },
  {
    icon: 'layers',
    title: 'Full-stack range',
    text: 'From React interfaces to NestJS APIs, SQL and NoSQL databases and CI/CD pipelines, I can take a feature from the first commit to production.',
  },
  {
    icon: 'bolt',
    title: 'Data and AI fluency',
    text: 'Hands-on work analysing datasets and training AI models means sharper product decisions and practical automation where it pays off.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'I start by listening: gathering requirements, understanding the users and writing down what success looks like.',
  },
  {
    step: '02',
    title: 'Plan & prototype',
    text: 'Sketch the architecture and put an early preview in front of you, so your feedback shapes the build.',
  },
  {
    step: '03',
    title: 'Build & test',
    text: 'Clean, documented code with testing and validation at every stage, and CI/CD so releases stay routine.',
  },
  {
    step: '04',
    title: 'Launch & support',
    text: 'Deploy, monitor and tune performance, then hand over with documentation your team can rely on.',
  },
];

export const bestFit = [
  {
    icon: 'code',
    title: 'Web applications',
    text: 'Dashboards, management systems and customer-facing apps built with React, Next.js, Node.js and NestJS.',
  },
  {
    icon: 'chart',
    title: 'Data & analytics',
    text: 'Dashboards, reporting and database optimisation that turn raw operational data into clear decisions.',
  },
  {
    icon: 'sparkles',
    title: 'AI training & evaluation',
    text: 'Prompt engineering, RLHF, data annotation and model evaluation that make AI systems measurably more accurate.',
  },
  {
    icon: 'rocket',
    title: 'Delivery & DevOps',
    text: 'CI/CD automation, cloud deployment, code review and mentoring that keep teams shipping reliably.',
  },
];

// TODO: replace with real quotes from colleagues and clients
export const testimonials = [
  {
    quote:
      'Martin picks up a new codebase quickly and ships dependable features. His API work made a noticeable difference to our response times.',
    role: 'Engineering Lead',
    company: 'Stream4Tech LLC',
  },
  {
    quote:
      'Always ready to help the junior developers, and his code reviews caught problems long before they reached production.',
    role: 'Product Manager',
    company: 'Automata Systems',
  },
];
