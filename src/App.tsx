import { IconTrendingUp, IconTrendingUp2 } from "@tabler/icons-react"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Hourglass, RectangleHorizontal, Shell, Target } from 'lucide-react'
import TopCard from "./components/Dashboard/TopCard"
import TopCardsSection from "./components/Dashboard/TopCardsSection"
import SmallCard from "./components/Dashboard/SmallCard"
import BottomCardsSection from "./components/Dashboard/BottomCardsSection"

function App() {

  return (
    <>
      <TopCardsSection />
      <BottomCardsSection />
    </>
  )
}

export default App
