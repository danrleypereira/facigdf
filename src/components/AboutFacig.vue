<template>
  <v-container fluid ma-0 class="primary about-facig">
    <div class="d-flex flex-column about-title justify-center">
      <h1 class="d-flex"><strong>Sobre a 4ª Edição</strong></h1>
      <v-flex class="d-flex flex-row">
        <h4 class="align-self-center">da</h4>
        <v-img
          :src="require('../assets/facig-word.png')"
          height="70%"
          max-height="90%"
          max-width="70%"
          contain
          class=""
        ></v-img>
      </v-flex>
    </div>
    <div class="about-section">
      <div class="text-justify paragraph">
        Facig - Feira de Amostra, Comércio e Indústria do Guará chega 
        à 4ª edição em outubro nos dias 24 a 27. 
      </div>
      <div class="text-justify paragraph">
        Com mais de 30 atrações e expectativa de reunir mais de 40 mil 
        pessoas, durante quatro dias de feira, a 14ª edição da Facig - 
        Feira de Amostra, Comércio e Indústria do Guará promete mexer 
        com a economia formal e criativa, além de palestras, workshops, 
        oficinas, rodada de negócios, cultura, tecnologia, inovação, 
        empreendedorismo e exportação de produtos.
      </div>
      <div class="text-justify paragraph">
        A expectativa dos comerciantes é que o movimento cresça cerca 
        de 15% durante os dias de festa. São 176 estandes com estrutura 
        moderna em uma área de 16 mil metros.
      </div>      
    </div>
  </v-container>
</template>
<style>
  .about-facig {
    padding: 40px 5%;
    color: #FFFFFF;
  }
  .about-title  {
    font-family: 'Geomanist webfont',Arial,sans-serif;
    font-size: 2vw;
    line-height: 2vw;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 960px) {
    .about-title {
      font-size: 4vw;
      line-height: 4vw;
    }
    .paragraph {
      font-size: 5vw;
      line-height: 7vw;
    }
  }
  .about-section {
    font-family: 'Geomanist webfont',Arial,sans-serif;
    font-size: 1.7vw;
    line-height: 3vw;
    font-weight: 300;
    text-align: left;
  }
  .paragraph {
    max-width: 650px;
    margin: 0 30px 20px 30px;
  }
</style>

<script>
export default {
  
}
</script>