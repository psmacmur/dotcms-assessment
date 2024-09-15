import { Banner } from './banner';
import { WebPageContent } from './webpagecontent';
import { Product } from './product';
import { VtlInclude } from './widget';
import { BlogWithBlockEditor } from './blog';
import { ImageComponent } from './image';
import { Activity } from './activity';


// Mapping of components to DotCMS content types
const componentsMap = {
    webPageContent: WebPageContent,
    Banner: Banner,
      Activity: Activity,
      Product: Product,
      Image: ImageComponent,
    //   calendarEvent: CalendarEvent,
    //   CallToAction: CallToAction,
    //   CustomNoComponent: CustomNoComponent,
    BlockEditorItem: BlogWithBlockEditor,
    VtlInclude: VtlInclude,
  };

  export {componentsMap};