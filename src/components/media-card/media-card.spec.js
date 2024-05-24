import { expect } from '@esm-bundle/chai';
import './media-card.js';

describe('Components/Media Card', () => {
  const MOCK_IMG_ASSETS = JSON.stringify({
    alt: "test image",
    format: "jpg",
    height: "400",
    width: "600",
    publicId: "test-image-id",
    resourceType: "image"
  });

  const MOCK_VIDEO_ASSETS = JSON.stringify({
    alt: "test video",
    format: "mp4",
    height: "400",
    width: "600",
    publicId: "example-video-id",
    resourceType: "video"
  });

  let card;

  describe('Default Image Behavior', () => {
    before(async () => {
      card = document.createElement('bf-media-card');
      card.setAttribute('asset', MOCK_IMG_ASSETS);

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
  
      expect(img.getAttribute('alt')).to.equal('test image');
    });
  });

  describe('Default Video Behavior', () => {
    before(async () => {
      card = document.createElement('bf-media-card');
      card.setAttribute('asset', MOCK_VIDEO_ASSETS);

      document.body.appendChild(card);
      await card.updateComplete;
    });

    it('should not be null', () => {
      expect(card).not.equal(undefined);
      expect(card.querySelectorAll('video').length).equal(1);
    });

    it('should render a video with a source', () => {
      const video = card.querySelector('source');
      expect(video).to.not.be.null;
    });
  });

 });