import '../style/Base.css'

import { ButtonRedirect } from '../components/ButtonRedirect'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const clickRedirect = (e) => {
    const value = e.target.value

    if (value === "learning") {
      navigate('/learn')
    } else if (value === 'exercice') {
      navigate('/exercise')
    } else if (value === 'search') {
      navigate('/search')
    }
  }

  return (
    <>
      <div className='mb-5'>
        <h2>Irregular Verbs trainer</h2>
      </div>
      <p>Choisissez ce que vous voulez faire :</p>
      <div className="container d-flex justify-content-between mt-5">
        <div>
          <ButtonRedirect label="Apprendre" value="learning" onClick={clickRedirect} />
        </div>
        <div>
          <ButtonRedirect label="Chercher un verbe" value="search" onClick={clickRedirect} />
        </div>
        <div>
          <ButtonRedirect label="Se tester !" value="exercice" onClick={clickRedirect} />
        </div>
      </div>
    </>
  )
}

export default App
