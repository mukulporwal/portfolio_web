import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
// import logo from "/logo.png"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Navigation links
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  // Smooth scroll function
  const handleScroll = (e, id) => {
    e.preventDefault();
    setActiveLink(id);
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Close mobile menu
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScrollPosition = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollPosition);
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-black/10 backdrop-blur-sm">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-30"
        >
          {/* Logo */}
          {/* <div className=" flex lg:flex-1">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, "home")}
              className="-m-1.5 p-1.5"
            > */}
              {/* <span className="sr-only">Your Company</span> */}
              {/* <img
                src={logo}
                alt="Logo"
                className=" h-12 w-auto shadow-lg  rounded-full brightness-125 contrast-125 group-hover:brightness-150 transition-all duration-300"
              />
            </a>
          </div> */}

          <div className="flex lg:flex-1">
            <button 
              onClick={(e) => handleScroll(e, "home")}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <div className="h-full w-full rounded-full p-1 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-full object-contain rounded-full brightness-125 contrast-125 group-hover:brightness-150 transition-all duration-300"
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-200 hover:bg-black/10 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="relative text-lg text-black group"
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform transition-transform duration-300 ${
                    activeLink === link.id ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 origin-left`}
                ></span>
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="px-4 py-2 rounded-[10px] text-[18px] text-white font-light cursor-pointer bg-[linear-gradient(260deg,_#000055_0.56%,_#BA68C8_100%)] transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Connect with me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[60] bg-black/10 backdrop-blur-sm "
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="p-6 w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <a 
                href="#home" 
                onClick={(e) => handleScroll(e, "home")}
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:bg-white/10 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="relative block rounded-lg px-4 py-3 text-lg text-black hover:bg-white/5 transition-colors group"
                >
                  {link.name}
                  <span
                    className={`absolute left-4 bottom-0 w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform transition-transform duration-300 ${
                      activeLink === link.id ? "scale-x-15" : "scale-x-0"
                    } group-hover:scale-x-100 origin-left`}
                  ></span>
                </a>
              ))}

              {/* <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="block text-center px-3 py-3 rounded-[10px] text-[15px] text-white font-light cursor-pointer bg-[linear-gradient(260deg,_#DA7C05_0.36%,_#B923E1_100%)] transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Connect with me <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;