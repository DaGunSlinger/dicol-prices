const kit = [   ["./src/assets/T40.webp","Agras T40 + Radio Control", "T40", "drones", "$63.496.000"], 
                ["./src/assets/T20P.png","Agras T20P + Radio Control", "T40","drones", "$51.412.000"], 
                ["./src/assets/mavic3M.webp","DJI Mavic 3 Multiespectral", "Mavic 3M","drones", "$23.792.000"], 
                ["./src/assets/batteryKIT.png","Kit de 3 baterías + base de carga", "Mavic 3M","baterias", "$2.900.000"], 
                ["./src/assets/T40_BATTERY.webp","Batería", "T40","baterias","$27.588.000"], 
                ["./src/assets/T30-Battery.png","Batería", "T30", "baterias","$7.196.000"], 
                ["./src/assets/T20P_BATTERY.webp","Batería para Agras T20P", "T20P","baterias", "$19.800.000"], 
                ["./src/assets/t30Charger.webp", "Cargador de baterías", "T20P, T30, T40","cargadores", "$5.196.000"],
                ["./src/assets/DJI_D12000iE.webp","Generador DJI D12000iE","T10, T20(P), T30, T40", "cargadores", "$15.996.000"],
                ["./src/assets/t40_tank.webp", "Tanque de sólidos", "T40", "tanques", "$5.888.000"], 
                ["./src/assets/t30_tank.webp", "Tanque de sólidos", "T30", "tanques","Sin definir"],
                ["./src/assets/T20P_tank.png","Tanque de sólidos T20P", "T20P", "tanques","$5.272.000"],
                ["./src/assets/AC_cable.png", "Cable AC 2600W", "T10, T20(P), T30, T40", "accesorios", "144.000"],
                ["./src/assets/WB37Battery.webp", "Batería externa WB37", "T10, T20(P), T30, T40","baterias", "$364.000"],
                ["./src/assets/DJI65W.png","Cargador externo de 65W", "T10, T20(P), T30, T40", "cargadores", "$364.000"],
                ["./src/assets/RTKantenna.webp","RTK estación móvil", "T10, T20(P), T30, T40", "accesorios", "$14.708.000"],
                ["./src/assets/RTKbase.png","RTK trípode", "RTK estación movil", "accesorios", "$1.952.000"],
                ["./src/assets/licencia.png","Curso de piloto de drone", "Complemento", "otros", "$1.500.000"],
                ["./src/assets/herramientas.png","Curso de mantenimiento", "Complemento", "otros", "$4.500.000"],
                ["./src/assets/mantenimiento.png","Mantenimiento preventivo", "Complemento", "otros", "$800.000"]]

const spareList = [ ["./src/assets/spare/BC.AG.SS000425.01/spray_tank_y_tee_part_1.jpg","Pieza en forma de Y","sin definir","repuestos","$12.000"],
                ["./src/assets/spare/Y0.JG.XW000039.03/airframe_carbon_board.jpg", "Componente de carbono del tablero","sin definir", "repuestos", "$18.040"],
                ["./src/assets/spare/YC.DZ.AF000059.01/fan_1.jpg","Ventilador del radiocontrol", "control", "repuestos", "$77.880"],
                ["./src/assets/spare/YC.JG.FM000083.02/battery_buckle_1.jpg", "Hebilla de la batería", "sin definir", "repuestos", "$14.080"],
                ["./src/assets/spare/YC.JG.FP000015.02/left_right_motor_protector_1.jpg", "Protector de motor izquierdo/derecho", "sin definir", "repuestos", "$11.880"],
                ["./src/assets/spare/YC.JG.FP000016.02/front_rear_motor_protector_1.jpg", "Protector de motor frontal/trasero", "sin definir", "repuestos", "$11.880"],
                ["./src/assets/spare/YC.JG.FP000018.05/motor_cover_1.jpg", "Covertor de motor", "sin definir", "repuestos", "$13.200"],
                ["./src/assets/spare/YC.JG.MQ000707.01/aerial_electronics_module_thermal_pad.jpg", "Almohadilla termica para modulo electrónico", "sin definir", "termica", "$1.320"],
                ["./src/assets/spare/YC.JG.MQ000710.01/radar_fixing_pase_thermal_pad.jpg", "Almohadilla de fijación del radar", "sin definir", "termica", "$1.320"],
                ["./src/assets/spare/YC.JG.MQ001292.03/teflon_gasket.jpg", "Sello de teflon", "T40", "repuestos", "$1.120"],
                ["./src/assets/spare/YC.JG.MY000270.01/plunger_pump_cover_outer_sealing_ring.jpg", "Anillo de sellado de la bomba", "sin definir", "repuestos", "$2.400"],
                ["./src/assets/spare/YC.JG.MY000690.02/sealing_ring.jpg", "Anillo de sellado del módulo electrónico", "sin defnir", "repuestos", "$1.120"],
                ["./src/assets/spare/YC.JG.QX001169.05/AG501D_ARM_M23_BASE_05 - 1.jpg","Conector del brazo izquierdo", "sin definir", "repuestos", "$161.080"],
                ["./src/assets/spare/YC.JG.QX001242.03/locking_piece_connecting_rod.jpg", "Pieza de bloqueo de la varilla de conexión", "sin definir", "repuestos", "$2.400"],
                ["./src/assets/spare/YC.JG.QX002788.01/motor_base_locking_piece.jpg", "Pieza de bloqueo de la abse del motor", "sin definir", "repuestos", "$10.360"],
                ["./src/assets/spare/YC.JG.ZS000974.02/flow_meter_nut.jpg", "Arandela del medidor de flujo", "sin definir", "repuestos", "$1.320"],
                ["./src/assets/spare/YC.JG.ZS001081.03/IMG_20230629_092923.jpg", "Salida del tanque de aspersión", "sin definir", "repuestos", "$2.400"],
                ["./src/assets/spare/YC.JG.ZS002379.03/Motor upper cover - 1.jpg", "Tapa del motor superior", "sin definir", "repuestos", "$4.760"],
                ["./src/assets/spare/YC.SJ.WS002416.03/propeller_adapter_teflon_pad.jpg", "Adaptador de teflon para hélices", "sin definir", "repuestos", "$3.840"],
                ["./src/assets/spare/YC.ST.LM000030.01/Screw M50-HN080070-0003.jpg", "Tornillo referencia M50-HN080070-0003", "T30", "tornillos", "$1.320"],
                ["./src/assets/spare/YC.WJ.ZZ003424.02/dual_screwdriver_head_1.jpg", "Destornillador hexagonal de 2.5 mm", "sin definir", "repuestos", "$12.000"]]

