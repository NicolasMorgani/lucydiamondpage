import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Textodinamic from "../texto-dinamic"
import { Separator } from "@/components/ui/separator"









const Seccion1 = () => {
  return (
    <div >
      
      <div data-aos="fade-down" className="flex justify-center items-center text mt-10">
        <h1 className="font-bold text-3xl md:text-6xl">Don Jose de San Martin</h1>
       
      </div>
      <div className="flex justify-center">
      <Separator className=" bg-white max-w-56 mt-8"/>
      </div>
      <div className="flex justify-center">
      <Textodinamic/>
      </div>
      
      

      <div data-aos="fade-up">
      <div className="flex justify-center items-center mt-10">
        <Image src={"/sanmartin.jpg"} width={400} height={400} alt="san martin Home" />
      </div>
      </div>
      <div className="flex justify-center">
      <Separator className=" bg-white max-w-56 mt-20"/>
      </div>
      <div className=" flex justify-center items-center mt-28">
        <Carousel
          opts={{
            align: "start",
          }}
          className=" max-w-sm"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin4.jpeg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin6.jpeg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin7.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmar.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
       
          
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center">
      <Separator className=" bg-white max-w-56 mt-28"/>
      </div>

    </div>
  )
}

export default Seccion1