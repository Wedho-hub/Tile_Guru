window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let sections = document.querySelectorAll('section');
    let ulElement = document.querySelector('ul');
    let links = document.querySelectorAll('nav ul li a');
    let logo = document.querySelector('#logo');

    sections.forEach((section, index) => {
        let rect = section.getBoundingClientRect();

        if (rect.top <= 50 && rect.bottom >= 50) {
            if (index % 2 === 0) {
                nav.style.backgroundColor = 'white';
                logo.style.color = 'black';
                links.forEach(link => {
                    link.style.color = 'black';
                });
                nav.classList.remove('black-background');
            } else {
                nav.style.backgroundColor = 'black';
                logo.style.color = 'white';
                ulElement.style.color = 'white';
                links.forEach(link => {
                    link.style.color = 'white';
                });
                nav.classList.add('black-background');
            }
        }
    });
});

// opening the modals
const toggleModal = (readMoreBtn, modal) => {
    readMoreBtn.addEventListener('click', () => {
        modal.classList.toggle('open');
    });
};

const design_btn = document.getElementById("design_btn");
const design_modal = document.getElementById("design_modal");

toggleModal(design_btn, design_modal);

const installations_btn = document.getElementById("installations_btn");
const installations_modal = document.getElementById("installations_modal"); // Corrected spelling

toggleModal(installations_btn, installations_modal);

const estimates_btn = document.getElementById("estimates_btn");
const estimates_modal = document.getElementById("estimates_modal");

toggleModal(estimates_btn, estimates_modal);

const maintenance_btn = document.getElementById("maintenance_btn");
const maintenance_modal = document.getElementById("maintenance_modal");

toggleModal(maintenance_btn, maintenance_modal);

// closing the modal on inside click
const closeModal = (modal) => {
    modal.classList.remove('open');
};

const closeOnInsideClick = (modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
};

closeOnInsideClick(design_modal);
closeOnInsideClick(estimates_modal);
closeOnInsideClick(installations_modal);
closeOnInsideClick(maintenance_modal);
