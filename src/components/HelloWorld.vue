<template>
  <v-container fluid ma-0 pa-0>
    <v-layout>
      <v-img
        :src="require('../assets/facig-capa.jpg')"
        contain
      ></v-img>
    </v-layout>
    <v-layout>
      <v-sheet
        class="mx-auto"
        color="accent"
        max-width="100vw"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="(item, i) in items"
            :key="i"
            v-slot:default="{ active, toggle }"
          >
            <v-img
              class="mx-2"
              :src="item.src"
              contain
              width="20vw"
            >
            </v-img>
            <!-- <v-btn
              class="mx-2"
              :input-value="active"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >
              Options {{ n }}
            </v-btn> -->
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    items: [
      {
        src: require('../assets/parceiros/adm-guara.jpg'),
      },
      {
        src: require('../assets/parceiros/acig-logo.png'),
      },
      {
        src: require('../assets/parceiros/gdf.png'),
      },
      {
        src: require('../assets/parceiros/guara50-anos.jpg'),
      },
      {
        src: require('../assets/parceiros/sicoob.png'),
      },
      {
        src: require('../assets/parceiros/dyamond.png'),
      },
    ],
    model: null,
  }),
};
</script>
