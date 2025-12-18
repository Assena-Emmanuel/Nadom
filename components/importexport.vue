<template>
  <section id="import-export" class="import-export">
    <div class="overlay"></div>

    <div class="container position-relative">
      
      <!-- Titre -->
      <div class="row mb-5">
        <div class="secHeading-wrap text-center">
            <!-- Titre principal moderne -->
            <h2 class="sectionHeading fw-bold mb-3" style="font-size: 45px;">
                <span class="text-white">{{ t('title') }}</span>
            </h2>
            <p class="text-white">{{ t('description') }}</p>
        </div>
      </div>

      <!-- Cards -->
      <div class="row g-4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-md-6 col-lg-3"
        >
          <div class="service-card h-100 text-center p-4">
            <div class="catsIcons">
              <div class="icoBoxx">
                  <i :class="item.icon"></i>
                  <!-- <i :class="item.icon" class="service-icon mb-3"></i> -->
              </div>
            </div>
            
            <h6 class="fw-semibold mb-2">
              {{ t(item.title) }}
            </h6>
            <p class="text-muted small mb-0">
              {{ t(item.text) }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="row mt-5">
        <div class="col text-center">
          <NuxtLink to="/contact-us" class="btn btn-primary btn-lg">
            {{ t('cta') }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Import – Export Chine ↔ Afrique / Europe',
      description:
        'Un accompagnement complet pour sécuriser vos opérations commerciales internationales.',
      cards: {
        sourcing: {
          title: 'Recherche fournisseurs',
          text: 'Identification de partenaires fiables et négociation des meilleurs prix.'
        },
        quality: {
          title: 'Contrôle qualité',
          text: 'Inspection des produits avant expédition.'
        },
        shipping: {
          title: 'Transport international',
          text: 'Organisation du fret maritime et aérien.'
        },
        customs: {
          title: 'Dédouanement',
          text: 'Gestion des formalités douanières.'
        }
      },
      cta: 'Demander un devis'
    },
    en: {
      title: 'Import – Export China ↔ Africa / Europe',
      description:
        'Complete support to secure your international trade operations.',
      cards: {
        sourcing: {
          title: 'Supplier sourcing',
          text: 'Finding reliable suppliers and negotiating prices.'
        },
        quality: {
          title: 'Quality control',
          text: 'Product inspection before shipment.'
        },
        shipping: {
          title: 'International shipping',
          text: 'Sea and air freight organization.'
        },
        customs: {
          title: 'Customs clearance',
          text: 'Handling customs procedures.'
        }
      },
      cta: 'Request a quote'
    }
  }
})

const items = [
  { icon: 'bi bi-search', title: 'cards.sourcing.title', text: 'cards.sourcing.text' },
  { icon: 'bi bi-shield-check', title: 'cards.quality.title', text: 'cards.quality.text' },
  { icon: 'bi bi-truck', title: 'cards.shipping.title', text: 'cards.shipping.text' },
  { icon: 'bi bi-file-earmark-text', title: 'cards.customs.title', text: 'cards.customs.text' }
]
</script>

<style scoped lang="scss">
.import-export {
  padding: 15em 0;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("assets/img/index/importexport.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.overlay {
  display: none; /* ❌ plus nécessaire */
}


@media (min-width: 992px) {
  .import-export {
    background-attachment: fixed;
  }
}


.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.service-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid var(--bs-primary);
}

.service-card:hover {
  transform: translateY(-6px);
}

.icoBoxx {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    margin: 1rem auto;
    justify-content: center;
    border-radius: 50%;
    font-size: 2.2rem;
    background: var(--bs-primary-bg-subtle);
    color: var(--bs-primary);
    transition: 0.3s;
    z-index: 11;
    position: relative;
  }

.service-icon {
  font-size: 2.3rem;
  color: #0d6efd;
}
</style>