import HeaderImage from '../../assets/now.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Dhruv Mehta</h3>
        <p>
        You are just clickes away from building a modern responsive website
                . So what are you waiting for ,Send Me the details and hop in the journey of 
                building new things .
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header