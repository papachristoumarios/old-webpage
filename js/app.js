var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', ['$scope', function($scope){
    $scope.colwidth = 4;
    
    $scope.foo = 'hohohh';
    
    $scope.projects = [
        {'title': "A Lego-based 3D printer-milling machine", 'image_src': "img/portfolio/cabin.png", 'webpage': '#' },
        {'title': "A 'pythonic' $12 projective 3D scanner for mobile phones", 'image_src': "img/portfolio/cabin.png", 'webpage': 'http://www.google.com'},

        {'title': "Triton FPR - A bioinformatics project with openCV", 'image_src': "img/portfolio/cabin.png", 'webpage': '#'},
        
        {'title': "A $12 projective 3D scanner for mobile phones", 'image_src': "img/portfolio/cabin.png", 'webpage': '#'},
        
        {'title': "A $12 projective 3D scanner for mobile phones", 'image_src': "img/portfolio/cabin.png", 'webpage': '#'}
        
                
    ];
    
}]);