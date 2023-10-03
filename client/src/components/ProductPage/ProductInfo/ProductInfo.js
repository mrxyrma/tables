import ProductModal from '../ProductModal/ProductModal'

import placeholder from './placeholder.svg'

function ProductInfo({ data, modalActive, setModalActive }) {
  const paramsArray = []
  const image = data['src'] ? data['src'] : placeholder

  //Проверка на то, что данные загрузились с сервера
  if (Object.keys(data).length !== 0) {
    document.title = `${data.Артикул} - ${data.Наименование}`
  }

  for (let key in data) {
    if (
      key !== '_id' &&
      key !== 'Артикул' &&
      key !== 'Наименование' &&
      key !== 'Серия' &&
      key !== 'src'
    ) {
      paramsArray.push(`${key}: ${data[key]}`)
    }
  }

  const params = paramsArray.map((item, index) => {
    return (
      <p
        key={index}
        className='product__param'
      >
        {item}
      </p>
    )
  })

  return (
    <div className='product__info'>
      <img
        className='product__image'
        src={image}
        alt='product'
        onClick={() => setModalActive(true)}
      />
      <div>
        <h2 className='product__name'>{data['Наименование']} </h2>
        <h3 className='product__order-number'>{data['Артикул']}</h3>
        <p className='product__subtitle'>Технические характеристики:</p>
        {params}
      </div>
      {modalActive ? (
        <ProductModal
          setModalActive={setModalActive}
          image={image}
        />
      ) : null}
    </div>
  )
}

export default ProductInfo
