import homeImg from "../../assets/home/hero-background11.jpg";
import careersImg from "../../assets/careers/hero-background10.jpg";
import aboutImg from "../../assets/about/hero-background3.jpg";
import lifeImg from "../../assets/life/hero-background3.jpg";
import servicesImg from "../../assets/services/hero-background.jpg";

const HERO_DATA = [
  {
    id: "home",
    heroImageUrl: homeImg,
    heroTitle: "Perfect Consulting Solutions",
    heroDescr: "Your Trusted Partner",
  },
  {
    id: "about",
    heroImageUrl: aboutImg,
    heroTitle: "Opening up a world of oportunities",
    heroDescr: "Who we are",
  },
  {
    id: "services",
    heroImageUrl: servicesImg,
    heroTitle: "Your trusted partner",
    heroDescr: "Services",
  },

  {
    id: "careers",
    heroImageUrl: careersImg,
    heroTitle: "Build your career at NovelEx",
    heroDescr: "Careers",
  },
  {
    id: "life",
    heroImageUrl: lifeImg,
    heroTitle: "Make lifelong connections at NovelEx",
    heroDescr: "Life at NovelEx",
  },
];

export default HERO_DATA;
