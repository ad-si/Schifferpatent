<?php

include('inc/common.inc.php');
include('inc/sidebar_allgemeines.inc.php');

$title =' | Vorfahrtsregeln';

$content .= 
'<div class="text">
	<h2>Vorfahrtsregeln</h2>
	<p>Grundsätzlich gilt, dass das besser manövrierfähige Fahrzeug ausweichen muss.
	Dabei sollte das andere Boot hinter dem Heck passiert werden.
	Ist dies nicht möglich muss der Schiffsführer mit einem Schallsignal angeben, wie er ausweichen wird.
	Außerdem sollte dabei stets ein Mindestabstand von 50 m gehalten werden.<br />
	Es ergeben sich folgende Vorfahrtsregeln:</p>
	<ul>
		<li>Rechts vor Links</li>
		<li>Auf Gegenkurs müssen beide nach Steuerbord ausweichen</li>
		<li>Vorrangschiffe, Schleppverbände & Berufsfischer haben Vorfahrt vor Vergnügungsfahrzeugen</li>
		<li>Polizei, Rettungsboote, Öl- und Feuerwehr haben nur mit blauem Funkellicht Vorrechte</li>
		<li>Segelboote haben Vorfahrt vor Ruder- & Tretbooten</li>
		<li>Backbordbug vor Steuerbordbug</li>
		<li>Lee vor Luv</li>
		<li>Ruder & Tretboote haben Vorfahrt vor Motorbooten</li>
	</ul>'; 
			
$content .= 
'</div>';

$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>