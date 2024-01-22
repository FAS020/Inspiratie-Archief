let currentSlide1 = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;
let currentSlide4 = 0;

function showSlide(index, slider) {
    const sliderElement = document.querySelector(`.${slider} .slider`);
    const slideWidth = document.querySelector(`.${slider} .slide`).offsetWidth;
    sliderElement.style.transform = `translateX(${-index * slideWidth}px)`;

    const images = document.querySelectorAll(`.${slider} .slide img`);
    images.forEach((image, i) => {
        image.removeEventListener('click', openModal);
        image.addEventListener('click', () => {
            const imageSrc = image.getAttribute('src');
            openModal(imageSrc);
        });
    });

    if (slider === 'slider1') {
        currentSlide1 = index;
    } else if (slider === 'slider2') {
        currentSlide2 = index;
    } else if (slider === 'slider3') {
        currentSlide3 = index;
    } else if (slider === 'slider4') {
        currentSlide4 = index;
    }
}

function nextSlide(slider) {
    const totalSlides = document.querySelectorAll(`.${slider} .slide`).length;

    if (slider === 'slider1') {
        currentSlide1 = (currentSlide1 + 1) % totalSlides;
        showSlide(currentSlide1, slider);
    } else if (slider === 'slider2') {
        currentSlide2 = (currentSlide2 + 1) % totalSlides;
        showSlide(currentSlide2, slider);
    } else if (slider === 'slider3') {
        currentSlide3 = (currentSlide3 + 1) % totalSlides;
        showSlide(currentSlide3, slider);
    } else if (slider === 'slider4') {
        currentSlide4 = (currentSlide4 + 1) % totalSlides;
        showSlide(currentSlide4, slider);
    }
}

function prevSlide(slider) {
    const totalSlides = document.querySelectorAll(`.${slider} .slide`).length;

    if (slider === 'slider1') {
        currentSlide1 = (currentSlide1 - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide1, slider);
    } else if (slider === 'slider2') {
        currentSlide2 = (currentSlide2 - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide2, slider);
    } else if (slider === 'slider3') {
        currentSlide3 = (currentSlide3 - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide3, slider);
    } else if (slider === 'slider4') {
        currentSlide4 = (currentSlide4 - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide4, slider);
    }
}

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const sliders = ['slider1', 'slider2', 'slider3', 'slider4'];

    sliders.forEach(slider => {
        // Attach click event to all images in each slider
        const images = document.querySelectorAll(`.${slider} .slide img`);
        images.forEach(function (image, index) {
            image.addEventListener('click', function () {
                openModal(this.src);
            });
        });
    });

    // Close the modal when the close button is clicked
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function () {
        closeModal();
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function (event) {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
            closeModal();
        }
    };
});
