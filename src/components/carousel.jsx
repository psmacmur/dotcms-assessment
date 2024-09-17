/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { View } from '@adobe/react-spectrum';

const EmblaCarousel = (props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  //   console.log('EmblaCarousel', props);
  return (
    <View UNSAFE_style={props.style || {}}>
      {props.children.length ? (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {props.children.map((child, i) => (
              <div key={i} className="embla__slide">
                {child}
              </div>
            ))}
          </div>
        </div>
      ) : (
        props.children
      )}
    </View>
  );
};

export { EmblaCarousel };
