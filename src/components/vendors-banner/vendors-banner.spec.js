import { expect } from '@esm-bundle/chai';
import './vendors-banner.js';

describe('Components/Vendors Banner', () => {
  let banner;

  before(async () => {
    banner = document.createElement('bf-vendors-banner');
    document.body.appendChild(banner);

    await banner.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(banner).not.equal(undefined);
    });

    it('should have the expected header content', () => {
      const heading = banner.querySelectorAll('div h2');

      expect(heading.length).equal(1);
      expect(heading[0].textContent.replace(/ /g, '').replace(/\n/g, '')).equal('Vendors');
    });

    it('should have the highlighted vendor', () => {
      const featuredLink = banner.querySelectorAll('a[title="Boru website"]');
      const featuredLogo = banner.querySelectorAll('a[title="Boru website"] img[alt="Boru logo"');

      expect(featuredLink.length).to.equal(1);
      expect(featuredLogo.length).to.equal(1);
    });

    xit('should have the featured vendors', () => {
      const vendors = banner.querySelectorAll('ul li');

      expect(vendors.length).to.be.greaterThanOrEqual(1);

      vendors.forEach(vendor => {
        const link = vendor.querySelectorAll('a');

        if (link.length > 0) {
          expect(link.length).to.equal(1);

          expect(link[0].getAttribute('href')).to.not.be.equal(null);
          expect(link[0].getAttribute('title')).to.not.be.equal(null);
        }
      });
    });
  });

  after(() => {
    banner.remove();
    banner = null;
  });

});