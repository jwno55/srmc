import axios from "axios";

async function getFeeds(path) {
    try {
        const { data: { items }, data } = await axios.get(path);
        return items || data;
    } catch (e) {
        console.error(e);
        console.error(JSON.stringify(e));
        return null;
    }
}

export const bereaApi = {
    nowFeeding: () => getFeeds(`https://www.sungrakberea.org/wp-json/wp/v2/posts?per_page=10`),
    feed: id => getFeeds(`https://www.sungrakberea.org/wp-json/wp/v2/posts/${id}`)
};
