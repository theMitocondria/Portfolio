import AboutImage from '../../assets/now.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'
//dhruv portfolio website made from udemy 
const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.Desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Started Web Development a year ago. Have been constantly gaining knowledge. Trying to br better everyday
                </p>
                <p>
                Hi, My name is Dhruv Mehta from Haryana, India. I'm a Full stack web  developer and currently pursuing my Computer
                     Engineering degree with specialization i Data Science. My top priority is to get the job done with patience and perfection.
                     I have done many projects and know the industry standards very well, so i can provide you withe best of services. Get in touch with 
                     the details of your projects!Check Out my Resume Below.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}
//dhruv portfolio website made from udemy 
export default About
