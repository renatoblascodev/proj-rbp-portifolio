import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista de Sistemas",
          "Desenvolvedor Full Stack",
          "Agile Coach",
          "Contribuidor Open Source",
          "Professor TI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
