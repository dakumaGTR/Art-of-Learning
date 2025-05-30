<template>
  <div>
    <section aria-labelledby="sec1-title" class="hero-section">
      <h2 id="sec1-title">Добро пожаловать в Искусство Учиться</h2>
      <p>Узнайте, как учиться эффективно и с удовольствием, используя проверенные методы и современные подходы.</p>
    </section>
    <section aria-labelledby="blog-title" class="blog-section">
      <h2 id="blog-title">Последние статьи</h2>
      <article class="blog-article">
        <h3>5 Легких способов улучшить память</h3>
        <p>Ознакомьтесь с простыми техниками, которые помогут вашему мозгу запоминать информацию быстрее и дольше.</p>
      </article>
      <article class="blog-article">
        <h3>Тайм-менеджмент для новичков</h3>
        <p>Узнайте, как планировать день так, чтобы справляться с задачами и находить время для отдыха.</p>
      </article>
      <article class="blog-article">
        <h3>Выбор онлайн-курса: на что обратить внимание</h3>
        <p>Полезные советы, которые помогут выбрать наиболее подходящий курс для ваших целей и уровня.</p>
      </article>
    </section>
    <section aria-labelledby="cta-title" class="cta-section">
      <h2 id="cta-title">Готовы начать свой путь к эффективному обучению?</h2>
      <p>Присоединяйтесь к нам и откройте для себя методы обучения, которые изменят ваш подход к знаниям.</p>
      <button class="cta-button" aria-label="Начать учиться">Начать учиться</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero-section {
  background-image: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnerdish-images.s3.amazonaws.com%2F36%2Fshutterstock_1077839504.jpg&f=1&nofb=1&ipt=2ed1b2d697f5353c5d8bdeb6d7e88419a1c454da75045155ccbc234532d630e7');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  padding: 6rem 2rem 4rem;
  color: white;
  text-shadow: 0 2px 6px rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
  margin-bottom: 2rem;
}

h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.blog-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.blog-article + .blog-article {
  margin-top: 1.5rem;
}

.blog-article h3 {
  margin-bottom: 0.3rem;
  color: #3f51b5;
}

.blog-article p {
  margin: 0;
  color: #555;
  font-size: 1rem;
}

.cta-section {
  background: #3f51b5;
  border-radius: 8px;
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
  margin-bottom: 2rem;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  letter-spacing: normal;
}

.cta-section p {
  font-size: 1.1rem;
  margin: 0 auto 1.5rem;
  max-width: 600px;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  line-height: 1.4;
}

.cta-button {
  background-color: #ffeb3b;
  color: #3f51b5;
  font-weight: 700;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover,
.cta-button:focus {
  background-color: #fbc02d;
  color: #2c387e;
  outline: none;
}

.grid-4-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (min-width: 1200px) {
  section {
    padding: 2.5rem 3rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .grid-4-cols {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  section {
    padding: 2rem 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .grid-4-cols {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  section {
    padding: 1.5rem 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }

  .grid-4-cols {
    grid-template-columns: repeat(2, 1fr);
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

  .grid-4-cols {
    grid-template-columns: 1fr;
  }
}
</style>