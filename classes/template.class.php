<?php

class template {

     var $tmp_file; 
     var $error; 
     var $content;

     function template($file, $error = "Template Datei nicht gefunden!") {
          $this->tmp_file = $file;
          $this->error = $error;
          $this->content = "";
     }

     function readtemplate() {
          $file = @fopen($this->tmp_file, "r");
          if(!$file) {
               echo $this->error;
          }else{
               while(!feof($file)) {
                    $temp = fgets($file, 4096);
                    $this->content .= $temp;
               }
          }
     }
	 
     function replace($title, $value) {
          $this->content = str_replace("{" . $title . "}", $value, $this->content);
     }

     function parse() {
          echo $this->content;
     }

}
?>
