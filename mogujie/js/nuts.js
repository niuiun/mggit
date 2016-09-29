$(function(){
	ajax("get", "http://10.30.162.10/mogujie1/js/nuts.json", "", function(data){
		var arr = JSON.parse(data)._nuts;
		for(var i = 0; i < arr.length; i++){
			var aA = $("<a></a>");
			var aImg1 = $("<img />");
			var pic = arr[i].photo;
			aImg1.attr("src", "../images/" + pic);
			var aP = $("<p></p>");
			aP.html(arr[i].name);
			var aImg2 = $("<img />");
			var icons = arr[i].icons;
			aImg2.attr("src", "../images/" + icons);
			aImg2.attr("class", "icons");
			var aSpan = $("<span></span>");
			aSpan.html(arr[i].price);
			$(aA).append(aImg1);
			$(aA).append(aP);
			$(aA).append(aImg2);
			$(aA).append(aSpan);
			aA.attr("href", "threeSquirrels.html");
			/*if(i == 3){
				aA.attr("href", "threeSquirrels.html");
			}*/
			$(".nuts_li").eq(i % 5).append(aA);     //把这六个图循环添加到5个li中
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
})