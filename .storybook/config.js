import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);

// module.exports = ['@storybook/addon-docs/react/preset'];