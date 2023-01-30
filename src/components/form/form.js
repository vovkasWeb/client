/** @format */

import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
	  yers:"",
	  typeCar:"",
	  typeMotor:"",
	  price:"",
	  img:""
	 };
  }
  onUpdateName=(e)=>{
	const name= e.target.value;
	this.setState({name})
	this.props.onUpdateName(name)
  }
  onUpdateYers=(e)=>{
	const yers= e.target.value;
	this.setState({yers})
	this.props.onUpdateYers(yers)
  }
  onUpdateTypeCar=(e)=>{
	const typeCar= e.target.value;
	this.setState({typeCar})
	this.props.onUpdateTypeCar(typeCar)
  }
  onUpdateTypeMotor=(e)=>{
	const typeMotor= e.target.value;
	this.setState({typeMotor})
	this.props.onUpdateTypeMotor(typeMotor)
  }
  onUpdateTypePrice=(e)=>{
	const price= e.target.value;
	this.setState({price})
	this.props.onUpdateTypePrice(price)
  }
  onUpdateTypeImg=(e)=>{
	const img= e.target.value;
	this.setState({img})
	this.props.onUpdateTypeImg(img)
  }
  render(){
	return(
		<div className="form">
	<input type="text" placeholder="Name" value={this.state.name} onChange={this.onUpdateName}/>
	<input type="number" placeholder="Yers" value={this.state.yers} onChange={this.onUpdateYers}/>
	<input type="text" placeholder="TypeCar" value={this.state.typeCar} onChange={this.onUpdateTypeCar}/>
	<input type="text" placeholder="TypeMoto" value={this.state.typeMotor} onChange={this.onUpdateTypeMotor}/>
	<input type="number" placeholder="Price" value={this.state.price} onChange={this.onUpdateTypePrice}/>
	<input type="text" placeholder="Img" value={this.state.img} onChange={this.onUpdateTypeImg}/>
	</div>
	);
	 }
}
export default Form;