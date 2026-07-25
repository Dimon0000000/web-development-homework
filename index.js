
       function fun(){

            var date =new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var week = date.getDay();
           if(week==1){
               week="一";
           }if(week==2){
               week="二";
           }
           if(week==3){
               week="三";
           }
           if(week==4){
               week="四";
           }
           if(week==5){
               week="五";
           }
           if(week==6){
               week="六";
           }
           if(week==7){
               week="日";
           }
            var am="";
            if(hour>=0 && hour<=12){
                am = "AM";
            }else{
                am = "PM"
            }
            document.getElementById("p12345").innerHTML=year+"年"+month+"月"+day+"日"+" "+hour+":"+minutes+":"+seconds+" "+am+" 星期"+week;

        }
        onload = function(){
            setInterval("fun()",100);
        }


function m1(){
  alert("不要点我(〃＞目＜)")
}
function m2(){
  alert("正在前往“太原”")
}
function m3(){
  alert("正在前往“大同”")
}
function m4(){
  alert("正在前往“晋城”")
}
function m5(){
  alert("正在前往“运城”")
}
function m6(){
  alert("正在前往“朔州”")
}
function m7(){
  alert("正在前往“临汾”")
}
function m8(){
alert("正在前往“长治”")
}
function m0(){
  alert("正在回到“主页”")
}
