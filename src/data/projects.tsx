import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "Digital ID",
    category: "School ID platform",
    title: "IDkoo digital ID",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://bekan.pythonanywhere.com/",
    github: "https://github.com/Bekan0903/school_ID",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            IDkoo = digitalization + safety + accountability
          </TypographyP>
          <TypographyP className="font-mono ">
The Digital School ID System allows students to register 
and receive a unique digital ID containing their personal 
and academic information.Each ID is linked to a QR code 
that can be scanned by authorized staff to instantly retrieve student records.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">About IDkoo</TypographyH3>
          <p className="font-mono mb-2">
The platform is built to improve:

Student identification,
Library management,
Entry and exit tracking,
Overall administrative efficiency,

          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
              `${BASE_PATH}/codingducks/ducklet2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://icwebs.vercel.app",
    github:"https://github.com/Bekan0903/Portfolio-main",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Results Analyzer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
