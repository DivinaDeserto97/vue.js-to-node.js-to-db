<script setup></script>
<template>
  <div class="row">
    <div class="col-2">
      <h5>
        <a
          class="nav-link active"
          aria-current="page"
          href="http://localhost:5173/"
        >
          <i class="fa-solid fa-dice-d20"></i>WildArtTabletop</a
        >
      </h5>
    </div>
    <div class="col-6">
      <form class="d-flex" role="search">
        <input
          @mouseover="(e) => handleMouseOver(e, 'Registrierung')"
          @mouseleave="handleMouseLeave"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-light" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <div class="col-1">
      <button class="btn btn-light" type="button" data-bs-toggle="dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <i class="fa-solid fa-hashtag"></i>
        </a>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fa-brands fa-discord"></i>Discord</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fa-brands fa-youtube"></i>Youtube</a
          >
        </li>
      </ul>
    </div>
    <div class="col">
      <button class="btn btn-light" type="button">
        <i class="fa-solid fa-circle-half-stroke"></i>
      </button>
      <button class="btn btn-light" type="button">
        <i class="fa-solid fa-language"></i>
      </button>
    </div>
    <div class="col">
      <button name="Login" type="button" class="btn btn-light col">
        <i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-user"></i>
      </button>
      <!-- "Registrieren"-Button, der das Modal öffnet -->
      <button name="Registrierung" type="button" class="btn btn-light col">
        <i class="fa-solid fa-user-plus"></i>
      </button>
    </div>
  </div>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
