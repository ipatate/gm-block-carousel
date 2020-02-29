const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import SaveImage from "./saveImage";

import "../styles/index.scss";

const SaveElement = ({ props, index, keyRand }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  return (
    <div
      role="tabpanel"
      id={`${keyRand}_${index}`}
      className="gm-carousel-cell"
      aria-hidden="true"
    >
      <SaveImage index={index} props={props} />
    </div>
  );
};

export default SaveElement;
