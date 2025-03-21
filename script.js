function showSection(sectionId) {
    // Плавное скрытие всех секций
    document.querySelectorAll('.content').forEach(section => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.classList.remove('active');
        }, 300);
    });

    // Плавное отображение выбранной секции
    setTimeout(() => {
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active');
        setTimeout(() => {
            activeSection.style.opacity = 1;
        }, 10);
    }, 300);
}

function applyBrandTheme(brand) {
    // Удаляем все темы
    document.body.classList.remove('harley-theme', 'yamaha-theme', 'honda-theme');

    // Применяем выбранную тему
    if (brand === 'harley') {
        document.body.classList.add('harley-theme');
    } else if (brand === 'honda') {
        document.body.classList.add('honda-theme');
    } else if (brand === 'yamaha') {
        document.body.classList.add('yamaha-theme');
    }

    // Показываем кнопку смены темы
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.classList.add('visible');

    // Показываем информацию о марке
    showBrandInfo(brand);
}

function resetTheme() {
    // Удаляем все темы
    document.body.classList.remove('harley-theme', 'yamaha-theme', 'honda-theme');

    // Скрываем кнопку смены темы
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.classList.remove('visible');
}

function showBrandInfo(brand) {
    const brandInfo = document.getElementById('brand-info');
    let infoText = '';

    switch (brand) {
        case 'harley':
            infoText = '<h3>Harley-Davidson</h3><p>Американский производитель мотоциклов, основанный в 1903 году. Известен своими круизерами и кастомными моделями.</p>';
            break;
        case 'honda':
            infoText = '<h3>Honda</h3><p>Крупнейший производитель мотоциклов в мире. Основана в 1948 году. Производит модели для всех типов дорог.</p>';
            break;
        case 'yamaha':
            infoText = '<h3>Yamaha</h3><p>Японская компания, выпускающая мотоциклы с 1955 года. Славится своими спортивными и туристическими моделями.</p>';
            break;
        default:
            infoText = '<p>Выберите марку для отображения информации.</p>';
    }

    brandInfo.innerHTML = infoText;
}

// По умолчанию показываем секцию "История"
showSection('history');