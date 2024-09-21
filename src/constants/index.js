import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://github.com/Nithinlinga/eCommerce-Product-Showcase-Using-MERN-Stack",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Bootstrap"],
  },
  {
    title: "Student Result Management System",
    image: project2,
    link:"http://studentresults.iceiy.com/",
    description:
      "An application which mainly aimed for administration, faculties and the students at the University. The adm inistration is responsible for overseeing different areas of the university, such as managing student marks and grades records and academic results.",
    technologies: ["HTML", "CSS", "JavaScript", "MySql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:"https://nithinlinga.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-Motion"],
  },
  {
    title: "Shopping Cart",
    image: project4,
    link:"https://shoppingcart8868.netlify.app/",
    description:
      "A platform for showcasing the products. It is a responsive website which is developed using react and redux",
    technologies: ["HTML", "CSS", "React", "Express", "Redux"],
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana",
  phoneNo: "+91 8790468868 ",
  email: "nithinlinga2@gmail.com",
};
