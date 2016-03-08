export class ProductService {
  constructor ($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  callApi(url) {
    return this.$http.get(url);
  }
}
