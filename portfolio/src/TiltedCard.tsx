// Adapted from the React Bits TiltedCard source supplied with the design reference.
// Reuses the project's Framer Motion runtime (the same motion/spring API).
import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import './TiltedCard.css';

const spring = { damping: 30, stiffness: 100, mass: 2 };

type TiltedCardProps = {
  imageSrc: string;
  altText: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  overlayContent?: ReactNode;
};

export default function TiltedCard({ imageSrc, altText, rotateAmplitude = 12, scaleOnHover = 1.06, overlayContent }: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);

  function reset() { rotateX.set(0); rotateY.set(0); scale.set(1); }
  useEffect(() => {
    if (reducedMotion) { rotateX.jump(0); rotateY.jump(0); scale.jump(1); }
  }, [reducedMotion, rotateX, rotateY, scale]);

  function move(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
    const y = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
    rotateX.set(y * -rotateAmplitude);
    rotateY.set(x * rotateAmplitude);
    scale.set(scaleOnHover);
  }

  return <figure ref={ref} className="tilted-card-figure" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
    <motion.div className="tilted-card-inner" style={{ rotateX, rotateY, scale }}>
      <img className="tilted-card-img" src={imageSrc} alt={altText} loading="lazy" decoding="async" draggable={false}/>
      <div className="tilted-card-shade"/>
      {overlayContent && <div className="tilted-card-overlay">{overlayContent}</div>}
    </motion.div>
  </figure>;
}
