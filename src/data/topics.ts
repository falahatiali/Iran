/** Topic pages that a timeline event links to, keyed by the event's (Persian) title. */
export interface Topic { path: string; name: string }
const TOPICS: Record<string, Topic> = {
  'نبرد حران (کارهه)': { path: '/battle/carrhae', name: 'نبرد حران' },
}
export const topicForEventTitle = (title: string): Topic | undefined => TOPICS[title]
