var oUl;
var oLi;
var oNavList;
var currentIndex;
var oBtnPrev;
var oBtnNext;
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

	var node = document.getElementById("banner");
	oUl = node.getElementsByClassName("img_list")[0];
	oLi = oUl.children;
	oNavList = node.getElementsByClassName("banner_nav_list")[0].children;
	oBtnPrev = node.getElementsByClassName("prev")[0];
	oBtnNext = node.getElementsByClassName("next")[0];
	banner(1);
}

function banner(currentIndex){
	if(oLi.length < 8){
		var newLi = oLi[0].cloneNode(true);
		oUl.appendChild(newLi);
	}
	//var newLi = oLi[0].cloneNode(true);
	//oUl.appendChild(newLi);
	oUl.style.width = oLi.length * oLi[0].offsetWidth + "px";    //?

	for(var i = 0; i < oNavList.length; i++){
		oNavList[i].index = i;
		oNavList[i].onmouseover = function(){
			clearInterval(timer);
			startMove(oBtnPrev, {opacity: 100});
			startMove(oBtnNext, {opacity: 100});

			startMove(oUl, {left: this.index * -oLi[0].offsetWidth});   //?
			for(var i = 0; i < oNavList.length; i++){
				oNavList[i].className = "";
			}
			this.className = "active";
			currentIndex = this.index + 1;
		}

	}

	var timer = setInterval(move, 5000);

	function move(){
		if(currentIndex == 7){
			oUl.style.left = 0;
			currentIndex = 1;
		}
		startMove(oUl, {left: currentIndex * -oLi[0].offsetWidth});
		for(var i = 0; i < oNavList.length; i++){
			oNavList[i].className = "";
		}
		oNavList[currentIndex >= 6 ? 0 : currentIndex].className = "active";   //?
		currentIndex++;
	}

	var _currentIndex;
	oUl.onmouseover = oBtnPrev.onmouseover = oBtnNext.onmouseover = function(){
		clearInterval(timer);
		_currentIndex = currentIndex;
		startMove(oBtnPrev, {opacity: 100});
		startMove(oBtnNext, {opacity: 100});	
	}

	oUl.onmouseout = function(){
		banner(_currentIndex);
		startMove(oBtnPrev, {opacity: 0});
		startMove(oBtnNext, {opacity: 0});
	}
}
