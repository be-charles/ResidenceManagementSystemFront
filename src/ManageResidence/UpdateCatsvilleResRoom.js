import { RoomService } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import React, { Component } from 'react'
import CatsvillResService from '../Service/CatsvillResService';

export default class UpdateCatsvilleResRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {

         //  id: this.props.params.roomNumber,
            roomNumber:'',
            type: '',
            price: '',
            status: ''
        }
        this.changeRoomNumberHandler = this.changeRoomNumberHandler.bind(this);
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateRoom = this.updateRoom.bind(this);

    }

    // componentDidMount(){
    //     CatsvillResService.getRoomById(this.roomNumber).then((res) =>{
    //      let room = res.data;
    //         this.setState({roomNumber: room.roomNumbe,
    //             type: room.type,
    //             price: room.price,
    //             status: room.status

    //         });
    //     })
    // }

    updateRoom = (e) => {
        e.preventDefault();
        let room = { roomNumber: this.state.roomNumber, type: this.state.type, price: this.state.price, status: this.state.status };
        console.log('room =>' + JSON.stringify(room));
        RoomService.updateroom(room, this.state.roomNumber).then(res => {
            window.location.href = 'http://localhost:6677/CatsvilleResidence';

        });

    }

    changeRoomNumberHandler = (event) => {
        this.setState({ roomNumber: event.target.value });
    }

    changeRoomTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
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
                            <h3 className='text-center'>Update Residence Room</h3>
                            <div className='card-body'>
                                <form>
                                    <div className="form-group">
                                        <p>Room Number</p>
                                        <input placeholder="Room Number" name="roomNumber" className="form-control"
                                            value={this.state.roomNumber} onChange={this.changeRoomNumberHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Room Type</p>
                                        <input placeholder="Room Type" name="roomType" className="form-control"
                                            value={this.state.type} onChange={this.changeRoomTypeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Price</p>
                                        <input placeholder="Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>

                                    <div className="form-group">
                                        <p>Status</p>
                                        <input placeholder="Status" name="status" className="form-control"
                                            value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>
                                    <div className="form-group row" style={{ display: "flex" }}>
                                        <div className="col-md-6">
                                            <button className="btn btn-success" onClick={this.updateRoom}>Save</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = 'http://localhost:6677/CatsvilleResidence';
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
