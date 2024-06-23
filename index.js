import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/AI-face.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Typewriter from 'typewriter-effect';


export default function Home() {

  return (
    <>
      <Head>

        <title>Shreya's Personal Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio for Shreya Teddu."
        />
      </Head>
      <ParticlesBackground />
      <TransitionEffect />

      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        {/* <div className="relative col-span-3 lg:w-1/2 h-auto rounded-2xl border-2 border-solid border-dark 
            p-8 dark:border-light
            xl:col-span-4 md:col-span-8 md:order-1 
            " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Image
            className="h-auto w-full rounded-2xl"
            src={profilePic}
            alt="Yesh Mandava"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
          />
        </div> */}

        <Layout className="!pt-0 md:!pt-16 sm:!pt-16 ">

          {/* <div className="flex w-full justify-center"> */}
          <div className="flex flex-col items-center md:items-start sm:items-start"> {/* Center on mobile, align start on medium and larger screens */}

            <div className=" w-1/1 md:w-1/1 sm:w-1/1 xl:1/1 flex flex-col items-start self-center">

              {/* <div className="text-left ">  */}
                <AnimatedText text="Hey, I'm __" className=" text-left font-normal pr-0 sm:pr-0 md:pr-0" />
               {/* </div> */}

              <div className="font-bold text-blue-500 text-4xl">
                <Typewriter
                  options={{
                    strings: [
                      '<span style="color: blue;">Shreya Teddu</span>',
                      '<span style="color: green;">Shreya Teddu</span>',
                      '<span style="color: yellow;">Shreya Teddu</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "<",
                    cursorStyle: "color: red; font-size: 1.5rem;",
                  }}
                />
              </div>


              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my experience, skills and latest projects.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Shreya_Teddu_FE4%20(33).pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:vshreyat2009@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Yeshwanth Mandava"
          />
        </div>
      </article>
    </>
  );
}
