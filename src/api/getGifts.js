

export const getGift = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oTap5fgE5Cc92l6mC8GTQOAWlHDp57l2`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        }
    });
    return gifs;
};