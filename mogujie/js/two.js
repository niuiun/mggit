$(function(){
	//1.获取数据
	ajax("get", "http://10.30.162.10/mogujie1/js/index.json", "", function(data){
		var arr = JSON.parse(data)._primary;
		//2.创建所有节点
		var aUl = $("<ul></ul>");
		$("#left").append(aUl);
		for(var i = 0; i < arr.length; i++){
			var aLi = $("<li class = 'li_list'></li>");
			var aA1 = $("<a href = '#'></a>");
			if(i == 12){
				aA1.attr("href", "html/nuts.html");
			}
			aA1.html(arr[i].title);   
			aA1.attr("class", "bold");   //添加class

			var aA2 = $("<a href = '#'></a>");
			aA2.html(arr[i].classify[0]);
			if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 11 || i == 13){
				aA2.attr("class", "red");
			}

			var aA3 = $("<a href = '#'></a>");
			aA3.html(arr[i].classify[1]);
			if(i == 5 || i == 6 || i == 10 || i == 12){
				aA3.attr("class", "red");
			}

			var aA4 = $("<a href = '#'></a>");
			aA4.html(arr[i].classify[2]);
			if(i == 1 || i == 4 || i == 5 || i == 7 || i == 12 || i == 13){
				aA4.attr("class", "red");
			}

			if(i == arr.length - 1){
				aLi.attr("id", "last");
			}
			$(aLi).append(aA1);
			$(aLi).append(aA2);
			$(aLi).append(aA3);
			$(aLi).append(aA4);
			//3.给所有的button添加事件
			$(aUl).append(aLi);		
		}

		var aDiv = $("<div id = 'menu'></div>");
		$("#left").append(aDiv);
		var aLis = document.getElementsByClassName("li_list");
		var menu = document.getElementById("menu");
		for(var i = 0; i < aLis.length; i++){
			aLis[i].onmouseover = menu.onmouseover =  function(){
				

				aDiv.html("");
				aDiv.css("display", "block");
				var liIndex = $(this).index(); 
				//alert(this);  //this?  ali

				var oP1 = $("<p></p>");
				for(var j = 0; j < arr[liIndex].top.length; j++){
					if(j == 0){
						var aSpan = $("<span></span>");
						aSpan.html(arr[liIndex].top[j]);
						$(aDiv).append(aSpan);
						continue;
					}
					var aA5 = $("<a href = '#'></a>");
					aA5.html(arr[liIndex].top[j]);
					$(oP1).append(aA5);
					$(aDiv).append(oP1);
				}

				var oP2 = $("<p></p>");
				for(var k = 0; k < arr[liIndex].middle.length; k++){
					if(k == 0){
						var aSpan = $("<span></span>");
						aSpan.html(arr[liIndex].middle[k]);
						$(aDiv).append(aSpan);
						continue;
					}
					var aA6 = $("<a href = '#'></a>");
					aA6.html(arr[liIndex].middle[k]);
					$(oP2).append(aA6);
					$(aDiv).append(oP2);
				}

				var oP3 = $("<p></p>");
				for(var l = 0; l < arr[liIndex].bottom.length; l++){
					if(l == 0){
						var aSpan = $("<span></span>");
						aSpan.html(arr[liIndex].bottom[l]);
						$(aDiv).append(aSpan);
						continue;
					}
					var aA7 = $("<a href = '#'></a>");
					aA7.html(arr[liIndex].bottom[l]);
					$(oP3).append(aA7);
					$(aDiv).append(oP3);
				}

				var aImg = $("<img />");
				var pic = arr[liIndex].photo;
				aImg.attr("src", "images/" + pic);
				aImg.attr("class", "photo");
				$(aDiv).append(aImg);
			}
			aLis[i].onmouseout = menu.onmouseout = function(){
				aDiv.css("display", "none");
			}
		}
	});
});		