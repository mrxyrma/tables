import './ProductModal.css'

function ProductModal({image, setModalActive}) {
  const closeModal = (e) => {
    if (e.key === 'Escape') {
      setModalActive(false)
    }
    document.removeEventListener('keydown', closeModal)
  }

  document.addEventListener('keydown', closeModal)

  return(
    <div className='product__modal' onClick={() => setModalActive(false)}>
      <div className='product__modal_wrapper'>
        <img
          className='product__modal_image'
          src={image}
          alt="product"
        />
      </div>
    </div>
  )
}

export default ProductModal