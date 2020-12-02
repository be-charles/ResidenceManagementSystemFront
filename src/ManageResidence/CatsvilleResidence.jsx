import React, { useState, useEffect, Component } from 'react';
import UserService from '../Service/CatsvillResService';
import '../ManagerTable.css';
import { Table , TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { history } from "react-router-dom";
//import CatsvillResService from '../Service/CatsvillResService';
import axios from 'axios'



class CatsvilleResidence extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        // this.addRoom = this.addRoom.bind(this);
          this.editRoom = this.editRoom.bind(this);
          this.DeleteRoom = this.DeleteRoom.bind(this);
       

    }
    DeleteRoom(roomNumber) {
        UserService.deleteroom(roomNumber).then(res =>{
            this.setState({ users: this.state.users.filter(users => users.roomNumber !== roomNumber)});        
        });

    }   

    editRoom(roomNumber){ 
        // this.props.history.push('/update-CatRoom/$'+{roomNumber});
        //this.props.history.push('/update-CatRoom/${roomNumber}');
        window.location.href = 'http://localhost:6677/update-CatRoom/'+roomNumber;


    }

    componentDidMount(){

        UserService.getResUser().then((response)=>{
            this.setState({users: response.data})
        });
    }

    // addRoom(){

    //     this.props.history.push('/add-room');
    // }

    render(){

        return(
               
<>
            <h1  className = "text-center">Catsville Room Management</h1>

                <div style={{ display: "flex" }}>
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "auto" }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'http://localhost:6677/add-room';
                    }}
                > Add Room</button>
                </div>
                
                <div className= 'mnanagertable'>
                <Table className = "table table-striped">
                  <TableHead> 
                    <TableRow>
                            <TableCell> Room Number</TableCell>
                            <TableCell>Room Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Room Status</TableCell>
                            <TableCell>Action</TableCell>
                                </TableRow>
                   </TableHead>
                    <TableBody>
                    {
                        this.state.users.map(
                           user =>
                           <TableRow key = {user.roomNumber}>
                                    <TableCell>{user.roomNumber}</TableCell>
                                    <TableCell>{user.type}</TableCell>
                                    <TableCell>{user.price}</TableCell>
                                    <TableCell>{user.status}</TableCell>
                                    <TableCell>
                                        <button onClick={() => this.editRoom(user.roomNumber)} className ="btn btn-info">update</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.DeleteRoom(user.roomNumber)} className="btn btn-danger">Delete</button>

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

export default CatsvilleResidence