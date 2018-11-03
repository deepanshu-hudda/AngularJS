angular.module('myApp').controller('mainController',mainController)
.controller('aboutController',aboutController);

function mainController(){
    var vm=this;
    this.name='deepanshu'
}

function aboutController(){
    var vm=this;
    this.name='hudda '
}