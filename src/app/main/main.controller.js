export class MainController {
  constructor ($timeout, CategoryService, ProductService, $routeParams) {
    'ngInject';
    this.categories = [];
    this.allProducts = [];
    this.products = [];
    this.ProductService = ProductService;
    this.activeCategory = $routeParams["category"];
    this.activeProduct = $routeParams["productId"] || false;




    CategoryService.callApi().success((data) => {
      this.categories = data.Data;
      angular.forEach(this.categories, (val, key) =>  this.setAllProducts(this.categories[key]))
    });

  }


  setAllProducts(obj) {
    this.ProductService.callApi(obj.href).success((data) => {
      angular.forEach(data.Data, (val, key) => data.Data[key].category = obj.id);
      this.allProducts.push.apply(this.allProducts, data.Data);
      this.getProducts();
    });
  }

  getProducts() {
    this.activeProduct ? this.showDetail() : !this.activeCategory ? this.products = this.allProducts : this.products = this.allProducts.filter(x => x.category === this.activeCategory);
  }

  showDetail() {
    this.products = this.allProducts.filter(x => x.id === this.activeProduct);
  }

}