//categorias: drones, baterias, cargadores, accesorios, tanques, otros
const home = document.querySelector(".home")

const drones = document.querySelector(".drones")
drones.addEventListener('click', goToDrones.bind(null, null))

const repuestos = document.querySelector(".repuestos")
repuestos.addEventListener('click', goToSpare.bind(null, null))

const cardsContainer = document.querySelector('.cards--container')
const kits = document.querySelector('.kits')

const cardsSpareContainer = document.querySelector('.cardsSpare--container')
const sparePartsDiv = document.querySelector('.spareParts')

const filterBar = document.querySelector(".filterBar");

let validateState4Filters = false;

let filtroAnt = "";

function goToDrones(filtro){
    console.log(filtro);
    if(filterBar.classList.contains("inactive")){
        filterBar.classList.toggle("inactive");
    }

    if(!home.classList.contains("inactive")){
        home.classList.toggle("inactive")
        kits.classList.toggle("inactive")
    }

    if(filtro === null || filtro === filtroAnt){
        filtroAnt = null;
        arrFilterBtnsKits.forEach((el)=>{
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
function goToSpare(filtro){
    console.log(filtro);
    validateState4Filters = true;
    if(filterBar.classList.contains("inactive")){
        filterBar.classList.toggle("inactive")
    }
    if(!home.classList.contains("inactive")){
        home.classList.toggle("inactive")
        kits.classList.toggle("inactive")
    }
    if(filtro === null || filtro === filtroAnt){
        filtroAnt = null;
        arrFilterBtnsSpare.forEach((el)=>{
            if(el.classList.contains("active")){
                el.classList.toggle("active")
            }
        })

        spareList.forEach(el => {    
            drawBiggerCard(el);    
        });
    } else {
        clearCanvasKits()
        spareList.forEach(el => {  
            if(el[3]===filtro) drawBiggerCard(el);    
        });
        filtroAnt = filtro;
    }
    //----------------------------------------------------
    // spareList.forEach(el => {  
    //     drawBiggerCard(el);    
    // });
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
    precio.innerText = item[4] + " + IVA"
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
function drawBiggerCard(item){
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
    if(!filtersContainerKits.classList.contains("inactive")){
        filterBar.classList.toggle("inactive")
    }
    if(!filtersKits.classList.contains("inactive") || !filterSpare.classList.contains("inactive")){
        filterShowHide()
    }
    if(validateState4Filters == true){
        validateState4Filters = false;
    }
    clearCanvasKits()
    home.classList.toggle("inactive")
    kits.classList.toggle("inactive")

    arrFilterBtnsKits.forEach((el)=>{
        if(el.classList.contains("active")){
            el.classList.toggle("active")
        }
    })
}

const filterClick = document.querySelector(".filters--title");
const filtersKits = document.querySelector(".filtersKits")
const filterSpare = document.querySelector(".filterSpare");
const arowUp = document.querySelector(".arow_up")
const arowDown = document.querySelector(".arow_down")
const filtersContainerKits = document.querySelector(".filters--containerKits");
const filtersContainerSpare = document.querySelector(".filters--containerSpare");
filterClick.addEventListener("click", filterShowHide)

function filterShowHide(){
    if(validateState4Filters){
        filterSpare.classList.toggle("inactive")
    } else {
        filtersKits.classList.toggle("inactive")
    }
    arowUp.classList.toggle("inactive")
    arowDown.classList.toggle("inactive")
}

const btnDrone = document.querySelector(".btnDrone")
const btnBattery = document.querySelector(".btnBattery")
const btnCharger = document.querySelector(".btnCharger")
const btnTank = document.querySelector(".btnTank")
const btnAcces = document.querySelector(".btnAcces")
const btnOthers = document.querySelector(".btnOthers")

const arrFilterBtnsKits = filtersContainerKits.querySelectorAll('button');
arrFilterBtnsKits.forEach((item)=>{
    item.addEventListener("click", function(){
        arrFilterBtnsKits.forEach(el=>{
            if(el.classList.contains("active")){
                el.classList.toggle("active")
            }
        })
        item.classList.toggle("active");
        const categoria = this.dataset.category;
        goToDrones(categoria)
    })
})

const arrFilterBtnsSpare = filtersContainerSpare.querySelectorAll('button');
arrFilterBtnsSpare.forEach((item)=>{
    item.addEventListener("click", function(){
        arrFilterBtnsSpare.forEach(el=>{
            if(el.classList.contains("active")){
                el.classList.toggle("active")
            }
        })
        item.classList.toggle("active");
        const categoria = this.dataset.category;
        console.log(categoria);
        goToSpare(categoria)
    })
})