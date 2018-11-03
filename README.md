# AngularJS
								AngularJS
						(jSbin-for seeing the output simultneously)



**2 way data binding i.e. any update to the model(backend) is reflected in the view(index.html) and any update in the view is reflected to the model automatically.
controller is used for the binding between view and model.

----------------------------------
Directives are similar to the tags in html.(similar to the attributes to the elements.)
ng-app:-Is used to kick start the angular app.Also defines the scope of your application.

Expressions--->{{ }}...inside these {} we can specify whatever we want to specify.

Data-binding-->binding some fields with the an expression
ng-model is used to bind the expression.

hello {{user}}<br>
    <input type="text" ng-model="user">


******************************************************************************************************************************************

Built in directives in angularjs

==>ng-init-->used to initialize a variable(int,string,char,boolean etc)

<div bg-init="name='hudda'">
{{name}}	//not a good practice

<p ng-bind="name"></p>
</div>

==> ng-click-->used to click an item.

<div ng-init="number=0">
        <button ng-click="number=number+1">+1</button>
        <button ng-click="number = number-1">-1</button>
        <p>{{number}}</p>
</div>

==>ng-if-->helps in checking some situation.

show me the paragraph<input type="checkbox" ng-model="isChecked">
    <p ng-if="isChecked">paragraph shown</p>

==>ng-show

show me the paragraph<input type="checkbox" ng-model="isChecked">
    <p ng-show="isChecked">paragraph shown</p>

****Both ng-if and ng-show seems to show the same properties but ng-if removes the content from the page whereas ng-show actually hides the content insides the page using some css and all.
 (if you apply some css to your paragraph and then hides it...it will remain there only...but in case of ng-if it removes that css completely away.)

Difference between ng-hide and ng-show

<div ng-init="number=10">
        <input type="text" ng-model="guess">
        <p ng-hide="guess!=number">correct</p>
        <p ng-show="guess!=number">Incorrect</p>
    </div>	

==>ng-class-->allows you to add some dynamic css....programatically update the css

<style>
    .red{
        border-color: red
    }
    .green {
        border-color: green
    }
    </style>
</head>
<body>
        <div ng-init="number=10">
            <input type="text" ng-model="guess" ng-class="{red:guess!=number,green:guess==number}">
        </div>
</body>


==>ng-repeat-->allows you to iterate a number or array....one by one.....duplicates in the repeater are not allowed....they should be unique...so we will iterate through indexes.(name in names track by $index).
We can also iterate through objects.

<div ng-init="numbers=[0,1,2,3,4,5,6,7,8,9,10]">
            <ul>
                <li ng-repeat="number in numbers" ng-class={red:$even,green:$odd}>{{number}}</li>
            </ul>
        </div>


==>ng-option-->used to select from array of objects.

<div ng-init="rebels=[{name:'john',profession:'tech'},
        {name:'carter',profession:'student'},
        {name:'adam',profession:'singer'}]">
        <select id="" name="" ng-model="rebel" ng-options="rebel.name for rebel in rebels"></select>
        <p>you have selected  {{rebel.name}} ({{rebel.profession}})</p>     
        </div>



=====>ng-cloak
if we include the angular script in the head tag of our application ..our application may down slow...as it first start downloading the angularjs...but if we include it just before the end of the body tag....then we'll see some {} ..
so ,to avoid this problem we use ng-cloak.

until angularjs completes its bootstrapping process ,it will not load anything.


<style>
    .ng-cloak,[ng-cloak],[ng\:cloak ]{
         display: none !important  /*make sure that no other style is over write it. */
    }
    </style>
</head>
<body ng-cloak>
        <div ng-init="rebels=[{name:'john',profession:'tech'},
        {name:'carter',profession:'student'},
        {name:'adam',profession:'singer'}]">
        <p ng-repeat="rebel in rebels">{{rebel.name}}</p>     
        </div>
        <script src="angular.min.js"></script>


**********************************************************************************************************************************************

		Built in filters -provide a way to format your data that you are about to display.
		---------------   capable of formatting the expressions.


 <div ng-init="amount=100">
        {{amount | currency}}
    </div>

{{amount | number:4}}  //specifies how many digits after the decimal you want to show.

Filters for strigs

<div ng-init="string='star wars'">
        {{string | uppercase}}
date filter //date:'medium'
 we can also customize our date as well..
date:'yyyy-mmmm-d'(2018-october-27)


Limit filter
ng-init="array=[0,1,2,3,4,5,6,7,8,9]"
{{array | limitTo:4}} 	//output-[0,1,2,3]	=> -2 will return last 2 elements 


OrderBy filter (by name ,by number desc order)

filter filter --allows used to filter your dataset

 <div ng-init="rebels=[{name:'john',profession:'tech'},
        {name:'carter',profession:'student'},
        {name:'adam',profession:'singer'},
        {name :'miller' ,profession:'doctor'}]">
        profession search<input type="text" ng-model="search.profession"><br>
        free text search<input type="text" ng-model="search.$">
        <ul>
            <li ng-repeat="rebel in rebels | filter: search">{{rebel.name}} {{rebel.profession}}</li>
        </ul>
             
        </div>


