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

function ShowPasswort(id) {
  let btnshow = id + "show";
  let btnhide = id + "hide";
  document.getElementById(id).type = "text";
  document.getElementById(btnhide).style.display = "block";
  document.getElementById(btnshow).style.display = "none";
}
function HidePasswort(id) {
  let btnshow = id + "show";
  let btnhide = id + "hide";
  document.getElementById(id).type = "password";
  document.getElementById(btnshow).style.display = "block";
  document.getElementById(btnhide).style.display = "none";
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
              @mouseover="(e) => handleMouseOver(e, 'schliesen')"
              @mouseleave="handleMouseLeave"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="Username1" class="form-label">Username</label>
                <input type="text" class="form-control col" id="Username1" />
              </div>
              <div class="mb-3">
                <label for="Password1" class="form-label">Password</label>
                <div class="row">
                  <input
                    id="Password1"
                    type="password"
                    class="form-control col"
                  />
                  <button
                    id="Password1show"
                    @mouseover="(e) => handleMouseOver(e, 'Passwort zeigen')"
                    @mouseleave="handleMouseLeave"
                    @click="ShowPasswort('Password1')"
                    type="button"
                    class="btn btn-light col-2"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button
                    id="Password1hide"
                    @mouseover="(e) => handleMouseOver(e, 'Passwort versteken')"
                    @mouseleave="handleMouseLeave"
                    @click="HidePasswort('Password1')"
                    type="button"
                    class="btn btn-light col-2"
                    style="display: none"
                  >
                    <i class="fa-solid fa-eye-slash"></i>
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="ConfirmPassword1" class="form-label"
                  >Confirm Password</label
                >
                <div class="row">
                  <input
                    id="ConfirmPassword1"
                    type="password"
                    class="form-control col"
                  />
                  <button
                    id="ConfirmPassword1show"
                    @mouseover="
                      (e) => handleMouseOver(e, 'Confirm Passwort zeigen')
                    "
                    @mouseleave="handleMouseLeave"
                    @click="ShowPasswort('ConfirmPassword1')"
                    type="button"
                    class="btn btn-light col-2"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button
                    id="ConfirmPassword1hide"
                    @mouseover="
                      (e) => handleMouseOver(e, 'Confirm Passwort versteken')
                    "
                    @mouseleave="handleMouseLeave"
                    @click="HidePasswort('ConfirmPassword1')"
                    type="button"
                    class="btn btn-light col-2"
                    style="display: none"
                  >
                    <i class="fa-solid fa-eye-slash"></i>
                  </button>
                </div>
              </div>
              <button
                @mouseover="(e) => handleMouseOver(e, 'Senden')"
                @mouseleave="handleMouseLeave"
                type="submit"
                class="btn btn-primary"
              >
                <i class="fa-solid fa-check"></i>
              </button>
            </form>
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
