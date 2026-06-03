import { useState } from "react";
import "../styles/CertificateList.css"


function CertificateList () {
        
   const [showCertifications, setShowCertifications] = useState(true)

    const certificates = [
        { id: 1,
         title: "React-Developer",
         provider: "Advanced"
        },
        {id: 2,
         title: "JavaScript Algorithms",
         provider: "CodeCamp",
        },
        
        {id: 3,
         title: "Python Programming",
         provider: "PythonCAmp"
        },

         {id: 4,
         title: "Node.js Fundamentals",
         provider: "NodeCampUs"
        },
         {id: 5,
         title: "AWS Cloud Practitioner",
         provider: "AWScamp"
        },

        
    ];


   return(
          
        <div className="certificates-container">
            <h2 className="certificates-title">Developer Certificate</h2>
            {
            showCertifications &&
            certificates.map((Certificate) => (
                <div key= {Certificate.id} className="skill-item"> <span>{Certificate.title} </span> ---  <span>{Certificate.provider}</span></div>
            ))}

           <button 
             className="toggle-Button"
            onClick={() => setShowCertifications(!showCertifications)}>
            {
                showCertifications ? "Hide certificates" : "Show certificates"
            }

           </button>
        </div>
    )




}

export default CertificateList