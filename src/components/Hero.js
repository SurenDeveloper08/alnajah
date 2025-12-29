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
    <section className="relative w-full min-h-[70vh] lg:h-screen bg-white overflow-hidden">

      {/* Background Pattern */}
      <img
        src={bg}
        alt="background"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Image */}
      <img
        src={heroMain}
        alt="Hero"
        className="absolute bottom-0 left-1/2 w-full max-w-[650px] object-contain opacity-0 animate-heroImage z-10"
      />

      {/* Hero Text */}
      <div className="absolute left-6 md:left-10 top-[12%] md:top-1/3 max-w-xs lg:max-w-md z-20 px-4 opacity-0 animate-heroTextFromLeft">
        <p className="text-lg sm:text-xl text-gray-500 mb-1">“Making your</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
          Print Dreams”
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 mt-1">Come True</p>
      </div>

      {/* Animations */}
      <style>
        {`
          /* Hero Image Animation */
          @keyframes heroImageMobile {
            0% {
              opacity: 0;
              transform: translate(-50%, 48px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0) scale(1);
            }
          }

          @keyframes heroImageDesktop {
            0% {
              opacity: 0;
              transform: translate(-40%, 48px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translate(-40%, 0) scale(1);
            }
          }

          .animate-heroImage {
            animation: heroImageMobile 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            animation-delay: 0.15s;
          }

          @media (min-width: 1024px) {
            .animate-heroImage {
              animation: heroImageDesktop 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
          }

          /* Hero Text Slide-in from Left */
          @keyframes heroTextFromLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-heroTextFromLeft {
            animation: heroTextFromLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            animation-delay: 0.35s;
          }
        `}
      </style>

    </section>
  );
};

export default Hero;








