angular.module('contentEditable',[])
.directive('makeEditable',function(){
   return {
         restrict : 'A',
         transclude :true,
         templateUrl:'content-editable.html',
         scope : true
          }
  
  });
