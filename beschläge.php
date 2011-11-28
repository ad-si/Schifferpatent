<?php

include('inc/common.inc.php');
include('inc/sidebar_segelboot.inc.php');

$title =' | Beschläge';  

$fittings = array(
'rundkausch',
'spitzkausch',
'rutscher',
'stagreiter',
'schotschäkel',
'schnappschäkel',
'schlüsselschäkel',
'schraubschäkel',
'pütting',
'augbolzen',
'doppelkreuzpoller',
'klampe',
'curryklemme',
'kammklemme',
'fockschotleitschiene',
'schotleitauge',
'block',
'schotwinsch',
'knarrpoller',
'schotring',
'wantenspanner',
'wantenhänger',
'birnenfender',
'bootshaken',
'traveller',
'lenzventil',
'ösfass',
'lenzpumpe',
);

$content .= '
<div class="text">
<h2>Beschläge</h2>
<hr />';

foreach($fittings as $fitting){
	$content .= '
	<div class="fitting">
		<img src="img/beschläge/'.$fitting.'.png" alt="'.ucfirst($fitting).'" />
		<br />
		<span>'.ucfirst($fitting).'</span>
	</div>';
}

$content .= '
<h3></h3>
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
