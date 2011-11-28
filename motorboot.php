<?php

include('inc/common.inc.php');
include('inc/sidebar_motorboot.inc.php');
   
$title =' | Motorboot'; 
   
$content .=
'<div id="motorboat">'.
'<div class="text">
<h2>Das Motorboot</h2>
<hr />
';
$content .='
<h3>Diese Seiten stehen bald zur Verfügung!</h3>
<p></p>
<hr />';

$content .='
</div>
</div>';
	 
     


$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>