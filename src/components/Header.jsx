import logo from '../assets/more/logo1.png'
import headerBg from '../assets/more/15.jpg'
const Header = () => {
    return (
        <header className="mx-auto flex justify-center items-center bg-header-bg md:p-2 lg:p-3">
            <div>
                <img className='w-8' src={logo} alt="logo" />
            </div>
            <div>
                <h2 className='font-rancho text-2xl md:text-3xl lg:text-4xl text-white'>Velvet Brew</h2>
            </div>
        </header>
    );
};

export default Header;