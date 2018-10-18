angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);


function mainCtrl($scope, $http, ChartJsProvider){
  	
	 
	
	// ###################### Question 4 
	// Associate your sparql endpoint to a scope variable. Add the "/query?query=" parameter after the variable
	// Ex. $scope.myVariable = "myendpoint"
	
	
	
	// ###################### Question 5 
	// Create 2 different data visualisations based on two SPARQL queries
	// For each of the visualisation: 
	// (1) Run the SPARQL query on the console 
	// (2) Copy the SPARQL results a scope variable, ex. $scope.myresult = [] 
	// (3) Associate the SPARQL query to another scope variable, ex. $scope.myquery = "myquery"
	// Examples :
	// ex1 : a piechart of the most frequent classes, 
	// ex2 : a barplot of the most frequent properties
	
	$scope.visualisationData1 ;
	$scope.sparqlquery1 ;
	
	$scope.visualisationData2 ;
	$scope.sparqlquery2 ;
	
	
	// use a third variable if you want to visualise labels   
	$scope.visualisationLabels1 ;
	$scope.visualisationLabels2 ;


	// ###################### Question 6 	
	// Create an interaction with the triplestore by filling the following method 
	// The function needs to include : some arguments sent by the html + an http call to the sparql endpoint + a variable storing the results to be visualised    
	// use the native function encodeURI(mySparqlQuery) to encode your query as a URL
	$scope.fireInteraction = function(){
		
		
		$http(  ); // TODO
		
		
		$scope.results  // =  TODO
	};
	
	

}


