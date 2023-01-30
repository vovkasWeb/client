const Car = (props) => {
	const {Name,Year,TypeCar,TypeMotor,Img,Price	} = props;
console.log(props);
	  return (
		 <div className="item">
			<img className="item-img" src={Img} alt="Картинка продукта" />
         <div className="item__line-top">
			<span className="item-name">{Name}</span>
			<span className="item-yers">{Year}</span>
         </div>
			 <div className="item__line-body">
			 <span className="item-typeCar">{TypeCar}</span>
			 <span className="item-typeMotor">{TypeMotor}</span>
			 </div>
			<p className="item-price">{Price}</p>
			<button className="item-btn">Детально</button> 
	
		 </div>
	  );
	};
	
	export default Car;