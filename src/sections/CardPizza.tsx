import LogoPizza from "../assets/images/pizza.png";
import {Pizza} from "../models/pizza.model";

type Props = Pizza & {
  handleRemovePizza: (id: number) => void;
};

const CardPizza = ({
    id,
    title,
    description,
    handleRemovePizza 
}: Props) => {
  return (
    <div className="w-max h-max shadow-slate-800 my-20 shadow-lg relative cursor-pointer" onClick={() => handleRemovePizza(id!)}>
      <div className="w-[300px] h-20 bg-white flex justify-center items-center">
        <img src={LogoPizza} className="w-40 h-30 absolute m-auto mb-24" />
      </div>
      <div className="w-[300px] bg-slate-900 h-20 text-center grid items-center text-white">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-lg font-semibold">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
