import Image from "next/image";
import Pokemon from '../../../public/logo.png'
import Pokeball from '../../../public/poke.png'

const Header = () => {
    return (
    <header className="header">
        <div className="header__icon">
            <Image src={Pokeball} alt="pokeball" />
        </div>
        <div className="header__logo"> 
            <Image src={Pokemon} alt="logo" />
        </div>
        <div className="header__avatar">
            <Image src={Pokeball} alt="pokeball" />
        </div>
    </header>
    )
}

export default Header