import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'
import '../styles/skill.css'
import TextShpere from "../components/TextSphere"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.css";


const ComputerSkills = () => {
  const computerskillsRef = useNav("Computer Skills")

  return (
    <section ref={computerskillsRef} id="computer skillsSection" className="simple-section-black" offset={20}>
      <h2 className="title">Computer Skills</h2>
      <div className='container'>
                <div className="basic-sk">
                  <div className="margin-sk">
                    <p className="sk">C++</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills cpp">50%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">CSS</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills css">60%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">HTML</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills html">60%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">Latex</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills latex">80%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">Python</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills py">95%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">React</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills react">50%</div>
                        </div>
                    </AnimationOnScroll>  
                  </div>
                  <div className="margin-sk">
                    <p className="sk">VBA</p>
                    <AnimationOnScroll className="container-sk" animateIn="animate__fadeInLeft" offset={20}>
                        <div className="bar">
                          <div className="skills vba">80%</div>
                        </div>
                    </AnimationOnScroll> 
                  </div>
                </div>
                <div className='col-2'>
                  <TextShpere />
                </div>
            </div>
    </section>
  )
}

export default ComputerSkills