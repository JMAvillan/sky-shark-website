import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

import './style.css'

const Navbar = () => {
    useEffect(() => {
        const stickyContainer = document.querySelector('#stickyContainer');
        const navBurger = document.querySelector('#navButton');
        const list = document.querySelector('#navUL');
        const navListItems = document.querySelectorAll('.navLI');

        const openBurger = ({ listDisplayType = "block" }) => {
            console.log("Opening")
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
            console.log("Closing")
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

        window.addEventListener('resize', (event) => {
            if (event?.path)
                if (event.path[0].innerWidth > 670)
                    openBurger({ listDisplayType: "flex" });
                else
                    closeBurger();
        });
    }, [])
    return (
        <div id="stickyContainer">
            <div id="navBarMainContainer">
                <div id="header">
                    <h3 id="logoText">Sky Shark</h3>
                    <Logo />
                    <p id="navButton">burger icon</p>
                </div>
                <div id="navContainer">
                    <ul id="navUL">
                        <li className="navLI"><Link to='/'>Menu Principal</Link></li>
                        <li className="navLI"><Link to='/productos'>Comprar</Link></li>
                        <li className="navLI">Sobre Nosotros</li>
                        <li className="navLI">Contactenos</li>
                        <li className="navLI">Carrito</li>
                    </ul >
                </div>
            </div>
        </div>
    )


}

export default Navbar;
