<?php
ob_start();
$frmpost=0;
$err=0;
if(isset($_POST['submit']))
{
$frmpost=1;
$quality1=$_POST['check1'];
$quality2=$_POST['check2'];
$quality3=$_POST['check3'];
$quality4=$_POST['check4'];
$quality5=$_POST['check5'];
$aluminiumquality=$quality1.$quality2.$quality3.$quality4.$quality5;
$workmanship1=$_POST['check01'];
$workmanship2=$_POST['check02'];
$workmanship3=$_POST['check03'];
$workmanship4=$_POST['check04'];
$workmanship5=$_POST['check05'];
$workmanship=$workmanship1.$workmanship2.$workmanship3.$workmanship4.$workmanship5;
$raw1=$_POST['check010'];
$raw2=$_POST['check020'];
$raw3=$_POST['check030'];
$raw4=$_POST['check040'];
$raw5=$_POST['check050'];
$raw=$raw1.$raw2.$raw3.$raw4.$raw5;
$accessori1=$_POST['check011'];
$accessori2=$_POST['check012'];
$accessori3=$_POST['check013'];
$accessori4=$_POST['check014'];
$accessori5=$_POST['check015'];
$accessories=$accessori1.$accessori2.$accessori3.$accessori4.$accessori5;
$safety1=$_POST['check111'];
$safety2=$_POST['check112'];
$safety3=$_POST['check113'];
$safety4=$_POST['check114'];
$safety5=$_POST['check115'];
$safety=$safety1.$safety2.$safety3.$safety4.$safety5;
$packing1=$_POST['check101'];
$packing2=$_POST['check102'];
$packing3=$_POST['check103'];
$packing4=$_POST['check104'];
$packing5=$_POST['check105'];
$packing=$packing1.$packing2.$packing3.$packing4.$packing5;
$price2=$_POST['lower'];
$price3=$_POST['ok'];
$price4=$_POST['higher'];
$price5=$_POST['highest'];
$price=$price1.$price2.$price3.$price4.$price5;
$need1=$_POST['need1'];
$need2=$_POST['need2'];
$need3=$_POST['need3'];
$need4=$_POST['need4'];
$need5=$_POST['need5'];
$needs=$need1.$need2.$need3.$need4.$need5;
$schedule1=$_POST['schedule1'];
$schedule2=$_POST['schedule2'];
$schedule3=$_POST['schedule3'];
$schedule4=$_POST['schedule4'];
$schedule5=$_POST['schedule5'];
$schedule=$schedule1.$schedule2.$schedule3.$schedule4.$schedule5;
$personel1=$_POST['personel1'];
$personel2=$_POST['personel2'];
$personel3=$_POST['personel3'];
$personel4=$_POST['personel4'];
$personel5=$_POST['personel5'];
$personel=$personel1.$personel2.$personel3.$personel4.$personel5;
$sales1=$_POST['sales1'];
$sales2=$_POST['sales2'];
$sales3=$_POST['sales3'];
$sales4=$_POST['sales4'];
$sales5=$_POST['sales5'];
$sales=$sales1.$sales2.$sales3.$sales4.$sales5;
$choose1=$_POST['choose1'];
$choose2=$_POST['choose2'];
$choose3=$_POST['choose3'];
$choose4=$_POST['choose4'];
$choose5=$_POST['choose5'];
$choose=$choose1.$choose2.$choose3.$choose4.$choose5;
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
       		header("Location:feedback2.php?stat=yes");
			
	}
	else
	{
			header("Location:feedback2.php?MSGCODE=0002");
		
	}
	
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  dir="rti" lang="ar" xml:lang="ar">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<body>
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
<table align="center" border="1" width="800">
<tr><td colspan="7"align="center"><h2>تقــييم العمــيل	</h2>
<h2>CUSTOMER EVALUATION</h2>
</td></tr>
<!--<tr><td colspan="2" align="center"><h3>Customer Evaluation</h3></td></tr>-->
<tr bgcolor="#99FFFF"><td colspan="4"><h3>Dear Customer:</h3></td><td colspan="3"><h3>عزيزي العميل :</h3>		
</td></tr>
<tr><td colspan="4">Please take a minute to review our products so we <br />
can offer a better quality job. Then, fax it to Al-Jazirah <br />
Aluminium Plant Fax 03.8473927    …<br />
 Thanks for helping us to serve you better…		
