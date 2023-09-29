//PRACTICA 1 JORGE BEJARANO SOLER

//PARTE1
//Space Seed

console.log("\n " + "PARTE 1" + "\n")

//Space Seed 1.1
//DEFINIR TIPO PERSONAS
type Persona = {

    lugarOrigen?: string,
    nombre?: string,
    altura: number,
    peso: number,
    edad: number,
    genero: string,
    infectado: boolean
}

//Space Seed 1.2
//DEFINIR INTERFACE NAVE
interface Nave {

    peso: number,
    dimensiones: number,
    velocidadCurvatura: number,
    pasajeros: Persona[]
}

//Space Seed 1.3
let enterprise: Nave = {

    peso: 545000,
    dimensiones:695,
    velocidadCurvatura:20000,
    pasajeros:[ {lugarOrigen: "Madrid",
                altura: 190,
                peso:80,
                edad:50,
                genero:"Masculino",
                infectado: false}

                ,{lugarOrigen: "Sevilla",
                nombre: "Pepe",
                altura: 150,
                peso:70,
                edad:30,
                genero:"Masculino",
                infectado: false}

                ,{lugarOrigen: "Barcelona",
                nombre: "Maria",
                altura: 170,
                peso:60,
                edad:40,
                genero:"Femenino",
                infectado: false}

                ,{lugarOrigen: "Valencia",
                nombre: "Ana",
                altura: 160,
                peso:50,
                edad:20,
                genero:"Femenino",
                infectado: true}

                ,{lugarOrigen: "Bilbao",
                nombre: "Juan",
                altura: 180,
                peso:90,
                edad:60,
                genero:"Masculino",
                infectado: false}            
            ]
}

//Space Seed 1.4
//MOSTRAR DE CUANTAS PERSONAS SABEMOS SU NOMBRE USANDO FILTER

let personasSinNombre = enterprise.pasajeros.filter( (persona) => persona.nombre !== undefined)
console.log("De cuantas personas sabemos su nombre: " + personasSinNombre.length)

//MOSTRAR DATOS DE LAS PERSONAS USANDO VALUES
console.log(Object.values(personasSinNombre));


//PARTE 2
//This Side of Paradise

console.log("\n " + "PARTE 2" + "\n")

//This Side of Paradise 2.1
//MOSTRAR NOMBRES DE LAS PERSONAS SANAS USANDO FOREACH
console.log("Tripulantes sanos: ")
enterprise.pasajeros.forEach( (persona) => persona.infectado === false ? console.log(persona.nombre) : undefined)

//This Side of Paradise 2.2
//MOSTRAR SI HAY PERSONAS INFECTADAS USANDO SOME
let existenInfectados = enterprise.pasajeros.some( (persona) => persona.infectado === true)
console.log("¿Hay algunas personas infectadas?: " + existenInfectados)

//MOSTRAR SI TODAS LAS PERSONAS ESTAN SANAS USANDO EVERY
let tripulacionSana = enterprise.pasajeros.every( (persona) => persona.infectado === false)
console.log("¿Estan todos los pasajeros estan sanos?: " + tripulacionSana)

//MOSTRAR TODAS LAS PERSONAS INFECTADAS
let personasInfectadas = enterprise.pasajeros.find( (persona) => persona.infectado === true)
console.log("La primera persona infectada es: ")
console.log(personasInfectadas)


//PARTE 3 
//The City on the Edge of Forever

console.log("\n " + "PARTE 3" + "\n")

//The City on the Edge of Forever 3.1
//COMPROBAR QUE LA FECHA ES VALIDA Y MOSTRAR LAS VALIDAS
//DEFINIR FECHAS VALIDAS Y NO VALIDAS USANDO FILTER
const fechasNuevas: number[] = [20240240354532, 18031510052015, 30110812153045, 19861222046024, 801];

let fechasValidas = fechasNuevas.filter( (elem) => elem.toString().length === 14)
console.log('Fechas comprensibles:', fechasValidas);

//The City on the Edge of Forever 3.2
//TRASNFORMAR FECHAS A AÑO, MES, DIA, HORA, MINUTO Y SEGUNDO USANDO MAP
  const fechasDivididas= fechasNuevas.map((fechasNuevas) => {
    const fechaString = fechasNuevas.toString();
    const fechaDividida = {
      ano: fechaString.slice(0, 4),
      mes: fechaString.slice(4, 6),
      dia: fechaString.slice(6, 8),
      hora: fechaString.slice(8, 10),
      minuto: fechaString.slice(10, 12),
      segundo: fechaString.slice(12, 14),
    };
    return fechaDividida;
  })
    
  console.log(fechasDivididas);
  

//PARTE4 
//The Trouble with Tribbles

console.log("\n " + "PARTE 4" + "\n")

//The Trouble with Tribbles 4.1
type Tubo = {
    imperfectos: number,
    numeroTribble: number,
    daños: number  
}

let tubos: Tubo[] = [{
    imperfectos: 20,
    numeroTribble: 50,
    daños: 15
    },
    
    {
    imperfectos: 25,
    numeroTribble: 10,
    daños: 25
    },

    {
    imperfectos: 10,
    numeroTribble: 20,
    daños: 60
    },

    {
    imperfectos: 30,
    numeroTribble: 60,
    daños: 10
    }
]

//OBTENER NUMERO TOTAL DEL TRIBBLES CON DAÑO DE 20 O MAS USANDO REDUCE
const numeroTribbles = tubos.reduce( (acc: number, e) => {

    e.daños >= 20? acc += e.numeroTribble : acc += 0

    return acc
},0)

console.log("Los numeros de tribbles con mas de 20 daños son: " + numeroTribbles)

//MOSTRAR UNA SEÑAL LISA USANDO FLAT
const plano = tubos.map(e=> Object.values(e))
const senalLisa= plano.flat()
console.log(senalLisa)


//MOSTRAR SI TIENE PELIGRO DE MAS DE UN 50% USANDO FLATMAP
const peligro = tubos.flatMap( ( e) => [e.numeroTribble > e.imperfectos * 0.5])
console.log("Tienen peligro: ")
console.log(peligro)