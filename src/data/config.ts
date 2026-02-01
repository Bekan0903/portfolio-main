const config = {
  title: "Inner circle | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Inner circle, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Inner circle, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Inner circle",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Inner circle",
  email: "elshadayela4@gmail.com",
  site: "https://icwebs.vercel.site",

  // for github stars button
  githubUsername: "Bekan0903",
  githubRepo: "portfolio-main",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/dam_too8674",
    linkedin: "https://www.linkedin.com/in/bekan-seifu-8280a9398/",
    instagram: "https://www.instagram.com/inner.circle01/",
    github: "https://github.com/Bekan0903",
  },
};
export { config };
