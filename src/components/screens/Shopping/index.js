import React from 'react'
// import { fetchInstagramPosts } from '../../../actions/fetchInstagramPosts'
import Banner from '../../Banner'
import { COLORS } from '../../Constants/constants'
import Navbar from '../../Navbar'
import Products from '../../Products'
import SortMenu from '../../Products/SortMenu'
import './style.css'

function Shopping() {
    // fetchInstagramPosts()
    // getRecentPosts();
    return (
        <div className="bodyContainer">
            {/* <Navbar /> */}

            {/* <h2>Viendo Todos Los Productos</h2> */}
            <SortMenu categories={[
                { name: 'Banderas', id: 1 },
                { name: 'Carpas', id: 2 },
                { name: 'Lanyards', id: 3 },
                { name: 'Table Covers', id: 4 },
                { name: 'Sky Dancers', id: 5 },
                { name: 'Valla Publicitaria', id: 6 },
                { name: 'Otros', id: 7, }]
            } />
            <div>
                <Products products={[{ title: "Feather Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/236565110_390601182400353_2422836995529331847_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=GabA66lXffwAX-gX4rQ&_nc_ht=scontent.fsig3-1.fna&oh=b129a4985f207dabe87eda32b25c62a9&oe=61575679" },
                { title: "Tear Drop Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/236690018_390601195733685_1780103517860585140_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_ohc=_VQ8g81fHrgAX8ZJ_vz&_nc_ht=scontent.fsig3-1.fna&oh=8538e09594fe4cd395e3b47729c83b70&oe=6159B323" },
                { title: "Rectangle Flag", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/236796301_390601189067019_1732592542041376528_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=cg0aKVadaT8AX8TEXud&_nc_ht=scontent.fsig3-1.fna&oh=33b36af8bc72850a8432fe2f6fe2276f&oe=61592693" },
                { title: "Desinfectante De Manos", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/s640x640/220572483_376136877180117_7570773893012590158_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=H73NdmoDRdIAX-DF-ZM&_nc_ht=scontent.fsig3-1.fna&oh=5a98d8115d759e0322c672dbbd4299a0&oe=6159B2DA" },
                { title: "Oferta de Verano", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/s640x640/212885259_372080937585711_5347128716160359672_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6LMar5LNwY4AX8eqDON&_nc_ht=scontent.fsig3-1.fna&oh=ae917b7fa91bd1e2422bc60412011ac7&oe=615957CE" }]} />
            </div>
        </div>
    )
}

export default Shopping
