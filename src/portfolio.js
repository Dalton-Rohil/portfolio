/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Dalton.",
  logo_name: "< daLton />",
  full_name: "C R Dalton Rohil ",
  subTitle:
    "A Data Scientist, Open Source Enthusiast,Python Developer and Life Long Learner.",

  /*resumeLink:
    "https://drive.google.com/file/d/1G35vr0A7eVH7pC2s4tvUbbYq1OVyuYxO/view?usp=sharing", */

  mail: "mailto:daltonrohil@icloud.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Dalton-Rohil",
  linkedin: "https://www.linkedin.com/in/daltonrohil/",
  instagram: "https://www.instagram.com/dalton_rohil_46/?hl=en",
  twitter: "https://twitter.com/daltonrohil",
  discord: "#",
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Turning dirty and unstructured data from different source into ready to use data for analytics and data science",
        "⚡ Extract insights and automate intelligent decision-making from business data, and other available sources",
        "⚡ Creating dashboards and visualizations to present data in a clear and understandable way",
        "⚡ Building Machine Learning and Deep Learning models for different use cases",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        //{
        //  skillName: "PyTorch",
        //  fontAwesomeClassname: "logos-pytorch",
        //  style: {
        //    backgroundColor: "transparent",
        //  },
        //},
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
       
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#trasparent",
          },
        },
        {
          skillName: "TableaU",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#trasparent",
          },
        },
        {
          /* skillName: "R",
           fontAwesomeClassname: "logos:r-lang",
           style: {
             backgroundColor: "transparent",
           },*/
         },
         
          /* skillName: "Apache Spark",
           fontAwesomeClassname: "cib:apache-spark",
           style: {
             color: "#e35a16",
           },
         },*/
      ],
    },

   /* {
      title: "Back-End Development",
      fileName: "FullStackImg",
      skills: [
        // "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Creating application backend in Spring Boot and Django",
        "⚡ Integration of third party services such as AWS and GCP",
        "⚡ Building basic responsive website front-end using ReactJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6db33f",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        //{
        //  skillName: "Angular",
        //  fontAwesomeClassname: "logos:angular-icon",
        //  style: {
        //    color: "transparent",
        //  },
        //},
      ],
    }, */
    {
      title: "Cloud ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ I deploy models using Heroku.",
        "⚡ Currently pursuing MLOps.",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
           /*skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },*/
        },
        {
          /*skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          }, */
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Visvesvaraya Technological University",
      title_url: "https://vtu.ac.in/",
      subtitle: "Bachelors in Mechanical Engineering",
      logo_path: "vtu_logo2.png",
      alt_name: "VTU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have learned to design, develop, build and test mechanical devices, such as engines, machines and tools and I have used principles of mechanics, thermodynamics, etc to solve wide range of problems.",
        "⚡ Apart from this, I have done certifications in Engine Assembly, CFD, and have experience in CADD software to create and analyze designs.",
        "⚡ I have worked closely with other engineers and technical specialists to gain knowledge and experience in successful development and operation of products. ",
      ],
      website_link: "http://www.ijlera.com/vol5-iss8.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Scientist",
      subtitle: "- ExcelR Solutions",
      logo_path: "excelr.png",
      certificate_link:
        "#",
      alt_name: "ExcelR",
      color_code: "#ff425f",
    },    
    {
      title: "Tableau",
      subtitle: "- SimpliLearn",
      logo_path: "simplilearn.png",
      certificate_link:
        "#",
      alt_name: "SimpliLearn",
      color_code: "#ff425f",
    },
    {
      title: "Text Analytics",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.excelr.skillsnetwork.site/certificates/781ba91e0ff849b29a4d9e0a79eae278",
      alt_name: "IBM",
      color_code: "#ff425f",
    },
    {
      title: "Python Programmer Bootcamp",
      subtitle: "- 365 Data Science",
      logo_path: "365 DS.jpeg",
      certificate_link:
        "https://learn.365datascience.com/certificates/CC-DB67E7475B/",
      alt_name: "365 Data Science",
      color_code: "#ff425f",
    },
    {
      title: "Advanced Excel",
      subtitle: "- 365 Data Science",
      logo_path: "365 DS.jpeg",
      certificate_link:
        "https://learn.365datascience.com/certificates/CC-0C6514AD67/",
      alt_name: "365 Data Science",
      color_code: "#ff425f",
    },
   /* {
      title: "Data Visualization with Tableau",
      subtitle: "- Govind Acharya",
      logo_path: "davies_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/F5QADYZBSHKH",
      alt_name: "UC Davis",
      color_code: "#2A73CC",
    },
    {
      title: "Excel Skills for Business",
      subtitle: "- Yvonne Breyer",
      logo_path: "mac_logo.png",
      certificate_link:
        "https://coursera.org/verify/specialization/KYVP3CDUHY3Y",
      alt_name: "Macquarie University",
      color_code: "#789aa3",
    },
    {
      title: "Statistics and R",
      subtitle: "- Rafael Irizarry",
      logo_path: "harvard_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/2ee363c332774b4b84b611fcb0d2dff2",
      alt_name: "HarvardX",
      color_code: "#8C151599",
    },
    {
      title: "SQL applied in data science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/564800b033ed4b429d07b8b0e7715b70",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "- SCRUMstudy",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=902897",
      alt_name: "SCRUMstudy",
      color_code: "#dbdce0",
    },
    {
      title: "M320: Data Modeling",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/dca1c357-d34d-44a8-92e9-f8021adc0fec",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M103: Basic Cluster Administration",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/5cdd8a7d-24c6-494c-8fca-a977a45dc503",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "M220P: MongoDB for Python Davelopers",
      subtitle: "- Mark Porter",
      logo_path: "mongo_logo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/4c715948-8819-4d29-b51f-ad685946b2e7",
      alt_name: "MongoDB University",
      color_code: "#66c29b",
    },
    {
      title: "Building Modern Python Applications on AWS",
      subtitle: "- Morgan Willis",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://coursera.org/verify/AGEM9QKD3CKD",
      alt_name: "AWS",
      color_code: "#dbdce0",
    },
    {
      title: "Machine Learning with Python from Linear Models to Deep Learning",
      subtitle: "- Regina Barzilay",
      logo_path: "mitx_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/c60b48a05a87439a80c9c2592e19695c",
      alt_name: "MITx",
      color_code: "#8C151599",
    },*/


    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Working as a Data Scientist",
  description:
    " I have worked with companies and a research group as Data Scientist. I have also worked as a freelancer to improve my skills and gain experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data scientist",
          company: "Suzlon",
          company_url: "https://www.suzlon.com/",
          logo_path: "suzlon3.jpg",
          duration: "Sep 2022 - Present",
          location: "Pune, India",
          description: "Currently working on data science lifecycle automation and failure predictions for WTG components simultaneously. leading the smart workbench project, too. Additionally, developing the necessary abilities. participating in predictive and prescriptive analyses, as well as managing several projects. Using the necessary technologies, core data analysis and data visualisation are performed on the incoming raw data.",
          color: "#0071C5",
        },
       /* {
          title: "Data scientist",
          company: "Ingetel ingenieria en telecomunicaciones S.A.S.",
          company_url: "https://www.linkedin.com/company/ingetel/",
          logo_path: "ingetel.png",
          duration: "Jul 2020 - Nov 2021",
          location: "Cali- Valle del Cauca, Colombia",
          description: "Design and develop different Back‐end modules of the company website using Spring Boot, AWS and MongoDB. Use Python and TableaU to analyze and visualize accounting data. Also, analyze the factors that increase the mobile antenna installation price in the different departments of Colombia. Create a supervised learning model to predict the cost of installing mobile antennas in the different departments of Colombia.",
          color: "#ee3c26",
        }, */
      ],
    },
   /* {
      title: "Research",
      experiences: [
        {
          title: "Machine learning developer",
          company: "IEEE ComSoc Unicauca",
          company_url: "http://portal.unicauca.edu.co/portaleningles/news/comsocauca-research-seedbed-consolidated-dissemination-advances-telecommunications",
          logo_path: "comsoc.png",
          duration: "Oct 2021 - Jul 2022",
          location: "Popayán-Cauca, Colombia",
          description:
            "Wrote Python scripts to create datasets from real Internet traffic measurements. Then perform an exploratory analysis of the datasets. Create an application based on Random Forest (RF) to classify Internet traffic, and employ feature engineering, Machine Learning modelling and tuning techniques. Use the P4 language to deploy the RF‐based application in the data plane of an SDN network. Also, I generated, synthesized and documented knowledge related to the new P4 programming language for the research line in advanced telecommunications services.",
          color: "#ee3c26",
        },
      ],
    }, */
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",  
          company: "iNeuron.ai",
          company_url: "https://ineuron.ai/",
          logo_path: "ineuron3.png",
          duration: "Jan 2022 - June 2022",
          location: "Work From Home",
          description:
            "building projects from start to finish using a variety of tools and applications. acquiring knowledge in web scraping, data analysis, and other value-added abilities.(Discontinued while taking full time job.)",
          color: "#4285F4",
        },
        {
          title: "Data Science Intern",  
          company: "Innodatatics",
          company_url: "https://innodatatics.ai/",
          logo_path: "innologo2.png",
          duration: "Mar 2021 - July 2021",
          location: "Work From Home",
          description: 
            `Projects: 1) Health Insurance Fraud Detection
                       2)Topic Modeling,`,
                       
           color: "#4285F4",
        },
        {
          title: "Internship Trainee",  
          company: "Bosch India ",
          company_url: "https://www.bosch.in/",
          logo_path: "bosch.jpg",
          duration: "Jan 2020 - Feb 2020",
          location: "Onsite",
          description:
            "Internship was completely focused on Design and Manufacturing of the spark plug. I worked in and observed the process of assembling spark plug from scratch, Along side the entire procedure and participated in the testing process of the transformers. A time schedule of the activities during my internship was given.",
          color: "#4285F4",
        },
        {
          title: "Internship Trainee",  
          company: "Hindustan Aeronautics Limited  ",
          company_url: "https://hal-india.co.in/",
          logo_path: "hal.jpeg",
          duration: "Jul 2019 - July 2019",
          location: "Onsite",
          description:
            "Worked as an Intern trainee in the ARDC wing at HAL for a period of 30 days, I learnt about aerospace, designing of wings and tails, the fuelling system of aircrafts, the electrical and electronic system comprising in it. I also learnt various concepts and complications about management like financing, market surveying, marketing etc..",
          color: "#4285F4",
        },
        
      ],
      
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I work on both individual and group projects, using the provided data set, data gathered from the resources available, as well as web scraping. Developing data science projects with practical insights and visualisations, then putting them on various web applications or tools accessible, has been my finest experience.",
  avatar_image_path: "projects_image.svg",
};
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dalton_2.jpg",
    description:
      "You can contact me with the below mentioned platforms. I will try to revert back ASAP. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something new, I do try to document it so it can be helpful to others.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "FIFA-2022-Prediction",
      url: "https://github.com/Dalton-Rohil/FIFA-2022-Predictions",
      description:
        "This project aims to predict the results of the QATAR 2022 World Cup from the international matches held since the 90s, the qualifications of the teams in their last matches, and the potential of each team.",
      languages: [
        {
        /*  name: "P4",
          iconifyClass: "file-icons:p4",
          style: {
            color: "#8cc43e",
          }, */
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
    {
      id: "1",
      name: "Coding-round",
      url: "https://github.com/Dalton-Rohil/Coding-round",
      description:
        "Did this project for the coding round of the job.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          
         /* name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          }, */
          
        },
        {
         /* name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        */ }, 
      ], 
    },
    {
      id: "2",
      name: "Text-Classification-NLP",
      url: "https://github.com/Dalton-Rohil/Text-Classification-NLP-Topic_modelling",
      description:
        "To automate the text classification process (real time) based on user input to identify the category a content belongs.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
       /*   name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        */  },
        {
      /*    name: "Selenium",
          iconifyClass: "logos:selenium",
        */  },
      ],
    },
    {
      id: "3",
      name: "Health_insurance_Fraud",
      url: "https://github.com/Dalton-Rohil/Health_insurance_Fraud",
      description:
        "Objective Insurance frauds cover the range of improper activities which an individual may commit in order to achieve a favorable outcome from the insurance company.",
        languages: [
          {
            name: "Jupyter Notebook",
            iconifyClass: "logos-jupyter",
          },
          {
            name: "Scikit-Learn",
            iconifyClass: "simple-icons:scikitlearn",
            style: {
              color: "#fb9c35",
            },
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            
           /* name: "Tensorflow",
            iconifyClass: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            }, */
            
          },
          {
           /* name: "Seaborn",
            iconifyClass: "logos:seaborn-icon",
          */ }, 
        ], 
      },
    {
      id: "4",
      name: "Customer-Segmentation",
      url: "https://github.com/Dalton-Rohil/Customer-Segmentation", 
      description: "In this , customer segmentation problem from a behavioural aspect with the customer groups, Annual income, Spending scores. Use of 3 features helped us with the understandability and visualization of the model.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          
         /* name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          }, */
          
        },
        {
         /* name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        */ }, 
      ], 
    },
    {
      id: "5",
      name: "Fake-News-Prediction",
      url: "https://github.com/Dalton-Rohil/Fake-News-Prediction",
      description:
        "A DS project based on python to predict the given news article is fake or real.",
        languages: [
          {
            name: "Jupyter Notebook",
            iconifyClass: "logos-jupyter",
          },
          {
            name: "Scikit-Learn",
            iconifyClass: "simple-icons:scikitlearn",
            style: {
              color: "#fb9c35",
            },
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            
           /* name: "Tensorflow",
            iconifyClass: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            }, */
            
          },
          {
           /* name: "Seaborn",
            iconifyClass: "logos:seaborn-icon",
          */ }, 
        ], 
      },
    {
      id: "6",
      name: "Routing elephants with RL",
      url: "https://github.com/davidcamilo0710/Routing_Reinforcement_Learning",
      description:
        "Reinforcement Learning (RL)-based routing algorithm for SDN networks created from scratch using Python.",
        languages: [
          {
            name: "Jupyter Notebook",
            iconifyClass: "logos-jupyter",
          },
          {
            name: "Scikit-Learn",
            iconifyClass: "simple-icons:scikitlearn",
            style: {
              color: "#fb9c35",
            },
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            
           /* name: "Tensorflow",
            iconifyClass: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            }, */
            
          },
          {
           /* name: "Seaborn",
            iconifyClass: "logos:seaborn-icon",
          */ }, 
        ], 
      },
    {
      id: "7",
      name: "Credit-Card-Fraud-Detection",
      url: "https://github.com/Dalton-Rohil/Credit-Card-Fraud-Detection",
      description: "Credit Card Fraud Detection Throughout the financial sector, machine learning algorithms are being developed to detect fraudulent transactions.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          
         /* name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          }, */
          
        },
        {
         /* name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        */ }, 
      ], 
    },
  /* {
     id: "8",
      name: "Responsive Data Viz Dashboard",
      url: "https://public.tableau.com/app/profile/david.camilo.mu.oz.garcia/viz/CreatingaDashboardSuperStore/KPIDashboard",
      description:
        "A beautiful and minimalist dashboard in Tableau, which allows to modify parameters to analyze the profit in sales data.",
        languages: [
          {
            name: "Jupyter Notebook",
            iconifyClass: "logos-jupyter",
          },
          {
            name: "Scikit-Learn",
            iconifyClass: "simple-icons:scikitlearn",
            style: {
              color: "#fb9c35",
            },
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            
           /* name: "Tensorflow",
            iconifyClass: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            }, */
            
      //       }, 
        //  {
       //    /* name: "Seaborn",
       //     iconifyClass: "logos:seaborn-icon",
        //  */ }, 
     //   ], 
     //   }, */
/*    {
      id: "9",
      name: "IBM -- Winning space race",
      url: "https://github.com/davidcamilo0710/Applied_Data_Science_Capstone",
      description:
        "Data science project that includes data collection (web-scrapping), EDA, visualization, and ML. Also, SQL and Folium library.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Folium",
          iconifyClass: "simple-icons:folium",
          style: {
            color: "#08fe00",
          },
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
     },
    */   ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  projects,
};
