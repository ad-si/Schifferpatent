<?php

include('inc/common.inc.php');
include('inc/sidebar_motorboot.inc.php');

$title =' | Sicherheit';   

$content .= '
<div class="text">
<h2>Sicherheit</h2>
<hr />'; 

$content .= '
<h3>Diese Seite ist bald verfügbar!</h3>
<p></p>
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