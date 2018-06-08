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
        .state("userList", {
            url: "/userList",
            templateUrl: "user/user-list.html",
            controller: "userList"
        })
         .state("userAddtion", {
            url: "/userAddtion",
            templateUrl: "user/userAddtion.html",
            controller: "userAddtion"
        })
        .state("userEdition", {
            url: "/userEdition/:id",
            templateUrl: "user/userEdition.html",
            controller: "userEdition"    
        })
         .state("customerData", {
            url: "/customerData",
            templateUrl: "admin/customerData.html",
            controller: "customerData"
        })
        .state("customerPrice", {
            url: "/customerPrice",
            templateUrl: "admin/customerPrice.html",
            controller: "customerPrice"
        })
        .state("factoryData", {
            url: "/factoryData",
            templateUrl: "admin/factoryData.html",
            controller: "factoryData"
        })
        .state("stock", {
            url: "/stock",
            templateUrl: "admin/stock.html",
            controller: "stock"
        })
         .state("customerAddtion", {
            url: "/customerAddtion",
            templateUrl: "admin/customerAddtion.html",
            controller: "customerAddtion"
        })
        .state("customerEdition", {
            url: "/customerEdition/:id",
            templateUrl: "admin/customerEdition.html",
            controller: "customerEdition"
        })
        .state("customerPriceAddtion", {
            url: "/customerPriceAddtion",
            templateUrl: "admin/customerPriceAddtion.html",
            controller: "customerPriceAddtion"
        })
        .state("customerPriceEdition", {
            url: "/customerPriceEdition/:id",
            templateUrl: "admin/customerPriceEdition.html",
            controller: "customerPriceEdition"
        })
        .state("factoryAddtion", {
            url: "/factoryAddtion",
            templateUrl: "admin/factoryAddtion.html",
            controller: "factoryAddtion"
        })
        .state("factoryEdition", {
            url: "/factoryEdition/:id",
            templateUrl: "admin/factoryEdition.html",
            controller: "factoryEdition"
        })
         .state("stockEdition", {
            url: "/stockEdition/:id",
            templateUrl: "admin/stockEdition.html",
            controller: "stockEdition"
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
