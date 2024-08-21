const Header = () => {
    return (
        <div className="flex w-[100%] justify-between px-24 py-5 items-center sticky top-0 z-50 bg-slate-50">
            <div className="font-semibold font-Montserrat text-3xl">Dag Dev Pizza</div>
            <div className="bg-slate-900 text-white px-10 py-3 rounded-md font-medium cursor-pointer">Create Pizza</div>
        </div>
    );
};

export default Header;