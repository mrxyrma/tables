function Accessories({data}) {
  if (data !== undefined) {
    if(data.length === 0) {
      return <p className='product__subtitle'>Аксессуары пока не добавлены, либо отсутствуют</p>
    } 
    else {
      const accessories = data.map(item => {
        return(
          <p key={item['Артикул']} className='product__param'>
            <b>{item['Артикул']}</b> - {item['Наименование']}
          </p>
        )
      })
      
      return(
        <div>
          <p className='product__subtitle'>Принадлежности:</p>
          {accessories}
          <p className='product__param'>Остальные аксессуары смотри в каталоге</p>
        </div> 
      )
    }
  }
}

export default Accessories