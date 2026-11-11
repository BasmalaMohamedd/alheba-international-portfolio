import { SteelProduct } from "../types/SteelProduct";

export const steelProducts: SteelProduct[] = [
  {
    id: 'rebar',
    name: 'Rebar Steel',
    categoryLabel: 'Long Products',
    hsCode: '72143000', //[cite: 7]
    description: 'Deformed steel bars manufactured for concrete reinforcement and structural engineering applications.',
    imagePath: '/steel/rebar-steel.png',
    highlights: [
      'Size Range: 6 mm to 32 mm diameters[cite: 9, 12]',
      'Standards: ASTM A615 (Gr 40/60), BS 4449 (1997/2005), GCC/ISO 6935-2[cite: 11]',
      'Standard Lengths: 6m, 12m, and 13m bars[cite: 12]',
      'High strength, ductility, and weldability via quenching process[cite: 9, 10]'
    ]
  },
  {
    id: 'billet',
    name: 'Billet Steel',
    categoryLabel: 'Semi-Finished',
    hsCode: '72071920', //[cite: 15]
    description: 'Square semi-finished steel blocks used as primary feedstock for rerolling into long products.',
    imagePath: '/steel/billet-steel.png',
    highlights: [
      'Cross-Sections: 130x130 mm and 150x150 mm[cite: 18]',
      'Length Range: 3.8m up to 14m (±50mm tolerance)[cite: 18]',
      'Carbon Content: 0.40% to 0.93% (Max limits for Si, Mn, P, S)[cite: 18]',
      'Strict squareness, straightness, and corner radius tolerances[cite: 18]'
    ]
  },
  {
    id: 'railway',
    name: 'Railway Steel',
    categoryLabel: 'Long Products',
    hsCode: '73021000', //[cite: 21]
    description: 'Heavy structural steel rail profiles manufactured for railway networks and industrial tracks.',
    imagePath: '/steel/railway-steel.png',
    highlights: [
      'Engineered for heavy axle-load rail networks[cite: 22]',
      'Specialized profile geometry and high fatigue resistance',
      'Suitable for national transit and industrial crane lines[cite: 22]'
    ]
  },
  {
    id: 'hrc',
    name: 'Hot Rolled Steel Coil (HRC)',
    categoryLabel: 'Flat Products',
    hsCode: '7225', //[cite: 25]
    description: 'Flat steel rolled at high temperatures, supplied in coils or heavy plates for industrial fabrication.',
    imagePath: '/steel/hot-rolled-steel-coil.png',
    highlights: [
      'Supplied in continuous coils and cut-to-length stacked sheets[cite: 26]',
      'Ideal for heavy structural framing, pipes, and pressure vessels[cite: 26]',
      'High formability and structural toughness'
    ]
  },
  {
    id: 'crc',
    name: 'Cold Rolled Steel Coil (CRC)',
    categoryLabel: 'Flat Products',
    hsCode: '72262021', //[cite: 29]
    description: 'Precision ambient-rolled flat steel delivering superior surface finish and tight dimensional tolerances.',
    imagePath: '/steel/cold-rolled-steel-coil.png',
    highlights: [
      'Exceptional surface finish ready for painting and coating[cite: 30]',
      'Enhanced mechanical strength and uniform thickness[cite: 30]',
      'Used in automotive panels, home appliances, and light framing[cite: 30]'
    ]
  },
  {
    id: 'galvanized',
    name: 'Galvanized Steel Coil',
    categoryLabel: 'Flat Products',
    hsCode: '7212', //[cite: 33]
    description: 'Zinc-coated steel coils offering ultimate resistance against atmospheric and marine oxidation.',
    imagePath: '/steel/galvanized-steel-coil.png',
    highlights: [
      'Protective hot-dip zinc coating layer[cite: 33, 34]',
      'Superior anti-corrosion durability for outdoor and humid environments[cite: 33, 34]',
      'Widely used in roofing sheets, HVAC ductwork, and panels[cite: 34]'
    ]
  },
  {
    id: 'scrap',
    name: 'Steel Scrap',
    categoryLabel: 'Recycling',
    hsCode: 'Raw Material',
    description: 'Sorted heavy industrial steel scrap utilized as direct melting feedstock for electric arc furnaces.',
    imagePath: '/steel/scrap.png',
    highlights: [
      'Primary furnace feedstock for steel mills and foundries[cite: 36]',
      'Sorted structural scrap elements for efficient smelting operations'
    ]
  }
];