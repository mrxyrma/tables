import './Footer.css'

function Footer() {
  return(
    <footer className='footer'>
      <div className="container">
        <div className="footer__elements">
          <div className="footer__info">Сайт сделан исключительно для внутреннего использования сотрудниками компании</div>
          <div className="footer__copy">© 2023. Андрей Королёв</div>
        </div>
      </div>            
    </footer>
  )
}

export default Footer;