import { useState } from "react";

import CreatePizzaPage from "./pages/CreatePizzaPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";

function App() {

  const [name, setName] = useState('Dag Dev');
  const nameList = ['Dag Dev', '2024', 'www'];
  const nameObj = {
    name: 'Dag Dev',
    old: 'Dag Dev',
    email: 'minhdang25.dev@gmail.com'
  }
  const handleChangeName = () => {
    setName('Dag Dev 2024');
  };

  return (
    <div className="">
    <Header />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
