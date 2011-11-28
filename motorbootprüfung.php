<?php

include('inc/common.inc.php');
include('inc/sidebar_motorboot.inc.php');

$title =' | Motorbootprüfung';   

$content .= '
<div class="text">
<h2>Die Praktische Prüfung mit dem Motorboot</h2>
<hr />
<p></p>'; 

$tasks = array(
'Anlegen mit Backbord- und Steuerbordseite',
'Ablegen mit Backbord- und Steuerbordseite',
'Steuern verschiedener vom Prüfer angegebener Kurse',
'"Mann über Bord" Manöver',
'Wenden auf engem Raum',
'Ausweichmanöver (mit Schallsignalen)',
'Anlegen in eine Box',
'Bestimmte Kurse fahren',
'Rückwärtsfahren mit Richtungsänderungen',
'Ankermanöver',
);

$content .= '
<ul>';

foreach($tasks as $task){
	$content .= '<li>'.$task.'</li>';
}

$content .= '</ul>
<hr />
';
		
$content .= '</div>';

$template = new template($template_file);
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>
