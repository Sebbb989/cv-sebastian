import type { ICertification, IEducation, IExperience, ILanguage, IPersonalInfo, IProject, ISkill, IVolunteer } from "cv-astro";

const info: IPersonalInfo = {
  name: "Sebastian Gutierrez",
  title: "Full Stack Developer",
  email: "sebbb989@gmail.com",
  phone: "+507 63214872",
  linkedin: "sebastian-gutierrez-19a0a91aa",
  github: "Sebbb989",
  address: "West Panama, Panama",
  addressUrl: "https://www.google.com/maps/place/la+chorrera/data=!4m2!3m1!1s0x8fac99d32c9d1cd1:0xb475a52535c71ad0?sa=X&ved=1t:155783&ictx=111",
  timezone: "EST (UTC-5)",
  summary: 'Passionate Full-stack Developer with extensive experience in creating dynamic, high-performance web applications. Skilled in a variety of programming languages and tools, with a strong focus on user experience and efficient coding practices. Adept at working in fast-paced environments and delivering projects on time. Committed to continuous learning and adopting new technologies.',
  image: "images/sebas.jpg",
};

const experience: Array<IExperience> = [
  {
    company: {
      name: "Gotuuri S.A",
      url: "https://www.gotuuri.com/",
      city: "Panama City",
      country: "Panama",
      remarks: "An innovative startup focused on developing cutting-edge Tourism solutions.",
    },
    current: true,
    positions: [
      {
        title: "Junior Full Stack / Mobile Developer",
        startDate: "2023-01",
        description: "Contributing the development and maintenance of various web applications and mobile app.",
        tasks: [
          {
            description: "Developed and maintained a web app on ReactJS w/Typescript.",
            output: "Full refactor of a previous web app on VueJS, New features, fixed bugs, resolved technical debt."
          },
          {
            description: "Developed and maintained a web app on VueJS.",
            output: "New Features, mostly fixing technical debt."
          },
          {
            description: "Maintained a web app on Handlebars JS. (working as cms for the web and mobile app)",
            output: "Creating new dashbord views usefull for company information, also in charge of managing all data displayed in other proyects."
          },
          {
            description: "Developed and maintained a rest API on NodeJS w/Express.",
            output: "Endpoints, internal controllers, integration with services like 3DS and paywall from Cybersource."
          },
          {
            description: "Developed and mantained mobile app on Flutter",
            output: "Developing pages, fragments, widgets, while abstracting logic to controllers."
          },
        ],
        // projects: [
        //   {
        //     name: "Enterprise Resource Planning System",
        //     description: "Developed a comprehensive ERP system for internal use.",
        //     technologies: ["JavaScript", "Python", "React"]
        //   },
        //   {
        //     name: "Customer Relationship Management Tool",
        //     description: "Implemented a CRM tool to enhance customer engagement.",
        //     technologies: ["Vue.js", "Node.js", "MongoDB"]
        //   },
        //   {
        //     name: "E-commerce Platform",
        //     description: "Built a scalable e-commerce platform supporting thousands of transactions daily.",
        //     technologies: ["Angular", "Django", "PostgreSQL"]
        //   },
        // ],
      }
    ],
  },
];

const projects: IProject[] = [
  // {
  //   name: "E-Shop",
  //   url: "https://eshop.com/",
  //   description: "An e-commerce application designed for small businesses to set up their online stores effortlessly.",
  //   technologies: ["Vue.js", "Firebase", "Vuetify", "Stripe API"],
  // },
  // {
  //   name: "TaskManager",
  //   url: "https://taskmanager.com/",
  //   description: "A task management tool providing teams with the ability to track progress on various projects.",
  //   technologies: ["Angular", "Spring Boot", "MySQL", "JWT"],
  // },
  // {
  //   name: "HealthTracker",
  //   url: "https://healthtracker.com/",
  //   description: "A health and fitness application that allows users to track their diet, exercise, and wellness goals.",
  //   technologies: ["React Native", "Node.js", "Express", "MongoDB"],
  // },
  // {
  //   name: "Blogify",
  //   url: "https://blogify.com/",
  //   description: "A blogging platform where users can create, publish, and share their content with a wide audience.",
  //   technologies: ["Gatsby", "GraphQL", "Strapi", "Tailwind CSS"],
  // },
  // {
  //   name: "RecipeFinder",
  //   url: "https://recipefinder.com/",
  //   description: "A web app for finding recipes based on ingredients you have, focusing on reducing food waste.",
  //   technologies: ["Svelte", "Django", "PostgreSQL", "Docker"],
  // },
  // {
  //   name: "PortfolioBuilder",
  //   url: "https://portfoliobuilder.com/",
  //   description: "An online tool that assists professionals in creating their own portfolio websites quickly and easily.",
  //   technologies: ["Next.js", "Tailwind CSS", "Vercel", "Contentful"],
  // },
  // {
  //   name: "WeatherNow",
  //   url: "https://weathernow.com/",
  //   description: "A weather forecasting application providing real-time weather updates and alerts.",
  //   technologies: ["Flutter", "Dart", "Firebase", "OpenWeatherMap API"],
  // },
  // {
  //   name: "TravelBuddy",
  //   url: "https://travelbuddy.com/",
  //   description: "A travel planning application that offers personalized itinerary suggestions and booking services.",
  //   technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  // }
];


