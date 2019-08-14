<template>
  <v-container fluid ma-0 pa-0 class="midia-articles">
    <div class="d-flex flex-column">
      <h1 class="d-flex justify-center">Saiu na Mídia</h1>
    </div>
    <div class="d-flex xs12 flex-wrap">
      <v-hover
        v-slot:default="{ hover }"
        v-for="(article, i) in articles"
        :key="i"
      >
        <div
          class="d-flex xs6 article justify-center flex-column"
          :style="{ 'background-color': article.color}"
        >
          <div
            :class="`${hover? 'disappear': ''}`"
          >
            <p class="d-flex align-self-center text-justify font-weight-bold ma-5">
              {{article.titulo}}
            </p>
            <h3 class="d-flex justify-center">{{article.name}}</h3>
          </div>

          <v-expand-transition class="">
            <a
              :href="article.href"
              target="_blank"
              class="align-self-center midia-logo transition-fast-in-fast-out orange darken-2"
              v-if="hover"
            >
              <v-img
                :src="article.logo"
                contain
                height="200px"
              >
              </v-img>
            </a>
          </v-expand-transition>
        </div>
      </v-hover>
    </div>
  </v-container>
</template>
<style>
  .midia-articles {
    background-color: #E3A005;
    height: 100%;
    position: relative;
  }
  .article {
    background-color: #98765f;
    width: 50%;
    height: 200px;
    color: antiquewhite;
  }
  .midia-logo {
    opacity: .5;
    position: absolute;
    width: 50%;
  }
  .disappear {
    opacity: 0;
  }
</style>

<script>
export default {
  data: () => ({
    articles: [
      {
        titulo: 'Feira do comércio e indústria do Guará volta nos dias 11, 12 e 13 de outubro e agita a cidade',
        logo: require('../assets/jornais/gamacidadao-banner.png'),
        href: 'https://www.gamacidadao.com.br/feira-do-comercio-e-industria-do-guara-volta-nos-dias-11-12-e-13-de-outubro-e-agita-a-cidade/',
        name: 'Gama Cidadão',
        color: '#000000',
      },
      {
        titulo: 'Associação Comercial vai reeditar a Facig',
        logo: require('../assets/jornais/jornaldoguara.jpg'),
        href: 'https://jornaldoguara.com.br/2019/07/05/associacao-comercial-vai-reeditar-a-facig/',
        name: 'Jornal do Guará',
        color: '#881319',
      },
      {
        titulo: 'FACIG já movimenta o Guará: Deputado Distrital Reginaldo Sardinha visita ACIG',
        logo: require('../assets/jornais/guaranews.png'),
        href: 'http://guaranews.com.br/facig-ja-movimenta-o-guara-deputado-distrital-sardinha-visita-acig/',
        name: 'Guara News',
        color: '#CB0000',
      },
      {
        titulo: 'CDDF/CD Guará: José Augusto representa o CDDF na 4a FACIG',
        logo: require('../assets/jornais/egnews.png'),
        href: 'http://egnews.com.br/politica/distrito-federal/cddf-cd-guara-jose-augusto-representa-o-cddf-na-4a-facig/',
        name: 'EG News',
        color: '#00142C',
      },
    ],
  }),
}
</script>