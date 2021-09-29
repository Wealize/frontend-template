export const GTM_ID = process.env.GTM_ID;

declare const window: Window &
  typeof globalThis & {
    dataLayer: [object];
  };

export const pageview = (url: string): void => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
