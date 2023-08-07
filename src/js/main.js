const kit = [["./src/assets/T40.webp","Agras T40 + Radio Control", "T40", "drones", "$63.496.000"], ["./src/assets/T20P.png","Agras T20P + Radio Control", "T40","drones", "$51.412.000"], ["./src/assets/mavic3M.webp","DJI Mavic 3 Multiespectral", "Mavic 3M","drones", "$23.792.000"], ["./src/assets/batteryKIT.png","Kit de baterías", "Mavic 3M","baterias", "$2.900.000"], ["./src/assets/T40_BATTERY.webp","Batería", "T40","baterias","$27.588.000"], ["./src/assets/T30-Battery.png","Batería", "T30", "baterias","$7.196.000"], ["./src/assets/T20P_BATTERY.webp","Batería para Agras T20P", "T20P","baterias", "$19.800.000"], ["./src/assets/t30Charger.webp", "Cargador de baterías", "T20P, T30, T40","cargadores", "$5.196.000"],["./src/assets/DJI_D12000iE.webp","Generador DJI D12000iE","T10, T20(P), T30, T40", "cargadores", "$15.996.000"],["./src/assets/t40_tank.webp", "Tanque de sólidos", "T40", "tanques", "$5.888.000"], ["./src/assets/t30_tank.webp", "Tanque de sólidos", "T30", "tanques","Sin definir"],["./src/assets/T20P_tank.png","Tanque de sólidos T20P", "T20P", "tanques","$5.272.000"], ["./src/assets/AC_cable.png", "Cable AC 2600W", "T10, T20(P), T30, T40", "accesorios", "144.000"], ["./src/assets/WB37Battery.webp", "Batería externa WB37", "T10, T20(P), T30, T40","baterias", "$364.000"], ["./src/assets/DJI65W.png","Cargador externo de 65W", "T10, T20(P), T30, T40", "cargadores", "$364.000"], ["./src/assets/RTKantenna.webp","RTK estación móvil", "T10, T20(P), T30, T40", "accesorios", "$14.708.000"], ["./src/assets/RTKbase.png","RTK trípode", "RTK estación movil", "accesorios", "$1.952.000"], ["./src/assets/licencia.png","Curso de piloto de drone", "Complemento", "otros", "$1.500.000"], ["./src/assets/herramientas.png","Curso de mantenimiento", "Complemento", "otros", "$4.500.000"], ["./src/assets/mantenimiento.png","Mantenimiento preventivo", "Complemento", "otros", "$800.000"]]
//categorias: drones, baterias, cargadores, accesorios, tanques, otros
const home = document.querySelector(".home")

const drones = document.querySelector(".drones")
drones.addEventListener('click', goToDrones.bind(null, null))

const repuestos = document.querySelector(".repuestos")
repuestos.addEventListener('click', goToSpare)

const cardsContainer = document.querySelector('.cards--container')
const kits = document.querySelector('.kits')

let filtroAnt = "";

function goToDrones(filtro){
    if(!home.classList.contains("inactive")){
        home.classList.toggle("inactive")
        kits.classList.toggle("inactive")
    }

    if(filtro === null || filtro === filtroAnt){
        filtroAnt = null;
        arrFilterBtns.forEach((el)=>{
            if(el.classList.contains("active")){
                el.classList.toggle("active")
            }
        })
        clearCanvasKits()
        kit.forEach(el => {    
            drawCard(el);    
        });
    } else {
        clearCanvasKits()
        kit.forEach(el => {  
            if(el[3]===filtro) drawCard(el);    
        });
        filtroAnt = filtro;
    }

}
function clearCanvasKits(){
    const arrCards = cardsContainer.querySelectorAll('div');
    arrCards.forEach(el => el.remove())
}
function drawCard(item){
    const img = document.createElement('img');
    img.src = item[0];

    const title = document.createElement('p');
    title.innerText = item[1]
    title.classList.add('card--desc__title')

    const drone = document.createElement('p');
    drone.innerText = item[2]
    drone.classList.add('card--desc__comment')

    const precio = document.createElement('p');
    precio.innerText = item[4]
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
}

const logo = document.querySelector(".logo")
logo.addEventListener("click", logoReturn)

function logoReturn(){
    if(!home.classList.contains("inactive")){
        return;
    }
    if(!filtersContainer.classList.contains("inactive")){
        filterShowHide()
    }
    clearCanvasKits()
    home.classList.toggle("inactive")
    kits.classList.toggle("inactive")

    arrFilterBtns.forEach((el)=>{
        if(el.classList.contains("active")){
            el.classList.toggle("active")
        }
    })
}

function goToSpare(){
    home.classList.toggle("inactive")
}

const filterDiv = document.querySelector(".filters--title");
const arowUp = document.querySelector(".arow_up")
const arowDown = document.querySelector(".arow_down")
const filtersContainer = document.querySelector(".filters--container");
filterDiv.addEventListener("click", filterShowHide)

function filterShowHide(){
    filtersContainer.classList.toggle("inactive")
    arowUp.classList.toggle("inactive")
    arowDown.classList.toggle("inactive")
}

const btnDrone = document.querySelector(".btnDrone")
const btnBattery = document.querySelector(".btnBattery")
const btnCharger = document.querySelector(".btnCharger")
const btnTank = document.querySelector(".btnTank")
const btnAcces = document.querySelector(".btnAcces")
const btnOthers = document.querySelector(".btnOthers")

const arrFilterBtns = filtersContainer.querySelectorAll('button');
arrFilterBtns.forEach((item)=>{
    item.addEventListener("click", function(){
        arrFilterBtns.forEach(el=>{
            if(el.classList.contains("active")){
                el.classList.toggle("active")
            }
        })
        item.classList.toggle("active");
        const categoria = this.dataset.category;
        goToDrones(categoria)
    })
})