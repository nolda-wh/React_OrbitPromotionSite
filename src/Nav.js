import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import startinglogo from './images/logo.png';
import orbitlogo from './images/orbit_logo.png';
import { faChevronRight, faCloudArrowDown, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import games_orbit from './images/intro_1.mp4';
import { useEffect, useState } from 'react';

function Nav() {
  const [bgColor, setBgColor] = useState(''); // State for background color

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-black'); // Add bg-black class when scrolled down
      } else {
        setBgColor('bg-transparent'); // Remove bg-black class when at the top
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg font-11 ${bgColor}`}>
        <div className="container-fluid">
          <div className="navbar-nav py-4 px-4">
            <div className="nav-item dropdown px-4">
              <a className=" flex-row d-flex logomenu box-click " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <img className="starting-logo pe-3" src={startinglogo} alt="STARTING" />
                <div className='text-white'><FontAwesomeIcon icon={faChevronRight}/></div>
              </a>
            </div>
          </div>
          <Link className="navbar-brand box-click" to="/">
            <img src={orbitlogo} className='orbit-logo' alt="Orbit Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ps-3" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item px-2 d-flex align-items-center">
                <Link exact='true' to="/" className="nav-link active text-light box-click"><span>메인</span></Link>
              </li>
              <li className="nav-item px-2 d-flex align-items-center">
                <Link exact='true' to="/patchnote" className='nav-link text-light box-click'><span>패치노트</span></Link>
              </li>
              <li className="nav-item px-2 d-flex align-items-center">
                <a href="https://store.onstove.com/ko/games/3783" target='_blank' rel="noopener noreferrer" className='text-light box-click nav-link'><span>스토어 <FontAwesomeIcon icon={faSquareArrowUpRight}/></span></a>
              </li>
            </ul>
          </div>
          <a href="https://store.onstove.com/ko/games/3783">
            <div className="downloadBtn">
              <div className='position-absolute top-50 start-50 translate-middle'><FontAwesomeIcon className='fa-2xl' icon={faCloudArrowDown}/></div>
            </div>
          </a>
        </div>
      </nav>

      <div className="offcanvas offcanvas-bottom bg-black px-4 border-bottom-1" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <a type="button" className="box-click" data-bs-dismiss="offcanvas" aria-label="Close">
              <FontAwesomeIcon icon={faXmark} className='fa-2xl text-white'/> 
            </a>
          <a href="https://starting.run" target='_blank' className='ps-4'><div className='box-click px-2'><span className='font-11 text-white'><img className="starting-logo-menu pe-2" src={startinglogo}/>바로가기 <FontAwesomeIcon icon={faSquareArrowUpRight}/></span></div></a>
        </div>
        <div className="offcanvas-body text-white font-11">
          <div className='fw-bolder mb-4'>GAMES</div>
          
          <div className='row row-cols-3'>
            <div className='col'>
              <a href="https://orbit.starting.run">
                <div className='project-card ps-2'>
                  <div className='row row-cols-2'>
                    <div class="col-7 card rounded-4  p-0 border-0 bg-black">
                      <video className="card-image-main rounded-4" autoPlay muted loop>
                        <source src={games_orbit} type="video/mp4" />
                        </video>
                    </div>
                    <div class="col-5">
                      <div class="card-body p-2">
                        <h5 class="card-title fw-bolder mb-2 text-white fs-3">Orbit</h5>
                        <p class="card-text text-white">AI에게 지배당한 세상을 구원하라</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Nav;
