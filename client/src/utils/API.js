// this file will be responsible for our API requests from the client
// modeled after week 20 activity 8 + 11
// dependencies
import axios from "axios";

export default {
    // this will send the get request to the server to search the google books api
    searchBooks: function (query) {
        return axios.get("/api/google",
            {
                params: { q: query }
            });
    }
};