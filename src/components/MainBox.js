import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  const [content, setContent] = useState("profile")
  
  let componentToDisplay
  switch (true){  
    case(content === "profile"):
      componentToDisplay = <Profile/>
      break
    case(content === "photos"):
      componentToDisplay = <Photos/>
      break
    case(content === "cocktails"):
      componentToDisplay = <Cocktails/>
      break
    case(content === "pokemon"):
      componentToDisplay = <Pokemon/>
      break
  }

  return (
    <div>
      <MenuBar onContentChange={setContent} contentState={content}/>
      {componentToDisplay}
    </div>
  );
}

export default MainBox;
