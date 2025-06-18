import { useEffect, useRef } from 'react';

const Gradient = () => {
  const blobReference = useRef(null);
  const animationReference = useRef(null);
  const targetPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const currentPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Physics parameters (adjust these to change the feel)
    const friction = 0.5; // Higher = more resistance
    const spring = 0.05; // Higher = snappier movement

    const handlePointerMove = (event) => {
      // Update target position to mouse position
      targetPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const animate = () => {
      if (!blobReference.current) return;
      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;

      // spring
      velocity.current.x += dx * spring;
      velocity.current.y += dy * spring;
      // friction
      velocity.current.x *= 1 - friction;
      velocity.current.y *= 1 - friction;

      currentPosition.current.x += velocity.current.x;
      currentPosition.current.y += velocity.current.y;

      blobReference.current.style.transform = `
        translate(calc(${currentPosition.current.x}px), calc(${
        currentPosition.current.y
      }px))
        rotate(${velocity.current.x + velocity.current.y * 6}deg)
      `;

      animationReference.current = requestAnimationFrame(animate);
    };

    animationReference.current = requestAnimationFrame(animate);
    globalThis.addEventListener('pointermove', handlePointerMove);

    return () => {
      globalThis.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationReference.current);
    };
  }, []);

  return (
    <div className="background-wrapper">
      <div id="blob" ref={blobReference}></div>
      <div id="blur"></div>
    </div>
  );
};

export default Gradient;
