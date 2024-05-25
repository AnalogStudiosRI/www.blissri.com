import '../../styles/theme.css';
import './media-card.js';
import { MOCK_IMG_ASSET, MOCK_VIDEO_ASSET } from './mock-data.js';

export default {
  title: 'Components/Media Card'
};

const Template = ({ props }) => {
  const { asset } = props;
  return `
    <bf-media-card
     asset='${JSON.stringify(asset)}'
    >
    </bf-media-card>
  `;
};

export const Primary = Template.bind({});

Primary.args = {
  props: {
    asset: MOCK_IMG_ASSET
  }
};

export const Video = Template.bind({});

Video.args = {
  props: {
    asset: MOCK_VIDEO_ASSET
  }
};