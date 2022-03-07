//Variables
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

//Contenedor para los resultados 
const resultado = document.querySelector('#resultado');

//Generar un objeto de la busqueda
const datosBusqueda = {
    marca :'',
    year : '',
    minimo : '',
    maximo : '',
    puertas: '',
    transmision : '',
    color : '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);//Muestra los automoviles al cargar

    //Llena las opciones de años
    llenarSelec();



})

//Event Listener para los select de búsqueda
marca.addEventListener('change', (e) =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', (e) =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change', (e) =>{
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
})
maximo.addEventListener('change', (e) =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

//funciones
function mostrarAutos(autos){
    Limpiarhtml();
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} -${year}-${puertas}-${transmision} - ${precio} -${color} `;
      resultado.appendChild(autoHTML);  
    })
}
function Limpiarhtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
//Genera los años del select
function llenarSelec(){
    for(let i =max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent= i;
        year.appendChild(opcion);
    }
}
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor)
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}
function noResultado(){
    Limpiarhtml();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent ="No hay resultado, Intenta con otros términos";
    resultado.appendChild(noResultado);

}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}