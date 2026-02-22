<?php
ob_start();
$frmpost=0;
$err=0;
if(isset($_POST['submit']))
{
$frmpost=1;
$aluminiumquality=$_POST['quality'];
$workmanship=$_POST['quality1'];
$raw=$_POST['quality2'];
$accessories=$_POST['quality3'];
$safety=$_POST['quality4'];
$packing=$_POST['quality5'];
$price=$_POST['quality6'];
$needs=$_POST['quality7'];
$schedule=$_POST['quality8'];
$personel=$_POST['quality9'];
$sales=$_POST['quality10'];
$choose=$_POST['quality11'];
$name=$_POST['fname'];
$date=$_POST['date'];
$comment=$_POST['comments'];
if($err==0)
{
	$subject="information"; //place your subject line
	$mail_to= "info@alumjaz.com";  //mail to whom we have to send  
	$headers .= "MIME-Version: 1.0 \n"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1 \n"; 
    $headers .= "From:$name\r\n"; //the from mail of the customer    
	$mailbody= '<table width="50%" border="0" align="center" cellpadding="5" cellspacing="4" style="border=1px solid color:#666666">';
	$mailbody.='<tr><td colspan="2" align="left"><strong><font size="+1">FEED BACK</font></strong></td></tr>';	
	$mailbody.='<tr><td >Name :</td><td>'.$name.'</td></tr>';
	$mailbody.='<tr><td >Date :</td><td>'.$date.'</td></tr>';
	$mailbody.='<tr><td >Aluminium Desing Quality? :</td><td>'.$aluminiumquality.'</td></tr>';
	$mailbody.='<tr><td >Aluminium Workmanship? :</td><td>'.$workmanship.'</td></tr>';
	$mailbody.='<tr><td >Aluminium Raw Materials? :</td><td>'.$raw.'</td></tr>';
	$mailbody.='<tr><td >Aluminium Accessories? :</td><td>'.$accessories.'</td></tr>';
	$mailbody.='<tr><td >Durability,Reliability&safety? :</td><td>'.$safety.'</td></tr>';
	$mailbody.='<tr><td >Finishing & Packing? :</td><td>'.$packing.'</td></tr>';
	$mailbody.='<tr><td >Price? :</td><td>'.$price.'</td></tr>';
	$mailbody.='<tr><td >Understanding & Fulfilling Customer Needs ?  :</td><td>'.$needs.'</td></tr>';
	$mailbody.='<tr><td >Meeting Delivery Schedules ?  :</td><td>'.$schedule.'</td></tr>';
	$mailbody.='<tr><td >Quality of Compeltence of Personnel ?  :</td><td>'.$personel.'</td></tr>';
	$mailbody.='<tr><td >Service after Sales ?:</td><td>'.$sales.'</td></tr>';
	$mailbody.='<tr><td >How did you Choose us ?  :</td><td>'.$choose.'</td></tr>';
	$mailbody.='<tr><td >Comment  :</td><td>'.$comments.'</td></tr>';
	    if (@mail ($mail_to, $subject, $mailbody, $headers)) 
	{ 
       		header("Location:feedbacknew.php?stat=yes");
			
	}
	else
	{
			header("Location:feedbacknew.php?MSGCODE=0002");
		
	}
	
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="rti" lang="ar" xml:lang="ar">
<head>
<meta name="description"  content="A list of Al-Jazirah's past and present clients demonstrates the universal approval of its products. " />
<meta name="keywords" content="alumjaz, alumjaz, alumjaz, alumjaz, alumjaz , alumjaz, alumjazArcitrave, Bottum Hung window, Curtain wall, Hinged door, Hinged window, Rolling Shutter , Sky light, Sliding window, Structure Glaze, Swing Door, alumjaz, Al-Jazirah, Aljazirah, Aluminium plant, Saudi aluminium plant, Al-Jazirah aluminium plant," />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Al-Jazirah Aluminium Plant</title>
<meta name="keywords" content="alumjaz, alumjaz, alumjaz, alumjaz, alumjaz , alumjaz, alumjazArcitrave, Bottum Hung window, Curtain wall, Hinged door, Hinged window, Rolling Shutter , Sky light, Sliding window, Structure Glaze, Swing Door, alumjaz, Al-Jazirah, Aljazirah, Aluminium plant, Saudi aluminium plant, Al-Jazirah aluminium plant,">
<link href="style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<script src="http://www.google-analytics.com/ga.js" type="text/javascript"></script>
<script src="http://www.google-analytics.com/ga.js" type="text/javascript"></script>

body {
	background-color: #000;
}
</style>
</head>

<body> 

   <div align="center">
<div id="wrapperfeedback">
      <div id="top">
       <div style="width:242px; height:151px; float:left;"> <a href="index.html"><img src="image/topname-nd-logo.png" border="0"/></a> </div>
       <div align="right" style="width:133px; direction:top; height:176px; float:right; margin-right:27px;"> <a href="index.html"><img src="image/right-emblem.png" border="0"/></a></div>
       
       <div  style="width:100%; float:left height:184px; "><a href="index.html"><img src="image/top name.gif" height="130" border="0" style="margin-top:30px"/></a> 
       
       <div style="float:right;  width:24px; height:24px; margin-right:-115px; margin-top:155px;"><a href="index arabic.html"><img src="image/ksa.png" border="0" title="Arabic Version"/></a> </div>
       
       
       <div style="float:right; width:24px; height:24px; margin-right:-80px; margin-top:155px; "><a href="index.html"><img src="image/uk.png" border="0" title="English Version"/></a> </div>
       
       </div>
       
       
      
      
      
       <!--<a href="index.html"><img src="image/topname nd logo.jpg" border="0"/></a>--></div>
  <div class="flsh_news"><div id="news_contant">
    <marquee behavior="scroll"  truespeed="truespeed" onmouseover="this.stop()" onmouseout="this.start()"  scrollamount="2"  direction="left" style="color:#fde3a6; font-family:Arial, Helvetica, sans-serif; text-align:justify; ">
&quot;ESTABLISHED IN 1976... AL JAZIRAH SWISS SYSTEM... ISO CERTIFIED... SASO &amp; ASTM COMPLYED... A NAME WITH DEEP ROOTS...&quot;
    </marquee>
  </div>
        
       
  </div>
  <div style="width:100%; height:301px; float:left; margin-top:20px;">    
 <div class="yellow-side1"> <a href="index arabic.html"><img src="image/side-yellow.gif" border="0" style="margin-top:-4px";/></a>
    </div>
    <div style="width:29px; height:2px; float:left; background-color:#790102; margin-top:288px;"></div>

<div align="center" class="Flash" >
       
          <div align="center" style="height:293px; width:700px; float:left;  margin-top:3px;">
    <EMBED SRC="swf/Banner_vini.swf" 

WIDTH="693"

style="margin-top:3px; float:left;  margin-left:5px; "

HEIGHT="283"

align="middle"


PLAY="true" 

LOOP="true"

QUALITY="high" 

scale="noborder"

PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"> 
       
          </EMBED>
        </div>
      </div>
</div>
  <div class="contant_main"> 
  <div style="width:100%; height:1480px; float:left;">
<div style="width:199px; height:1480px; float:left; margin-top:49px;"><img src="image/fdbk arabic.png"/></div>
 
   <div style=" width:726px; height:1484px; margin-top:10px; float:left; background-image:url(image/Fdbk%20page%20bg.jpg); background-repeat:no-repeat;">
   <div style="width:670px; height:1400px; float:left; margin-left:30px; margin-top:18px; text-align:justify;color:#790102; line-height:23px;"><strong>    <p align="center"><strong><u>FEED BACK</u></strong></p></strong>
   
   <?php
if($err==0)
{
$x=$_GET['MSGCODE'];
$y=$_GET['stat'];
if($x==0002)
{
echo'<font color="#FF0000">'."Mail Sending Failed".'</font>';
}
elseif($y==yes)
{
echo'<font color="#FF0000">'."Your Message has been sent".'</font>';
}
}
?>
<form name="form1" method="post">
<table width="640" border="1" align="center" cellspacing="0.005" bordercolor="#790102">
<tr><td align="center" colspan="7"><h2>تقــييم العمــيل	</h2><h2>CUSTOMER EVALUATION</h2></td></tr>
<tr>
  <td align="center" colspan="3"  bgcolor="#7B0000" width="370"><h3 style="color:#FCE3AB">Dear Customer</h3></td><td align="center" colspan="4" bgcolor="#7B0000" width="370"><h3 style="color:#FCE3AB">عزيزي العميل :</h3></td>
<tr><td align="justify" colspan="3" width="370">Please take a minute to review our products so we 
can offer a better quality job. Then, fax it to Al-Jazirah 
Aluminium Plant Fax 03.8473927 …
Thanks for helping us to serve you better…	</td><td align="right" colspan="4" width="370">الرجاء أخذ دقائق قصيرة لتقييم المنتج والخدمة وذلك لتحسين <br />
الكفاءة المقدمة لديكم.  ومن ثم ارسالها<br />
 بالفاكس الى مصنع المنيوم الجزيرة رقم  038473927<br />
  لذا شكر لكم تعاونكم…	<br /></td>
<tr bgcolor="#7B0000"><td width="220" height="32" align="center"><b style="color:#FCE3AB">PRODUCT:</b></td><td width="60" align="center"><b style="color:#FCE3AB">Excellent</b> </td><td width="60" align="center"><b style="color:#FCE3AB">Very Good</b></td><td width="60" align="center"><b style="color:#FCE3AB">Good</b></td><td width="60" align="center"><b style="color:#FCE3AB">Fair</b></td><td width="60" align="center"><b style="color:#FCE3AB">Poor</b></td><td width="220" align="center"><b style="color:#FCE3AB">المنتج :</b></td></tr>
<tr>
<td width="220">Aluminium Designing Quality?</td>
<td width="60" align="center"><input type="radio" name="quality" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality" value="poor" /></td>
<td width="220" align="right">قطاعات وتصميم الألمنيوم ؟</td></tr>
<tr><td width="220">Aluminium Workmanship ?</td>
<td width="60" align="center"><input type="radio" name="quality1" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality1" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality1"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality1" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality1" value="poor" /></td>
<td width="220" align="right">تجميع وعمل الألمنيوم ؟
</td>
</tr>  
<tr><td width="220">Aluminium Raw Materials ?</td>
<td width="60" align="center"><input type="radio" name="quality2" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality2" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality2"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality2" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality2" value="poor" /></td>
<td width="220"  align="right">مواد وخامات الألمنيوم ؟
</td>
</tr>
<tr><td width="220">Aluminium Accessories ?
</td>
<td width="60" align="center"><input type="radio" name="quality3" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality3" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality3"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality3" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality3" value="poor" /></td>
<td width="220"  align="right">اكسسوارات الألمنيوم ?
</td>
</tr>
<tr><td width="220">Durability, Reliability & Safety ?</td>
<td width="60" align="center"><input type="radio" name="quality4" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality4" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality4"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality4" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality4" value="poor" /></td>
<td width="220" align="right">المرونة والسهولة والأمان ?
</td>
</tr>
<tr><td width="220">Finishing & Packing ?</td>
<td width="60" align="center"><input type="radio" name="quality5" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality5" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality5"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality5" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality5" value="poor" /></td>
<td width="220" align="right">التشطيب والتغليف ?
</td>
</tr>
<tr><td width="220">Prices ?</td>
<td width="60" align="center"><input type="radio" name="quality6" value="competitive"/></td>
<td width="60" align="center"><input type="radio" name="quality6" value="Lower"/></td>
<td width="60" align="center"><input type="radio" name="quality6"  value="Ok"/></td>
<td width="60" align="center"><input type="radio" name="quality6" value="Higher"/></td>
<td width="60" align="center"><input type="radio" name="quality6" value="Highest" /></td>
<td width="220"  align="right">الأسعار ?
</td>
</tr>
<tr bgcolor="#7B0000"><td width="220" align="center"><b style="color:#FCE3AB">SERVICE:</b></td><td width="60" align="center"><b style="color:#FCE3AB">Excellent</b></td><td width="60" align="center"><b style="color:#FCE3AB">Very Good</b></td><td width="60" align="center"><b style="color:#FCE3AB">Good</b></td><td width="60" align="center"><b style="color:#FCE3AB">Fair</b></td><td width="60" align="center"><b style="color:#FCE3AB">Poor</b></td><td width="220" align="center"><b style="color:#FCE3AB" >المنتج :</b></td></tr>
<tr><td width="220">Understanding & Fulfilling 
Customer Needs ?
</td>
<td width="60" align="center"><input type="radio" name="quality7" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality7" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality7"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality7" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality7" value="poor" /></td>
<td width="220"  align="right">فهم وتلبية رغبة العميل ?
</td>
</tr>
<tr><td width="220">Meeting Delivery Schedules ?
</td>
<td width="60" align="center"><input type="radio" name="quality8" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality8" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality8"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality8" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality8" value="poor" /></td>
<td width="220" align="right">الوصول الى الجدول الزمني المطلوب ?
</td>
</tr>
<tr><td width="220">Quality of Compeltence of Personnel ?
</td>
<td width="60" align="center"><input type="radio" name="quality9" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality9" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality9"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality9" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality9" value="poor" /></td>
<td width="220" align="right">جودة وكفاءة ممثل الشركة ?
</td>
</tr>
<tr><td width="220">Service after Sales ?
</td>
<td width="60" align="center"><input type="radio" name="quality10" value="excellent"/></td>
<td width="60" align="center"><input type="radio" name="quality10" value="vgood"/></td>
<td width="60" align="center"><input type="radio" name="quality10"  value="good"/></td>
<td width="60" align="center"><input type="radio" name="quality10" value="fair"/></td>
<td width="60" align="center"><input type="radio" name="quality10" value="poor" /></td>
<td width="220" align="right">خدمة ما بعد البيع ?
</td>
</tr>
<tr><td width="220">How did you Choose us ?
</td>
<td width="60" align="center"><input type="radio" name="quality11" value="friends"/></td>
<td width="60" align="center"><input type="radio" name="quality11" value="family"/></td>
<td width="60" align="center"><input type="radio" name="quality11"  value="company"/></td>
<td width="60" align="center"><input type="radio" name="quality11" value="advertise"/></td>
<td width="60" align="center"><input type="radio" name="quality11" value="others" /></td>
<td width="220" align="right">كيف اخترتنا لخدمتك ?
</td>
</tr>
<tr><td width="120"><b>COMMENTS:</b></td><td colspan="5" width="430"><textarea name="comment" rows="2" cols="45"></textarea></td><td>ملاحظات :</td></tr>
<tr><td width="120">Name:</td><td colspan="5" width="430"><br />  <input type="text" name="fanme" style="width:380px;"/></td><td>ملاحظات :</td></tr>
<tr><td>Date</td><td colspan="2"><br />  <input type="text" name="date" style="width:180px;" /></td><td colspan="4"  align="right">التاريخ :</td></tr>
<tr><td colspan="9" align="center"><input type="submit" name="submit" value="Send Mail"/></td></tr>

</table>
</form>
   
   
   </div>
 
 </div>
 
  
 
</div>
</div>    

    
    
  </div>
</div>
</body>
</html>
