window.onload = function(){
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
}