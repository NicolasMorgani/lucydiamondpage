"use client"
import { TypeAnimation } from 'react-type-animation';

const Textodinamic = () => {
  return (
    <div>
    <h2 className="my-5 mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes creerlo, <br />
                      <TypeAnimation
                          sequence={[
                              'puedes cambiarlo',
                              1000,
                              'puedes modificarlo',
                              1000,
                              'puedes conquistarlo',
                              1000,
                              'puedes Independizarlo',
                              1000
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                          className="font-bold "
                      />
                  </h2>
                  </div>
  )
}

export default Textodinamic