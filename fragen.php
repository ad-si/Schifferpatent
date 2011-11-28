<?php

include('inc/common.inc.php');//fuer alle Dateien gleiche Informationen einbinden
 
$title .= ' | Fragen'; 

$content .= 
'<div id="questions">
<h2>Die Fragen der theoretischen Prüfung</h2>
<p>Im folgenden sind alle Prüfungsfragen der theoretischen Prüfung des Bodenseeschifferpatents aufgelistet.</p>
<br />';



	
	$fragen = db::getALL('fragen', 'deleted = 0');
	
	$content .= '<table id="questionstable">'; 
	
		foreach ($fragen as $frage){
			$content .=
			'<tr>'.	
				'<td><em>'.$frage["id"].'</em></td>'.
				'<td><em>'.$frage["frage"].'</em></td>'.
				'<td>'.$frage["antwort"].'</td>'.
			'</tr>';
		}
	
	$content .= '</table>';
	


$content .= '</div>';
     


$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>