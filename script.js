let numeroOpcion = prompt("Digite el número del ejercicio");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

switch (numeroOpcion) {
    case "1":
        let cualidadPersona = prompt("¿Eres bellisimo/a?");
        let respuestaPersona = ('si');

        cualidadPersona = removeAccents(cualidadPersona);

        if (cualidadPersona.toLocaleLowerCase() === respuestaPersona) {
            alert("Ciertamente lo eres!")
        }

        else {
            alert("No te creo")
        }
        break;
    case "2":
        let numeroDigitado = prompt("Digite el número a valdiar");
        if (numeroDigitado % 2 === 0) {
            alert("El número " + numeroDigitado + " es divisible entre 2")
        }
        else {
            alert("El número " + numeroDigitado + " No es divisible entre 2")
        }
        break;
    case "3":
        let numeroParImpar = prompt("Digite el número a valdiar");
        if (numeroParImpar % 2 === 0) {
            alert("El número " + numeroParImpar + " es PAR")
        }
        else {
            alert("El número " + numeroParImpar + " es Impar")
        }
        break;
    case "4":
        let numeroRifa = prompt("Digite el número de la rifa");
        if (numeroRifa == 1000) {
            alert("Ganaste un premio")
        }
        else {
            alert("Lo sentimos, sigue participando " + numeroRifa)
        }
        break;
    case "5":
        let numeroUno = prompt("Digite el primer número");
        let numeroDos = prompt("Digite el segundo número");

        if (parseInt.numeroUno > parseInt.numeroDos) {
            alert("El número menor es: " + numeroDos)
        }
        else {
            alert("El número mayor es: " + numeroUno)
        }
        break;
    case "6":
        let numero1 = prompt("Digite el primer número");
        let numero2 = prompt("Digite el segundo número");
        let numero3 = prompt("Digite el tercer número");
        if (numero1 === numero2 || numero1 === numero3) {
            alert("Hay dos números iguales")
        } else {
            if (numero1 > numero2 && numero1 > numero3) {
                alert("El número mayor es: " + numero1)
            }
            if (numero2 > numero1 && numero2 > numero3) {
                alert("El número mayor es: " + numero2)
            }
            if (numero3 > numero2 && numero3 > numero1) {
                alert("El número mayor es: " + numero3)
            }
            if (numero1 === numero2 && numero1 === numero3) {
                alert("Todos los números son iguales")
            }
        }
        break;
    case "7":
        let diaSemana = prompt("Digite el día de la semana");
        diaSemana = removeAccents(diaSemana);
        if (diaSemana.toLocaleLowerCase() === "lunes") {
            alert("Felicidades, inicias semana")
            break;
        }
        if (diaSemana.toLocaleLowerCase() === "viernes") {
            alert("Felicidades, terminas semana")
            break;
        }
        if (diaSemana.toLocaleLowerCase() === "sabado" || diaSemana.toLocaleLowerCase() === "domingo") {
            alert("Felicidades, es fin de semana")
            break;
        }
        else {
            alert("Es un día normal :)")
        }
        break;

    case "8":
        let numeroUsuario = prompt("Digite una calificación entre 1-10");
        if (numeroUsuario <= 10) {
            if (numeroUsuario < 6) {
                alert("Haz Reprobado")
            }
            if (numeroUsuario >= 6 && numeroUsuario <= 8) {
                alert("Calificación Regular")
            }
            if (numeroUsuario == 9) {
                alert("Calificación Bien")
            }
            if (numeroUsuario == 10) {
                alert("Calificación Excelente")
            }
        }
        else {
            alert("Calificación Fuera Del Rango")
        }
        break;
    case "9":
        let toping = prompt("A continuación seleccione el Topping que deseas:" +
            "\n 1. Helado sin Topping " +
            "\n 2. Topping De Oreo " +
            "\n 3. Topping KitKat " +
            "\n 4. Topping Brownie " +
            "\n 5. Ninguna opción");

        switch (toping) {
            case "1":
                alert("El helado sin topping cuesta 50 MXN")
                break;
            case "2":
                alert("El topping de oreo cuesta 10 MXN.")
                break;
            case "3":
                alert("El topping de KitKat cuesta 15 MXN")
                break;
            case "4":
                alert("El topping de brownie cuesta 20 MXN")
                break;
            case "5":
                alert("Lamentamos no tener más opciones :(")
                break;
            default:
                alert("No tenemos este topping, lo sentimos")
                break;
        }
        break;
    case "10":
        var valorCurso = 4999;
        var valorCarrera = 3999;
        var valorMaster = 2999;
        var mesesCurso = 2;
        var mesesCarrera = 6;
        var mesesMaster = 12;
        var becaFacebook = 20;
        var becaGoogle = 15;
        var becaJesua = 50;

        let programaSeleccionado = prompt("Selecciona el programa que estás interesado: " +
            "\n 1. Course: $4999 MXN " +
            "\n 2. Carrera $3999 MXN " +
            "\n 3. Master: $2999 MXN ");
        let beca = prompt("Cuentas con alguna beca?");
        beca = removeAccents(beca);

        if (beca.toLocaleLowerCase() == "si") {
            let becaObtenida = prompt("Selecciona la beca: " +
                "\n 1. Beca Facebook: 20% de descuento " +
                "\n 2. Beca Google: 15% de descuento " +
                "\n 3. Beca Jesua: 50% de descuento ")

            switch (becaObtenida) {

                case "1":
                    if (programaSeleccionado == 1) {
                        var valorTotal = valorCurso * mesesCurso;
                        var descuento = (valorTotal * becaFacebook) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del Curso es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 2) {
                        var valorTotal = valorCarrera * mesesCarrera;
                        var descuento = (valorTotal * becaFacebook) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor de la carrera es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 3) {
                        var valorTotal = valorMaster * mesesMaster;
                        var descuento = (valorTotal * becaFacebook) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del master es: " + valorTotal);
                        break;
                    }
                    break;

                case "2":
                    if (programaSeleccionado == 1) {
                        var valorTotal = valorCurso * mesesCurso;
                        var descuento = (valorTotal * becaGoogle) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del Curso es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 2) {
                        var valorTotal = valorCarrera * mesesCarrera;
                        var descuento = (valorTotal * becaGoogle) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor de la carrera es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 3) {
                        var valorTotal = valorMaster * mesesMaster;
                        var descuento = (valorTotal * becaGoogle) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del master es: " + valorTotal);
                        break;
                    }
                    break;

                case "3":
                    if (programaSeleccionado == 1) {
                        var valorTotal = valorCurso * mesesCurso;
                        var descuento = (valorTotal * becaJesua) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del Curso es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 2) {
                        var valorTotal = valorCarrera * mesesCarrera;
                        var descuento = (valorTotal * becaJesua) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor de la carrera es: " + valorTotal);
                        break;
                    }
                    if (programaSeleccionado == 3) {
                        var valorTotal = valorMaster * mesesMaster;
                        var descuento = (valorTotal * becaJesua) / 100;
                        valorTotal = valorTotal - descuento;
                        alert("El valor del master es: " + valorTotal);
                        break;
                    }
                    break;
                default:
                    alert("Opción de beca no valdia")
                    break;
            }
        }
        else {

            switch (programaSeleccionado) {

                case "1":
                    alert("El valor del Curso es: " + valorCurso * mesesCurso);
                    break;

                case "2":
                    alert("El valor de la Carrera es: " + valorCarrera * mesesCarrera);
                    break;

                case "3":
                    alert("El valor de la Máster es: " + valorMaster * mesesMaster);
                    break;

                default:
                    alert("Selecciona el curso correcto")
                    break;
            }
        }

        break;
    case "11":
        var valorTotalRecorrido;
        let vehiculo = prompt("Selecciona el vehiculo: " +
            "\n 1. Coche" +
            "\n 2. Moto" +
            "\n 3. Autobús");

        let litrosConsumidos = prompt("Digita los litros consumidos");

        switch (vehiculo) {

            case "1":
                if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
                    valorTotalRecorrido = (litrosConsumidos * 0.20) + 5;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                else {
                    valorTotalRecorrido = (litrosConsumidos * 0.20) + 10;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                break;
            case "2":
                if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
                    valorTotalRecorrido = (litrosConsumidos * 0.10) + 5;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                else {
                    valorTotalRecorrido = (litrosConsumidos * 0.10) + 10;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                break;
            case "3":
                if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
                    valorTotalRecorrido = (litrosConsumidos * 0.5) + 5;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                else {
                    valorTotalRecorrido = (litrosConsumidos * 0.5) + 10;
                    alert("El totar a pagar del recorrido es: " + valorTotalRecorrido)
                }
                break;
            default:
                alert("Opción no válida")
                break;
        }
        break;
    default:
        alert("Opción no válida")
        break;
}