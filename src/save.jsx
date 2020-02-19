const { RichText } = wp.blockEditor;
import SaveElement from "./components/saveElement";

import "./styles/index.scss";

const Save = props => {
  const { blocs } = props.attributes;
  return (
    <div className="gm-carousel-container">
      {Object.keys(blocs).map(b => (
        <SaveElement props={props} key={b} index={b} />
      ))}
    </div>
  );
};

export default Save;
