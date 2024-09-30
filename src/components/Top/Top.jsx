import './Top.css'
import Group110 from '../../assets/Group110.png'
import Group109 from '../../assets/Group109.png'
import Group103 from '../../assets/Group103.png'
import item from '../../assets/item.png'
import Carousal from '../carousal/Carousal'

export default function Top() {
  const scrollDown=()=>{
    window.scrollTo(900,900);
  }

  return (
    <div className='Top'>
      <div style={{ display: 'inline' }}>
        <img className="iconleft" src={Group110} alt="" />
        <div className='midhead'>
          <div style={{cursor: 'pointer'}} className='home'> Home </div>
          <div style={{cursor: 'pointer'}} className='shop'> Shop </div>
          <div style={{cursor: 'pointer'}} className='aboutus'> About Us </div>
          <div style={{cursor: 'pointer'}} className='help'> Help </div>
        </div>
        <img style={{cursor: 'pointer'}} className="iconright" src={Group109} alt="" />
      </div >

      <div className="leftTop">
        <div className='a'>Welcome to</div>
        <div className='b'>Pop Rock Crystal Shop!</div>

        <div className="c">
          Here you will find unique phone accessories, crystals, jewelry and more.
          Free shipping inside the U.S. and our phone grips come with a limited warranty.
          Enjoy!
        </div>

        <div style={{ cursor: 'pointer',display: 'inline-block' }} className="d">Shop Now</div>
        <div style={{ cursor: 'pointer',display: 'inline-block' }} className="e">about us</div>

      </div>

      <div className='dotl'></div>
      <div className='dotr'></div>
      <div className="rightTop">
            <Carousal/>
      </div>

      <img className='scroll' onClick={scrollDown} src={Group103} alt="" />

      <svg width="1440" height="1195" viewBox="0 0 1440 604" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform='translate(0,0)'>
          <path d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z" fill="white" />
        </g>
      </svg>



    </div >
  )
}

