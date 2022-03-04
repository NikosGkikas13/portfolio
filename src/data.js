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
import github from "./images/social_media/github.png";
import githubhover from "./images/social_media/github_hover.png";
import instagram from "./images/social_media/instagram.png";
import instagramhover from "./images/social_media/instagram_hover.png";
import linkedin from "./images/social_media/linkedin.png";
import linkedinhover from "./images/social_media/linkedin_hover.png";
import messenger from "./images/social_media/messenger.png";
import messengerhover from "./images/social_media/messenger_hover.png";
import mobile_icon from "./images/mobile_icon.png";
import email_icon from "./images/email_icon.png";
import location_icon from "./images/location_icon.png";
import c from "./images/languages/c.png";
import react from "./images/languages/react.png";
import jquery from "./images/languages/jquery.png";
import php from "./images/languages/php.png";
import js from "./images/languages/js.png";
import wordpress from "./images/languages/wordpress.png";
import html5 from "./images/languages/html5.png";
import css3 from "./images/languages/css3.png";
import mysql from "./images/languages/mysql.png";

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
  skills: [
    {
      img: react,
      skills: [
        "Redux / Redux Toolkit",
        "Styled Components",
        "GraphQL / ApolloClient",
        "Axios",
        "Context",
      ],
    },
    {
      img: js,
      skills: ["Rest API", "Async Fetching", "ES6"],
    },
    {
      img: jquery,
      skills: ["Rest API", "Async Fetching", "AJAX"],
    },
    {
      img: php,
      skills: ["Vanilla PHP", "Database connection", "Laravel familiarity"],
    },
    {
      img: wordpress,
      skills: ["Theme Development"],
    },
    {
      img: html5,
      skills: [],
    },
    {
      img: css3,
      skills: [],
    },
    {
      img: c,
      skills: [
        "Functions",
        "Structures",
        "Pointers",
        "Trees",
        "Graphs",
        "Lists / Stacks",
      ],
    },
    {
      img: mysql,
      skills: ["Fetch/Store data", "SQL statements"],
    },
  ],
  work: {
    freelance: [
      {
        title: "Bakery Gkika",
        url: "https://www.google.com/",
        img: fournosgkika,
        intro: `A marketing website for a local bakery.`,
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React"],
      },
      {
        title: "Stone Creations",
        url: "https://www.google.com/",
        img: petres,
        intro: "A website containing information about a stone carving worker",
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React", "Redux"],
      },
      {
        title: "Corner Pharmacy",
        url: "https://www.google.com/",
        img: cornerpharmacy,
        intro: "A website for a startup pharmacy",
        contains: `Contains: Custom slider, Email form utilizing email.js, Google API locations`,
        stacks: ["HTML5", "CSS3", "React"],
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
  contact: {
    form: ["Name", "Email", "Subject"],
  },
  footer: {
    social_media: [
      {
        icon: instagram,
        icon_hover: instagramhover,
        url: "https://www.instagram.com/nick_klg/",
      },
      {
        icon: messenger,
        icon_hover: messengerhover,
        url: "https://www.messenger.com/t/1433012630/",
      },
      {
        icon: linkedin,
        icon_hover: linkedinhover,
        url: "https://www.linkedin.com/in/nikos-gkikas-7b250b1b0/",
      },
      {
        icon: github,
        icon_hover: githubhover,
        url: "https://github.com/NikosGkikas13",
      },
    ],
    info: [
      {
        icon: email_icon,
        text: "nikosgkikas47@gmail.com",
      },
      {
        icon: mobile_icon,
        text: "6984764168",
      },
      {
        icon: location_icon,
        text: "Athens,Greece",
      },
    ],
  },
};
