<?php
//get the q parameter from URL
$q=$_GET["q"];

//find out which feed was selected
$xml=("https://www.darkreading.com/rss_simple.asp");

$xmlDoc = new DOMDocument();
$xmlDoc -> load($xml);

$items = $xmlDoc -> getElementsByTagName('item');

// Navigate through items
for ($i = 0; $i < $items -> length; $i++) {

    $item_title = $items -> item($i)
        -> getElementsByTagName('title') -> item(0) -> nodeValue;

    $item_link = $items -> item($i)
        -> getElementsByTagName('link') ->item(0) -> nodeValue;

    $item_desc = $items -> item($i)
        -> getElementsByTagName('description') -> item(0) -> nodeValue;

    echo <<<EOD
<div class='rss-item'>
    <a href="{$item_link}" class="rss-title">{$item_title}</a><br/>
    <span class="rss-desc">{$item_desc}</span>
</div>
EOD;
}
?>