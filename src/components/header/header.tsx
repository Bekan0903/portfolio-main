"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
        <div className={cn(styles.bar, "flex items-center justify-between")}>
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.6, ease: "backOut" }
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: loader ? 3.8 : 0.3
              }}
              className="relative w-8 h-8 md:w-10 md:h-10"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/252356da-7986-46f5-9001-5c98d0dd80ee/photo_2026-01-31_22-13-08-Edited-1769888087591.png?width=8000&height=8000&resize=contain"
                alt="Inner Circle Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <Button variant={"link"} className="text-md font-bold tracking-tight px-0 hover:no-underline">
              {config.author}
            </Button>
          </Link>

        <FunnyThemeToggle className="w-6 h-6 mr-4 hidden md:flex" />
        <OnlineUsers />
        {config.githubUsername && config.githubRepo && (
          <GitHubStarsButton
            username={config.githubUsername}
            repo={config.githubRepo}
            className="mr-4"
          />
        )}
        <Button
          variant={"ghost"}
          onClick={() => setIsActive(!isActive)}
          className={cn(
            styles.el,
            "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
          )}
        >
          <div className="relative hidden md:flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""
              }`}
          ></div>
        </Button>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
