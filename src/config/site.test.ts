import { describe, expect, it } from 'vitest';
import { SITE } from './site';

describe('SITE config', () => {
  it('every nav item has a matching footer link pointing at the same route', () => {
    for (const item of SITE.nav) {
      const footerMatch = SITE.footerLinks.find((link) => link.label === item.label);
      expect(footerMatch).toBeDefined();
      expect(footerMatch?.href).toBe(item.href);
    }
  });

  it('nav hrefs are absolute site routes', () => {
    for (const item of SITE.nav) {
      expect(item.href.startsWith('/')).toBe(true);
    }
  });

  it('contactEmail looks like a valid email address', () => {
    expect(SITE.contactEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});
