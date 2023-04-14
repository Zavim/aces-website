import React, { useEffect } from "react";

import lax from "lax.js";

export default function LaxAnimController() {
  useEffect(() => {
    //setup lax
    window.lax = { presets: lax.presets };
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    //add elements
    lax.addElements(".spinning-star", {
      scrollY: {
        rotate: [
          ["elInY", "elOutY*4"],
          [0, 360],
        ],
      },
    });
    lax.addElements(".spinning-star-right", {
      scrollY: {
        rotate: [
          ["elInY", "elOutY*5"],
          [0, 360],
        ],
      },
    });
    lax.addElements(".spinning-star-right-up", {
      scrollY: {
        rotate: [
          ["elInY", "elOutY*3"],
          [0, 360],
        ],
      },
    });
  }, []);

  return <></>;
}
