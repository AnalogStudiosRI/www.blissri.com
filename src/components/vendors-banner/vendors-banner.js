export default class VendorsBanner extends HTMLElement {
  constructor() {
    super();
    this.vendors = [{
      name: 'Lovewell Farms',
      link: 'https://lovewellfarms.com'
    }, {
      name: 'Erika Flamand',
      link: 'https://www.behance.net/eflamand2ddb'
    }, {
      name: 'Alex Perrine',
      link: 'https://www.bodiesofwaste.com/'
    }, {
      name: 'Ainsley'
    }, {
      name: 'Greg Ferreira'
    }];
  }

  connectedCallback() {
    const vendorsListHtml = this.vendors.map((vendor) => {
      const { name, link } = vendor;
      const contents = `<span class="font-secondary text-2xl lg:text-3xl xl:text-4xl">${name}</span>`;
      const item = !link
        ? contents
        : `
          <a href="${link}" title="${name} website" class="underline">
            ${contents}
          </a>
        `;

      return `
        <li class="text-center">
          ${item}
        </li>
      `;
    }).join('');

    this.innerHTML = `
      <div class="text-center">
        <h2
          class="text-center text-5xl text-accent font-secondary underline mb-6"
        >
          Vendors
        </h2>
        
        <a href="https://www.borunoodlebar.com" title="Boru website" class="inline-block w-2/3 md:align-top md:w-1/4 md:text-left xl:w-1/4">
          <img src="/assets/images/boru.gif" alt="Boru logo" loading="lazy"/>
        </a>

        <div class="md:inline-block md:w-1/4">
          <h3 class="text-2xl text-primary font-secondary mb-2 underline">
            Featuring
          </h3>

          <ul>
            ${vendorsListHtml}
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-vendors-banner', VendorsBanner);