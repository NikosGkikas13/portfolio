import cornerpharmacy from "../src/images/cornerpharmacy.png";
import fournosgkika from "../src/images/fournosgkika.png";
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
        stacks: ["HTML5", "CSS3", "React"],
      },
      {
        title: "Stone Creations",
        url: "https://www.google.com/",
        img: cornerpharmacy,
        stacks: ["HTML5", "CSS3", "React", "Redux"],
      },
      {
        title: "Corner Pharmacy",
        url: "https://www.google.com/",
        img: cornerpharmacy,
        stacks: ["HTML5", "CSS3", "React"],
      },
    ],
  },
};
