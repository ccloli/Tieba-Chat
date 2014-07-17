// ==UserScript==
// @name        Tieba Chat
// @version     1.3
// @description Tieba Chat | 这是一个实现在网页端使用贴吧客户端聊天功能的脚本。通过该脚本，您可以与使用贴吧客户端的好友聊天
// @match       http://tieba.baidu.com/*
// @include     http://tieba.baidu.com/*
// @author      864907600cc
// @icon        http://1.gravatar.com/avatar/147834caf9ccb0a66b2505c753747867
// @run-at      document-end
// @grant       none
// @noframes
// @namespace   http://ext.ccloli.com
// ==/UserScript==

// 本脚本基于 GPLv3 协议开源 http://www.gnu.org/licenses/gpl.html‎
// (c) 86497600cc. Some Rights Reserved.


var hex_md5 = (function(g,k){function l(a){return n(m(o(a)))};function m(a){return h(j(p(a),a.length*8))};function n(e){try{}catch(a){g=0};var b=g?'0123456789ABCDEF':'0123456789abcdef';var c='';var d;for(var a=0;a<e.length;a++)d=e.charCodeAt(a),c+=b.charAt(d>>>4&15)+b.charAt(d&15);return c};function o(d){var b='';var c=-1;var a,e;while(++c<d.length)a=d.charCodeAt(c),e=c+1<d.length?d.charCodeAt(c+1):0,55296<=a&&a<=56319&&56320<=e&&e<=57343&&(a=65536+((a&1023)<<10)+(e&1023),c++),a<=127?b+=String.fromCharCode(a):a<=2047?b+=String.fromCharCode(192|a>>>6&31,128|a&63):a<=65535?b+=String.fromCharCode(224|a>>>12&15,128|a>>>6&63,128|a&63):a<=2097151&&(b+=String.fromCharCode(240|a>>>18&7,128|a>>>12&63,128|a>>>6&63,128|a&63));return b};function p(c){var b=Array(c.length>>2);for(var a=0;a<b.length;a++)b[a]=0;for(var a=0;a<c.length*8;a+=8)b[a>>5]|=(c.charCodeAt(a/8)&255)<<a%32;return b};function h(c){var b='';for(var a=0;a<c.length*32;a+=8)b+=String.fromCharCode(c[a>>5]>>>a%32&255);return b};function j(j,l){j[l>>5]|=128<<l%32,j[(l+64>>>9<<4)+14]=l;var g=1732584193;var h=-271733879;var i=-1732584194;var f=271733878;for(var k=0;k<j.length;k+=16){var n=g;var o=h;var p=i;var m=f;g=a(g,h,i,f,j[k+0],7,-680876936),f=a(f,g,h,i,j[k+1],12,-389564586),i=a(i,f,g,h,j[k+2],17,606105819),h=a(h,i,f,g,j[k+3],22,-1044525330),g=a(g,h,i,f,j[k+4],7,-176418897),f=a(f,g,h,i,j[k+5],12,1200080426),i=a(i,f,g,h,j[k+6],17,-1473231341),h=a(h,i,f,g,j[k+7],22,-45705983),g=a(g,h,i,f,j[k+8],7,1770035416),f=a(f,g,h,i,j[k+9],12,-1958414417),i=a(i,f,g,h,j[k+10],17,-42063),h=a(h,i,f,g,j[k+11],22,-1990404162),g=a(g,h,i,f,j[k+12],7,1804603682),f=a(f,g,h,i,j[k+13],12,-40341101),i=a(i,f,g,h,j[k+14],17,-1502002290),h=a(h,i,f,g,j[k+15],22,1236535329),g=b(g,h,i,f,j[k+1],5,-165796510),f=b(f,g,h,i,j[k+6],9,-1069501632),i=b(i,f,g,h,j[k+11],14,643717713),h=b(h,i,f,g,j[k+0],20,-373897302),g=b(g,h,i,f,j[k+5],5,-701558691),f=b(f,g,h,i,j[k+10],9,38016083),i=b(i,f,g,h,j[k+15],14,-660478335),h=b(h,i,f,g,j[k+4],20,-405537848),g=b(g,h,i,f,j[k+9],5,568446438),f=b(f,g,h,i,j[k+14],9,-1019803690),i=b(i,f,g,h,j[k+3],14,-187363961),h=b(h,i,f,g,j[k+8],20,1163531501),g=b(g,h,i,f,j[k+13],5,-1444681467),f=b(f,g,h,i,j[k+2],9,-51403784),i=b(i,f,g,h,j[k+7],14,1735328473),h=b(h,i,f,g,j[k+12],20,-1926607734),g=c(g,h,i,f,j[k+5],4,-378558),f=c(f,g,h,i,j[k+8],11,-2022574463),i=c(i,f,g,h,j[k+11],16,1839030562),h=c(h,i,f,g,j[k+14],23,-35309556),g=c(g,h,i,f,j[k+1],4,-1530992060),f=c(f,g,h,i,j[k+4],11,1272893353),i=c(i,f,g,h,j[k+7],16,-155497632),h=c(h,i,f,g,j[k+10],23,-1094730640),g=c(g,h,i,f,j[k+13],4,681279174),f=c(f,g,h,i,j[k+0],11,-358537222),i=c(i,f,g,h,j[k+3],16,-722521979),h=c(h,i,f,g,j[k+6],23,76029189),g=c(g,h,i,f,j[k+9],4,-640364487),f=c(f,g,h,i,j[k+12],11,-421815835),i=c(i,f,g,h,j[k+15],16,530742520),h=c(h,i,f,g,j[k+2],23,-995338651),g=d(g,h,i,f,j[k+0],6,-198630844),f=d(f,g,h,i,j[k+7],10,1126891415),i=d(i,f,g,h,j[k+14],15,-1416354905),h=d(h,i,f,g,j[k+5],21,-57434055),g=d(g,h,i,f,j[k+12],6,1700485571),f=d(f,g,h,i,j[k+3],10,-1894986606),i=d(i,f,g,h,j[k+10],15,-1051523),h=d(h,i,f,g,j[k+1],21,-2054922799),g=d(g,h,i,f,j[k+8],6,1873313359),f=d(f,g,h,i,j[k+15],10,-30611744),i=d(i,f,g,h,j[k+6],15,-1560198380),h=d(h,i,f,g,j[k+13],21,1309151649),g=d(g,h,i,f,j[k+4],6,-145523070),f=d(f,g,h,i,j[k+11],10,-1120210379),i=d(i,f,g,h,j[k+2],15,718787259),h=d(h,i,f,g,j[k+9],21,-343485551),g=e(g,n),h=e(h,o),i=e(i,p),f=e(f,m)};return Array(g,h,i,f)};function f(a,b,c,d,f,g){return e(i(e(e(b,a),e(d,g)),f),c)};function a(b,a,c,d,e,g,h){return f(a&c|~a&d,b,a,e,g,h)};function b(c,a,d,b,e,g,h){return f(a&b|d&~b,c,a,e,g,h)};function c(b,a,c,d,e,g,h){return f(a^c^d,b,a,e,g,h)};function d(b,a,c,d,e,g,h){return f(c^(a|~d),b,a,e,g,h)};function e(b,c){var a=(b&65535)+(c&65535);var d=(b>>16)+(c>>16)+(a>>16);return d<<16|a&65535};function i(a,b){return a<<b|a>>>32-b};return g=0,k='',l}());

