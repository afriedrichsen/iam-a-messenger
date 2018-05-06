import * as axios from 'axios';

const baseApiUrl = 'http://localhost:2112/messenger';
/*
const listGuests = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/manage/guests`)
            .then(response =>{
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            })
    })
};

// exports
module.exports = {
    'listGuests': listGuests
};
*/

class DataService {
    static listGuests() {
        return axios.get(`${baseApiUrl}/manage/guests`).then((response) => {
            return response.json();
        }).catch((error) => {
            return error;
        })
    }
}

export default DataService