// GESTIONA LA PÁGINA DE LA TIENDA

// Variables globales
let puntosUsuario = 1250;
let productosFiltrados = [...productos];


// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Configurar eventos de las pestañas
    document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Quitar clase activa de todas las pestañas
            document.querySelectorAll('.shop-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Añadir clase activa a la pestaña clickeada
            this.classList.add('active');
            
            // Mostrar la sección correspondiente
            const tabId = this.getAttribute('data-tab');
            if (tabId === 'points-info') {
                document.getElementById('pointsInfo').style.display = 'block';
                document.getElementById('rewardsSection').style.display = 'none';
            } else {
                document.getElementById('pointsInfo').style.display = 'none';
                document.getElementById('rewardsSection').style.display = 'block';
                actualizarProductos();
            }
        });
    });
    
    // Configurar eventos de filtros
    document.getElementById('categoryFilter').addEventListener('change', filtrarProductos);
    document.getElementById('sortBy').addEventListener('change', ordenarProductos);
    
    // Mostrar productos inicialmente
    actualizarProductos();
});


// Función para actualizar la visualización de productos
function actualizarProductos() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (productosFiltrados.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con los filtros seleccionados.</p>';
        return;
    }
    
    productosFiltrados.forEach(producto => {
        const puedeCanjear = puntosUsuario >= producto.puntos;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <i class="fas fa-gift fa-3x"></i>
            </div>
            <div class="product-info">
                <div class="product-name">${producto.nombre}</div>
                <div class="product-description">${producto.descripcion}</div>
                <div class="product-footer">
                    <div class="product-price">${producto.puntos} SBpts</div>
                    <button class="redeem-button">Puntos insuficientes</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}


// Función para filtrar productos por categoría
function filtrarProductos() {
    const categoriaSeleccionada = document.getElementById('categoryFilter').value;
    
    if (categoriaSeleccionada === 'todas') {
        productosFiltrados = [...productos];
    } else {
        productosFiltrados = productos.filter(producto => 
            producto.categoria === categoriaSeleccionada
        );
    }
    
    const ordenSeleccionado = document.getElementById('sortBy').value;
    ordenarProductosLista(ordenSeleccionado);
    actualizarProductos();
}


// Función para ordenar productos
function ordenarProductos() {
    const ordenSeleccionado = document.getElementById('sortBy').value;
    ordenarProductosLista(ordenSeleccionado);
    actualizarProductos();
}


// Función auxiliar para ordenar la lista de productos
function ordenarProductosLista(orden) {
    switch(orden) {
        case 'puntos-bajo':
            productosFiltrados.sort((a, b) => a.puntos - b.puntos);
            break;
        case 'puntos-alto':
            productosFiltrados.sort((a, b) => b.puntos - a.puntos);
            break;
        case 'nombre':
            productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
    }
}
