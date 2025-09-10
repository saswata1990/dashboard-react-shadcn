import type React from 'react';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Link } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';

type TopCardProps = {
    description:string;
    title:string;
    icon:React.ReactElement;
    style:string;
}


function TopCard({description,title,icon,style, ...props}:TopCardProps) {
  return (
    <div>
        <Card className={style}>
              <CardHeader>
                <CardDescription className='text-black'>{description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{title}</CardTitle>
                
                <CardAction>
                    <icon.type  size={30}></icon.type>
                  {/* <Shell width={30} height={30}/> */}
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className="flex-col items-center gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                   <a href='#'>More Info</a>  <Link className="size-4"/>
                </div>
              </CardFooter>
            </Card>
    </div>
  )
}

export default TopCard