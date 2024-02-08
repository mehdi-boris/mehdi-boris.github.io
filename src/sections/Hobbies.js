import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'
import '../styles/hobbies.css'
import Card from "../components/Card"


const Hobbies = () => {
  const hobbiesRef = useNav("Hobbies")

  return (
    <section ref={hobbiesRef} id="hobbiesSection" className="simple-section">
      <h2 className="title">Hobbies</h2>
      <div className="boxes">
        <div className="div-hobbies">
          <Card className='card-container-green' title='Science' imageUrl='images/einstein.png' body= 'I have harbored a profound passion for sciences, driven by an insatiable curiosity. Exploring the wonders of the physical world has been a consistent source of fascination especially in Physics and Mathematics. They are powerful tools that unlock the secrets of the universe but also serve as a beginning to any creation.'/>    
        </div>
        <div className="div-hobbies">
          <Card className='card-container-purple' title='Travels' imageUrl='images/voyages.jpeg' body='My insatiable curiosity has led me to explore diverse corners of the globe. From the vibrant streets of Tokyo to the enchanting beauty of Capri and the dynamic urban landscape of Toronto, each journey has woven a rich tapestry of experiences, leaving me eagerly anticipating the next adventure...'/>    
        </div>
        <div className="div-hobbies">
          <Card className='card-container' title='Sport' imageUrl='images/sport.jpg' body='I find immense joy in pushing my physical boundaries. Each practice session becomes not only a physical workout but a journey towards self-improvement and mental resilience. Boxing, football and calisthenics are components of my fitness routine.'/>    
        </div>
        <div className="div-hobbies">
          <Card className='card-container-orange' title='History' imageUrl='images/history.jpeg' body='I am passionated about history, with a particular focus on Greek mythology and ancient Egyptian civilizations, driven by a curiosity to unravel the stories and cultural nuances that have shaped these remarkable civilizations.'/>    
        </div>
      </div>
    </section>
  )
}

export default Hobbies