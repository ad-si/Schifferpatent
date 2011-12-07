<?php

require_once('classes/template.class.php');
require_once('functions.inc.php');

function error_handler($errno, $errstr, $errfile, $errline) {
    if (substr($_SERVER['REQUEST_URI'], 0, 24) == '/dev/')
        echo '<pre>'.(new ErrorException($errstr, 0, $errno, $errfile, $errline)).'</pre>';
    else
    // mail('adriansieber@web.de', 'Bodenseeschifferpatent error', new ErrorException($errstr, 0, $errno, $errfile, $errline));
    if ($errno != E_WARNING && $errno != E_NOTICE)
        exit;
}
set_error_handler('error_handler');


$template_file = 'template/home.htm';

$template_header = 
'<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link rel="stylesheet" media="all" href="styles/desktop.css" type="text/css" />	
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<link rel="icon" href="img/favicon.png" type="image/svg+xml" />
<link rel="apple-touch-icon" href="img/favicon_hq.png" />
<link rel="apple-touch-startup-image" href="/startup.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<script src="js/functions.js" type="text/javascript"></script>';

$menu = 
'<h1><a href="/"></a></h1>'.
'<div id="links">'.
	'<a href="allgemeines" title="Allgemeine Informationen" >Allgemeines</a>'.
	'<a href="segelboot" title="Alles rund um das Segelboot" >Segelboot</a>'.
	'<a href="motorboot" title="Alles rund um das Motorboot" >Motorboot</a>'.
	'<a href="fragen" title="Alle offiziellen Prüfungsfragen">Fragenkatalog</a>'.
'</div>'.
'<a id="adrian" href="http://www.adriansieber.com/">© Adrian Sieber</a>';


$title = '';
$content = '';
$footer = '';

?>
