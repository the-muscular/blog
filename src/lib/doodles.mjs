// The cover illustration library: thick navy outlines, flat palette fills, 3–5 shapes each.
// To add a doodle: add it to `doodles`, list its key in `doodleGroups`, then run `npm run cms-config`.

const S = 'style="fill:none;stroke:var(--on-pop);stroke-width:3;stroke-linecap:round;stroke-linejoin:round"';
const f = c => `style="fill:var(--${c})"`;
const fs = c => `style="fill:var(--${c});stroke:var(--on-pop);stroke-width:3;stroke-linejoin:round"`;
const svg = (bg, inner) => `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="200" ${f(bg)}/>${inner}</svg>`;

export const doodles = {
  // Everyday
  sun:      { name: 'Sun', d: `<circle cx="160" cy="112" r="40" ${fs('apricot')}/><path d="M160 46v-16M106 66l-12-12M214 66l12-12M86 112h-18M234 112h18" ${S}/><path d="M30 166q20-10 40 0t40 0 40 0 40 0 40 0 40 0 40 0" ${S}/>` },
  coffee:   { name: 'Coffee', d: `<path d="M140 62c-8-10 8-16 0-28M170 62c-8-10 8-16 0-28" ${S}/><path d="M116 80h84v46a30 30 0 0 1-30 30h-24a30 30 0 0 1-30-30z" ${fs('paper')}/><path d="M200 92h10a16 16 0 0 1 0 32h-10" ${S}/><rect x="96" y="156" width="124" height="10" rx="5" ${fs('cherry')}/>` },
  plant:    { name: 'Plant', d: `<path d="M160 124V70" ${S}/><path d="M160 112c-6-28-26-40-46-42 2 24 18 40 46 42z" ${fs('clover')}/><path d="M160 96c6-26 24-36 44-38-2 22-18 36-44 38z" ${fs('matcha')}/><path d="M124 124h72l-10 48h-52z" ${fs('apricot')}/>` },
  bowl:     { name: 'Bowl', d: `<circle cx="262" cy="46" r="22" ${f('butter')}/><path d="M128 70c-8-10 8-16 0-28M160 66c-8-10 8-16 0-28M192 70c-8-10 8-16 0-28" ${S}/><path d="M86 96h148a74 74 0 0 1-148 0z" ${fs('cherry')}/><path d="M110 112h100" ${S}/><path d="M200 60l40 52M214 56l38 50" ${S}/>` },
  // Likes
  heart:    { name: 'Heart', d: `<path d="M160 162C108 126 98 96 118 78c15-12 33-6 42 10 9-16 27-22 42-10 20 18 10 48-42 84z" ${fs('cherry')}/><path d="M232 52v20M222 62h20M86 128v14M79 135h14" ${S}/>` },
  star:     { name: 'Star', d: `<path d="M160 50l15 34 37 3-28 24 9 37-33-20-33 20 9-37-28-24 37-3z" ${fs('butter')}/><circle cx="244" cy="146" r="8" ${f('cherry')}/><path d="M84 66v16M76 74h16" ${S}/>` },
  icecream: { name: 'Ice cream', d: `<path d="M134 112l26 64 26-64z" ${fs('apricot')}/><path d="M146 126l20 22M162 116l16 18" ${S}/><circle cx="146" cy="102" r="20" ${fs('slipper')}/><circle cx="174" cy="102" r="20" ${fs('paper')}/><circle cx="160" cy="76" r="20" ${fs('clover')}/>` },
  camera:   { name: 'Camera', d: `<path d="M134 82l10-16h32l10 16" ${fs('paper')}/><rect x="96" y="82" width="128" height="80" rx="14" ${fs('paper')}/><circle cx="160" cy="122" r="26" ${fs('attic')}/><circle cx="160" cy="122" r="9" ${f('on-pop')}/><circle cx="204" cy="98" r="5" ${fs('butter')}/>` },
  book:     { name: 'Book', d: `<path d="M160 64c-26-14-56-14-80-6v96c24-8 54-8 80 6z" ${fs('paper')}/><path d="M160 64c26-14 56-14 80-6v96c-24-8-54-8-80 6z" ${fs('slipper')}/><path d="M96 84c16-4 34-4 48 2M96 104c16-4 34-4 48 2M176 86c14-6 32-6 48-2" ${S}/><circle cx="266" cy="44" r="10" ${f('cherry')}/>` },
  // Travel
  plane:    { name: 'Plane', d: `<path d="M30 74q24-14 48 0t48 0" style="fill:none;stroke:var(--on-pop);stroke-width:3;stroke-linecap:round;stroke-dasharray:2 10"/><path d="M156 116l-30 40h20l40-38z" ${fs('cherry')}/><path d="M92 118c24-14 108-20 142-16 14 2 14 16 0 18-34 6-114 10-142-2z" ${fs('paper')}/><path d="M98 118l-12-28h14l20 24z" ${fs('cherry')}/><circle cx="182" cy="110" r="3" ${f('on-pop')}/><circle cx="198" cy="109" r="3" ${f('on-pop')}/><circle cx="214" cy="108" r="3" ${f('on-pop')}/>` },
  suitcase: { name: 'Suitcase', d: `<path d="M140 84V68h40v16" ${S}/><rect x="104" y="84" width="112" height="80" rx="12" ${fs('apricot')}/><path d="M136 84v80M184 84v80" ${S}/><circle cx="124" cy="172" r="7" ${fs('paper')}/><circle cx="196" cy="172" r="7" ${fs('paper')}/>` },
  hills:    { name: 'Hills', d: `<circle cx="232" cy="62" r="24" ${f('apricot')}/><path d="M20 180l80-100 70 100z" ${fs('matcha')}/><path d="M120 180l80-80 100 80z" ${fs('clover')}/><path d="M86 98l14-18 14 18" ${S}/>` },
  pin:      { name: 'Map pin', d: `<path d="M96 172h128" ${S}/><path d="M160 168c-30-38-40-56-40-72a40 40 0 0 1 80 0c0 16-10 34-40 72z" ${fs('cherry')}/><circle cx="160" cy="96" r="14" ${fs('paper')}/><path d="M232 60l8 8 16-18" ${S}/>` },
  beach:    { name: 'Beach', d: `<circle cx="252" cy="50" r="18" ${f('apricot')}/><path d="M30 172q130-26 260 0v40H30z" ${fs('butter')}/><path d="M160 110v62" ${S}/><path d="M100 110a60 50 0 0 1 120 0q-15-10-30 0-15-10-30 0-15-10-30 0-15-10-30 0z" ${fs('cherry')}/>` },
  // Music
  vinyl:    { name: 'Record', d: `<circle cx="160" cy="104" r="64" ${f('on-pop')}/><circle cx="160" cy="104" r="48" style="fill:none;stroke:var(--paper);stroke-width:2;opacity:.45"/><circle cx="160" cy="104" r="36" style="fill:none;stroke:var(--paper);stroke-width:2;opacity:.45"/><circle cx="160" cy="104" r="20" ${fs('cherry')}/><circle cx="160" cy="104" r="4" ${f('paper')}/>` },
  headphones:{ name: 'Headphones', d: `<path d="M110 126v-18a50 50 0 0 1 100 0v18" style="fill:none;stroke:var(--on-pop);stroke-width:8;stroke-linecap:round"/><rect x="94" y="118" width="30" height="48" rx="12" ${fs('cherry')}/><rect x="196" y="118" width="30" height="48" rx="12" ${fs('cherry')}/><path d="M246 70c10 8 10 24 0 32M258 60c16 14 16 38 0 52" ${S}/>` },
  notes:    { name: 'Music notes', d: `<path d="M136 142V74M196 130V62" ${S}/><path d="M136 70l60-12v14l-60 12z" ${fs('on-pop')}/><ellipse cx="124" cy="144" rx="15" ry="11" ${fs('butter')}/><ellipse cx="184" cy="132" rx="15" ry="11" ${fs('butter')}/><path d="M240 80v40" ${S}/><ellipse cx="232" cy="122" rx="10" ry="7" ${fs('cherry')}/>` },
  cassette: { name: 'Cassette', d: `<rect x="92" y="66" width="136" height="92" rx="10" ${fs('paper')}/><rect x="108" y="80" width="104" height="38" rx="5" ${fs('butter')}/><circle cx="136" cy="99" r="10" ${fs('paper')}/><circle cx="184" cy="99" r="10" ${fs('paper')}/><path d="M120 158l8-18h64l8 18" ${S}/>` },
  // Movies
  clapper:  { name: 'Clapper', d: `<rect x="100" y="98" width="120" height="68" rx="6" ${fs('paper')}/><g transform="rotate(-14 100 94)"><rect x="100" y="72" width="120" height="22" rx="4" ${fs('butter')}/><path d="M122 72l-10 22M152 72l-10 22M182 72l-10 22M212 72l-10 22" ${S}/></g><path d="M116 120h52M116 140h80" ${S}/>` },
  popcorn:  { name: 'Popcorn', d: `<circle cx="134" cy="94" r="15" ${fs('butter')}/><circle cx="186" cy="94" r="15" ${fs('butter')}/><circle cx="148" cy="78" r="15" ${fs('paper')}/><circle cx="172" cy="78" r="15" ${fs('butter')}/><path d="M120 98h80l-12 72h-56z" ${fs('paper')}/><path d="M146 100l4 68M174 100l-4 68" style="fill:none;stroke:var(--cherry);stroke-width:9"/><path d="M120 98h80l-12 72h-56z" ${S}/>` },
  ticket:   { name: 'Ticket', d: `<g transform="rotate(-8 160 110)"><path d="M92 76h136v22a12 12 0 0 0 0 24v22H92v-22a12 12 0 0 0 0-24z" ${fs('apricot')}/><path d="M196 80v60" style="fill:none;stroke:var(--on-pop);stroke-width:3;stroke-dasharray:4 7;stroke-linecap:round"/><path d="M116 102h56M116 120h40" ${S}/></g>` },
  tv:       { name: 'TV', d: `<path d="M140 64l20 18 20-18" ${S}/><rect x="96" y="82" width="128" height="84" rx="14" ${fs('attic')}/><rect x="110" y="96" width="78" height="56" rx="8" ${fs('paper')}/><circle cx="206" cy="108" r="5" ${f('on-pop')}/><circle cx="206" cy="128" r="5" ${f('on-pop')}/>` },
  // Family
  family:   { name: 'Family', d: `<path d="M94 166a26 32 0 0 1 52 0z" ${fs('butter')}/><circle cx="120" cy="96" r="17" ${fs('apricot')}/><path d="M174 166a26 32 0 0 1 52 0z" ${fs('clover')}/><circle cx="200" cy="96" r="17" ${fs('apricot')}/><path d="M144 166a16 22 0 0 1 32 0z" ${fs('cherry')}/><circle cx="160" cy="124" r="11" ${fs('apricot')}/>` },
  house:    { name: 'House', d: `<rect x="112" y="98" width="96" height="68" ${fs('paper')}/><path d="M100 102l60-50 60 50z" ${fs('cherry')}/><rect x="148" y="128" width="24" height="38" ${fs('butter')}/><rect x="122" y="112" width="18" height="18" ${fs('attic')}/><path d="M246 166V120M246 132l-12-10M246 144l12-10" ${S}/>` },
  cake:     { name: 'Cake', d: `<path d="M160 70c-8-8-6-18 0-24 6 6 8 16 0 24z" ${fs('apricot')}/><rect x="155" y="74" width="10" height="30" rx="3" ${fs('paper')}/><rect x="104" y="104" width="112" height="60" rx="10" ${fs('slipper')}/><path d="M104 122q14 12 28 0t28 0 28 0 28 0" ${S}/><circle cx="132" cy="146" r="4" ${f('cherry')}/><circle cx="188" cy="146" r="4" ${f('cherry')}/>` },
  // Likes: fashion
  dress:    { name: 'Dress', d: `<path d="M146 60l-6-16M174 60l6-16" ${S}/><path d="M140 60h40l-6 32 36 76H110l36-76z" ${fs('cherry')}/><path d="M146 92h28" ${S}/><circle cx="140" cy="140" r="4" ${f('paper')}/><circle cx="164" cy="124" r="4" ${f('paper')}/><circle cx="182" cy="150" r="4" ${f('paper')}/>` },
  handbag:  { name: 'Handbag', d: `<path d="M134 94V80a26 26 0 0 1 52 0v14" style="fill:none;stroke:var(--on-pop);stroke-width:6;stroke-linecap:round"/><path d="M104 94h112l-10 72h-92z" ${fs('apricot')}/><rect x="150" y="106" width="20" height="14" rx="3" ${fs('butter')}/><path d="M236 60v16M228 68h16" ${S}/>` },
  sunglasses:{ name: 'Sunglasses', d: `<path d="M92 104l-16-10M228 104l16-10" ${S}/><rect x="92" y="94" width="62" height="46" rx="20" ${fs('on-pop')}/><rect x="166" y="94" width="62" height="46" rx="20" ${fs('on-pop')}/><path d="M154 106q6-8 12 0" ${S}/><path d="M106 108l14-8M180 108l14-8" style="fill:none;stroke:var(--paper);stroke-width:3;stroke-linecap:round"/>` },
  // Likes: courses
  gradcap:  { name: 'Grad cap', d: `<path d="M122 106v30q38 22 76 0v-30" ${fs('wisteria')}/><path d="M160 64l82 30-82 30-82-30z" ${fs('on-pop')}/><path d="M238 96v38" ${S}/><circle cx="238" cy="140" r="7" ${fs('butter')}/>` },
  pencil:   { name: 'Pencil', d: `<g transform="rotate(-18 160 110)"><rect x="80" y="96" width="18" height="30" rx="4" ${fs('slipper')}/><rect x="98" y="96" width="110" height="30" ${fs('butter')}/><path d="M208 96l32 15-32 15z" ${fs('latte')}/><path d="M231 107l9 4-9 4z" ${f('on-pop')}/></g><path d="M90 170q20-10 40 0t40 0 40 0" ${S}/>` },
  laptop:   { name: 'Laptop', d: `<rect x="106" y="62" width="108" height="74" rx="8" ${fs('paper')}/><rect x="116" y="72" width="88" height="54" rx="4" ${fs('attic')}/><path d="M152 88l20 11-20 11z" ${fs('paper')}/><path d="M86 136h148l-10 22H96z" ${fs('paper')}/>` },
  // Likes: toys
  teddy:    { name: 'Teddy', d: `<ellipse cx="160" cy="146" rx="36" ry="28" ${fs('apricot')}/><circle cx="134" cy="70" r="13" ${fs('apricot')}/><circle cx="186" cy="70" r="13" ${fs('apricot')}/><circle cx="160" cy="94" r="30" ${fs('apricot')}/><ellipse cx="160" cy="105" rx="12" ry="9" ${fs('latte')}/><circle cx="148" cy="88" r="3.5" ${f('on-pop')}/><circle cx="172" cy="88" r="3.5" ${f('on-pop')}/><circle cx="160" cy="102" r="3" ${f('on-pop')}/>` },
  blocks:   { name: 'Blocks', d: `<rect x="102" y="116" width="54" height="54" rx="6" ${fs('cherry')}/><rect x="164" y="116" width="54" height="54" rx="6" ${fs('attic')}/><rect x="133" y="58" width="54" height="54" rx="6" transform="rotate(-6 160 85)" ${fs('butter')}/><text x="129" y="153" text-anchor="middle" style="fill:var(--paper);font:32px Georgia,serif">A</text><text x="191" y="153" text-anchor="middle" style="fill:var(--on-pop);font:32px Georgia,serif">B</text><text x="160" y="96" text-anchor="middle" transform="rotate(-6 160 85)" style="fill:var(--on-pop);font:32px Georgia,serif">C</text>` },
  duck:     { name: 'Rubber duck', d: `<path d="M60 176q25-10 50 0t50 0 50 0 50 0 50 0" ${S}/><path d="M112 132c0-22 26-30 48-22 2-32 46-36 54-8 4 14-4 22-12 26 18 6 18 40-24 44h-36c-20 0-30-16-30-40z" ${fs('butter')}/><path d="M212 94l22 4-20 9z" ${fs('apricot')}/><circle cx="192" cy="92" r="4" ${f('on-pop')}/><path d="M140 136q20 14 40 0" ${S}/>` },
  // Journal
  journal:  { name: 'Journal', d: `<rect x="108" y="56" width="94" height="118" rx="8" ${fs('cherry')}/><path d="M186 56v118" style="fill:none;stroke:var(--paper);stroke-width:4"/><rect x="124" y="80" width="48" height="22" rx="3" ${fs('paper')}/><g transform="rotate(16 228 110)"><rect x="220" y="58" width="16" height="96" rx="6" ${fs('butter')}/><path d="M220 154l8 16 8-16z" ${fs('latte')}/></g>` },
  envelope: { name: 'Letter', d: `<rect x="96" y="72" width="128" height="90" rx="8" ${fs('paper')}/><path d="M100 78l60 46 60-46" ${S}/><rect x="192" y="84" width="22" height="26" rx="2" ${fs('slipper')}/><path d="M160 150c-10-7-12-13-8-17 3-2 6-1 8 2 2-3 5-4 8-2 4 4 2 10-8 17z" ${fs('cherry')}/>` },
  calendar: { name: 'Calendar', d: `<rect x="100" y="70" width="120" height="98" rx="10" ${fs('paper')}/><path d="M100 98V80a10 10 0 0 1 10-10h100a10 10 0 0 1 10 10v18z" ${fs('cherry')}/><path d="M132 60v20M188 60v20" ${S}/><g ${f('on-pop')}><circle cx="124" cy="116" r="4"/><circle cx="148" cy="116" r="4"/><circle cx="172" cy="116" r="4"/><circle cx="196" cy="116" r="4"/><circle cx="124" cy="140" r="4"/><circle cx="148" cy="140" r="4"/><circle cx="196" cy="140" r="4"/></g><circle cx="172" cy="140" r="11" style="fill:none;stroke:var(--cherry);stroke-width:3"/>` },
  // Politics
  ballot:   { name: 'Ballot box', d: `<rect x="138" y="56" width="44" height="58" rx="3" transform="rotate(-6 160 85)" ${fs('paper')}/><path d="M148 82l8 8 16-18" ${S}/><rect x="104" y="104" width="112" height="66" rx="6" ${fs('attic')}/><rect x="132" y="112" width="56" height="6" rx="3" ${f('on-pop')}/><path d="M140 144h40" ${S}/>` },
  megaphone:{ name: 'Megaphone', d: `<path d="M136 124l8 28" ${S}/><path d="M112 98l70-32v88l-70-32z" ${fs('cherry')}/><rect x="96" y="94" width="18" height="32" rx="4" ${fs('paper')}/><path d="M200 86l20-12M204 110h24M200 134l20 12" ${S}/>` },
  newspaper:{ name: 'Newspaper', d: `<rect x="96" y="62" width="128" height="104" rx="6" ${fs('paper')}/><rect x="110" y="76" width="100" height="12" rx="3" ${f('on-pop')}/><rect x="110" y="100" width="44" height="50" rx="4" ${fs('butter')}/><path d="M166 104h44M166 118h44M166 132h44M166 146h28" ${S}/>` },
  speech:   { name: 'Speech bubbles', d: `<path d="M98 66h78a14 14 0 0 1 14 14v30a14 14 0 0 1-14 14h-54l-18 16v-16h-6a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14z" ${fs('paper')}/><path d="M162 104h62a12 12 0 0 1 12 12v28a12 12 0 0 1-12 12h-6v16l-16-16h-40a12 12 0 0 1-12-12v-28a12 12 0 0 1 12-12z" ${fs('butter')}/><path d="M112 94h52M184 130h34" ${S}/>` },
  scales:   { name: 'Scales', d: `<path d="M160 68v92M104 82h112M104 82l-18 40M104 82l18 40M216 82l-18 40M216 82l18 40" ${S}/><path d="M84 122a20 11 0 0 0 40 0z" ${fs('butter')}/><path d="M196 122a20 11 0 0 0 40 0z" ${fs('butter')}/><circle cx="160" cy="64" r="8" ${fs('cherry')}/><path d="M130 168h60l-8-10h-44z" ${fs('on-pop')}/>` }
};

