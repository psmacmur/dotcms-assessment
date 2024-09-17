import { Banner } from './banner';
import { WebPageContent } from './webpagecontent';
import { Product } from './product';
import { Widget } from './widget';
import { BlogWithBlockEditor } from './blog';
import { ImageComponent } from './image';
import { Activity } from './activity';
import { Button } from './button';

// Mapping of components to DotCMS content types, for Dotcmslayout
const componentsMap = {
  webPageContent: WebPageContent,
  htmlpageasset: WebPageContent,
  Banner: Banner,
  Activity: Activity,
  Product: Product,
  Image: ImageComponent,
  //   calendarEvent: CalendarEvent,
  CallToAction: Button,
  //   CustomNoComponent: CustomNoComponent,
  BlockEditorItem: BlogWithBlockEditor,
  VtlInclude: Widget,
};

export { componentsMap };
