// =====================
// TABS FUNCTIONALITY
// =====================
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Función para cambiar de tab
    function switchTab(tabName) {
        // Remover active de todas las tabs
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Añadir active a la tab seleccionada
        const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(`${tabName}-content`);

        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Event listeners para las tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // =====================
    // UPLOAD FUNCTIONALITY
    // =====================
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.querySelector('.upload-button');

    // Click en el botón de subir
    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });

    // Click en la zona de drop
    dropZone.addEventListener('click', function(e) {
        if (e.target === uploadButton) return;
        fileInput.click();
    });

    // Drag and drop
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = 'var(--color-prim)';
        this.style.backgroundColor = 'rgba(131, 0, 7, 0.05)';
    });

    dropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = '#D1D1D1';
        this.style.backgroundColor = 'transparent';
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#D1D1D1';
        this.style.backgroundColor = 'transparent';
        
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Cambio en el input de archivo
    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 4) {
            alert('Máximo 4 imágenes permitidas');
            return;
        }

        console.log('Archivos subidos:', files);
        // Aquí iría la lógica para mostrar las imágenes subidas
    }

    // =====================
    // BOTONES DE OPCIONES (Tipo de prenda, Material)
    // =====================
    const optionButtons = document.querySelectorAll('.option-button');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active en el mismo grupo
            const group = this.parentElement;
            const buttons = group.querySelectorAll('.option-button');
            
            // Si quieres solo uno activo a la vez, descomenta esto:
            // buttons.forEach(btn => btn.classList.remove('active'));
            
            // Para permitir múltiples selecciones:
            this.classList.toggle('active');
        });
    });

    // =====================
    // BOTONES DE TALLA
    // =====================
    const sizeButtons = document.querySelectorAll('.size-button');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const group = this.parentElement;
            const buttons = group.querySelectorAll('.size-button');
            
            // Solo una talla activa a la vez
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // =====================
    // COLOR PICKER
    // =====================
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(color => {
        color.addEventListener('click', function() {
            const group = this.parentElement;
            const colors = group.querySelectorAll('.color-option');
            
            // Solo un color activo a la vez
            colors.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // =====================
    // PREVIEW SIZE BUTTONS
    // =====================
    const previewSizeButtons = document.querySelectorAll('.preview-size-button');
    
    previewSizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            previewSizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // =====================
    // PREVIEW THUMBNAILS
    // =====================
    const thumbnails = document.querySelectorAll('.preview-thumbnails img');
    const mainImage = document.querySelector('.preview-main-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            if (mainImage) {
                mainImage.src = this.src;
            }
        });
    });

    // =====================
    // NAVEGACIÓN ENTRE TABS
    // =====================
    const nextButtons = document.querySelectorAll('.next-button');
    const backButtons = document.querySelectorAll('.secondary-button');

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentTab = document.querySelector('.tab.active');
            if (!currentTab) return;

            const currentTabName = currentTab.getAttribute('data-tab');
            
            // Navegar a la siguiente tab
            if (currentTabName === 'imagenes') {
                switchTab('datos');
            } else if (currentTabName === 'datos') {
                switchTab('vista-previa');
            }
        });
    });

    // Los botones "Atrás" que están en datos y vista previa
    document.querySelectorAll('.form-actions .secondary-button, .preview-actions .secondary-button').forEach(button => {
        button.addEventListener('click', function() {
            const currentTab = document.querySelector('.tab.active');
            if (!currentTab) return;

            const currentTabName = currentTab.getAttribute('data-tab');
            
            // Navegar a la tab anterior
            if (currentTabName === 'datos') {
                switchTab('imagenes');
            } else if (currentTabName === 'vista-previa') {
                switchTab('datos');
            }
        });
    });

    // =====================
    // BOTÓN PUBLICAR
    // =====================
    const publishButton = document.querySelector('.preview-actions .button-def:not(.secondary-button)');
    
    if (publishButton) {
        publishButton.addEventListener('click', function() {
            alert('Publicación creada exitosamente!');
            // Aquí iría la lógica para publicar
        });
    }
});
