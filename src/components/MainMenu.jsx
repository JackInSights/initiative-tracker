import React from 'react'
import Button from "../utils/Button";

function MainMenu() {
    const handleOnClick = (e) => {
        e.currentTarget.blur();
        console.log(e.target.innerText);
      };

    return (
                 <div className="main-menu container">
        <div>
          <h1 className="main-title">
            Initiative
            <br />
            Tracker
          </h1>
        </div>
        <div>
          <Button
            color="#17d127"
            text="Add Player"
            onClick={handleOnClick}
            className="btn"
          />
          <Button
            color="#e83333"
            text="Add Monster"
            onClick={handleOnClick}
            className="btn"
          />
          <Button
            color="#4d0be6"
            text="Add Other"
            onClick={handleOnClick}
            className="btn"
          />
        </div>
        <div>
          <Button
            color="#737373"
            text="Clear All"
            onClick={handleOnClick}
            className="btn"
          />
        </div>
        </div>
    )
}

export default MainMenu
