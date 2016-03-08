export class CategoryService {
  constructor ($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  callApi() {
    return this.$http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php');
  }
}
