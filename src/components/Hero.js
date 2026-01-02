import React from "react";
import heroMain from "../assets/hero-main.png";
import heroMachine from "../assets/hero-machine.png";
import bg from "../assets/bg-pattern.png";

// const Hero = () => {
//   return (
//     <section className="relative max-w-7xl mx-auto min-h-[70vh] lg:h-screen bg-white flex items-center justify-center overflow-hidden">

//       {/* Background Pattern */}
//       <img
//         src={bg}
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Hand Image Centered with slight right shift and scale animation */}
//       <div className="flex items-center justify-center w-full h-full">
//         <img
//           src={heroMain}
//           alt="hand al najah paper box"
//           className="w-full max-w-[650px] h-auto z-10 absolute bottom-0 transform translate-x-14 scale-95 opacity-0 animate-handFadeIn"

//         />
//       </div> 

//       {/* Text Positioned on Left, fade-in and slide animation */}
//       <div className="absolute left-8 top-1/3 transform -translate-y-1/2 text-left max-w-xs lg:max-w-md z-20 px-4 opacity-0 animate-textFadeIn">
//         <p className="text-lg sm:text-xl text-gray-500 mb-1">“Making your</p>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
//           Print Dreams”
//         </h1>
//         <p className="text-xl sm:text-2xl text-gray-500 mt-1">Come True</p>
//       </div>

//       {/* Tailwind Animations */}
//       <style>
//         {`
//           @keyframes handFadeIn {
//             0% { opacity: 0; transform: translateX(3.5rem) scale(0.95); }
//             100% { opacity: 1; transform: translateX(3.5rem) scale(1); }
//           }
//           .animate-handFadeIn {
//             animation: handFadeIn 1s ease-out forwards;
//           }

//           @keyframes textFadeIn {
//             0% { opacity: 0; transform: translateY(-20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-textFadeIn {
//             animation: textFadeIn 1s ease-out forwards;
//             animation-delay: 0.3s;
//           }
//         `}
//       </style>

//     </section>

//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">

      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover animate-backgroundZoom"
      />

      {/* Hero Image */}
      <div className="relative w-full h-full">
        {/* Desktop / large tablet */}
        <img
          src={heroMain}
          alt="Hero Hand"
          className="hidden lg:block absolute left-1/2 bottom-0 h-full w-auto -translate-x-1/2 z-10 animate-heroImage"
        />

        {/* Tablet */}
        <img
          src={heroMain}
          alt="Hero Hand"
          className="hidden sm:block lg:hidden absolute left-1/2 bottom-0 h-[70%] w-auto -translate-x-1/2 z-10 animate-heroImage"
        />

        {/* Mobile */}
        <img
          src={heroMain}
          alt="Hero Hand"
          className="sm:hidden absolute bottom-0 left-1/2 h-[50%] w-auto -translate-x-1/2 z-10 animate-heroImage"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-[25%] sm:top-[30%] md:top-[25%] transform -translate-y-1/2 text-left max-w-full z-20 px-2 sm:px-4 opacity-0 animate-heroTextFromLeft">

        {/* Mobile */}
        <div className="sm:hidden text-center w-full">
          <p className="text-[clamp(1rem,5vw,1.5rem)] font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(1.5rem,7vw,3rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1rem,5vw,1.5rem)] font-medium mt-1">Come True</p>
        </div>

        {/* Tablet */}
        <div className="hidden sm:block lg:hidden text-center sm:max-w-md mx-auto">
          <p className="text-[clamp(1.25rem,4vw,2rem)] font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1.25rem,4vw,2rem)] font-medium mt-1">Come True</p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block max-w-lg">
          <p className="text-[clamp(1.25rem,3vw,2rem)] lg:text-gray-600 font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(2rem,4vw,4.5rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1.25rem,3vw,2rem)] lg:text-gray-600 font-medium mt-1">Come True</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        /* Hand Image Animations */
        @keyframes heroImageMobile {
          from { opacity: 0; transform: translate(-50%, 48px) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }

        @keyframes heroImageDesktop {
          from { opacity: 0; transform: translate(-50%, 48px) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1.02); }
        }

        .animate-heroImage {
          animation: heroImageMobile 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        @media (min-width: 1024px) {
          .animate-heroImage {
            animation: heroImageDesktop 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
            animation-delay: 0.15s;
          }
        }

        /* Hero Text Animation */
        @keyframes heroTextFromLeft {
          from { opacity: 0; transform: translateX(-50px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .animate-heroTextFromLeft {
          animation: heroTextFromLeft 1s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        /* Background Zoom */
        @keyframes backgroundZoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }

        .animate-backgroundZoom {
          animation: backgroundZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;