const volunteering: Array<IVolunteer> = [
  {
    organization: {
      name: "Fundader",
      url: "https://campus.fundader.org",
      country: "Panama",
      remarks: "Courses for people in hardship."
    },
    isActiveMember: false,
    positions: [
      {
        title: "Professor",
        startDate: "2023-01",
        endDate: "2024-01",
      },
    ],
    tasks: [
      "Contributed to various courses.",
      "Taught people on a range of 12 years and older.",
      "Courses of reparation, mantaiment and assembly of personal computers."
    ]
  },
];

const education: Array<IEducation> = [
  {
    institution: {
      name: "Technological University of Panama",
      remarks: "Top-ranked university known for its technological programs.",
      city: "Panama City",
      country: "Panama",
      url: "https://utp.ac.pa"
    },
    degree: "Bachelor in software development.",
    startDate: "2020-01",
    endDate: "2024-05",
    achievements: [
      "2.42/3.0 index.",
    ]
  },
];

const certifications: Array<ICertification> = [
  // {
  //   authority: "Linux Foundation",
  //   name: "Linux Foundation Certified System Administrator",
  //   code: "LFCS",
  //   description: "Certified in Linux administration and engineering at the enterprise level.",
  //   license: "LFCS-1234",
  //   issueDate: "2023-12",
  //   image: "images/lfcs-300x300.webp",
  // },
  // {
  //   name: "AWS Certified Solutions Architect - Associate",
  //   authority: "Amazon Web Services",
  //   issueDate: "2021-03",
  //   expirationDate: "2024-03",
  //   url: "https://www.youracclaim.com/badges/12345678-1234-1234-1234-1234567890ab"
  // },
];

const languages: Array<ILanguage> = [
  {
    name: "🇪🇸 Spanish",
    proficiency: "Native"
  },
  {
    name: "🇺🇸 English",
    proficiency: "Professional"
  },
  {
    name: "🇩🇪 German",
    proficiency: "Basic"
  },
];

const skills: Array<ISkill> = [
  {
    name: "JavaScript",
    proficiency: 5
  },
  {
    name: "TypeScript",
    proficiency: 5
  },
  {
    name: "Node.js",
    proficiency: 5
  },
  {
    name: "React",
    proficiency: 5
  },
  {
    name: "Vue",
    proficiency: 5
  },
  {
    name: "Next.js",
    proficiency: 2
  },
  {
    name: "MongoDB",
    proficiency: 4
  },
  {
    name: "Flutter",
    proficiency: 4
  },
  {
    name: "Git",
    proficiency: 5
  },
  {
    name: "HTML",
    proficiency: 5
  },
  {
    name: "CSS",
    proficiency: 5
  },
  {
    name: "Tailwind CSS",
    proficiency: 5
  },
  {
    name: "Bootstrap",
    proficiency: 5
  },
];

const interests: Array<string> = [
  "🏃 Running",
  "🏋️‍♂️ Weightlifting",
  "🧘‍♂️ Meditation",
  "📚 Reading",
  "🎮 Video Games",
  "🎲 Board Games",
  "🎧 Music",
  "🎸 Guitar",
  "🎹 Piano",
  "🎤 Singing",
  "🎥 Movies",
  "📺 TV Shows",
  "📷 Photography",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
];


export default {
	info,
	experience,
	projects,
	volunteering,
	education,
	certifications,
	skills,
  languages
};