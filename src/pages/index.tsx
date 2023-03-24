import Head from "next/head";
import { motion } from "framer-motion";

import LogoPicture from "@/assets/images/brand/commit-rocket-logo.webp";
import LogoSmall from "@/assets/images/brand/logo-200x200.webp";

import LinkButton from "@/components/controls/LinkButton";

import missions from "@/assets/state/missions";
import SignupSection from "@/components/pages/front/SignupSection";
import SectionCard from "@/components/pages/front/SectionCard";

import { Page } from "@/types/page";

const logoAnim = {
  initial: {
    translateX: "-2.5%",
    translateY: "15%",
    rotate: "-2deg"
  },
  animate: {
    translateX: "0",
    translateY: "0",
    rotate: "10deg"
  }
} as const;

const FrontPage: Page = ({ }) => {

  return (
    <>
      <Head>
        <title>Commit Rocket</title>
      </Head>
      <main aria-labelledby="hero-title" className="flex flex-col flex-1 w-full gap-32 pb-8 max-w-7xl">
        <section aria-label="hero" className="flex flex-col-reverse items-center h-fit min-h-0 xl:flex-row xl:min-h-[30rem] xl:h-[75dvh] xl:h-[75vh] mx-auto">
          <div className="relative flex flex-col items-center justify-center h-full col-span-3 gap-8 text-center xl:w-3/5">
            <h1
              id="hero-title"
              className="text-3xl font-bold lg:text-6xl text-primary"
            >
              <span className="text-secondary">Launch</span> your <span className="text-secondary">Commits</span> in a <span className="text-secondary">Modern</span> way
            </h1>
            <p className="text-lg lg:text-xl lg:max-w-xl">
              Experience Git in a modern and fast way with Commit Rocket, the open-source, lightweight and cross-platform Git client.
            </p>
            <LinkButton href="#introduction" color="secondary" className="px-5 py-3 text-xl" scroll={false}>
              Learn More!
            </LinkButton>
          </div>
          <div className="relative overflow-hidden flex items-center justify-center w-full min-h-[20rem] max-h-[40dvh] max-h-[40vh] xl:min-h-0 xl:h-full xl:max-h-full xl:w-2/5" style={{ aspectRatio: `${LogoPicture.width} / ${LogoPicture.height}` }}>
            <motion.img
              className="absolute max-w-full max-h-full object-contain aspect-auto w-full rotate-[10deg] text-[0px] select-none"
              loading="eager"
              variants={logoAnim}
              alt="Commit Rocket"
              src={LogoPicture.src}
              width={LogoPicture.width}
              height={LogoPicture.height}
            />
          </div>
        </section>
        <section aria-label="introduction" className="flex flex-col gap-12 p-8 text-lg text-center border-2 rounded-lg xl:flex-row text-primary-contrast image-dots from-primary-light border-primary-light bg-primary">
          <h2 id="introduction" className="flex p-4 flex-col items-center justify-center w-full rounded-lg text-fill-contrast bg-white/20 backdrop-blur-[1.25px] xl:p-0 xl:w-1/2">
            <span className="text-2xl">
              Introducing...
            </span>
            <span className="flex flex-col items-center gap-4 p-4 text-4xl font-bold break-normal text-primary-contrast md:text-6xl md:flex-row md:w-max">
              <img
                className="h-[1.5em] w-[1.5em]"
                alt="A Small Rocket"
                src={LogoSmall.src}
                width={LogoSmall.width}
                height={LogoSmall.height}
              />
              Commit Rocket
            </span>
          </h2>
          <div className="flex flex-col w-full gap-4 text-lg font-semibold break-words xl:w-1/2">
            <p>
              A new and modern Git client that is currently in development.
              Our main focus is on creating a modern design and speed without sacrificing any of the features you love.
            </p>
            <p>
              "Why another Git client?" - Our aim is to improve the stale nature of current git clients that often look old, are inefficient and haven't changed in years!
              With Commit Rocket, we want to bring innovation to the table, with an open-source and cross-platform client.
            </p>
            <p>
              This means that everyone will have access to our code and anyone can contribute to make it the best it can be.
              Join us in bringing new life to Git!
            </p>
            <LinkButton href="/contribute" color="white">
              Contribute
            </LinkButton>
          </div>
        </section>
        <section
          aria-labelledby="mission"
          className="flex flex-col gap-12 mx-auto text-center"
        >
          <h2
            id="mission"
            className="text-4xl font-bold md:text-5xl text-secondary"
          >
            Mission
          </h2>
          <p>
            Our main goal with Commit Rocket is to drive innovation and provide a modern and fast alternative to existing Git clients.
            We want to improve the user experience for developers by creating an open-source and cross-platform tool that is both feature-rich and beginner-friendly.
          </p>
          <ul className="flex flex-col flex-wrap justify-between w-full gap-12 lg:flex-row">
            {missions.map(({ title, image, imageAlt, text }, i) => (
              <li key={i} className="flex flex-col items-center flex-1 gap-4 p-8 border-2 rounded-lg border-secondary">
                <h3 className="text-2xl text-primary md:text-3xl lg:h-[5ex] motion-safe:transition-all">
                  {title}
                </h3>
                <img
                  className="w-full sm:w-2/3 lg:w-full text-[0px]"
                  loading="lazy"
                  alt={imageAlt}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
                <div aria-label="Mission description" className="text-lg">
                  {text}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <SignupSection />
      </main>
    </>
  );
};

export default FrontPage;