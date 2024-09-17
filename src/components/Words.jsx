import React from "react";
import { FlipWords } from '@components/ui/flip-words';

export default function FlipWordsDemo() {
    // Cambia las palabras aquí para que reflejen tus habilidades o cualidades
    const words = ["responsive", "dynamic", "innovative", "user-friendly"];
  
    return (
      <div className="mt-2 sm:mt-0 sm:h-[5rem] flex flex-row items-center justify-center">
        <div className="flex flex-row justify-center text-base md:text-2xl text-neutral-600 dark:text-neutral-400 flex-wrap">
          {/* Personaliza el texto principal */}
          <h2 className="cormorant-infant-bold text-base md:text-lg">And I create</h2>
          {/* Aquí están las palabras que cambian dinámicamente */}
          <FlipWords words={words} />
          <h2 className="cormorant-infant-bold text-base md:text-lg justify-center items-center mb-2 sm:mb-0">websites that are built with the latest technologies</h2>
        </div>
      </div>
    );
}