// How the picker groups the library
export const doodleGroups = [
  ['Travel', ['plane', 'suitcase', 'hills', 'pin', 'beach', 'camera']],
  ['Music', ['vinyl', 'headphones', 'notes', 'cassette']],
  ['Movies', ['clapper', 'popcorn', 'ticket', 'tv']],
  ['Family', ['family', 'house', 'cake', 'bowl']],
  ['Likes · fashion', ['dress', 'handbag', 'sunglasses']],
  ['Likes · courses', ['gradcap', 'pencil', 'laptop', 'book']],
  ['Likes · toys', ['teddy', 'blocks', 'duck']],
  ['Likes · everyday', ['heart', 'star', 'icecream', 'coffee', 'plant', 'sun']],
  ['Journal', ['journal', 'envelope', 'calendar']],
  ['Politics', ['ballot', 'megaphone', 'newspaper', 'speech', 'scales']]
];

// The 12 cover colours (CSS variable name, label)
export const colours = [
  ['wisteria', 'Wisteria'], ['milk', 'Milkshake'], ['slipper', 'Ballet slipper'], ['latte', 'Latte'],
  ['seafoam', 'Seafoam'], ['rainy', 'Rainy day'], ['attic', 'Attic window'], ['butter', 'Butter yellow'],
  ['apricot', 'Apricot jam'], ['matcha', 'Matcha'], ['clover', 'Clover'], ['cherry', 'Cherry']
];

// Topics in the order they appear in the filter. `doodle` and `bg` are the default cover.
export const topics = {
  Travel:   { chip: 'rainy',    doodle: 'plane',   bg: 'seafoam' },
  Music:    { chip: 'wisteria', doodle: 'vinyl',   bg: 'wisteria' },
  Movies:   { chip: 'slipper',  doodle: 'popcorn', bg: 'milk' },
  Family:   { chip: 'apricot',  doodle: 'house',   bg: 'butter' },
  Likes:    { chip: 'attic',    doodle: 'heart',   bg: 'slipper' },
  Journal:  { chip: 'matcha',   doodle: 'journal', bg: 'latte' },
  Politics: { chip: 'clover',   doodle: 'ballot',  bg: 'rainy' }
};

export const topicNames = Object.keys(topics);
export const doodleKeys = Object.keys(doodles);
export const colourKeys = colours.map(([key]) => key);

// SVG markup for a cover; unknown or empty values fall back to the topic's default
export function coverSvg({ topic, doodle, colour }) {
  const t = topics[topic] ?? topics.Journal;
  const d = doodles[doodle] ? doodle : t.doodle;
  const bg = colourKeys.includes(colour) ? colour : t.bg;
  return svg(bg, doodles[d].d);
}
