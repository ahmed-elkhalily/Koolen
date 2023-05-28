<template>
	<div class="categories-page">
		<div class="container">
			<div class="row">
				<div
					class="col-md-4 col-sm-12"
					v-for="category in categories"
					:key="category.id"
				>
					<div class="categories__item">
						<figure>
							<AppLink :to="$url.category(category)">
								<!--suppress HtmlUnknownTarget -->
								<img :src="$url.img(category.image)" :alt="category.name" />
							</AppLink>
						</figure>
						<h6 class="categories__title">
							{{ category.name }}
						</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { Vue } from "vue-property-decorator";
	import { ICategory } from "~/interfaces/category";
	import dataShopBlockCategories from "~/data/shopBlockCategories";

	export default class Categories extends Vue {
		categories: ICategory[] = dataShopBlockCategories;
	}
</script>