</td><td colspan="4">الرجاء أخذ دقائق قصيرة لتقييم المنتج والخدمة وذلك لتحسين <br />
الكفاءة المقدمة لديكم.  ومن ثم ارسالها<br />
 بالفاكس الى مصنع المنيوم الجزيرة رقم  038473927<br />
  لذا شكر لكم تعاونكم…	<br />
 </td></tr>
 <tr bgcolor="#99FFFF"><td width="171" align="center"><b>PRODUCT:</b></td><td width="73" align="center"><b>ممتاز</b><br />
Excellent<br />1</td><td width="169" align="center"><b>جيد جدا</b><br />
Very Good<br />2</td><td width="67" align="center"><b>جيد</b>
<br />Good<br />3</td><td width="67" align="center"><b>مقبول</b>
<br />Fair<br />4</td><td width="56" align="center"><b>ضعيف</b>
<br />Poor<br />5</td><td width="151" align="center"><b>المنتج :</b>
</td></tr>
<tr><td>Aluminium Desing Quality ?</td>
<td><input type="checkbox" name="check1"  value="excellent"/></td>
<td><input type="checkbox" name="check2" value="vgood" /></td>
<td><input type="checkbox" name="check3"  value="good"/></td>
<td><input type="checkbox" name="check4" value="fair"/></td>
<td><input type="checkbox" name="check5" value="poor" /></td>
<td>قطاعات وتصميم الألمنيوم ؟
</td>
</tr>
<tr><td>Aluminium Workmanship ?
 ?</td>
<td><input type="checkbox" name="check01" value="excellent"/></td>
<td><input type="checkbox" name="check02" value="vgood"/></td>
<td><input type="checkbox" name="check03" value="good" /></td>
<td><input type="checkbox" name="check04" value="fair" /></td>
<td><input type="checkbox" name="check05" value="poor" /></td>
<td>تجميع وعمل الألمنيوم ؟
</td>
</tr>
<tr><td>Aluminium Raw Materials ?
</td>
<td><input type="checkbox" name="check010" value="excellent" /></td>
<td><input type="checkbox" name="check020" value="vgood"/></td>
<td><input type="checkbox" name="check030" value="good" /></td>
<td><input type="checkbox" name="check040" value="fair" /></td>
<td><input type="checkbox" name="check050" value="poor" /></td>
<td>مواد وخامات الألمنيوم ؟
</td>
</tr>
<tr><td>Aluminium Accessories ?
</td>
<td><input type="checkbox" name="check011" value="excellent"/></td>
<td><input type="checkbox" name="check012"  value="vgood"/></td>
<td><input type="checkbox" name="check013"  value="good"/></td>
<td><input type="checkbox" name="check014" value="fair" /></td>
<td><input type="checkbox" name="check015" value="poor" /></td>
<td>اكسسوارات الألمنيوم ؟
</td>
</tr>
<tr><td>Durability, Reliability & Safety ?</td>
<td><input type="checkbox" name="check111"  value="excellent"/></td>
<td><input type="checkbox" name="check112" value="vgood" /></td>
<td><input type="checkbox" name="check113" value="good" /></td>
<td><input type="checkbox" name="check114" value="fair" /></td>
<td><input type="checkbox" name="check115" value="poor" /></td>
<td>المرونة والسهولة والأمان ؟
</td>
</tr>
<tr><td>Finishing & Packing ?</td>
<td><input type="checkbox" name="check101" value="excellent" /></td>
<td><input type="checkbox" name="check102" value="vgood" /></td>
<td><input type="checkbox" name="check103" value="good" /></td>
<td><input type="checkbox" name="check104" value="fair" /></td>
<td><input type="checkbox" name="check105" value="poor" /></td>
<td>التشطيب والتغليف ؟
</td>
</tr>
<tr><td>Prices ?</td>
<td><input type="checkbox" name="competitive" value="competitive" />Competitive</td>
<td><input type="checkbox" name="lower" value="lower" />Lower</td>
<td><input type="checkbox" name="ok" value="ok" />Ok</td>
<td><input type="checkbox" name="higher" value="higher" />Higher</td>
<td><input type="checkbox" name="highest" value="highest" />Highest</td>
<td>الأسعار ؟
</td>
</tr>
 <tr bgcolor="#99FFFF"><td align="center"><b>SERVICE:</b></td><td align="center"><b>ممتاز</b><br />
