import { getAssetsByFolder } from '../../services/cloudinary-service.js';
import '../../components/media-card/media-card.js';
import '../../components/photo-gallery/photo-gallery.js';

export default class PhotoPage extends HTMLElement {
  async connectedCallback() {
    const assets = await getAssetsByFolder('Blissfest 2023');

    // TODO pass photos
    this.innerHTML = `
      <h1 class="font-secondary text-center text-primary text-5xl">
        Blissfest 2023
      </h1>

      <bf-photo-gallery images='${JSON.stringify(assets)}'></bf-photo-gallery>
    `;
  }
}