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
      <v-container
        fluid ma-0 pa-0 xs12 md12 
        class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row"
      >
        <v-flex xs12 md7 lg7 class="">
          <AboutFacig/>
        </v-flex>
        <v-flex xs12 md5 lg5 flex-column secondary class="">
          <MidiaArticles/>
          <SocialMidia/>
        </v-flex>
      </v-container>
      <Apareca/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<style>

</style>

<script>
import HelloWorld from './components/HelloWorld';
import AboutFacig from './components/AboutFacig';
import MidiaArticles from './components/MidiaArticles';
import SocialMidia from './components/SocialMidia';
import Footer from './components/Footer';
import Apareca from './components/Apareca';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutFacig,
    MidiaArticles,
    SocialMidia,
    Footer,
    Apareca,
  },
  data: () => ({
    //
  }),
};
</script>
