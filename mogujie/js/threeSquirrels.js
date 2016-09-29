$(function(){
	ajax("get", "http://10.30.162.10/mogujie1/js/threeSquirrels.json", "", function(data){
		var arr = JSON.parse(data)._pic;
		var aUl = $("<ul></ul>");
		$("#shopPic").append(aUl);
		for(var i = 0; i < arr.length; i++){
			var aLi = $("<li class = 'shopList'></li>");
			var pic = arr[i].smallPic;
			var aImg1 = $("<img />");
			aImg1.attr("src", "../images/" + pic);
			$(aLi).append(aImg1);
			$(aUl).append(aLi);
		}

		var aDiv = $("<div></div>");
		var photo = arr[0].bigPic;
		var aImg2 = $("<img />");
		aImg2.attr("src", "../images/" + photo);
		$(aDiv).append(aImg2);
		$("#shopPic").append(aDiv);
		var aLis = document.getElementsByClassName("shopList");
		for(var i = 0; i < aLis.length; i++){
			aLis[i].onmouseover = function(){
				var liIndex = $(this).index();
				aImg2.attr("src", "../images/" + arr[liIndex].bigPic);
			}
		}

		var arrList = JSON.parse(data)._module;
		var oUl = $("<ul></ul>");
		$("#module_repeat").append(oUl);
		for(var i = 0; i < arrList.length; i++){
			var oLi = $("<li></li>");
			var pic = arrList[i].modulePic;
			var oA = $("<a></a>");
			var oImg = $("<img />");
			oImg.attr("src", "../images/" + pic);
			oImg.attr("class", "module_pic");
			var oSpan = $("<span></span>");
			oSpan.html(arrList[i].title);
			$(oA).append(oImg);
			$(oA).append(oSpan);
			$(oLi).append(oA);
			var oP = $("<p></p>");
			oP.html(arrList[i].price);
			$(oLi).append(oP);
			$(oUl).append(oLi);
		}

		var arrDes = JSON.parse(data)._mainPic;
		for(var i = 0; i < arrDes.length; i++){
			var eImg = $("<img />");
			var pic = arrDes[i].des;
			eImg.attr("src", "../images/" + pic);
			eImg.attr("class", "mainPic" + i);
			$("#impression").append(eImg);
		}
	})
	var node0 = document.getElementById("cs");
	var node0_more = document.getElementById("customerService_more");
	node0.onmouseover = function(){
		node0_more.style.display = "block";
	}
	node0.onmouseout = function(){
		node0_more.style.display = "none";
	}

	var node1 = document.getElementById("ms");
	var node1_more = document.getElementById("myStores_more");
	node1.onmouseover = function(){
		node1_more.style.display = "block";
	}
	node1.onmouseout = function(){
		node1_more.style.display = "none";
	}

	var node2 = document.getElementById("sc");
	var node2_more = document.getElementById("shop_car");
	node2.onmouseover = function(){
		node2_more.style.display = "block";
		sc_msg();
	}
	node2.onmouseout = function(){
		node2_more.style.display = "none";
	}

	/*
	$("#shoppingCar").mouseenter(function(){
		$("#shop_car").css("display", "block");
		sc_msg();
	})
	$("#shoppingCar").mouseleave(function(){
		$("#shop_car").css("display", "none");
	})
	*/

	$("#car").on("click", function(){
		var id = 0;
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			$.cookie("goods", "[{id:" + id + ",num:1}]");
			$.cookie("first", "false");
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
		}
		sc_car();
	});

	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var sc_obj = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_obj){
				sc_num += Number(sc_obj[i].num);
			}
		}
	}

	function sc_msg(){
		$.ajax({
			url:"../js/data0.json",
			type:"GET",
			success:function(data){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_obj = eval(sc_str);
					var html = "";
					for(var i in sc_obj){
						html += "<div id = 'goodsPic'><img src = '" + data[sc_obj[i].id].img + "'></div><div id = 'goodsTitle'>【三只松鼠坚果大礼包】</div><div id = 'goodsPrice'>￥128</div><div id = 'goodsNum'>商品数量：" + sc_obj[i].num + "</div><div id = 'lookCar'><a href = 'shopCar.html'>查看购物车</a><div>"
					}
					$("#shop_car").html(html);
				}
			}
		})
	}

	var num = $("#result").val();
	$("#add").click(function(){
		alert(num);
		num++;
		$("#result").val(num);
	})
	$("#minus").click(function(){
		if(num < 1){
			num == 0;
		}else{
			num--;	
		}
		$("#result").val(num);
	})

})