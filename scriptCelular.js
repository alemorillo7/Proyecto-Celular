const optionPhoneSelected = document.getElementById("selectPhone");
const imgCardCelular = document.getElementById("imgCardCelular");
const colorCel = document.getElementById("colorCel");
const pesoCel = document.getElementById("pesoCel");
const rdpCel = document.getElementById("rdpCel");
const rdcCel = document.getElementById("rdcCel");
const rdc2Cel = document.getElementById("rdc2Cel");
const ramCel = document.getElementById("ramCel");
const labelOnOff = document.getElementById("labelOnOff");
const table = document.getElementById("table");
const SwitchCheckOnOff = document.getElementById("flexSwitchCheckDefault");
const modalBody = document.getElementById("modalBody");
const exampleModalLabel = document.getElementById("exampleModalLabel");

optionPhoneSelected.addEventListener("change", mostrarImagen);
SwitchCheckOnOff.addEventListener("change", onOff);

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
    exampleModalLabel.textContent = "Encender Teléfono";
    if (!this.encendido) {
      this.encendido = true;
      SwitchCheckOnOff.checked = true;
      labelOnOff.innerText = "Encendido";
      modalBody.innerHTML = `Teléfono se está encendiendo...
            <div class="progress col-6 my-2" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style="width: 25%"></div>
            </div>`;
    } else {
      modalBody.innerText = "El teléfono ya está encendido";
    }
  }

  btnReiniciar() {
    exampleModalLabel.textContent = "Reiniciar Teléfono";
    if (this.encendido) {
      modalBody.innerHTML = `<div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
          <h6 class="mt-3">Reiniciando el celular</h6>`;
    } else {
      modalBody.innerText = "No se puede reiniciar porque está apagado";
    }
  }

  btnTomarFoto() {
    exampleModalLabel.textContent = "Tomar Foto";
    if (this.encendido) {
      modalBody.innerText = `Tomando foto con cámara de ${this.rdc}`;
    } else {
      modalBody.innerText = "No se puede tomar fotos porque está apagado";
    }
  }

  btnMostrarInfo() {
    table.classList.remove("d-none");
    cardTitle.innerHTML = `${this.marca} ${this.modelo}`;
    colorCel.textContent = `${this.color}`;
    pesoCel.textContent = `${this.peso}`;
    rdpCel.textContent = `${this.rdp}`;
    rdcCel.textContent = `${this.rdc}`;
    ramCel.textContent = `${this.ram}`;
    labelOnOff.textContent = this.encendido ? "Encendido" : "Apagado";
  }
}

class CelularAltaGama extends Celular {
  constructor(marca, modelo, color, peso, rdp, rdc, ram, encendido, imagen, rdc2) {
    super(marca, modelo, color, peso, rdp, rdc, ram, encendido, imagen);
    this.rdc2 = rdc2;
  }
  btnMostrarInfo() {
    super.btnMostrarInfo(); // Llame al método de la clase principal para mostrar información básica
    rdc2Cel.textContent = `${this.rdc2}`;
    rdc2Cel.parentElement.classList.remove("d-none"); // Mostrar la fila para "Resolucion de Camara 2"
  }
}

const celulares = [
  new Celular("Motorola", "Moto G8 Plus", "Azul", "148gr", "1080x2280 px", "48Mpx", "4RAM", false, "https://images-na.ssl-images-amazon.com/images/I/81t8xyyoR8L._SL1500_.jpg"),
  new Celular("Samsung", "Galaxy S23", "Blanco", "168gr", "2340x1080 px", "50Mpx", "8RAM", true, "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/02/pbi-samsung-galaxy-s23-ultra.png"),
  new Celular("iPhone", "12", "Negro", "162gr", "2532x1170 px", "2x12Mpx", "6RAM", false, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oN61WMesRhDqyB0NtmOzpwHaHa%26pid%3DApi&f=1&ipt=8af98c0aebc5230aa228a5aaf169455ef8ec8d4061f79aa6f5784419f206d255&ipo=images"),
  new CelularAltaGama("iPhone", "14", "Negro", "162gr", "2532x1170 px", "2x12Mpx", "6RAM", false, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oN61WMesRhDqyB0NtmOzpwHaHa%26pid%3DApi&f=1&ipt=8af98c0aebc5230aa228a5aaf169455ef8ec8d4061f79aa6f5784419f206d255&ipo=images", "1080px"),
];

function mostrarInformacion() {
  if (celulares[optionPhoneSelected.value] instanceof CelularAltaGama) {
    console.log("Hola");
  }
  celulares[optionPhoneSelected.value].btnMostrarInfo();
}

function mostrarImagen() {
    imgCardCelular.classList.remove("d-none");
    imgCardCelular.src = celulares[optionPhoneSelected.value].imagen;
    SwitchCheckOnOff.classList.remove("d-none");
    SwitchCheckOnOff.checked = celulares[optionPhoneSelected.value].encendido;
    table.classList.add("d-none");
    
    // Verificar si el teléfono seleccionado es de alta gama y mostrar/ocultar la fila "Resolucion de Camara 2" en consecuencia
    if (celulares[optionPhoneSelected.value] instanceof CelularAltaGama) {
      rdc2Cel.parentElement.classList.remove("d-none"); // Mostrar la fila de "Resolucion de Camara 2" para los teléfonos de alta gama
    } else {
      rdc2Cel.parentElement.classList.add("d-none"); // Ocultar la fila de "Resolucion de Camara 2" para los teléfonos regulares
    }
  }

function onOff() {
  const celular = celulares[optionPhoneSelected.value];
  celular.encendido = SwitchCheckOnOff.checked;
  labelOnOff.textContent = celular.encendido ? "Encendido" : "Apagado";
}

function Encendido() {
  celulares[optionPhoneSelected.value].btnEncendido();
}

function Reiniciar() {
  celulares[optionPhoneSelected.value].btnReiniciar();
}

function tomarFoto() {
  celulares[optionPhoneSelected.value].btnTomarFoto();
}
