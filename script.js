//---------------------------------------------------------------------------------
// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
// desordenada. Tiene que crear la lista uno mismo.
console.log("\nPunto 1");
let array1 = new Array();
let cant = 10;

for (let i = 0; i < cant; i++) {
  array1.push(Math.round(Math.random() * 100));
}
console.log("Antes de Ordenar", array1);
array1.sort((a, b) => a - b);
console.log("Despues de Ordenar", array1);

$(document).ready(() => {
  let fragment1 = document.createDocumentFragment();
  let ul1 = document.createElement("ul");
  $(fragment1).append(ul1);
  array1.forEach((num) => {
    let li = document.createElement("li");
    $(li).text(num);
    $(ul1).append(li);
  });
  $(".punto1").append(fragment1);
});

//---------------------------------------------------------------------------------
// 2. Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
// en pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y
// mostrarlos en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio
console.log("\nPunto 2");
let array2 = [1, 2, 3, 4, 5, 6];
let size = array2.length;

console.log("\tPunto 2.a");
function punto2a() {
  let i = 0;
  while (i < size) {
    console.log(array2[i]);
    i++;
  }
}
punto2a();

console.log("\tPunto 2.b");
let punto2b = () => {
  for (let i = 0; i < size; i++) {
    console.log(array2[i]);
  }
};
punto2b();

console.log("\tPunto 2.c");
function punto2c() {
  array2.forEach((num) => console.log(num));
}
punto2c();

console.log("\tPunto 2.d");
function punto2d() {
  array2.forEach((num) => console.log(num + 1));
}
punto2d();

console.log("\tPunto 2.e");
let punto2e = (arrayToCopy) => {
  let newArray = Array.from(arrayToCopy, (num) => num + 1);
  console.log("El array copiado:", newArray);
};
punto2e(array2);

console.log("\tPunto 2.f");
let punto2f = () => {
  let average = array2.reduce((a, b) => a + b, 0) / size;
  console.log("El promedio del array es:", average);
};
punto2f();

//---------------------------------------------------------------------------------
// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es
// elevado al cuadrado.
console.log("\nPunto 3");
let cant3 = 10;
let array3 = [];
for (let i = 0; i < cant3; i++) {
  array3.push(Math.round(Math.random() * 20));
}
console.log("Array original:", array3);
console.log("Array al cuadrado");
let punto3 = () => {
  array3.forEach((num) => console.log(Math.pow(num, 2)));
};
punto3();

//---------------------------------------------------------------------------------
// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
console.log("\nPunto 4");
let array4 = [1, -4, 12, 0, -3, 29, -150];
function punto4() {
  let sum = 0;
  array4.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  console.log("La suma de los numeros positivos es:", sum);
}
punto4();

//---------------------------------------------------------------------------------
// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
// b. Obtener los nombres que comienzan con "M".
// c. Ordenar alfabéticamente y mostrar por consola.
// d. Generar un array que contenga solo las iniciales, Ejemplo: ["F", "L", "E", "M",... ].
// e. Generar un array que contenga todos los nombres en mayúscula.
// f. Queremos saber si alguno de estos nombres comienza con "J”
console.log("\nPunto 5");
let array5 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
console.log("\tPunto 5.a");
function punto5a() {
  array5.forEach((name) => {
    if (name.length > 6) {
      console.log(name);
    }
  });
}
punto5a();

console.log("\tPunto 5.b");
function punto5b() {
  array5.forEach((nombre) => {
    if (nombre[0] === "M") {
      console.log(nombre);
    }
  });
}
punto5b();

console.log("\tPunto 5.c");
function punto5c() {
  array5.sort();
  console.log(array5);
}
punto5c();

console.log("\tPunto 5.d");
function punto5d() {
  let iniciales = Array.from(array5, (name) => name[0]);
  console.log(iniciales);
}
punto5d();

console.log("\tPunto 5.e");
function punto5e() {
  let iniciales = Array.from(array5, (name) => name.toUpperCase());
  console.log(iniciales);
}
punto5e();

console.log("\tPunto 5.f");
function punto5f() {
  let result = array5.some((name) => name[0] === "J");
  console.log(result);
}
punto5f();

