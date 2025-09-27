// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
/*
var lyricsData = [
  { text: "The Sun is settin' and you're right here by my side", time: 14 },
  { text: "And the movie is playin', but we won't be watchin' tonight", time: 20 },
  { text: "Every look (every look), every touch (every touch)", time: 26 },
  { text: "Makes me wanna give you my heart (ooh)", time: 31},
  { text: "I be crushin' on you, baby (ooh)", time: 32 },
  { text: "Stay right wherz you are 'cause", time: 36 },

  { text: "I never knew, I never knew", time: 34 }, // -3
  { text: "I never knew, I never knew", time: 39 }, // -4
  { text: "You could hold moonlight in your hands", time: 45 }, // -3
  { text: "Till the night I held you", time: 55 }, // -3
  { text: "You are my moonlight, moonlight", time: 63 }, // -3

  { text: "I kiss his fingertips as I'm wishin' he's all mine", time: 74 }, // -3
  { text: "He's givin' me Elvis with some James Dean in his eyes", time: 7 }, // -3
  { text: "Puts his lips (puts his lips) on my neck (on my neck)", time: 84 }, // -3
  { text: "Makes me wanna give him my body (ooh)", time: 88 }, // -3
  { text: "I be fallin' for you, baby (ooh)", time: 92 }, // -3
  { text: "And I just can't stop 'cause", time: 94 }, // -3

  { text: "I never knew, I never knew", time: 98 }, // -3
  { text: "I never knew, I never knew", time: 103 }, // -3
  { text: "You could hold moonlight in your hands", time: 107 }, // -3
  { text: "Till the night I held you", time: 115 }, // -3
  { text: "You are my moonlight, moonlight", time: 119 }, // -3

  { text: "Baby, I be fallin'", time: 132 }, // -0
  { text: "You're my moonlight, moonlight", time: 157 }, // -3

  { text: "He's so bossy, he makes me dance", time: 160 }, // -3
  { text: "Tryna sit in the back of his whip and just cancel my plans", time: 179 }, // -3
  { text: "Sweet like candy, but he's such a man", time: 183 }, // -3
  { text: "He knows just what it does when he's holdin' me tight", time: 186 }, // -3
  { text: "And he calls me Moonlight too", time: 193 }, // -3
];
*/


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);