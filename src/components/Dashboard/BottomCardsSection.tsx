
import SmallCard from './SmallCard'

interface BottomCardsSectionProps {
  slabsRolled:number;
  coilsProduced:number;
  cobble:number;
  transferBar:number;
  avgSlabWeight:number;
  avgCoilWeight:number;
}


function BottomCardsSection({slabsRolled,coilsProduced,cobble,transferBar,avgSlabWeight,avgCoilWeight}:BottomCardsSectionProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-6 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t">
            <SmallCard description="Slab Rolled" value={slabsRolled.toFixed(0)} style={'shadow-md shadow-violet-500'} /> 
            <SmallCard description="Coils Produced" value={coilsProduced.toFixed(0)} style={'shadow-md shadow-amber-500'} /> 
            <SmallCard description="Cobble" value={cobble.toFixed(0)} style={'shadow-md shadow-blue-500'} /> 
            <SmallCard description="Transfer Bar" value={transferBar.toFixed(0)} style={'shadow-md shadow-green-500'} /> 
            <SmallCard description="Average Slab Weight" value={avgSlabWeight.toFixed(2)} style={'shadow-md shadow-orange-500'} /> 
            <SmallCard description="Average Coil Weight" value={avgCoilWeight.toFixed(2)} style={'shadow-md shadow-red-500'} /> 
            
        </div>
    </div>
  )
}

export default BottomCardsSection