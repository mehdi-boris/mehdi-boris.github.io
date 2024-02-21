import { useNav } from "../hooks/useNav"
import '../styles/IndexSimpleSection.css'
import '../styles/timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrWorkshop } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";

const Experiences = () => {
  const experiencesRef = useNav("Career Highlights")

  return (
    <section ref={experiencesRef} id="career highlightsSection" className="simple-section">
      <h2 className="title">Career Highlights</h2>
      <VerticalTimeline lineColor="white">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    dateClassName="text-blue"
    contentStyle={{ background: '#00ffffff', color: 'black'}}
    contentArrowStyle={{ borderRight: '7px solid  #00ffffff' }}
    date="Feb 2019 - Present"
    iconStyle={{background: '#00ffffff', color: 'black'}}
    icon={<BsPersonWorkspace />}
  >
    <h3 className="vertical-timeline-element-title">Actuarial Specialist & Python Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Vaudoise Assurances / Lausanne, Switzerland</h4>
    <p>
      Member of the Product Development team:<br/>
      &#8226; Developing calculation and simulation tools in Python (portfolio control, profit testing, user interface, ...)<br/>
      &#8226; Project Manager : development of a calculation and configuration universal platform <br/>
      &#8226; Analyzing, maintaining and monitoring the integrity of management systems (data analysis with Python)<br/>
      &#8226; Designing new products<br/>
      &#8226; Writing technical specifications<br/>
      &#8226; Configuring management systems and creating test plan<br/>
      &#8226; Technical support for line activities<br/>
      &#8226; Supervision of interns<br/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jul 2018 - Sep 2018"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<BsPersonWorkspace />}
  >
    <h3 className="vertical-timeline-element-title">Actuary</h3>
    <h4 className="vertical-timeline-element-subtitle">CPEG (Caisse de prévoyance de l'état de Genève) / Geneva, Switzerland</h4>
    <p>
      Member of the team in charge of the development and tests of an application calculating the services provided by the pension fund (transfer, invalidity, projection, ...).
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2017 - Jul 2019"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Tutor</h3>
    <h4 className="vertical-timeline-element-subtitle">TutorsPlus / Geneva, Switzerland</h4>
    <p>
      Tutor for international school students aged from 4 to 18 years old (International Baccalaureate)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2016 - Jun 2016"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Exchange Student</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Toronto / Toronto, Canada</h4>
    <p>
      Research conducted on String & Quantum Field Theory
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2014 - Jun 2016"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Geneva / Geneva - Switzerland</h4>
    <p>
      In charge of Physics Laboratories for Biology Undergraduates
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </section>
  )
}

export default Experiences