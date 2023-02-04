/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Stephen Borutta",
  title: "Hi all, I'm Stephen",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12RhOvr6srPp-F0pDK3qeytMLKkLbaugJ/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SteviBee",
  linkedin: "https://www.linkedin.com/in/stephen-borutta-68746971/",
  gmail: "stephen.boruta.dev@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer | Data Analyst | Javascript | Python | SQL",
  skills: [
    emoji(
      "⚡ Develop full stack web and mobile applications"
    ),
    emoji("⚡ Good verbal and written communication skills, and strong attention to detail and testing"),
    emoji(
      "⚡ Experience with software development workflows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fa-solid fa-book"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Springboard Software Engineering Career Track",
      logo: require("./assets/images/springboard-logo-dark@2x.jpeg"),
      subHeader: "Certification",
      duration: "August 2021 - July 2022",
      desc: "9-month intensive course in Software Engineering methodologies and technologies.",
      descBullets: [
        "I created a Developer's Carbon Emission Calculator Application",
        "I created and started a Professional Brewer Educational Courses Application",
        "Mastered skills in front-end web development, back-end web development, databases, and data structures and algorithms.",
      ]
    },
    {
      schoolName: "Learn Python the Hard Way",
      logo: require("./assets/images/lpthwLogo.jpeg"),
      subHeader: "Hands on online Python course. I did every extended education project.",
      duration: "January 2017 - December 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems",
      descBullets: [
        "Created fullstack applications", 
        "Focused on syntax and understanding code patterns",
      ]
    },
    {
      schoolName: "Hendrix College",
      logo: require("./assets/images/hendrixLogo.jpeg"),
      subHeader: "Bachelor of Arts in Chemistry",
      duration: "May 2009 - May 2013",
      desc: "Minored in Physics",
      descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst & Supervisor",
      company: "Intralox",
      companylogo: require("./assets/images/intraloxLogo.jpeg"),
      date: "August 2021 – Present",
      desc: "Create custom KPI reports, dashboards, and analyze data. Responsible for a team of 55 employees that create custom plastic modular belts with industrial machining. Lead continuous improvement / Kanban / Scrum projects.",
      descBullets: [
        "Create custom SQL and Python dashboards",
        "Use custom python scripts to analyze 8000 SKUs and identify our top losses",
        "Led process improvement teams that reduced our top 30 SKU losses by 40%",
        "Help optimize entreprise data managment systems"
      ]
    },
    {
      role: "Springboard Software Engineering Career",
      company: "Springboard",
      companylogo: require("./assets/images/springboard-logo-dark@2x.jpeg"),
      date: "August 2021 - July 2022",
      desc: "9-month intensive course in Software Engineering methodologies and technologies.",
      descBullets: [
        "I created a Developer's Carbon Emission Calculator Application",
        "I created and started a Professional Brewer Educational Courses Application",
        "Mastered skills in front-end web development, back-end web development, databases, and data structures and algorithms.",
      ] 
    },
    {
      role: "Director Of Brewing Operations",
      company: "Faubourg Brewery",
      companylogo: require("./assets/images/beerLogo.jpeg"),
      date: "September 2019 – July 2021 ",
      desc: "Commissioned and responsible for all people and production for a top-100 brewery-by-volume. Ekos.",
      descBullets: [
        "Responsible for creating a custom cleaning software for a 100-bbl brewhouse",
        "Finished designing and commissioned a 20-million dollar production brewery with multiple sets of custom equipment",
        "Created and scaled up 15 recipes to full production release",
        "Responsible for all quality, produciton, equipment, and day-to-day operations"
      ]
    },
    {
      role: "Optimization Engineer",
      company: "MillerCoors",
      companylogo: require("./assets/images/CoorsLogo.jpeg"),
      date: "July 2015 – September 2019",
      desc: "Managed operations of the brewing process for 35 personnel, led projects, and optimized. Enterprise ERP",
      descBullets: [
        "Lead a cross department focused improvement team of software engineers responsible for 80 million gallons of water saved in 2018, doubling hygiene results, and increasing equipment efficency",
        "Saved over $400,000 in electrical cost in 2019 through to energy efficiency initiatives",
        "Commissioned a software program for the CIP of 8 external wort heat exchanger for a 10 million HL brew house",
        "Optimized enterpise level data management and control systems"
      ]
    },
    {
      role: "Freelance",
      company: "Freelance",
      companylogo: require("./assets/images/githubLogo.png"),
      date: "September 2018 - September 2020",
      desc: "Used Express, Javascript, CSS / HTML, Pug, OpendotaAPI to develop a data-driven video game training website. Made custom Wix / Wordpress sites",
      descBullets: [
        "Created custom landing pages, and website for personal use and businesses",
        "Responsible for creating a enterprise content management system for a ad agency"
      ]
    
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A few open source and personal projects.",
  projects: [
    {
      image: require("./assets/images/lipsLogo.svg"),
      projectName: "LIPS is poweful Scheme based lisp interpreter written in JavaScript.",
      projectDesc: "It is based on the Scheme dialect and the R5RS/R7RS specifications. It has extensions to make it easier to interact with JavaScript. It work both in the browser and with Node.js. I contributed to this project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lips.js.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/joblyLogo.png"),
      projectName: "React / JSON API for Employee-Company Job Application",
      projectDesc: "Created a pure JSON API app that uses a deployed database and relationships between open jobs at different companies and employees application to display data. Created a React, SPA, front end for it.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-jobly-stevibee.surge.sh/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/devCarbonLogo.webp"),
      projectName: "Developer's Carbon Emission Calculator with React, Node, Express",
      projectDesc: "To create an application that calculates how much CO2e emission are created from difference CPU loads for a given application in order to help provide actions to take to reduce these emissions Result: A calculator able to take users inputs and give an accurate CO2e emissions for developers to use.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/SteviBee/dev-carbon-footprint-frontend"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/probrewerLogo.ico"),
      projectName: "Professional Brewer Educational Courses Application",
      projectDesc: "Built a full stack web app that provides brewing educational courses to users with full CRUD capabilities for user profiles, utilized an external graphical API, and provided feedback, resources, and tracking during the courses. It is currently deployed.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/SteviBee/probrewer_ed_app "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "2022 Digital Ocean Hackathon Participant",
      subtitle:
        "Completed contributions to four open source projects",
      image: require("./assets/images/githubLogo.png"),
      imageAlt: "Github",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/SteviBee"
        },
      ]
    },
    {
      title: "Web3 Finalist for Hackathon",
      subtitle:
        "Created a environmentally focused NFT for launch to support coastal restoration in LA",
      image: require("./assets/images/wwLogo.svg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Visit Landing Page",
          url: "https://waterwatchers.us/"
        },
        {
          name: "Visit Event Page",
          url: "https://web3pitchevent.splashthat.com/"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "stephen.borutta.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
