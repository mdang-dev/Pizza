import ButtonField from "../components/buttonField";

const Header = () => {
    return (
        <div className="flex w-[100%] justify-between px-24 py-5 items-center sticky top-0 z-50 bg-slate-50">
            <div className="font-semibold font-Montserrat text-3xl">Dag Dev Pizza</div>
            <ButtonField>Create Pizza</ButtonField>
        </div>
    );
};

export default Header;