var user_id=window.PageData.user.id||window.PageData.user.user_id;//,
	//chatting_list_data='';

var _client_id='wappc_1398857293796_956',
	_client_type='2',
	_client_version='4.2.7',
	_phone_imei='092887406663530',
	net_type='3',
	sign_key='tiebaclient!!!';

/*if(document.cookie.match(/BDUSS=(.{192,}?);?/))var BDUSS=document.cookie.match(/BDUSS=(.{192,}?);?/)[1];
else if(GM_getValue('BDUSS',0)!=0)var BDUSS=GM_getValue('BDUSS');
else{
	var BDUSS=prompt('无法获取 BDUSS，请尝试在移动版贴吧注销并登录。\n\n1. 将浏览器 UA 设置为移动设备的 UA（例如 Chrome 可在开发者工具中点击右上角的“Show drawer.”，并在下方的 Emulation 里设置 UserAgent；Firefox 可安装 User Agent Overrider 等扩展）；\n2. 访问 http://tieba.baidu.com/mo 进行登录操作；\n3. 登录后禁用 UA 设置，回到贴吧页检查是否可用。\n\n如果希望手动配置 BDUSS，请将 BDUSS 贴在下方并按确定键。');
	if(BDUSS!=null&&BDUSS!=''&&BDUSS.match(/.{192,}?/)){
		//document.cookie='BDUSS='+BDUSS.match(/.{192,}?/)+'; expires='+(new Date(new Date().getTime()+60*60*24*365*10*1000)).toGMTString()+'; path=/';
		GM_setValue('BDUSS',BDUSS);
		var BDUSS=BDUSS;
		window.location.href=window.location.href;
	}
	throw 'Tieba Chat can\'t get BDUSS!!!';
}*/

var tb_chat_data=JSON.parse(window.localStorage.getItem('tb_chat_data')/*||window.localStorage.getItem('tb_chat_data')*/)||{};
var message_update_timestamp=window.localStorage.getItem('tb_chat_message_update_timestamp')||new Date().getTime();
var message_update_count=window.localStorage.getItem('tb_chat_message_update_count')||0;
var user_portrait='';
var com_portrait='';
var chatting_list_page=1;
var this_last_msg=0;
var this_early_msg=0;
var this_username=null;
var this_userid=0;
var this_msg_update=null;

