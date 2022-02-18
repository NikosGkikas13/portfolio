import cornerpharmacy from "../src/images/Projects/Freelance/cornerpharmacy.png";
import fournosgkika from "../src/images/Projects/Freelance/fournosgkika.png";
import petres from "../src/images/Projects/Freelance/petres.png";
import DaystoChristmas from "./images/Projects/Company/12days-to-christmas.png";
import asianbge from "./images/Projects/Company/asianbge.png";
import CopaAmerica from "./images/Projects/Company/copa-america.png";
import df8888blog from "./images/Projects/Company/df8888blog.png";
import IdolFight from "./images/Projects/Company/idol-fight.png";
import RaceToTheTop from "./images/Projects/Company/race-to-the-top.png";
import SongkranFestival from "./images/Projects/Company/songkran-festival.png";

export const data = {
  nav: ["Home", "About", "Skills", "Work", "Contact"],
  about: {
    title:
      "I’m Nikos Gkikas, a front-end web developer based in Athens, Greece.",
    paragraph:
      "I have a Bachelor degree in Computer Engineering." +
      `\n` +
      "I find beauty in writting clean,thorough and well-structrured code for websites. My goal is to get better with each day.",
  },
  work: {
    freelance: [
      {
        title: "Bakery Gkika",
        url: "https://www.google.com/",
        img: fournosgkika,
        intro: `A marketing website for a local bakery.`,
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React"],
        flex_directon: "",
      },
      {
        title: "Stone Creations",
        url: "https://www.google.com/",
        img: petres,
        intro: "A website containing information about a stone carving worker",
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React", "Redux"],
        flex_directon: "reverse",
      },
      {
        title: "Corner Pharmacy",
        url: "https://www.google.com/",
        img: cornerpharmacy,
        intro: "A website for a startup pharmacy",
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React"],
        flex_directon: "",
      },
    ],
    company: [
      {
        title: "12 Days to Christmas",
        url: "",
        img: DaystoChristmas,
        stacks: ["HTML5", "CSS3", "JS", "JQUERY", "PHP"],
      },
      {
        title: "Copa America",
        url: "",
        img: CopaAmerica,
        stacks: ["HTML5", "CSS3", "JS", "JQUERY", "PHP"],
      },
      {
        title: "Race to the Top",
        url: "",
        img: RaceToTheTop,
        stacks: ["HTML5", "CSS3", "JS", "JQUERY", "PHP"],
      },
      {
        title: "Idol Fight",
        url: "",
        img: IdolFight,
        stacks: ["HTML5", "CSS3", "JS", "JQUERY", "PHP"],
      },
      {
        title: "AsianBGE",
        url: "",
        img: asianbge,
        stacks: ["WORDPRESS", "PHP", "HTML5", "CSS3", "JS", "JQUERY"],
      },
      {
        title: "DF8888Blog",
        url: "",
        img: df8888blog,
        stacks: ["WORDPRESS", "PHP", "HTML5", "CSS3", "JS", "JQUERY"],
      },
      {
        title: "Songkran Festival",
        url: "",
        img: SongkranFestival,
        stacks: ["WORDPRESS", "PHP", "HTML5", "CSS3", "JS", "JQUERY"],
      },
    ],
  },
};
