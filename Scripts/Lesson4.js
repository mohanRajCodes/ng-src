/**
 *  ng-src
 */

var myapp = angular
				   .module("MyModule",[])
				   .controller("MyController",function($scope){
					   var cricketer = {
							   name: "Vijay S",
							   bat: "R/H",
							   Bowl: "R/M",
							   Photo: "C:/Users/577525/eclipse-workspace/AngularLesson4/src/Image/VijayS.jpg"
					   };
					   $scope.message = cricketer;
				   });
