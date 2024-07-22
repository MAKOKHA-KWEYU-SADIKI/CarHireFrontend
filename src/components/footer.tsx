

import image2 from '../assets/fb.png';
import image3 from '../assets/linkedin.png';
import image4 from '../assets/instagram.png';


function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Partnership</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact us</h6>
        <p className="link link-hover">+2547624527834</p>
        <a className="link link-hover">+26535635656</a>
        <a className="link link-hover">info@abdulAlli</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src={image2} alt="Facebook" width="24" height="24" />
          </a>
          <a>
          <img src={image3} alt="linkedin" width="24" height="24" />
          </a>
          <a>
            <img src={image4} alt="Instagram" width="24" height="24" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
