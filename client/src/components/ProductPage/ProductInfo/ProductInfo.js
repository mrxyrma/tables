import placeholder from './placeholder.jpg'

function ProductInfo({data}) {
  const paramsArray = []
  
  for (let key in data) {
    if (key !== '_id' && key !== 'Артикул' && key !== 'Наименование' && key !== 'Серия' && key !== 'src') {
      paramsArray.push(`${key}: ${data[key]}`)
    }
  }
  
  const params = paramsArray.map((item, index) => {
    return(
      <p key={index} className='product__param'>{item}</p>
    )
  })
  
  return(
    <div className='product__info'>
      <img
        className='product__image'
        src={data['src'] ? data['src'] : placeholder}
        alt="product"
        />
      <div>
        <h2 className='product__name'>{data['Наименование']} </h2>
        <h3 className='product__order-number'>{data['Артикул']}</h3>
        <p className='product__subtitle'>Технические характеристики:</p>
        {params}
      </div>
    </div>
  )
}

export default ProductInfo