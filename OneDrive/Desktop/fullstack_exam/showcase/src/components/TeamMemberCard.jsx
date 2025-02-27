import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './TeamMemberCard.css'

function app(){
     const [count, setCount] = useState(0)
    
      return {
        <>
         <div>
         <h1> TeamMembers Name </h1>
         <div className="team">
         <button onClick={() => setCount((teammember) => teammember's name )}>
       
       </button>
       </div>
         </div>

      }
}
    
    export default TeamMemberCard;