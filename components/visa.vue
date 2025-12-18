<template>
  <section id="visa" class="visa-section py-5">
    <div class="container" style="margin-top: 10em; margin-bottom: 6em;">

      <!-- Titre + accroche -->
      <div class="row mb-4">
        <div class="col text-center">
          <h2 class="sectionHeading fw-bold mb-3" style="font-size: 34px;">
              <span class="text-primary">{{ $t('visa_administrative') }}</span>
          </h2>
          <p class="text-muted mt-2">{{ $t('visa_description') }}</p>
        </div>
      </div>

      <!-- Bloc explicatif -->
      <div class="row align-items-center g-4">
        <!-- Image illustrative -->
        <div class="col-md-6">
          <img
    src="assets/img/index/visa.jpg"
    alt="Passeport et voyage"
    class="img-fluid rounded shadow"
  />
        </div>

        <!-- Texte d'accompagnement -->
        <div class="col-md-6">
          <h5 class="fw-semibold mb-3">{{ $t('we_guide_you') }}</h5>
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
  background-color: #ffffff;
  padding-top: 16rem;
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