if(tb_chat_data.first_install==null){
	window.$.dialog.alert('<div style="font-size:14px"><p>欢迎使用 Tieba Chat ~~~ ヽ(//∇//)ﾉ♡</p><p>这是一个实现在网页端使用贴吧客户端的聊天功能的脚本。通过该脚本，您可以方便地与使用贴吧客户端的好友聊天。</p><p>使用说明：<br>1. 将鼠标划至网页右下角的“贴吧聊天”即可打开聊天界面；<br>2. 点击聊天列表中的用户或贴子楼层右下角“聊天”可以发起聊天，点击“点击加载下/上一页”可以进行翻页操作；<br>3. 在聊天界面下方文本框中输入聊天文字，点击右侧“发送”即可发送消息；<br>4. 在聊天界面点击信息列表最上方的“点击查看更多”即可查看之前的消息（如果存在的话）；<br>5. 鼠标移出聊天界面后 0.5 秒可收起聊天界面。</p><p style="color:red">警告：<br>* 该脚本目前仍处于测试阶段，可能存在一些未知错误，请谨慎使用<br><del>* 该脚本需要获取 BDUSS，但并不会将其共享，如果您不信任，请卸载此脚本</del> 已确认不需要 BDUSS<br>* 该脚本目前只能发送和接收文字信息，对于图片、表情、语音等多媒体信息暂不支持（主要是 mini 客户端 api 没有提供）<br>* 本脚本目前只是为实现该功能而编写，暂未考虑效率问题，这可能导致浏览器运行缓慢<br>* 本脚本无缓存功能，所有操作均需要重新访问 api，这可能带来较多的带宽消耗<br>* 此脚本的设计可能比较简陋，暂时还没有设置界面……毕竟只是为了测试而已 OTL</p><p>如有疑问请在 firefox 吧相关贴子讨论……</p></div>',{title:"Tieba Chat 欢迎界面",width:800})
	tb_chat_data.first_install=1;
	window.localStorage.setItem('tb_chat_data',JSON.stringify(tb_chat_data));
}

function get_string(c){
		//str='BDUSS='+BDUSS+'&_client_id=wappc_1398857293796_956&_client_type=2&_client_version=4.2.7&_phone_imei=092887406663530&from=tieba&net_type=3';
	var str='';
	var str2='';
	for(var i in c){
		str+=i+'='+c[i];
		str2+=i+'='+encodeURIComponent(c[i])+'&';
	}
	var sign=hex_md5(str+sign_key);
	str2+='sign='+sign;
	return str2;
}

function get_message_update(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error_code=='0'){
				if(t.error&&t.error.errno!='0'){
					//get_error_command(t.error.errno,t.error.usermsg)
					//console.error('Tieba Chat Error '+t.error_code+': '+t.error_msg);
					var s=show_error(t.error.errno,t.error.errmsg);
					var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
					s.onclick=function(){get_message_update();s.parentElement.removeChild(s);clearTimeout(t);};
					throw 'Tieba Chat Error '+t.error.errno+': '+t.error.errmsg;
				}
				/*if(t.message.pletter!='0'){
					panel_top.style.color='orange';
					//get_chatting_list();
				}*/
				message_update_timestamp=new Date().getTime();
				message_update_count=t.message.pletter;
				//if(message_update_count!=window.localStorage.getItem('tb_chat_message_update_count')){
				if(message_update_count!='0'){
					document.title='【'+message_update_count+' 条新聊天】'+original_title;
					panel_top.style.color='orange';
				}
				else{
					document.title=original_title;
					panel_top.style.color='#000';
				}
				//}
				window.localStorage.setItem('tb_chat_message_update_timestamp',message_update_timestamp);
				window.localStorage.setItem('tb_chat_message_update_count',t.message.pletter);
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){get_message_update();s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	}
	xhr.open('POST','//tieba.baidu.com/c/s/msg?'+get_string());
	xhr.send();
}

