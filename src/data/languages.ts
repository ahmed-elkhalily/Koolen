import { ILanguage } from "~/interfaces/language";

const dataLanguages: ILanguage[] = [
	{
		locale: "en",
		code: "EN",
		name: "English",
		icon: "/images/languages/en.svg",
		direction: "ltr",
		messages: require("../locales/en.json"),
	},
	{
		locale: "en-RTL",
		code: "AR",
		name: "Arabic",
		icon: "/images/languages/ar.png",
		direction: "rtl",
		messages: require("../locales/ar.json"),
	},
];

export const defaultLocale = "en";

export default dataLanguages;
