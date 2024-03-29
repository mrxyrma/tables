import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__elements'>
          <div>
            Сайт предназначен исключительно для внутреннего использования сотрудниками компании
          </div>
          <a
            className='footer__copy'
            href='mailto:ander_kor@mail.ru?subject=Вопрос по сайту&body=Добрый день!'
          >
            © 2023. Андрей Королёв
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
