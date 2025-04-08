 // Create animated particles
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const colors = ['#f06', '#9f6', '#06f', '#f0f'];
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 20 + 5;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight + window.innerHeight;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 15;
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.width = ${size}px;
        particle.style.height = ${size}px;
        particle.style.left = ${posX}px;
        particle.style.top = ${posY}px;
        particle.style.backgroundColor = color;
        particle.style.animationDelay = ${delay}s;
        particle.style.animationDuration = ${duration}s;
        
        particlesContainer.appendChild(particle);
      }
    }
    
    // Run on load
    window.addEventListener('load', createParticles);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });