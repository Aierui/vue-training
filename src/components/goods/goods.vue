<template>
<div class="goods">
	<div class="menu-wrapper" ref="menuWrapper">
		<ul>
			<li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
				<span class="text border-1px">
					<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{ item.name}}</span>
			</li>
		</ul>
	</div>
	<div class="foods-wrapper" ref="foodsWrapper">
		<ul>
			<li v-for="item in goods" class="foods-list foods-list-hook">
				<h1 class="title">{{ item.name }}</h1>
				<ul>
					<li v-for="food in item.foods" class="food-item border-1px">
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
							<div class="cartcontrol-wrapper">
								<cartcontrol :food="food" @add-cart="_drop($event)"></cartcontrol>
							</div>	
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
</div>

</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopcart from 'components/shopcart/shopcart'
import cartcontrol from 'components/cartcontrol/cartcontrol'
const ERR_OK = 0
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data () {
		return {
			goods: [],
			listHeight: [],
			scrollY: 0
		}
	},
	created () {
		this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        this.$nextTick(function () {
          this._initBscroll()
          this.calcHeight()
        })
      }
    })
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    // 监听add-cart
    this.$on('add-cart', this._drop)
	},
	computed: {
		currentIndex() {
			for (let i = 0; i < this.listHeight.length; i++) {
				let height1 = this.listHeight[i]
				let height2 = this.listHeight[i + 1]
				if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
					return i
				}
			}
			return 0
		},
		selectFoods () {
			let foods = []
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						// console.log(food.price)
						// console.log(food.count)
						if (food.count) {
							foods.push(food)
						}
					})
				})
				// console.log(foods)
				return foods
		}
	},
	beforeDestroy () {
		this.$off('add-cart', this._drop)
	},
	methods: {
		selectMenu (index, $event) {
			if (!$event._constructed) {
				return
			}
			let foodList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
			let el = foodList[index]
			this.foodsBscroll.scrollToElement(el, 300)
		},
		_initBscroll () {
			this.menuBscroll = new BScroll(this.$refs.menuWrapper, {
				// wheel: true,
				click: true,
				cancelable: true
			})
			this.foodsBscroll = new BScroll(this.$refs.foodsWrapper, {
				click: true,
				probeType: 3
			})
			this.foodsBscroll.on('scroll', (pos) => {
			this.scrollY = Math.abs(Math.round(pos.y))
			})
		},
		calcHeight () {
		  let foodList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
		  let height = 0
		  this.listHeight.push(height)
		  for (let i = 0; i < foodList.length; i++) {
		    let item = foodList[i]
		    height += item.clientHeight
		    this.listHeight.push(height)
		  }
		},
		_drop ($event) {
			// console.log($event)
			this.$refs.shopcart.drop($event)
		}
	},
	components: {
		shopcart,
		cartcontrol
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
				&.current
					position: relative
					margin-top: -1px
					background: #fff
					font-weight: 700
					z-index: 10
				.text
					display: table-cell
					vertical-align: middle
					font-size: 12px
					font-weight: 200
					color: rgb(77, 85, 93)
					line-height: 14px
					border-1px(rgba(7,17,27,.1))
					.icon
						display: inline-block
						width: 12px
						height: 12px
						line-height: 12px
						background-repeat: no-repeat
						background-size: 12px 12px
						&.decrease
							bg-image('decrease_3')
						&.discount
							bg-image('discount_3')
						&.guarantee
							bg-image('guarantee_3')
						&.invoice
							bg-image('invoice_3')
						&.special
							bg-image('special_3')
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
				border-1px(rgba(7,17,27,.1))
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
					.cartcontrol-wrapper
						position: absolute
						right: 0
						bottom: 12px


 
</style>