function get_chatting_list(pn){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error_code=='0'){
				if(t.error&&t.error.errno!='0'){
					//get_error_command(t.error.errno,t.error.usermsg)
					//console.error('Tieba Chat Error '+t.error_code+': '+t.error_msg);
					var s=show_error(t.error.errno,t.error.errmsg);
					var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
					s.onclick=function(){get_chatting_list(pn);s.parentElement.removeChild(s);clearTimeout(t);};
					throw 'Tieba Chat Error '+t.error.errno+': '+t.error.errmsg;
				}
				panel_head.textContent='贴吧聊天';
				panel_main.innerHTML='';
				var panel_list=document.createElement('div');
				panel_list.className='tb_chat_panel_list';
				panel_main.appendChild(panel_list);
				chatting_list_page=pn;
				if(pn>1){
					var msg_more=document.createElement('div');
					msg_more.textContent='点击加载上一页';
					msg_more.style.cssText='width:200px;margin:20px auto;text-align:center;font-size:13px;background:#0CF;padding:5px;-webkit-user-select:none;-moz-user-select:none;cursor:pointer;color:#FFF';
					panel_list.appendChild(msg_more);
					msg_more.onclick=function(){get_chatting_list(pn-1);msg_more.textContent='正在载入......';};
				}
				//chatting_list_data='';
				for(var c in t.record){
					var p=document.createElement('div');
					p.className='tb_chat_row';
					p.setAttribute('user_id',t.record[c].user_id);
					p.setAttribute('user_name',t.record[c].user_name)
					p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+t.record[c].portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_username">'+t.record[c].user_name+'</div><div class="tb_chat_lasttext">'+(t.record[c].abstract.length>0?t.record[c].abstract[t.record[c].abstract.length-1].text:'')+'</div></div><div style="clear:both"></div>';
					if(t.record[c].unread_count!='0'){
						p.style.color='orange';
						p.onclick=function(){panel_top.style.color='#000';this_userid=this.getAttribute('user_id');this_username=this.getAttribute('user_name');get_latest_msg(this.getAttribute('user_id'));}
					}
					else p.onclick=function(){this_userid=this.getAttribute('user_id');this_username=this.getAttribute('user_name');get_latest_msg(this.getAttribute('user_id'));};
					panel_list.appendChild(p);
					//chatting_list_data+='<div class="tb_chat_row"'+(t.record[c].unread_count!='0'?' style="background:rgba(255,0,0,.1)"':'')+' user_id="'+t.record[c].user_id+'"><div class="tb_chat_pleft"><img class="tb_chat_avatat" src="http://tb.himg.baidu.com/sys/portrait/item/'+t.record[c].portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_username">'+t.record[c].user_name+'</div><div class="tb_chat_lasttext">'+(t.record[c].abstract.length>0?t.record[c].abstract[t.record[c].abstract.length-1].text:'')+'</div></div></div>';
				}
				if(t.has_more==1){
					var msg_more=document.createElement('div');
					msg_more.textContent='点击加载下一页';
					msg_more.style.cssText='width:200px;margin:20px auto;text-align:center;font-size:13px;background:#0CF;padding:5px;-webkit-user-select:none;-moz-user-select:none;cursor:pointer;color:#FFF';
					panel_list.appendChild(msg_more);
					msg_more.onclick=function(){get_chatting_list(pn+1);msg_more.textContent='正在载入......';};
				}
				//if(has_more=='1')chatting_list_data+='<div class="tb_chat_next">点击加载下一页</div>';
				//panel.innerHTML=chatting_list_data;
				/*var row_node=document.querySelectorAll('.tb_chat_row');
				for(var c in row_node){
					row_node[c].onclick=function(){get_latest_msg(row_node[c].getAttribute('user_id'));}
				}*/
				if(panel_top_back.hasAttribute('show'))panel_top_back.removeAttribute('show');
				if(panel_top_action.hasAttribute('show')){
					panel_top_action.removeAttribute('show');
					panel_top_action.textContent='+';
					panel_top_action.onclick=function(){
						var username=prompt('请输入用户名以发起聊天');
						if(username!=null&&username!='')get_userid(username);
					}
				}
				this_last_msg=0;
				this_early_msg=0;
				this_username=null;
				this_userid=0;
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){get_chatting_list(pn);s.parentElement.removeChild(s);clearTimeout(t);};

				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	}
	xhr.open('POST','//tieba.baidu.com/c/s/comlist?'+get_string({
		//BDUSS:BDUSS,
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		net_type:net_type,
		pn:pn
	}));
	xhr.send();
}

