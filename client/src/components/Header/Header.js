import {Link, useLocation} from 'react-router-dom';

import './Header.css'

function Header() {
  let location = useLocation().pathname;

  return(
    <header className="header">
      {location === '/' ?  null :
        <div className="container">
          <Link to='/'className='header__link'>Главная</Link>
        </div>
      }
    </header>
  )
}

export default Header;