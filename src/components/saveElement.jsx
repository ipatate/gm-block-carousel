const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import SaveImage from "./saveImage";

import "../styles/index.scss";

const SaveElement = ({ props, index }) => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  return (
    <div className="gm-carousel-cell">
      <SaveImage index={index} props={props} />
    </div>
  );
};

export default SaveElement;
