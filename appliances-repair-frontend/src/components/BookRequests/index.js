import './index.css'
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import book3 from '../images/book3.png';


function BookRequests(){
return(
    <>
    <h1>Book a request in 3 simple steps</h1>
    <div className="book-requests-container">
       
        <div className='request-card'>
            <img src={book1} alt="book" className='book-img'/>
            <h4>Provide your appliance details</h4>
            <p>Let us know your appliance details and your issue.</p>
        </div>
        <div className='request-card'>
            <img src={book2} alt="book" className='book-img'/>
            <h4>Choose your technician</h4>
            <p>Choose from a wide variety of technicians and vendors.</p>
        </div>
        <div className='request-card'>
            <img src={book3} alt="book" className='book-img'/>
            <h4>Get it fixed!</h4>
            <p>The technician will arrive at your doorstep shortly to fix it!</p>
        </div>

    </div>
    </>
)
}
export default BookRequests