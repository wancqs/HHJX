var indexApp = angular.module("indexApp", ['ui.router', 'controllers']);
var baseUrl = "/HHJX/";
indexApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/welcome");
    $stateProvider
        .state("welcome", {
            url: "/welcome",
            templateUrl: "welcome/welcome.html",
            controller:"index"
        })
        .state("customerData", {
            url: "/customerData",
            templateUrl: "user/customerData.html",
            controller: "customerData"
        })
        .state("customerPrice", {
            url: "/customerPrice",
            templateUrl: "user/customerPrice.html",
            controller: "customerPrice"
        })
        .state("factoryData", {
            url: "/factoryData",
            templateUrl: "user/factoryData.html",
            controller: "factoryData"
        })
        .state("stock", {
            url: "/stock",
            templateUrl: "user/stock.html",
            controller: "stock"
        })
        .state("customerAddtion", {
            url: "/customerAddtion",
            templateUrl: "user/customerAddtion.html",
            controller: "customerAddtion"
        })
        .state("customerEdition", {
            url: "/customerEdition/:id",
            templateUrl: "user/customerEdition.html",
            controller: "customerEdition"
        })
         .state("customerPriceAddtion", {
            url: "/customerPriceAddtion",
            templateUrl: "user/customerPriceAddtion.html",
            controller: "customerPriceAddtion"
        })
        .state("customerPriceEdition", {
            url: "/customerPriceEdition/:id",
            templateUrl: "user/customerPriceEdition.html",
            controller: "customerPriceEdition"
        })
         .state("factoryAddtion", {
            url: "/factoryAddtion",
            templateUrl: "user/factoryAddtion.html",
            controller: "factoryAddtion"
        })
        .state("factoryEdition", {
            url: "/factoryEdition/:id",
            templateUrl: "user/factoryEdition.html",
            controller: "factoryEdition"
        })
        .state("stockAddtion", {
            url: "/stockAddtion",
            templateUrl: "user/stockAddtion.html",
            controller: "stockAddtion"
        })
        .state("stockEdition", {
            url: "/stockEdition/:id",
            templateUrl: "user/stockEdition.html",
            controller: "stockEdition"
        })
        .state("factoryBatchAddtion", {
            url: "/factoryBatchAddtion",
            templateUrl: "user/factoryBatchAddtion.html",
            controller: "factoryBatchAddtion"
        })
        .state("customerBatchAddtion", {
            url: "/customerBatchAddtion",
            templateUrl: "user/customerBatchAddtion.html",
            controller: "customerBatchAddtion"
        })
        .state("stockBatchAddtion", {
            url: "/stockBatchAddtion",
            templateUrl: "user/stockBatchAddtion.html",
            controller: "stockBatchAddtion"
        })
        .state("customerPriceBatchAddtion", {
            url: "/customerPriceBatchAddtion",
            templateUrl: "user/customerPriceBatchAddtion.html",
            controller: "customerPriceBatchAddtion"
        })
         .state("offerPrice", {
            url: "/offerPrice/:code",
            templateUrl: "user/offerPrice.html",
            controller: "offerPrice"
        })
        .state("changePwd", {
            url: "/changePwd",
            templateUrl: "user/changePwd.html",
            controller: "changePwd"
        })
        .state("changeEmail", {
            url: "/changeEmail",
            templateUrl: "user/changeEmail.html",
            controller: "changeEmail"
        })
        
}])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function (obj) {
            var str = [];
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }]);
