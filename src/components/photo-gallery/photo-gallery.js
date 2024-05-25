// masonry layout curtesy of
// https://flowbite.com/docs/components/gallery/
export default class PhotoGallery extends HTMLElement {
  async connectedCallback() {
    const STACK_HEIGHT = 3;
    const STACK_WIDTH = 3;
    const images = JSON.parse(this.getAttribute('images') || '[]');
    const stacks = [];
    // 0
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // 1
    // 9 10 11
    // 12 13 14
    // 15 16 17

    // 2
    // 9 10 11
    // 12

    // TODO can we get rid of stackIndex?
    let stackIndex = -1;

    images.forEach((asset, idx) => {
      if (idx === 0 || (idx % (STACK_HEIGHT * STACK_WIDTH) === 0)) {
        stackIndex += 1;
        stacks[stackIndex] = [];
      }

      const stackX = idx % STACK_WIDTH;
      const stackY = Math.floor(idx / STACK_WIDTH) - (STACK_WIDTH * stackIndex);

      if (!stacks[stackIndex][stackY]) {
        stacks[stackIndex][stackY] = [null, null, null];
      }

      stacks[stackIndex][stackY][stackX] = asset;
    });

    let layout = '';

    stacks.forEach((stack) => {
      const groups = Array(STACK_WIDTH).fill('<div class="grid gap-4">');

      stack.forEach((row) => {
        row.forEach((asset, x) => {

          groups[x] += `
            <div>
              <bf-media-card 
                class="h-auto max-w-full rounded-lg"
                asset='${JSON.stringify({ ...asset, alt: 'Blissfest 2023' }).replace(/'/g, '\\"')}'
              /></bf-media-card>
            </div>
          `;
        });
      });

      groups.forEach((group, idx) => {
        groups[idx] += '</div>';
      });

      layout += groups.join('');
    });

    this.innerHTML += `
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${layout}
      </div>
    `;
  }
}

customElements.define('bf-photo-gallery', PhotoGallery);