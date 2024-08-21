import { useState } from "react";
import LogoPizza from "../assets/images/pizza.png";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";



const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([
        {id: 1, title: 'Pizza Thịt Bằm', description: 'Thịt bằm ,sốt cà chua'},
        {id: 2, title: 'Pizza Phô Mai', description: 'Phô mai, trứng muối'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
    ])

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 my-10">
        {
            pizzas.map(item => <CardPizza title={item.title} description={item.description}/>)
        }
    </div>
  );
};

export default HomePage;
