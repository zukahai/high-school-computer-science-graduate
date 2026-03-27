import DefaultTheme from 'vitepress/theme';

const REDIRECT_URL = 'https://haizuka.vn/course/?c=on-thi-tot-nghiep-thpt-mon-tin-hoc';
const REDIRECT_DELAY_MS = 5000;
const ALLOWED_HOST = 'haizuka.vn';

function getHostFromUrl(value) {
  try {
    return new URL(value).hostname;
  } catch {
    return '';
  }
}

function isAllowedHost(hostname) {
  return hostname === ALLOWED_HOST || hostname.endsWith(`.${ALLOWED_HOST}`);
}

function getEmbeddingHost() {
  if (typeof window === 'undefined') return '';

  // Chrome and Edge expose ancestorOrigins for cross-origin iframes.
  const ancestorOrigin = window.location.ancestorOrigins?.[0];
  if (ancestorOrigin) {
    return getHostFromUrl(ancestorOrigin);
  }

  return getHostFromUrl(document.referrer || '');
}

function shouldRedirect() {
  if (typeof window === 'undefined') return false;

  const inIframe = window.self !== window.top;
  if (!inIframe) {
    return true;
  }

  const embeddingHost = getEmbeddingHost();

  // If we can detect parent host and it's not haizuka.vn, force redirect.
  if (embeddingHost && !isAllowedHost(embeddingHost)) {
    return true;
  }

  // If host cannot be detected, allow iframe mode to avoid false positives.
  return false;
}

function scheduleRedirect() {
  if (typeof window === 'undefined') return;
  if (!shouldRedirect()) return;
  if (window.__haizukaRedirectTimer) return;

  window.__haizukaRedirectTimer = window.setTimeout(() => {
    window.location.replace(REDIRECT_URL);
  }, REDIRECT_DELAY_MS);
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);

    if (typeof window === 'undefined') return;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', scheduleRedirect, { once: true });
      return;
    }

    scheduleRedirect();
  }
};
