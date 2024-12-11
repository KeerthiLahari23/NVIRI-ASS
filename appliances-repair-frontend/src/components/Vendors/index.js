
import './index.css'
import vendor from '../images/vendor.png'

function Vendors(){
return(
    <div className='feature-vendors-container'>
        <h1 className='vendors-header'>Featured Vendors</h1>
        <div className='feature-vendors'>
            <div className='vendor-card'>
                <div className='profile'>
                    <img src={vendor} alt="vendor" className='vendor'/>
                    <h4>Metro Hardware</h4>
                </div>
                <div className='rating'>
                    <div>
                        <p>22</p>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>8/10</p>
                        <p>Rating</p>
                    </div>
                    <div>
                        <p>89</p>
                        <p>Reviews</p>
                    </div>
                    <button className='show-more-btn'>Show more</button>
                </div>
                
            </div>
            <div className='vendor-card'>
                <div className='profile'>
                    <img src={vendor} alt="vendor" className='vendor'/>
                    <h4>Metro Hardware</h4>
                </div>
                <div className='rating'>
                    <div>
                        <p>22</p>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>8/10</p>
                        <p>Rating</p>
                    </div>
                    <div>
                        <p>89</p>
                        <p>Reviews</p>
                    </div>
                    <button className='show-more-btn'>Show more</button>
                </div>
                
            </div>
            <div className='vendor-card'>
                <div className='profile'>
                    <img src={vendor} alt="vendor" className='vendor'/>
                    <h4>Metro Hardware</h4>
                </div>
                <div className='rating'>
                    <div>
                        <p>22</p>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>8/10</p>
                        <p>Rating</p>
                    </div>
                    <div>
                        <p>89</p>
                        <p>Reviews</p>
                    </div>
                    <button className='show-more-btn'>Show more</button>
                </div>
                
            </div>
            <div className='vendor-card'>
                <div className='profile'>
                    <img src={vendor} alt="vendor" className='vendor'/>
                    <h4>Metro Hardware</h4>
                </div>
                <div className='rating'>
                    <div>
                        <p>22</p>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>8/10</p>
                        <p>Rating</p>
                    </div>
                    <div>
                        <p>89</p>
                        <p>Reviews</p>
                    </div>
                    <button className='show-more-btn'>Show more</button>
                </div>
                
            </div>
        </div>

    </div>
)
}

export default Vendors