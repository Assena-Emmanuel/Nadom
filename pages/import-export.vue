<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>

        <div class="image-cover position-relative" :style="{backgroundImage:`url(${bg})`, padding: '5em 0px'}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5 mt-lg-0 mt-0">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1 style="font-size: 5.2em;">Acheter, étudier et séjourner en chine avec notre expertise</h1>
                            <p class="subtexte">etudes, Commerce, visa : nous simplifions votre projet chinois</p>

                        </div>
                    </div>
                </div>

                <section class="tracking-section position-absolute">
                    
                    <div class="tracking-container">
                        <h2 class="fs-3">Suivez votre colis (Ex: GT123456789 ou GT987654321)</h2>
                        <div class="tracking-form">
                            <input type="text" id="trackingInput" v-model="trackingInput" @keyup.enter="trackPackage" placeholder="Entrez votre numéro de suivi" />
                            <button class="btn btn-primary px-5 fw-bold" @click="trackPackage" v-if="!showAnnulerBtn"><VueSpinnerBall size="40" color="white" v-if="loading" /> Suivre</button>
                            <button class="btn btn-danger px-5 fw-bold" @click="handlAnnuler()" v-if="showAnnulerBtn"> Annuler</button>
                        </div>

                        <div id="trackingResult" class="tracking-result" v-if="error.error || data">
                            <div class="error-message" v-if="error.error">{{ error.message }}</div>
                            <div class="tracking-info" v-else>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                    <h3 style="color: #000; font-size: 1.5rem;">Suivi: {{trackingNumber}}</h3>
                                    <span :class="['status-badge',data.status]">{{data.statusText}}</span>
                                </div>
                        
                                <div class="tracking-info-grid">
                                    <div class="info-item">
                                        <span class="info-label">📍 Origine</span>
                                        <span class="info-value">{{data.origin}}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">🎯 Destination</span>
                                        <span class="info-value">{{data.destination}}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">📅 Livraison estimée</span>
                                        <span class="info-value">{{data.estimatedDelivery}}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">⚖️ Poids</span>
                                        <span class="info-value">{{data.weight}}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">🚚 Transporteur</span>
                                        <span class="info-value">{{data.carrier}}</span>
                                    </div>
                                </div>
                                <div style="margin-top: 2rem;">
                                    <h3 style="color: #000; font-size: 1.3rem; margin-bottom: 1.5rem;">📦 Historique du colis</h3>
                                    <div class="tracking-timeline">
                                        <div v-for="item in data.timeline" :key="item.date" 
                                        :class="{
                                            'timeline-item': true,
                                            'completed': item.completed
                                        }">
                                            <div class="timeline-date">{{item.date}}</div>
                                            <div class="timeline-title">{{item.title}}</div>
                                            <div class="timeline-description">{{item.description}}</div>
                                        </div>
                                    </div>
                                </div>
                                
                         </div>

                    
            
                        </div>
                    </div>
                </section>
                
            
            </div>
            <!-- <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div> -->
        </div>

        
        
        <CategoryTwo/>

        <section class="services">
            <!-- <h2 class="section-title">Nos Services</h2> -->
             <h2 class="sectionHeading fw-bold mb-3" style="font-size: 34px; padding: 0 0 1.2em 0;">
                <span class="text-primary">{{ $t('our_services') }}</span>
            </h2>
            <div class="services-grid">
                <div class="service-card" v-appear="'zoom-in'">
                    <div class="service-icon">📦</div>
                    <h3>Logistique Internationale</h3>
                    <p>Gestion complète de vos expéditions avec suivi en temps réel et optimisation des coûts de transport</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">📋</div>
                    <h3>Formalités Douanières</h3>
                    <p>Expertise en réglementation douanière pour faciliter le passage de vos marchandises aux frontières</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🤝</div>
                    <h3>Sourcing & Partenariats</h3>
                    <p>Identification de fournisseurs fiables et négociation de contrats avantageux sur les marchés internationaux</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">💼</div>
                    <h3>Conseil Stratégique</h3>
                    <p>Accompagnement personnalisé pour développer votre stratégie d'expansion commerciale internationale</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔒</div>
                    <h3>Assurance & Conformité</h3>
                    <p>Protection de vos marchandises et conformité aux normes internationales de qualité et sécurité</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>Analyse de Marché</h3>
                    <p>Études approfondies des tendances et opportunités sur vos marchés cibles à l'international</p>
                    <div class="learn-more ">
                        <span style="border: 1px solid #ccc; padding: 3px 10px; border-radius: 6px; background-color: #c99a0b; ">
                            <a href="" class="text-white">Plus +</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="stats-section">
            <div class="overlay"></div>
          <div class="stats-content pb-5">
            <h2>Nadom conseil en quelques chiffres</h2>

            <div class="stats-grid">
            <div class="stat">
                <span class="number">210</span>
                <span class="label">Pays Desservis</span>
            </div>

            <div class="stat">
                <span class="number">5000+</span>
                <span class="label">Clients satisfaits</span>
            </div>

            <div class="stat">
                <span class="number">27/7</span>
                <span class="label">Support Client</span>
            </div>

            <div class="stat">
                <span class="number">10</span>
                <span class="label">Années d'expertise</span>
            </div>
            </div>
        </div>
        </section>

        
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import bg from '@/assets/img/index/importexport.jpg'

    const trackingInput = ref('')
    const trackingNumber = ref("")
    const showAnnulerBtn = ref(false)
    const error = ref({error:false, message: ''})
    const data = ref(null)
    const loading = ref(false)
    const trackingData = ref({
        'GT123456789': {
            status: 'in-transit',
            statusText: 'En transit',
            origin: 'Shanghai, Chine',
            destination: 'Paris, France',
            estimatedDelivery: '18 Décembre 2024',
            weight: '25 kg',
            carrier: 'GlobalTrade Express',
            timeline: [
                {
                    date: '10 Déc 2024, 14:30',
                    title: 'Colis expédié',
                    description: 'Votre colis a quitté l\'entrepôt de Shanghai',
                    completed: true
                },
                {
                    date: '12 Déc 2024, 09:15',
                    title: 'En transit - Douane',
                    description: 'Passage en douane à Hong Kong',
                    completed: true
                },
                {
                    date: '14 Déc 2024, 16:45',
                    title: 'En transit - Vol international',
                    description: 'Chargé sur vol GT4587 vers Paris CDG',
                    completed: true
                },
                {
                    date: '15 Déc 2024, 08:20',
                    title: 'Arrivé à destination',
                    description: 'Arrivé au centre de tri Paris-Nord',
                    completed: false
                },
                {
                    date: '18 Déc 2024, Estimé',
                    title: 'Livraison prévue',
                    description: 'Livraison à votre adresse',
                    completed: false
                }
            ]
        },
        'GT987654321': {
            status: 'delivered',
            statusText: 'Livré',
            origin: 'Mumbai, Inde',
            destination: 'Lyon, France',
            estimatedDelivery: 'Livré le 13 Décembre 2024',
            weight: '15 kg',
            carrier: 'GlobalTrade Express',
            timeline: [
                {
                    date: '08 Déc 2024, 11:20',
                    title: 'Colis expédié',
                    description: 'Votre colis a quitté l\'entrepôt de Mumbai',
                    completed: true
                },
                {
                    date: '10 Déc 2024, 14:30',
                    title: 'En transit - Vol international',
                    description: 'En route vers la France',
                    completed: true
                },
                {
                    date: '12 Déc 2024, 07:15',
                    title: 'Arrivé en France',
                    description: 'Traitement au centre de Lyon',
                    completed: true
                },
                {
                    date: '13 Déc 2024, 10:45',
                    title: 'Livré',
                    description: 'Colis livré et signé par M. Dupont',
                    completed: true
                }
            ]
        }
    });

   
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const handlAnnuler = () =>{
        loading.value = false
        error.value=false
        error.value.message=""
        data.value = null

        showAnnulerBtn.value = false
    }

    function trackPackage() {
        try{
            
            sleep(40000)

            trackingNumber.value = trackingInput.value.trim().toUpperCase();

            
            if (!trackingNumber.value) {
                error.value.error = true
                error.value.message = "⚠️ Veuillez entrer un numéro de suivi"
                return;
            }

            console.log("code: ",trackingNumber.value,"\n value: ",trackingData[trackingNumber.value])
            data.value = trackingData.value[trackingNumber.value];

            if (!data.value) {
                error.value.error = true
                error.value.message = "❌ Numéro de suivi introuvable. Veuillez vérifier et réessayer."
                return;
            }
            showAnnulerBtn.value = true
        }catch(e){
            console.error(e)
        }finally{
            loading.value =false
        }

            // const statusClass = data.status;
            // const timelineHTML = data.timeline.map(item => `
            //     <div class="timeline-item ${item.completed ? 'completed' : ''}">
            //         <div class="timeline-date">${item.date}</div>
            //         <div class="timeline-title">${item.title}</div>
            //         <div class="timeline-description">${item.description}</div>
            //     </div>
            // `).join('');

            // result.innerHTML = `
            //     <div class="tracking-info">
            //         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            //             <h3 style="color: #e2e8f0; font-size: 1.5rem;">Suivi: ${trackingNumber}</h3>
            //             <span class="status-badge ${statusClass}">${data.statusText}</span>
            //         </div>
                    
            //         <div class="tracking-info-grid">
            //             <div class="info-item">
            //                 <span class="info-label">📍 Origine</span>
            //                 <span class="info-value">${data.origin}</span>
            //             </div>
            //             <div class="info-item">
            //                 <span class="info-label">🎯 Destination</span>
            //                 <span class="info-value">${data.destination}</span>
            //             </div>
            //             <div class="info-item">
            //                 <span class="info-label">📅 Livraison estimée</span>
            //                 <span class="info-value">${data.estimatedDelivery}</span>
            //             </div>
            //             <div class="info-item">
            //                 <span class="info-label">⚖️ Poids</span>
            //                 <span class="info-value">${data.weight}</span>
            //             </div>
            //             <div class="info-item">
            //                 <span class="info-label">🚚 Transporteur</span>
            //                 <span class="info-value">${data.carrier}</span>
            //             </div>
            //         </div>
            //     </div>

            //     <div style="margin-top: 2rem;">
            //         <h3 style="color: #e2e8f0; font-size: 1.3rem; margin-bottom: 1.5rem;">📦 Historique du colis</h3>
            //         <div class="tracking-timeline">
            //             ${timelineHTML}
            //         </div>
            //     </div>
            // `;

            // result.classList.add('active');
    }

        // document.getElementById('trackingInput').addEventListener('keypress', function(e) {
        //     if (e.key === 'Enter') {
        //         trackPackage();
        //     }
        // });

