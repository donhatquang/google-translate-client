"use strict";try{angular.module("wixAppTranslations")}catch(e){angular.module("wixAppTranslations",["pascalprecht.translate"])}angular.module("wixAppTranslations").config(["$translateProvider",function(a){var b={general:{YO:"привет"}};a.translations("ru",b),a.translations(b),a.preferredLanguage&&a.preferredLanguage("ru")}]).value("preferredLanguage","ru");