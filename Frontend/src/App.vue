<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HomePage from "./components/pages/HomePage.vue";
import HaederDesktop from "./components/groups/haeder/HaederDesktop.vue";
import HaederMobile from "./components/groups/haeder/HaederMobile.vue";
import HaederTablet from "./components/groups/haeder/HaederTablet.vue";
import FooterDesktop from "./components/groups/footer/FooterDesktop.vue";
import FooterMobile from "./components/groups/footer/FooterMobile.vue";
import FooterTablet from "./components/groups/footer/FooterTablet.vue";

const deviceType = ref("desktop"); // default als Desktop

const updateDeviceType = () => {
  const width = window.innerWidth;

  if (width <= 576) {
    deviceType.value = "mobile";
  } else if (width > 576 && width <= 992) {
    deviceType.value = "tablet";
  } else {
    deviceType.value = "desktop";
  }
};

onMounted(() => {
  window.addEventListener("resize", updateDeviceType);
  updateDeviceType(); // einmal beim Mounten aufrufen
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDeviceType);
});
</script>

<template>
  <div class="container">
    <header class="row">
      <HaederDesktop v-if="deviceType === 'desktop'" />
      <HaederMobile v-if="deviceType === 'mobile'" />
      <HaederTablet v-if="deviceType === 'tablet'" />
    </header>

    <div class="row">
      <HomePage />
    </div>

    <footer class="row">
      <FooterDesktop v-if="deviceType === 'desktop'" />
      <FooterMobile v-if="deviceType === 'mobile'" />
      <FooterTablet v-if="deviceType === 'tablet'" />
    </footer>
  </div>
</template>

<style scoped></style>