*********************************************************************************************************************************


Contollers , $scope , ContollerAs

# controller take the perimeter $scope inside it which can be used to change the properties of function.
# $scope isa clue between your view and controller.

<script>
    angular.module("myApp",[]).controller('myCtrl',myController);
    function myController($scope)
    {
        $scope.name='Hudda';
    }
    </script>
    </head>
<body> 
       <div ng-controller='myCtrl'>
         hello  {{name}}

       </div>

<script>
    angular.module('myApp',[]).controller('myCtrl',myController);
    function myController($scope){
        $scope.number=0;
        $scope.increment=function(){		//we can pass arguments to this function as well.
            $scope.number=$scope.number + 1;
        }
        $scope.decrement=function(){
            $scope.number=$scope.number - 1;
        }
    }
    </script>
    <body>
        <div ng-controller='myCtrl'>
            {{number}}<br>
        <button ng-click=increment()>+1</button>
        <button ng-click=decrement()>-1</button>    
        </div>

		Nesting Controllers

angular.module('myApp',[])
    .controller('myCtrl',myController)
    .controller('myCtrl1',myController1)
    function myController($scope)
    {
        $scope.name='Chhavi'
    }
    function myController1($scope){
        $scope.name='Hudda'
    }
        </script>
        </head>
        <body>
            <div ng-controller='myCtrl'>
                {{name}}
            </div>
            <div ng-controller='myCtrl1'>
                {{name}}
            </div>
            </body>

problem is that in small code we can easily referenced $scope with its associated controller.
but in large program it becomes very difficult to differentiate among them.
so, one way is that we can get rid out of these $scope and use instead ContollerAs syntax.(this keyword)


angular.module('myApp',[])
    .controller('myController',myController)
    .controller('myController1',myController1)
    function myController()
    { 
        var vm=this;
        vm.name='Chhavi'
    }
    function myController1(){
        var vm=this;
        vm.name='Hudda'
    }
        </script>
        </head>
        <body>
            <div ng-controller='myController as myCtrl'>
            <div ng-controller='myController1 as myCtrl1'>
                    {{myCtrl.name}}
                    {{myCtrl1.name}}
            </div>
        </div>


***************************************************************************************************************************************

		Modules in AngularJS

angular.module('myApp',[]);	//angular module setter syntax.Here we are dependent on a dependency.
angular.module('myApp');       //angular module getter syntax.Here we are using that dependency.

refer module 


***************************************************************************************************************************************

SPA
Routes
Templates

In SPA we are not refreshing the whole page even though the url is also changing but rather the routes are loaded.
If someone goes to a particular page than that route is loaded , which is mapped to the url.

$routeProvider will help us in setting up the routung.


angular.module('myApp',['ngRoute'])
.config(config);
function config($routeProvider){
    $routeProvider.when('/',{
        template:'<h1>This is the home page</h1>'
    })
    .when('/about',{
        template:'<h1>This is the about page</h1>'		//templateUrl:'templates/about.html'
    });
}

serving through python server:-

python -m SimleHTTPServer 8080



angular.module('myApp',['ngRoute'])
.config(config);
function config($routeProvider){
    $routeProvider
    .when('/',{
    templateUrl:'main.html',
    controller:'mainController',
    controllerAs:'vm'
    })
    .when('/about',{
    templateUrl:'about.html',
    controller:'aboutController',
    controllerAs:'vm'
    })  
    .otherwise({
        redirectTo:'/'
    });


angular.module('myApp').controller('mainController',mainController)
.controller('aboutController',abutController);

function mainController(){
    var vm=this;
    this.name='deepanshu'
}

function aboutController(){
    var vm=this;
    this.name='hudda '
}
}


*******************************************************************************************************************************************

			Built in services in AngularJS

$routeProvider is a built-in service provided angular for the purpose of routing.

View <---------->Controller<---------->Factory<--------->Server	
	$scope		      Inject		 $http

$http-Used to connect to the factory.specified the enf-point.and retriving the data from the server.

$routeParams-used to collect all your parameters from routes.


*****************************************************************************************************************************************

			Custom services 

****Services vs Factory****(both factory and services can be injected.)

Factory-Factory is  a functio and function returns something.
factory returns an object.
factory is eager.

Services - it is not a function but a function construction.
A function constructor is used to initialize the member variables and does not return anything.
Service is lazy.

datafactory.js

function filmFactory{
return 
{
getAllFilms:getallfilms
};

function getAllFilms($http){
return $http.get(end point).then(complete).catch(failed);
}

function complete(response){
return response.data;
}

function failed(error){
return error.statusText;
}
}


******************************************************************************************************************************************

				Custom filters

angular.module('myApp').filter('reverse',reverse);
function reverse(){
    return function(string){
        if(string){
            return string.split('').reverse().join('');
        }
    }
}


******************************************************************************************************************************************

			SINGLE PAGE APPLICATION
