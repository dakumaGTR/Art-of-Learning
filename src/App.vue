<template>
  <div id="app">
    <HeaderComp />
    <main>
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #f0f4f8;
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  max-width: 1200px;
  margin: 1.5rem auto;
  padding: 0 1rem;
  width: 100%;
}

@media (min-width: 1200px) {
  main {
    padding: 2rem;
  }

  nav a {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .grid-4-cols {
    grid-template-columns: repeat(3, 1fr);
  }

  nav a {
    font-size: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .grid-4-cols, .grid-3-cols {
    grid-template-columns: repeat(2, 1fr);
  }

  main {
    padding: 1rem;
  }

  nav a {
    font-size: 0.95rem;
  }
}

@media (max-width: 767px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  nav {
    width: 100%;
    justify-content: space-around;
  }

  nav a {
    font-size: 0.9rem;
  }

  .grid-4-cols, .grid-3-cols, .grid-2-cols {
    grid-template-columns: 1fr;
  }

  main {
    padding: 0.5rem;
  }
}

button, a.button-link {
  background-color: #3f51b5;
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  user-select: none;
}

button:hover, a.button-link:hover {
  background-color: #303f9f;
}
</style>