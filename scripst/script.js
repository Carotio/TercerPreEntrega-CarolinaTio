// inicio
let inicio = alert("AcroStudio es un espacio abierto de danza y acrobacia.");
let bienvenida = prompt("¿Te interesa formar parte?");
if (bienvenida.toUpperCase() == "NO") {
    alert("Te esperamos pronto")
}
while (bienvenida.toUpperCase() != "SI") {
    bienvenida = prompt("¿Te interesa formar parte?");
}

// disciplina
class Actividad {
    constructor(disciplina, area, dificultad, elementoExtra, enCurso) {
        this.disciplina = disciplina;
        this.area = area;
        this.dificultad = dificultad;
        this.elementoExtra = elementoExtra;
        this.enCurso = enCurso;
    }
    toString() {
        return this.disciplina;
    }
}
let actividadesDisponibles = [];

actividadesDisponibles.push(new Actividad("Acrobacia", "aérea", "media", false, true));
actividadesDisponibles.push(new Actividad("Danza", "clásica", "alta", true, true));

alert(
    "En AcroStudio contamos con las siguientes disciplinas para escoger:" + (" ") + actividadesDisponibles);

for (const actividad of actividadesDisponibles) {
    console.log(
        "Contenido de actividad", actividad);
}

let seleccion = prompt("Elige una disciplina:" + "\n" + "-Acrobacia" + "\n" + "-Danza");
const S_MAYUSCULA = seleccion.toUpperCase();

if (S_MAYUSCULA == "ACROBACIA") {
    especifico = prompt("Selecciona una actividad \n -En piso \n  -Aérea ")
} else if (S_MAYUSCULA == "DANZA") {
    especifico = prompt("Selecciona una actividad \n -Ritmos urbanos \n  -Clásica ")
} else {
    alert("Ingrese una opción válida")
}

switch (S_MAYUSCULA) {
    case "ACROBACIA":
        alert("has escogido" + (" ") + S_MAYUSCULA + " " + especifico);
        break;
    case "DANZA":
        alert("has escogido" + (" ") + S_MAYUSCULA + " " + especifico);
        break;
    default:
        break;
}

// experiencia 

let conocimiento = ["Principiante", "Intermedio", "Avanzada"];
let experiencia = prompt("Indique su grado de experiencia en la disciplina:" + "\n" + "- Principiante" + "\n" + "- Intermedio" + "\n" + "- Avanzada");
let index = conocimiento.indexOf(experiencia);

index = conocimiento.find((elemento) => {
    return elemento.toUpperCase() === experiencia.toUpperCase()
});

if (index !== undefined) {
    alert (" Agendada para" + (" ") + experiencia)
    console.log(" Agendada para " + (index+1).toString());
} else {
    alert("Ingrese una opción disponible");
    experiencia = prompt("Indique su grado de experiencia en la disciplina:" + "\n" + "- Principiante" + "\n" + "- Intermedio" + "\n" + "- Avanzada");
    alert (" Agendada para" + (" ") + experiencia)
}


// aranceles
let dinero = alert("Los aranceles se cobran por mes y tienen un valor base de $1200, lo que correspondería a una clase por semana.")
let cantidad = (parseFloat(prompt("Ingresar la cantidad de días que se desea concurrir")))

while (cantidad > 7){
    cantidad = (parseFloat(prompt("Ingresar la cantidad de días que se desea concurrir")))
}

function valor(precio, cantidad) {
    return precio + (cantidad * 200)
}
for (let index = 0; index < 1; index++) {
    let total = valor(1200, cantidad);
    alert("Aranceles por mes" + " " + "$" + total)
}

//horario

const turnos = ["Mañana", "Tarde"];

let elegir = prompt("Ingrese el turno en el que quiere concurrir" + "\n" + "- Mañana" + "\n" + "- Tarde");
console.log("La elección es", elegir);

let eleccion = turnos.find((elemento) => {
    return elemento.toUpperCase() === elegir.toUpperCase()
});

if (eleccion !== undefined) {
    alert("El turno escogido es" + (" ") + elegir);
} else {
    alert("Ingrese un turno válido");
    elegir = prompt("Ingrese el turno en el que quiere concurrir" + "\n" + "- Mañana" + "\n" + "- Tarde");
    alert("El turno escogido es" + (" ") + elegir);
} 


// datos
let info = alert("Por último es necesario completar tú inscripción");
let nombre = prompt("Ingresa tú nombre");
while (nombre == "") {
    nombre = prompt("Ingresa tú nombre");;
}

let apellido = prompt("Ingresa tú apellido");
while (apellido == "") {
    apellido = prompt("Ingresa tú apellido");
}

let contacto = prompt("Ingresa un email de contaco");
while (contacto == "") {
    contacto = prompt("Ingresa un email de contaco");;
}

let final = alert((nombre) + (" ") + ("felicidades, ya formas parte de AcroStudio te esperamos para tú primera clase!"))
