
import TopCard from './TopCard'
import { Factory, Hourglass, RectangleHorizontal, Shell } from 'lucide-react'

interface TopCardsSectionProps {
  millYield:number;
  slabRolledTonnes:number;
  coilsProducedTonnes:number;
  delay:number;
}

function TopCardsSection({millYield,slabRolledTonnes,coilsProducedTonnes,delay}:TopCardsSectionProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t">
            <TopCard 
              description="Mill Yield" 
              style='bg-amber-200'
              borderBottom='bg-amber-700'
              //borderBottom=''
              icon={<Factory />}
              title={millYield.toFixed(2)}
              unit='%'
              key={'yield'} />

              <TopCard 
              description="Slabs Rolled" 
              style='bg-green-200'
              borderBottom='bg-green-700'
              //borderBottom=''
              icon={<RectangleHorizontal />}
              title={slabRolledTonnes.toFixed(2)}
              unit='Tonnes'
              key={'slabs'} />

              <TopCard 
              description="Coils Produced" 
              style='bg-rose-200'
              borderBottom='bg-rose-700'
              //borderBottom=''
              icon={<Shell />}
              title={coilsProducedTonnes.toFixed(2)}
              unit='Tonnes'
              key={'coils'} />

              <TopCard 
              description="Total Mill Delay" 
              style='bg-sky-200'
              borderBottom='bg-sky-700'
              //borderBottom=''
              icon={<Hourglass />}
              title={delay.toFixed(0)}
              unit='Mins'
              key={'delay'} />
        </div>
    </div>
  )
}

export default TopCardsSection