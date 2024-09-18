/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { NextButton, PrevButton } from './EmblaCarouselArrowButtons';
import { usePrevNextButtons, useDotButton } from './hooks';
import { DotButton } from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = (props) => {
  const { options } = props;
  const slides = props.children;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(),
    ClassNames(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla" style={{ height: props.height }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <div key={index} className="embla__slide">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>
      {options?.enableControls && (
        <div className="embla__controls">
          {options?.showButtons && (
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          )}
          {options?.showDots && (
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { EmblaCarousel };