function get_latest_msg(id){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error_code=='0'){
				if(t.error&&t.error.errno!='0'){
					//get_error_command(t.error.errno,t.error.usermsg)
					//console.error('Tieba Chat Error '+t.error_code+': '+t.error_msg);
					var s=show_error(t.error.errno,t.error.errmsg);
					var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
					s.onclick=function(){get_latest_msg(id);s.parentElement.removeChild(s);clearTimeout(t);};
					throw 'Tieba Chat Error '+t.error.errno+': '+t.error.errmsg;
				}
				//panel_main.innerHTML=xhr.responseText;
				/*if(this_username==null)*/
				if(id!=this_userid||document.getElementsByClassName('tb_chat_panel_list')[0])panel_main.innerHTML='';
				panel_head.textContent=this_username;
				if(document.getElementsByClassName('tb_chat_panel_msg')[0])var panel_msg=document.getElementsByClassName('tb_chat_panel_msg')[0];
				else{
					var panel_msg=document.createElement('div');
					panel_msg.className='tb_chat_panel_msg';
					panel_main.appendChild(panel_msg);
				}
				com_portrait=t.com_portrait;
				user_portrait=t.user_portrait;
				if(t.has_more==1){
					var msg_more=document.createElement('div');
					msg_more.textContent='点击加载更多';
					msg_more.style.cssText='width:200px;margin:20px auto;text-align:center;font-size:13px;background:#0CF;padding:5px;-webkit-user-select:none;-moz-user-select:none;cursor:pointer;color:#FFF';
					panel_msg.appendChild(msg_more);
					msg_more.onclick=function(){get_early_msg(id,panel_msg,msg_more);};
				}
				for(var c in t.message){
					var p=document.createElement('div');
					p.className='tb_chat_message';
					if(t.message[c].from=='0'){
						p.className+=' com';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+com_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					else{
						p.className+=' user';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+user_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					p.setAttribute('msg_id',t.message[c].msg_id);
					p.title='Post @ '+new Date(t.message[c].time*1000);
					//p.onclick=function(){get_latest_msg(this.getAttribute('user_id'));}
					panel_msg.appendChild(p);
					if(t.message[c].msg_id<this_early_msg||this_early_msg==0)this_early_msg=t.message[c].msg_id;
					if(t.message[c].msg_id>this_last_msg||this_last_msg==0)this_last_msg=t.message[c].msg_id;
					//chatting_list_data+='<div class="tb_chat_row"'+(t.record[c].unread_count!='0'?' style="background:rgba(255,0,0,.1)"':'')+' user_id="'+t.record[c].user_id+'"><div class="tb_chat_pleft"><img class="tb_chat_avatat" src="http://tb.himg.baidu.com/sys/portrait/item/'+t.record[c].portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_username">'+t.record[c].user_name+'</div><div class="tb_chat_lasttext">'+(t.record[c].abstract.length>0?t.record[c].abstract[t.record[c].abstract.length-1].text:'')+'</div></div></div>';
				}
				//document.querySelector('.tb_chat_panel_msg .tb_chat_message:nth-last-child(1)').scrollIntoView();
				panel_msg.scrollTop=panel_msg.scrollHeight;
				panel_top_back.setAttribute('show','1');
				panel_top_action.setAttribute('show','1');
				//tb_chat_data.com[t.record[c].user_id].last_msg=this_last_msg;
				//window.localStorage.setItem('tb_chat_data',JSON.stringify(tb_chat_data));
				if(!document.getElementsByClassName('tb_chat_msg_panel')[0]){
					var msg_panel=document.createElement('div');
					var msg_textarea=document.createElement('textarea');
					var msg_send=document.createElement('div');
					msg_panel.style.cssText='width:100%;height:50px;position:absolute;bottom:0;left:0';
					msg_panel.className='tb_chat_msg_panel';
					panel_main.appendChild(msg_panel);
					msg_textarea.style.cssText='width:320px;height:36px;font-size:12px;margin:7px;position:absolute;left:0;top:0;resize:none';
					msg_textarea.className='tb_chat_msg_textarea';
					msg_panel.appendChild(msg_textarea);
					msg_send.style.cssText='width:50px;height:25px;font-size:14px;line-height:25px;text-align:center;position:absolute;margin:15px 7px;right:0;top:0;background:#0CF;cursor:pointer;color:#FFF';
					msg_send.textContent='发送';
					msg_panel.appendChild(msg_send);
					msg_send.onclick=function(){add_message(id,this_last_msg,msg_textarea.value);};
					window.onfocus=function(){if(this_msg_update==null)this_msg_update=setInterval(function(){if(document.getElementsByClassName('tb_chat_msg_panel')[0]&&panel.hasAttribute('show'))get_latest_msg(id)},10000);};
					window.onblur=function(){if(this_msg_update!=null){clearInterval(this_msg_update);this_msg_update=null;}};
					panel_top_action.textContent='≡';
					panel_top_action.onclick=function(){
						switch(prompt('请键入以下数字并点击“确定”以完成对应操作：\n1. 清空当前用户全部聊天记录\n2. 从聊天列表内删除当前用户\n\n（比较简陋真是抱歉了 _(:з」∠)_ ）')){
							case '1':
								delete_msg(id);
								break;
							case '2':
								delete_user(id);
								break;
						}
					}
				}
				get_message_update();
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){get_latest_msg(id);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	};
	xhr.open('POST','//tieba.baidu.com/c/s/recentmsg?'+get_string({
		//BDUSS:BDUSS,
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		com_id:id,
		msg_id:this_last_msg,
		net_type:net_type,
		user_id:user_id
	}
/*'msg_id=0&user_id='+user_id+'&com_id='+id*/));
	xhr.send();
}

function get_early_msg(id,panel_msg,msg_more){
	msg_more.textContent='正在载入......';
	var scroll_top=panel_msg.scrollHeight-panel_msg.scrollTop;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error_code=='0'){
				if(t.error&&t.error.errno!='0'){
					var s=show_error(t.error.errno,t.error.errmsg);
					var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
					s.onclick=function(){get_early_msg(id,panel_msg,msg_more);s.parentElement.removeChild(s);clearTimeout(t);};
					throw 'Tieba Chat Error '+t.error.errno+': '+t.error.errmsg;
				}
				var xxx=document.createElement('div');
				panel_msg.insertBefore(xxx,msg_more.nextElementSibling);
				for(var c in t.message){
					var p=document.createElement('div');
					p.className='tb_chat_message';
					if(t.message[c].from=='0'){
						p.className+=' com';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+com_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					else{
						p.className+=' user';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+user_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					p.setAttribute('msg_id',t.message[c].msg_id);
					p.title='Post @ '+new Date(t.message[c].time*1000);
					//p.onclick=function(){get_latest_msg(this.getAttribute('user_id'));}
					//panel_msg.appendChild(p);
					if(t.message[c].msg_id<this_early_msg||this_early_msg==0)this_early_msg=t.message[c].msg_id;
					if(t.message[c].msg_id>this_last_msg||this_last_msg==0)this_last_msg=t.message[c].msg_id;
					//panel_msg.insertBefore(p,msg_more.nextElement);
					xxx.appendChild(p);
				}
				if(t.has_more==1)msg_more.textContent='点击加载更多';
				else msg_more.parentElement.removeChild(msg_more);
				panel_msg.scrollTop=panel_msg.scrollHeight-scroll_top;
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){get_early_msg(id,panel_msg,msg_more);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	}
	xhr.open('POST','//tieba.baidu.com/c/s/historymsg?'+get_string({
		//BDUSS:BDUSS,
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		com_id:id,
		msg_id:this_early_msg,
		net_type:net_type,
		user_id:user_id
	}
/*'msg_id=0&user_id='+user_id+'&com_id='+id*/));
	xhr.send();
}

function add_message(id,last_msg_id,content){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error_code=='0'){
				if(t.error&&t.error.errno!='0'){
					//get_error_command(t.error.errno,t.error.usermsg)
					//console.error('Tieba Chat Error '+t.error_code+': '+t.error_msg);
					var s=show_error(t.error.errno,t.error.errmsg);
					var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
					s.onclick=function(){add_message(id,last_msg_id,content);s.parentElement.removeChild(s);clearTimeout(t);};
					throw 'Tieba Chat Error '+t.error.errno+': '+t.error.errmsg;
				}
				var this_last_msg;
				var panel_msg=document.getElementsByClassName('tb_chat_panel_msg')[0];
				//var panel_msg=document.createElement('div');
				//panel_msg.className='tb_chat_panel_msg';
				//panel_main.appendChild(panel_msg);
				for(var c in t.recent.message){
					var p=document.createElement('div');
					p.className='tb_chat_message';
					if(t.recent.message[c].from=='0'){
						p.className+=' com';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+com_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.recent.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					else{
						p.className+=' user';
						p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+user_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.recent.message[c].content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
					}
					p.setAttribute('msg_id',t.recent.message[c].msg_id);
					p.title='Post @ '+new Date(t.recent.message[c].time*1000);
					panel_msg.appendChild(p);
					//panel_top_back.setAttribute('show','1');
					if(t.recent.message[c].msg_id<this_early_msg||this_early_msg==0)this_early_msg=t.recent.message[c].msg_id;
					if(t.recent.message[c].msg_id>this_last_msg||this_last_msg==0)this_last_msg=t.recent.message[c].msg_id;
				}
				var p=document.createElement('div');
				p.className='tb_chat_message';
				p.className+=' user';
				p.innerHTML='<div class="tb_chat_pleft"><img class="tb_chat_avatar" src="http://tb.himg.baidu.com/sys/portrait/item/'+user_portrait+'" alt></div><div class="tb_chat_pright"><div class="tb_chat_message_inner">'+(t.message.content[0].text||'未知数据')+'</div></div><div style="clear:both"></div>';
				p.setAttribute('msg_id',t.message.msg_id);
				panel_msg.appendChild(p);
				if(t.message.msg_id<this_early_msg||this_early_msg==0)this_early_msg=t.message.msg_id;
				if(t.message.msg_id>this_last_msg||this_last_msg==0)this_last_msg=t.message.msg_id;
				//document.querySelector('.tb_chat_panel_msg .tb_chat_message:nth-last-child(1)').scrollIntoView();
				panel_msg.scrollTop=panel_msg.scrollHeight;
				document.getElementsByClassName('tb_chat_msg_textarea')[0].value='';
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){add_message(id,last_msg_id,content);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	}
	xhr.open('POST','//tieba.baidu.com/c/s/addmsg?'+get_string({
		//BDUSS:BDUSS,
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		com_id:id,
		content:content,
		last_msg_id:last_msg_id,
		net_type:net_type,
		user_id:user_id
	}));
	xhr.send();
}

function show_error(c,t){
	var panel_error=document.createElement('div');
	panel_error.className='tb_chat_error';
	panel.appendChild(panel_error);
	panel_error.innerHTML='Tieba Chat Error!!!<br>Error Code: '+c+'<br>Error Message:'+t+'<br>Click this panel to retry....';
	return panel_error;
}

function add_enterance(){
	var s=document.getElementsByClassName('j_jb_ele');
	for(var i=0;i<s.length;i++){
		if(s[i].hasAttribute('tb_chat_added')==false){
			var k=document.createTextNode(' ');
			s[i].appendChild(k);
			var j=document.createElement('a');
			j.style.cssText='color:#999;cursor:pointer';
			j.textContent='聊天';
			s[i].appendChild(j);
			j.onclick=function(){
				var ud=JSON.parse(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-field')).author;
				this_userid=ud.user_id;
				this_username=ud.user_name;
				panel.setAttribute('show','1');
				get_latest_msg(ud.user_id);
			}
			var k=document.createTextNode(' |');
			s[i].appendChild(k);
			s[i].setAttribute('tb_chat_added','true');
		}
	}
}

function get_userid(username){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.no==0){
				this_username=username;
				get_latest_msg(t.data.id);
			}
			else{
				var s=show_error(t.no,t.error);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){get_userid(username);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.no+': '+t.error;
			}
		}
	};
	xhr.open('POST','//tieba.baidu.com/home/get/panel?ie=utf-8&un='+encodeURIComponent(username));
	xhr.send();
}

