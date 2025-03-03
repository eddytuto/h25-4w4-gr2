<?php
/**
 * Modèle pour les résultats de recherche
 */
get_header();
?>
<main class="site__main">
    <section class="recherche__section">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article>
                    <h5><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                    <p><?php echo wp_trim_words(get_the_excerpt(), 60); ?></p>
                    <hr>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <p>Aucun résultat trouvé.</p>
        <?php endif; ?>
    </section>
</main>
<?php get_footer(); ?>