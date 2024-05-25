import '../../styles/theme.css';
import './media-card.js';

const MOCK_IMG_ASSETS = JSON.stringify({
  alt: 'test image',
  format: 'jpg',
  height: '400',
  width: '600',
  publicId: 'test-image-id',
  resourceType: 'image'
});

const MOCK_VIDEO_ASSETS = JSON.stringify({
  alt: 'test video',
  format: 'mp4',
  height: '400',
  width: '600',
  publicId: 'example-video-id',
  resourceType: 'video'
});

export default {
  title: 'Components/Media Card'
};

const Template = ({ props }) => {
  const { assest } = props;
  return `
    <bf-media-card
     assest="${assest}"
    >
    </bf-media-card>
  `;
};

export const Primary = Template.bind({});

Primary.args = {
  props: {
    asset: MOCK_IMG_ASSETS
  }
};

export const Video = Template.bind({});

Video.args = {
  props: {
    asset: MOCK_VIDEO_ASSETS
  }
};