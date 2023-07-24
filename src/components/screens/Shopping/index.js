import React, { useEffect, useContext } from 'react'
// import { fetchInstagramPosts } from '../../../actions/fetchInstagramPosts'
import Products from '../../Products'
import SortMenu from '../../Products/SortMenu'
import { Categories } from '../../../useContext';
import './style.css'

function Shopping() {
    // fetchInstagramPosts()
    // getRecentPosts();
    const { categories, setCategories } = useContext(Categories);

    useEffect(() => {
        const catObj = {}
        const obtainedCategories = [
            { name: 'Banderas', id: 1 },
            { name: 'Carpas', id: 2 },
            { name: 'Lanyards', id: 3 },
            { name: 'Table Covers', id: 4 },
            { name: 'Sky Dancers', id: 5 },
            { name: 'Valla Publicitaria', id: 6 },
            { name: 'Otros', id: 7, }];

        obtainedCategories.forEach(category => {
            return catObj[category.id] = { ...category, selected: false }
        })

        // if (Object.keys(selectedCategories)?.length > 0) {
        //     Object.keys(selectedCategories).forEach((id) => {
        //         catObj[id].selected = true;
        //     })
        // }
        setCategories(catObj);
    }, [])

    return (
        <div className="bodyContainer">
            {/* <Navbar /> */}

            {/* <h2>Viendo Todos Los Productos</h2> */}
            <div id="shoppingContent">
                {categories && <SortMenu />}
                <div>
                    <Products products={[{ title: "Feather Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XO5Rn4LnDoUAX8FqhYd&tn=_NzZmBQRpJMoxDK3&_nc_ht=scontent.fsig3-1.fna&oh=693ab30f3c0f18ba5c359fdcbdb05a1a&oe=6194D67F" },
                    { title: "Tear Drop Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XO5Rn4LnDoUAX8FqhYd&tn=_NzZmBQRpJMoxDK3&_nc_ht=scontent.fsig3-1.fna&oh=693ab30f3c0f18ba5c359fdcbdb05a1a&oe=6194D67F" },
                    { title: "Rectangle Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XO5Rn4LnDoUAX8FqhYd&tn=_NzZmBQRpJMoxDK3&_nc_ht=scontent.fsig3-1.fna&oh=693ab30f3c0f18ba5c359fdcbdb05a1a&oe=6194D67F" },
                    { title: "Desinfectante De Manos", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XO5Rn4LnDoUAX8FqhYd&tn=_NzZmBQRpJMoxDK3&_nc_ht=scontent.fsig3-1.fna&oh=693ab30f3c0f18ba5c359fdcbdb05a1a&oe=6194D67F" },
                    { title: "Oferta de Verano", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XO5Rn4LnDoUAX8FqhYd&tn=_NzZmBQRpJMoxDK3&_nc_ht=scontent.fsig3-1.fna&oh=693ab30f3c0f18ba5c359fdcbdb05a1a&oe=6194D67F" }]} />
                </div>
            </div>
        </div>
    )
}

export default Shopping
