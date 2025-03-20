const button = document.getElementById('color-Button');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 300) {
        button.style.backgroundColor = 'yellow';
    } else if (scrollPosition >= 300) {
        button.style.backgroundColor = 'green';
    }else if (scrollPosition >= 250) {
        button.style.backgroundColor = 'red';
    }else if (scrollPosition >= 200) {
        button.style.backgroundColor = 'brown';
    }else if (scrollPosition >= 150) {
        button.style.backgroundColor = 'purple';
    }else if (scrollPosition >= 100) {
        button.style.backgroundColor = 'blue';
    }else if (scrollPosition >= 50) {
        button.style.backgroundColor = 'grey';
    }
     else {
        button.style.backgroundColor = 'black';
    }
});