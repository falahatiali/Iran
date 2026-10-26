import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import type { TreeNode } from '../server/api'
import { range } from '../lib/format'

function Node({ n, self = false, role }: { n: TreeNode; self?: boolean; role: string }) {
  const inner = (
    <>
      <span className="block text-[0.7rem] text-ivory/50">{role}</span>
      <span className="block font-bold">{n.name}</span>
      {n.reign && <span className="block text-[0.7rem] text-gold/80 mt-0.5">{range(n.reign[0], n.reign[1])}</span>}
    </>
  )
  const cls = `relative block min-w-24 sm:min-w-32 min-h-11 rounded-xl px-3 sm:px-4 py-3 text-center text-xs sm:text-sm transition-all ${self ? 'bg-gradient-to-b from-gold/30 to-gold/10 border-2 border-gold shadow-[0_0_30px_-5px_#d9b45a]' : n.isRuler ? 'glass hover:border-gold hover:-translate-y-1' : 'border border-dashed border-ivory/25 bg-ivory/5'}`
  return (
    <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
      {n.id && !self ? <Link to="/king/$slug" params={{ slug: n.id }} className={cls}>{inner}</Link> : <div className={cls} aria-current={self ? 'true' : undefined}>{inner}</div>}
    </motion.div>
  )
}

const Row = ({ children }: { children: React.ReactNode }) => <div className="flex flex-wrap justify-center gap-3">{children}</div>
const Stem = () => <div className="mx-auto h-8 w-px bg-gradient-to-b from-gold/70 to-gold/20" aria-hidden="true" />

export function FamilyTree(p: {
  self: TreeNode; father: TreeNode | null; grandfather: TreeNode | null; mother: string | null; spouses: string[]
  siblings: TreeNode[]; children: TreeNode[]; grandchildren: TreeNode[]
}) {
  return (
    <section aria-labelledby="tree-h" className="glass girih-bg rounded-3xl p-6 md:p-10">
      <h2 id="tree-h" className="text-2xl font-bold text-gold mb-2">شجره‌نامه</h2>
      <p className="text-sm text-ivory/55 mb-8">گره‌های طلایی پادشاهان این مجموعه‌اند و با کلیک به صفحه‌ی آنان می‌روید؛ گره‌های خط‌چین خویشاوندان غیرفرمانروا.</p>
      <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
        <div className="min-w-[18rem] inline-block min-w-full">
        {p.grandfather && (<><Row><Node n={p.grandfather} role="پدربزرگ" /></Row><Stem /></>)}
        {(p.father || p.mother) && (
          <><Row>
            {p.father && <Node n={p.father} role="پدر" />}
            {p.mother && <Node n={{ id: null, name: p.mother, isRuler: false }} role="مادر" />}
          </Row><Stem /></>
        )}
        <Row>
          {p.siblings.map((s) => <Node key={s.id ?? s.name} n={s} role="برادر/خواهر" />)}
          <Node n={p.self} self role="فرمانروا" />
          {p.spouses.map((s) => <Node key={s} n={{ id: null, name: s, isRuler: false }} role="همسر" />)}
        </Row>
        {p.children.length > 0 && (<><Stem /><Row>{p.children.map((c) => <Node key={c.id ?? c.name} n={c} role="فرزند" />)}</Row></>)}
        {p.grandchildren.length > 0 && (<><Stem /><Row>{p.grandchildren.map((c) => <Node key={c.id ?? c.name} n={c} role="نوه" />)}</Row></>)}
        </div>
      </div>
    </section>
  )
}
