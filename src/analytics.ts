export const GA_TRACKING_ID = 'UA-85091349-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
  gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}

interface EventParams {
  category?: string;
  label?: string;
  value?: string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event(action: string, { category, label, value }: EventParams = {}) {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
}
