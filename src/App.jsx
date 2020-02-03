{/*Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 1
   File: App.jsx
*/}
const element = (
    <div title = "Outer div">        
        <h1>Sanchita Kanade</h1>
        <img src="images/Sanchita.png" alt="picture, Sanchita"/>
        <p>Hi, My name is Sanchita Kanade, I am a graduate student.<br /> 
            I am pursuing master's in Computer Science from SDSU. <br />
            My expertise are java programming and web application development. <br />
            I have enrolled into the "Fullstack Web Application Development" class<br /> 
            this semester and I am very excited to learn new skills from this class.
        </p>
        <button type="button" onClick={handleClick}>View my GitHub repo</button>
    </div>
);
function handleClick(e) {
    e.preventDefault();
    window.location = "https://github.com/sanchitakanade";
}
ReactDOM.render(element, document.getElementById('contents'));