document.querySelector('.wave-button').addEventListener('click', function (event) {
    const button = event.currentTarget;
  
    // Create the wave element
    const wave = document.createElement('span');
    wave.classList.add('wave');
  
    // Get the button's position and size
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
  
    // Set the size and position of the wave
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${event.clientX - rect.left - size / 2}px`;
    wave.style.top = `${event.clientY - rect.top - size / 2}px`;
  
    // Append the wave to the button and remove it after animation
    button.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove());
  });