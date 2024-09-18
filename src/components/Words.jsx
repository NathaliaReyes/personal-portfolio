import React from "react";
import { FlipWords } from '@components/ui/flip-words';

export default function FlipWordsDemo() {
    // Cambia las palabras aquí para que reflejen tus habilidades o cualidades
    const words = ["responsive", "dynamic", "innovative", "user-friendly"];
  
    return (
      <div className="sm:h-[4rem] flex justify-center">
        <div className="flex flex-col justify-center text-base md:text-2xl text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words} />
        </div>
      </div>
    );
}
