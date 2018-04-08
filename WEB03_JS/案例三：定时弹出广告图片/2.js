function init()
{
	window.setInterval("img1()",3000);
	setTimeout("showAdImg()",3000);
}

//轮播图函数
var i=1;
var imgNum=3;//轮播图数量
function img1()
{
	i=(i%imgNum)+1;
	document.getElementById("lbImg").src="../img/"+i+".jpg";
}
//显示广告图片函数
function showAdImg()
{
	//1、设置图片出现
	document.getElementById("adImg").style.display="block";
	
	//2、指定时间后，影藏广告图片
	setTimeout("hiddenAd()",3000);
}
//影藏弹出的图片
function hiddenAd()
{
	document.getElementById("adImg").style.display="none";
	
}