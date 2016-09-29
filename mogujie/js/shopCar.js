$(function(){
	sc_msg();

	function sc_msg(){
		$.ajax({
			url:"../js/data1.json",
			type:"GET",
			success:function(data){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_obj = eval(sc_str);
					var html = "";
					for(var i in sc_obj){
						html += "<div id = 'goodPic'><img src = '" + data[sc_obj[i].id].img + "'></div><div id = 'goodTitle'>【三只松鼠坚果大礼包】</div><div id = 'goodPrice'>￥128</div><div id = 'goodNum'>商品数量：" + sc_obj[i].num + "</div>"
					}
					$("#shopMain").html(html);
				}
			}
		})
	}
})