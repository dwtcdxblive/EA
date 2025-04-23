import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Logo from './assets/logos.svg';
import X from './assets/X.svg';
import FB from './assets/fb.svg';
import Insta from './assets/insta.svg';
import Date from './assets/date-svg.svg';
import Location from './assets/location-svg.svg';

function App() {
  return (
    <div className='main-bg'>
      <div className='container page-content'>
        <div className='row justify-content-center'>
          <div className='col-12 d-flex flex-column align-items-center'>
            <img src={Logo} alt='logo' className='mb-3 logo' />

            <h2 className='arabic'>المؤتمر والمعرض الزراعي الإماراتي 2025</h2>
            <h2 className='english'>
              Emirates Agriculture Conference and Exhibition 2025
            </h2>
            </div>
         <div className='col-md-6 d-flex flex-column align-items-center'>

         
              <div className='date-location-cont'>
                <h3 className='date-location'>28th to 31st May 2025</h3>
                <img src={Date} alt='date-icon' />
                <h3 className='date-location'>28 - 31 مايــو 2025</h3>
              </div>
              </div>
         <div className='col-md-6 d-flex flex-column align-items-center'>

              <div className='date-location-cont'>
                <h3 className='date-location'>ADNEC Centre Al Ain</h3>
                <img src={Location} alt='location-icon' />
                <h3 className='date-location'>مركـــز أدنيــك العيــــن</h3>
              </div>
            </div>
          <div className='col-12 d-flex flex-column align-items-center'>

            <h3 className='arabic mt-2'>إطلاق الموقع قريباً</h3>
            <h3 className='english'>Website launching soon</h3>

            <div className='book-btns'>
              <a href='https://registrations.dxblive.com/CommunityPortal/Registration/EMIRATESAG/EXHIBITORS.aspx' target='_blank' className='book-now'>
                Book a stand
              </a>
              <a href='https://registrations.dxblive.com/CommunityPortal/Registration/EMIRATESAG/SPONSORS.aspx' target='_blank' className='book-now'>
                Become a sponsor
              </a>
              <a href='/src/assets/PDF/EmiratesACE25-Brochure-EN-AR.pdf' target='_blank' rel='noopener noreferrer' className='book-now'>
                Download brochure
              </a>
            </div>

            <div className='social-section'>
              <div className='social-item'>
                <img src={Insta} alt='Instagram' />
                <span>emiratesagricultute</span>
              </div>
              <div className='social-item'>
                <img src={FB} alt='Facebook' />
                <span>emiratesagricultute</span>
              </div>
              <div className='social-item'>
                <img src={X} alt='X' />
                <span>emiratesagri</span>
              </div>
            </div>
            <div className='social-section'>
              <div className='social-item'>
                <span>#Emiratesace25</span>
              </div>
              <div className='social-item'>
                <span>emiratesagricultute</span>
              </div>
              <div className='social-item'>
                <a
                  className='email'
                  href='mailto:EmiratesAgriculture@moccae.gov.ae'
                >
                  <span>EmiratesAgriculture@moccae.gov.ae</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
