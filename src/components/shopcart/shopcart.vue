<template>
<div class="shopcart">
<div class="content">
	<div class="content-left">
		<div class="logo-wrapper">
			<div class="logo" :class="{highlight: totalCount>0}">
				<span class="icon-shopping_cart" :class="{highlight: totalCount>0}"></span>
			</div>
			<div v-show="totalCount > 0" class="num">{{ totalCount }}</div>
		</div>
		<div class="price" :class="{highlight: totalPrice>0}">¥{{ totalPrice }}</div>
		<div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
	</div>
	<div class="content-right">
		<div class="pay" :class="payClass">{{ payDesc }}</div>
	</div>
	<div class="balls-wrapper">
		<transition-group name="drop">
			<div v-for="ball in balls" v-bind:key="ball" v-show="ball.show" class="ball"></div>
			<div class="inner"></div>
		</transition-group>
	</div>
</div>
</div>
  
</template>

<script type="text/ecmascript-6">
export default {
	data() {
		return {
			balls: [
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				}
			]
		}
	},
	props: {
		selectFoods: {
			type: Array,
			default() {
				return [{
					price: 12,
					count: 1
				}]
			}
		},
		deliveryPrice: {
			type: Number,
			default: 0
		},
		minPrice: {
			type: Number,
			default: 0
		}
	},
	computed: {
		totalPrice() {
			let total = 0
			this.selectFoods.forEach((food) => {
				total += food.price * food.count
			})
			return total
		},
		totalCount() {
			let count = 0
			this.selectFoods.forEach((food) => {
				count += food.count
			})
			return count
		},
		payDesc() {
			if (this.totalPrice === 0) {
				return `¥${this.minPrice}元起送`
			} else if (this.totalPrice < this.minPrice) {
				let diff = this.minPrice - this.totalPrice
				return `还差¥${diff}元起送`
			} else {
				return '去结算'
			}
		},
		payClass() {
			if (this.totalPrice < this.minPrice) {
				return 'not-enough'
			} else {
				return 'enough'
			}
		}
	},
	methods: {
		drop () {

		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .shopcart
 	position: fixed
 	left: 0
 	bottom: 0
 	height: 48px
 	width: 100%
 	background: #141d27
 	.content
 		display: flex
 		font-size: 0
 		color: rgba(255,255,255,.4)
 		.content-left
 			flex: 1
 			.logo-wrapper
 				display: inline-block
 				vertical-align: top
 				position: relative
 				top: -10px
 				margin: 0 12px
 				padding: 6px
 				width: 56px
 				height: 56px
 				box-sizing: border-box
 				border-radius: 50%
 				background: #141d27
 				.logo
 					width: 100%
 					height: 100%
 					border-radius: 50%
 					text-align: center
 					background: #2b343c
 					.icon-shopping_cart
 						line-height: 44px
 						font-size: 24px
 						color: #80858a
 						&.highlight
 							color: #fff
 					&.highlight
 						background: #00a0dc
 				.num
 					position: absolute
 					top: 0
 					right: 0
 					width: 24px
 					height: 16px
 					line-height: 16px
 					text-align: center
 					border-radius: 16px
 					font-size: 9px
 					font-weight: 700
 					color: #fff
 					background: #f01414
 					box-shadow: 0 4px 8px 0 rgba(0,0,0,.4)
 			.price
 				display:inline-block
 				vertical-align: top
 				margin-top: 12px
 				line-height: 24px
 				padding-right: 12px
 				box-sizing: border-box
 				border-right: 1px solid rgba(255,255,255,.1)
 				font-size: 16px
 				font-weight: 700
 				&.highlight
 					color: #fff
 			.desc
 				display: inline-block
 				vertical-align: top
 				margin: 12px 0 0 12px
 				line-height: 24px
 				font-size: 10px
 		.content-right
 			flex: 0 0 105px
 			width: 105px
 			height: 48px
 			.pay
	 			height: 48px
	 			line-height: 48px
	 			text-align: center
	 			font-size: 12px
	 			font-weight: 700
	 			&.enough
	 				background: #00b43c
	 				color: #fff
	 			&.not-enough
	 				background: #2b333b
	 	// .balls-wrapper
	 	// 	.ball
		 // 		position: fixed
		 // 		left: 32px
		 // 		bottom: 22px
		 // 		z-index: 200
		 // 		&.drop-enter-active
		 // 			transition: all .4s
		 // 			.inner


			




</style>
