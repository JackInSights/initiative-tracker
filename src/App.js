import React from "react";
import "./App.css";
import MainMenu from "./components/MainMenu"
import CombatantList from "./components/CombatantList"

function App() {

  return (
    <div className="app-container">
        <MainMenu />

      <div className="combatants-list container">
        <CombatantList />
      </div>
    </div>
  );
}

export default App;

//I eventually want this <App /> output to be significantly reworked and shrunk down.  Preferably heavily compartmentalized and multi-level nested.

//***************************** */

//Example:

//App returns the <Dashboard/> component (or we can just rename App to Dashboard, depending on what we need to do with useState() and other hooks).

//Dashboard returns the <MainMenu/> and <CombatantList/> components (as shown in the picture I sent on Discord).

//MainMenu returns the <TitleCard/>, <ButtonMenu/>, and <ClearAll/> components on the left side.

//CombatantList returns multiple <Combatant/> divs on the right side within the <CombatantList/> component.

//****************************** */

//The <EntryForm/> component should pop up like a modal whenever one of the "add" buttons is clicked.  I tentatively put it in the "utils" folder because all the various buttons will be accessing it.

//The user can click whatever button they need, enter the "name" and "initiative score", and hit submit. That  closes the modal and generates the corresponding <Combatant/> div inside the <CombatantList/> component.  The various <Combatant/> divs will dynamically reorder themselves upon input of each new instance.
