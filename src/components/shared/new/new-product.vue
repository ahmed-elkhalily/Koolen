<template>
	<div class="k-product">
		<div class="k-product__img-container">
			<!-- product-badge  -->
			<div v-if="product.badges.length" class="product-card__badges-list">
				<div
					v-if="product.badges.includes('sale')"
					class="product-card__badge product-card__badge--sale"
				>
					Sale
				</div>
				<div
					v-if="product.badges.includes('hot')"
					class="product-card__badge product-card__badge--hot"
				>
					Hot
				</div>
				<div
					v-if="product.badges.includes('new')"
					class="product-card__badge product-card__badge--new"
				>
					New
				</div>
			</div>
			<!-- product-image -->
			<figure
				v-if="product.images && product.images.length > 0"
				class="k-product__figure"
			>
				<AppLink :to="$url.product(product)" class="product-image__body">
					<!--suppress HtmlUnknownTarget -->
					<img
						v-if="product.images.length > 1"
						class="product-image__img first"
						:src="$url.img(product.images[1])"
						alt=""
					/>
					<img
						v-else
						class="product-image__img first"
						:src="$url.img(product.images[0])"
						alt=""
					/>
					<img
						class="product-image__img"
						:src="$url.img(product.images[0])"
						alt=""
					/>
				</AppLink>
				<div class="k-product__actions">
					<div>
						<AsyncAction
							v-slot="{ run, isLoading }"
							:action="() => $store.dispatch('wishlist/add', { product })"
						>
							<button
								type="button"
								:class="[
									'btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist',
									{ 'btn-loading': isLoading },
								]"
								@click="run"
							>
								<Wishlist16Svg />
							</button>
						</AsyncAction>
					</div>
					<div>
						<AsyncAction
							v-slot="{ run, isLoading }"
							:action="() => $store.dispatch('cart/add', { product })"
						>
							<button
								type="button"
								:class="[
									'btn btn-light btn-svg-icon btn-svg-icon--fake-svg',
									{ 'btn-loading': isLoading },
								]"
								@click="run"
							>
								<CartList16Svg />
							</button>
						</AsyncAction>
					</div>
				</div>
			</figure>
			<div class="k-product__"></div>
		</div>
		<!-- product info -->
		<div class="k-product__info">
			<div class="k-product__title">
				<AppLink :to="$url.product(product)">
					{{ product.name }}
				</AppLink>
			</div>
			<div class="k-product__rating">
				<Rating :value="product.rating" />
				<div class="ms-2 review">{{ product.reviews }} Reviews</div>
			</div>

			<div class="k-product__price">
				{{ $price(product.price) }}
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Vue, Component, Prop } from "vue-property-decorator";
	import { IProduct } from "~/interfaces/product";
	import AsyncAction from "~/components/shared/async-action.vue";
	import AppLink from "~/components/shared/app-link.vue";
	import Rating from "~/components/shared/rating.vue";
	import Quickview16Svg from "~/svg/quickview-16.svg";
	import Wishlist16Svg from "~/svg/wishlist-16.svg";
	import CartList16Svg from "~/svg/cart-16.svg";

	export type ProductCardLayout =
		| "grid-sm"
		| "grid-nl"
		| "grid-lg"
		| "list"
		| "horizontal";

	@Component({
		components: {
			AsyncAction,
			Quickview16Svg,
			AppLink,
			Rating,
			Wishlist16Svg,
			CartList16Svg,
		},
	})
	export default class ProductCard extends Vue {
		@Prop({ type: Object, required: true }) readonly product!: IProduct;
		@Prop({ type: String, default: () => undefined })
		readonly layout!: ProductCardLayout;

		get features() {
			return this.product.attributes.filter((x) => x.featured);
		}
	}
</script>
