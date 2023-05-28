import { ICustomFields } from "./custom-fields";

export interface IBaseCategory {
	type: string;
	id: number;
	slug: string;
	name: string;
	image?: string;
	items?: number;
	parent?: this;
	children?: this[];
	customFields: ICustomFields;
}

export interface IShopCategory extends IBaseCategory {
	type: "shop";
}

export type ICategory = IShopCategory;
