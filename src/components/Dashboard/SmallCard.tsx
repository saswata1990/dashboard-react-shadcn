import React from 'react'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

type SmallCardProps = {
    description:string;
    value:string;
    style:string;
}


function SmallCard({description,value,style, ...props}:SmallCardProps) {
  return (
    <div>
        <Card className={style}>
              <CardHeader>
                <CardTitle className="text-[1.2rem] font-semibold tabular-nums @[250px]/card:text-3xl">{value}</CardTitle>
                <CardDescription className='text-[1rem]'>{description}</CardDescription>
              </CardHeader>
            </Card>
    </div>
  )
}

export default SmallCard