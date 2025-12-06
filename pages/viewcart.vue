<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>
        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-start align-items-center">
                    <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">
                        <div class="position-relative pt-lg-0 pt-5">
                            <h1 class="xl-heading">Cart Page</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Shop</NuxtLink></li>
                                    <li>Cart</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12">
                        <div class="cartDetails">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" class="itemthumbnail"></th>
                                        <th scope="col" class="Item Name">Item Name</th>
                                        <th scope="col" class="Quantity">Quantity</th>
                                        <th scope="col" class="Price">Price</th>
                                        <th scope="col" class="col"> </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(item, index) in product" :key="index">
                                        <td class="cartThumbnail">
                                            <NuxtLink to="#" class="d-inline-block"><img :src="item.image" class="img-fluid rounded" alt="Thumbnail"/></NuxtLink>
                                        </td>
                                        <td data-label="Item Name">
                                            <div class="itemInfo">
                                                <h6 class="fw-semibold"><NuxtLink to="#" class="link">{{item.name}}</NuxtLink></h6>
                                                <p class="text-md mb-0"><span class="fw-semibold text-dark me-2">Size:</span><span>{{item.size}}</span></p>
                                                <p class="text-md mb-0"><span class="fw-semibold text-dark me-2">Color:</span><span>{{item.color}}</span></p>
                                            </div>
                                        </td>
                                        <td data-label="Quantity">
                                            <div class="itemQuantity">
                                                <input type="number" class="form-control bg-light w-15 d-inline-block" value="1">
                                            </div>
                                        </td>
                                        <td data-label="Price">
                                            <div class="">{{item.price}}</div>
                                        </td>
                                        <td data-label="Action">
                                            <div class="removeItem"><NuxtLink to="#" class="square--30 d-inline-flex circle badge-primary"><i class="bi bi-x-lg"></i></NuxtLink></div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="5">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 w-100">
                                                <div class="flex-fill appluCoupon">
                                                    <div class="d-flex flex-wrap align-items-center gap-2">
                                                        <div class="border rounded">
                                                            <input type="text" class="form-control form-control-md" id="coupon-code" name="coupon-code" placeholder="Coupon Code">
                                                        </div>
                                                        <button type="button" class="btn btn-md fw-medium btn-dark">Apply Code</button>
                                                    </div>
                                                </div>
                                                <div class="flexLast">
                                                    <button type="button" class="btn btn-md fw-medium btn-light-primary">Update Cart</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                        <div class="cartSidebar">
                            <div class="card gray">
                                <div class="card-body">
                                    <div class="cartShippings mb-4">
                                        <h5>Shipping To</h5>
                                        <address>2720 Plainfield Avenue Evans Mills, California, USA NY 13637</address>
                                        <div class="changeButton mt-3">
                                            <button type="button" class="btn btn-md btn-dark w-100 fw-medium">ChangeAddress</button>
                                        </div>
                                    </div>

                                    <div class="shoppingInfo bg-white rounded-3 p-4">
                                        <div class="cartShoppes">
                                            <div class="singleCarts">
                                                <div class="cartFirsty1">
                                                    <span class="shippingType">Free Shipping</span>
                                                    <h6 class="itemBrans">Awaik Brand</h6>
                                                    <p class="itemName">Flower Vase x1</p>
                                                </div>
                                                <div class="cartFirsty2">
                                                    <div class="totalPrice">$45</div>
                                                </div>
                                            </div>

                                            <div class="singleCarts">
                                                <div class="cartFirsty1">
                                                    <span class="shippingType charegable">Shipping $40</span>
                                                    <h6 class="itemBrans">LP Liquid Hipe</h6>
                                                    <p class="itemName">Water Castle x1</p>
                                                </div>
                                                <div class="cartFirsty2">
                                                    <div class="totalPrice">$62</div>
                                                </div>
                                            </div>

                                            <div class="singleCarts">
                                                <div class="cartFirsty1">
                                                    <span class="shippingType">Free Shipping</span>
                                                    <h6 class="itemBrans">Singla Sivansh</h6>
                                                    <p class="itemName">Cattle Liwar x1</p>
                                                </div>
                                                <div class="cartFirsty2">
                                                    <div class="totalPrice">$72</div>
                                                </div>
                                            </div>

                                            <div class="singleCarts">
                                                <div class="cartFirsty1">
                                                    <p class="itemName">Discount</p>
                                                </div>
                                                <div class="cartFirsty2">
                                                    <div class="totalPrice text-primary">-$22</div>
                                                </div>
                                            </div>

                                            <div class="singleCarts">
                                                <div class="cartFirsty1">
                                                    <h6 class="itemBrans">Sub Total</h6>
                                                </div>
                                                <div class="cartFirsty2">
                                                    <div class="totalPrice text-primary">$247.50</div>
                                                </div>
                                            </div>

                                            <div class="singleCarts">
                                                <button type="button" class="btn btn-md btn-primary w-100 fw-medium">Proceed To Checkout</button>
                                            </div>
                                        </div>
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
import img1 from '@/assets/img/h.jpg'
import img2 from '@/assets/img/j.jpg'
import img3 from '@/assets/img/i.jpg'
import { ref } from 'vue';

const product = ref([
    {
        image:img1,
        name:'Shine Water Cattle',
        size:'Small',
        color:'Light Gray',
        price:'$67.00'
    },
    {
        image:img2,
        name:'Classic Flower Vase',
        size:'LG',
        color:'Sea Green',
        price:'$55.00'
    },
    {
        image:img3,
        name:'Long Flower Vase',
        size:'XL',
        color:'Light Green',
        price:'$67.00'
    },
])
product.value

</script>
