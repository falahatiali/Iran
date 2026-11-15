/** The furniture of each shelf: plain spines, stacks and objects around the named books.
 * Pure presentation, taken from the approved mockup; the named books come from the registry
 * and are placed where the 'books' slot is. `wide` items are dropped on phones. */

export type DecorItem =
  | { kind: 'deco'; c: string; w: number; h: number; wide?: boolean }
  | { kind: 'stack'; items: readonly { c: string; w: number }[] }
  | { kind: 'obj'; name: 'astrolabe' | 'vase' }
  | { kind: 'gap' }
  | { kind: 'books' }

const d = (c: string, w: number, h: number, wide = true): DecorItem => ({ kind: 'deco', c, w, h, wide })

export const SHELF_DECOR: Record<1 | 2, readonly DecorItem[]> = {
  1: [
    { kind: 'stack', items: [{ c: '#3b2a4a', w: 84 }, { c: '#5a1b1b', w: 92 }, { c: '#20384a', w: 80 }] },
    d('#3e1b20', 33, 146, false), d('#2a2a14', 36, 170, false), d('#1f2f4f', 26, 144), d('#2c3a2a', 36, 175), d('#4a2a14', 40, 167),
    { kind: 'books' },
    { kind: 'gap' },
    d('#1f2f4f', 38, 162), d('#3e1b20', 30, 146),
    { kind: 'obj', name: 'astrolabe' },
    d('#4b3a1a', 25, 154), d('#3a1a2a', 35, 157), d('#1f2f4f', 27, 156),
    { kind: 'stack', items: [{ c: '#5a1b1b', w: 70 }, { c: '#20384a', w: 80 }, { c: '#3b2a4a', w: 74 }, { c: '#4a3a1a', w: 66 }] },
    d('#3e1b20', 24, 156), d('#4b3a1a', 30, 150, false), d('#4b3a1a', 33, 163, false),
  ],
  2: [
    d('#4a2a14', 34, 164, false), d('#3a1a2a', 31, 151, false), d('#3e1b20', 39, 157), d('#4a2a14', 33, 140), d('#4b3a1a', 33, 172),
    { kind: 'obj', name: 'vase' },
    { kind: 'books' },
    { kind: 'gap' },
    d('#3a2a14', 42, 170), d('#14303a', 34, 155), d('#3e1b20', 37, 167), d('#203a3a', 33, 167), d('#5a3a1a', 29, 154, false), d('#4b3a1a', 32, 142, false),
    { kind: 'stack', items: [{ c: '#20384a', w: 88 }, { c: '#4a3a1a', w: 80 }] },
  ],
}
