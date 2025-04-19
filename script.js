const cartasTarot = [
    { 
        nombre: "El Loco", 
        mensaje: "Te encontrás al borde de algo nuevo. Confiá en el salto, aunque no veas el camino.",
        imagen: "fotos/loco.png"
      },
    { 
        nombre: "La Muerte", 
        mensaje: "Algo debe terminar para que otra cosa florezca. No temas al cambio, es parte del renacer.",
        imagen: "fotos/lamuerte.png" 
    },
    { 
        nombre: "La Torre",
        mensaje: "Las estructuras se sacuden para mostrarte una verdad que necesitás ver.",
        imagen: "fotos/latorre.png" 
    },
    { 
        nombre: "La Emperatriz",
        mensaje: "La creación nace desde adentro. Tu intuición y ternura son tu poder.",
        imagen: "fotos/emperatriz.jpg"
    },
    { 
        nombre: "El Sol",
        mensaje: "La claridad llega después de la tormenta. Dejá que la luz revele tu verdad.",
        imagen: "fotos/sol.png"
    },
    { 
        nombre: "La Luna",
        mensaje: "No todo es lo que parece. Escuchá tu intuición, incluso si el camino está nublado.",
        imagen: "fotos/luna.png"
    },
    { 
        nombre: "El Mago",
        mensaje: "Todo lo que necesitás ya vive en vos. Manifestá con intención.",
        imagen: "fotos/elhechicero.png"
    },
    { 
        nombre: "Los Amantes", 
        mensaje: "No se trata solo del amor ajeno, sino del vínculo profundo con vos misma.",
        imagen: "fotos/amantes.png"
    },
    { 
        nombre: "El Carro", 
        mensaje: "Avanzá con determinación. Tu voluntad es el motor que rompe la inercia.",
        imagen: "fotos/carro.png"
    },
    { 
        nombre: "El Colgado", 
        mensaje: "A veces hay que pausar para ver las cosas desde otro ángulo. El poder está en rendirse al momento.",
        imagen: "fotos/colgado.png"
    },
    { 
        nombre: "El Diablo", 
        mensaje: "Reconocé tus sombras sin juicio. Solo así dejarán de dominarte.",
        imagen: "fotos/diablo.png"
    },
    { 
        nombre: "El Emperador", 
        mensaje: "Estructura, orden y firmeza. Es momento de tomar el control con sabiduría.",
        imagen: "fotos/emperador.png"
    },
    { 
        nombre: "El Ermitaño", 
        mensaje: "Alejate del ruido. En el silencio interior vive la respuesta que buscás.",
        imagen: "fotos/ermitaño.png"
    },
    { 
        nombre: "La Estrella", 
        mensaje: "La esperanza no es ingenua: es la fuerza suave que te mantiene de pie.",
        imagen: "fotos/estrella.jpg"
    },
    { 
        nombre: "La Fuerza", 
        mensaje: "No es la agresión, sino la compasión la que domará a tus bestias internas.",
        imagen: "fotos/fuerza.png"
    },
    { 
        nombre: "El Hierofante", 
        mensaje: "Conectá con el conocimiento ancestral. Lo sagrado no siempre grita, pero siempre guía.",
        imagen: "fotos/hierofante.png"
    },
    { 
        nombre: "El Juicio", 
        mensaje: "Algo en vos está listo para despertar. Escuchá el llamado sin miedo.",
        imagen: "fotos/juicio.png"
    },
    { 
        nombre: "La Justicia", 
        mensaje: "El equilibrio se alcanza cuando sos honesta con vos misma.",
        imagen: "fotos/justicia.png"
    },
    { 
        nombre: "El Mundo", 
        mensaje: "Estás cerrando un ciclo. Honralo, celebralo, y abrí los brazos a lo que sigue.",
        imagen: "fotos/mundo.png"
    },
    { 
        nombre: "La Rueda de la Fortuna", 
        mensaje: "Todo cambia. Lo que hoy está abajo, mañana puede elevarse.",
        imagen: "fotos/ruedadelafortuna.png"
    },
    { 
        nombre: "La Templanza", 
        mensaje: "Mezclá tus extremos con calma. El punto medio no es neutral, es sabio.",
        imagen: "fotos/templanza.png"
    },
    { 
        nombre: "La Suma Sacerdotisa", 
        mensaje: "Escuchá tu intuición. Las respuestas que buscás no están afuera, sino dentro tuyo. Hay sabiduría en el silencio.",
        imagen: "fotos/sumasacerdotisa.png"
    }
  ];
  

  document.getElementById("tirarCartas").addEventListener("click", () => {
    const contenedor = document.getElementById("cartas");
    contenedor.innerHTML = "";

    const seleccionadas = [];

    while (seleccionadas.length < 3) {
        const index = Math.floor(Math.random() * cartasTarot.length);
        if (!seleccionadas.includes(index)) {
            seleccionadas.push(index);
            const carta = cartasTarot[index];
            const div = document.createElement("div");
            div.className = "carta";
            div.innerHTML = `
            <h2>${carta.nombre}<h2>
            <img src="${carta.imagen}" alt="${carta.nombre}" class="img-carta"> 
            <p>${carta.mensaje}</p>
            `;
            contenedor.appendChild(div);
        }
    }
  });