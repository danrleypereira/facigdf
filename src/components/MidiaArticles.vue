<template>
  <v-container fluid ma-0 pa-0 class="midia-articles">
    <div class="d-flex flex-column">
      <h1 class="d-flex justify-center">Saiu na Mídia</h1>
    </div>
    <div class="articles d-flex xs12 flex-wrap">
      <v-hover
        v-slot:default="{ hover }"
        v-for="(article, i) in articles"
        :key="i"
      >
        <div
          class="d-flex xs6 article justify-center flex-column"
          :style="{ 'background-color': article.color}"
        >
          <p class="d-flex align-self-center text-justify font-weight-bold ma-5">
            {{article.titulo}}
          </p>
          <h3 class="d-flex justify-center">{{article.name}}</h3>
          <v-expand-transition class="">
            <v-img
              class="align-self-center midia-logo transition-fast-in-fast-out orange darken-2"
              :src="article.logo"
              v-if="hover"
              contain
              height="200px"
            >
            </v-img>
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
</style>

<script>
export default {
  data: () => ({
    articles: [
      {
        titulo: 'Feira do comércio e indústria do Guará volta nos dias 11, 12 e 13 de outubro e agita a cidade',
        logo: require('../assets/logo.png'),
        href: 'https://www.gamacidadao.com.br/feira-do-comercio-e-industria-do-guara-volta-nos-dias-11-12-e-13-de-outubro-e-agita-a-cidade/',
        name: 'Gama Cidadão',
        color: '#875634',
      },
      {
        titulo: 'Associação Comercial vai reeditar a Facig',
        logo: require('../assets/logo.png'),
        href: 'https://jornaldoguara.com.br/2019/07/05/associacao-comercial-vai-reeditar-a-facig/',
        name: 'Jornal do Guará',
        color: '#444634',
      },
      {
        titulo: 'FACIG já movimenta o Guará: Deputado Distrital Reginaldo Sardinha visita ACIG',
        logo: require('../assets/logo.png'),
        href: 'http://guaranews.com.br/facig-ja-movimenta-o-guara-deputado-distrital-sardinha-visita-acig/',
        name: 'Guara News',
        color: '#845000',
      },
      {
        titulo: 'vuetify-loader',
        logo: require('../assets/logo.png'),
        href: 'https://github.com/vuetifyjs/vuetify-loader',
        name: 'Correio Braziliense',
        color: '#098634',
      },
    ],
  }),
}
</script>