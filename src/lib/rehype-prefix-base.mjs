// Pages CMS inserts uploaded images as "/images/…". When the site lives under a
// sub-path (https://name.github.io/repo/), those links need the sub-path in front.
export function prefixBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const walk = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const attr of ['src', 'href']) {
          const value = node.properties[attr];
          if (typeof value === 'string' && value.startsWith('/images/')) {
            node.properties[attr] = prefix + value;
          }
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
