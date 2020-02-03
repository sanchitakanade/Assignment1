{
  /*Name: Sanchita Kanade
    Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
    Assignment: 1
    File: App.jsx
  */
}
const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, "Sanchita Kanade"), React.createElement("img", {
  src: "images/Sanchita.png",
  alt: "picture, Sanchita"
}), React.createElement("p", null, "Hi, My name is Sanchita Kanade, I am a graduate student.", React.createElement("br", null), "I am pursuing master's in Computer Science from SDSU. ", React.createElement("br", null), "My expertise are java programming and web application development. ", React.createElement("br", null), "I have enrolled into the \"Fullstack Web Application Development\" class", React.createElement("br", null), "this semester and I am very excited to learn new skills from this class."), React.createElement("button", {
  type: "button",
  onClick: handleClick
}, "View my GitHub repo"));

function handleClick(e) {
  e.preventDefault();
  window.location = "https://github.com/sanchitakanade";
}

ReactDOM.render(element, document.getElementById('contents'));