Excellent<br />1</td><td align="center"><b>جيد جدا</b><br />
Very Good<br />2</td><td align="center"><b>جيد</b>
<br />Good<br />3</td><td align="center"><b>مقبول</b>
<br />Fair<br />4</td><td align="center"><b>ضعيف</b>
<br />Poor<br />5</td><td align="center"><b>المنتج :</b>
</td></tr>
<tr><td>Understanding & Fulfilling 
Customer Needs ?
</td>
<td><input type="checkbox" name="need1" value="excellent" /></td>
<td><input type="checkbox" name="need2" value="vgood" /></td>
<td><input type="checkbox" name="need3" value="good" /></td>
<td><input type="checkbox" name="need4" value="fair" /></td>
<td><input type="checkbox" name="need5" value="poor" /></td>
<td>فهم وتلبية رغبة العميل ؟
</td>
</tr>
<tr><td>Meeting Delivery Schedules ?
</td>
<td><input type="checkbox" name="schedule1"  value="excellent"/></td>
<td><input type="checkbox" name="schedule2" value="vgood" /></td>
<td><input type="checkbox" name="schedule3" value="good" /></td>
<td><input type="checkbox" name="schedule4" value="fair" /></td>
<td><input type="checkbox" name="schedule5" value="poor" /></td>
<td>الوصول الى الجدول الزمني المطلوب ؟
</td>
</tr>
<tr><td>Quality of Compeltence of Personnel ?
</td>
<td><input type="checkbox" name="personel1" value="excellent" /></td>
<td><input type="checkbox" name="personel2" value="vgood" /></td>
<td><input type="checkbox" name="personel3" value="good" /></td>
<td><input type="checkbox" name="personel4" value="fair" /></td>
<td><input type="checkbox" name="personel5" value="poor" /></td>
<td>جودة وكفاءة ممثل الشركة ؟
</td>
</tr>
<tr><td>Service after Sales ?
</td>
<td><input type="checkbox" name="sales1" value="excellent"/></td>
<td><input type="checkbox" name="sales2" value="vgood" /></td>
<td><input type="checkbox" name="sales3" value="good" /></td>
<td><input type="checkbox" name="sales4" value="fair" /></td>
<td><input type="checkbox" name="sales5" value="poor" /></td>
<td>خدمة ما بعد البيع ؟
</td>
</tr>
<tr><td>How did you Choose us ?
</td>
<td><input type="checkbox" name="choose1" value="friends" />Friends</td>
<td><input type="checkbox" name="choose2" value="family" />Family</td>
<td><input type="checkbox" name="choose3" value="company" />Company</td>
<td><input type="checkbox" name="choose4" value="advertise" />Advertise</td>
<td><input type="checkbox" name="choose5" value="others" />Ohers</td>
<td>كيف اخترتنا لخدمتك ؟
</td>
</tr>
<tr bgcolor="#99FFFF"><td><h3>COMMENTS:</h3></td><td colspan="3"><textarea name="comment" style="width:310px; height:80px;"></textarea></td><td colspan="3"><h3>ملاحظات :
</h3>		
</td></tr>
<tr bgcolor="#99FFFF"><td colspan="4"><h3>APPROVAL:</h3></td><td colspan="3"><h3>اعتماد :
</h3>		
</td></tr>
<tr>
  <td>Name</td><td colspan="3"><input type="text" name="fname" /></td><td colspan="3">التوقيع :
</td></tr>
<tr><td>Date</td><td colspan="3"><input type="text" name="date" /></td><td colspan="3">التاريخ :
</td></tr>
<tr><td colspan="7" align="center"><input type="submit" name="submit" value="Send Mail"/></td></tr>
</table>
</form>
 </body>
</html>