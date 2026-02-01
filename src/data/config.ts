const config = {
  title: "Inner circle | Full-Stack Developers",
  description: {
    long: "Explore the portfolio of Inner circle, full-stack developers and creative technologists specializing in interactive web experiences, 3D animations, and innovative projects. Discover our latest work, including School management systems, AgroCommerce websites, Hospital management systems, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Inner circle, full-stack developers creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Inner circle",
    "portfolio",
    "full-stack developers",
    "creative technologists",
    "web development",
    "3D animations",
    "interactive websites",
    "School management systems",
    " AgroCommerce websites",
    "Hospital management systems",
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
