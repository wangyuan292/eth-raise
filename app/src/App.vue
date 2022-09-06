<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/demo">Demo</RouterLink>
        <RouterLink to="/raise">Raise</RouterLink>
      </nav>
    </div>
  </header>

  <div id="core-body">
    <RouterView />
  </div>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#core-body {
  place-items: center;
  margin: 0 auto;
}

header {
  border-bottom: 1px solid var(--color-border);
  border-bottom: 200px;
}

@media (min-width: 1024px) {
  nav {
  }
}
</style>
