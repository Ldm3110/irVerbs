import { ButtonRedirect } from '../components/buttons/ButtonRedirect'
import '../style/Base.css'


function App() {

  return (
    <>
      <div className='mb-5'>
        <h2>Irregular Verbs trainer</h2>
      </div>
      <p>Choisissez ce que vous voulez faire :</p>
      <div className="container d-flex justify-content-between mt-5">
        <ButtonRedirect route="/learn" label="Apprendre" />
        <ButtonRedirect route="/search" label="Chercher un verbe" />
        <ButtonRedirect route="/exercise" label="S'entrainer" />
      </div>
    </>
  )
}


export default App
