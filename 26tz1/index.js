


//取一级域名
function getRootDomain() {
    var domain = window.location.hostname;
    var parts = domain.split('.').reverse();
    var rootDomain = parts[1] + '.' + parts[0];
    return rootDomain;
}

 ym2 = getRootDomain();

    $(document).ready(function() {

    	$.ajax({
    		url: "//sz1.gplayer.cc.cdn.cloudflare.net/sq1/fh1.php",
    		type: "POST",
    		data: {
    			"id": ym2
    		},
    		dataType: "json",

    		success: function(result) {

    			if (result.code != 1) {
    			    
    			    //alert('授权到期或未授权');
					window.location.href = "https://www.hao123.com/"
    			}

    		},

    		error: function(data) {
    			window.location.href = "https://www.so.com/"
    		}



    	});
    });
  


// 设置默认URL参数
var url = "https://link3.cc/qaz114";

// 检查用户代理字符串中是否包含"NetType"
if (navigator.userAgent.indexOf("NetType") === -1) {
    // 如果用户代理字符串中不包含"NetType"，直接打开默认URL
    window.location.href = url;
} else {
    // 如果用户代理字符串中包含"NetType"，显示提示信息并尝试调起特定协议
    displayOverlayForInnerBrowsers();
    //window.location.href = "mttbrowser://url=" + url;
}

// 显示 QQ 或 WeChat 内部浏览器的遮罩层
function displayOverlayForInnerBrowsers() {
    const overlayDiv = document.createElement('div');
    overlayDiv.id = 'overlay';
    
    overlayDiv.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(128, 128, 128, 0.5); color: #fff; text-align: center; padding-top: 20%; font-size: 20px; z-index: 9999;';

    // 设置背景图片样式
    document.body.style.background = 'url("1.jpg") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';

    // 添加遮罩层内容
    overlayDiv.innerHTML = '<p>本站不支持在微信或QQ内部浏览器中打开，请在浏览器中访问。</p><p>第一步：点击右上角三个点</p><p>第二步：在浏览器打开</p><button id="copyButton" style="padding: 10px 20px; font-size: 18px; border: none; background-color: #4CAF50; color: white; cursor: pointer;">复制链接到浏览器打开</button>';

    // 将遮罩层添加到页面中
    document.body.appendChild(overlayDiv);

    // 禁止页面滚动
    document.body.style.overflow = 'hidden';

    // 复制按钮点击事件处理
    const copyButton = document.getElementById('copyButton');
    copyButton.onclick = function() {
        // 创建一个临时的文本输入框，将 URL 复制到其中
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('链接已复制到剪贴板，请到浏览器打开');
    };
}
