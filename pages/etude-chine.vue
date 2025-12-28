<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>
         <section class="etudes-chine">
    <!-- HERO SLIDER -->
    <Swiper
      class="hero-swiper"
      :modules="[Autoplay, EffectFade, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{ delay: 4500 }"
      pagination
      navigation
    >
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="hero-slide" :style="{ backgroundImage: `url(${img})` }">
          <div class="overlay"></div>
          <div class="hero-content">
            <h1 class="hero-title text-white">Étudier en Chine avec un accompagnement complet</h1>
            <p class="hero-subtitle text-white">
              Réalisez votre projet académique en toute sérénité. Nous vous accompagnons de l’orientation jusqu’à votre arrivée sur le campus, avec un suivi complet et professionnel.
            </p>
            <NuxtLink to="/contact" class="btn btn-primary btn-lg cta-btn">Demander une consultation</NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>


    <section class="py-5">
    <div class="container" style="margin-top: 6em; margin-bottom: 6em;">
      <!-- Bloc explicatif -->
      <div class="row align-items-center g-5">
        <!-- Image illustrative -->
        <div class="col-md-6 u-image img-fluid ">
        </div>

        <!-- Texte d'accompagnement -->
        <div class="col-md-6">
          <h2 class="sub" style="margin-top: -20px;">{{ $t('we_guide_you') }}</h2>
          <ul class="list-unstyled">
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('assist_visa_request') }}</li>
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('prepare_documents') }}</li>
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('handle_admin_formalities') }}</li>
          </ul>
          <NuxtLink to="/contact-us" class="btn btn-primary mt-3">{{ $t('learnmore') }}</NuxtLink>
        </div>
      </div>

    </div>
  </section>

   <!-- SERVICES -->
    <div class="py-5" style="background-color: #1E497C1C;">
      <div class="secHeading-wrap text-center">
          <h5 class="sectionHeading">Notre accompagnement</h5>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4 service-card bg-white me-3" style="border: 1px solid var(--bs-primary-bg-subtle);" v-for="(service, i) in services" :key="i">
          <div class="d-flex gap-5 align-items-center mb-4">
            <div class="icon"><i :class="service.icon"></i></div> 
            <h5>{{ service.title }}</h5>
          </div>        
          <p>{{ service.desc }}</p>
          <a href="#" class="btn btn-sm btn-primary learn-more">
            En savoir plus
          </a>
        </div>
      </div>
    </div>

    <!-- POURQUOI LA CHINE -->
    <div class="container py-5">
      <!-- <h2 class="text-center section-title">Pourquoi choisir la Chine pour vos études ?</h2> -->
      <div class="secHeading-wrap text-center">
        <h3 class="subsectionHeading">Pourquoi choisir la <span class="text-primary">Chine</span> pour vos études ? </h3>
    </div>
      <div class="row g-4 justify-content-center gap-3">
        <div class="col-md-3 col-lg-3 " v-for="(item, index) in reasons" :key="index" ref="cards">
          <div class="icon">{{ item.icon }}</div>
          <h5>{{ item.title }}</h5>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <section class="stats-section">
  <div class="overlay"></div>

  <div class="stats-content">
    <h2>Nadom conseil en quelques chiffres</h2>

    <div class="stats-grid">
      <div class="stat">
        <span class="number">610</span>
        <span class="label">Projets</span>
      </div>

      <div class="stat">
        <span class="number">400+</span>
        <span class="label">Clients satisfaits</span>
      </div>

      <div class="stat">
        <span class="number">33</span>
        <span class="label">Collaborateurs</span>
      </div>

      <div class="stat">
        <span class="number">10</span>
        <span class="label">Années d'expertise</span>
      </div>
    </div>
  </div>
</section>


<section class="partners-section">
  <h2 class="section-title1">Ils nous ont fait confiance</h2>

  <div class="logos-grid">
    <img :src="u1" alt="Université 2">
    <img :src="u2" alt="Université 3">
    <img :src="u3" alt="Université 1">
    <img :src="u4" alt="Université 4">
    <img :src="u5" alt="Université 5">
    <img :src="u6" alt="Université 6">
    <img :src="u7" alt="Université 7">
    <img :src="u8" alt="Université 8">
    <img :src="u9" alt="Université 9">
    <img :src="u10" alt="Université 10">
  </div>
</section>

   <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading"><span class="text-primary">{{ $t('temoignages_title') }}</span></h3>
                            <p>{{ $t('temoignages_description') }}</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

   

  </section>
    </div>
 
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import etude1 from 'assets/img/index/etudeenchine1.jpg'
import etude2 from 'assets/img/index/etudeenchine2.jpg'
import etude3 from 'assets/img/index/etudeenchine3.jpg'

import u1 from 'assets/img/index/logoU/u1.png'
import u2 from 'assets/img/index/logoU/u2.png'
import u3 from 'assets/img/index/logoU/u3.png'
import u4 from 'assets/img/index/logoU/u4.png'
import u5 from 'assets/img/index/logoU/u5.png'
import u6 from 'assets/img/index/logoU/u6.png'
import u7 from 'assets/img/index/logoU/u7.png'
import u8 from 'assets/img/index/logoU/u8.png'
import u9 from 'assets/img/index/logoU/u9.png'
import u10 from 'assets/img/index/logoU/u10.png'

const images = ref([etude1, etude2, etude3])

