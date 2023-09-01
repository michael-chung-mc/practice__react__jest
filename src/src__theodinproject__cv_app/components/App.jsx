import { useState } from 'react'
import ContactInfo from '/src/components/ContactInfo.jsx'
import Education from '/src/components/Educational.jsx'
import Experience from '/src/components/Experience.jsx'

function App() {
  const contact = ContactInfo();
  const education = Education();
  const experience = Experience();
  return (
    <div>
      {contact}
      {education}
      {experience}
    </div>
  )
}

export default App
