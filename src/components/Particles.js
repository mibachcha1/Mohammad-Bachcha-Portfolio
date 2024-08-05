import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import ImageWithCircleCrop from "./ImageWithCircleCrop";

const ParticlesComponent = () => {
  const [typedText, setTypedText] = useState("");
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const text = "Hi, I'm Mohammad.\nI am a <u>Software Engineer.</u>";
    let currentIndex = 0;
    let interval;

    const typeText = () => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowParticles(true);
      }
    };

    interval = setInterval(typeText, 100); // Adjust typing speed here

    return () => {
      clearInterval(interval);
    };
  }, []);

  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
    console.log("Particles loaded");
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);


  return (

    <section id="About" style={{ position: "relative" }}>

      <div
        className="container mx-auto flex px-10 py-10 md:py-20 md:flex-row flex-col items-center"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, paddingLeft: "125px" }}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white bold animate__animated animate__fadeInUp"
            dangerouslySetInnerHTML={{ __html: typedText.replace(/\n/g, "<br />") }}>
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a highly skilled Computer Science professional, passionate and dedicated to delivering impactful software solutions.
          </p>
          <div className="flex justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <ImageWithCircleCrop imageUrl="./me.png" />
      </div>



      <Particles
        className="h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "rgb(10,10,25)",
          },
          fpsLimit: 120,
          particles: {
            shape: {
              type: "star",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.4,
            },
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 3000,
              },
              limit: 0,
              value: 800,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1.6,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
          },
        }}
      />
    </section>
  );
};

export default ParticlesComponent;