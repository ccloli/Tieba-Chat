Tieba-Chat
==========

*因百度 API 无法正常使用（2014 年 10 月 2 日检测），此脚本可能已失效*

Tieba Chat | 这是一个实现在网页端使用贴吧客户端聊天功能的脚本。通过该脚本，您可以与使用贴吧客户端的好友聊天

这是一个实现在网页端使用贴吧客户端的聊天功能的脚本。通过该脚本，您可以方便地与使用贴吧客户端的好友聊天。

使用说明：
> 1. 将鼠标划至网页右下角的“贴吧聊天”即可打开聊天界面；
> 2. 点击聊天列表中的用户或贴子楼层右下角“聊天”可以发起聊天，点击“点击加载下/上一页”可以进行翻页操作；
> 3. 在聊天界面下方文本框中输入聊天文字，点击右侧“发送”即可发送消息；
> 4. 在聊天界面点击信息列表最上方的“点击查看更多”即可查看之前的消息（如果存在的话）；
> 5. 鼠标移出聊天界面后 0.5 秒可收起聊天界面。

警告：
> * 该脚本目前仍处于测试阶段，可能存在一些未知错误，请谨慎使用
> * 该脚本目前只能发送和接收文字信息，对于图片、表情、语音等多媒体信息暂不支持（主要是 mini 客户端 api 没有提供）
> * 本脚本目前只是为实现该功能而编写，暂未考虑效率问题，这可能导致浏览器运行缓慢
> * 本脚本无缓存功能，所有操作均需要重新访问 api，这可能带来较多的带宽消耗

本脚本基于 GPLv3 协议开源 http://www.gnu.org/licenses/gpl.html‎

![此界面截取自 Chrome on Windows XP，实际效果可能有所差距](https://cloud.githubusercontent.com/assets/8115912/3609206/db49f352-0d74-11e4-8916-626b592f1be0.png)
![此界面截取自 Chrome on Windows 7，实际效果可能有所差距](https://cloud.githubusercontent.com/assets/8115912/3609244/a5a4dcde-0d75-11e4-856d-75331d6ac318.png)

更新历史： 
> 2014.07.29 1.12 修复个人主页不呼出聊天页面的问题，修复在打开聊天页面时向他人发起聊天请求后聊天页面不更新的问题
> 
> 2014.07.27 1.11 修复因服务器返回数据出错而导致打不开聊天页面的问题
> 
> 2014.07.23 1.10 添加表情功能
> 
> 2014.07.21 1.9 样式小改，在聊天列表显示未读消息数，修复不输入聊天内容时发送消息会报错的问题，修复个人主页聊天按钮过小的问题
> 
> 2014.07.17 1.8 彻底修复在聊天页获取消息更新时出现多个消息框的问题（即重复获取消息的问题）【八进制到底是 TM 什么玩意（哭
> 
> 2014.07.17 1.7 在编辑聊天信息时按 Ctrl + Enter 可快速发送，尝试性修复 Firefox 下无法显示聊天按钮的问题
> 
> 2014.07.17 1.6 在用户信息面板添加聊天按钮，弃用在贴子右下角添加聊天按钮的方式
> 
> 2014.07.08 1.5 修复偶然出现白屏的情况；再次尝试性修复在聊天页获取消息更新时出现多个消息框的问题；修复将鼠标移至聊天页或聊天列表顶部时频繁获取数据而滚动页面的问题
> 
> 2014.07.08 1.4 添加标记已读模式和删除用户模式
> 
> 2014.07.08 1.3 修复在聊天页获取消息更新时出现多个消息框的问题；修复打开聊天页后隐藏聊天框时，因更新消息内容而导致无更新提醒的问题；尝试性修复偶尔不能获取消息更新的问题
> 
> 2014.07.08 1.2 添加手动添加聊天用户功能；添加删除所有聊天记录和删除聊天用户功能；设置不在 iframe 页面内运行（may only chrome）；尝试性再次修复从聊天页退回聊天列表后，若发来新消息会重新打开聊天页的问题；补回 @namespace（可能需要删除旧版本脚本）
> 
> 2014.07.08 1.1 不需要单独提供 BDUSS；修复从聊天页退回聊天列表后，若发来新消息会重新打开聊天页的问题；其他 bug 修复；规范语法
> 
> 2014.05.19 1.0 脚本正式发布
