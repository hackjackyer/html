<script type="text/javascript">
   var browser = {
    versions: function () {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {//移动终端浏览器版本信息
                mobile: (!!u.match(/AppleWebKit.*Mobile/) || !!u.match(/Windows Phone/) || !!u.match(/Android/) || !!u.match(/MQQBrowser/)) && !u.match(/iPad/)//是否为移动终端
      };
    }()
  }
if (browser.versions.mobile) {
window.location.href = "http://m.baidu.com";
}
