var app = angular.module('test', ['ui.ng-uploader']);

app.controller('testCtrl',function($scope,$log){
//   console.log(ngUploader.data);
$scope.startUpload=function(){
$log.info("upload.."+$scope.data);
//alert("tewatsdf");
};
$scope.fileList=[
{progress:50},
{progress:15}
];
});