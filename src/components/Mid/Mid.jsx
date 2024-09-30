import './Mid.css'
import item from '../../assets/item.png'

export default function Mid() {
  return (
    <div className='Mid'>
      <div className="head">All product</div>

      <div style={{ display: "inline-block" }} className="filter">
        <span>Filter:</span>
        <div style={{ display: "inline-block" }} className="dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            All Products
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">All Products</button></li>
            <li><button className="dropdown-item" type="button">Another action</button></li>
            <li><button className="dropdown-item" type="button">Something else here</button></li>
          </ul>
        </div>
      </div>
      <div style={{ display: "inline-block" }} className="sort">
        <span>Sort:</span>
        <div style={{ display: "inline-block" }} className="dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Best Selling
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Best Selling</button></li>
            <li><button className="dropdown-item" type="button">Another action</button></li>
            <li><button className="dropdown-item" type="button">Something else here</button></li>
          </ul>
        </div>
      </div>

      <div className="items">
        <div className="firstrow">
          <div className="col1">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col2">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col3">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
                <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col4">
            <img style={{ margin: '20px 0px 5px 40px' }}  src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
        </div>

        <div className="secondrow">
          <div className="col1">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col2">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col3">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '30px 55px 10px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
          <div className="col4">
            <img style={{ margin: '20px 0px 5px 40px' }} src={item} class="imgItem" alt="..." />
            <div class="cardBody">
              <h5 class="cardTitle">CRYSTAL AGATE PHONE GRIP</h5>
              <p style={{ color: '#31546D', margin: '0px 0px 5px 120px',fontWeight:700 }} class="cardText">$18.99</p>
              <div style={{color:'blue',margin: '20px 55px 20px 55px',width:'180',height:'56',border:'solid #75CCEB 3px',padding:'15px 0px 15px 50px',borderRadius:'18px',cursor: 'pointer'}} className='itemButton'>BUY NOW</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
