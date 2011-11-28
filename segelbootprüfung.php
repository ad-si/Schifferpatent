<?php

include('inc/common.inc.php');
include('inc/sidebar_segelboot.inc.php');

$title =' | Segelbootprüfung';   

$content .= '
<div class="text">
<h2>Die Praktische Prüfung auf dem Segelboot</h2>
<hr />
<p>Während der gesamten Prüfung ist stets auf eine gute Segelführung und das Einhalten einer
klaren Kommandosprache zu achten. Folgende Aufgaben sind zu bewältigen:</p>'; 

$tasks = array(
'"Boje über Bord" Manöver mit Halse und mit Q-Wende',
'Anlegen',
'Ablegen',
'Wenden',
'Halsen',
'Schiften',
'Beidrehen',
'Setzen und Bergen der Segel',
'Segel unter Fahrt reffen',
'Fahren bestimmter Kurse',
'Ankermanöver',
'Knoten (Achtknoten, Palstek, Webleinstek, Roringstek, einfach & doppelter Schotstek, Kreuzknoten, Belegen einer Klampe)',
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
