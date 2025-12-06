<template>
    <div>
        <ClientOnly>
            <NavbarAdmin />
        </ClientOnly>

        <section class="p-0">
            <div class="container-fluid p-0">
                <div class="row user-dashboard g-0">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <AdminSidebar/>
                    </div>

                    <div class="col-xl-10 col-lg-9 col-md-12">
                        <div class="user-dashboard-box bg-light">

                            <div class="dashHeader p-xl-5 p-4 pb-xl-0 pb-0 pt-lg-0 pt-5 mt-lg-0 mt-5">
                                <h2 class="fw-medium mb-0">Messages</h2>
                            </div>

                            <div class="dashCaption p-xl-5 p-3 p-md-4">

                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header px-4 py-3">
                                                <h4 class="m-0">All Messages</h4>
                                            </div>
                                            <div class="card-body p-0">
                                                <ul class="dashboardListgroup nospace">
                                                    <li v-for="(item, index) in data" :key="index">
                                                        <a href="#" class="singleMessageswrap" data-bs-toggle="modal" data-bs-target="#conversionModal">
                                                            <div class="singleMessages">
                                                                <div class="messagesAvatar">
                                                                    <figure class="m-0">
                                                                        <img :src="item.image" class="img-fluid circle avatar-xl" alt="Avatar">
                                                                        <span class="userStatus online"></span>
                                                                    </figure>
                                                                </div>

                                                                <div class="messagesInfo">
                                                                    <div class="messagesupper d-flex align-items-center justify-content-between gap-2 mb-1">
                                                                        <div class="messagesupper d-flex align-items-center justify-content-start gap-2">
                                                                            <h6 class="messageuserTitle">{{item.name}}</h6>
                                                                        </div>
                                                                        <div class="flxLast"><span class="text-md text-muted">{{item.time}}</span></div>
                                                                    </div>
                                                                    <div class="messagesBody">
                                                                        <p class="m-0">Hello, I want to disscuss with you regarding my listing <strong>Apolo Hotel</strong> to manage and upgrade it with...</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start g-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <p class="text-muted m-0">©ListingHub {{year}} Design & Develop By ShreeThemes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade" id="conversionModal" tabindex="-1" aria-labelledby="conversionModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent">
                    <div class="chatboxWraper" id="conversionModalLabel">
                        <div class="bg-cover chatboxHeader py-5" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="5">
                            <a href="#" data-bs-dismiss="modal" aria-label="Close" class="close"><i class="bi bi-x"></i></a>
                            <div class="chatAvatar"><figure><img :src="team2" class="img-fluid circle avatar-xl" alt="Chat Avatar"></figure></div>
                            <div class="chaterInfo">
                                <h6 class="chatterTitle">Michel K. Deve</h6>
                                <p class="subtitle">michelk.deve@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class="chatboxbody">
                            <div id="chat-messages" class="animate">
                                <label>Tuesday 07</label>
                                
                                <div class="message">
                                    <img :src="team2" alt="">
                                    <div class="bubble">Hi dear Michel!<div class="corner"></div><span>1 min</span></div>
                                </div>
                                
                                <div class="message right">
                                    <img :src="team4" alt="">
                                    <div class="bubble">Hi, How may i help you?<div class="corner"></div><span>4 min</span></div>
                                </div>
                                
                                <div class="message">
                                    <img :src="team2" alt="">
                                    <div class="bubble">Can you share your demo link?<div class="corner"></div><span>Now</span></div>
                                </div>
                                
                                <div class="message right">
                                    <img :src="team4" alt="">
                                    <div class="bubble">Yah! Why not please share yor email.<div class="corner"></div><span>2 min</span></div>
                                </div>
                                
                                <div class="message">
                                    <img :src="team2" alt="">
                                    <div class="bubble">Yeah, hold on<div class="corner"></div><span>1 min</span></div>
                                </div>
                                
                                <div class="message">
                                    <img :src="team2" alt="">
                                    <div class="bubble">This is my id "mitchel.warm@gmail.com"<div class="corner"></div><span>1 min</span></div>
                                </div>
                                
                                <div class="message right">
                                    <img :src="team4" alt="">
                                    <div class="bubble">Ok Dear! We will share soon.<div class="corner"></div><span>now</span></div>
                                </div>
                                
                                <div class="message">
                                    <img :src="team2" alt="">
                                    <div class="bubble">Thanks a lot!<div class="corner"></div><span>Now</span></div>
                                </div>
                            </div>
                    
                        </div>
                        
                        <div class="chatfooter">
                            <div class="chatAdder">
                                <button type="button" id="add"><i class="bi bi-patch-plus-fill"></i></button>
                                <button type="button" id="gif"><i class="bi bi-emoji-laughing"></i></button>
                            </div>
                            <div class="sendmessage">
                                <input type="text" class="form-control" value="Send message...">
                                <button type="button" id="send"><i class="bi bi-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <BackToTop/>
    </div>
</template>

<script setup>
    import AdminSidebar from '@/components/admin-sidebar.vue';
    import NavbarAdmin from '@/components/navbar/navbar-admin.vue';
    import bg from '@/assets/img/avatar-bg-2.jpg'
    import { ref } from 'vue';
    import team1 from '@/assets/img/team-1.jpg'
    import team2 from '@/assets/img/team-2.jpg'
    import team3 from '@/assets/img/team-3.jpg'
    import team4 from '@/assets/img/team-4.jpg'
    import team5 from '@/assets/img/team-5.jpg'
    import team6 from '@/assets/img/team-6.jpg'

    const year = ref(new Date().getFullYear())

    const data = ref([
        {
            image:team1,
            name:'Karan Shivraj',
            time:'Today'
        },
        {
            image:team2,
            name:'Shree Preet',
            time:'Just Now'
        },
        {
            image:team3,
            name:'Shikhar Musk',
            time:'30 min ago'
        },
        {
            image:team4,
            name:'Mortin Mukkar',
            time:'Yesterday'
        },
        {
            image:team5,
            name:'Melly Arjun',
            time:'Today'
        },
        {
            image:team6,
            name:'Mortin Mukkar',
            time:'Yesterday'
        },
    ])

</script>
