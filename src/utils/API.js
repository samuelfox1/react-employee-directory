import axios from "axios";


// how many reandom employees to get
const num = 20
const nat = 'us'
const URL = `https://randomuser.me/api/?nat=${nat}&inc=name,picture,email,cell,dob&results=${num}`;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function () {
    return axios.get(URL);
  }
};
