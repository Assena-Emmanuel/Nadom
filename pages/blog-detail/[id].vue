<template>
    <div class="bg-light">
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>
        <section>
            <div class="container">
                <div class="row justify-content-start align-items-center">
                    <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">
                        <div class="position-relative pt-lg-0 pt-5">
                            <h1 class="xl-heading">Latest Article</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Blog</NuxtLink></li>
                                    <li>Blog Detail</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-0">
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12">
                        <div class="blogDetails d-flex align-items-start gap-4 flex-column w-100">
                            <div class="card shadow-sm w-100">
                                <div class="blogThumb">
                                    <img :src="data && data.image ? data.image : blog" class="img-fluid" alt="Blog Thumb">
                                </div>
                                
                                <div class="card-body">
                                    <div class="d-inline-flex mb-2"><span class="badge badge-xs badge-primary rounded-pill">Software & Tools</span></div>
                                    <h1 class="fs-3">{{data && data.title ? data.title : 'Top 10 Free Bootstrap Templates for Your Next Project'}}</h1>
                                    <div class="d-flex align-items-center justify-content-start flex-wrap gap-3 mb-3">
                                        <div>By <NuxtLink to="#" class="link">Adam Michel</NuxtLink></div>
                                        <div>{{data && data.date ? data.date : '12 Sep 2024'}}</div>
                                        <div><NuxtLink to="#" class="link">24 Comments</NuxtLink></div>
                                    </div>
                                    
                                    <p>Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, all of them potentially with different sizes</p>
                                    
                                    <p>This is quite a problem to solve, but just doing without greeking text won't fix it. Using test items of real content and data in designs will help, but there's no guarantee that every oddity will be found and corrected. Do you want to be sure? Then a prototype or beta site with real content published from the real CMS is needed—but you’re not going that far until you go through an initial design cycle.</p>
                                    
                                    <blockquote class="bg-light-primary rounded text-center p-3 p-md-4 my-4">
                                        <h6 class="fw-normal lh-base"><i class="fa-solid fa-quote-left me-2"></i>Asking the client to pay no attention Lorem Ipsum isn't hard as it doesn’t make sense in the first place, that will limit any initial interest soon enough. Try telling a client to ignore draft copy however, and you're up to something you can't win.<i class="fa-solid fa-quote-right ms-2"></i></h6>
                                        <div class="blockquote-footer mb-0 fs-6 mt-3 text-primary fw-medium">Rouze M. Alhatri</div>
                                    </blockquote>
                                    
                                    <p>Typographers of yore didn't come up with the concept of dummy copy because people thought that content is inconsequential window dressing, only there to be used by designers who can’t be bothered to read. Lorem Ipsum is needed because words matter, a lot. Just fill up a page with draft copy about the client’s business and they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong way and draft copy can derail your design review.</p>
                                    
                                    <p>Asking the client to pay no attention Lorem Ipsum isn't hard as it doesn’t make sense in the first place, that will limit any initial interest soon enough. Try telling a client to ignore draft copy however, and you're up to something you can't win. Whenever draft copy comes up in a meeting confused questions about it ensue.</p>
                                    
                                    <p>You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs. Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design</p>
                                    
                                </div>
                                
                                <div class="card-footer border-top bg-white">
                                    <div class="d-md-flex justify-content-between align-items-center">
                                        <h6 class="mb-0">Was this article helpful?</h6>
                                        <small class="py-3 p-md-0 d-block">40 out of 84 found this helpful</small>
                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
                                            <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio1"><i class="fa-regular fa-thumbs-up me-1"></i> Yes</label>
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                                            <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio2"> No <i class="fa-regular fa-thumbs-down ms-1"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow-sm w-100">
                                <div class="card-header p-4">
                                    <h4>Comments (4)</h4>
                                </div>
                                
                                <div class="card-body">
                                    <div class="blogcommentsBox">
                                        <ul>
                                            <li>
                                                <div class="singleComments">
                                                    <div class="blogavatar">
                                                        <img :src="team1" class="img-fluid circle" alt="">
                                                    </div>
                                                    <div class="blogCaps">
                                                        <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                                            <div class="commentBy">
                                                                <h6 class="mb-1 lh-base">Mitchel Musk</h6>
                                                                <span>Aug 15 2024</span>
                                                            </div>
                                                            <div class="replyLink">
                                                                <NuxtLink to="#" class="btn btn-sm btn-light rounded-pill" data-bs-toggle="modal" data-bs-target="#commentModal"><i class="bi bi-reply me-2"></i>Reply</NuxtLink>
                                                            </div>
                                                        </div>
                                                        <div class="commentsDes">
                                                            <p>That's not so bad, there's though he or her can't quite put a finger dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <ul>
                                                    <li>
                                                        <div class="singleComments">
                                                            <div class="blogavatar">
                                                                <img :src="team2" class="img-fluid circle" alt="">
                                                            </div>
                                                            
                                                            <div class="blogCaps">
                                                                <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                                                    <div class="commentBy">
                                                                        <h6 class="mb-1 lh-base">Renuka Muksr</h6>
                                                                        <span>Sep 16 2024</span>
                                                                    </div>
                                                                    <div class="replyLink">
                                                                        <NuxtLink to="#" class="btn btn-sm btn-light rounded-pill" data-bs-toggle="modal" data-bs-target="#commentModal"><i class="bi bi-reply me-2"></i>Reply</NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <div class="commentsDes">
                                                                    <p>That's not so bad, there's though he or her can't quite put a finger dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small?</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <ul>
                                                            <li>
                                                                <div class="singleComments">
                                                                    <div class="blogavatar">
                                                                        <img :src="team3" class="img-fluid circle" alt="">
                                                                    </div>
                                                                    
                                                                    <div class="blogCaps">
                                                                        <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                                                            <div class="commentBy">
                                                                                <h6 class="mb-1 lh-base">Warner Devid</h6>
                                                                                <span>Sep 17 2024</span>
                                                                            </div>
                                                                            <div class="replyLink">
                                                                                <NuxtLink to="#" class="btn btn-sm btn-light rounded-pill" data-bs-toggle="modal" data-bs-target="#commentModal"><i class="bi bi-reply me-2"></i>Reply</NuxtLink>
                                                                            </div>
                                                                        </div>
                                                                        <div class="commentsDes">
                                                                            <p>That's not so bad, there's though he or her can't quite put a finger dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li>
                                                <div class="singleComments">
                                                    <div class="blogavatar">
                                                        <img :src="team1" class="img-fluid circle" alt="">
                                                    </div>
                                                    
                                                    <div class="blogCaps">
                                                        <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                                            <div class="commentBy">
                                                                <h6 class="mb-1 lh-base">Mitchel Musk</h6>
                                                                <span>Aug 15 2024</span>
                                                            </div>
                                                            <div class="replyLink">
                                                                <NuxtLink to="#" class="btn btn-sm btn-light rounded-pill" data-bs-toggle="modal" data-bs-target="#commentModal"><i class="bi bi-reply me-2"></i>Reply</NuxtLink>
                                                            </div>
                                                        </div>
                                                        <div class="commentsDes">
                                                            <p>That's not so bad, there's though he or her can't quite put a finger dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow-sm p-4 w-100">
                                <div class="commentsBox">
                                    <div class="row align-items-start">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <h4 class="fw-semibold">Drop Comments</h4>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label>Name:</label>
                                                <input type="text" class="form-control gray border-0">
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label>Email:</label>
                                                <input type="text" class="form-control gray border-0">
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <label>Comments:</label>
                                                <textarea class="form-control gray border-0"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <button type="button" class="btn btn-light-primary rounded-pill fw-medium px-5">Submit Comment</button>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                        <div class="blogSidebar d-flex flex-column align-items-start gap-4">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Search</h4>
                                </div>
                                <div class="card-body">
                                    <div class="p-2 ps-3 rounded border d-flex align-items-center justify-content-between gap-2">
                                        <div class="searchicons"><span><i class="bi bi-search fs-4 opacity-75"></i></span></div>
                                        <div class="flex-fill"><input type="search" class="form-control border-0 ps-0" placeholder="What are you looking for?"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header">
                                    <h4>Most Viewd Articles</h4>
                                </div>
                                <div class="card-body">
                                    <div class="similarPosts">
                                        <ul>
                                            <li v-for="(item, index) in recentBlog" :key="index">
                                                <div class="postThumb"><NuxtLink to="/blog-detail" class="postImg"><figure><img :src="item.image" class="img-fluid rounded" alt="Post Image"/></figure></NuxtLink></div>
                                                <div class="postCaps">
                                                    <h6><NuxtLink to="/blog-detail" class="link">{{item.title}}</NuxtLink></h6>
                                                    <span>{{item.date}}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header">
                                    <h4>Popular Tags</h4>
                                </div>
                                <div class="card-body">
                                    <div class="blogTags">
                                        <ul>
                                            <li v-for="(item, index) in blogTag" :key="index"><NuxtLink to="#">{{item}}</NuxtLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header">
                                    <h4>Social Share</h4>
                                </div>
                                <div class="card-body">
                                    <div class="blogShare">
                                        <ul>
                                            <li v-for="(item, index) in blogSocial" :key="index"><NuxtLink to="#"><i :class="item"></i></NuxtLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import team1 from '@/assets/img/team-1.jpg'
    import team2 from '@/assets/img/team-2.jpg'
    import team3 from '@/assets/img/team-3.jpg'
    import blog from '@/assets/img/gal-4.jpg'
    import { recentBlog, blogTag, blogSocial, blogData } from '@/data/data';

    const route = useRoute()
    const data = blogData.find((item)=>item.id === parseInt(route.params.id));
</script>

<style lang="scss" scoped>

</style>