<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Notsignale';   

$content .= '
<div class="text">
<h2>Notsignale</h2>
<hr />'; 

	$content .= '
	<p>
		<ul>
			<li>Folge langer Töne</li>
			<li>Kanonenschüsse oder Knallsignale mit Abstand von 1 Minute</li>
			<li>Kreisförmiges Schwenken einer roten Flagge, eines Lichtes oder eines
			auffälligen Gegenstandes.</li>
			<li>Rauchsignal mit orangefarbenem Rauch</li>
			<li>Rote Fallschirmleuchtrakete oder rote Fackel</li>
		</ul>
	</p>
	<hr />
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