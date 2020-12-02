import axios from 'axios'

const catsvill_Rest_URL = "http://localhost:8080/systemsmart/room";

class UserService {

    getResUser(){

       return axios.get(catsvill_Rest_URL +"/all");
    }

    createRoom(room){
        return axios.post(catsvill_Rest_URL+"/create", room);
    }

    getRoomById(roomId){
        return axios.get(catsvill_Rest_URL + "/update" + "/" + roomId);
    }

    updateroom(roomId, room){
        return axios.put(catsvill_Rest_URL + "/update" + "/" + roomId,room);
    }

    deleteroom(roomId){
        return axios.delete(catsvill_Rest_URL +"/delete/"+ roomId);
    }
         
    }


export default new UserService();