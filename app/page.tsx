"use client";

import Header from "./components/header";
import Navbar from "./components/navbar";

import AboutMe from "./components/about-me";
import ContactForm from "./components/contact-form";
import ExperienceContainer from "./components/experience-container";

import Projects from "./components/project";
import type { ProjectTypes } from "./types/projectTypes";
const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Decentralised Freelance Marketplace",
    description:
      "A decentralised freelance marketplace where clients can post jobs and freelancers submit bids in Ethereum to complete the job. Once a bid is accepted, a smart contract is created to securely hold the payment in escrow. When job is completed, the freelancer submits the work for approval, and upon client satisfaction, the smart contract automatically releases the payment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Cloudflare",
      "Shadcn UI",
      "Motion",
      "React Query",
      "GraphQL",
      "MoonPay",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "Ethers.js",
    ],
    projectLink: "",
    githubLink: "",
    imageUrl: null,
    videoUrl: null,
    status: "ongoing",
  },
  {
    id: 2,
    title: "Decentralised Fundraising Platform",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraisingv3.mp4",
    status: "recent",
  },
  {
    id: 3,
    title: "Luxury Holidays",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    projectLink: "https://adamskikacper.github.io/portfolio/website-luxury-holidays/index.html",
    githubLink: "https://adamskikacper.github.io/portfolio/website-luxury-holidays/index.html",
    imageUrl: "/assets/images/luxury-holidays.jpg",
    videoUrl: "/assets/videos/luxury-holidaysv2.mp4",
    status: "legacy",
  },
  {
    id: 4,
    title: "City of Manchester",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    projectLink: "https://adamskikacper.github.io/college/",
    githubLink: "https://adamskikacper.github.io/college/",
    imageUrl: "/assets/images/city-of-manchester.jpg",
    videoUrl: "/assets/videos/city-of-manchesterv2.mp4",
    status: "legacy",
  },
  {
    id: 5,
    title: "Charity Organisation",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    projectLink: "https://adamskikacper.github.io/childcare/",
    githubLink: "https://adamskikacper.github.io/childcare/",
    imageUrl: "/assets/images/charity-organisation.jpg",
    videoUrl: "/assets/videos/charity-organisationv2.mp4",
    status: "legacy",
  },
  {
    id: 6,
    title: "The United Arab Emirates",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    projectLink: "https://adamskikacper.github.io/saudiarabia/",
    githubLink: "https://adamskikacper.github.io/saudiarabia/",
    imageUrl: "/assets/images/dubai-guide.jpg",
    videoUrl: "/assets/videos/dubai-guidev2.mp4",
    status: "legacy",
  },
  {
    id: 7,
    title: "Upstairs Gallery",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    projectLink: "https://adamskikacper.github.io/berkhamsted-exhibitions/",
    githubLink: "https://adamskikacper.github.io/berkhamsted-exhibitions/",
    imageUrl: "/assets/images/upstairs-gallery.jpg",
    videoUrl: "/assets/videos/upstairs-galleryv2.mp4",
    status: "legacy",
  },
  {
    id: 8,
    title: "Electro Constructor",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    projectLink: "https://adamskikacper.github.io/electroconstructor/",
    githubLink: "https://adamskikacper.github.io/electroconstructor/",
    imageUrl: "/assets/images/electro-constructor.jpg",
    videoUrl: "/assets/videos/electro-constructorv2.mp4",
    status: "legacy",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background-primary-light text-text-primary-light sm:overflow-visible dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <div
        id="home"
        className="relative lg:dark:bg-background-primary-dark"
      >
        <Header />
      </div>

      <div
        id="about"
        className="container pb-10 pt-20 lg:pb-20 lg:pt-40"
      >
        <AboutMe />
      </div>

      <div
        id="experience"
        className="container py-10 lg:py-20"
      >
        <ExperienceContainer />
      </div>

      <div
        id="projects"
        className="container relative py-10"
      >
        <Projects projects={projects} />
      </div>

      <div
        id="contact"
        className="container relative py-10 lg:py-20"
      >
        <ContactForm />
      </div>
    </div>
  );
}
