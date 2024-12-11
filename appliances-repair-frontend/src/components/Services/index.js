import './index.css';
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';
import service4 from '../images/service4.png';
import service5 from '../images/service5.png';
import service6 from '../images/service6.png';

function Services(){
return(
    <div className='all-services-container'>
        <h1 className='service-header'>All Services</h1>
        <p className='service-desc'>The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
        <div className='services'>
            <div className="item">
                <img alt="service-logo" className='service-logo' src={service1}/>
                <h1 className='service-name'>
                Fridge
                </h1>
                <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            </div>
            <div className="item">
            <img alt="service-logo" className='service-logo' src={service2}/>
                <h1 className='service-name'>
                Air Conditioner
                </h1>
                <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
            </div>
            <div className="item">
            <img alt="service-logo" className='service-logo' src={service3}/>
                <h1 className='service-name'>
                Television
                </h1>
                <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
            </div>
            <div className="item">
            <img alt="service-logo" className='service-logo' src={service4}/>
                <h1 className='service-name'>
                Gas Stove
                </h1>
                <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            </div>
            <div className="item">
            <img alt="service-logo" className='service-logo' src={service5}/>
                <h1 className='service-name'>
                Air Conditioner
                </h1>
                <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
            </div>
            <div className="item">
            <img alt="service-logo" className='service-logo' src={service6}/>
                <h1 className='service-name'>
                Television
                </h1>
                <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
            </div>
        </div>
    </div>
)
}

export default Services