//---------------------------------------------------------------------------------
// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
// si un color introducido por el usuario a través de un prompt se encuentra dentro del
// array o no.
console.log("\nPunto 6");
let array6 = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
function punto6() {
  let colorToFind = "azul";
  //let colorToFind = prompt("Ingrese el color a buscar: ");
  let resultado = array6.some((color) => color === colorToFind);
  console.log(resultado);
}
punto6();

//---------------------------------------------------------------------------------
// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares
console.log("\nPunto 7");
function punto7(array7) {
  return array7.filter((num) => num % 2 === 0);
}
let array7 = [12, 3, 2, 1, 5, 6, 64, 7, 12];
console.log("El array original:", array7);
console.log("El array solo con los pares", punto7(array7));

//---------------------------------------------------------------------------------
// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.
console.log("\nPunto 8");
let vocales = ["a", "e", "i", "o", "u"];
function punto8(array8) {
  return array8.filter((word) => vocales.includes(word[0]));
}
let array8 = ["casa", "color", "agua", "hoja", "estaño"];
console.log(punto8(array8));

//---------------------------------------------------------------------------------
// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un
// arreglo en base a sus índices
console.log("\nPunto 9");
let array9 = ["casa", "color", "agua", "hoja", "estaño"];
function punto9(array9, i, j) {
  let size = array9.length - 1;
  if (i > size || j > size) {
    return console.log("Alguno de los indices ingresados es incorrecto");
  }
  let aux = array9[i];
  array9[i] = array9[j];
  array9[j] = aux;
}
console.log("Antes de intercambiar", array9);
punto9(array9, 0, 2);
console.log("Después de intercambiar", array9);

//---------------------------------------------------------------------------------
// 10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
// utilizando la librería jQuery.
console.log("\nPunto 10");
let texto10 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. atque necessitatibus nisi facilis explicabo accusantium, harum pariatur inventore? Laborum voluptatibus nostrum neque?";
let cant10 = 3;
let fragment10 = document.createDocumentFragment();
$("document").ready(() => {
  for (let i = 0; i < cant10; i++) {
    let p = document.createElement("p");
    p.innerText = texto10;
    fragment10.appendChild(p);
  }
  $(".punto10").append(fragment10);

  $("p:first").click(() => console.log("\nPunto 10 \nHiciste click en el primer párrafo"));
});

//---------------------------------------------------------------------------------
// 11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
// cuando sea presionada con el mouse.
console.log("\nPunto 11");
let colores = ["red", "green", "blue", "yellow", "orange"];
$("document").ready(() => {
  let caption = document.createElement("caption");
  caption.innerText = "Tabla 1";
  let table11 = document.createElement("table");
  let filas11 = 2;
  let fragment11 = document.createDocumentFragment();
  fragment11.appendChild(table11);

  for (let i = 0; i < filas11; i++) {
    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    fila.appendChild(celda);
    celda.innerText = colores[i];
    $(fila).click(() =>
      $(fila).css({
        "background-color": colores[i],
        color: "white",
      })
    );
    table11.appendChild(fila);
  }
  $(".punto11").append(fragment11);
});

//---------------------------------------------------------------------------------
// 12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
// ocultar un elemento jQuery tiene un método llamado hide( ).
console.log("\nPunto 12");
$("document").ready(() => {
  let ul = document.createElement("ul");
  let items12 = 4;
  let fragment12 = document.createDocumentFragment();
  fragment12.appendChild(ul);

  for (let i = 0; i < items12; i++) {
    let item = document.createElement("li");
    item.innerHTML = "Soy el item numero " + (i + 1);
    $(item).click(() => $(item).hide(1000));
    ul.appendChild(item);
  }
  $(".punto12").append(fragment12);
});

