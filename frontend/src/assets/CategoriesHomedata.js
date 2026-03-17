// src/assets/CategoriesHomedata.js
// Use existing files in this folder and correct relative imports (./)
import AudemarsPiguet from "./AudemarsPiguet.png";
import Brietling from "./Brietling.webp";
import Cartier from "./Cartier.png";
import AP1 from "./AP1.png";
import AP2 from "./AP2.png";
import AP3 from "./AP3.png";
import AP4 from "./AP4.png";
import H1 from "./H1.png";
import H2 from "./H2.png";
import BR1 from "./BR1.png";

const brands = [
  {
    id: 1,
    name: "Audemars Piguet",
    slug: "audemars-piguet",
    image: AudemarsPiguet,
    link: "/brands/audemars-piguet",
  },
  {
    id: 2,
    name: "Breitling",
    slug: "breitling",
    image: Brietling,
    link: "/brands/breitling",
  },
  {
    id: 3,
    name: "Cartier",
    slug: "cartier",
    image: Cartier,
    link: "/brands/cartier",
  },
  {
    id: 4,
    name: "Audemars (alt)",
    slug: "audemars-alt-1",
    image: AP1,
    link: "/brands/audemars-piguet",
  },
  {
    id: 5,
    name: "Audemars (alt)",
    slug: "audemars-alt-2",
    image: AP2,
    link: "/brands/audemars-piguet",
  },
  {
    id: 6,
    name: "Audemars (alt)",
    slug: "audemars-alt-3",
    image: AP3,
    link: "/brands/audemars-piguet",
  },
  {
    id: 7,
    name: "Audemars (alt)",
    slug: "audemars-alt-4",
    image: AP4,
    link: "/brands/audemars-piguet",
  },
  {
    id: 8,
    name: "Hublot (sample)",
    slug: "hublot-sample-1",
    image: H1,
    link: "/brands/hublot",
  },
  {
    id: 9,
    name: "Hublot (sample)",
    slug: "hublot-sample-2",
    image: H2,
    link: "/brands/hublot",
  },
  {
    id: 10,
    name: "Brand (sample)",
    slug: "brand-sample",
    image: BR1,
    link: "/brands/sample",
  },
];

export default brands;
