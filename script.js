document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопки "Показать больше"
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    showMoreBtn.addEventListener('click', function() {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            showMoreBtn.textContent = 'Скрыть';
        } else {
            moreInfo.style.display = 'none';
            showMoreBtn.textContent = 'Показать больше';
        }
    });

    // Слайдер проектов
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.getElementById('nextBtn').addEventListener('click', function() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    });

    // Селектор тем оформления
    const themeSelector = document.getElementById('themeSelector');
    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        document.body.className = selectedTheme; // Добавление класса к body
        localStorage.setItem('theme', selectedTheme); // Сохранение темы в локальном хранилище
    });

    // Восстановление темы из локального хранилища
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelector.value = savedTheme; // Установка выбранного значения селектора
    }
    
    // Получение данных с API
    fetch('https://api.example.com/projects') // API для загрузки данных
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

