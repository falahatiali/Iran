import type { EventType } from '../data/types'
const icons: Record<EventType, string> = { founding: '🏛', battle: '⚔', treaty: '📜', reform: '⚖', culture: '✒', fall: '🜂', other: '◆' }
export const EventIcon = ({ type }: { type: EventType }) => <span aria-hidden="true">{icons[type]}</span>
