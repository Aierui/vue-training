<template>
<div class="goods">
	<div class="menu-wrapper">
		<ul style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<li v-for="item in goods" class="menu-item">
				<span class="text border-1px">
					<span v-show="item.type>-1" class="icon" :class="classMap[item.type]"></span>{{ item.name}}</span>
			</li>
		</ul>
	</div>
	<div class="foods-wrapper">
		<ul style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<li v-for="item in goods" class="foods-list">
				<h1 class="title">{{ item.name }}</h1>
				<ul>
					<li v-for="food in item.foods" class="food-item">
						<div class="icon">
							<img :src="food.icon" width="57" height="57">
						</div>
						<div class="content">
							<h2 class="name">{{ food.name }}</h2>
							<p class="desc">{{ food.description}}</p>
							<div class="extra">
								<span class="count">月售{{ food.sellCount}}份</span>
								<span>好评率{{ food.rating }}%</span>
							</div>
							<div class="price">
								<span class="now">¥{{food.price}}</span>
								<span class="old" v-if="food.oldPrice">¥{{food.oldPrice}}</span>
							</div>
							<div class="cart-wrapper"></div>	
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>

</template>

<script type="text/ecmascript-6">
const ERR_OK = 0
export default {
	data () {
		return {
			goods: []
		}
	},
	created () {
		this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        console.log(this.goods)
      }
    })
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
	.goods
		display: flex
		position: absolute
		top: 178px
		bottom: 46px
		width: 100%
		overflow: hidden
		.menu-wrapper
			flex: 0 0 80px
			width: 80px
			background: #f3f5f7
			.menu-item
				display: table
				height: 54px
				width: 56px
				padding: 0 12px
				line-height: 14px
				.text
					display: table-cell
					vertical-align: middle
					font-size: 12px
					font-weight: 200
					color: rgb(77, 85, 93)
					line-height: 14px
					border-1px(rgba(7,17,27,.1))
		.foods-wrapper
			flex: 1
			.title
				padding-left: 14px
				height:26px
				line-height: 26px
				border-left: 2px solid #d9dde1
				font-size: 12px
				color: #93999f
				background: #f3f5f7
			.food-item
				display: flex
				margin: 18px
				padding-bottom: 18px
				position: relative
				.icon
					flex: 0 0 57px
					margin-right: 10px
				.content
					flex: 1
					.name
						margin: 2px 0 8px 0
						height: 14px
						line-height: 14px
						font-size: 14px
						color: #07111b
					.desc
						line-height: 12px
						margin-bottom: 8px
						font-size: 10px
						color: #93999f
					.extra
						line-height: 10px
						font-size: 10px
						color: #93999f
						.count
							margin-right: 12px
					.price
						font-weight: 700
						line-height: 24px
						.now
							font-size: 14px
							color: rgb(240, 20 ,20)
							margin-right: 8px
						.old
							text-decoration: line-through
							font-size: 10px
							color: #92999f
							



 
</style>