</script>

<style>
    .services {
            max-width: 1400px;
            margin: 12rem auto;
            padding: 0 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 1.9rem;
            margin-bottom: 3rem;
            background: linear-gradient(135deg, #ffffff, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: #ffffff;
            border: 1px solid #94a3b8;
            border-radius: 0 0 50px 0;
            padding: 2.0rem;
            transition: all 0.3s;
            backdrop-filter: blur(10px);
        }

        .service-card:hover {
            transform: translateY(-10px);
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .service-icon {
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

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #000000;
        }

        .service-card p {
            color: #94a3b8;
            line-height: 1.6;
        }

        /* Stat */
        .stats {
            max-width: 1400px;
            margin: 6rem auto;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
            border-radius: 30px;
            border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
            text-align: center;
        }

        .stat-item h4 {
            font-size: 3rem;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }

        .stat-item p {
            color: #94a3b8;
            font-size: 1.1rem;
        }

        /* Suivre colis */

        .tracking-section {
            min-width: 1400px;
            top: 18rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 0 2rem;
        }

        .tracking-container {
            background: rgba(229, 233, 240, 0.5);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 20px;
            padding: 1.5rem 2rem 2rem 2rem;
            backdrop-filter: blur(10px);
        }

        .tracking-form {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }

        #trackingInput {
            flex: 1;
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 50px;
            border: 4px solid #c99a0b;
            background: rgba(255, 255, 255);
            color: #000;
            font-size: 1rem;
            transition: all 0.3s;
        }

        #trackingInput:focus {
            outline: none;
            border-color: #c99a0b;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        #trackingInput::placeholder {
            color: #000000;
        }

        /* .tracking-result {
            display: none;
        } */

        .tracking-result.active {
            display: block;
            animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .tracking-info {
            background: #fff;
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .tracking-info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .info-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .info-label {
            color: #000000;
            font-size: 0.9rem;
        }

        .info-value {
            color: #000000;
            font-weight: 600;
            font-size: 1.1rem;
        }

        .tracking-timeline {
            position: relative;
            padding-left: 2rem;
        }

        .timeline-item {
            position: relative;
            padding-bottom: 2rem;
            padding-left: 2rem;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -2rem;
            top: 8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            left: calc(-2rem + 7px);
            top: 24px;
            width: 2px;
            height: calc(100% - 24px);
            background: linear-gradient(to bottom, #3b82f6, transparent);
        }

        .timeline-item:last-child::after {
            display: none;
        }

        .timeline-item.completed::before {
            background: linear-gradient(135deg, #10b981, #34d399);
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
        }

        .timeline-date {
            color: #3b82f6;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            color: #191b1f;
            font-weight: 600;
            margin-bottom: 0.3rem;
        }

        .timeline-description {
            color: #0c0d0f;
            font-size: 0.95rem;
        }

        .status-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .status-badge.in-transit {
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .status-badge.delivered {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .error-message {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #f87171;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            text-align: center;
        }


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

.learn-more {
  position: absolute;
  bottom: 20px;
  top: 20px;
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
</style>