import './index.css'
import { TbBrandLinkedin } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialTwitterCircular } from "react-icons/ti";
function Footer(){
return(
  <div className='footer-container'>
    <div className='footer-top'>
     <div className='footer-card'>
        <div>
          <h3>Get in touch with US</h3>
          <input type="email" placeholder="Email Address"/>
        </div>
        <p className='footer-desc'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
     </div>
     <button className='book-service-btn'>Book a Service</button>
     <h4>
        Terms<br/>
        Privacy<br/>
        Cookies<br/>
        Business Login
     </h4>
     </div>
     <hr className="horizontal-line"/>
     <div className='footer-bottom'>
        <img alt="logo" className='logo' src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__"/>
        <div className='social-media-platforms'>
            <TbBrandLinkedin className='icon'/>
            <FaFacebook className='icon'/>
            <TiSocialTwitterCircular className='icon'/>
        </div>
     </div>
    
  </div>
)
}

export default Footer