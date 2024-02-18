//IMPORTACIONES
import {
    sectionScreenLoding,
    sectionSingIn,
    sectionLetter,
    sectionTime,
    sectionMusic,
    sectionQuejas,
    inputName,
    password,
    confirmPassword,
    conteinerMeses,
    conteinerDias,
    conteinerHoras,
    conteinerMinutos,
    conteinerSegundos,
    profileHeader,
    profileSingIn,
    nav,
    buttonTime,
    buttonLetter,
    buttonMusic,
    buttonQuejas
} from "./componentes.js"

//FUNCIONES
export const hideComponents = () => {
    sectionTime.classList.remove('componentActive')
    sectionLetter.classList.remove('componentActive')
    sectionMusic.classList.remove('componentActive')
    sectionQuejas.classList.remove('componentActive')
}

export const showTime = () => {
    hideComponents()
    buttonActiveTime()
    setInterval(calcularTiempoPasado, 1000)
    sectionTime.classList.add('componentActive')
}

export const showLetter = e => {
    e.preventDefault()
    hideComponents()
    buttonActiveLetter()
    sectionLetter.classList.add('componentActive')
}

export const showMusic = e => {
    e.preventDefault()
    hideComponents()
    buttonActiveMusic()
    sectionMusic.classList.add('componentActive')

}

export const showQuejas = e => {
    e.preventDefault()
    hideComponents()
    buttonActiveQuejas()
    sectionQuejas.classList.add('componentActive')
}

export const hideScreenLoding = () => {
    setTimeout(() => {
        sectionScreenLoding.classList.remove('componentActive')
    }, 3000)
}

export const showSingIn = () => {
    hideComponents()
    hideNav()
    sectionSingIn.classList.add('componentActive')
}

export const saveInfo = () => {

    if (!inputName.value) {
        inputName.classList.add('createProfile_input--error')
        return
    }
    if (!password.value) {
        password.classList.add('createProfile_input--error')
        return
    }
    if (!confirmPassword.value) {
        confirmPassword.classList.add('createProfile_input--error')
        return
    }
    if (password.value != confirmPassword.value) {
        password.classList.add('createProfile_input--error')
        confirmPassword.classList.add('createProfile_input--error')
        return
    }

    sectionSingIn.classList.remove('componentActive')
    showTime()
    showNav()
}

export const cleanInputName = () => {
    inputName.classList.remove('createProfile_input--error')
}

export const cleanInputPassword = () => {
    password.classList.remove('createProfile_input--error')
}

export const cleanInputConfirmPassword = () => {
    confirmPassword.classList.remove('createProfile_input--error')
}

export const calcularTiempoPasado = () => {
    const fechaReferencia = new Date('2023-10-07T00:00:00');

    const fechaActual = new Date();
    const diferencia = fechaActual - fechaReferencia;

    // Convertir la diferencia de milisegundos a meses, días, horas, minutos y segundos
    let segundos = Math.floor(diferencia / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let meses = Math.floor(dias / 30.436875); // Promedio de días en un mes (365.25 / 12)
    let años = Math.floor(meses / 12);

    // Calcular los segundos restantes después de calcular los meses, días, horas y minutos
    const segundosRestantes = segundos % 60;

    años = años,
        meses = meses % 12
    dias = Math.floor(dias % 30.436875) // Resto de días
    horas = horas % 24
    minutos = minutos % 60
    segundos = segundosRestantes

    conteinerMeses.textContent = `${meses} meses`
    conteinerDias.textContent = `${dias} dias`
    conteinerHoras.textContent = `${horas} horas`
    conteinerMinutos.textContent = `${minutos} minutos`
    conteinerSegundos.textContent = `${segundos} segundos`
}

export const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        isFullscreen = true;
        btnFullScreen.classList.toggle('rotate')
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            isFullscreen = false;
            btnFullScreen.classList.toggle('rotate')
        }
    }
}

export const addEventProfile = () => {
    const profiles = document.querySelectorAll('.profile')
    profiles.forEach(profile => profile.addEventListener('click', selectPhotoProfile))
}

export const selectPhotoProfile = e => {
    const id = e.target.id
    profileHeader.style.backgroundImage = `url("../img/profile${id}.jpg")`
    profileSingIn.style.backgroundImage = `url("../img/profile${id}.jpg")`
}

export const showNav = () => {
    nav.classList.add('nav_active')
}

export const hideNav = () => {
    nav.classList.remove('nav_active')
}

export const buttonsdeactivate = () => {
    buttonTime.classList.remove('buttonActive')
    buttonLetter.classList.remove('buttonActive')
    buttonMusic.classList.remove('buttonActive')
    buttonQuejas.classList.remove('buttonActive')
}

export const buttonActiveTime = () => {
    buttonsdeactivate()
    buttonTime.classList.add('buttonActive')
}

export const buttonActiveLetter = () => {
    buttonsdeactivate()
    buttonLetter.classList.add('buttonActive')
}

export const buttonActiveMusic = () => {
    buttonsdeactivate()
    buttonMusic.classList.add('buttonActive')
}

export const buttonActiveQuejas = () => {
    buttonsdeactivate()
    buttonQuejas.classList.add('buttonActive')
}