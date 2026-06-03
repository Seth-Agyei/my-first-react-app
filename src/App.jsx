import SkillsList from "./components/SkillsList.jsx";
import Profilecard from "./components/ProfileCard.jsx";
import CertificateList from "./components/CertificateList.jsx";

function App() {
    return(
        <>
        <h1>First React Application</h1>
        <Profilecard
        name= 'seth'
        role = 'FULLSTACK DEVELOPER'
        
        />
      <hr />
      <SkillsList
              
        />

        <hr />
      <CertificateList
              
        />
        </>
    )
}

export default App;