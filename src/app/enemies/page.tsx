import card from "../../components/page.module.scss";
import Image from "next/image";

const Page = () => {
    
    return (

        <main>

        <section id={card.cardContainer}>
         
          <div id={card.card}>
          <div id="headline">Alien Scum</div>
          <div id="imagecon"></div>
          <Image 
          src=""
          alt="Picture of Black Alien Scum"
          width={250}
          height={250}/>
          
          <div id="content">Ninja Killer don't touch him</div>
          </div>
        
        </section>
  
  
      </main>  

    )
}

export default Page;