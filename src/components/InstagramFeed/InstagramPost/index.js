import React from 'react';
import './style.css'
/* The instagram feed format was made by inspecting the elements of this page:
https://mohammedraji.github.io/react-ig-feed/ */
const InstagramPost = ({ post, hasMultiple = false }) => {
    const { permalink, media_url, id, media_type, thumbnail_url } = post;
    return (
        <div key={id} className={'instagramPost'}>
            <a href={permalink} target='_blank'>
                <img className='postImage' src={media_type !== 'VIDEO' ? media_url : thumbnail_url} width={200} height={200} />
            </a>
        </div>
    );
}
export default InstagramPost;