import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import {Pizza} from "../models/pizza.model";
import CountPizza from "../sections/CountPizza";
import ButtonField from "../components/buttonField";



const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([
        {id: 1, title: 'Pizza Thịt Bằm', description: 'Thịt bằm ,sốt cà chua'},
        {id: 2, title: 'Pizza Phô Mai', description: 'Phô mai, trứng muối'},
        {id: 3, title: 'Pizza Hải Sản', description: 'Tôm, cua'},
        {id: 4, title: 'Pizza Phần Lớn', description: '2 3 Người Ăn'},
    ]);

    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(false);

    const handleRemovePizza = (id: number) => {
      const indexPizza = pizzas.findIndex(item => item.id === id);
      let newPizzas = [...pizzas];
      newPizzas.splice(indexPizza, 1);
      setPizzas(newPizzas);
    };

    // useEffect(() => {
    //   console.log('Render Hooks');
      
    //   setPizzas([...pizzas, {id: 5, title: 'Pizza Trộn', description: 'Pizza Thập Cẩm'}]);
    // }, [count]);

    const [isView, setIsView] = useState(false);

  return (
    <>
      {console.log('Render Template !')}
        <div className="flex flex-wrap justify-center items-center gap-8 my-10">
            {
                pizzas.map(item => <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} handleRemovePizza={handleRemovePizza}/>)
            }
            
              {/* <button onClick={() => setIsCount(true)}>Open Count</button>
              <button onClick={() => setIsCount(false)}>Open Count</button>
            <div>{count}</div>
            {
              isCount && <CountPizza count={count} setCount={(count) => setCount(count)}/>
            } */}
          {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
          
        </div>
        <div className="w-[100%] flex justify-center">
            <ButtonField loading={true}>Show More</ButtonField>
        </div>
    </>
  );
};

export default HomePage;
