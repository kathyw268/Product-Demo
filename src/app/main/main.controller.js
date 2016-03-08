export class MainController {
  constructor ($timeout, CategoryService, ProductService) {
    'ngInject';
    this.categories = [];
    this.products = [];
    this.ProductService = ProductService;

    CategoryService.callApi().success((data) => {
      this.categories = data.Data
      this.products = this.showProducts(this.categories[0].href);
    });

  }


  showProducts(url) {
    this.ProductService.callApi(url).success((data) => {
      this.products = data.Data;
    });
  }
}
