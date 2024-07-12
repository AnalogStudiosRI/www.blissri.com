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
      expect(banner.querySelectorAll('div').length).equal(1);
    });

    it('should have the expected header content', () => {
      const heading = banner.querySelectorAll('div h1');

      expect(heading.length).equal(1);
      expect(heading[0].textContent.replace(/ /g, '').replace(/\n/g, '')).equal('Vendors');
    });

    it('should have the expected logo output content', () => {
      const vendors = banner.querySelectorAll('div li');

      expect(vendors.length).to.be.greaterThanOrEqual(1);

      vendors.forEach(vendor => {
        const link = vendor.querySelectorAll('a');
        const img = vendor.querySelectorAll('a img');

        expect(link.length).to.equal(1);
        expect(img.length).to.equal(1);

        expect(link[0].getAttribute('href')).to.not.be.equal(null);
        expect(link[0].getAttribute('title')).to.not.be.equal(null);

        expect(img[0].getAttribute('alt')).to.not.be.equal(null);
        expect(img[0].getAttribute('src')).to.not.be.equal(null);
      });
    });
  });

  after(() => {
    banner.remove();
    banner = null;
  });

});