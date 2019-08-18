export const GA_TRACKING_ID = 'UA-85091349-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
}
