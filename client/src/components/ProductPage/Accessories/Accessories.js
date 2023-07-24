function Accessories({data}) {
  if (data !== undefined) {
    if(data.length === 0) {
      return <p className='product__subtitle'>Аксессуары пока не добавлены, либо отсутствуют</p>
    } 
    else {
      const accessories = data.map(item => {
        return(
          <p key={item['Артикул']}>{item['Артикул']} {item['Наименование']}</p>
        )
      })
      return(
        <>
          <p className='product__subtitle'>Принадлежности:</p>
          {accessories}
        </> 
      )
    }
  }
}

export default Accessories