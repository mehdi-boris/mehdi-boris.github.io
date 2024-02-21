import { useNav } from "../hooks/useNav"
import '../styles/Button.css'
import '../styles/IndexSimpleSection.css'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const aboutRef = useNav("About")

  const downloadFileAtURL=(url)=>{
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <section ref={aboutRef} id="aboutSection" className="simple-section">
      <h2 className="title">About</h2>
      <div className='contact'>
            <div className='container-about'>
                <div className="basic">
                <img className="image-about" src={process.env.PUBLIC_URL + '/images/photo_pro_taille_3.png'} alt='pro_picture' width="75%"/>
                </div>
                <div className='col-2'>
                <span className='line'></span>
              <TypeAnimation
                  splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                  sequence={[
                    "Enthusiastic and curious, I have walked the path of studying physics and actuarial science. These fields have provided me with unique perspectives to approach real-world problems with an analytical mindset and scientific rigor.\n\n Beyond academia, I have found a fascination for computer science, a field where logic and creativity converge to solve tangible issues. I have explored diverse projects, from algorithmic programming to handling massive datasets, constantly seeking to broaden my skill set and stay at the forefront of emerging technologies.\n\nFeel free to reach out to me to discuss new ideas, collaboration on innovations or simply engage in a stimulating conversation about computer science, sciences, or any other subject that captivates our shared curiosity."
                  ]}
                  speed={{ type: 'keyStrokeDelayInMs', value: 70 }}
                  omitDeletionAnimation={true}
                  style={{whiteSpace: 'pre-line', fontSize: '1em', display: 'block', minHeight: '200px', width: '100%', color: 'white', margin:'15px', textAlign: 'justify'}}
                  repeat={0}
              />
              <button className='button-resume' onClick={()=>{downloadFileAtURL('/Resume.pdf')}}>Resume</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About