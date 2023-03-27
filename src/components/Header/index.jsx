import logo from '../../assets/logo.svg'
import '../../styles/header.css'

const Header = () => {

    return (
        <header>
            <div className="container">
                <img src={logo} alt="NuKenzie logo" />
            </div>
        </header>
    )
}

export default Header