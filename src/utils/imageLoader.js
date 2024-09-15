import { useDotcmsPageContext } from "@dotcms/react";

const ImageLoader = ({ src, width }) => {
    // @ts-ignore
    const dotcmsURL = new URL(import.meta.env.VITE_PUBLIC_DOTCMS_HOST).origin;

    const context = useDotcmsPageContext();

    const languageId = context?.pageAsset.viewAs.language.id ?? 1;

    const imageSRC = src.includes("/dA/") ? src : `/dA/${src}`; // Check if the image is a DotCMS asset or a file asset

    return `${dotcmsURL}${imageSRC}/${width}?language_id=${languageId}`;
};

export default ImageLoader;
