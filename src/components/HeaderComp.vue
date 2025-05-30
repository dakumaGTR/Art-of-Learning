<template>
  <header>
    <router-link to="/" exact-active-class="router-link-active" class="logo">ИСКУССТВО УЧИТЬСЯ</router-link>
    <nav aria-label="Основная навигация">
      <router-link to="/memory-methods" active-class="router-link-active">МЕТОДЫ ЗАПОМИНАНИЯ🤔</router-link>
      <router-link to="/time-management" active-class="router-link-active">ТАЙМ-МЕНЕДЖМЕНТ⌚</router-link>
      <router-link to="/online-courses" active-class="router-link-active">ОНЛАЙН-КУРСЫ🌐</router-link>
      <router-link to="/language-learning" active-class="router-link-active">ОБУЧЕНИЕ ЯЗЫКАМ 🇺🇸</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
header {
  background-color: #3f51b5;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  user-select: none;
}

nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

nav a.router-link-active {
  font-weight: 700;
  border-bottom: 2px solid #ffeb3b;
  padding-bottom: 2px;
}

a {
  text-decoration: none;
  color: #FFFFFF;
}
</style>