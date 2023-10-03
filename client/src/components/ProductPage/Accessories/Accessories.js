import placeholder from '../ProductInfo/placeholder.svg'
import ProductModal from '../ProductModal/ProductModal'
import './Accessories.css'

function Accessories({ data, modalActive, setModalActive }) {
  if (data !== undefined) {
    if (data.length === 0) {
      return (
        <p className='product__subtitle'>
          Аксессуары пока не добавлены, либо отсутствуют
        </p>
      )
    } else {
      const accessories = data.map((item) => {
        const image = item.src ? data.src : placeholder
        return (
          <article className='accessory-card'>
            <img
              alt='Фото аксессуара'
              src={image}
              className='accessory-card_image'
              onClick={() => setModalActive(true)}
            />
            <p
              key={item['Артикул']}
              className='product__param'
            >
              <b>{item['Артикул']}</b> - {item['Наименование']}
            </p>
            {modalActive ? (
              <ProductModal
                setModalActive={setModalActive}
                image={image}
              />
            ) : null}
          </article>
        )
      })

      return (
        <div>
          <p className='product__subtitle'>Принадлежности:</p>
          <div className='accessories'>{accessories}</div>
          <p className='product__param'>
            Остальные аксессуары смотри в каталоге
          </p>
        </div>
      )
    }
  }
}
export default Accessories
