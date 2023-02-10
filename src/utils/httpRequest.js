import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);
//khi request.get nó sẽ nối baseURL vs path trong get
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const res = await httpRequest.get(path, options);
    return res.data;
};
export default httpRequest;
