const kit = [["/src/assets/T40.webp","Agras T40 + Radio Control", "T40", "$63.496.000"], ["/src/assets/T20P.png","Agras T20P + Radio Control", "T40", "$51.412.000"], ["/src/assets/mavic3M.webp","DJI Mavic 3 Multiespectral", "Mavic 3M", "$23.792.000"], ["/src/assets/batteryKIT.png","Kit de baterías", "Mavic 3M", "$2.900.000"], ["/src/assets/T40_BATTERY.webp","Batería", "T40", "$27.588.000"], ["/src/assets/T30-Battery.png","Batería", "T30", "$7.196.000"], ["/src/assets/T20P_BATTERY.webp","Batería para Agras T20P", "T20P", "$19.800.000"], ["./src/assets/t30Charger.webp", "Cargador de baterías", "T20P, T30, T40", "$5.196.000"],["/src/assets/DJI_D12000iE.webp","Generador DJI D12000iE", "T10, T20(P), T30, T40", "$15.996.000"],["./src/assets/t40_tank.webp", "Tanque de sólidos", "T40", "$5.888.000"], ["./src/assets/t30_tank.webp", "Tanque de sólidos", "T30", "Sin definir"],["/src/assets/T20P_tank.png","Tanque de sólidos T20P", "T20P", "$5.272.000"], ["./src/assets/AC_cable.png", "Cable AC 2600W", "T10, T20(P), T30, T40", "144.000"], ["./src/assets/WB37Battery.webp", "Batería externa WB37", "T10, T20(P), T30, T40", "$364.000"], ["/src/assets/DJI65W.png","Cargador externo de 65W", "T10, T20(P), T30, T40", "$364.000"], ["/src/assets/RTKantenna.webp","RTK estación móvil", "T10, T20(P), T30, T40", "$14.708.000"], ["/src/assets/RTKbase.png","RTK trípode", "RTK estación movil", "$1.952.000"], ["/src/assets/licencia.png","Curso de piloto de drone", "Complemento", "$1.500.000"], ["/src/assets/herramientas.png","Curso de mantenimiento", "Complemento", "$4.500.000"], ["/src/assets/mantenimiento.png","Mantenimiento preventivo", "Complemento", "$800.000"]]

const home = document.querySelector(".home")

const drones = document.querySelector(".drones")
drones.addEventListener('click', goToDrones)

const repuestos = document.querySelector(".repuestos")
repuestos.addEventListener('click', goToSpare)

const cardsContainer = document.querySelector('.cards--container')
const kits = document.querySelector('.kits')

function goToDrones(){
    home.classList.toggle("inactive")
    kits.classList.toggle("inactive")

    kit.forEach(item => {        
        
        const img = document.createElement('img');
        img.src = item[0];

        const title = document.createElement('p');
        title.innerText = item[1]
        title.classList.add('card--desc__title')

        const drone = document.createElement('p');
        drone.innerText = item[2]
        drone.classList.add('card--desc__comment')

        const precio = document.createElement('p');
        precio.innerText = item[3]
        precio.classList.add('card--desc__price')

        const card = document.createElement('div');
        card.classList.add('card')

        const cardImg = document.createElement('div');
        cardImg.classList.add('card--img')
        cardImg.appendChild(img)

        const cardDesc = document.createElement('div');
        cardDesc.classList.add('card--desc')
        cardDesc.appendChild(title)
        cardDesc.appendChild(drone)
        cardDesc.appendChild(precio)

        card.appendChild(cardImg)
        card.appendChild(cardDesc)

        cardsContainer.appendChild(card);
    });
    
}

const kitsRowReturn = document.querySelector(".kits--return__row")
kitsRowReturn.addEventListener("click", kitsReturn)

function kitsReturn(){
    const arrCards = cardsContainer.querySelectorAll('div');
    arrCards.forEach(el => el.remove())
    home.classList.toggle("inactive")
    kits.classList.toggle("inactive")
}

function goToSpare(){
    home.classList.toggle("inactive")
}