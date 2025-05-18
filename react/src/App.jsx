import React from "react";

import TeamMemberCard from "./componets/TeamMemberCard";

const App =()=>{
  return(
    <div>
      <h1>TeamMemberCard</h1>
      <TeamMemberCard Name={"john doe"} Title={"software engineer"}/>
      <TeamMemberCard Name={"doe john"} Title={"Mechanical engineer"}/>
    </div>
  )
}
export default App;