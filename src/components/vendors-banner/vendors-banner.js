export default class VendorsBanner extends HTMLElement {
  constructor() {
    super();
    this.vendors = [{
      name: 'Boru',
      logo: '/assets/images/boru.gif',
      link: 'https://www.borunoodlebar.com'
    }];
  }

  connectedCallback() {
    const vendorsListHtml = this.vendors.map((vendor) => {
      const { name, logo, link } = vendor;

      return `
        <li class="text-center">
          <a href="${link}" title="${name} website">
            <img class="inline-block w-60" src="${logo}" alt="${name} logo"/>
          </a>
        </li>
      `;
    }).join('');

    this.innerHTML = `
      <div>
        <h1
          class="text-center text-5xl text-accent font-secondary underline"
        >
          Vendors
        </h1>

        <ul class="m-4 flex justify-center flex-wrap">
          ${vendorsListHtml}
        </ul>
      </div>
    `;
  }
}

customElements.define('bf-vendors-banner', VendorsBanner);