import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../Constants/constants'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css'

const Navbar = () => {
    const isBurgerOpen = useRef(false);
    const [burgerIcon, setIcon] = useState(faBars);
    useEffect(() => {
        const stickyContainer = document.querySelector('#stickyContainer');
        const navBurger = document.querySelector('#navButton');
        const list = document.querySelector('#navUL');
        const navListItems = document.querySelectorAll('.navLI');


        const openBurger = ({ listDisplayType = "block" }) => {
            isBurgerOpen.current = true;
            if (window.scrollY < 10)
                window.scroll(0, 10)
            console.log("Opening")
            setIcon(faTimes);
            navListItems.forEach((listItem) => {
                listItem.style.display = "block";
            })
            list.style.display = `${listDisplayType}`;
            stickyContainer.style.borderBottomLeftRadius = (listDisplayType !== "block" ? "0px" : "10px");
            stickyContainer.style.borderBottomRightRadius = (listDisplayType !== "block" ? "0px" : "10px");
            // list.style.borderWidth = "1px";
            navBurger.removeEventListener('click', openBurger);
            navBurger.addEventListener('click', closeBurger)
        }

        const closeBurger = () => {
            isBurgerOpen.current = false;
            console.log("Closing")
            setIcon(faBars);
            navListItems.forEach((listItem) => {
                listItem.style.display = "none";
            })
            list.style.display = "none";
            stickyContainer.style.borderBottomLeftRadius = "0px";
            stickyContainer.style.borderBottomRightRadius = "0px";
            // list.style.borderWidth = "0px";
            navBurger.removeEventListener('click', closeBurger);
            navBurger.addEventListener('click', openBurger)
        }

        navBurger.addEventListener('click', openBurger);
        window.addEventListener('scroll', () => {
            if (isBurgerOpen.current && window.scrollY < 10)
                window.scroll(0, 10)
        })
        window.addEventListener('resize', (event) => {
            if (event?.path)
                if (event.path[0].innerWidth > 670)
                    openBurger({ listDisplayType: "flex" });
                else
                    closeBurger();
        });

        navListItems.forEach((listItem) => {
            listItem.addEventListener('click', () => {
                if (window.screen.width <= 670)
                    closeBurger();
            });
        });
    }, [])
    return (
        <div style={{ backgroundColor: COLORS.BLACK, borderBottom: '1px solid' + COLORS.LIGHT_GRAY }} id="stickyContainer">
            <div id="navBarMainContainer">
                <div id="header">
                    <h3 id="logoText">Sky Shark</h3>
                    <Logo />
                    <FontAwesomeIcon icon={burgerIcon} color={'white'} id={'navButton'} />

                </div>
                <div id="navContainer">
                    <ul id="navUL">
                        <li className="navLI"><Link style={{ color: COLORS.DIRT_ORANGE_DARK }} to='/'>Menu Principal</Link></li>
                        <li className="navLI"><Link style={{ color: COLORS.DIRT_ORANGE_DARK }} to='/productos'>Comprar</Link></li>
                        <li className="navLI"><Link style={{ color: COLORS.DIRT_ORANGE_DARK }} to='/conocenos'>Sobre Nosotros</Link></li>
                        <li className="navLI"><Link style={{ color: COLORS.DIRT_ORANGE_DARK }} to='/contactenos'>Contactenos</Link></li>
                        <li className="navLI"><Link style={{ color: COLORS.DIRT_ORANGE_DARK }}>Carrito</Link></li>
                    </ul >
                </div>
            </div>
        </div>
    )


}

export default Navbar;
