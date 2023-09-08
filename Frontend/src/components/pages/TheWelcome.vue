<script setup>
import { ref } from "vue";

const tooltipText = ref("halo");
const tooltipPosition = ref({ x: 0, y: 0 });

function showTooltip(event, text) {
  tooltipText.value = text;
  tooltipPosition.value = { x: event.clientX + 10, y: event.clientY + 10 };
}

function hideTooltip() {
  tooltipText.value = "";
}
</script>

<template>
  <div class="row">Hallo User</div>
  <div class="row">
    <button
      name="Login"
      type="button"
      class="btn btn-primary col-1"
      @mouseover="showTooltip($event, 'Login')"
      @mouseleave="hideTooltip"
    >
      <i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-user"></i>
    </button>
    <button
      name="Registrierung"
      type="button"
      class="btn btn-success col-1"
      @mouseover="showTooltip($event, 'Registrierung')"
      @mouseleave="hideTooltip"
    >
      <i class="fa-solid fa-user-plus"></i>
    </button>
  </div>
  <div
    v-if="tooltipText"
    :style="{ top: `${tooltipPosition.y}px`, left: `${tooltipPosition.x}px` } "
    class="tooltip"
  >
    {{ tooltipText }}
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  min-width: 50px; /* Beispielwert */
  min-height: 20px; /* Beispielwert */
  z-index: 9999;
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 4px;
  pointer-events: none;
}
</style>
