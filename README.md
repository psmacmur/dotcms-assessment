# dotcms-assessment

## Technical Demo Challenge: Front-End Solutions Engineer

This demo comprises a Vite React SPA consuming the [dotCMS Demo Site](https://demo.dotcms.com/dotAdmin/#/edit-page/content?url=%2Findex).

### Author

Peter MacMurchy

- peter.macmurchy AT gmail
- [https://github.com/psmacmur](https://github.com/psmacmur)

### Getting started

1. Install [Node.js](https://nodejs.org/en) version 18+ or 20+, as required by Vite
1. Clone the repo
1. `npm install`
1. Get an API token for the Admin User, using either:
   - Postman to [https://demo.dotcms.com/api/v1/authentication/api-token](https://demo.dotcms.com/api/v1/authentication/api-token)
   - The [dotCMS admin UI](https://demo.dotcms.com/dotAdmin/#/c/users)
1. Copy the token into `.env.local`

   - should contain one line: `VITE_PUBLIC_DOTCMS_AUTH_TOKEN=<token>`

1. Run the demo locally: `npm run dev`
1. [Author only] Deploy statically to github pages: `npm run deploy`
   - Site appears at [https://psmacmur.github.io/dotcms-assessment](https://psmacmur.github.io/dotcms-assessment)

### Features

- Top Nav
  - Home, Travel Blog, and Destinations all have partial implementations
  - Store is just a placeholder to demonstrate navigation
- Home page
  - Activity cards demonstrating ubiqutous carousels
  - Banner with a CTA linking to the Store page
  - Product cards
  - Youtube players
  - Layout controlled by `DotcmsLayout`
- Travel Blog
  - Click a card to visit the detail page, which supports the following dotCMS features:
    - Header image from the card
    - Formatted text
    - Tags
    - Product promo cards
    - Table

### Key Dependencies

- [Vite](https://vitejs.dev/), for a fast, modern SPA build
- React 18
- [Adobe React Spectrum ](https://react-spectrum.adobe.com/react-spectrum/index.html) components, for an easy path to accessibility with full aria support
- [Embla Carousel](https://www.embla-carousel.com/), because I didn't feel like spending half a day evaluating carousels

## Todo

- Configure Apollo client and use GraphQL to query dotCMS.
  - The (unused) code in `main-apollo.js` has a CORS error
- Implement the rest of the Destinations page
  - currently only the BannerCarousel is implemented and it's unclear whether the rest of the page can be rendered via the `dotcmsClient`'s page api and `dotcms/react`'s `DotcmsLayout` component
  - Implement a calendar event component
- Make the page WCAG compliant by supplying missing aria tags etc.
