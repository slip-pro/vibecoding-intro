import React from 'react'

export default function Page(): JSX.Element {
  return (
    <main className="site">
      <section className="hero">
        <h1>Сергей Липчанский</h1>
        <p>Основатель kkts.ai | COO и лидер AI-направления в ScrumTreл</p>
        <button className="cta">Связаться</button>
      </section>
      <section className="about">
        <h2>О себе</h2>
        <p>Я помогаю организациям внедрять практичные AI-решения, строю команды и процессы, чтобы продукты приносили реальную пользу.</p>
      </section>
      <section className="experience">
        <h2>Опыт и направления</h2>
        <ul>
          <li>kkts.ai — Основатель</li>
          <li>ScrumTreл — COO и лидер AI-направления</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Контакты</h2>
        <ul>
          <li>Email: <a href="mailto:">указать</a></li>
          <li>LinkedIn: <a href="#">указать</a></li>
          <li>X/Twitter: <a href="#">указать</a></li>
          <li>GitHub: <a href="#">указать</a></li>
          <li>Telegram: <a href="#">указать</a></li>
        </ul>
        <button className="cta">Скачать vCard</button>
      </section>
    </main>
  )
}
