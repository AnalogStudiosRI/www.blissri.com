import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginMarkdown } from '@greenwood/plugin-markdown';

export default {
  prerender: true,
  plugins: [
    greenwoodPluginMarkdown({
      plugins: [
        "remark-gfm"
      ]
    }),
    greenwoodPluginPostCss({
      extendConfig: true
    })
  ],
};