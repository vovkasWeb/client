import Car from "../car/car";

const CarsList =({data})=>{
	const elements = data.map((item) => {
		
		const { _id, ...itemProps } = item;
		return (
		  <Car
			 key={_id}
			 {...itemProps}/>
			 
		);
	 });
  
	 return <div className="catalog">
	 <div className="catalog-list">{elements}</div></div>;
  };
  
  export default CarsList;