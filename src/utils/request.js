import axios from 'axios';

//khi request.get nó sẽ nối baseURL vs path trong get
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
export default request;
