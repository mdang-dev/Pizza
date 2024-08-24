import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonField from "../components/buttonField";

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const textColor = pathname.includes('/create-pizza') ? 'red' : '';
    return (
        <div className="flex w-[100%] justify-between px-24 py-5 items-center sticky top-0 z-50 bg-slate-50">
            <div className={`font-semibold font-Montserrat text-3xl text-[${textColor}]`}>Dag Dev Pizza</div>
            <ButtonField onClick={() => navigate('/create-pizza')}>Create Pizza</ButtonField>
        </div>
    );
};

export default Header;