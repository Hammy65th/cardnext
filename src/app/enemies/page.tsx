"use client";

import { useEffect, useRef } from "react";
import card from "../../components/page.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { useSearchParams } from "next/navigation";
import { EnemiesArray } from "@/type/type"

const Page = () => {
    
    const data: EnemiesArray = [

      {
        name: "Alien Scum",
        img: "/assets/black_alien_scum.png",
        text: "Ninja Killer dont touch him"
      },
      {
        name: "Death Smokie",
        img: "/assets/death_smokie.png",
        text: "Ninja Killer dont touch him"
      },
      {
        name: "Ping Pang",
        img: "/assets/angry_ping.png",
        text: "Just some penguin shit"
      }
    ]

    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const id= Number(query);

    const refObj= useRef<HTMLDivElement>(null);


    useEffect(() => {

      console.log('im ready');

      gsap.to( refObj.current , {

        duration: 0.10,
        scaleX: -1,
        alpha: 0,
        repeat: 3,
        yoyo: true,
        onComplete: ()=>{
          gsap.to( refObj.current , {
            duration: 0.10,
            alpha: 1,
            scaleX: 1
          })

        }

      })

    },[id])

    return (

        <main>

        <section ref={refObj} id={card.cardContainer}>
         
          <div id={card.card}>
          <div id={card.headline}>{data[id].name}</div>
          <div id={card.imagecon}></div>
          <Image 
          src={data[id].img}
          alt="Picture of Black Alien Scum"
          width={250}
          height={250}/>
          
          <div id={card.content}>{data[id].text}</div>
          </div>
        
        </section>
  
  
      </main>  

    )
}

export default Page;