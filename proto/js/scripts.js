var _SERVER_URL = 'http://localhost';

(function () {

    var rqAppModule = angular.module('rqApp', ['onsen.directives']);

    //TOP画面コントローラ
    rqAppModule.controller('TopController', function ($scope) {
        $scope.toNextPage = function () {
            //menu.setMainPage('question.html' , { closeMenu: true } );
            menu.setMainPage('list.html' , { closeMenu: true } );
        };
    });

    //新着一覧画面コントローラ
    rqAppModule.controller('listController', function ($scope) {
        console.log("新着一覧画面です。");
        $scope.toQuestionPage = function () {
            //alert("質問画面に遷移します。");
            menu.setMainPage('question.html' , { closeMenu: true } );
        };
    });

    //質問画面コントローラ
    rqAppModule.controller('QuestionController', function ($scope) {
    	$scope.submitQuestion = function(e) {
    		jQuery("#answers").css("-webkit-transform", "scale3d(1,1,1)");
    	}
    	
        $scope.testFunc = function (argCode) {
            var msgCode = argCode;
            switch (msgCode) {
                case 1:
                    msg = "いいね！";
                    break;
                case 2:
                    msg = "ナニソレ？";
                    break;
                case 3:
                    msg = "ユニーク！";
                    break;
                default :
                    msg = "投稿しました。";
                    break;
            }

            ons.notification.alert({
                messageHTML: msg,
                title: 'メッセージ',
                buttonLabel: 'OK',
                animation: 'default',
                callback: function() {
                    return false;
                }
            });
        };
    });

    //お知らせ画面コントローラ
    rqAppModule.controller('NoticeController', function ($scope) {
        console.log("お知らせ画面です。");
        $scope.testFunc = function () {
            //alert("xxxxxx");
        };
    });

})(_SERVER_URL);
