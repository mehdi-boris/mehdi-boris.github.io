import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrCertificate } from "react-icons/gr";

const Education = () => {
  const educationRef = useNav("Academic History")

  return (
    <section ref={educationRef} id="academic historySection" className="simple-section">
      <h2 className="title">Academic History</h2>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2017 - Jun 2019"
    dateClassName="text-blue"
    contentStyle={{ background: '#00ffffff', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #00ffffff' }}
    iconStyle={{background: '#00ffffff', color: 'black'}}
    icon={<GrCertificate />}
  >
    <h3 className="vertical-timeline-element-title">Master of Science Actuarial Science</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Lausanne / Lausanne, Switzerland</h4>
    <p>
      Master Thesis : Development of a Python tool based on a generalized life insurance model
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2014 - Jun 2016"
    dateClassName="text-blue"
    contentStyle={{ background: '#00ffffff', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #00ffffff' }}
    iconStyle={{background: '#00ffffff', color: 'black'}}
    icon={<GrCertificate />}
  >
    <h3 className="vertical-timeline-element-title">Master of Science Theoretical Physics</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Geneva / Geneva, Switzerland</h4>
    <p>
      Master Thesis : Study of Rotation of Gravitational Waves by intervening mass distribution
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2012 - Jun 2014"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<GrCertificate />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science Physics</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Geneva / Geneva, Switzerland</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2010 - Jun 2012"
    dateClassName="text-white"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<GrCertificate />}
  >
    <h3 className="vertical-timeline-element-title">Preparatory Class, MP (Mathematics, Physics)</h3>
    <h4 className="vertical-timeline-element-subtitle">High School Vaugelas / Chambery, France</h4>
    <p>
      Intensive program preparing for the national competitive exam for entry to engineering schools.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </section>
  )
}

export default Education