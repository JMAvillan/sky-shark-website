import React from 'react';
import './style.css'
/* The instagram feed format was made by inspecting the elements of this page:
https://mohammedraji.github.io/react-ig-feed/ */
const InstagramPost = ({ post, hasMultiple = false }) => {
    const { permalink, media_url, id, media_type, thumbnail_url } = post;
    const shortCaption = post.caption.split('\n')[0];
    return (
        <div key={id} className={'instagramPost'}>
            <a href={permalink} title={shortCaption} target='_blank'>
                <img className='postImage' alt={shortCaption} src={media_type !== 'VIDEO' ? media_url : thumbnail_url} />
            </a>
        </div>
    );
}
export default InstagramPost;