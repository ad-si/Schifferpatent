<?php

include('inc/common.inc.php');
 
$title .= '';  

$content .= '<div id="home">';

$content .= '
<h2>Herzlich Willkommen</h2>
<p>Auf dieser Website finden sie alles Wissenswerte
für die theoretische und praktische Prüfung des Bodenseeschifferpatents
sowie die amtlichen Prüfungsfragen mit Antworten.</p>
<img src="img/bodensee.svg" alt="Der Bodensee" title="Der Bodensee"/>
';
     

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