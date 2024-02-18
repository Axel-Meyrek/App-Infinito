//IMPORTACIONES
import { 
    buttonTime, 
    buttonLetter, 
    buttonMusic,
    buttonSingIn,
    inputName,
    password,
    confirmPassword,
    profileHeader,
    buttonFullScreen
} from "./componentes.js"
import { 
    showTime, 
    showLetter, 
    showMusic, 
    showQuejas,
    saveInfo,
    cleanInputName,
    cleanInputPassword,
    cleanInputConfirmPassword,
    addEventProfile,
    showSingIn,
    toggleFullscreen,
} from "./funciones.js"

//EVENT MAIN
document.addEventListener('DOMContentLoaded', () => {
    //VARIABLES
    addEventProfile()
    
    buttonFullScreen.addEventListener('click', toggleFullscreen)
    buttonTime.addEventListener('click', showTime)
    buttonLetter.addEventListener('click', showLetter)
    buttonMusic.addEventListener('click', showMusic)
    buttonQuejas.addEventListener('click', showQuejas)
    buttonSingIn.addEventListener('click', saveInfo)
    inputName.addEventListener('click', cleanInputName)
    password.addEventListener('click', cleanInputPassword)
    confirmPassword.addEventListener('click', cleanInputConfirmPassword)
    profileHeader.addEventListener('click', showSingIn)
    // Ejemplo de uso
    
})