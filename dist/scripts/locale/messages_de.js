"use strict";try{angular.module("wixAppTranslations")}catch(e){angular.module("wixAppTranslations",["pascalprecht.translate"])}angular.module("wixAppTranslations").config(["$translateProvider",function(a){var b={general:{YO:"Hallo"}};a.translations("de",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("de")}]).value("preferredLanguage","de");