import PasswordGenerator from '../../assets/password gen.png';
import flourishingTomato from '../../assets/flourishing tomato.png';
import TeamProfile from '../../assets/team profile.png';
import WeatherDash from '../../assets/weather dash.png';
import JATE from '../../assets/JATE.png';
import BookSearchEngine from '../../assets/book 3.png';


function Portfolio() {
  return (
    <div>
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body ">
            <a href='https://tyreseking.github.io/Password-Gen-JS/' className='link'>
              <img src={PasswordGenerator} alt="Password Generator" className='passwordGeneratorImg'></img>
            </a>
            <p className='caption'>Password Generator</p>
            <a href="https://github.com/TyreseKing/Password-Gen-JS">
              <button className='project-code-btn'>
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://hafeezarif.github.io/Flourishing-Tomato/' className='link'>
              <img src={flourishingTomato} alt="flourishingTomato" className='passwordGeneratorImg'></img>
            </a>
            <p className='caption'>flourishingTomato</p>
            <a href="https://github.com/hafeezarif/Flourishing-Tomato">
            <button className='project-code-btn'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://tyreseking.github.io/Weather-Dash/' className='link'>
              <img src={WeatherDash} alt="WeatherDash" className='weatherImg'></img>
            </a>
            <p className='caption2'>WeatherDash</p>
            <a href="https://github.com/TyreseKing/Weather-Dash">
            <button className='project-code-btn2'>
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
              <img src={TeamProfile} alt="TeamProfile" className='weatherImg'></img>
            <p className='caption2'>TeamProfile</p>
            <a href="https://github.com/TyreseKing/Team-Profile-Generator">
            <button className='project-code-btn2'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='container portfolioPgContainer'>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://text-editor8.herokuapp.com/' className='link'>
              <img src={JATE} alt="JATE" className='weatherImg'></img>
            </a>
            <p className='caption2'>JATE</p>
            <a href="https://github.com/TyreseKing/Text-Editor">
            <button className='project-code-btn2'>
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="card col-md-6 portofolio-img-container">
          <div className="card-body">
            <a href='https://book-search-engine133.herokuapp.com/' className='link'>
              <img src={BookSearchEngine} alt="BookSearchEngine" className='weatherImg'></img>
            </a>
            <p className='caption2'>BookSearchEngine</p>
            <a href="https://github.com/TyreseKing/Book-Search-Engine">
            <button className='project-code-btn2'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio