/* eslint-disable no-implied-eval */
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import SvgClose from "../assets/icons/svgClose"
import SvgMenu from "../assets/icons/svgMenu"
import lightLogo from "../assets/images/lightmodeLogo.png"
import darkLogo from "../assets/images/darkmodeLogo.png"
import "../css/nav.css"
import SvgHome from "../assets/icons/svgHome"
import SvgUser from "../assets/icons/svgUser"
import SvgSkills from "../assets/icons/svgSkills"
import SvgPortfolio from "../assets/icons/svgPortfolio"
import SvgContact from "../assets/icons/svgContact"
import { useDispatch, useSelector } from "react-redux"
import { changeLenguage, changeMode } from "../redux/actions/actions"
import SvgMoon from "../assets/icons/svgMoon"
import SvgSun from "../assets/icons/svgSun"




export default function Nav(){

    const [openMenu, setOpenMenu] = useState("notOpened")
    const [sideNavHeight, setSideNavHeight] = useState("smallSideNav")
    let dispatch = useDispatch()

    function toggleSideNav(){
        console.log(openMenu)
        if (openMenu === "closed" || openMenu === "notOpened") {
            setSideNavHeight("bigSideNav")
            setOpenMenu("opened")
        }else{
            setOpenMenu("closed")
            setTimeout(() => setSideNavHeight("smallSideNav"), 510)
        }
    }

    interface AppState{
        lenguage : string
        mode: string
    }

    let {lenguage, mode} = useSelector((state: AppState) => state)

    console.log(lenguage, mode)
    let location : string = useLocation().pathname

    console.log(location)


    if (lenguage === "english") {
        return (
            <div className="navBox">
                <div className="bigNavContainer">
                    <div className="navContainer ">
                        <Link className=" buttonLink" to={"/"}>
                            <div className={` ${location === "/" && "navLinkAnimated"}  navLink animate__animated animate__bounceIn`}><SvgHome className="navIcons"/> <p>Home</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/about"}>
                            <div className={`${location === "/about" && "navLinkAnimated"}  navLink animate__animated animate__bounceIn link1`}><SvgUser className="navIcons"/> <p>About Me</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/skills"}>
                            <div className={`${location === "/skills" && "navLinkAnimated"}  navLink animate__animated animate__bounceIn link2`}><SvgSkills className="navIcons" /> <p>Skills</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/projects"}>
                            <div className={`${location === "/projects" && "navLinkAnimated"}  navLink animate__animated animate__bounceIn link3`}><SvgPortfolio className="navIcons" /> <p>Portfolio</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/contact"}>
                            <div className={`${location === "/contact" && "navLinkAnimated"}  navLink animate__animated animate__bounceIn link4`}><SvgContact className={"navIcons"} /> <p>Contact Me</p></div>
                        </Link>
                        <div className="switchersBox animate__animated animate__bounceIn">
                            <div className="switcherContainer">
                                <p className="switcherText">ESP</p>
                                <label className={`switch ${lenguage} `}>
                                    <span className="slider" onClick={() => changeLenguage(lenguage, dispatch)} ></span>
                                </label>
                                <p className="switcherText">ENG</p>
                            </div>
                            <div className="switcherContainer">
                                <SvgMoon className="modeIcons" />
                                <label className={`switch ${mode} `}>
                                    <span className="slider" onClick={() => changeMode(mode, dispatch)} ></span>
                                </label>
                                <SvgSun className="modeIcons littleMarginLeft"/>
                            </div>
                        </div>
                    </div>
                    
                    
                        <div className="logo animate__animated animate__backInDown">
                            <Link to={"/"} className="logo" >
                                <img src={ mode === "dark" ? darkLogo : lightLogo} alt="Matias Donato "/>
                            </Link>
                        </div>
                    
                    
                    <div className={`bigSideNavContainer ${sideNavHeight}`}>
                        <SvgMenu className="navMenu" onClick={() => toggleSideNav()} />
                        { openMenu !== "notOpened" &&
                        <div className={`sideNavContainer animate__animated ${ openMenu === "opened" ? "animate__slideInRight" : openMenu === "closed" && "animate__slideOutRight"}`}>
                            <SvgClose className="navClose" onClick={() => toggleSideNav()}/>
                            <div className="buttonsContainer">
                                <Link to={"/"}>
                                    <div onClick={() => toggleSideNav()} className={` ${location === "/" && "navLinkAnimated"} sideNavLink animate__animated animate__bounceIn`}><SvgHome className="navIcons"/> <p>Home</p> </div >
                                </Link>
                                <Link to={"/about"}>
                                    <div onClick={() => toggleSideNav()} className={` ${location === "/about" && "navLinkAnimated"} sideNavLink animate__animated animate__bounceIn link1`}><SvgUser className="navIcons" /> <p>About Me</p> </div >
                                </Link>
                                <Link to={"/skills"}>
                                    <div onClick={() => toggleSideNav()} className={` ${location === "/skills" && "navLinkAnimated"} sideNavLink animate__animated animate__bounceIn link2`}><SvgSkills className="navIcons" /> <p>Skills</p> </div >
                                </Link>
                                <Link to={"/projects"}>
                                    <div onClick={() => toggleSideNav()} className={` ${location === "/projects" && "navLinkAnimated"} sideNavLink animate__animated animate__bounceIn link3`}><SvgPortfolio className="navIcons" /> <p>Portfolio</p> </div >
                                </Link>
                                <Link to={"/contact"}>
                                    <div onClick={() => toggleSideNav()} className={` ${location === "/contact" && "navLinkAnimated"} sideNavLink animate__animated animate__bounceIn link4`}><SvgContact className={"navIcons"} /> <p>Contact Me</p> </div >
                                </Link>
                                <div className="switchersBoxOnPhone animate__animated animate__bounceIn">
                                    <div className="switcherContainer">
                                        <p className="switcherText">ESP</p>
                                        <label className={`switch ${lenguage} `}>
                                            <span className="slider" onClick={() => changeLenguage(lenguage, dispatch)} ></span>
                                        </label>
                                        <p className="switcherText">ENG</p>
                                    </div>
                                    <div className="switcherContainer">
                                    <SvgMoon className="modeIcons" />
                                    <label className={`switch ${mode} `}>
                                        <span className="slider" onClick={() => changeMode(mode, dispatch)} ></span>
                                    </label>
                                    <SvgSun className="modeIcons littleMarginLeft"/>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div> 
                </div>
            </div>
        )
    }else{
        return (
            <div className="navBox">
                <div className="bigNavContainer">
                    <div className="navContainer ">
                        <Link className="buttonLink" to={"/"}>
                            <div className={`navLink ${location === "/" && "navLinkAnimated"} animate__animated animate__bounceIn`}><SvgHome className="navIcons"/> <p>Inicio</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/about"}>
                            <div className={`navLink ${location === "/about" && "navLinkAnimated"} animate__animated animate__bounceIn link1`}><SvgUser className="navIcons"/> <p>Sobre Mi</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/skills"}>
                            <div className={`navLink ${location === "/skills" && "navLinkAnimated"} animate__animated animate__bounceIn link2`}><SvgSkills className="navIcons" /> <p>Conocimientos</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/projects"}>
                            <div className={`navLink ${location === "/projects" && "navLinkAnimated"} animate__animated animate__bounceIn link3`}><SvgPortfolio className="navIcons" /> <p>Portafolio</p></div>
                        </Link>
                        <Link className="buttonLink" to={"/contact"}>
                            <div className={`navLink ${location === "/contact" && "navLinkAnimated"} animate__animated animate__bounceIn link4`}><SvgContact className={"navIcons"} /> <p>Contactame</p></div>
                        </Link>
                        <div className="switchersBox animate__animated animate__bounceIn">
                            <div className="switcherContainer">
                                <p className="switcherText">ESP</p>
                                <label className={`switch ${lenguage} `}>
                                    <span className="slider" onClick={() => changeLenguage(lenguage, dispatch)} ></span>
                                </label>
                                <p className="switcherText">ENG</p>
                            </div>
                            <div className="switcherContainer">
                                <SvgMoon className="modeIcons" />
                                <label className={`switch ${mode} `}>
                                    <span className="slider" onClick={() => changeMode(mode, dispatch)} ></span>
                                </label>
                                <SvgSun className="modeIcons littleMarginLeft"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="logo animate__animated animate__backInDown">
                        <Link to={"/"} className="logo" >
                            <img src={ mode === "dark" ? darkLogo : lightLogo} alt="Matias Donato "/>
                        </Link>
                    </div>
                    
                    <div className={`bigSideNavContainer ${sideNavHeight}`}>
                        <SvgMenu className="navMenu" onClick={() => toggleSideNav()} />
                        { openMenu !== "notOpened" &&
                        <div className={`sideNavContainer animate__animated ${ openMenu === "opened" ? "animate__slideInRight" : openMenu === "closed" && "animate__slideOutRight"}`}>
                            <SvgClose className="navClose" onClick={() => toggleSideNav()}/>
                            <div className="buttonsContainer">
                                <Link to={"/"}>
                                    <div onClick={() => toggleSideNav()} className={`sideNavLink animate__animated animate__bounceIn ${location === "/" && "navLinkAnimated"} `}><SvgHome className="navIcons"/> <p>Inicio</p> </div >
                                </Link>
                                <Link to={"/about"}>
                                    <div onClick={() => toggleSideNav()} className={`sideNavLink animate__animated animate__bounceIn link1 ${location === "/about" && "navLinkAnimated"} `}><SvgUser className="navIcons" /> <p>Sobre Mi</p> </div >
                                </Link>
                                <Link to={"/skills"}>
                                    <div onClick={() => toggleSideNav()} className={`sideNavLink animate__animated animate__bounceIn link2 ${location === "/skills" && "navLinkAnimated"} `}><SvgSkills className="navIcons" /> <p>Conocimientos</p> </div >
                                </Link>
                                <Link to={"/projects"}>
                                    <div onClick={() => toggleSideNav()} className={`sideNavLink animate__animated animate__bounceIn link3 ${location === "/projects" && "navLinkAnimated"} `}><SvgPortfolio className="navIcons" /> <p>Portafolio</p> </div >
                                </Link>
                                <Link to={"/contact"}>
                                    <div onClick={() => toggleSideNav()} className={`sideNavLink animate__animated animate__bounceIn link4 ${location === "/contact" && "navLinkAnimated"} `}><SvgContact className={"navIcons"} /> <p>Contactame</p> </div >
                                </Link>
                                <div className="switchersBoxOnPhone animate__animated animate__bounceIn">
                                    <div className="switcherContainer">
                                        <p className="switcherText">ESP</p>
                                        <label className={`switch ${lenguage} `}>
                                            <span className="slider" onClick={() => changeLenguage(lenguage, dispatch)} ></span>
                                        </label>
                                        <p className="switcherText">ENG</p>
                                    </div>
                                    <div className="switcherContainer">
                                    <SvgMoon className="modeIcons" />
                                    <label className={`switch ${mode} `}>
                                        <span className="slider" onClick={() => changeMode(mode, dispatch)} ></span>
                                    </label>
                                    <SvgSun className="modeIcons littleMarginLeft"/>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div> 
                </div>
            </div>
        )
    }
    
    
}