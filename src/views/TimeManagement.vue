<template>
  <div>
    <section aria-labelledby="tm-title1">
      <h2 id="tm-title1">Планирование задач</h2>
      <p>Составляйте список дел и распределяйте время на важные и срочные задачи.</p>
    </section>
    <section aria-labelledby="tm-title2">
      <h2 id="tm-title2">Метод Помодоро</h2>
      <p>Работайте 25 минут, затем делайте короткий перерыв для повышения концентрации.</p>
    </section>
    <section aria-labelledby="tm-title3">
      <h2 id="tm-title3">Избегание прокрастинации</h2>
      <p>Используйте техники мотивации и самодисциплины, чтобы не откладывать дела на потом.</p>
    </section>
    <section aria-labelledby="tm-title4">
      <h2 id="tm-title4">Баланс работы и отдыха</h2>
      <p>Не забывайте давать себе время на восстановление для поддержания продуктивности.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TimeManagement'
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