// axios is used for ajax requests
import axios from 'axios';
import { FETCH_USER } from "./types";

const fetchUser = () => {
    // NOTE: make sure a proxy exists for the local environment, since we have two separate servers
    axios.get('/api/current_user');
}