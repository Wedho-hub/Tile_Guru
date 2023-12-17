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
