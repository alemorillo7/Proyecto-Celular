let optionPhoneSelected = document.getElementById("selectPhone")
let cardTitle = document.getElementById("cardTitle") // No usado
let imgCardCelular = document.getElementById("imgCardCelular")
let colorCel = document.getElementById("colorCel")
let pesoCel = document.getElementById("pesoCel")
let rdpCel = document.getElementById("rdpCel")
let rdcCel = document.getElementById("rdcCel")
// let rdc2Cel = document.querySelector(".table .resolucion")
let rdc2Cel = document.getElementById("rdc2Cel")
let ramCel = document.getElementById("ramCel")
let encendido = document.getElementById("encendido")
let table = document.getElementById("table")
let SwitchCheckOnOff = document.getElementById("flexSwitchCheckDefault")
let labelOnOf = document.getElementById("labelOnOff")
let modalBody = document.getElementById("modalBody")
let exampleModalLabel = document.getElementById("exampleModalLabel")

optionPhoneSelected.addEventListener("change", mostrarImagen)
SwitchCheckOnOff.addEventListener("change", onOff)

class Celular {

    constructor(marca, modelo, color, peso, rdp, rdc, ram, encendido, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = encendido;
        this.imagen = imagen;
    }

    btnEncendido() {
        exampleModalLabel.textContent = "Encender Telefono"
        if (this.encendido == false) {
            this.encendido = true;
            SwitchCheckOnOff.checked = true
            if (SwitchCheckOnOff.checked == true) {
                labelOnOf.innerText = "Encendido"
            } else {
                labelOnOf.innerText = "Apagado"
            }
            modalBody.innerHTML = `Telefono se esta encendiendo..
                                        <div class="progress col-6 my-2" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: 25%"></div>
                                    </div>`
        } else {
            modalBody.innerText = "El telefono ya esta enendido"
        }
    }

    btnReiniciar() {
        exampleModalLabel.textContent = "Reiniciar Telefono"
        if (this.encendido == true) {
            modalBody.innerHTML =   `<div class="spinner-border" role="status">
                                        <span class="visually-hidden"></span>
                                    </div>
                                    <h6 class="mt-3">Reiniciando el celular</h6>`
        } else {
            modalBody.innerText = "No se puede reiniciar porque esta apagado"
        }
    }
    
    btnTomarFoto() {
        exampleModalLabel.textContent = "Tomar Foto"
        if (this.encendido == true) {
            modalBody.innerText = `Tomando foto con camara de ${this.rdc}`
            // alert(`Tomando foto con camara de ${this.rdc}`);
        } else {
            modalBody.innerText = `No se puede tomar fotos porque esta apagado`
            // alert("No se puede tomar fotos porque esta apagado");
        }
    }
    
    btnMostrarInfo() {
        table.classList.remove('d-none')
        cardTitle.innerHTML = `${this.marca} ${this.modelo}`
        colorCel.textContent = `${this.color}`
        pesoCel.textContent = `${this.peso}`
        rdpCel.textContent = `${this.rdp}`
        rdcCel.textContent = `${this.rdc}`
        ramCel.textContent = `${this.ram}`
        encendido.textContent = `${this.encendido}`
    }
}

class CelularAltaGama extends Celular{
    constructor(marca, modelo, color, peso, rdp, rdc, ram, encendido, imagen, rdc2) {
    super(marca, modelo, color, peso, rdp, rdc, ram, encendido, imagen);
    this.rdc2 = rdc2;
    }

    btnMostrarInfo2(){
            super.btnMostrarInfo();
            rdc2Cel.textContent = "Hola";
            console.log("Hola")
        }
    
    btnVerInfoCam2() {
        rdc2Cel.textContent = "Hola";
    }
        // rdc2Cel.classList.remove('d-none');
        // table.classList.remove('d-none')
    }

    // nombreCompleto(){  // el metdo debe llamarse igual que en la clase padre 

    //     return super.nombreCompleto() +" "+this._departamento
    
    //    }
    
    // class ClaseHija extends ClasePadre {
    
        // metodoPadre() {
    
        //     super.metodoPadre(); // Llama al método original de la clase padre
    
        //     console.log("Se agregó una nueva acción en el método de la clase hija");
    
        // }
    
    // }

const celulares = [
    new Celular("Motorola","Moto G8 Plus", "Azul", "148gr", "1080x2280 px", "48Mpx", "4RAM", false,"https://images-na.ssl-images-amazon.com/images/I/81t8xyyoR8L._SL1500_.jpg"),
    new Celular("Samsung","Galaxy S23","Blanco", "168gr", "2340x1080 px", "50Mpx", "8RAM", true, "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/02/pbi-samsung-galaxy-s23-ultra.png"),
    new Celular("iPhone","12","Negro","162gr", "2532x1170 px", "2x12Mpx", "6RAM", false, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oN61WMesRhDqyB0NtmOzpwHaHa%26pid%3DApi&f=1&ipt=8af98c0aebc5230aa228a5aaf169455ef8ec8d4061f79aa6f5784419f206d255&ipo=images"),
    new CelularAltaGama("iPhone","14","Negro","162gr", "2532x1170 px", "2x12Mpx", "6RAM", false, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oN61WMesRhDqyB0NtmOzpwHaHa%26pid%3DApi&f=1&ipt=8af98c0aebc5230aa228a5aaf169455ef8ec8d4061f79aa6f5784419f206d255&ipo=images","1080px"),
]

function mostrarInformacion() {
    if (celulares[optionPhoneSelected.value] instanceof CelularAltaGama) {
        console.log("Hola")
    }
    celulares[optionPhoneSelected.value].btnMostrarInfo()
}

function mostrarImagen() {
    imgCardCelular.classList.remove('d-none')
    imgCardCelular.src = celulares[optionPhoneSelected.value].imagen
    SwitchCheckOnOff.classList.remove('d-none')
    SwitchCheckOnOff.checked = celulares[optionPhoneSelected.value].encendido
    table.classList.add('d-none')
    onOff()
}

function onOff() {
    celulares[optionPhoneSelected.value].encendido = SwitchCheckOnOff.checked
    if (SwitchCheckOnOff.checked == true) {
        labelOnOf.innerText = "Encendido"
    } else {
        labelOnOf.innerText = "Apagado"
    }
}

function Encendido() {
    celulares[optionPhoneSelected.value].encendido = SwitchCheckOnOff.checked
    celulares[optionPhoneSelected.value].btnEncendido()
}

function Reiniciar() {
    celulares[optionPhoneSelected.value].encendido = SwitchCheckOnOff.checked
    celulares[optionPhoneSelected.value].btnReiniciar()
}

function tomarFoto() {
    celulares[optionPhoneSelected.value].encendido = SwitchCheckOnOff.checked
    celulares[optionPhoneSelected.value].btnTomarFoto()
}

// rdc2Cel.innerText = celulares[3].rdc2
// window.addEventListener('load', mostrarImagen());