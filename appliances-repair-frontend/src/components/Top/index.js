import home from '../images/home.png'
import './index.css'

function Top(){

    return(
        <div className="top-container">
            <div className='top-left'>
                <h1>Take care of your home needs now!</h1>
                <p>ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.</p>
                <div className='select-container'>
                    <select>
                        <option>Pune</option>
                        <option>Hyderabad</option>
                        <option>Goa</option>
                        <option>Lucknow</option>
                    </select>
                    <p>Only in Ameerpet, Gachibowli, & Madhapur</p>
                </div>
                <input type="text" placeholder="Search home Appliances"/>
               
            </div>
            <img src={home} alt="home" className='home-img'/>
        </div>
    )
}

export default Top