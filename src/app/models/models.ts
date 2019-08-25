export class Partido {
    local: string;
    fecha: string;
    resultado: string;
    lugar: string;
    visitante: string;

    constructor(local, fecha, resultado, lugar, visitante) {
        this.local = local;
        this.fecha = fecha;
        this.resultado = resultado;
        this.lugar = lugar;
        this.visitante = visitante;
    }
}

export class Jugador {
    nombre: string;
    apellido: string;
    apodo: string;
    dorsal: number;
    posicion: string;
    imagen: string;
    estadisticas: Estadisticas;
    tipo: string;

    constructor() {
    }

    constructor(nombre, apellido, apodo, dorsal, posicion, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apodo = apodo;
        this.dorsal = dorsal;
        this.posicion = posicion;
        this.tipo = tipo;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }
}

export class Estadisticas {
    goles: number;
    asistencias: number;
    amarillas: number;
    rojas: number;
    partidos: number;
    goles_encajados: number;
    
    constructor(goles, asistencias, amarillas, rojas, partidos, goles_encajados) {
        this.goles = goles;
        this.asistencias = asistencias;
        this.amarillas = amarillas;
        this.rojas = rojas;
        this.partidos = partidos;
        this.goles_encajados = goles_encajados;
    }
}