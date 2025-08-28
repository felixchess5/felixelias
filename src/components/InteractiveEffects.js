import React, { useEffect } from 'react'

const InteractiveEffects = () => {
  useEffect(() => {
    // Skip interactive effects on mobile devices for performance
    if (window.innerWidth <= 768 || ('ontouchstart' in window)) {
      return;
    }

    let cursorTrail = null;
    let constellationLines = [];
    let mouseTimeout = null;

    // Create cursor trail element
    const createCursorTrail = () => {
      cursorTrail = document.createElement('div');
      cursorTrail.className = 'cursor-trail';
      document.body.appendChild(cursorTrail);
    };

    // Mouse movement handler for cursor trail
    const handleMouseMove = (e) => {
      if (cursorTrail) {
        cursorTrail.style.left = `${e.clientX}px`;
        cursorTrail.style.top = `${e.clientY}px`;
        cursorTrail.style.opacity = '1';

        // Clear existing timeout
        if (mouseTimeout) {
          clearTimeout(mouseTimeout);
        }

        // Hide trail after mouse stops moving
        mouseTimeout = setTimeout(() => {
          if (cursorTrail) {
            cursorTrail.style.opacity = '0';
          }
        }, 500);
      }
    };

    // Create constellation lines between nearby elements
    const createConstellationLines = () => {
      const navItems = document.querySelectorAll('nav ul li a');
      const headerElements = [
        document.querySelector('.logo'),
        document.querySelector('.content h1'),
        ...navItems
      ].filter(Boolean);

      headerElements.forEach((element1, i) => {
        headerElements.forEach((element2, j) => {
          if (i < j) {
            const rect1 = element1.getBoundingClientRect();
            const rect2 = element2.getBoundingClientRect();
            
            const distance = Math.sqrt(
              Math.pow(rect2.left - rect1.left, 2) + 
              Math.pow(rect2.top - rect1.top, 2)
            );

            // Only create lines for nearby elements (within 300px)
            if (distance < 300) {
              const line = document.createElement('div');
              line.className = 'constellation-line';
              
              const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);
              
              line.style.left = `${rect1.left + rect1.width / 2}px`;
              line.style.top = `${rect1.top + rect1.height / 2}px`;
              line.style.width = `${distance}px`;
              line.style.transform = `rotate(${angle}rad)`;
              
              document.body.appendChild(line);
              constellationLines.push({
                line,
                element1,
                element2
              });
            }
          }
        });
      });
    };

    // Handle navigation hover effects
    const addNavHoverEffects = () => {
      const navItems = document.querySelectorAll('nav ul li a');
      
      navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          // Show constellation lines connected to this nav item
          constellationLines.forEach(({ line, element1, element2 }) => {
            if (element1 === item || element2 === item) {
              line.classList.add('active');
            }
          });
        });

        item.addEventListener('mouseleave', () => {
          // Hide constellation lines
          constellationLines.forEach(({ line }) => {
            line.classList.remove('active');
          });
        });
      });
    };

    // Initialize interactive effects
    const initEffects = () => {
      // Throttle expensive operations on lower-end devices
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      createCursorTrail();
      
      // Only add complex effects on higher-end devices
      if (!isLowEndDevice) {
        createConstellationLines();
        addNavHoverEffects();
      }
      
      // Add mouse move listener with throttling
      let mouseMoveTimeout = null;
      const throttledMouseMove = (e) => {
        if (mouseMoveTimeout) return;
        mouseMoveTimeout = setTimeout(() => {
          handleMouseMove(e);
          mouseMoveTimeout = null;
        }, 16); // ~60fps
      };
      
      document.addEventListener('mousemove', throttledMouseMove);
    };

    // Cleanup function
    const cleanup = () => {
      if (cursorTrail && document.body.contains(cursorTrail)) {
        document.body.removeChild(cursorTrail);
      }
      
      constellationLines.forEach(({ line }) => {
        if (document.body.contains(line)) {
          document.body.removeChild(line);
        }
      });
      
      document.removeEventListener('mousemove', handleMouseMove);
      
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
    };

    // Initialize with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(initEffects, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(initTimeout);
      cleanup();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default InteractiveEffects;