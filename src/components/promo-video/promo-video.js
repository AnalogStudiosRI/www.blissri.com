export default class PromoVideo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <iframe
        class="w-full aspect-video rounded-2xl drop-shadow-2xl"
        src="https://www.youtube.com/embed/-zazqdr-g6A"
        title="BlissRI Promotional Video"
        allowfullscreen
        loading="lazy"
      ></iframe>
    `;
  }
}

customElements.define('bf-promo-video', PromoVideo);