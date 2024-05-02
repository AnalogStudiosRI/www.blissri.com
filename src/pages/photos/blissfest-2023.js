import { getAssetsByFolder } from '../../services/cloudinary-service.js';

// masonry layout curtesy of
// https://flowbite.com/docs/components/gallery/
export default class PhotoPage extends HTMLElement {
  async connectedCallback() {
    const STACK_HEIGHT = 2;
    const assets = await getAssetsByFolder('Blissfest 2023');

    this.innerHTML = `
      <h1 class="font-secondary text-center text-primary text-5xl">
        Blissfest 2023
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${
          assets.map((asset, idx) => {
            const { format, height, width, publicId, resourceType } = asset;
            const isStartOfGroup = idx % STACK_HEIGHT === 0;
            const isEndOfGroup = (idx + 1) % STACK_HEIGHT === 0 && idx !== 0 || idx + 1 === assets.length;

            // console.log({ idx, isStartOfGroup, isEndOfGroup });
            if (resourceType === 'image') {
              return `
                ${isStartOfGroup ? '<div class="grid gap-4">' : ''}
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    height="${height}"
                    width="${width}"
                    src="https://res.cloudinary.com/dmswtygse/image/upload/c_scale,h_400/f_auto/${publicId}"
                    alt="Blissfest 2023"
                    loading="lazy"
                  />
                </div>
                ${isEndOfGroup ? '</div>' : ''}
                `
              ;
            } else if (resourceType === 'video') {
              return `
                ${isStartOfGroup ? '<div class="grid gap-4">' : ''}
                <div>
                  <video
                    controls
                    class="h-auto max-w-full rounded-lg"
                    loading="lazy"
                  >
                    <source src="https://res.cloudinary.com/dmswtygse/video/upload/c_scale,h_400/f_mp4/${publicId}" type="video/mp4" />
                  </video>
                </div>
                ${isEndOfGroup ? '</div>' : ''}
              `;
            } else {
              console.debug('Unsupported format detected => ', { format, publicId });
            }
          }).join('')
        }
      </div>
     `;
  }
}