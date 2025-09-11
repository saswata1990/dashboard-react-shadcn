import React from 'react'
import TopCardsSection from './TopCardsSection'
import BottomCardsSection from './BottomCardsSection'

function Dashboard() {

    // var res = fetch('http://172.16.114.80/MISAPI/api/Dashboard/GetCurrentShiftDashboardData',{headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   }})
    // .then(response => response.json())
    // .then(json => console.log(json))

    var data = {"slabsRolledTonnes":1461,"coilsProducedTonnes":1422.64,"slabsRolled":68,"coilsProduced":68,"cobbledCoils":0,"percentageCobbledCoils":0,"averageSlabTonnage":21.49,"averageCoilTonnage":20.92,"totalDelay":16,"coilCountByShift":[68,0,0],"slabsRolledCountByShift":[68,0,0],"coilTonnageByShift":[1422.64,0,0],"slabsTonnageByShift":[1461,0,0],"transferBars":0,"millYield":97.37}


  return (
    <div>
        <TopCardsSection millYield={data.millYield} slabRolledTonnes={data.slabsRolledTonnes} coilsProducedTonnes={data.coilsProducedTonnes} delay={data.totalDelay}/>
        <BottomCardsSection slabsRolled={data.slabsRolled} coilsProduced={data.coilsProduced} cobble={data.cobbledCoils} transferBar={data.transferBars} avgSlabWeight={data.averageSlabTonnage} avgCoilWeight={data.averageCoilTonnage} />
    </div>
  )
}

export default Dashboard