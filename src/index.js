import _ from "lodash";
import "./style.css";
import Icon from "./testimg.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "People"], " ");
  element.classList.add("hello");
  let description = `KizzTaskMaster App + ${Icon}`;

  const myIcon = new Image;
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.appendChild(description)


  return element;
}

document.body.appendChild(component());
