import homeImg from "../../assets/home/hero.jpg";
import careersImg from "../../assets/careers/hero.jpg";
import aboutImg from "../../assets/about/hero.jpg";
import lifeImg from "../../assets/life/hero.jpg";
import servicesImg from "../../assets/services/hero.jpg";

const DIRECTORY_DATA = [
  {
    title: "home",
    id: 1,
    linkUrl: "/",
    imageUrl: homeImg,
    icon: { name: "HomeIcon", color: "#b2996d" },
    descr: "Perfect Consulting Solutions",
  },
  {
    title: "about",
    id: 2,
    linkUrl: "/about",
    imageUrl: aboutImg,
    icon: { name: "AboutIcon", color: "#008da1" },
    descr: "Opening up a world of oportunities",
  },
  {
    title: "services",
    id: 3,
    linkUrl: "/services",
    imageUrl: servicesImg,
    icon: { name: "ServicesIcon", color: "#d83b1b" },
    descr: "Your trusted partner",
  },
  {
    title: "careers",
    id: 4,
    linkUrl: "/careers",
    imageUrl: careersImg,
    icon: { name: "CareersIcon", color: "#b000e1" },
    descr: "Build your career at NovelEx",
  },
  {
    title: "life",
    id: 5,
    linkUrl: "/life",
    imageUrl: lifeImg,
    icon: { name: "LifeIcon", color: "#387469" },
    descr: "Make lifelong connections at NovelEx",
  },
];

export default DIRECTORY_DATA;
