import './style.css';
import React, { useEffect, useState, useRef, useContext } from 'react'
import { SelectedCategories } from '../../../useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../../Constants/constants';

function SortMenu({ categories }) {
    const { selectedCategories, setSelectedCategories } = useContext(SelectedCategories);

    useEffect(() => {
        const displayOfProducts = document.getElementById('displayOfProducts');
        const sortMenu = document.getElementById('sortMenu');
        sortMenu.style.width = `${displayOfProducts.offsetWidth}px`;
        sortMenu.style.left = `-${displayOfProducts.offsetWidth * .90}px`;

        const sortMenuBtn = document.getElementById('sortMenuBtn');
        const sortMenuList = document.getElementById('sortMenuList');
        const icon = document.getElementById('arrowIcon');
        let sortMenuBtnRef = null;


        const toggleSortMenu = (leftOffset, btnHeight, firstClass, secondClass) => {
            sortMenu.style.left = `${leftOffset}px`;
            sortMenuBtn.style.height = `${btnHeight}px`
            // sortMenuBtn.style.backgroundColor = sortMenuBtnRef.bgColor;
            icon.classList.toggle(firstClass)
            setTimeout(() => {
                icon.classList.toggle(secondClass)
            }, 500);
        }

        window.addEventListener('resize', (evt) => {
            sortMenu.style.width = `${displayOfProducts.offsetWidth}px`;
            if (window.innerWidth <= 670) {
                if (sortMenu.style.left !== '15px') {
                    sortMenu.style.left = `-${displayOfProducts.offsetWidth * .90}px`;
                }
            }
        });

        sortMenuBtn.addEventListener('click', () => {
            if (sortMenu.style.left === '15px') {
                toggleSortMenu(-displayOfProducts.offsetWidth * .90, sortMenuBtnRef.height, "paused", "rotate");
                sortMenuList.style.borderWidth = '0px';
            }
            else {
                sortMenuBtnRef = { height: sortMenuBtn.offsetHeight }
                toggleSortMenu(15, sortMenu.offsetHeight, "rotate", "paused");
                sortMenuList.style.borderWidth = '1px';
            }
        })


    }, []);
    const displayCheckboxOptions = () => {
        // const [color, setColor] = useState('#fff');
        return categories.map(({ name, id }) => {
            return (
                <div >
                    <li>
                        <FontAwesomeIcon id={id} icon={faCircle} className={'customCheck'} />
                        <label for={id}> {name} </label>
                    </li>
                </div>
            )
        })
    }
    return (
        <div id='sortMenu'>
            <ul className='content' id={'sortMenuList'}>
                <div >
                    <li>
                        <FontAwesomeIcon id={0} icon={faCircle} className={'customCheck'} />
                        <label for={0}> Seleccionar Todos </label>
                    </li>
                </div>
                {displayCheckboxOptions()}

            </ul>
            <div id="sortMenuBtn">
                <FontAwesomeIcon icon={faArrowRight} id={'arrowIcon'} />
            </div>
        </div>
    )
}

export default SortMenu
