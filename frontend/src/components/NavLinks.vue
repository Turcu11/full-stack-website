<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="navbarSupportedContent" class="collapse navbar-collapse">
    <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0 text-end">
      <li class="mx-3 nav-item">
        <RouterLink class="nav-link fw-semibold red-text" to="/CRUD"
          >CRUD</RouterLink
        >
      </li>
      <li class="mx-3 nav-item">
        <RouterLink class="nav-link fw-semibold red-text" to="/despreNoi"
          >Despre noi</RouterLink
        >
      </li>
      <li class="mx-3 nav-item">
        <RouterLink class="nav-link fw-semibold red-text" to="/contact"
          >Contact</RouterLink
        >
      </li>
      <li class="mx-3 nav-item">
        <RouterLink class="nav-link fw-semibold red-text" to="servicii"
          >Servicii</RouterLink
        >
      </li>
      <li class="mx-3 nav-item">
        <RouterLink class="nav-link fw-semibold red-text" to="prices">Tarife</RouterLink>
      </li>
      <li class="mx-3 nav-item">
        <a class="nav-link fw-semibold red-text" href="#">FAQ</a>
      </li>
    </ul>
  </div>
</template>
