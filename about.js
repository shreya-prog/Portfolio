import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/pic1.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";




function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <ParticlesBackground />

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16 ">

          <AnimatedText
            text="About Me!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              {/*<p className="font-medium ">*/}
              {/*   Hi, I&apos;m <strong>Shreya</strong>, a senior at the University*/}
              {/*   of Central Florida pursuing a major in Computer Science and a minor in Finance.*/}
              {/*   I&apos;m interested by the blend of computer science and financial services, and I&apos;ve got two main passions: Fintech and Computer Vision AI.*/}
              {/* </p>*/}

              {/*<p className="font-medium">*/}
              {/*  Hello there! I&apos;m <strong>Vaishnavi Shreya Teddu</strong>, a seasoned Full Stack Developer with a*/}
              {/*  knack for web technologies and cloud computing. I&apos;ve spent considerable time in the trenches,*/}
              {/*  developing robust SaaS products and pioneering full stack web applications.*/}
              {/*</p>*/}

              <p className="font-medium">
                Welcome to the digital home of <strong>Vaishnavi Shreya Teddu</strong>, where code meets cloud,
                databases dance, and even horror movies have a cameo. Buckle up for a thrilling journey through the
                universe of a full-stack developer!
              </p>


              <p className="my-4 font-medium">
               She&apos;s a full-stack developer who speaks more languages than a United Nations interpreter! JavaScript, CSS, HTML, React, you name it, she’s got it. She’s so good with cloud platforms like AWS and Docker, she practically lives in the cloud. Databases like MySQL and PostgreSQL are her playgrounds. And operating systems? She’s a triple threat with Linux, Unix, and Windows. She can also whip up a mean spaghetti… code in C, C#, C++, and PHP.
              </p>
              <p className="font-medium">
                When she’s not taming the wild beasts of code, she’s enjoying a good scare with thriller and horror movies. Who said coders don’t have a dark side?”
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                  className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl
                bg-dark dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl m1-4"
                src={profile}
                alt="Yesh Mandava"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
           
          </div>

          <Skills />
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.div>
          </AnimatePresence>

          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
}

