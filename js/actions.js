// MANEJO DE LAS ACCIONES SUGERIDAS

// Obtiene todos los botones de sugerencia
const suggestionButtons = document.querySelectorAll('.suggestion-button');


// Respuestas predefinidas para cada acción
const predefinedResponses = {
    datosBancarios: `
        <div class="response-card">
            <h4>Resumen de tus cuentas</h4>
            <div class="account-list">
                <div class="account-item">
                    <div class="account-icon">💳</div>
                    <div class="account-details">
                        <strong>Cuenta Corriente</strong>
                        <span>ES12 3456 7890 1234 5678 9012</span>
                        <div class="account-balance">2.450,75 €</div>
                    </div>
                </div>
                <div class="account-item">
                    <div class="account-icon">🏦</div>
                    <div class="account-details">
                        <strong>Cuenta Ahorro</strong>
                        <span>ES98 7654 3210 9876 5432 1098</span>
                        <div class="account-balance">8.120,50 €</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    productosBancarios: `
        <div class="response-card">
            <h4>Productos financieros disponibles</h4>
            <div class="product-list">
                <div class="product-item">
                    <h5>🏠 Hipoteca Joven</h5>
                    <ul class="product-features">
                        <li>Tipo fijo: 2,75% durante 5 años</li>
                        <li>Hasta el 80% de financiación</li>
                        <li>Sin comisión de apertura</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>🚗 Préstamo Coche Eco</h5>
                    <ul class="product-features">
                        <li>Desde 2,99% TIN</li>
                        <li>Hasta 60 meses</li>
                        <li>Seguro incluido primeros 12 meses</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>📈 Fondo Inversión Sostenible</h5>
                    <ul class="product-features">
                        <li>Rentabilidad anual: 4,2%</li>
                        <li>Perfil moderado</li>
                        <li>Inversión mínima: 1.000 €</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    operativaBasica: `
        <div class="response-card">
            <h4>Operativa básica disponible</h4>
            <div class="product-list">
                <div class="product-item">
                    <h5>📤 Transferencias</h5>
                    <ul class="product-features">
                        <li>Nacionales: sin comisión (hasta 24h)</li>
                        <li>Internacionales: comisión del 0,1% (mín. 5€)</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>💸 Retirada de efectivo</h5>
                    <ul class="product-features">
                        <li>Cajeros Sabadell: sin comisión</li>
                        <li>Otros cajeros: 2€ por operación</li>
                        <li>Límite diario: 600 €</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>🏦 Domiciliaciones</h5>
                    <ul class="product-features">
                        <li>Sin comisión de mantenimiento</li>
                        <li>Alertas por SMS de recibos superiores a 100€</li>
                    </ul<>
                </div>
            </div>
        </div>
    `,

    financieraEducativa: `
        <div class="response-card">
            <h4>Conceptos financieros básicos</h4>
            <div class="product-list">
                <div class="product-item">
                    <h5>💡 TAE vs TIN</h5>
                    <p>El TIN es el tipo de interés nominal, mientras que la TAE incluye todos los gastos y comisiones. Siempre compara por TAE.</p>
                </div>
                <div class="product-item">
                    <h5>📊 Diversificación</h5>
                    <p>"No pongas todos los huevos en la misma cesta". Invierte en diferentes productos para reducir riesgos.</p>
                </div>
                <div class="product-item">
                    <h5>💰 Fondo de emergencia</h5>
                    <p>Mantén siempre 3-6 meses de gastos en líquido para imprevistos.</p>
                </div>
                <div class="product-item">
                    <h5>📈 Interés compuesto</h5>
                    <p>"El interés compuesto es la octava maravilla del mundo" - Albert Einstein. Reinvertir tus ganancias acelera el crecimiento.</p>
                </div>
            </div>
        </div>
    `,

    sistemaPuntos: `
        <div class="response-card">
            <h4>Sistema de puntos Sabadell Next Gen</h4>
            <h5>⭐ Cómo ganar puntos:</h5>
            <div class="bar-chart">
                <div class="bar-item">
                    <div class="bar-label">Compras con tarjeta</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: 80%"></div>
                    </div>
                    <div class="bar-value">1 pt/10€</div>
                </div>
                <div class="bar-item">
                    <div class="bar-label">Domiciliaciones</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: 60%"></div>
                    </div>
                    <div class="bar-value">5 pts</div>
                </div>
                <div class="bar-item">
                    <div class="bar-label">Nuevos productos</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: 40%"></div>
                    </div>
                    <div class="bar-value">10 pts</div>
                </div>
            </div>
            <h5>🎁 Cómo canjear puntos:</h5>
            <div class="product-list">
                <div class="product-item">
                    <h5>100 puntos</h5>
                    <p>10€ en comercios asociados</p>
                </div>
                <div class="product-item">
                    <h5>500 puntos</h5>
                    <p>Curso de educación financiera</p>
                </div>
                <div class="product-item">
                    <h5>1.000 puntos</h5>
                    <p>Sesión con asesor financiero</p>
                </div>
            </div>
        </div>
    `,

    contactoAsesor: `
        <div class="response-card">
            <h4>Opciones de contacto disponibles</h4>
            <div class="product-list">
                <div class="product-item">
                    <h5>👨‍💼 Atención telefónica</h5>
                    <ul class="product-features">
                        <li>900 123 456 (24/7)</li>
                        <li>Asesoramiento general y urgente</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>🏢 Oficina principal</h5>
                    <ul class="product-features">
                        <li>C/ Principal, 123 - Sabadell</li>
                        <li>Lunes a viernes: 8:30-14:30</li>
                    </ul>
                </div>
                <div class="product-item">
                    <h5>💻 Videoasesor</h5>
                    <ul class="product-features">
                        <li>Videollamada con especialista</li>
                        <li>Reserva online en la app</li>
                        <li>Horario extendido: 8:00-20:00</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};


// Función para desplazar la vista al chat
function scrollToChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// Función para mostrar mensajes predefinidos del bot
function showPredefinedResponse(messageText, responseKey) {
    // Mostrar mensaje del usuario
    addMessage(messageText, true);
    
    // Mostrar indicador de escritura
    showTypingIndicator();
    
    // Simular tiempo de respuesta del bot
    setTimeout(() => {
        removeTypingIndicator();
        addMessage(predefinedResponses[responseKey], false);
    }, 1500);
}



// FUNCIONES ESPECÍFICAS PARA CADA BOTÓN

function handleDatosBancarios() {
    const message = "Consultar mis datos bancarios";
    scrollToChat();
    showPredefinedResponse(message, 'datosBancarios');
}

function handleProductosBancarios() {
    const message = "Información sobre productos financieros";
    scrollToChat();
    showPredefinedResponse(message, 'productosBancarios');
}

function handleOperativaBasica() {
    const message = "Información sobre operativa básica";
    scrollToChat();
    showPredefinedResponse(message, 'operativaBasica');
}

function handleInformacionFinancieraEducativa() {
    const message = "Realizar consultas financieras educativas";
    scrollToChat();
    showPredefinedResponse(message, 'financieraEducativa');
}

function handleInformacionSistemaPuntos() {
    const message = "Información sobre el sistema de puntos";
    scrollToChat();
    showPredefinedResponse(message, 'sistemaPuntos');
}

function handleAtencionAlCliente() {
    const message = "Contacta con Atención al Cliente";
    scrollToChat();
    showPredefinedResponse(message, 'contactoAsesor');
}


// Asignamos las funciones a cada botón
suggestionButtons[0].addEventListener('click', handleDatosBancarios);
suggestionButtons[1].addEventListener('click', handleProductosBancarios);
suggestionButtons[2].addEventListener('click', handleOperativaBasica);
suggestionButtons[3].addEventListener('click', handleInformacionFinancieraEducativa);
suggestionButtons[4].addEventListener('click', handleInformacionSistemaPuntos);
suggestionButtons[5].addEventListener('click', handleAtencionAlCliente);
