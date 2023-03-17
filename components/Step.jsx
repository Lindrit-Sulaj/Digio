import React from 'react';
import { motion } from 'framer-motion';

function Step({ title, text, img }) {
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <button>Learn more</button>
      </div>
      <img src={img} alt={`${text} image`} />
    </div>
  )
}

export default Step