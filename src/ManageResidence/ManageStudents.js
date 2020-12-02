import React, { useState, useEffect, Component } from 'react';
import '../ManagerTable.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import studentService from '../Service/studentsService';



class ManageStudents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
        // this.addRoom = this.addRoom.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.DeleteStudent = this.DeleteStudent.bind(this);


    }
    DeleteStudent(studNum) {
        studentService.deleterstudent(studNum).then(res => {
            this.setState({ students: this.state.students.filter(students => students.studNum !== studNum) });
        });

    }

    editStudent(studNum) {
        // this.props.history.push('/update-CatRoom/$'+{roomNumber});
        //this.props.history.push('/update-CatRoom/${roomNumber}');
        window.location.href = 'http://localhost:6677/update-student/' + studNum;


    }

    componentDidMount() {

        studentService.getResStudent().then((response) => {
            this.setState({ students: response.data })
        });
    }

    // addRoom(){

    //     this.props.history.push('/add-room');
    // }

    render() {

        return (

            <>
                <h1 className="text-center">City Edge Students</h1>

                <div style={{ display: "flex" }}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginRight: "auto" }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'http://localhost:6677/add-student';
                        }}
                    > Add Student</button>
                </div>

                <div className='mnanagertable'>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell >Student Number</TableCell>
                                <TableCell >First Name</TableCell>
                                <TableCell> Last Name</TableCell>
                                <TableCell >Gender</TableCell>
                                <TableCell >DOB</TableCell>
                                <TableCell >Identity Number</TableCell>
                                <TableCell >Home Language</TableCell>
                                <TableCell >Contacts</TableCell>
                                <TableCell >Campus ID</TableCell>
                                <TableCell >Student Email</TableCell>
                                <TableCell >Res ID</TableCell>
                                <TableCell >Action</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.students.map(
                                    student =>
                                        <TableRow key={student.studNum}>

                                            <TableCell >{student.studNum}</TableCell>
                                            <TableCell>{student.firstName}</TableCell>
                                            <TableCell>{student.lastName}</TableCell>
                                            <TableCell >{student.gender}</TableCell>
                                            <TableCell >{student.dob}</TableCell>
                                            <TableCell >{student.identityNum}</TableCell>
                                            <TableCell >{student.homeLanguage}</TableCell>
                                            <TableCell >{student.contactNum}</TableCell>
                                            <TableCell >{student.campusId}</TableCell>
                                            <TableCell >{student.studEmail}</TableCell>
                                            <TableCell >{student.resId}</TableCell>
                                            <TableCell>
                                                <button onClick={() => this.editStudent(student.studNum)} className="btn btn-info">update</button>
                                                <button style={{ marginLeft: "10px" }}  onClick={() => this.DeleteStudent(student.studNum)} className="btn btn-danger">Delete</button>

                                            </TableCell>

                                        </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </div>



            </>

        )


    }
}

export default ManageStudents