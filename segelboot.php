<?php

include('inc/common.inc.php');
include('inc/sidebar_segelboot.inc.php');

$title =' | Segelboot';   
   
$content .=
'<div id="sailingboat">'.
'<div class="text">
<h2>Das Segelboot</h2>
<hr />
';

$content .='
<div>
	<img src="img/sailingboat.jpg" alt="Segelboot" /> 
</div>
<hr />
';

$content .='
</div>
</div>
';


$template = new template($template_file);//Template parsen
$template->readtemplate();
$template->replace('TITLE', $title);
$template->replace('HEADER', $template_header);
$template->replace('MENU', $menu);
$template->replace('CONTENT', $content);
$template->replace('FOOTER', $footer);
$template->parse();

?>