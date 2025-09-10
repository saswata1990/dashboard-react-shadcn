import type React from 'react';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Link } from 'lucide-react';


type TopCardProps = {
    description:string;
    title:string;
    icon:React.ReactElement;
    style:string;
    unit:string;
    borderBottom:string;
}


function TopCard({description,title,icon,style,unit,borderBottom}:TopCardProps) {
  return (
    <div>
        <Card className={style}>
              <CardHeader>
                <CardDescription className='text-black text-[1rem]'>{description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{title} <span className='text-[0.8em]'>{unit}</span></CardTitle>
                
                <CardAction>
                    <icon.type  size={30}></icon.type>
                  {/* <Shell width={30} height={30}/> */}
                </CardAction>
              </CardHeader>
              {/* <CardContent>
                <p>Card content</p>
              </CardContent> */}
              <CardFooter className={"flex-col items-center gap-1.5 text-sm pt-3 pb-3 text-white hover:opacity-70 "+borderBottom}>
                <div className="line-clamp-1 flex gap-2 font-medium">
                   <a href='#'>More Info</a>  <Link className="size-4"/>
                </div>
              </CardFooter>
            </Card>
    </div>
  )
}

export default TopCard