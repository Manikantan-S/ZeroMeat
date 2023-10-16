import { useState, useRef, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { Link, Button } from "react-scroll";
import EggSVG from "../../../public/egg.svg";
const Navbar = () => {

    const navRef = useRef()

    const [open, setOpen] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 100) {
                navRef.current.style.background = 'rgba(29, 27, 27, 0.4)';
                navRef.current.style.backdropFilter = 'blur(20px)'
                navRef.current.style.padding = '15px 0'
            } else {
                navRef.current.style.background = 'transparent';
                navRef.current.style.backdropFilter = 'blur(0)'
                navRef.current.style.padding = '40px 0'
            }
        })
    }, [])

  return (
    <div className="fixed top-0 w-full py-[40px] duration-300 z-50" ref={navRef}>
        <div className="container">
            <div className="flex justify-between items-center">
            
            <Link
                        to="home"
                        smooth={true}
                        delay={500}
                        className="text-white text-[34px] font-semibold font-secondary cursor-pointer"
                    >
                        <img src={EggSVG} alt="Egg" style={{ width: "40px", height: "40px" }} />
                    </Link>
                
                <nav>
                    <CgMenuRight 
                        size={24} 
                        color="#fff"
                        className="flex lg:hidden cursor-pointer"
                        onClick={()=> setOpen(true)}
                    />
                    <ul className={`absolute top-0 ${open? 'right-[0]' : 'right-[-100%]'} z-50 shadow-md min-h-screen flex flex-col gap-7 pt-24 px-3 text-start w-[250px] bg-[#18181b] duration-300 lg:flex-row lg:items-center lg:relative lg:right-0 lg:shadow-none lg:min-h-0 lg:w-auto lg:bg-transparent lg:pt-0`}>
                        <div 
                            className="w-[30px] h-[30px] rounded-full bg-[#6366f1] absolute top-10 right-5 text-white flex justify-center items-center cursor-pointer hover:bg-[#4f46e5] duration-300 lg:hidden"
                            onClick={()=> setOpen(false)}
                        >
                            <RiCloseLine size={19}  className=""/>
                        </div>
                        
                        <li >
                            <Link
                                activeClass='active'
                                to="home"
                                smooth={true} 
                                delay={500}
                                spy={true}
                                offset={-100}
                                className=" block text-white text-[13px] font-medium  duration-300 hover:text-primary-lg cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>

                        <li >
                            <Link 
                                activeClass='active'
                                to="about"
                                smooth={true} 
                                delay={500}
                                spy={true}
                                
                                className=" block text-white text-[13px] font-medium  duration-300 hover:text-primary-lg cursor-pointer"
                            >
                                About
                            </Link>
                        </li>

                        <li >
                            <Link 
                                activeClass='active'
                                to="services"
                                smooth={true} 
                                delay={500}
                                spy={true}
                                
                                className=" block text-white text-[13px] font-medium  duration-300 hover:text-primary-lg cursor-pointer"
                            >
                                Features
                            </Link>
                        </li>

                        <li >
                            <Link 
                                activeClass='active'
                                to="work"
                                smooth={true} 
                                delay={500}
                                spy={true}
                                
                                className=" block text-white text-[13px] font-medium  duration-300 hover:text-primary-lg cursor-pointer"
                            >
                                Products
                            </Link>
                        </li>


                        <Button 
                            to="contact"
                            smooth={true}
                            delay={500}                                                       
                            className="btn btn-sm font-secondary"
                        >
                            Contact
                        </Button>
                    </ul>
                </nav>

            </div>
        </div>
    </div>
  )
}

export default Navbar
