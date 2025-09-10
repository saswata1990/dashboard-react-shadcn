import React from 'react'
import TopCard from './TopCard'
import { Factory, Hourglass, RectangleHorizontal, Shell } from 'lucide-react'
import { IconTrendingUp } from '@tabler/icons-react'

function TopCardsSection() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t">
            <TopCard 
              description="Mill Yield" 
              style='bg-amber-200'
              icon={<Factory />}
              title="98%"
              
              key={1} />

              <TopCard 
              description="Slabs Rolled" 
              style='bg-green-200'
              icon={<RectangleHorizontal />}
              title="3000 Tonnes"
              
              key={1} />

              <TopCard 
              description="Coils Produced" 
              style='bg-rose-200'
              icon={<Shell />}
              title="2851 Tonnes"
              
              key={1} />

              <TopCard 
              description="Total Mill Delay" 
              style='bg-sky-200'
              icon={<Hourglass />}
              title="230 Mins"
              
              key={1} />
        </div>
    </div>
  )
}

export default TopCardsSection