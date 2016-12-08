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
		<div v-on:click="showDetail" class="supports-content" v-if="seller.supports">
			<span class="count">{{ seller.supports.length}}个</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
	<div class="bulletin-wrapper" v-on:click="showDetail">
		<span class="bulletin-title"></span>
		<span class="bulletin-text">{{ seller.bulletin}}</span>
		<i class="icon-keyboard_arrow_right"></i>
	</div>
	<div class="background">
		<img v-bind:src="seller.avatar" width="100%" height="100%">
	</div>
	<div class="detail" v-show="detailShow">
		<div class="detail-wrapper clearfix">
			<div class="detail-main">
				<h1 class="detail-name">{{ seller.name }}</h1>
				<div class="detail-star">
					
				</div>
				<div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
				</div>
				<ul class="detail-list">
					<li v-for="item in seller.supports" class="supports-item">
						<span class="icon" v-bind:class="classMap[item.type]"></span>
						<span class="description">{{ item.description }}</span>
					</li>
				</ul>
				<div class="title">
					<div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
				</div>
				<div class="detail-info">
					<p class="detail-info-content">{{ seller.bulletin }}</p>	
				</div>
				
			</div>
		</div>
			<div class="detail-close" @click="closeDetail">
				<i class="icon-close"></i>
			</div>
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
	data () {
		return {
			detailShow: false
		}
	},
	methods: {
			showDetail() {
				this.detailShow = true
			},
			closeDetail () {
				this.detailShow = false
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
		position: relative
		overflow: hidden
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
				border-radius: 20px
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
				vertical-align: top
			.icon-keyboard_arrow_right
				position: absolute
				right: 12px
				top: 8px
				font-size: 10px
		.background
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: -1
			filter: blur(10px)
		.detail
			position:	fixed
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: 99
			overflow: auto
			background: rgba(7,17,27,.8)
			transition: all 0.5s
			-webkit-transition: all .5s
			.detail-wrapper
				min-height: 100%
				width: 100%
				.detail-main
					margin-top: 64px
					padding-bottom: 64px
					margin-left: 36px
					margin-right: 36px
					.detail-name
						text-align: center
						font-size: 16px
						line-height: 16px
						font-weight: 700
						display: block
					.title
						display: flex
						width: 80%
						margin: 28px auto 24px auto
						.line
							flex: 1
							position: relative
							top: -6px
							border-bottom: 1px solid rgba(255,255,255,.2)
						.text
							padding: 0 12px
							font-weight: 700
							font-size: 14px
					.detail-list
						margin-top: 24px
						margin-left: 12px
						.supports-item
							font-size: 12px
							font-weight: 200
							line-height: 16px
							margin-bottom: 12px
							.icon
								display: inline-block
								width: 16px
								height: 16px
								line-height: 12px
								background-repeat: no-repeat
								background-size: 16px 16px
								&.decrease
									bg-image('decrease_2')
								&.discount
									bg-image('discount_2')
								&.guarantee
									bg-image('guarantee_2')
								&.invoice
									bg-image('invoice_2')
								&.special
									bg-image('special_2')
							.description
								vertical-align: top
								margin-left: 6px
					.detail-info
						width: 100%
						.detail-info-content
							margin-left: 12px
							margin-right: 12px
							font-size: 12px
							font-weight: 200
							line-height: 24px
			.detail-close
				position: relative
				width: 32px
				height: 32px
				clear: both
				margin: -32px auto 0
				font-size: 32px
				color: rgba(255,255,255,.5)




	
						






</style>
