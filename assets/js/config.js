// Central place for external links and site identity.
// Project URLs come from each project's own metadata (plugin.yml, changelog, README).
// Leave a value empty and the related link stays hidden, so no invented or broken
// URL is ever published.

export const SITE = {
  name: 'hafiy_dev',
  // Cloudflare Pages production origin. Used for canonical and og:url tags.
  // Leave empty to omit them.
  url: 'https://hafiy.pages.dev',
  github: '',
  projects: {
    sentientmobs: '',
    spillguard: '',
    dependencymanager: 'https://github.com/hafiy-dev/DependencyManager',
    timbr: 'https://modrinth.com/plugin/LlEg5nIE'
  }
};
