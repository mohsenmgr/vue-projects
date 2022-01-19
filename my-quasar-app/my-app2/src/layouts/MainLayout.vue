<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $t("mainLayout.title") }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          {{ $t("mainLayout.navigation") }}
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data() {
    return {
      linksList: [
        {
          title: this.$t("mainLayout.sidebar.diet"),
          caption: "",
          icon: "sticky_note_2",
          link: "#",
        },
        {
          title: this.$t("mainLayout.sidebar.diary"),
          caption: "",
          icon: "note_add",
          link: "#",
        },
        {
          title: this.$t("mainLayout.sidebar.weight"),
          caption: "",
          icon: "face",
          link: "#",
        },
        {
          title: this.$t("mainLayout.sidebar.progress"),
          caption: "",
          icon: "analytics",
          link: "#",
        },
      ],
    };
  },

  computed: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
