<template>
	<div class="sidebarGroups d-flex flex-column gap-4">
		<div class="card">
			<div class="bg-cover card-header ht-150" :style="{backgroundImage:`url(${bg1})`, backgroundRepeat:'no-repeat'}"></div>
			<div class="card-body mt-n3 p-0">
				<div class="avatarBox position-relative mb-4">
					<div class="square--100 circle bg-transparents mx-auto p-2 z-2">
						<img :src="user" class="img-fluid circle" alt="Avatar">
					</div>
					<div class="listingInfo text-center">
						<p class="text-md text-muted mb-0">Added By</p>
						<h6 class="mb-0">Shree K. Patel</h6>
					</div>
				</div>
				<div class="avatarInfo mb-2">
					<div v-for="(item, index) in userInfo" :key="index" class="py-3 px-3 border-top">
						<div class="infoFlexio d-flex align-items-center justify-content-start gap-2">
							<div class="square--40 rounded bg-light-primary"><i :class="item.icon"></i></div>
							<div class="infoDetails">
								<p class="text-muted lh-base mb-0">{{item.title}}</p>
								<p class="text-dark lh-base fw-medium fs-6 mb-0">{{item.subTitle}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-footer bg-white border-top">
				<div class="d-flex align-items-center justify-content-center gap-3">
					<div v-for="(item, index) in social" :key="index" class="flexSocial"><router-link to="#" class="square--40 circle border"><i :class="item"></i></router-link></div>
				</div>
			</div>
		</div>

		<div class="card p-0">
			<div class="card-header bg-cover ht-150" :style="{backgroundImage:`url(${bg2})`, backgroundRepeat:'no-repeat'}" data-overlay="4"></div>
			<div class="card-body px-4">
				<div class="text-center d-block py-xl-4">
					<div class="offerTitles d-block mb-4">
						<h2 class="fw-semibold lh-base m-0">40% Off</h2>
						<p class="text-md text-dark">On purchase worth more than <span class="fw-medium">$300</span> offer valid till <span class="fw-medium">20 August 2024</span></p>
					</div>
					<div class="couponCodes d-block">
						<div class="couponCode">
							<div class="couponcodeText border-opacity-25">PLAUG1758</div>
							<div class="copyCoupon"><NuxtLink to="#" class="fw-medium text-sm text-muted text-uppercase">Copy Code</NuxtLink></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card overflow-visible">
			<div class="card-header py-3">
				<div class="headerFirst">
					<h6><i class="bi bi-calendar-check me-2"></i>Book Your Table</h6>
				</div>
			</div>
			<div class="p-xl-4 p-3">
				<div class="contactForm position-relative">
					<div class="form-group form-border">
						<input type="text" class="form-control fw-medium" id="input" placeholder="Choose A Date">
					</div>
					<div class="form-group">
						<div class="position-relative fw-medium border">
							<Multiselect 
								v-model="selected" 
								:options="options" 
								placeholder="Pick Time Slots" 
								:open="true"
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="booking-form__input guests-input mixer-auto">
							<button name="guests-btn" @click="booking = !booking" id="guests-input-btn">{{adults}} Guest, {{children}} Child</button>
							<div v-if="booking" class="guests-input__options open" id="guests-input-options">
								<div>
									<span class="guests-input__ctrl minus" id="adults-subs-btn" @click="adults > 0 ? adults = adults - 1 : 0"><i class="fa-solid fa-minus"></i></span>
									<span class="guests-input__value"><span id="guests-count-adults">{{adults}}</span>Guests</span>
									<span class="guests-input__ctrl plus" id="adults-add-btn" @click="adults = adults + 1"><i class="fa-solid fa-plus"></i></span>
								</div>
								<div>
									<span class="guests-input__ctrl minus" id="children-subs-btn" @click="children > 0 ? children = children - 1 : 0"><i class="fa-solid fa-minus"></i></span>
									<span class="guests-input__value"><span id="guests-count-children">{{children}}</span>Children</span>
									<span class="guests-input__ctrl plus" id="children-add-btn" @click="children = children + 1"><i class="fa-solid fa-plus"></i></span>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="position-relative fw-medium border">
							<Multiselect 
								v-model="selected2" 
								:options="option2" 
								placeholder="Advance features"
								:multiple="true"
								:open="true"
							/>
						</div>
					</div>
					<div class="form-group">
						<button type="button" class="btn btn-primary rounded-pill fw-medium w-100">Booking Request</button>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-header py-3">
				<div class="headerFirst">
					<h6>Openings Hours</h6>
				</div>
				<div class="headerLast"><span class="badge badge-xs badge-success rounded-pill">Now Open</span></div>
			</div>
			<div class="card-body p-0">
				<div class="openingsInfo">
					<div v-for="(item, index) in openingData" :key="index" class="py-3 px-3 border-top">
						<div class="infoFlexio d-flex align-items-center justify-content-between">
							<p class="text-dark text-md fw-medium lh-base mb-0">{{item.day}}</p>
							<p class="text-dark text-sm fw-medium lh-base mb-0">{{item.time}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-body px-3">
				<div class="form-group mb-1">
					<button type="button" class="btn btn-whites border rounded-pill fw-medium w-100"><i class="bi bi-suit-heart me-2"></i>Bookmark This Listing</button>
				</div>
				<div class="form-group text-center mb-4">
					<p class="text-md">45 People Bookmark This Place</p>
				</div>
				<div class="form-group m-0">
					<div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
						<button v-for="(item, index) in social2" :key="index" type="button" class="btn btn-md btn-whites border rounded-pill flex-fill" :class="item.iconStyle"><i :class="item.icon"></i>{{item.name}}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import bg1 from '@/assets/img/avatar-bg.jpg'
	import bg2 from '@/assets/img/avatar-bg-2.jpg'
	import user from '@/assets/img/team-4.jpg'
	import Multiselect from 'vue-multiselect'
	import 'vue-multiselect/dist/vue-multiselect.min.css'

	const adults = ref(1)
	const children = ref(0)
	const booking = ref(false)

	const userInfo = ref([
		{
			icon:'bi bi-envelope text-primary',
			title:'Email',
			subTitle:'shree.patel@gmail.com'
		},
		{
			icon:'bi bi-phone text-primary',
			title:'Phone No.',
			subTitle:'+41 256 254 5487'
		},
		{
			icon:'bi bi-browser-chrome text-primary',
			title:'Website',
			subTitle:'www.ListingHub.co.in'
		},
	])

	const social = ref([
		'bi bi-facebook color--facebook',
		'bi bi-twitter color--twitter',
		'bi bi-instagram color--instagram',
		'bi bi-youtube color--pinterest',
		'bi bi-whatsapp color--whatsapp',
	])

	const openingData = ref([
		{
			day:'Monday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Tuesday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Wednesday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Wednesday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Friday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Saturday',
			time:'8:00 Am To 10:00 PM'
		},
		{
			day:'Sunday',
			time:'10:00 Am To 16:00 PM'
		},
	])

	const social2 = ref([
		{
			icon:'bi bi-suit-heart me-1',
			iconStyle:'color--facebook',
			name:'Facebook'
		},
		{
			icon:'bi bi-suit-heart me-1',
			iconStyle:'color--twitter',
			name:'Twitter'
		},
		{
			icon:'bi bi-suit-heart me-1',
			iconStyle:'color--instagram',
			name:'Instagram'
		},
	])


   const options = ['07:00 AM', '07:30 AM', '08:00 AM','08:30 AM','09:00 AM','09:30 AM','10:30 AM','11:30 AM','12:30']

   const option2 = ['Slice','Burger','Coffee','Indian Thali','Tandoori','Chips']

   const selected = ref(null);
   const selected2 = ref(null);
</script>

<style lang="scss" scoped></style>