import { Component } from "react"
class Filter extends Component{
	constructor(props){
		super(props);
		this.state={
			priceOt:"",
			priceEnd: 10000000000,
		};
	}
		onUpdatePriceOt=(e)=>{
			const priceOt= e.target.value;
			this.setState({priceOt})
			this.props.onUpdatePriceOt(priceOt)
		};
		onUpdatePriceEnd=(e)=>{
			const priceEnd= e.target.value;
			this.setState({priceEnd})
			this.props.onUpdatePriceEnd(priceEnd)
		};
	render(){
		return(
			<div className="filter">
				<h3>Цена:</h3>
			<input type="number" placeholder="Цена от" value={this.state.priceOt} onChange={this.onUpdatePriceOt}/>
			<input type="number" placeholder="Цена до" value={this.state.priceEnd} onChange={this.onUpdatePriceEnd}/>
			</div>
		)
	}
	
}

export default Filter;