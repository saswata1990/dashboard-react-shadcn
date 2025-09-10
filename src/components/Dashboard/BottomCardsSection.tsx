import React from 'react'
import SmallCard from './SmallCard'

function BottomCardsSection() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-6 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t">
            <SmallCard description="Description" value="Title" style={'border-2 border-violet-500'} /> 
            <SmallCard description="Description" value="Title" style={'border-2 border-amber-500'} /> 
            <SmallCard description="Description" value="Title" style={'border-2 border-blue-500'} /> 
            <SmallCard description="Description" value="Title" style={'border-2 border-green-500'} /> 
            <SmallCard description="Description" value="Title" style={'border-2 border-orange-500'} /> 
            <SmallCard description="Description" value="Title" style={'border-2 border-red-500'} /> 
            
        </div>
    </div>
  )
}

export default BottomCardsSection