import React from 'react'

const UserGrades=()=>{
    return(
        <div
            style={{
                position:"absolute",
                bottom:"30px",
                left:"250px",
                zIndex:"2000",
                textAlign:"left"
            }}
        >
            <div style={{
                fontSize:"1.3em"
                }}>Note du Participant : {10}</div>
            
            <div style={{
                fontSize:"1.3em"
            }}>
                Connection effectué : {10}
            </div>
        </div>
    )
}

export default UserGrades