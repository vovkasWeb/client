import React from 'react';
import CarsList from './components/cars-list/cars-list';
import Filter from './components/filter/filter';
import Axios from 'axios';
import Form from './components/form/form';
import Header from './components/header/header';
function App() {
	const [cars, setCars] = React.useState([]);
	const [priceOt, setPriceOt] = React.useState(0);
	const [priceEnd, setpriceEnd] = React.useState(100000000);

	const [Name, setName] = React.useState();
	const [Year, setYear] = React.useState();
	const [TypeCar, setTypeCar] = React.useState();
	const [TypeMotor, setTypeMotor] = React.useState();
	const [Price, setPrice] = React.useState();
	const [Img, setImg] = React.useState();
	React.useEffect(() => {
		 getGame();
	}, [])

	const getGame = async () => {
		 await fetch('/getCars')
			  .then(cursor => cursor.json())
			  .then(cursor => setCars(cursor.cursor));
	}
	const onUpdatePriceOt=(priceOt)=>{
		setPriceOt(priceOt);
	}
	const onUpdatePriceEnd=(priceEnd)=>{
		setpriceEnd(priceEnd);
	}
	const filterPost = (arr)=>{
		console.log(parseInt(priceOt));
      return arr.filter((item)=>item.Price >= parseInt(priceOt) && item.Price <= parseInt(priceEnd)  )
	}
	const  onUpdateName =(name)=>{
		setName(name);
	}
	const  onUpdateYers =(yers)=>{
		setYear(yers);
	}
	
	const onUpdateTypeCar =(TypeCar)=>{
		setTypeCar(TypeCar);
	}
	const onUpdateTypeMotor= (typeMotor)=>{
		setTypeMotor(typeMotor);
	}
	const onUpdateTypePrice= (Price)=>{
		setPrice(Price);
	}
	
	const onUpdateTypeImg= (Img)=>{
		setImg(Img);
	}
const user ={
	name: 0,
}
	const newUser = async () => {
		const query = await Axios.post("/newUser",{})
		.then(res => {
			console.log(res);
			console.log(res.data);
		 })
  }
  const handleClick= ()=>{
	Axios.post("/addCar",{
		Name:Name,
		Year:Year,
		TypeCar:TypeCar,
		TypeMotor: TypeMotor,
		Price:Price,
		Img: Img,
	})

  }
  
  return (
    <div className="App">
	<div className="container">
	<Header/>
	<div className="app__wrapp">
	<Filter onUpdatePriceOt={onUpdatePriceOt} onUpdatePriceEnd={onUpdatePriceEnd}/>
   <CarsList data={filterPost(cars)}/>
	
	</div>
   <Form onUpdateName={onUpdateName} onUpdateYers={onUpdateYers} onUpdateTypeImg={onUpdateTypeImg} onUpdateTypeCar={onUpdateTypeCar} onUpdateTypeMotor={onUpdateTypeMotor}  onUpdateTypePrice={onUpdateTypePrice}/>
	<button onClick={handleClick}>Отправить</button>
	</div>
    </div>
  );
}

export default App;
