<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline d-none d-sm-block">
        <span>Entrada Livre</span>
        
      </v-toolbar-title>
      <v-spacer class="d-none d-sm-block"></v-spacer>
      <v-img
        :src="require('./assets/facig-word.png')"
        height="60"
        max-height="80"
        max-width="200"
        contain
        class=""
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn
        href=""
        target="_blank"
        color="primary"
      >
        <span class="mr-2 font-weight-black">Participe</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <v-container fluid ma-0 pa-0 xs12 class="d-flex flex-column flex-md-column flex-lg-row flex-xl-row">
        <v-flex xs12 md12 lg6>
          <AboutFacig/>
        </v-flex>
        <v-flex xs12 md12 lg6>
          <MidiaArticles/>
        </v-flex>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>

</style>

<script>
import HelloWorld from './components/HelloWorld';
import AboutFacig from './components/AboutFacig';
import MidiaArticles from './components/MidiaArticles';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutFacig,
    MidiaArticles,
  },
  data: () => ({
    //
  }),
};
</script>
