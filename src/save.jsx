// const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
import SaveElement from "./components/saveElement";

import "./styles/index.scss";

const Save = props => {
  const { blocs } = props.attributes;
  return (
    <div className="gm-carousel-bloc-container">
      <div className="gm-carousel-container">
        {Object.keys(blocs).map(b => (
          <SaveElement props={props} key={b} index={b} />
        ))}
      </div>
      <div className="gm-carousel-arrow-container">
        <button className="gm-carousel-arrow-previous">
          <span>{__("previous")}</span>
        </button>
        <button className="gm-carousel-arrow-next">
          <span>{__("next")}</span>
        </button>
      </div>
      <div className="gm-carousel-dot-container">
        {Object.keys(blocs).map(b => {
          return <div className="gm-carousel-dot"></div>;
        })}
      </div>
    </div>
  );
};

export default Save;
