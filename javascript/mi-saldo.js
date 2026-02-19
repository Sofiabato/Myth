// =====================
// MI SALDO - JAVASCRIPT
// =====================

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================
    // BOTÓN ACTIVAR SALDO
    // =====================
    const btnActivate = document.querySelector('.btn-activate');
    
    if (btnActivate) {
        btnActivate.addEventListener('click', function() {
            alert('Funcionalidad de activar saldo en desarrollo');
            // Aquí iría la lógica para activar el saldo
        });
    }

    // =====================
    // BOTONES CAMBIAR
    // =====================
    const btnChanges = document.querySelectorAll('.btn-change');
    
    btnChanges.forEach(button => {
        button.addEventListener('click', function() {
            const field = this.previousElementSibling.textContent;
            alert(`Editar: ${field}`);
            // Aquí iría la lógica para editar cada campo
        });
    });

    // =====================
    // CAMPO PAÍS (DROPDOWN)
    // =====================
    const fieldRight = document.querySelector('.field-right');
    
    if (fieldRight) {
        fieldRight.addEventListener('click', function() {
            alert('Selector de país en desarrollo');
            // Aquí iría un dropdown con lista de países
        });
    }

    // =====================
    // CAMPO FECHA
    // =====================
    const dateFields = document.querySelectorAll('.data-field');
    
    dateFields.forEach(field => {
        const dateFormat = field.querySelector('.date-format');
        if (dateFormat) {
            field.addEventListener('click', function() {
                alert('Selector de fecha en desarrollo');
                // Aquí iría un date picker
            });
        }
    });
});

// =====================
// FORMATO AUTOMÁTICO FECHA
// =====================

const dateInput = document.querySelector('.date-text');

if (dateInput) {
    dateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length >= 2) {
            value = value.substring(0,2) + '/' + value.substring(2);
        }
        if (value.length >= 5) {
            value = value.substring(0,5) + '/' + value.substring(5,9);
        }

        e.target.value = value;
    });
}
