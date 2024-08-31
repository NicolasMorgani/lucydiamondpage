import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import { Cinzel } from "next/font/google";


const cinzel = Cinzel({subsets: ["latin"]})

const Seccion2 = () => {
  return (
    <div className={cinzel.className} id='seccion2'>

    <div className='flex justify-center gap-12  mt-28 '>
    <div data-aos="fade-right">
         <Card className="w-[300px] ">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={"/sanmartin2.jpg"}width={380}height={300}alt='san martin picture2'/>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    <div data-aos="fade-left">
         <Card className="w-[300px]  " >
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={"/sanmartin3.jpg"}width={380}height={300}alt='san martin picture2'/>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>

    </div>
   
    </div>
  )
}

export default Seccion2