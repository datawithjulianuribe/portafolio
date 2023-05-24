//CAMBIO DE IMAGENES EN LA PAGINA PRENSA.HTML

var image = document.getElementById("dynamic-image");
var images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"]; // Rutas de las imágenes

var index = 0;

function changeImage() {
  image.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Cambiar la imagen cada 3 segundos (3000 milisegundos)

//GENERACION DE GRAFICO DE BARRAS EN LA PAGINA INDEX.HTML

const datos = {
    labels: ['Gestión Tecnológica', 'Innovación', 'Ciencia de Datos', 'Programación Python', 'Lenguajes de programación', 'Bases de datos SQL', 'Inteligencia de negocios', 'Dashboards y tableros de control', 'Microsoft Excel'],
    datasets: [
      {
        label: 'Habilidades',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [90, 70, 80, 70, 60, 50, 90, 85, 90],
      }
    ]
  };
  
  const opciones = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };
  
  const ctx = document.getElementById('grafica').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: opciones
  });
  



