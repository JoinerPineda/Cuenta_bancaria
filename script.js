class CuentaBancaria {
    constructor(número_cuenta, nombre_propietario) {
        this.número_cuenta = número_cuenta;
        this.nombre_propietario = nombre_propietario;
        this.saldo = 0.0;

        document.getElementById('numero_cuenta').innerText = this.número_cuenta;
        document.getElementById('nombre_propietario').innerText = this.nombre_propietario;
        document.getElementById('saldo').innerText = this.saldo.toFixed(2);
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            document.getElementById('saldo').innerText = this.saldo.toFixed(2);
            this.mostrarMensaje(`Depósito exitoso. Nuevo saldo: $${this.saldo.toFixed(2)}`);
        } else {
            this.mostrarMensaje("Cantidad de depósito inválida.");
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && this.saldo >= cantidad) {
            this.saldo -= cantidad;
            document.getElementById('saldo').innerText = this.saldo.toFixed(2);
            this.mostrarMensaje(`Retiro exitoso. Nuevo saldo: $${this.saldo.toFixed(2)}`);
        } else if (cantidad > 0 && this.saldo < cantidad) {
            this.mostrarMensaje("Fondos insuficientes para realizar el retiro.");
        } else {
            this.mostrarMensaje("Cantidad de retiro inválida.");
        }
    }

    obtenerSaldo() {
        return this.saldo.toFixed(2);
    }

    mostrarMensaje(mensaje) {
        document.getElementById('mensaje').innerText = mensaje;
    }
}

const cuenta = new CuentaBancaria("1234567890", "Joiner Pineda");

function depositar() {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    cuenta.depositar(cantidad);
}

function retirar() {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    cuenta.retirar(cantidad);
}

function mostrarSaldo() {
    cuenta.mostrarMensaje(`El saldo actual es: $${cuenta.obtenerSaldo()}`);
}
