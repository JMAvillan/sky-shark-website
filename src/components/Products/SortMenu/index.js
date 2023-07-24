import './style.css';
import React, { useEffect, useState, useRef, useContext } from 'react'
import { Categories } from '../../../useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../../Constants/constants';

function SortMenu(props) {
    const { categories, setCategories } = useContext(Categories);
    const [selectedAll, setSelectedAll] = useState(false)
    const displayCheckboxOptions = () => {
        // const [color, setColor] = useState('#fff');
        return Object.values(categories).map((category) => {
            const { name, id, selected } = category;
            const onClick = () => {
                console.log(categories[id])
                if (!categories[id].selected) categories[id].selected = true
                else categories[id].selected = false
                setCategories({ ...categories });
            }
            return (
                <li key={id}>
                    <FontAwesomeIcon id={id} icon={faCircle} className={'customCheck'}
                        style={{ backgroundColor: categories[id].selected ? COLORS.DIRT_ORANGE_DARKER : "transparent", borderRadius: 200, width: 18, height: 18 }}
                        onClick={onClick} />
                    <label onClick={onClick}> {name} </label>
                </li>
            )
        })
    }

    let sortMenuBtnRef = useRef();
    useEffect(() => {
        const displayOfProducts = document.getElementById('displayOfProducts');
        const sortMenu = document.getElementById('sortMenu');
        sortMenu.style.maxHeight = `${(window.innerHeight - (window.innerWidth <= 670 ? 100 : 130))}px`;
        let percentageToMoveBy = window.innerWidth <= 670 ? .885 : .935;
        const sortMenuBtn = document.getElementById('sortMenuBtn');
        const icon = document.getElementById('arrowIcon');
        setTimeout(() => {
            sortMenu.style.width = `${displayOfProducts.offsetWidth}px`;
            sortMenu.style.left = `-${displayOfProducts.offsetWidth * percentageToMoveBy}px`;
            sortMenu.style.display = 'flex';
        }, 0);


        const toggleSortMenu = (leftOffset, btnHeight, firstClass, secondClass) => {
            sortMenu.style.left = `${leftOffset}px`;
            sortMenuBtn.style.height = `${btnHeight}px`
            // sortMenuBtn.style.backgroundColor = sortMenuBtnRef.bgColor;
            icon.classList.toggle(firstClass)
            setTimeout(() => {
                icon.classList.toggle(secondClass)
            }, 500);
        }

        sortMenuBtn.addEventListener('click', () => {
            if (sortMenu.style.left === '15px') {
                toggleSortMenu(-displayOfProducts.offsetWidth * percentageToMoveBy, sortMenuBtnRef.current.height, "paused", "rotate");
            }
            else {
                sortMenuBtnRef.current = { height: sortMenuBtn.offsetHeight }
                toggleSortMenu(15, sortMenu.offsetHeight, "rotate", "paused");
            }
        })

        window.addEventListener('resize', (evt) => {
            percentageToMoveBy = window.innerWidth <= 670 ? .885 : .935;
            sortMenu.style.width = `${displayOfProducts.offsetWidth}px`;
            if (window.innerWidth <= 960) {
                if (sortMenu.style.left !== '15px') {
                    sortMenu.style.left = `-${displayOfProducts.offsetWidth * percentageToMoveBy}px`;
                }
                else {
                    sortMenuBtn.style.height = `${(window.innerHeight - (window.innerWidth <= 670 ? 100 : 130))}px`
                    sortMenu.style.maxHeight = `${(window.innerHeight - (window.innerWidth <= 670 ? 100 : 130))}px`;
                }
            }
        });

        console.log(!Object.keys(categories).find((key) => { return categories[key].selected }))
        Object.keys(categories).forEach((key) => { console.log(categories[key]) })
        if (!Object.keys(categories).find((key) => { return categories[key].selected })) {
            Object.keys(categories).forEach((key) => { categories[key].selected = true })
            setCategories({ ...categories })
            setSelectedAll(true);
        }
    }, []);
    if (selectedAll && Object.keys(categories).length !== Object.keys(categories).length) setSelectedAll(false)
    else if (!selectedAll && Object.keys(categories).length === Object.keys(categories).length) setSelectedAll(true);
    return (
        <div id='sortMenu' >
            <div id="categoryContainer" className='content'>
                <h4>Categorias</h4>
                <ul id={'sortMenuList'}>
                    <li>
                        <FontAwesomeIcon id={0} icon={faCircle} className={'customCheck'}
                            style={{ borderRadius: 200, width: 18, height: 18 }}
                            onClick={() => {
                                if (selectedAll) {
                                    Object.keys(categories).forEach((key) => { categories[key].selected = false })
                                    setCategories({ ...categories })
                                    setSelectedAll(false)
                                }
                                else {
                                    Object.keys(categories).forEach((key) => { categories[key].selected = true })
                                    setCategories({ ...categories })
                                    setSelectedAll(true);
                                }
                            }} />
                        <label>{!selectedAll ? "Seleccionar Todos" : "Remover todas las seleciones"} </label>
                    </li>
                    {displayCheckboxOptions()}
                    {displayCheckboxOptions()}
                    {displayCheckboxOptions()}
                    {displayCheckboxOptions()}
                    {displayCheckboxOptions()}
                    {displayCheckboxOptions()}

                </ul>
            </div>
            <div id="sortMenuBtn">
                <FontAwesomeIcon icon={faArrowRight} id={'arrowIcon'} />
            </div>
        </div>
    )
}

export default SortMenu
