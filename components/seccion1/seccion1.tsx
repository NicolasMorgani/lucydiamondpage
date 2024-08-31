import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {Teko } from "next/font/google";


const teko = Teko({subsets: ["latin"]})




const Seccion1 = () => {
  return (
    <div >
      <div data-aos="fade-down">
      <div className="flex justify-center items-center mt-10">
        <h1 className="font-bold text-6xl">Don Jose de San Martin</h1>
      </div>
      </div>
      <div data-aos="fade-up">
      <div className="flex justify-center items-center mt-10">
        <Image src={"/sanmartin.jpg"} width={400} height={400} alt="san martin Home" />
      </div>
      </div>
      <div className="flex justify-center items-center mt-28">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
            <CarouselItem className="basis-1/3"><Image src={"/sanmartin.jpg"} width={80} height={80} alt="picture san martin" /></CarouselItem>
       
          
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className={teko.className}>
      <div className="flex justify-center items-center m-28 text-3xl" >
        <Card>
        <p className="md:m-10 md:p-10 m-5">El General Don José de San Martín fue un líder clave en las guerras de independencia de América del Sur. 
          Destacado por sus estrategias brillantes, lideró la exitosa campaña de los Andes, 
          cruzando la cordillera con un ejército que liberó Chile en la Batalla de Chacabuco y 
          posteriormente aseguró la independencia de Perú tras la victoria en la Batalla de Maipú y 
          la entrada triunfal en Lima. Su visión y liderazgo fueron cruciales para la emancipación de
           varias naciones sudamericanas del dominio español.</p>
           </Card>
      </div>
      </div>

    </div>
  )
}

export default Seccion1