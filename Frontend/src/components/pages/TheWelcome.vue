<script setup>
import { ref } from "vue";

const Tooltipp = ref("");
const ToolTippPos = ref({ x: 0, y: 0 });
const isTooltipVisible = ref(false);

let throttleTimer;

function throttle(func, delay, ...args) {
  if (throttleTimer) return;

  throttleTimer = setTimeout(() => {
    func(...args);
    throttleTimer = null;
  }, delay);
}

function showToolTipp(event, text) {
  Tooltipp.value = text;
  ToolTippPos.value = { x: event.clientX + 20, y: event.clientY };
  isTooltipVisible.value = true;
}

function hideToolTipp() {
  isTooltipVisible.value = false;
}

function handleMouseOver(event, text) {
  throttle(showToolTipp, 100, event, text);
}

function handleMouseLeave() {
  throttle(hideToolTipp, 100);
}
</script>

<template>
  <div>
    <div class="row">Hallo User</div>
    <div class="row">
      <button
        name="Login"
        type="button"
        class="btn btn-primary col-1"
        @mouseover="(e) => handleMouseOver(e, 'Login')"
        @mouseleave="handleMouseLeave"
      >
        <i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-user"></i>
      </button>
      <!-- Der "Registrieren"-Button öffnet das Modal -->
      <button
        name="Registrierung"
        type="button"
        class="btn btn-success col-1"
        @mouseover="(e) => handleMouseOver(e, 'Registrierung')"
        @mouseleave="handleMouseLeave"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-user-plus"></i>
      </button>
    </div>
    <!-- Das Tooltip-Feld -->
    <div
      v-if="isTooltipVisible"
      :style="{ top: `${ToolTippPos.y}px`, left: `${ToolTippPos.x}px` }"
      class="Tooltipp-light"
    >
      {{ Tooltipp }}
    </div>

    <!-- Bootstrap Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              @mouseover="(e) => handleMouseOver(e, 'close')"
              @mouseleave="handleMouseLeave"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Tooltipp-light {
  width: auto;
  height: auto;
  background-color: red;
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  border-radius: 5px;
  padding: 5px;
}
</style>
