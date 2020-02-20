import Siema from "siema";
const { Button, Dashicon } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useState, useRef } = wp.element;
import EditElement from "./components/editElement";
import AddImage from "./components/addImage";

import "./styles/index.scss";

// model for bloc
const model = {
  image: undefined,
  imageId: undefined
};

const Edit = props => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const [selected, setSelected] = useState(0);
  // container carousel
  const container = useRef();
  // ref to carousel
  let carousel = useRef();

  // destroy carousel on change element
  const destroyCarousel = (cb = () => true, resetDom = true) => {
    // remove and reste dom
    if (carousel.current) carousel.current.destroy(resetDom, cb);
  };

  // re init carousel with new element
  const initCarousel = (remove = false, index = 0) => {
    if (carousel.current) {
      setTimeout(() => {
        // total items
        const length = container.current.childNodes.length;
        // init new carousel
        carousel.current = new Siema({
          selector: container.current,
          onChange: () => setSelected(carousel.current.currentSlide)
        });

        if (length > 0) {
          // if remove, take index of bloc removed - 1 or take last
          const _i = remove === true ? index - 1 : length;
          carousel.current.goTo(_i < 0 ? 1 : _i);
        }
      }, 100);
    }
  };

  // init carousel on mount
  useEffect(() => {
    // init first carousel
    carousel.current = new Siema({
      selector: container.current,
      onChange: () => {
        setSelected(carousel.current.currentSlide);
      }
    });
  }, []);

  // remove image
  const onRemoveImage = i => {
    destroyCarousel(() => {
      // delete bloc image
      const _blocs = { ...blocs };
      delete _blocs[i];
      // reset keys
      const newBlocs = {};
      Object.keys(_blocs).forEach((e, i) => {
        newBlocs[i] = _blocs[e];
      });

      setAttributes({
        blocs: newBlocs
      });
      initCarousel(true, i);
    });
  };

  return (
    <div className="gm-carousel-bloc-edit">
      <div className="gm-carousel-bloc-container">
        <div className="gm-carousel-container" ref={container}>
          {Object.keys(blocs).map(b => (
            <EditElement
              onRemoveImage={onRemoveImage}
              props={props}
              key={`${blocs[b].imageId} ${b}`}
              index={b}
            />
          ))}
        </div>
        <div className="gm-carousel-dot-container">
          {Object.keys(blocs).map(b => {
            return (
              <div
                index={`dot-${b}`}
                className={`gm-carousel-dot ${
                  +selected === +b ? "gm-carousel-dot-current" : ""
                }`}
                onClick={() => carousel.current.goTo(b)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="gm-carousel-add-bloc">
        <AddImage
          initCarousel={initCarousel}
          destroyCarousel={destroyCarousel}
          props={props}
        />
      </div>
    </div>
  );
};

export default Edit;
