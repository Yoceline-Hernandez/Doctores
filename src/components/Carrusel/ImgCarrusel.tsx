import { Carrusel } from "./Carrusel";
import { useEffect, useState } from "react";

const itemsInCarusel = [
  { id: 1, image: "/img/carusel1.jpg" },
  { id: 2, image: "/img/carusel2.jpg" },
  { id: 3, image: "/img/carusel3.jpg" },
];

export function ImgCarrusel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % itemsInCarusel.length);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return <Carrusel images={itemsInCarusel[index].image}/>;

  
  
}
