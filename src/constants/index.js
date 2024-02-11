import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mostaql,
  free,
  upwork,
  doctors
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Bio',
  },
  {
    id: 'elevator',
    title: 'Elevator Pitch',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Mostaql',
    icon: mostaql,
    iconBg: '#333333',
    date: 'January 2021 -  August 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Freelancer',
    icon: free,
    iconBg: '#333333',
    date: 'March 2021 - and now',
  },
  {
    title: 'UI / UX Designer',
    company_name: 'Mostaql',
    icon: mostaql,
    iconBg: '#333333',
    date: 'May 2018 - and now',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'UpWork',
    icon: upwork,
    iconBg: '#333333',
    date: 'June 2023 - And now',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Telemedicine App/Platform',
    description:
      'This is a demo concert wireframe of this project.',
    tags: [
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'supabase',
        color: 'blue-text-gradient',

      },
    ],
    image: doctors,
    repo: 'https://docs.google.com/document/d/1FGRyuLItqYXzGPdJ-zNudPXoCf2SXk4Qy3Xa6sQWiso/edit?usp=sharing',
    demo: 'https://drive.google.com/file/d/175n8IOdACpujp8GFiEcNHIuOXYqq6q2n/view?usp=sharing',
  },
  {
    id: 'project-2',
    name: 'Telemedicine App/Platform',
    description:
      'This is a demo concert wireframe of this project.',
    tags: [
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'supabase',
        color: 'blue-text-gradient',

      },
    ],
    image: doctors,
    repo: 'https://docs.google.com/document/d/1Sn1rCFKH4cA622s4sSKLb5tyBXQT85HXFQp5jmCboWk/edit?usp=sharing',
    demo: 'https://docs.google.com/presentation/d/1eAY1Xel6nzIEClbvsz8mI-yCSTd-HNMulvH_ej_I7GY/edit?usp=sharing',
  },
  {
    id: 'project-3',
    name: 'Telemedicine App/Platform',
    description:
      'This is a demo concert wireframe of this project.',
    tags: [
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'supabase',
        color: 'blue-text-gradient',

      },
    ],
    image: doctors,
    repo: 'https://docs.google.com/document/d/1Sn1rCFKH4cA622s4sSKLb5tyBXQT85HXFQp5jmCboWk/edit?usp=sharing',
    demo: 'https://docs.google.com/presentation/d/1eAY1Xel6nzIEClbvsz8mI-yCSTd-HNMulvH_ej_I7GY/edit?usp=sharing',
  },
];

export { services, technologies, experiences, projects };


console.log("text")