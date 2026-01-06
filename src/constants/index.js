import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  nextjs,
  nodejs,
  cpp,
  bootstrap,
  kubernetes,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  selfdrivecar,
  M25,
  movierecommend,
  spring,
  clang
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "clang",
    icon: clang,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "ReallyBrief",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Responsible for spearheading the design and development of engaging and responsive web pages.",
      "Integrating AI functionalities, delivering innovative solutions to address complex challenges",
      "Creating and maintaining backend components, including designing and developing APIs.",
      "Managing databases to ensure seamless data flow and optimal system performance.",
      "Technologies Used:- Next.js, nextjs CSS, Node.js, cpp.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Translated Figma designs into fully functional websites, specializing in frontend development.",
      "Designed and implemented numerous landing pages with a focus on user experience and conversion optimization.",
      "Created websites for AI-based applications, showcasing an understanding of integrating AI technologies into frontend design.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Felvin",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [];

const projects = [
  {
    name: "Self drivinng car",
    description:
      "Developed self-driving car project with JavaScript, HTML, CSS, and neural networks, achieving 60% efficiency gain.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Neural Network",
        color: "blue-text-gradient",
      },
    ],
    image: selfdrivecar,
    source_code_link: "https://github.com/PARAGDADHICH/Self_Driving_Car-",
  },
  {
    name: "M25 CANTEEN",
    description:
      "Developed a full-stack canteen web app with roles for Admin, User, and Delivery Person, featuring real-time order tracking.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: M25,
    source_code_link: "https://github.com/PARAGDADHICH/CANTEEN-M25",
  },
  {
    name: "Movie Recommendation",
    description:
      "Developed personalized movie recommendations with ML algorithms, enhancing user interaction using Python.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
    ],
    image: movierecommend,
    source_code_link:
      "https://the1one1-movie-recommendation-system-app-cyp0vo.streamlit.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
