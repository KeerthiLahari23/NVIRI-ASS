
import './index.css'
import google from '../images/google.png'
import google_stars from '../images/google_stars.png'
function Reviews(){
return(
    <div className="reviews">
        <h1>See what our happy customers have to say about us</h1>
        <div className="review-container">
            <div className="review-card">
                <img src={google} alt="customer-profile-pic" className='pick'/>
                <div className='content'>
                    <div className='name'>
                        <h3>Peter Breis</h3>
                        <img alt="starts" src={google_stars} className='stars'/>
                    </div>
                    <p>3 days ago</p>
                    <p>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                    Couldn’t be happier.</p>
                </div>
            </div>
            <div className="review-card">
                <img src={google} alt="customer-profile-pic" className='pick'/>
                <div className='content'>
                    <div className='name'>
                        <h3>Peter Breis</h3>
                        <img alt="starts" src={google_stars} className='stars'/>
                    </div>
                    <p>3 days ago</p>
                    <p>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                    Couldn’t be happier.</p>
                </div>
            </div>
            <div className="review-card">
                <img src={google} alt="customer-profile-pic" className='pick'/>
                <div className='content'>
                    <div className='name'>
                        <h3>Peter Breis</h3>
                        <img alt="starts" src={google_stars} className='stars'/>
                    </div>
                    <p>3 days ago</p>
                    <p>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                    Couldn’t be happier.</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Reviews