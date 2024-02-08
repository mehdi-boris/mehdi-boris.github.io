import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'

const LanguageSkills = () => {
  const languageskillsRef = useNav("Language Skills")

  return (
    <section ref={languageskillsRef} id="language skillsSection" className="simple-section">
      <h2 className="title">Language Skills</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default LanguageSkills