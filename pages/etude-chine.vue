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
            <h1 class="hero-title">Étudier en Chine avec un accompagnement complet</h1>
            <p class="hero-subtitle">
              Réalisez votre projet académique en toute sérénité. Nous vous accompagnons de l’orientation jusqu’à votre arrivée sur le campus, avec un suivi complet et professionnel.
            </p>
            <NuxtLink to="/contact" class="btn btn-primary btn-lg cta-btn">Demander une consultation</NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- POURQUOI LA CHINE -->
    <div class="container py-5">
      <!-- <h2 class="text-center section-title">Pourquoi choisir la Chine pour vos études ?</h2> -->
      <div class="secHeading-wrap text-center">
        <h3 class="sectionHeading">Pourquoi choisir la <span class="text-primary">Chine</span> pour vos études ? </h3>
    </div>
      <div class="row g-4 justify-content-center gap-3">
        <div class="col-md-6 col-lg-4 card-info" v-for="(item, index) in reasons" :key="index" >
          <div class="icon">{{ item.icon }}</div>
          <h5>{{ item.title }}</h5>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- SERVICES -->
    <div class="py-5 bg-light">
      <h2 class="text-center section-title">Notre accompagnement</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4 service-card" v-for="(service, i) in services" :key="i">
          <div class="icon"><i :class="service.icon"></i></div>
          <h5>{{ service.title }}</h5>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </div>

    <!-- FORMATIONS -->
    <div class="container py-5">
      <h2 class="text-center section-title">Types de formations disponibles</h2>
      <div class="row g-3 justify-content-center">
        <div class="col-6 col-md-4 formation-card" v-for="(formation, i) in formations" :key="i">
          <div class="icon">{{ formation.icon }}</div>
          <h5>{{ formation.title }}</h5>
        </div>
      </div>
    </div>

    <!-- PROCESSUS -->
    <div class="container py-5 bg-light">
      <h2 class="text-center section-title">Notre processus</h2>
      <ol class="process-list">
        <li v-for="(step, i) in process" :key="i">{{ step }}</li>
      </ol>
    </div>

    <!-- CTA FINAL -->
    <div class="container text-center py-5">
      <h2 class="section-title">Prêt à étudier en Chine ?</h2>
      <p class="mb-4 lead">Contactez-nous dès aujourd’hui pour une orientation gratuite.</p>
      <NuxtLink to="/contact" class="btn btn-primary btn-lg cta-btn">Demander une consultation</NuxtLink>
    </div>

  </section>
    </div>
 
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = ref([
  'assets/img/index/etudeenchine1.jpg',
  'assets/img/index/etudeenchine2.jpg',
  'assets/img/index/etudeenchine3.jpg'
])

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
</script>

<style scoped>
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
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #94a3b8;
  border-radius: 0 0 50px 0;
  max-width: 400px;
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
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
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

/* Animations */
@keyframes fadeInDown { from { opacity:0; transform: translateY(-20px);} to {opacity:1; transform:translateY(0);} }
@keyframes fadeInUp { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform:translateY(0);} }
@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
</style>
