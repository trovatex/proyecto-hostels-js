// OBJETOS ///////////////////////////////////////
class Hostel {
    constructor(id, nombre, ubicacion, precio, estrellas, habitacionDisponible, cantidadPersonas) {
        this.id = id
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
        this.estrellas = estrellas
        this.habitacionDisponible = habitacionDisponible
        this.cantidadPersonas = cantidadPersonas
    }
}


// ARRAYS ///////////////////////////////////////

const hostel1 = new Hostel(1, "Buzios", "Brasil", 50, 7.9, ["con vista al mar ", "terraza ", "baño compartido"])
const hostel2 = new Hostel(2, "San José", "Costa Rica", 60, 8, ["con vista al mar ", "balcon ", "cocina individual"])
const hostel3 = new Hostel(3, "Cinque Terre", "Italia", 70, 8.2, ["con vista al mar ", "terraza ", "desayuno incluido"])
const hostel4 = new Hostel(4, "Medellín", "Colombia", 80, 8.6, ["con vista al mar ", "balcon ", "con jacuzzi"])
const hostel5 = new Hostel(5, "Miramar", "Argentina", 90, 9, ["con vista al mar ", "", ""])
const hostel6 = new Hostel(6, "Bariloche", "Argentina", 100, 9.2, ["con vista al mar ", "", ""])
const hostel7 = new Hostel(7, "Santa Cruz", "Estados Unidos", 150, 9.5, ["con vista al mar ", "", ""])
const hostel8 = new Hostel(8, "Málaga", "España", 200, 9.7, ["con vista al mar ", "", ""])
const hostel9 = new Hostel(9, "Lima", "Peru", 220, 9.8, ["con vista al mar ", "", ""])
const hostels = [hostel1, hostel2, hostel3, hostel4, hostel5, hostel6, hostel7, hostel8, hostel9]

