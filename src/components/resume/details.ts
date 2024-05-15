export default {
  header: {
    name: "Tyler Pitcher",
    email: "tyler.pitcher15@gmail.com",
    phone: "(905) 995-0106",
    github: "https://github.com/tylerpitcher"
  },
  summary: () => {
    const currentDate = new Date();
    const jul2024 = new Date("2024-07-01");
    const diff = (currentDate.getFullYear() - jul2024.getFullYear()) * 12 + (currentDate.getMonth() - jul2024.getMonth());
    const months = 16 + Math.max(diff, 0);

    return `
      Queen\'s University graduate with an eye for detail and a passion for development software. 
      ${months} months of experience supporting Java and Python microservices. 
      Driven to provide solutions and tackle challenges.
    `;
  },
  experiences: [
    {
      company: "Intact Insurance",
      position: "Intern Developer",
      timeline: "May 2022 - Aug 2023",
      points: [
        "Multifaceted DevOps role supporting developer and test automation teams.",
        "Supported internal application for service monitoring and metrics.",
        "Developed features with NextJs, Material UI, Python, Redis, MongoDB, and APIs.",
        "Cracked down on vulnerabilities within Java-based microservices.",
        "Deployed services with Jenkins pipelines, monitored OpenShift."
      ],
    }
  ],
  projects: [
    {
      title: "Video Conferencing Platform",
      description: "Developed a video conferencing platform using GraphQL, Docker, Redis, and Express.",
      github: "https://github.com/tylerpitcher/live-link",
      demo: "https://tylerpitcher.com/livelink",
    },
    {
      title: "Replicar",
      description: "Built an online shopping application with Next.js, Three.js, Stripe, and MongoDB.",
      github: "https://github.com/tylerpitcher/shopping-cart",
      demo: "https://tylerpitcher.com/replicar",
    }
  ],
  education: {
    institution: "Queen's University",
    dateGraduated: "May 2024",
    degree: `Bachelor of Computing (Honours), \nComputer Science`,
    courses: [
      "Fundamental Web Development",
      "Database Management Systems",
      "Software Quality Assurance",
      "Cryptography",
      "Data Structures",
      "Algorithms I"
    ],
  },
};