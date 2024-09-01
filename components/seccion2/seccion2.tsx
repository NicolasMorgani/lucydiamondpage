
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
import Video from '@/components/video';




const cinzel = Cinzel({subsets: ["latin"]})

const Seccion2 = () => {
  return (
    <div className={cinzel.className} id='seccion2'>

    <div className='container flex items-center justify-center gap-12  mt-28 flex-wrap '>
    <div data-aos="fade-right">
         <Card className="w-[300px] ">
      <CardHeader>
        <CardTitle>Dandolo Todo</CardTitle>
        <CardDescription>Nació el 25 de febrero de 1778 en Yapeyú, autores afirman que a la edad de seis años concurrió a una escuela en Buenos Aires, donde aprendió a leer y escribir
           El General dio su vida por la liberacion de su Pueblo</CardDescription>
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
        <CardTitle>El Retiro</CardTitle>
        <CardDescription>En Argentina se lo reconoce como el Padre de la Patria​ y el «Libertador»,​ 
          y se lo valora como el principal héroe y prócer del panteón nacional.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={"/sanmartin3.jpg"}width={380}height={300}alt='san martin picture2'/>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    </div>
    

    </div>

    <div data-aos="flip-right" className=" m-2 md:m-28 text-3xl" >
        <Card>
        <p className="m-5 md:m-10 md:p-10 ">El General Don José de San Martín fue un líder clave en las guerras de independencia de América del Sur. 
          Destacado por sus estrategias brillantes, lideró la exitosa campaña de los Andes, 
          cruzando la cordillera con un ejército que liberó Chile en la Batalla de Chacabuco y 
          posteriormente aseguró la independencia de Perú tras la victoria en la Batalla de Maipú y 
          la entrada triunfal en Lima. Su visión y liderazgo fueron cruciales para la emancipación de
           varias naciones sudamericanas del dominio español.</p>
           </Card>
      </div>
    <div data-aos="zoom-in" className='flex justify-center items-center mt-32'>
      <Image  id='seccion3' src={"/sanmartin8.jpg"}width={750}height={750}alt='sanmartin8'/>
    </div>
    <div data-aos="flip-right" className="flex justify-center items-center mt-28 text-3xl" >
        <Card>
        <p className="m-5 md:m-10 md:p-10 ">Fue una figura clave para la concreción y la consolidación de nuestra independencia política.
           Además, contribuyó de manera decisiva en los procesos independentistas de Chile y del Perú; por lo tanto,
            fue un hombre indispensable para la emancipación de los pueblos sudamericanos.</p>
           </Card>
      </div>
      <div className='flex justify-center mt-24'>
      <Video />
      </div>
    </div>
  )
}

export default Seccion2