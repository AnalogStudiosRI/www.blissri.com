import { getAssetsByFolder } from '../../services/cloudinary-service.js';

export default class PhotoPage extends HTMLElement {
  async connectedCallback() {
    const assets = await getAssetsByFolder('Blissfest 2023');

    this.innerHTML = `
      <h1 class="font-secondary text-center text-primary text-5xl">
        Blissfest 2023
      </h1>

      ${
        assets.map((asset) => {
          const { format, height, width, publicId, resourceType } = asset;

          if (resourceType === 'image') {
            return `
                <img
                height="${height}"
                width="${width}"
                style="width: 50%; margin: 0 auto; border: 1px dotted black"
                src="https://res.cloudinary.com/dmswtygse/image/upload/c_scale,h_400/f_auto/${publicId}"
                alt="Blissfest 2023"
                loading="lazy"
              />`
            ;
          } else if (resourceType === 'video') {
            return `
              <video
                controls
                style="width: 50%; margin: 0 auto; border: 1px dotted black"
              >
                <source src="https://res.cloudinary.com/dmswtygse/video/upload/f_mp4/${publicId}" type="video/mp4" />
              </video>
            `;
          } else {
            console.debug('Unsupported format detected => ', { format, publicId });
          }
        }).join('')
      }
    `;
  }
}