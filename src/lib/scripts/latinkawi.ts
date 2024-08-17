import { convert as javaKawiConvert } from "$lib/scripts/javakawi";
import { convert as latinJavaConvert } from "$lib/scripts/latinjava";

function convert(text : string, isIgnoreSpace : boolean = false) : string 
{
	var javaText = latinJavaConvert(text, isIgnoreSpace);
	return javaKawiConvert(javaText);
}

export { convert };