function delete_msg(id){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error.errno=="0"&&t.error_code=="0"){
				alert('清除成功！');
				document.getElementsByClassName('tb_chat_panel_msg')[0].innerHTML='';
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){delete_msg(id);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	};
	xhr.open('POST','//tieba.baidu.com/c/s/clearmsg?'+get_string({
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		com_id:id,
		net_type:net_type,
		user_id:user_id
	}));
	xhr.send();
}

function delete_user(id){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var t=JSON.parse(xhr.responseText);
			if(t.error.errno=="0"&&t.error_code=="0"){
				alert('删除成功！');
				get_chatting_list(chatting_list_page);
				if(this_msg_update!=null){
					clearInterval(this_msg_update);
					this_msg_update=null;
				}
				window.onfocus=null;
				window.onblur=null;
			}
			else{
				var s=show_error(t.error_code,t.error_msg);
				var t=setTimeout(function(){s.parentElement.removeChild(s);},5000);
				s.onclick=function(){delete_msg(id);s.parentElement.removeChild(s);clearTimeout(t);};
				throw 'Tieba Chat Error '+t.error_code+': '+t.error_msg;
			}
		}
	};
	xhr.open('POST','//tieba.baidu.com/c/s/delcom?'+get_string({
		_client_id:_client_id,
		_client_type:_client_type,
		_client_version:_client_version,
		_phone_imei:_phone_imei,
		com_id:id,
		net_type:net_type,
		tbs:PageData.tbs?PageData.tbs:get_tbs(),
		user_id:user_id
	}));
	xhr.send();
}

