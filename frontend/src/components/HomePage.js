import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import dom1 from '../img/dom1.jpg'; 
import dom2 from '../img/dom2.jpg'; 
import stroika from '../img/stroika.jpg'; 
import stroika2 from '../img/stroika2.jpg'; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Добро пожаловать!</h1>
        <p>
          Миссия компании "Атмосфера комфорта" заключается в создании комфортных и безопасных пространств для жизни и работы, 
          где каждый клиент чувствует заботу и внимание к своим потребностям.
        </p>
        <p>
          Ценности компании включают: высокое качество услуг, индивидуальный подход к каждому клиенту, инновации в строительстве, 
          устойчивое развитие и заботу об экологии.
        </p>
      </section>

      <section className="images-section">
        <h2>Наши проекты</h2>
        <div className="image-gallery">
          <img src={dom1} alt="Проект дома 1" className="project-image" />
          <img src={dom2} alt="Проект дома 2" className="project-image" />
          <img src={stroika} alt="Строительство 1" className="project-image" />
          <img src={stroika2} alt="Строительство 2" className="project-image" />
        </div>
      </section>

      <section className="values">
        <h2>Основные ценности</h2>
        <ul>
          <li><strong>Качество:</strong> Мы стремимся предоставлять услуги наивысшего качества, используя только лучшие материалы и технологии.</li>
          <li><strong>Индивидуальный подход:</strong> Каждый проект уникален, и мы учитываем все пожелания и требования наших клиентов.</li>
          <li><strong>Инновации:</strong> Мы постоянно ищем новые решения и технологии, чтобы улучшить наши услуги и повысить эффективность работы.</li>
          <li><strong>Устойчивое развитие:</strong> Мы заботимся о будущем планеты, используя экологически чистые материалы и практики.</li>
          <li><strong>Командная работа:</strong> Мы верим в силу команды и ценим вклад каждого сотрудника, создавая атмосферу сотрудничества и поддержки.</li>
        </ul>
      </section>
      
      <div className="sidebar-buttons">
        <section className="overview-section">
          <h2>Отзывы</h2>
          <p>Посмотрите, что наши клиенты говорят о нас!</p>
          <button onClick={() => navigate('/otzivi')}>Перейти</button>
        </section>

        <section className="overview-section">
          <h2>Калькулятор</h2>
          <p>Рассчитайте стоимость строительства вашего дома.</p>
          <button onClick={() => navigate('/calculator')}>Рассчитать</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
