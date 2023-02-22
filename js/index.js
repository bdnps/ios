var is_weixin = (function () {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {//微信中打开网页
                window.onload = function () {
                    //var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
                    var tip = document.getElementById('weixin-tip-box');
                    if (is_weixin) {
                        tip.style.display = 'block';
                        tip.style.position = 'absolute';
                        tip.style.zIndex = '100';
                        tip.style.backgroundColor = 'white';
                        return false;
                    }
                };
                return true;
            } else if (ua.match(/QQ/i) == "qq") {//qq里打开网页
                window.onload = function () {
                    //var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
                    var tip = document.getElementById('weixin-tip-box');
                    if (is_weixin) {
                        tip.style.display = 'block';
                        tip.style.position = 'absolute';
                        tip.style.zIndex = '100';
                        tip.style.backgroundColor = 'white';
                        return false;
                    }
                };
                return true;
            } else {
                var baseUrl = '${base}';
                adaptation(750);
                function adaptation(size) {
                    if (document.documentElement.clientWidth > size) {
                        document.documentElement.style.fontSize = size / 7.5 + "px"
                    } else {
                        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px"
                    }
                }
                return true;
            }
        })();
	