function get_tbs(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200)return JSON.parse(xhr.responseText).tbs;
	}
	xhr.open('GET','http://tieba.baidu.com/dc/common/tbs');
	xhr.send();
}

var message_update_timer=setInterval(function(){
	if((new Date().getTime()-(window.localStorage.getItem('tb_chat_message_update_timestamp')||message_update_timestamp))>10000){
		get_message_update();
	}
	else if(window.localStorage.getItem('tb_chat_message_update_count')!='0'){
		document.title='【'+window.localStorage.getItem('tb_chat_message_update_count')+' 条新聊天】'+original_title;
		panel_top.style.color='orange';
	}
	else{
		document.title=original_title;
		panel_top.style.color='#000';
	}
	/*if(message_update_count!=window.localStorage.getItem('tb_chat_message_update_count')&&){
		if(message_update_count!='0'){
			document.title='【'+message_update_count+' 条新聊天】'+original_title;
			panel_top.style.color='orange';
		}
		else{
			document.title=original_title;
			panel_top.style.color='#000';
		}
	}*/
	//if(PageData.product=='pb')add_enterance();
},1000);

// ------------------------------------------------------------------------


var panel=document.createElement('div');
var panel_top=document.createElement('div');
var panel_head=document.createElement('div');
var panel_main=document.createElement('div');
var panel_top_back=document.createElement('div');
var panel_top_action=document.createElement('div');
var panel_ifshow=null;
var original_title=document.title;
var ss=document.createElement('style');
var stylesheet='.tb_chat_panel{width:400px;height:100%;position:fixed;top:calc(100% - 30px);right:0px;background:rgba(255,255,255,.75);z-index:200000;transition:all 0.5s ease-in;-webkit-user-select:none;-moz-user-select:none}.tb_chat_panel[show]{top:0px;transition:all 0.5s ease-out}.tb_chat_panel_top{font-size:14px;line-height:30px;text-align:center;width:100%;height:30px;-webkit-user-select:none;-moz-user-select:none}.tb_chat_panel_top_back{position:absolute;left:10px;top:0px;width:30px;height:30px;background:#0CF;visibility:hidden;color:#FFF;cursor:pointer;text-align:center}.tb_chat_panel_top_back[show]{visibility:visible}.tb_chat_panel_top_action{position:absolute;right:10px;top:0px;width:30px;height:30px;background:#0CF;visibility:hidden;color:#FFF;cursor:pointer;text-align:center}.tb_chat_panel_top_action[show],.tb_chat_panel[show] .tb_chat_panel_top_action{visibility:visible}.tb_chat_panel_main{height:calc(100% - 30px);overflow:auto}.tb_chat_row{/*width:400px;*/height:60px;padding:10px;cursor:pointer}.tb_chat_row:hover{background:rgba(0,0,0,.1)}.tb_chat_pleft{float:left}.tb_chat_row .tb_chat_avatar{width:60px;height:60px}.tb_chat_pright{float:left;max-width:300px}.tb_chat_row .tb_chat_username{font-size:14px;padding:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tb_chat_row .tb_chat_lasttext{padding:6px;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tb_chat_next{font-size:14px;text-align:center;width:100%;height:30px;line-height:30px}.tb_chat_message{font-size:12px;line-height:14px;min-height:28px;padding:5px}.tb_chat_message .tb_chat_avatar{width:28px;height:28px}.tb_chat_message.user .tb_chat_pleft,.tb_chat_message.user .tb_chat_pright{float:right;text-align:right}.tb_chat_message .tb_chat_message_inner{margin:0 10px;padding:6px;background:#FFF;border:1px solid #CCC;border-radius:3px;-moz-user-select:text;-webkit-user-select:text}.tb_chat_panel_msg{margin-bottom:50px;height:calc(100% - 50px);overflow:auto}.tb_chat_error{background:rgba(255,0,0,.25);font-size:12px;line-height:16px;position:fixed;width:350px;margin:0 25px;top:50px;right:0px;box-shadow:rgba(255,0,0,0.25) 0 0 5px;color:#F00}.tb_chat_message_inner::selection,.tb_chat_message_inner::-moz-selection{background:rgba(255,255,255,0.5)}';
panel.className='tb_chat_panel';
document.body.appendChild(panel);
ss.textContent=stylesheet;
panel.appendChild(ss);
//panel_top.textContent='贴吧聊天';
panel_top.className='tb_chat_panel_top';
panel.appendChild(panel_top);
panel_head.textContent='贴吧聊天';
panel_top.appendChild(panel_head);
panel_top_back.className='tb_chat_panel_top_back';
panel_top_back.textContent='←';
panel_top.appendChild(panel_top_back);
panel_top_action.className='tb_chat_panel_top_action';
panel_top_action.textContent='+';
panel_top.appendChild(panel_top_action);
panel_main.className='tb_chat_panel_main';
panel.appendChild(panel_main);

panel_top_back.onclick=function(){
	get_chatting_list(chatting_list_page);
	if(this_msg_update!=null){
		clearInterval(this_msg_update);
		this_msg_update=null;
	}
	window.onfocus=null;
	window.onblur=null;
};
panel_top.onmouseover=function(){
	panel.setAttribute('show','1');
	if(this_userid==0)get_chatting_list(chatting_list_page);
	else get_latest_msg(this_userid);
};
panel.onmouseover=function(){if(panel_ifshow!=null)clearTimeout(panel_ifshow);};
panel.onmouseout=function(){
	panel_ifshow=setTimeout(function(){
		if(panel.hasAttribute('show'))panel.removeAttribute('show');
		panel_ifshow=null;
	},500);
};
panel_top_action.onclick=function(){
	var username=prompt('请输入用户名以发起聊天');
	if(username!=null&&username!='')get_userid(username);
}
get_chatting_list(chatting_list_page);
if(PageData.product=='pb')add_enterance();
if(document.getElementsByClassName('tb_preload_notification')[0]){
	var tpn=document.getElementsByClassName('tb_preload_notification')[0];
	tpn.addEventListener('DOMSubtreeModified',function(){
		if(tpn.hasAttribute('show')==false)add_enterance();
	});
}