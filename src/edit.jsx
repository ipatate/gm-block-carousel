const { Button, Dashicon } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useRef } = wp.element;
import EditElement from "./components/editElement";
import Siema from "siema";
import "./styles/index.scss";
import AddImage from "./components/addImage";

const model = {
  image: undefined,
  imageId: undefined
};

const Edit = props => {
  const { attributes, setAttributes } = props;
  const { blocs } = attributes;
  const container = useRef();
  // ref to carousel
  let carousel = useRef();

  // destroy carousel on change element
  const destroyCarousel = (cb = () => true, resetDom = true) => {
    if (carousel.current) carousel.current.destroy(resetDom, cb);
  };

  // re init carousel with new element
  const initCarousel = (remove = false) => {
    if (carousel.current) {
      setTimeout(() => {
        const length = container.current.childNodes.length;
        carousel.current = new Siema({
          selector: container.current
        });
        if (length > 0) {
          const _i = remove === true ? length - 1 : length;
          carousel.current.goTo(_i < 0 ? 1 : _i);
        }
      }, 100);
    }
  };

  // init carousel on mount
  useEffect(() => {
    carousel.current = new Siema({
      selector: container.current
    });
  }, []);

  // remove image
  const onRemoveImage = i => {
    destroyCarousel(() => {
      const _blocs = { ...blocs };
      delete _blocs[i];
      setAttributes({
        blocs: _blocs
      });
      initCarousel(true);
    });
  };

  return (
    <div className="gm-carousel-bloc-edit">
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
