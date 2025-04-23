<?php

// Chemin vers le dossier functions
$functions_dir = get_template_directory() . '/functions/';

// Liste des fichiers à inclure
$function_files = array(
    'generateur.php',
    'customizer.php',
    'options.php'
);

// Boucle pour inclure tous les fichiers
foreach ($function_files as $file) {
    include_once $functions_dir . $file;
}



