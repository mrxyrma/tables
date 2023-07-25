import img from './error.gif'
import useCallBackendAPI from '../../services/useCallBackendAPI'

const Error = () => {
  const {error} = useCallBackendAPI()

  return (
    <>
      <img 
      src={img}
      alt='error'
      style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}}/>
      <p>{error}</p>
    </>
    
  )
}

export default Error