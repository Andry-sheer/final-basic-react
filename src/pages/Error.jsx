import '../scss/style.scss';
import Header from '../components/Header';
import Sprites from '../components/Sprites';


const Error = () => {
  return (
      <div className="error">
        <div className="error__wrapper">
          <Header/>
          <div className="container error__container">
            <h1 className="error__title">page not found | 404</h1>
          </div>
        </div>
      <Sprites/>
    </div>
  )
}

export default Error;