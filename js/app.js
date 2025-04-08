window.onload = () => {
    const toggleSwitch = document.getElementById("switch");
    const toggleSwitchText = toggleSwitch.querySelector("p");
    const body = document.body;
    const title = document.querySelector("h1");

    toggleSwitch.onclick = () => {
        if (body.style.backgroundColor == "") {
            body.style.backgroundColor = "black"; /*cambia el color de fondo a negro*/
            toggleSwitch.style.backgroundColor = "white"; /*cambia el color del SWITCH a blanco*/
            toggleSwitchText.innerHTML = "🌞"; /*cambia el texto del switch a Encender */
            toggleSwitchText.style.color = "black"; /*cambia el color de la letra a negro*/ 
            title.style.color = "white";
            
        } else if (body.style.backgroundColor == "white") {
            body.style.backgroundColor = "black"; /*cambia el color de fondo a negro*/
            toggleSwitch.style.backgroundColor = "white"; /*cambia el color del SWITCH a blanco*/
            toggleSwitchText.innerHTML = "🌞"; /*cambia el texto del switch a Encender */
            toggleSwitchText.style.color = "black"; /*cambia el color de la letra a negro*/
            title.style.color = "white";            
        } else {
            body.style.backgroundColor = "white";
            toggleSwitch.style.backgroundColor = "black";
            toggleSwitchText.innerHTML = "🌙";
            toggleSwitchText.style.color = "white";
            title.style.color = "black"
        }   
    }
}