//---------------------------------------------------------------------------------
// 13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
// de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.
console.log("\nPunto 13");
$("document").ready(() => {
  let tablas = 2;
  let filas11 = 3;
  let fragment13 = document.createDocumentFragment();
  for (let i = 0; i < tablas; i++) {
    let tabla = document.createElement("table");
    let caption = document.createElement("caption");
    caption.innerText = "Tabla " + i;
    tabla.appendChild(caption);
    tabla.classList.add("tabla13");
    fragment13.appendChild(tabla);

    for (let j = 0; j < filas11; j++) {
      let fila = document.createElement("tr");
      let celda = document.createElement("td");
      fila.appendChild(celda);
      celda.innerText = "Fila " + (j + 1);
      tabla.appendChild(fila);
    }
  }
  $(".punto13").append(fragment13);
  $("table.tabla13:first td").each((i, tr) =>
    $(tr).click(() =>
      $(tr).css("background-color", `rgb( ${100 + (i * (250 - 100)) / 3}  199 226)`)
    )
  );
});

//---------------------------------------------------------------------------------
// 14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
// un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
// rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
// fuente.
console.log("\nPunto 14");
$("document").ready(() => {
  let cantNoticias = 3;
  let fragment14 = document.createDocumentFragment();
  let sizeSmall = document.createElement("button");
  $(sizeSmall).text("Pequeño");
  let sizeMedium = document.createElement("button");
  $(sizeMedium).text("Mediano");
  let sizeLarge = document.createElement("button");
  $(sizeLarge).text("Grande");
  $(fragment14).append(sizeSmall, sizeMedium, sizeLarge);

  for (let i = 0; i < cantNoticias; i++) {
    let titulo = document.createElement("h3");
    titulo.innerText = "Noticia " + (i + 1);
    let descripcion = document.createElement("p");
    descripcion.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. vitae doloribus quisquam amet. Ea, voluptatem porro.";
    let div = document.createElement("div");
    div.classList.add("noticia");
    div.append(titulo, descripcion);
    fragment14.appendChild(div);
  }
  $(sizeSmall).click(() => {
    $(".punto14 p").css("font-size", "small");
  });
  $(sizeMedium).click(() => {
    $(".punto14 p").css("font-size", "medium");
  });
  $(sizeLarge).click(() => {
    $(".punto14 p").css("font-size", "large");
  });

  $(".punto14").append(fragment14);
});

//---------------------------------------------------------------------------------
// 15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
// en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
// contenido de la primera tabla, dejando intacto el de la segunda.
console.log("\nPunto 15");
$("document").ready(() => {
  let tablas15 = 2;
  let filas15 = 3;
  let columnas15 = 3;
  let fragment15 = document.createDocumentFragment();
  let button15 = document.createElement("button");
  button15.classList.add("button15");
  button15.innerText = "Cambiar";
  fragment15.appendChild(button15);

  for (let i = 1; i <= tablas15; i++) {
    let tabla = document.createElement("table");
    let caption = document.createElement("caption");
    caption.innerText = "Tabla " + i;
    tabla.appendChild(caption);
    tabla.classList.add("tabla15");
    fragment15.appendChild(tabla);

    for (let j = 1; j <= filas15; j++) {
      let fila = document.createElement("tr");

      for (let k = 1; k <= columnas15; k++) {
        let celda = document.createElement("td");
        fila.appendChild(celda);
        celda.innerText = "Fila " + j + " Columna " + k;
      }
      tabla.appendChild(fila);
    }
  }
  $(".punto15").append(fragment15);
  $(".button15").click(() => $("table.tabla15:first td").each((i, tr) => $(tr).text("-")));
});

//---------------------------------------------------------------------------------
// 16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
// botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo.
console.log("\nPunto 16");
$("document").ready(() => {
  let fragment16 = document.createDocumentFragment();
  let a = document.createElement("a");
  a.innerHTML = "Enlace a: ";
  a.setAttribute("href", "#");
  a.setAttribute("target", "black");
  let div = document.createElement("div");
  fragment16.append(a, div);
  let enlaces = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    argentinaPrograma: "https://campus.argentinaprograma.utn.edu.ar/",
  };
  let cantButtons = 3;
  for (let i = 0; i < cantButtons; i++) {
    let button = document.createElement("button");
    button.innerText = Object.keys(enlaces)[i];
    button.value = Object.values(enlaces)[i];
    $(button).click(() => {
      $(a).text("Enlace a: " + button.innerText);
      $(a).attr("href", button.value);
    });
    div.appendChild(button);
  }
  $(".punto16").append(fragment16);
});