const reasons = ref([
  { icon: '🎓', title: 'Universités reconnues', desc: 'Des institutions prestigieuses et classées mondialement.' },
  { icon: '💰', title: 'Frais abordables', desc: 'Étudier à moindre coût comparé à l’Europe ou l’Amérique.' },
  { icon: '🎁', title: 'Bourses disponibles', desc: 'Accédez aux bourses gouvernementales et universitaires.' },
  { icon: '🌍', title: 'Diplômes internationaux', desc: 'Diplômes reconnus dans le monde entier.' },
  { icon: '🚀', title: 'Opportunités pro', desc: 'Des stages et jobs internationaux après vos études.' },
  { icon: '🏙️', title: 'Environnement moderne', desc: 'Vie étudiante multiculturelle et dynamique.' }
])

const services = ref([
  { icon: 'fa-solid fa-user-graduate', title: 'Orientation', desc: 'Conseils personnalisés pour choisir la filière et l’université.' },
  { icon: 'fa-solid fa-file-signature', title: 'Inscription', desc: 'Aide complète pour votre admission en Chine.' },
  { icon: 'fa-solid fa-file', title: 'Dossier', desc: 'Préparation, traduction et légalisation des documents.' },
  { icon: 'fa-solid fa-passport', title: 'Visa', desc: 'Assistance complète pour l’obtention du visa étudiant.' },
  { icon: 'fa-solid fa-house', title: 'Logement', desc: 'Conseils pour votre installation et logement sur place.' },
  { icon: 'fa-solid fa-plane-arrival', title: 'Accueil', desc: 'Accueil à l’aéroport et assistance à l’installation.' }
])

const formations = ref([
  { icon: '📘', title: 'Licence' },
  { icon: '📗', title: 'Master' },
  { icon: '📕', title: 'Doctorat' },
  { icon: '🈶', title: 'Cours chinois' },
  { icon: '🌐', title: 'Programmes en anglais' }
])

const process = ref([
  'Analyse de votre profil',
  'Choix de l’université',
  'Dépôt du dossier',
  'Admission universitaire',
  'Visa étudiant',
  'Départ et installation'
])

const cards = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.value.forEach(card => observer.observe(card));
});

</script>

<style scoped>
  .u-image {
    min-height: 535px;
    background-repeat: no-repeat;
    background-image: url(assets/img/index/visa.jpg);
    background-size: cover;
    border-radius: 0 0 50px 0;
    background-attachment: fixed;
    background-position: 50% -10.7241vh;

}
  .card-info {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
}

.card-info.is-visible {
  opacity: 1;
  transform: translateY(0);
  animation: zoomIn 0.6s ease forwards;
}

/* .card-info.is-visible {
  animation: zoomIn 0.6s ease forwards;
} */

.etudes-chine {
  font-family: 'Poppins', sans-serif;
  color: #1f2937;
}

/* HERO SLIDER */
.hero-swiper { height: 60vh; }
.hero-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease forwards;
}
.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease forwards;
}
.cta-btn {
  animation: pulse 2s infinite;
}

/* Cards */
.card-info, .service-card, .formation-card {
  background: #e6e7e9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 400px;
}


.learn-more {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(56px);
  opacity: 0;
  transition: all 0.3s ease;
}

/* Hover */
.service-card:hover .learn-more {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.service-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* .service-card {
    background: #ffffff;
    border: 1px solid #94a3b8;
    border-radius: 0 0 50px 0;
    padding: 2.0rem;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
} */

.card-info:hover, .service-card:hover, .formation-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border: 1px solid #d88b33;
}
.icon { 
    /* font-size: 2rem; margin-bottom: 0.5rem; 
    background: var(--bs-primary-bg-subtle); */
    width: 70px;
    height: 70px;
    background: var(--bs-primary-bg-subtle);
    /* linear-gradient(135deg, #3b82f6, #8b5cf6); */
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

/* Section titles */
.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  color: #000 !important;
}

.section-title1{
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5rem;
  color: #000 !important;
}

/* Process list */
.process-list {
  max-width: 700px;
  margin: 0 auto;
  counter-reset: step;
}
.process-list li {
  list-style: none;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;
}
.process-list li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  background: #007bff;
  color: #fff;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
}

/* .stat{
  height: 600px;
  background-image: url(https://daxueconseil.fr/wp-content/uploads/2021/03/world-map.jpg);
    background-position: top right;
    background-size: cover;
} */

/* partie carte du monde avec des chiffres */
.stats-section {
  position: relative;
  height: 500px;
  background-image: url(https://daxueconseil.fr/wp-content/uploads/2021/03/world-map.jpg);
  background-position: top right;
  background-size: cover;
  padding: 80px 20px;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.stats-content {
  position: relative;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  z-index: 1;
}

.stats-content h2 {
  font-size: 32px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 60px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat .number {
  font-size: 64px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}

.stat .label {
  font-size: 16px;
  opacity: 0.9;
}

@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat .number {
    font-size: 48px;
  }
}


/* Partie partenaire universitaire */
.partners-section {
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 32px;
  color: #000000;
  margin-bottom: 50px;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  margin: auto;
}

.logos-grid img {
  max-width: 140px;
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logos-grid img:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.05);
}



/* Animations */
@keyframes fadeInDown { from { opacity:0; transform: translateY(-20px);} to {opacity:1; transform:translateY(0);} }
@keyframes fadeInUp { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform:translateY(0);} }
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
</style>
