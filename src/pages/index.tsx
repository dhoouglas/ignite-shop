import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";

import camiseta1 from '../assets/Camisetas/1.png';
import camiseta2 from '../assets/Camisetas/2.png';
import camiseta3 from '../assets/Camisetas/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta3} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
