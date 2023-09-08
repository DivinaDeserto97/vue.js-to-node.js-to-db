<script setup>
// Vue-Imports
import { ref } from "vue";

// Zustandsvariablen für den Tooltip
const Tooltipp = ref(""); // Text des Tooltips
const ToolTippPos = ref({ x: 0, y: 0 }); // Position des Tooltips
const isTooltipVisible = ref(false); // Anzeigestatus des Tooltips

let throttleTimer; // Timer für die throttle-Funktion

// Funktion, um mehrfache Aufrufe einer Funktion in kurzer Zeit zu verhindern
function throttle(func, delay, ...args) {
  if (throttleTimer) return;

  throttleTimer = setTimeout(() => {
    func(...args);
    throttleTimer = null;
  }, delay);
}

// Funktion, um den Tooltip anzuzeigen
function showToolTipp(event, text) {
  Tooltipp.value = text;
  ToolTippPos.value = { x: event.clientX + 20, y: event.clientY };
  isTooltipVisible.value = true;
}

// Funktion, um den Tooltip auszublenden
function hideToolTipp() {
  isTooltipVisible.value = false;
}

// Handler, um den Tooltip mit Verzögerung anzuzeigen
function handleMouseOver(event, text) {
  throttle(showToolTipp, 100, event, text);
}

// Handler, um den Tooltip mit Verzögerung auszublenden
function handleMouseLeave() {
  throttle(hideToolTipp, 100);
}

// Funktion, um das Passwort sichtbar zu machen
function ShowPasswort(id) {
  let btnshow = id + "show";
  let btnhide = id + "hide";
  document.getElementById(id).type = "text";
  document.getElementById(btnhide).style.display = "block";
  document.getElementById(btnshow).style.display = "none";
}

// Funktion, um das Passwort wieder zu verbergen
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
      <!-- Login-Button mit Tooltip-Funktionalität -->
      <button
        name="Login"
        type="button"
        class="btn btn-primary col-1"
        @mouseover="(e) => handleMouseOver(e, 'Login')"
        @mouseleave="handleMouseLeave"
      >
        <i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-user"></i>
      </button>
      <!-- "Registrieren"-Button, der das Modal öffnet -->
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
    <!-- Tooltip-Element -->
    <div
      v-if="isTooltipVisible"
      :style="{ top: `${ToolTippPos.y}px`, left: `${ToolTippPos.x}px` }"
      class="Tooltipp-light"
    >
      {{ Tooltipp }}
    </div>

    <!-- Bootstrap Modal für Registrierung -->
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
          <!-- Formular für Registrierung im Modal -->
          <div class="modal-body">
            <form>
              <!-- Username-Eingabefeld -->
              <div class="mb-3">
                <label for="Username1" class="form-label">Username</label>
                <input type="text" class="form-control col" id="Username1" />
              </div>
              <!-- Passwort-Eingabefeld mit "zeigen" und "verbergen" Optionen -->
              <div class="mb-3">
                <label for="Password1" class="form-label">Password</label>
                <div class="row">
                  <input
                    id="Password1"
                    type="password"
                    class="form-control col"
                  />
                  <!-- Buttons zum Zeigen/Verbergen des Passworts -->
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
              <!-- Bestätigung des Passworts mit "zeigen" und "verbergen" Optionen -->
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
                  <!-- Buttons zum Zeigen/Verbergen des Confirm Password -->
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
              <!-- Senden-Button -->
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

<!-- Stil für den Tooltip -->
<style scoped>
.Tooltipp-light {
  width: auto;
  height: auto;
  background-color: red; /* Hintergrundfarbe */
  position: absolute; /* Positionierung relativ zum Viewport */
  z-index: 9999; /* sorgt dafür, dass der Tooltip oberhalb anderer Elemente angezeigt wird */
  pointer-events: none; /* verhindert, dass der Tooltip Mausereignisse erfasst */
  border-radius: 5px; /* abgerundete Ecken */
  padding: 5px; /* Innenabstand */
}
</style>
