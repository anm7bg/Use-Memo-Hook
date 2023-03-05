import "./App.css";
import { useState, useMemo } from "react";

function App() {
  
  const [text, setText] = useState("");

  let icon = document.querySelector(".fas");

  const numberRegex = /^\d+$/;

  function getInput(e) {
    setText(e.target.value)
  };

  const checkNumber = useMemo(() => {
    return numberRegex.test(text);
    // if(!isNaN(text)){
    //   return true;
    //  }else{
    //   return false;
    //  }
  }, [text])

  let iconClass = "fas fa-times";

  checkNumber ? iconClass = "fas fa-check" : iconClass = "fas fa-times";

  console.log(checkNumber);
  console.log(text);


  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={getInput}
        />
        <span className="icon is-small is-right">
          <i className={iconClass} />
        </span> 
      </div>
    </div>
  );
}

export default App;
