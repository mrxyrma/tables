import './Filters.css'

function Filters() {
    return(
        <aside className='filters'>
            <h2>Фильтр</h2>

        
            <div>
                <h3 className='form-title'></h3>
                <div className="form-check form-check-inline">
                    
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"ы />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 </label>
                </div>
            </div>
           
        
        </aside>
    )
}
const filters = ['Бренд', 
                'Количество фаз на входе:', 
                'Номинальное выходное напряжение, В DC:', 
                'Номинальная мощность, Вт:', 
                'Номинальный выходной ток, А:', 
                'Тип монтажа:',
                'Форм-фактор:',
                'Регулирование выходного напряжения:',
                'Контакт DC OK:']
    
    


export default Filters;