import { Banner } from './banner';
import { WebPageContent } from './webpagecontent';

// Mapping of components to DotCMS content types
const componentsMap = {
    webPageContent: WebPageContent,
    Banner: Banner,
    //   Activity: Activity,
    //   Product: Product,
    //   Image: ImageComponent,
    //   calendarEvent: CalendarEvent,
    //   CallToAction: CallToAction,
    //   CustomNoComponent: CustomNoComponent,
    //   BlockEditorItem: BlogWithBlockEditor,
  };

  export {componentsMap};