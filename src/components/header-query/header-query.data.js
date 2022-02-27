const HEADER_QUERY_DATA = [
  {
    title: "Home",
    linksOfValues: null,

    link: "/home",
    open: false,
  },
  {
    title: "Who we are",
    linksOfValues: [
      [1, "Our Purpose", "/about"],
      [2, "Our Values", "/about"],
      [3, "Our Mission", "/about"],
      [4, "Our Strategy", "/about"],
    ],

    link: "/about",
    open: false,
  },
  {
    title: "Life at NovelEx",
    linksOfValues: [
      [5, "Diversity and Inclusion", "/life"],
      [6, "Learning Together", "/life"],
      [7, "Supporting Communities", "/life"],
      [8, "Our People", "/life"],
    ],
    link: "/life",
    open: false,
  },
  {
    title: "Services",
    linksOfValues: [
      [9, "Languages", "/services"],
      [11, "Digital", "/services"],
      [12, "Training Programme", "/services"],
    ],
    link: "/services",
    open: false,
  },
  {
    title: "Careers",
    linksOfValues: [
      [13, "Language Career", "/careers"],
      [14, "Digital Careers", "/careers"],
      [15, "Where We Hire", "/careers"],
    ],
    link: "/careers",
    open: false,
  },
];

export default HEADER_QUERY_DATA;
