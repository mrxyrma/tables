import AccessoryCard from './AccessoryCard/AccessoryCard'

import './Accessories.css'

function Accessories({ data }) {
  if (data !== undefined) {
    if (data.length === 0) {
      return (
        <p className='product__subtitle'>
          Аксессуары пока не добавлены, либо отсутствуют
        </p>
      )
    } else {
      const accessories = data.map(item => <AccessoryCard item={item}/>)
      return (
        <div>
          <p className='product__subtitle'>Принадлежности:</p>
          <div className='accessories'>
            {accessories}
          </div>
          <p className='product__text'>
            Остальные аксессуары смотри <a target='blank' href='https://www.cety-telekom.ru/podderzhka/katalogi-i-broshyury/'>в каталоге</a>
          </p>
        </div>
      )
    }
  }
}
export default Accessories