//---------------------------------------------------------------------------------
// 17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
// cuando sean presionadas ocultarlas.
console.log("\nPunto 17");
$("document").ready(() => {
  let fragment17 = document.createDocumentFragment();
  let cantWords = 3;
  let texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit, necessitatibus repellat eaque incidunt ipsum quos.";

  texto = texto.split(" ");
  let p = document.createElement("p");
  $(p).addClass("p17");

  $(p).html(() => {
    for (let i = 0; i < cantWords; i++) {
      let index = Math.floor(Math.random() * texto.length);
      let word = "<strong>" + texto[index] + "</strong>";
      texto[index] = word;
    }
    texto = texto.join(" ");
    return texto;
  });

  fragment17.appendChild(p);
  $(".punto17").append(fragment17);
  $(".p17 strong").each((i, s) => $(s).click(() => $(s).hide()));
});

//---------------------------------------------------------------------------------
// 18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.
console.log("\nPunto 18");
$("document").ready(() => {
  let tablas18 = 1;
  let filas18 = 2;
  let columnas18 = 2;
  let fragment18 = document.createDocumentFragment();
  for (let i = 1; i <= tablas18; i++) {
    let tabla = document.createElement("table");
    let caption = document.createElement("caption");
    caption.innerText = "Tabla " + i;
    tabla.appendChild(caption);
    tabla.classList.add("tabla18");
    fragment18.appendChild(tabla);

    for (let j = 1; j <= filas18; j++) {
      let fila = document.createElement("tr");
      let numCelda = 0;

      for (let k = 1; k <= columnas18; k++) {
        let celda = document.createElement("td");
        fila.appendChild(celda);
        celda.innerText = "Fila " + j + " Columna " + k;

        $(celda).mouseover(() => {
          numCelda++;
          $(celda).css(
            "background-color",
            `hsl(${(numCelda * 360) / (2 * filas18 * columnas18)}deg 75% 40%)`
          );
        });
      }
      tabla.appendChild(fila);
    }
  }
  $(".punto18").append(fragment18);
});

//---------------------------------------------------------------------------------
// 19. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y regresar al original cuando salimos.
console.log("\nPunto 19");
$("document").ready(() => {
  let tablas19 = 1;
  let filas19 = 2;
  let columnas19 = 2;
  let fragment19 = document.createDocumentFragment();
  for (let i = 1; i <= tablas19; i++) {
    let tabla = document.createElement("table");
    let caption = document.createElement("caption");
    caption.innerText = "Tabla " + i;
    tabla.appendChild(caption);
    tabla.classList.add("tabla19");
    fragment19.appendChild(tabla);

    for (let j = 1; j <= filas19; j++) {
      let fila = document.createElement("tr");
      let numCelda = 0;

      for (let k = 1; k <= columnas19; k++) {
        let celda = document.createElement("td");
        fila.appendChild(celda);
        celda.innerText = "Fila " + j + " Columna " + k;

        $(celda).mouseover(() => {
          numCelda++;
          $(celda).css(
            "background-color",
            `hsl(${(numCelda * 360) / (2 * filas19 * columnas19)}deg 75% 40%)`
          );
        });
        $(celda).mouseout(() => {
          $(celda).css("background-color", "transparent");
        });
      }
      tabla.appendChild(fila);
    }
  }
  $(".punto19").append(fragment19);
});

//---------------------------------------------------------------------------------
// 20. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
// píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.
console.log("\nPunto 20");
$("document").ready(() => {
  let fragment20 = document.createDocumentFragment();
  let div = document.createElement("div");
  $(div).addClass("div20");
  let clicked = true;
  $(div).css({ width: 800, height: 70 });
  $(div).css("background-color", "mediumslateblue");
  $(div).dblclick(() => {
    if (clicked) {
      $(div).css({ width: 250, height: 250 });
      clicked = false;
    } else {
      $(div).css({ width: 800, height: 70 });
      clicked = true;
    }
  });
  $(fragment20).append(div);
  $(".punto20").append(fragment20);
});

