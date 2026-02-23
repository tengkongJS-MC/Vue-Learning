import axios from "axios";
import path from "./path";

const api = {
    getTuijian (){
        return axios.get(path.baseUrl + path.tuijian);
    }
}

export default api;