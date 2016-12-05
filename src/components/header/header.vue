<template>
<div class="header">
	<div class="content-wrapper">
		<div class="avatar">
			<img :src="seller.avatar" width="64" height="64">
		</div>
		<div class="content">
			<div class="title">
				<span class="brand"></span>
				<span class="name">{{ seller.name }}</span>
			</div>
			<div class="description">
				<span class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</span>
			</div>
			<div class="supports" v-if="seller.supports">
				<span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
				<span class="description">{{ seller.supports[0].description}}</span>
			</div>
		</div>
		<div class="supports-content" v-if="seller.supports">
			<span class="count">{{ seller.supports.length}}个</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
	<div class="bulletin-wrapper">
		<span class="bulletin-title"></span>
		<span class="bulletin-text">{{ seller.bulletin}}</span>
		<i class="icon-keyboard_arrow_right"></i>
	</div>
</div>
  
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
		}
	},
	created () {
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
	.header
		color: #fff
		background: rgba(7,17,27,.5)
		.content-wrapper
			position: relative
			padding: 24px 12px 18px 24px
			font-size: 0
			.avatar
				display:inline-block
				img
					border-radius: 2px
			.content
				display:inline-block
				font-size: 14px
				margin-left: 16px
				.title
					margin: 2px 0 8px 0
					.brand
						vertical-align: top
						display: inline-block
						width: 30px
						height: 18px
						line-height: 18px
						bg-image('brand')
						background-repeat: no-repeat
						background-size: 30px 18px
					.name
						margin-left: 6px
						font-size: 16px
						font-weight: bold
						line-height: 18px
				.description
					font-size: 12px
					line-height: 12px
					font-weight: 200
					margin-bottom: 10px
				.supports
					margin-bottom: 2px
					.icon
						display: inline-block
						width: 12px
						height: 12px
						line-height: 12px
						background-repeat: no-repeat
						background-size: 12px 12px
						&.decrease
							bg-image('decrease_1')
						&.discount
							bg-image('discount_1')
						&.guarantee
							bg-image('guarantee_1')
						&.invoice
							bg-image('invoice_1')
						&.special
							bg-image('special_1')
					.description
						font-size: 12px
						line-height: 12px
						font-weight: 200
						margin-left: 4px
						vertical-align: top
			.supports-content
				position: absolute
				bottom: 18px
				right: 12px
				padding: 7px 8px
				font-size: 10px
				line-height: 12px
				background: rgba(0,0,0,.2)
				border-radius: 8px
				.count
					vertical-align: top
				.icon-keyboard_arrow_right
					line-height: 12px
		.bulletin-wrapper
			background: rgba(7,17,27,.2)
			height:28px
			line-height: 28px
			padding: 0 22px 0 12px
			white-space: nowrap
			text-overflow: ellipsis
			overflow: hidden
			position: relative
			.bulletin-title
				display: inline-block
				bg-image('bulletin')
				background-size: 22px 12px
				background-repeat: no-repeat
				width: 22px
				height: 12px
			.bulletin-text
				font-size: 10px
				margin-left: 4px
			.icon-keyboard_arrow_right
				position: absolute
				right: 12px
				top: 8px
				font-size: 10px
	
						






</style>
