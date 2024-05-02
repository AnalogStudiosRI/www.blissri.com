export default class MediaCard extends HTMLElement {
  constructor() {
    super();

    // would be nice to make this a private static member, e.g. #
    this.CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dmswtygse/';
  }

  async connectedCallback() {
    const asset = JSON.parse(this.getAttribute('asset'));
    const { alt = '', format, height, width, publicId, resourceType } = asset;
    const cloudinaryAssetUrl = `${this.CLOUDINARY_BASE_URL}${resourceType}/upload/c_scale,h_400/`;
    let tag = '';

    switch (resourceType) {

      case 'image':
        tag = `
          <img
            height="${height}"
            width="${width}"
            src="${cloudinaryAssetUrl}f_auto/${encodeURIComponent(publicId)}"
            alt="${alt}"
            loading="lazy"
          />
        `;
        break;
      case 'video':
        tag = `
          <video
            controls
            loading="lazy"
          >
            <source src="${cloudinaryAssetUrl}f_mp4/${encodeURIComponent(publicId)}" type="video/mp4" />
          </video>
        `;
        break;
      default:
        console.debug('Unsupported format detected => ', { format, publicId });

    }

    this.innerHTML = tag;
  }
}

customElements.define('app-media-card', MediaCard);