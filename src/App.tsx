import { useState } from 'react'
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Button } from './components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Hourglass, RectangleHorizontal, Shell, Target } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t">
            <Card className='@container/card border-2 border-primary'>
              <CardHeader>
                <CardDescription >Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">$1,250.00</CardTitle>
                
                <CardAction>
                  <Shell width={30} height={30}/>
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                   Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            {/* <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" /> */}
            <Card className='@container/card border-2 border-primary'>
              <CardHeader>
                <CardDescription className='text-amber-950'>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">$1,250.00</CardTitle>
                
                <CardAction>
                  <RectangleHorizontal width={30} height={30} />
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                   Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <Card className='@container/card border-2 border-primary'>
              <CardHeader>
                <CardDescription className='text-amber-950'>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">$1,250.00</CardTitle>
                
                <CardAction>
                  <Target width={30} height={30} />
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                   Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <Card className='@container/card border-2 border-primary'>
              <CardHeader>
                <CardDescription className='text-amber-950'>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">$1,250.00</CardTitle>
                
                <CardAction>
                  <Hourglass width={30} height={30} />
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                   Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
    </>
  )
}

export default App
