import React from "react";

const TeamMemberCard = ({Name,Title}) => {
    return(
        <div>
            <h2>{Name}</h2>
            <p>{Title}</p>
        </div>
    );
}
export default TeamMemberCard;