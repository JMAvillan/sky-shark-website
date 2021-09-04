const { localStorage } = window;

const saveInstagramPostsUrls = (posts) => {
    localStorage.setItem('igPosts', JSON.stringify({ posts, lastUpdate: new Date().getTime() }));
}
const getInstagramPostsUrls = () => {
    const igPosts = localStorage.getItem('igPosts');
    if (new Date().getTime() - igPosts?.lastUpdate > 3600000 /**1 hour*/)
        return null;
    else
        return igPosts
}

export { getInstagramPostsUrls, saveInstagramPostsUrls };
