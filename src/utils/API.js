import axios from "axios";


// how many reandom employees to get
const num = 5
const URL = `https://randomuser.me/api/?inc=name,picture,email,cell,dob&results=${num}`;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function () {
    return axios.get(URL);
  }
};
