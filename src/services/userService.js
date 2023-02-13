import axios from 'axios';
import * as httpRequest from '~/utils/httpRequest';

//axios
export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: { page, per_page: perPage },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getFollowing = async () => {
    try {
        const res = await axios.get('https://63e9a3a34f3c6aa6e7cfab08.mockapi.io/api/followers');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
