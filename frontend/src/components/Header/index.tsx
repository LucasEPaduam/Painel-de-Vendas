import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Krysttal Magazine</h1>
                <p>Desenvolvido por
                    <a href="https://github.com/LucasEPaduam">@Lucas Paduam</a>
                </p>
            </div>
        </header>

    )
}

export default Header;
