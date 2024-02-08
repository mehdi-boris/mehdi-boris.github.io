import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'
import '../styles/awards.css'
import { GiRadioactive } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { PiCertificateThin } from "react-icons/pi";

const Awards = () => {
  const languageskillsRef = useNav("Certifications & Awards")

  return (
    <section ref={languageskillsRef} id="certifications & awardsSection" className="simple-section">
      <h2 className="title-yellow">Certifications & Awards</h2>
      <div id="boxes">
        <div className="div-awards">
          <GiRadioactive size="100px" color='#e0f638'/>
          <h4 className="text-white">Certificate</h4>
          <h4 className="text-white">Radiation Protection</h4>
          <h5 className="text-white">CHUV, Centre hospitalier universitaire vaudois</h5>
        </div>
        <div className="div-awards">
          <GoTrophy size="100px" color='#e0f638'/>
          <h4 className="text-white">First place</h4>
          <h4 className="text-white">Business Game 2018</h4>
          <h5 className="text-white">SICPA</h5>
        </div>
          <div className="div-awards">
          <PiCertificateThin size="100px" color='#e0f638'/>
          <h4 className="text-white">Certificate</h4>
          <h4 className="text-white">Machine Learning spacialization</h4>
          <h5 className="text-white">Stanford University</h5>
        </div>
      </div>
    </section>
  )
}

export default Awards