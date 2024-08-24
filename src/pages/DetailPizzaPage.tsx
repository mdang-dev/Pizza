import { useParams } from "react-router-dom";
import LogoPizza from "../assets/images/pizza.png";
import ButtonField from "../components/buttonField";
import { useEffect, useState } from "react";
import { Pizza } from "../models/pizza.model";
import { SpinnerLoad } from "../components/SpinnerLoad";

const DetailPizzaPage = () => {
  const { id } = useParams();
  const [pizzas, setPizzas] = useState<Pizza>({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setTimeout(() => setPizzas(data), 1000);
      });
  }, [id]);

  return (
    <>
      {!pizzas.id && (
        <div className="flex justify-center items-center h-[100%]">
          <SpinnerLoad />
        </div>
      )}

      {pizzas.id && (
        <div className="grid items-center mt-auto w-[100%] py-16 px-64 h-[70vh]">
          <div className="flex items-center gap-x-8">
            <img src={LogoPizza} width="300px" height="300px" />
            <div className="grid gap-y-5">
              <div>
                Product Name:{" "}
                <span className="font-semibold text-2xl">{pizzas.productName}</span>
              </div>
              <div>
                Price:{" "}
                <span className="font-semibold text-2xl">
                  ${pizzas.price}
                </span>
              </div>
              <div className="w-max">
                <ButtonField>Add to cart</ButtonField>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPizzaPage;
