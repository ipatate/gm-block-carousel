const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import edit from "./edit";
import save from "./save";
import attributes from "./attributes";

registerBlockType("gm/carousel", {
  title: "Block carousel",
  description: "carousel for show photo",
  icon: "star-filled",
  category: "theme-blocks",
  attributes,
  edit,
  save
});
