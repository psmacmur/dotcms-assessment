// @ts-ignore
import { DotCmsClient } from "@dotcms/client";

// @ts-ignore
console.log(import.meta.env.VITE_PUBLIC_DOTCMS_HOST, import.meta.env.VITE_PUBLIC_DOTCMS_AUTH_TOKEN);

// Client for content fetching
export const client = DotCmsClient.init({
    // @ts-ignore
    dotcmsUrl: import.meta.env.VITE_PUBLIC_DOTCMS_HOST,
    // @ts-ignore
    authToken: import.meta.env.VITE_PUBLIC_DOTCMS_AUTH_TOKEN,
    siteId: "59bb8831-6706-4589-9ca0-ff74016e02b2",
    requestOptions: {
        // In production you might want to deal with this differently
        // cache: "no-cache",
    }
});
