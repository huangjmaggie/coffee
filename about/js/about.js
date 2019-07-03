var list1=document.getElementsByClassName("center")[0].children[0].children;
var bx1=document.getElementsByClassName("bx1")
var pos1=document.getElementsByClassName("pos1")[0].children;
var banner=document.getElementsByClassName("banner")[0].children;

for(var i=0;i<list1.length;i++){
	list1[i].onclick=function(){
		var lii=this.getAttribute("lii")
		for(var j=0;j<list1.length;j++){
			bx1[j].id=""
			pos1[j].className=""
			bx1[j].style.animation=""
			banner[j].className=""
			banner[j].style.animation=""
			
		}
		bx1[lii].id="act1"
		bx1[lii].style.animation="bounceInUp 1s"
		pos1[lii].className="active"
		banner[lii].className="active"
		banner[lii].style.animation="fadeInDown 1s"
		pos1[lii].style.animation="rollOut 1s"
		
	}
}
