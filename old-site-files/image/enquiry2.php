<?php
ob_start();
$frmpost=0;
$err=0;
if(isset($_POST['submit']))
{
	$frmpost=1;
	$name="info@graceayurvedic.in";
	$contact_name=$_POST['contact_name'];
	if($contact_name=='')
	{
		$err=1;
		$err5="Enter Name";
	}
	$contact_email=$_POST['contact_email'];
    if($contact_email=='')
	{
		$err=1;
	$err1="Enter Emailid";	
	}
	$contact_address=$_POST['contact_address'];
	if($contact_address=='')
	{
		$err=1;
		$err2="Enter Address";
	}
	$contact_mobile=$_POST['contact_mobile'];
	if($contact_mobile=='')
	{
		$err=1;
		$err3="Enter Number ";
	}
	else if(!preg_match('/^[0-9]+$/i',$contact_mobile))
    {
		$err=1;
	
		$err3="Invalid Number";
    }
	$contact_note=$_POST['contact_note'];
	if($contact_note=='')
	{
		$err=1;
		$err4="Missing Data";
	}
	if($err==0)
	{
	$subject="Enquiry";   //place your subject line
	$mail_to= "reshma@cerps.info";  //mail to whom we have to send  
	$headers .= "MIME-Version: 1.0 \n"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1 \n"; 
    $headers .= "From:$name\r\n"; //the from mail of the customer    
	$mailbody= '<table width="50%" border="0" align="center" cellpadding="5" cellspacing="4" style="border=1px solid color:#666666">';
	$mailbody.='<tr><td colspan="2" align="left"><strong><font size="+1">Contact Details</font></strong></td></tr>';	
	$mailbody.='<tr><td >Name :</td><td>'.$contact_name.'</td></tr>';
	$mailbody.='<tr><td >Address.:</td><td>'.$contact_address.'</td></tr>';
	$mailbody.='<tr><td >Email ID :</td><td>'.$contact_email.'</td></tr>';
	$mailbody.='<tr><td >Subject :</td><td>'.$subject.'</td></tr>';
	$mailbody.='<tr><td >Message :</td><td>'.$contact_note.'</td></tr>';
	$mailbody.='<tr><td >Mobile No.:</td><td>'.$contact_mobile.'</td></tr>';		 
	if (@mail ($mail_to, $subject, $mailbody, $headers)) 
	{ 
       		header("Location:enquiry2.php?stat=yes");
	}
	else
	{
			header("Location:enquiry2.php?MSGCODE=0002");
	}
}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
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
<form name="contactfrm" method="post" id="sendemail" onclick="return valcontactus();"> 
                   <table align="center" style="margin-top: -22px; background-color:#FFF;" width="982" border="0" cellpadding="5" cellspacing="0">
                	<tbody>
                    <tr height="40">
                    	<td width="80" class="enq_frm">Name<font color="#FF0000" face="Lucida Grande", "Lucida Sans Unicode", "Trebuchet MS", Helvetica, Arial, sans-serif;> *</font></td>
                      <td width="450"><input name="contact_name" class="txtbox" type="text" value="<?php echo $contact_name;?>">&nbsp;<font color="#FF0000"><?php echo $err5; ?></font></td>
                     <td width="250" rowspan="7" align="left" valign="top"><font face="Times New Roman, Times, serif"/><font size="4"><h4></h4>
                        
                     </td>
                    </tr>
                    <tr height="40">
                    	<td class="enq_frm">Address<font color="#FF0000"> *</font></td>
                      <td><input name="contact_address"  class="txtbox" type="text" value="<?php echo $contact_address; ?>">&nbsp;<font color="#FF0000"><?php echo $err2; ?></font>
					</td>
                        <td width="278">&nbsp;</td>
                      </tr>
                    <tr height="40">
                    	<td class="enq_frm">Mobile<font color="#FF0000"> *</font></td>
                      <td><input name="contact_mobile"  class="txtbox" type="text" id="mobile" value="<?php echo $contact_mobile; ?>"/>&nbsp;<font color="#FF0000"><?php echo $err3; ?></font></td>
                        <td>&nbsp;</td>
                      </tr>
                    <tr height="40">
                    	<td>E-mail ID<font color="#FF0000">*</font></td>
                      <td><input name="contact_email" type="text"  class="txtbox" id="email" value="<?php echo $contact_email; ?>" onblur="CheckEmail(this.value);" onkeyup="CheckEmail(this.value);">&nbsp;<font color="#FF0000"><?php echo $err1; ?></font>
                       <font color="#FF0000"><div id="divEmail" ></div><div id="errmsg2"></div></font>
						</td>
                        <td>&nbsp;</td>
                      </tr>
                    <tr height="13">
                    	<td></td>
                      <td></td>
                        <td></td>
                      </tr>
                    <tr valign="top" height="40">
                    	<td class="enq_frm">Enquery<font color="#FF0000"> *</font></td>
                      <td><textarea name="contact_note"  style="width:310px; color:006699;border: solid 1px #333333;" ><?php echo $contact_note; ?></textarea>&nbsp;<font color="#FF0000"><?php echo $err4; ?></font></td>
                        
                      </tr>
                    <tr height="60">
                    	<td></td>
                      <td>
                            &nbsp;<input type="submit" name="submit" value="Send Message" width="60" border="0" height="18"></td>
                        &nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                </tbody></table>
					</form>
</body>
</html>