'use client'
import { css } from '@styled-system/css'
import Card, { CollapsibleCard } from '@/components/card'

export default function Home() {
  return (
    <div>
      <CollapsibleCard title="Pec deck" className={css({ m: 4 })}>
        test
      </CollapsibleCard>
      <CollapsibleCard title="Pec deck" className={css({ m: 4 })}>
        test
      </CollapsibleCard>
      <Card
        title={<>Pec deck</>}
        action={<>hi</>}
        titleOnClick={() => {}}
        actionOnClick={() => {}}
        className={css({ m: 4 })}
      >
        test
      </Card>
      <Card
        title="Pec deck"
        action={<>hi</>}
        titleOnClick={() => {}}
        actionOnClick={() => {}}
        className={css({ m: 4 })}
      >
        test
      </Card>
    </div>
  )
}
