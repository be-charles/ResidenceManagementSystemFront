import axios from 'axios'

const students_URL = "http://localhost:8080/student";

class StudentService {

    getResStudent() {

        return axios.get(students_URL + "/all");
    }

    createStudent(room) {
        return axios.post(students_URL + "/create", room);
    }

    getStudentById(roomId) {
        return axios.get(students_URL + "/update" + "/" + roomId);
    }

    updatestudent(roomId, room) {
        return axios.put(students_URL + "/update" + "/" + roomId, room);
    }

    deleterstudent(roomId) {
        return axios.delete(students_URL + "/delete/" + roomId);
    }

}


export default new StudentService();