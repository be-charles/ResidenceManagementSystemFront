import CatsvillResService from "../Service/CatsvillResService";
const { Component } = require("react");



class CreateResRoom extends Component{

    constructor(props){
        super(props)

        this.state = {
            roomNumber: '',
            type: '',
            price: '',
            status: ''
            }
        this.changeRoomNumberHandler = this.changeRoomNumberHandler.bind(this);
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveRoom = this.saveRoom.bind(this);
        
    }

    saveRoom = (e)=>{
        e.preventDefault();
        let room = {roomNumber:this.state.roomNumber, type:this.state.type, price: this.state.price, status: this.state.status};
        console.log('room =>'+JSON.stringify(room));

        CatsvillResService.createRoom(room).then(res =>{
            
            window.location.href = 'http://localhost:6677/CatsvilleResidence';
         });
    }

    changeRoomNumberHandler =(event) =>{
        this.setState({roomNumber: event.target.value});
    }

    changeRoomTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changeStatusHandler= (event) => {
        this.setState({ status: event.target.value });
    }

    // cancel(){
    //     this.props.history.push('/CatsvilleResidence')
    // }

    render(){
        return(

            <div> 
                        <div className = 'Container'>
                        <div className = 'row'>
                        <div className= "card col-md-6 offset-md-3 offset-3">
                           <h3 className ='text-center'>Add Residence</h3>
                           <div className = 'card-body'>
                              <form>
                                   <div className = "form-group">
                                      <p>Room Number</p>
                                      <input placeholder ="Room Number" name = "roomNumber" className="form-control"
                                      value={this.state.roomNumber} onChange={this.changeRoomNumberHandler}/>
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
                                    <div className="form-group row"style={{ display: "flex"}}>
                                        <div className="col-md-6">
                                    <button className="btn btn-success" onClick={this.saveRoom}>Save</button>   
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
export default CreateResRoom