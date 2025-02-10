<?php
/**
 * Template-part carte
 */
?>
<article class="carte carte--grande">
  <figure class="carte__image">
    <img src="voyage.jpg" alt="Image de voyage">
    </figure>
  <div class="carte__contenu">
    <h2 class="carte__titre"><?php the_title(); ?></h2>
    <p class="carte__description"><?php echo wp_trim_words(get_the_content(),10, " ... " ); ?></p>
    <button class="carte__bouton carte__bouton--actif">Suite</button>
  </div>
</article>