import { motion } from 'framer-motion';
import bg from '../assets/bg-patternx.png';
import logo from '../assets/logo.png';
import hand from '../assets/hero-main.png';
import machine from '../assets/hero-machine.png';
import SearchInput from '../components/SearchInput';
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const LandingPage = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white font-sans select-none">

            <div className="absolute top-0 left-0 w-full h-[5px] bg-[#00B4CC] z-[60] shadow-sm"></div>
            {/* 1. BACKGROUND PATTERN */}
            <div className="absolute inset-0 z-0">
                <img src={bg} alt="bg" className="w-full h-full object-fill opacity-100" />
            </div>

            {/* 2. THE HAND - ANIMATED */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 z-10 flex items-center justify-center"

            >
                <img
                    src={hand}
                    alt="Hero Hand"
                    className="w-full h-full object-contain object-center lg:object-bottom translate-y-10 scale-110 xl:translate-x-16"
                />
            </motion.div>

            {/* 4. HEADER SECTION */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-50 w-full px-6 py-4 lg:px-16 lg:py-6"
            >
                {/* ROW 1 */}
                <div className="hidden lg:grid grid-cols-12 items-center w-full mb-4">
                    <div className="col-span-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-full h-auto max-w-[70px] brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                    </div>
                    <div className="col-span-3 relative pl-4">
                        <SearchInput />
                    </div>
                    <div className="col-span-3"></div>

                    <div className="col-span-4 text-right whitespace-nowrap">
                        <div className="flex justify-end gap-8 text-gray-600 font-normal text-sm lg:text-base xl:text-lg whitespace-nowrap">
                            {/* Clickable Phone Number */}
                            <a
                                href="tel:+97167486990"
                                className="flex items-center gap-2 hover:text-[#00B4CC] transition-colors cursor-pointer"
                            >
                                <PhoneIcon fontSize="small" /> +971 6 7486990
                            </a>

                            {/* Clickable Email Address */}
                            <a
                                href="mailto:alnajahpp@gmail.com"
                                className="flex items-center gap-2 hover:text-[#00B4CC] transition-colors cursor-pointer"
                            >
                                <EmailIcon fontSize="small" /> alnajahpp@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* ROW 2 - Stacked Layout */}
                <div className="flex flex-col items-start gap-2">

                    {/* Line 1: Browse Categories Button */}
                    <button className="bg-[#00B4CC] text-white px-4 py-1.5 text-[10px] lg:text-xs font-bold flex items-center gap-2 shadow-sm min-w-fit hover:bg-[#0096a8] transition-all">
                        <span className="text-lg leading-none">≡</span> Browse Categories
                    </button>

                    {/* Line 2: Navigation Menus (Moved to new line) */}
                    <nav className="flex gap-[clamp(1rem,1vw,3rem)] text-gray-500 font-medium text-[13px] lg:text-xs uppercase tracking-widest pt-2 pb-16 w-full lg:w-auto">
                        {['Home', 'Services', 'About Us', 'Gallery', 'Contact Us', 'More'].map(link => (
                            <a key={link} href="#" className="hover:text-[#00B4CC] transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </nav>

                </div>
            </motion.header>

            {/* 5. HERO TEXT - ANIMATED */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute left-6 lg:left-16 top-[30%] xl:top-[33%] z-[45]"
            >
                <p className="text-[clamp(1rem,5vw,1.5rem)] text-[#058fa1] font-normal leading-none">"Making your</p>
                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold xl:font-semibold text-[#00B4CC] leading-[0.75] my-2 drop-shadow-sm">
                    Print Dreams"
                </h1>
                <p className="text-[clamp(1rem,5vw,1.5rem)] font-normal text-[#058fa1]">Come True</p>
                <div className="flex gap-2 mt-6">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                            className="w-2 h-2 bg-[#00B4CC] rounded-full"
                        />
                    ))}
                </div>
            </motion.div>

            {/* 6. THE MACHINE - ANIMATED */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 1 }}
                className="absolute bottom-0 left-6 lg:left-16 w-[45%] lg:w-[36%]"
            >
                <img src={machine} alt="Machine" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

        </div>
    );
};

export default LandingPage;