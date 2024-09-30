import './Bottom.css'
import item from '../../assets/item.png'

export default function Bottom() {
  return (
    <div className='Bottom'>

      <div className="viewall">
        View All
      </div>
      <div className='wrap'>
        <div className="bLeft">
          <div className='l1'>BEST PRICE</div>
          <div className='l2'>Agate Phone Grip </div>
          <div className='l3'>
            <div className='l3l'>44.50$</div>
            <div className='l3r'>19.50$</div>
          </div>
          <div className='l4'>These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </div>
          <div className='l5'>BUY NOW</div>
        </div>

        <div className="bRight">
          <div className='c3'>
            <div className='c2'>
            <div className='c1'>
              <img className='img' src={item} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>


      <svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z" fill="white" />

      </svg>

    </div>
  )
}
