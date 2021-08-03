import React from 'react'
import { fetchImagesFromFacebook } from '../../../actions/fetchURL'
import Banner from '../../Banner'
import Navbar from '../../Navbar'
import Products from '../../Products'
import './style.css'

function Home() {
    fetchImagesFromFacebook()
    return (
        <div id="mainContainer">
            <Navbar />
            <Banner />
            <div id="content">
                <div id="promotion">
                    <Products products={[{ title: "Desinfectante de Manos", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/220572483_376136877180117_7570773893012590158_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=3ydaGjLLODgAX9yMr55&_nc_ht=scontent.fsig3-1.fna&oh=50025ee1aa9cf12371ecc5115647012d&oe=612EE369" },
                    { title: "Catalogo", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/159102911_293448848782254_2215167384132620964_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=zRO0aB3UrMwAX-nb6rh&_nc_ht=scontent.fsig3-1.fna&oh=5e4900f8aedcc5a52d7db676cecff062&oe=61304A68" },
                    { title: "Catalogo", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158947131_293448842115588_1475735341147181062_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=2wjra8VA5KcAX_qAIkx&_nc_ht=scontent.fsig3-1.fna&oh=5895d0a652f0c1a6eb61fe8c1399205a&oe=612E017F" },
                    { title: "Catalogo", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/158576465_293448828782256_1983640831186458660_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=973b4a&_nc_ohc=voiaxJHrzNIAX_7b6gq&_nc_ht=scontent.fsig3-1.fna&oh=cadc53aa013ece9e70fcf92943213535&oe=612F59C6" },
                    { title: "Oferta de Viernes Negro", url: "https://scontent.fsig3-1.fna.fbcdn.net/v/t1.6435-9/127769907_230171145110025_1877533337121143612_n.png?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=S2xiBj63KWcAX8uVqVt&_nc_ht=scontent.fsig3-1.fna&oh=32728a3d9cc437c30e9d49da13bd3afa&oe=612F0372" }]} />
                </div>
            </div>
        </div>
    )
}

export default Home
