import React from 'react'
import ReactDOM from 'react-dom'

const Info = () => {
    return(
        <div>
            <img src="./images/pfp2.jpg" className="profile-img" width="140px;"/>
            <div className="info">
                <h3>Hussein Dawod</h3>
                <p>React Developer</p>
                <button className="socialBtn socialBtn1">Email</button>
                <button className="socialBtn socialBtn2">LinkedIn</button>
            </div>
        </div>
    )
}


export default Info