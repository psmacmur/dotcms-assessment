import { HeadingComponent } from './heading';
import { ImageComponent } from './image';
import { ParagraphComponent } from './paragraph';

// Mapping of components to blogContent types
const contentMap = {
  paragraph: ParagraphComponent,
  dotImage: ImageComponent,
  heading: HeadingComponent,
};

export { contentMap };
