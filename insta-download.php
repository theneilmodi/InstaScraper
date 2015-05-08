<?php

$name = "some-name"; // change accordingly
mkdir("pics/" . $name);

$json = file_get_contents("links.json"); // change if you need to 
$pics = json_decode($json);

for($i = 0; $i<sizeof($pics); $i++){
	$image = $pics[$i];	
	$ch = curl_init($image);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
	$rawdata = curl_exec ($ch);
	curl_close ($ch);

	$path = "pics/" . $name . "/" . $i . ".jpg";
	file_put_contents($path, $rawdata);

}

?>

