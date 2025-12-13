<template>
  <section id="visa" class="visa-section py-5">
    <div class="container">
      
      <!-- Titre -->
      <div class="row mb-4">
        <div class="col text-center">
          <h2 class="fw-bold">{{ $t('visa_administrative') }}</h2>
          <p class="text-muted mt-2">
            {{ $t('visa_description') }}
          </p>
        </div>
      </div>

      <!-- Cards / Étapes -->
      <div class="row g-4">
        <div
          v-for="(item, index) in visaItems"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="visa-card h-100 p-4 text-center">
            <i :class="item.icon" class="visa-icon mb-3"></i>
            <h5 class="fw-semibold mb-2">{{ $t(item.title) }}</h5>
            <p class="text-muted small mb-0">{{ $t(item.text) }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="row mt-5">
        <div class="col text-center">
          <NuxtLink to="/contact-us" class="btn btn-primary btn-lg">
            {{ $t('contactsus') }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import {ref} from "vue"


const visaItems= ref([
        {
          title: 'visa_request',
          text: 'We guide you through the visa request process for each country.',
          icon: 'bi bi-card-checklist'
        },
        {
          title: 'documents',
          text: 'Verification and preparation of required documents.',
          icon: 'bi bi-file-earmark-text'
        },
        {
          title: 'formalities_followup',
          text: 'Assistance in tracking administrative procedures.',
          icon: 'bi bi-clock-history'
        }
])

</script>

<style scoped lang="scss">
.visa-section {
  background-color: #f9f9f9;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.visa-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.visa-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.visa-icon {
  font-size: 2.5rem;
  color: #0d6efd;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .visa-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
