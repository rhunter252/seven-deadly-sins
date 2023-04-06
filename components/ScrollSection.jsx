import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import img1 from "../images/lust1.jpg";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-1000vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  const itemsData = [
    {
      id: 1,
      name: "Lust",
      description:
        "Lust is a strong passion or longing, especially for sexual desires.",
      verse:
        "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. - 1 Corinthians 6:18",
      image: <Image src="../images/lust.jpg" alt="lust" />,
    },
    {
      id: 2,
      name: "Gluttony",
      description:
        "Gluttony is an excessive and ongoing eating of food or drink.",
      verse:
        "For drunkards and gluttons become poor, and drowsiness clothes them in rags. - Proverbs 23:21",
      image: "./images/02.jpg",
    },
    {
      id: 3,
      name: "Greed",
      description: "Greed is an excessive pursuit of material goods.",
      verse:
        "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions. - Luke 12:15",
      image: "./images/03.jpg",
    },
    {
      id: 4,
      name: "Sloth",
      description:
        "Sloth is an excessive laziness or the failure to act and utilize one’s talents.",
      verse:
        "Lazy hands make for poverty, but diligent hands bring wealth. - Proverbs 10:4",
      image: <Image src="04.jpg" alt="" />,
    },
    {
      id: 5,
      name: "Wrath",
      description: "Wrath is a strong anger and hate towards another person.",
      verse:
        "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires. - James 1:19-20",
      image: <Image src="04.jpg" alt="" />,
    },
    {
      id: 6,
      name: "Envy",
      description:
        "Envy is the intense desire to have an item that someone else possesses.",
      verse:
        "Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation. - 1 Peter 2:1-2",
      image: <Image src="04.jpg" alt="" />,
    },
    {
      id: 7,
      name: "Pride",
      description:
        "Pride is an excessive view of one's self without regard for others.",
      verse:
        "Pride goes before destruction, a haughty spirit before a fall. - Proverbs 16:18",
      image: <Image src="04.jpg" alt="" />,
    },
  ];

  return (
    <section className="overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="items h-screen w-[1000vw] flex flex-row relative"
        >
          <div className="item relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden ">
            <div className="item-wrapper">
              <Image
                src={img1}
                alt="image"
                width={1000}
                height={1000}
                className="block w-full"
              />
              {/* <div className="image-overlay absolute w-full h-full top-0 left-0 bg-slate-700 transition-all duration-1000 ease-in-out  opacity-0 hover:opacity-100  hover:top-full"></div> */}
              <div className="item-copy absolute w-full h-full flex flex-col justify-between items-center uppercase leading-[60px] z-10 delay-2000">
                <div className="item-name relative bottom-20 pr-10 text-[4rem] uppercase text-red-600 font-mitera">
                  {itemsData[0].name}
                </div>
                <p className="text-white">{itemsData[0].description}</p>
                <div className="id text-white">{itemsData[0].id}</div>
              </div>
            </div>
          </div>
          <div className="divider relative w-[20px] h-screen bg-slate-800"></div>
          <div className="h-screen w-screen flex justify-center items-cente">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 2
            </h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 3
            </h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 4
            </h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 5
            </h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 6
            </h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3 className="text-headlineMedium uppercase text-primaryTextColor">
              Section 7
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
