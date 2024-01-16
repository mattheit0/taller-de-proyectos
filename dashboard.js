// dashboard.js

var zonasVisible = false;

document.getElementById('zonas-link').addEventListener('click', function() {
    zonasVisible = !zonasVisible;
    mostrarZonas();
});

function mostrarZonas() {
    var zonasSection = document.getElementById('zonas-section');
    zonasSection.style.display = zonasVisible ? 'block' : 'none';

    if (zonasVisible) {
        var zonasList = document.getElementById('zonas-list');
        zonasList.innerHTML = ''; // Limpiar la lista

        for (var i = 1; i <= 10; i++) {
            var zonaItem = document.createElement('li');
            var zonaLink = document.createElement('a');
            zonaLink.href = 'zona'+i+'.html';
            zonaLink.textContent = 'Zona ' + i;

            zonaItem.appendChild(zonaLink);
            zonasList.appendChild(zonaItem);
        }
    }
}
