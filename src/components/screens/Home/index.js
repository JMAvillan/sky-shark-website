import React from 'react'
// import { fetchInstagramPosts } from '../../../actions/fetchInstagramPosts'
import Banner from '../../Banner'
import Feed from '../../InstagramFeed'
import './style.css'

function Home() {
    // fetchInstagramPosts()
    // getRecentPosts();
    return (
        <div className="bodyContainer">
            <Banner />
            <div className="bodyContainer">
                <div id="homeCategories">

                </div>
                <div id="promotion">
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home
