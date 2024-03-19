import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Nice Comment</span>,
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Andrew Hull',
  },
  sidebar: {
    autoCollapse: false,
    // defaultMenuCollapseLevel can be set to Infinity if you want all folders expanded.
    defaultMenuCollapseLevel: Infinity,
  }
}

export default config
