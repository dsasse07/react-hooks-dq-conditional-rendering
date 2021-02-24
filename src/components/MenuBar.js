import React, { useState } from "react";

function MenuBar({ onContentChange, contentState }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  const [activeButton, setActiveButton] = useState("")
  function handleClick(event, word){
    console.log('word', word)
    setActiveButton(word)
    onContentChange(word)
  }
  

  return (
    <div className="ui four item menu">
      <span className={activeButton === "profile" ? "item active" : "item"} onClick={(event) => handleClick(event, "profile")}>
        <i className="user large icon" />
      </span>

      <span className={activeButton === "photos" ? "item active" : "item"} onClick={(event) => handleClick(event,"photos")}>
        <i className="photo large icon" />
      </span>

      <span className={activeButton === "cocktails" ? "item active" : "item"} onClick={(event) => handleClick(event,"cocktails")}>
        <i className="cocktail large icon" />
      </span>

      <span className={activeButton === "pokemon" ? "item active" : "item"} onClick={(event) => handleClick(event,"pokemon")}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
