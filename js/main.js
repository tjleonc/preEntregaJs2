/* console.log(autos[0]); //primer auto
console.log(autos[autos.length - 1]); //ultimo auto */

let planBuscado = prompt("Ingresa el tipo de plan");

const datosBusqueda = {
    Nombre: datos.Nombre,
    Suscripcion: planBuscado
}

function mostrarPersonas(persona){
    persona.forEach(dato =>{
        console.log(dato.Nombre + " tiene una suscripcion de tipo " + dato.Suscripcion)
    })
}

function filtrarPlan(){

    const res = datos.filter((dato) =>{
        if(planBuscado){
            return dato.Suscripcion === planBuscado;
        }
        return plan;
    });

    if(res.length > 0){
        mostrarPersonas(res)
    }else{
        console.error('Sin resultados')
    }
}

filtrarPlan();

