import './lazy.css'
import sorry from '../../../assets/sorry.gif'

const Lazy = () => {
  return (
    <div className='lazy_div'>
        <h1 className="loading">Loading...</h1>
        <p className="loading_para">Sorry for you inconvenience</p>
        <img className='lazy_img' src={sorry} alt="A kitty is saying sorry for loading gif image" />
    </div>
  )
}

export default Lazy