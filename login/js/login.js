$(function(){
	//手机号输入位数判断
	var reg=/^[0-9]{11}$/;
	//判断是否输入内容及勾选协议
	$(".fu").click(function(){
		var va1=$(".shu_ru").val();
		var va2=$(".shu_ru1").val();
		var va3=$(".fu").prop("checked");
		if(reg.test(va1)&&va2!==""&&va3){
	     $(".zhu_ce img").attr("src","img/btn_3.png");
$(".zhu_ce").attr("href","regist.html");
		}else{
			$(".zhu_ce img").attr("src","img/btn_2.png");
$(".zhu_ce").attr("href","#");
		}
	});
	$(".tanchuang").click(function(){
	$(".alert").show();
});
$(".btn1").click(function(){
	$(".alert").hide();
});
	});
