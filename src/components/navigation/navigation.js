export default class Navigation extends HTMLElement {
  constructor() {
    super();
    this.navLinks = [
      {
        name: 'Home',
        url: '/'
      }, {
        name: 'About',
        url: '/about/'
      }, {
        name: 'Lineup',
        url: '/lineup/'
      }, {
        name: 'Tickets',
        url: '/tickets/'
      }, {
        name: 'FAQ',
        url: '/faq/'
      }, {
        name: 'Contact',
        url: '/contact/'
      }
    ];
  }

  connectedCallback() {
    const { navLinks } = this;

    if (this.innerHTML !== '') {
      // if already server-rendered, all we need to do is highlight the active link
      Array.from(this.querySelectorAll('a')).forEach(link => {
        const path = globalThis.location.pathname;
        const isCurrentLink = link.getAttribute('href').replace(window.location.origin, '') === path;

        link.style.color = isCurrentLink ? 'var(--color-tertiary)' : 'var(--color-white)';
      });
    } else {
      this.innerHTML = `
        <nav class="bg-primary font-secondary w-1/2 lg:w-full">
          <ul class="text-white text-center">
          ${
            navLinks.map((link) => {
              const { name, url } = link;
              const path = typeof globalThis.location === 'undefined' ? null : globalThis.location.pathname;
              const activePath = path === url;

              return `
                <li class="m-2 md:m-4 text-center text-3xl inline-block w-1/4 lg:w-1/12 lg:text-4xl">
                  <a
                    class="nav-link ${activePath ? 'text-tertiary' : 'text-white'} hover:text-tertiary"
                    href="${url}"
                    title="Visit the ${name} page"
                  >
                  ${name}
                  </a>
                </li>
              `;
            }).join('')
          }
          </ul>
        </nav>
      `;
    }
  }
}

customElements.define('bf-navigation', Navigation);