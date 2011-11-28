<?php

include('inc/common.inc.php');
include('inc/sidebar_segelboot.inc.php');

$title =' | Das Segel';   

$content .= '
<div class="text">
<h2>Das Segel</h2>
<hr />'; 

$content .= '
<p><img src="img/segel.svg" alt="Das Segel" height="600px" /></p>
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