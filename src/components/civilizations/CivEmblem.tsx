import type { EmblemKey } from '../../data/civilizations/types'

/** Line-art emblems drawn for this site (original SVG, no outside artwork), one per civilization card. */
const PATHS: Record<EmblemKey, string> = {
  goat: 'M14 34c2-6 8-9 14-9h6l4-5 3 2-2 5c2 1 3 3 3 5v6M18 34v8M24 34v8M36 37v5M30 20c-2-6-7-9-12-9 4 2 6 5 7 9M34 20c0-6 3-10 8-12-2 4-3 8-4 12M14 34l-3-3',
  wheat: 'M24 44V12M24 18c-4-2-6-6-6-10 4 2 6 6 6 10zm0 0c4-2 6-6 6-10-4 2-6 6-6 10zM24 28c-5-2-8-6-8-11 5 2 8 6 8 11zm0 0c5-2 8-6 8-11-5 2-8 6-8 11zM24 38c-5-2-8-6-8-11 5 2 8 6 8 11zm0 0c5-2 8-6 8-11-5 2-8 6-8 11z',
  pot: 'M17 10h14M19 10c0 4-7 7-7 16 0 9 5 14 12 14s12-5 12-14c0-9-7-12-7-16M14 24h20M15 30l4-3 4 3 4-3 4 3 3-2M20 35h8',
  ziggurat: 'M6 42h36M10 42v-7h28v7M14 35v-7h20v7M18 28v-7h12v7M21 21v-6h6v6M24 15v-5M22 42v-7h4v7',
  tablet: 'M13 8h22v32H13zM17 14h4M23 14l3 2-3 2M29 14h2M17 21l3 3M24 21h7M17 28h5l2 2M27 28h4M17 34h14',
  eye: 'M6 24s7-11 18-11 18 11 18 11-7 11-18 11S6 24 6 24zM24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM24 18v-3M24 33v-3M18 24h-3M33 24h-3',
  snake: 'M12 40c0-6 6-7 12-7s12-1 12-7-6-7-12-7-12-1-12-7 6-7 12-7c4 0 7 1 8 3M33 9l3-1-1 3M14 40h-3',
  flag: 'M14 44V6M14 8h22l-5 7 5 7H14M22 12a3 3 0 1 0 0 .1M28 16h3',
  vessel: 'M16 8h16l-2 6c6 3 8 9 8 15 0 8-6 13-14 13s-14-5-14-13c0-6 2-12 8-15zM12 26h24M14 32c4 2 8-2 10 0s6 2 10 0',
  bowl: 'M6 20h36c0 10-8 18-18 18S6 30 6 20zM14 20c0-4 4-8 10-8s10 4 10 8M18 38l-2 4h16l-2-4M12 26h24',
  horse: 'M14 42l2-10c-2-3-2-6 0-9l8-9 2-6 3 5 6 4-2 4-5-1-2 5c3 2 5 5 5 9v8M20 42v-8M36 24l3 3',
  lion: 'M24 40c-9 0-14-7-14-15S15 10 24 10s14 7 14 15-5 15-14 15zM18 22h2M28 22h2M21 30c2 2 4 2 6 0M24 26v3M10 18l-4-4M38 18l4-4M14 36l-4 4M34 36l4 4',
  fortress: 'M8 42V18h6v4h4v-4h6v4h4v-4h6v4h4v-4h2v24zM20 42v-9a4 4 0 0 1 8 0v9M12 28h4M32 28h4',
  column: 'M14 10h20M16 10c-2 3-2 5 0 6h16c2-1 2-3 0-6M18 16v22M22 16v22M26 16v22M30 16v22M14 38h20M12 42h24',
  chariot: 'M10 34a6 6 0 1 0 12 0 6 6 0 0 0-12 0zM16 34h18l6-12M22 26h12M34 22l6-6 3 1M40 22l3 8',
  seal: 'M16 10h16v28H16zM16 16h16M16 32h16M20 22c2-2 4-2 6 0s4 2 6 0M20 27h8',
  bull: 'M12 18c-4 0-6-4-6-8 3 3 6 3 9 2M36 18c4 0 6-4 6-8-3 3-6 3-9 2M14 16h20c2 4 2 10-2 14l-2 10H18l-2-10c-4-4-4-10-2-14zM20 34h8M20 24h2M26 24h2',
  griffin: 'M10 40l6-12c-3-4-2-10 3-13l4-5 2 4 6-2-3 6c4 2 6 6 5 10l8-4-4 8-6 1-2 7M18 22h2M16 40h6',
  sun: 'M24 32a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M11 37l4-4M33 15l4-4',
}

export function CivEmblem({ name, className, title }: { name: EmblemKey; className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1" strokeDasharray="2 3" />
      <path d={PATHS[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
