import StudentSever from '../Service/studentsService';
const { Component } = require("react");



class CreateStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studNum: '',
            firstName: '',
            lastName: '',
            gender:'',
            dob: '',
            identityNum: '',
            homeLanguage: '',
            contactNum: '',
            studEmail: '',
            campusId: '',
            resId: ''
        }
        this.changestudNumHandler = this.changestudNumHandler.bind(this);
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeIdentityNumHandler = this.changeIdentityNumHandler.bind(this);
    
        this.changerehomeLanguageHandler = this.changerehomeLanguageHandler.bind(this);
        this.changerecampusIdHandler = this.changerecampusIdHandler.bind(this);
        this.changeContactNumHandler = this.changeContactNumHandler.bind(this);
        this.changeStudEmailHandler = this.changeStudEmailHandler.bind(this);
        this.changeresIdHandler = this.changeresIdHandler.bind(this);
  
      

    }

    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            studNum: this.state.studNum, firstName: this.state.firstName, lastName: this.state.lastName, gender: this.state.gender,
            dob: this.state.dob, identityNum: this.state.identityNum, homeLanguage: this.state.homeLanguage, contactNum: this.state.contactNum,
            campusId: this.state.campusId, studEmail: this.state.studEmail, resId: this.state.resId};
        console.log('student =>' + JSON.stringify(student));

        StudentSever.createStudent(student).then(res => {

            window.location.href = 'http://localhost:6677/ManageStudents';
        });
    }
    changestudNumHandler = (event) => {
        this.setState({ studNum: event.target.value });
    }

    changefirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeBobHandler = (event) => {
        this.setState({ dob: event.target.value });
    }
    /////

    changeIdentityNumHandler = (event) => {
        this.setState({ identityNum: event.target.value });
    }

    

    changerehomeLanguageHandler = (event) => {
        this.setState({ homeLanguage: event.target.value });
    }


    changeContactNumHandler = (event) => {
        this.setState({ contactNum: event.target.value });
    }

    changerecampusIdHandler = (event) => {
        this.setState({ campusId: event.target.value });
    }

    changeStudEmailHandler = (event) => {
        this.setState({ studEmail: event.target.value });
    }

    changeresIdHandler = (event) => {
        this.setState({ resId: event.target.value });
    }

  

    // cancel(){
    //     this.props.history.push('/CatsvilleResidence')
    // }

    render() {
        return (

            <div>
                <div className='Container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-3">
                            <h3 className='text-center'>Add Student</h3>
                            <div className='card-body'>
                                <form>
                                    <div className="form-group">
                                        <p>Student Number</p>
                                        <input placeholder="Student Number" name="studNum" className="form-control"
                                            value={this.state.studNum} onChange={this.changestudNumHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>First Name</p>
                                        <input placeholder="First Nam" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Last Name</p>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Gender</p>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Date of Birth</p>
                                        <input placeholder="Bob" name="dob" className="form-control"
                                            value={this.state.dob} onChange={this.changeBobHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Identity Number</p>
                                        <input placeholder="Identity Number" name="identityNum" className="form-control"
                                            value={this.state.identityNum} onChange={this.changeIdentityNumHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>home Language</p>
                                        <input placeholder="Home Language" name="homeLanguage" className="form-control"
                                            value={this.state.homeLanguage} onChange={this.changerehomeLanguageHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Contact Number</p>
                                        <input placeholder="Contact Number" name="contactNum" className="form-control"
                                            value={this.state.contactNum} onChange={this.changeContactNumHandler} />
                                    </div>


                                    <div className="form-group">
                                        <p>Cumpus Id</p>
                                        <input placeholder="Cumpus Id" name="campusId" className="form-control"
                                            value={this.state.campusId} onChange={this.changerecampusIdHandler} />
                                    </div>


                                    <div className="form-group">
                                        <p>Student Email</p>
                                        <input placeholder="Student Email" name="studEmail" className="form-control"
                                            value={this.state.studEmail} onChange={this.changeStudEmailHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Res Id</p>
                                        <input placeholder="Res Id" name="resId" className="form-control"
                                            value={this.state.resId} onChange={this.changeresIdHandler} />
                                    </div>
                                   

                                    <div className="form-group row" style={{ display: "flex" }}>
                                        <div className="col-md-6">
                                            <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = 'http://localhost:6677/ManageStudents';
                                                }}
                                            > Cancel</button>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )

    }
}
export default CreateStudent