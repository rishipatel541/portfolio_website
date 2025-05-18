import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rishi Patel",
  title: "Hi all, I'm Rishi",
  subTitle: emoji(
    "A passionate Full Stack Developer with experience in building Web applications using JavaScript, React, Node.js, and more."
  ),
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_LINK/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/rishipatel541",
  linkedin: "https://www.linkedin.com/in/rishi-patel-aa6a94252/",
  gmail: "21dit059@charusat.edu.in",
  facebook: "https://www.facebook.com/profile.php?id=100061848038232",
  medium: "https://medium.com/@rishipatel0",
  stackoverflow: "https://stackoverflow.com/users/25118568/rishi-patel",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR WEB TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces"),
    emoji("⚡ Progressive Web Applications (PWA)"),
    emoji("⚡ Integration of third-party services such as AWS")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Charotar University of Science and Technology",
      logo: require("./assets/images/charusatLogo.png"), // Add your university logo
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2021 - 2025",
      desc: "Participated in various projects and research activities.",
      descBullets: [
        "Developed multiple web applications",
        "Active participant in coding competitions"
      ]
    },
    {
      schoolName: "Bai Avabai High School",
      logo: require("./assets/images/baiAvabaiLogo.png"), // Add your school logo
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "2019 - 2021",
      desc: "Completed high school with a focus on science and mathematics.",
      descBullets: ["Achieved 80% in HSC"]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Programming", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work Experiences
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer Intern",
      company: "Iconicus Software Pvt. Ltd.",
      companylogo: require("./assets/images/iconicusLogo.png"), // Add company logo
      date: "May 2023 – June 2023",
      desc: "Developed an E-Commerce Website using MERN stack and responsive Front-end web applications using Figma, Tailwind, and CSS."
    },
    {
      role: "Undergraduate Student Fellow",
      company: "Charotar University of Science and Technology",
      companylogo: require("./assets/images/charusatLogo.png"), // Add university logo
      date: "Jan 2024 – June 2024",
      desc: "Contributed to the development, update, and testing of the university website."
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/backspinLogo.webp"), // Add project image
      projectName: "BackSpin",
      projectDesc: "An E-commerce website specific to Table Tennis products using MERN stack technology.",
      footerLink: [
        { name: "Visit Website", url: "http://backspin.com/" }
      ]
    },
    {
      image: require("./assets/images/skillTradeLogo.webp"), // Add project image
      projectName: "Skill Trade",
      projectDesc: "A platform to help students learn new skills and teach others.",
      footerLink: [
        { name: "Visit Website", url: "http://skilltrade.com/" }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Completed AWS Cloud Practitioner Certification.",
      image: require("./assets/images/awsLogo.webp"), // Add certification logo
      imageAlt: "AWS Logo",
      footerLink: [
        { name: "Certification", url: "YOUR_CERTIFICATION_LINK" }
      ]
    },
    {
      title: "Google UI/UX Design",
      subtitle: "Completed Google UI/UX Design Certification.",
      image: require("./assets/images/googleLogo.webp"), // Add certification logo
      imageAlt: "Google Logo",
      footerLink: [
        { name: "Certification", url: "YOUR_CERTIFICATION_LINK" }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and teach others what I have learned.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "YOUR_BLOG_URL",
      title: "YOUR_BLOG_TITLE",
      description: "YOUR_BLOG_DESCRIPTION"
    }
  ],
  display: true
};

// Talks Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE"),
  talks: [
    {
      title: "Web Development Workshop",
      subtitle: "Workshop at University",
      slides_url: "YOUR_SLIDES_URL",
      event_url: "YOUR_EVENT_URL"
    }
  ],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",
  podcast: ["YOUR_PODCAST_LINK"],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-XXXXXXXXXX",
  email_address: "21dit059@charusat.edu.in"
};

// Twitter Section
const twitterDetails = {
  userName: "rishipatel541",
  display: true
};

// Hireable Status
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
