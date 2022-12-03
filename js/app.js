const body = document.querySelector('body');

const toggleClass = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
}

toggleClass();
