import { getAssetsByFolder } from '../../services/cloudinary-service.js';
import '../../components/media-card/media-card.js';

// masonry layout curtesy of
// https://flowbite.com/docs/components/gallery/
export default class PhotoPage extends HTMLElement {
  async connectedCallback() {
    const STACK_HEIGHT = 3;
    const assets = await getAssetsByFolder('Blissfest 2023');

    this.innerHTML = `
      <h1 class="font-secondary text-center text-primary text-5xl">
        Blissfest 2023
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${
          assets.map((asset, idx) => {
            const isStartOfGroup = idx % STACK_HEIGHT === 0;
            const isEndOfGroup = (idx + 1) % STACK_HEIGHT === 0 && idx !== 0 || idx + 1 === assets.length;

            return `
              ${isStartOfGroup ? '<div class="grid gap-4">' : ''}

              <div>
                <app-media-card 
                  class="h-auto max-w-full rounded-lg"
                  asset='${JSON.stringify({ ...asset, alt: 'Blissfest 2023' }).replace(/'/g, '\\"')}'
                /></app-media-card>
              </div>

              ${isEndOfGroup ? '</div>' : ''}
            `;
          }).join('')
        }
      </div>
     `;
  }
}