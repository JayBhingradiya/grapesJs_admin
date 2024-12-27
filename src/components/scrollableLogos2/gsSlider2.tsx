import { Editor } from "grapesjs";
import React from "react";
import { createRoot } from "react-dom/client";
import SrollableLogos2 from "./scrollableLogos2";

const GsLogosSlider2 = (editor: Editor) => {
  editor.Components.addType("slider-logo2", {
    view: {
      onRender({ el }) {
        const root = createRoot(el);
        root.render(<SrollableLogos2 />);
      },
    },
  });
  editor.BlockManager.add("slider-logo2", {
    label: "Slider Logos2",
    category: "React-component",
    content: {
      type: "slider-logo2",
    },
  });
};

export default GsLogosSlider2;
