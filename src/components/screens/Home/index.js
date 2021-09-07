import React from 'react'
// import { fetchInstagramPosts } from '../../../actions/fetchInstagramPosts'
import Banner from '../../Banner'
import Navbar from '../../Navbar'
import Products from '../../Products'
import Feed from '../../InstagramFeed'
import './style.css'
import { COLORS } from '../../Constants/constants'

function Home() {
    // fetchInstagramPosts()
    // getRecentPosts();
    return (
        <div className="bodyContainer">
            {/* <Navbar /> */}
            <Banner />
            <div className="bodyContainer">
                <div id="promotion">
                </div>
                <div id="promotion">
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home
