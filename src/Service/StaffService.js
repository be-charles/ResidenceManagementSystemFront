import axios from 'axios'

const staff_URL = "http://localhost:8080/staff";

class StaffService {

    getResStafft() {

        return axios.get(staff_URL + "/all");
    }

    createStaff(staff) {
        return axios.post(staff_URL + "/create", staff);
    }

    getStaffById(staffID) {
        return axios.get(staff_URL + "/update" + "/" + staffId);
    }

    updatestaff(staffId, staff) {
        return axios.put(staff_URL + "/update" + "/" + staffId, staff);
    }

    deleterstaff(staffId) {
        return axios.delete(staff_URL + "/delete/" + staffId);
    }

}


export default new StaffService();