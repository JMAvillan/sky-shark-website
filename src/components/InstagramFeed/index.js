import axios from 'axios'
import React, { useEffect, useState } from 'react';
// import FbImageLibrary from 'react-fb-image-grid'
import { getInstagramPostsUrls, saveInstagramPostsUrls } from '../../actions/LocalStorage/handleLocalStorage';
import { COLORS } from '../Constants/constants';
import InstagramPost from './InstagramPost';
import './style.css'

/* The instagram feed format was made by inspecting the elements of this page:
https://mohammedraji.github.io/react-ig-feed/ */


//Acccess token expires in 5172545 seconds since august 16 9:30pm (60 days)
//Refresh token before it expires by fetchin this url:
//https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-access-token}
//And grabbing "access_token" and "expires_in" from the reponse
//"expires in" will be used to determine when the next scheduled function should run 
//"access_token" will be used to replace the enviroment variable

const skySharkInstagramInfo = {
    "access_token": "IGQVJWREswcmpLM3VXeVNZAMTUzWXlXSWpPQTNKT1g3NW5wNkpJbnVfQ0FGaXppOUUtU3dZAbUI2SHJHdDU5Y1NPMzVPQnNDeGkyN0pBeUpocDNHcW45RWFTTkR6c3BvQ0cyeXA5ZAUR3",
    "user_id": 17841429031676544,
    profile: {
        "id": "5927833797287073",
        "username": "skysharkgroup"
    }
}
const listOfFields = ['id', 'media_type', 'media_url', 'timestamp', 'caption', 'permalink', 'thumbnail_url', 'username']
const urlForPosts = `https://graph.instagram.com/${skySharkInstagramInfo.user_id}/media?fields=${listOfFields}&access_token=${skySharkInstagramInfo.access_token}`
// const urlForPostData = `https://graph.instagram.com/media-id?fields=id,media_type,media_url,username,timestamp&access_token=${skySharkInstagramInfo.access_token}`
// const urlForPostChildren = `https://graph.instagram.com/album-id/children?fields=${listOfFields.slice(0, 3)}&access_token=${skySharkInstagramInfo.access_token}`
const getRecentPosts = async () => {
    try {
        const response = await axios.get(urlForPosts)
        const listOfPosts = response.data.data;
        // for (let i = 0; i < 6; i++) {
        //     // const postReponse = await axios.get(urlForPostData.replace('media-id', listOfPostsIds[i].id))
        //     if (listOfPosts[i].media_type === "CAROUSEL_ALBUM") {
        //         console.log(listOfPosts[i]);
        //         const children = await axios.get(urlForPostChildren.replace('album-id', listOfPosts[i].id));
        //         const imagesURLs = children.data.data.map((image) => {
        //             return image.media_url;
        //         })
        //         listOfPosts[i]["media_url"] = imagesURLs
        //     }
        //     // listOfPosts.push(postReponse.data)
        // }
        console.table(listOfPosts);
        return listOfPosts;
    } catch (e) {
        console.log(e);
    }
}


const Instagram = () => {
    const [recentPosts, setRecentPosts] = useState(null);
    const handlePostsDisplay = async () => {
        let jsonPosts = getInstagramPostsUrls();
        if (jsonPosts) {
            const { posts } = JSON.parse(jsonPosts);
            setRecentPosts(posts);
        }
        else {
            const posts = await getRecentPosts();
            saveInstagramPostsUrls(posts)
            setRecentPosts(posts);
        }
    }

    const displayRecentImages = () => {
        return recentPosts.slice(0, 3).map((post) => {
            return <InstagramPost post={post} />
            // if (post.media_url === "CAROUSEL_ALBUM")
            //     return <FbImageLibrary images={post.media_url} key={post.id} />
            // else
            //     return <FbImageLibrary images={[post.media_url]} key={post.id} />
        })
    }
    useEffect(() => {
        handlePostsDisplay();
    }, [])
    return (
        <div style={{ backgroundColor: COLORS.BLACK }} className="itemContainer">
            <h4><span>logo circular</span>skysharkgroup <span>Boton Siguenos en Instagram</span></h4>
            <div id='feed' className='content'>
                {recentPosts && displayRecentImages()}
            </div>
        </div>
    );

}

export default Instagram;