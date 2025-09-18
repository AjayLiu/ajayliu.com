import React, { useState } from "react";
import styles from "./EnvelopeCard.module.scss";

interface EnvelopeCardProps {
  name: string;
  message: string;
}

const EnvelopeCard: React.FC<EnvelopeCardProps> = ({ name, message }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.envelopeContainer}>
      <div className={`${styles.envelope} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.envelopeFront} onClick={handleClick}>
          <div className={styles.envelopeTop}></div>
          <div className={styles.envelopeBody}>
            <div className={styles.nameTag}>
              <span className={styles.name}>{name}</span>
            </div>
          </div>
        </div>
        <div
          className={styles.envelopeBack}
          onClick={handleClick}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            className={styles.message}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeCard;
