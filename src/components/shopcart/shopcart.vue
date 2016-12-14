<template>
<div class="shopcart">
<div class="content">
	<div class="content-left">
		<div class="logo-wrapper">
			<div class="logo">
				<span class="icon-shopping_cart"></span>
			</div>
		</div>
		<div class="price">¥0</div>
		<div class="desc">另需配送费￥4元</div>
	</div>
	<div class="content-right">
		<div class="pay" :class="">￥20元起送</div>
	</div>
</div>
</div>
  
</template>

<script type="text/ecmascript-6">
export default {}
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
			




</style>
