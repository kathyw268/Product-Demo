export class MainController {
  constructor ($timeout, CategoryService, ProductService, $log, $routeParams) {
    'ngInject';
    this.categories = [];
    this.products = [];
    this.ProductService = ProductService;
    this.$log = $log;

    CategoryService.callApi().success((data) => {
      this.categories = data.Data;
      let activeCategory = $routeParams["category"];
      if (!activeCategory) {
        angular.forEach(this.categories, (val, key) =>  this.showProducts(this.categories[key].href))
      }
      else {
        this.showProducts("http:\/\/awsstaging.flashtalkingfeeds.com\/temp\/bas\/test-api\/get.php?category="+activeCategory);
      }

    });
  }


  showProducts(url, $log) {
    this.ProductService.callApi(url).success((data) => {
      this.products.push.apply(this.products, data.Data);
    });
  }

}
