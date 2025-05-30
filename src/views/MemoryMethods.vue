<template>
  <div>
    <section aria-labelledby="mm-title1">
      <h2 id="mm-title1">Запоминание через Ассоциации</h2>
      <p>Связывайте новую информацию с уже знакомыми образами, чтобы легко её вспомнить.</p>
    </section>
    <section aria-labelledby="mm-title2">
      <h2 id="mm-title2">Метод Локусов</h2>
      <p>Представляйте информацию, "располагая" её в знакомых местах вашего воображаемого пространства.</p>
    </section>
    <section aria-labelledby="mm-title3">
      <h2 id="mm-title3">Повторение с интервалом</h2>
      <p>Регулярно вспоминайте изученное с нарастающими интервалами для долговременного запоминания.</p>
    </section>
    <section aria-labelledby="mm-title4">
      <h2 id="mm-title4">Использование визуальных образов</h2>
      <p>Создавайте яркие и запоминающиеся картинки для облегчения запоминания сложных концепций.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MemoryMethods'
}
</script>

<style scoped>
section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s ease;
}

section:hover {
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.15);
}

h2 {
  margin-bottom: 1rem;
  color: #283593;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.2;
}

p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 1200px) {
  section {
    padding: 2.5rem 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  section {
    padding: 2rem 2.5rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  p {
    font-size: 1.05rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  section {
    padding: 1.5rem 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 767px) {
  section {
    padding: 1rem 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>