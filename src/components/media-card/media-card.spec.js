import { expect } from '@esm-bundle/chai';
import './media-card.js';
import { MOCK_IMG_ASSET, MOCK_VIDEO_ASSET } from './mock-data.js';

describe('Components/Media Card', () => {
  let card;

  describe('Default Image Behavior', () => {
    before(async () => {
      card = document.createElement('bf-media-card');
      card.setAttribute('asset', JSON.stringify(MOCK_IMG_ASSET));

      document.body.appendChild(card);
      await card.updateComplete;
    });

    it('should not be null', () => {
      expect(card).not.equal(undefined);
      expect(card.querySelectorAll('img').length).equal(1);
    });

    it('should render an img with the correct height and width', () => {
      const img = card.querySelector('img');
      expect(img).to.not.be.null;

      expect(img.getAttribute('height')).to.equal('400');
      expect(img.getAttribute('width')).to.equal('600');
    });

    it('should render an img with the correct alt tag', () => {
      const img = card.querySelector('img');
      expect(img).to.not.be.null;

      expect(img.getAttribute('alt')).to.equal(MOCK_IMG_ASSET.alt);
    });

    it('should render an img with the correct publicId in src', () => {
      const img = card.querySelector('img');
      expect(img).to.not.be.null;

      expect(img.getAttribute('src')).to.contain(encodeURIComponent(MOCK_IMG_ASSET.publicId));
    });
  });

  describe('Default Video Behavior', () => {
    before(async () => {
      card = document.createElement('bf-media-card');
      card.setAttribute('asset', JSON.stringify(MOCK_VIDEO_ASSET));

      document.body.appendChild(card);
      await card.updateComplete;
    });

    it('should not be null', () => {
      expect(card).not.equal(undefined);
      expect(card.querySelectorAll('video').length).equal(1);
    });

    it('should render a video with the correct publicId in source', () => {
      const videoSource = card.querySelector('source');
      expect(videoSource).to.not.be.null;
      expect(videoSource.getAttribute('src')).to.contain(encodeURIComponent(MOCK_VIDEO_ASSET.publicId));
    });
  });
});