"use strict";try{angular.module("wixAppTranslations")}catch(e){angular.module("wixAppTranslations",["pascalprecht.translate"])}angular.module("wixAppTranslations").config(["$translateProvider",function(a){var b={general:{YO:"Merhaba"}};a.translations("tr",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("tr")}]).value("preferredLanguage","tr");