//---------------------------------------------------------------------------------
// 21. Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se
// presione con el mouse dentro del div ocultarlo lentamente y cuando esté
// completamente oculto hacer que aparezca lentamente otro bloque de texto.
console.log("\nPunto 21");
$("document").ready(() => {
  let fragment21 = document.createDocumentFragment();
  let div = document.createElement("div");
  $(div).css("background-color", "mediumslateblue");
  $(div).css("color", "white");
  let cantP = 3;
  let texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit, necessitatibus repellat eaque incidunt ipsum quos.";

  for (let i = 0; i < cantP; i++) {
    let p = document.createElement("p");
    $(p).text(texto);
    $(div).append(p);
  }
  let p = document.createElement("p");
  $(p).text("El div fue ocultado");
  $(p).hide();
  $(fragment21).append(div, p);

  $(div).click(() => {
    $(div).hide(1000);
    $(p).delay(1000).show(1000);
  });

  $(".punto21").append(fragment21);
});

//---------------------------------------------------------------------------------
// 22. Mostrar con console.log el valor de un option cada vez que un usuario seleccione un
// option nuevo de un elemento select.
console.log("\nPunto 22");
$("document").ready(() => {
  let fragment22 = document.createDocumentFragment();
  let cantOpt = 4;
  let select = document.createElement("select");
  for (let i = 0; i < cantOpt; i++) {
    let option = document.createElement("option");
    let text = "Opción " + (i + 1);
    $(option).text(text);
    $(option).val(text);
    $(select).append(option);
  }
  $(select).prop("selectedIndex", -1);

  $(select).on("change", () => {
    var opcionSeleccionada = $(select).val();
    console.log("\nPunto 22\nLa opción seleccionada es:", opcionSeleccionada);
  });

  $(fragment22).append(select);
  $(".punto22").append(fragment22);
});

//---------------------------------------------------------------------------------
// 23. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
// referida con console.log
console.log("\nPunto 23");
$("document").ready(() => {
  let fragment23 = document.createDocumentFragment();
  let link = document.createElement("a");
  $(link).attr("href", "https://campus.argentinaprograma.utn.edu.ar/");
  $(link).text("Enlace a Argentina Programa");
  $(link).click((event) => {
    event.preventDefault();
    let direccion = $(link).attr("href");
    console.log(`\nPunto 23\nEl enlace es: ${direccion}`);
  });

  $(fragment23).append(link);
  $(".punto23").append(fragment23);
});

//---------------------------------------------------------------------------------
// 24. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar
// un texto en la página que el formulario fue enviado.
console.log("\nPunto 24");
$("document").ready(() => {
  let fragment24 = document.createDocumentFragment();
  let form24 = document.createElement("form");
  $(form24).addClass("form24");

  let labelApellido = document.createElement("label");
  let inputApellido = document.createElement("input");
  $(labelApellido).text("Apellido");
  let labelNombre = document.createElement("label");
  let inputNombre = document.createElement("input");
  $(labelNombre).text("Nombre");
  let labelEmail = document.createElement("label");
  let inputEmail = document.createElement("input");
  $(labelEmail).text("Email");
  $(inputEmail).attr("type", "email");
  let button = document.createElement("button");
  $(button).attr("type", "submit");
  $(button).text("Enviar");
  $(form24).append(
    labelApellido,
    inputApellido,
    labelNombre,
    inputNombre,
    labelEmail,
    inputEmail,
    button
  );
  let textoForm = document.createElement("pre");

  $(button).click((event) => {
    let nombre = $(inputNombre).val();
    let apellido = $(inputApellido).val();
    let email = $(inputEmail).val();
    if (inputEmail.validity.valid) {
      $(textoForm).text(`Datos del formulario enviado
    Nombre: ${nombre}
    Apellido: ${apellido}
    Email: ${email}`);
      event.preventDefault();
    }
  });
  $(fragment24).append(form24, textoForm);
  $(".punto24").append(fragment24);
});
