import { getAssetsByFolder } from '../../services/cloudinary-service.js';

export default class PhotoPage extends HTMLElement {
  async connectedCallback() {
    const assets = await getAssetsByFolder('Blissfest 2023');

    // asset_id: 'fdcacf3d644a2ea3aafae025c91e8fda',
    // public_id: 'Blissfest 2023/IMG_2172_ku9zvr',
    // format: 'mov',
    // version: 1714068135,
    // resource_type: 'video',
    // type: 'upload',
    // created_at: '2024-04-25T18:02:15Z',
    // bytes: 41276141,
    // width: 1080,
    // height: 1920,
    // folder: 'Blissfest 2023',
    // url: 'http://res.cloudinary.com/dmswtygse/video/upload/v1714068135/Blissfest%202023/IMG_2172_ku9zvr.mov',
    // secure_url: 'https://res.cloudinary.com/dmswtygse/video/upload/v1714068135/Blissfest%202023/IMG_2172_ku9zvr.mov',
    // last_updated: [Object]
    this.innerHTML = `
      <h1 class="font-secondary text-center text-primary text-5xl">
        Blissfest 2023
      </h1>

      ${
        assets.map((asset) => {
          const { url, format } = asset;

          if (format === 'jpg') {
            return `<img style="width: 50%; margin: 0 auto;" src="${url}" alt="Blissfest 2023" loading="lazy" />`;
          } else {
            return `<p style="width: 50%; margin: 0 auto;">TODO => ${format}<p>`;
          }
        }).join('')
      }
    `;
  }
}