import {Link} from 'react-router-dom';

import './Header.css'

function Header() {
    return(
      <header className="header">
        <div className="container">
          <Link to='/'className='header__link'>Главная</Link>
        </div>
      </header>
    )
}

export default Header;