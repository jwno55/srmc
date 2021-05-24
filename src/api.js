import axios from "axios";

const makeRequest = (path, params) => 
    axios.get(path,{
        params: {
            ...params
        }
    });

const getAnything = async(path, params = {}) => {
    try{
        const {
            data: { items },
            data
        } = await makeRequest(path, params);
        return [items || data, null]
    } catch(e){
        return [null, e]
    }
};

export const bereaApi = {
    nowFeeding: () => getAnything(`https://www.sungrakberea.org/wp-json/wp/v2/posts?per_page=10`),
    feed: id => getAnything(`https://www.sungrakberea.org/wp-json/wp/v2/posts/${id}`)
};
