/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { CategoryService } from '../app/components/category/category.service';
import { ProductService } from '../app/components/product/product.service';
import { MainController } from './main/main.controller';

angular.module('productDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('CategoryService', CategoryService)
  .service('ProductService', ProductService)
  .controller('MainController', MainController);
