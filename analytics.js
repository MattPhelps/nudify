export const GA_TRACKING_ID = "G-7PP7WW8P1S"; // Replace with your GA tracking ID

// Log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};