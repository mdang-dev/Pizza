import { useLocation } from "react-router-dom";

const CreatePizzaPage = () => {
    const { pathname } = useLocation();
    return (
        <div>This is CreatePizzaPage - {pathname}</div>
    );
};

export default CreatePizzaPage;