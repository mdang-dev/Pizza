import { useEffect, useMemo, useRef, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/pizza.model";
import CountPizza from "../sections/CountPizza";
import ButtonField from "../components/buttonField";
import TextField from "../components/TextField";
import { SpinnerLoad } from "../components/SpinnerLoad";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

  const handleRemovePizza = (id: number) => {
    const indexPizza = pizzas.findIndex((item) => item.id === id);
    let newPizzas = [...pizzas];
    newPizzas.splice(indexPizza, 1);
    setPizzas(newPizzas);
  };

  // useEffect(() => {
  //   console.log('Render Hooks');

  //   setPizzas([...pizzas, {id: 5, title: 'Pizza Trộn', description: 'Pizza Thập Cẩm'}]);
  // }, [count]);

  const [isView, setIsView] = useState(false);

  const sum = useMemo(() => {
    return count + 1;
  }, [count]);

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState<string>('');
  const searchRef = useRef<any>(null);

  const handleSearchText = (value: string) => {
    clearTimeout(searchRef?.current!);
    searchRef.current = setTimeout(()=> {
      setSearchText(value);
    }, 300);
  };

  const handleShowMore = () => {
    setIsLoading(true);
    setPage(page + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/products/home/pagination/?page=${page}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setTimeout(() => 
        setIsLoading(false), 1000);
        setTimeout(() =>
        setPizzas([...pizzas, ...data]), 1000);
      });
  }, [page]);

  const searchValue = useMemo(() => {
    return pizzas.filter(
      (item) =>
        item.productName
          ?.toLocaleUpperCase()
          .indexOf(searchText.toLocaleUpperCase()) !== -1
    );
  }, [searchText, page]);

  return (
    <>
      {!pizzas.length && (
        <div className="flex justify-center items-center h-[100%]">
          <SpinnerLoad />
        </div>
      )}

      {pizzas.length > 0 && (
        <div>
          <TextField
            placeholder="Enter Search"
            width="250px"
            onChange={handleSearchText}
          />
          <div className="flex flex-wrap justify-center items-center gap-12 my-10">
            {(searchText ? searchValue : pizzas || []).map((item) => (
              <CardPizza
                key={item.id}
                id={item.id}
                productName={item.productName}
                price={'$' + item.price}
                handleRemovePizza={handleRemovePizza}
              />
            ))}

            {/* <button onClick={() => setIsCount(true)}>Open Count</button>
                        <button onClick={() => setIsCount(false)}>Open Count</button>
                      <div>{count}</div>
                      {
                        isCount && <CountPizza count={count} setCount={(count) => setCount(count)}/>
                      } */}
            {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
          </div>
          {/* <div ref={pageRef} className="text-red-400">Dag Dev</div>
                  <button onClick={() => {pageRef?.current?.setAttribute('class', 'text-red-900')}}>ChangeColor</button> */}
          <div className="w-[100%] flex justify-center -mt-10">
            <ButtonField loading={isLoading} onClick={handleShowMore}>
              Show More
            </ButtonField>
            {/* {count} */}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
