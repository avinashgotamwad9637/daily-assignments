  const typeWriter = document.getElementById('typewriter-text');
    const text = 'Welcome to our Predrag Academy and System';

    typeWriter.textContent = text;
    typeWriter.style.setProperty('--characters', text.length);