const { registerBlockType } = wp.blocks;
const { __, setLocaleData } = wp.i18n;

import edit from "./edit";
import save from "./save";
import attributes from "./attributes";

import "./styles/index.scss";

// setLocaleData({ "": {} }, "gm-carousel");

const icone = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        d="M3,3 L3,2.5 C3,2.22385763 3.22385763,2 3.5,2 L7,2 L7,0.5 C7,0.22385763 7.22385763,0 7.5,0 L19.5,0 C19.7761424,0 20,0.22385763 20,0.5 L20,12.5 C20,12.7761424 19.7761424,13 19.5,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 L7,11 L3.5,11 C3.22385763,11 3,10.7761424 3,10.5 L3,10 L0.5,10 C0.22385763,10 0,9.7761424 0,9.5 L0,3.5 C0,3.22385763 0.22385763,3 0.5,3 L3,3 Z M3,4 L1,4 L1,9 L3,9 L3,4 Z M7,10 L7,3 L4,3 L4,10 L7,10 Z M8,12 L19,12 L19,1 L8,1 L8,12 Z"
        transform="translate(1 4)"
      />
    </svg>
  </>
);

registerBlockType("gm/carousel", {
  title: __("Block carousel", "gm-carousel"),
  description: __("carousel for show photos", "gm-carousel"),
  icon: icone,
  category: "theme-blocks",
  attributes,
  edit,
  save
});

// dev
if (module.hot) {
  console.log("hot");
  module.hot.accept(() => console.log("reload"));
}
