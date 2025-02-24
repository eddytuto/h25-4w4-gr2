    <?php get_header(); ?>
    <section class="hero">
        <div class="hero__contenu global">
            <h1 class="hero__titre">Club de voyage</h1>
            <p class="hero__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo, veritatis eum incidunt earum ex libero officia nemo repudiandae molestias, vitae omnis magnam exercitationem provident ratione impedit vel culpa consequatur.
            </p>
            <p class="hero__courriel">
                <a href="#">info@cmaisonneuve.qc.ca</a>
            </p>
            <p class="hero__adresse">
                5800 Sherbrooke-est - Montréal (Québec) H1X 2A2
            </p>
            <div class="hero__icone">
                <img src="https://s2.svgbox.net/social.svg?ic=facebook&color=000000" width="20" height="20">
                <img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=000000" width="20" height="20">
                <img src="https://s2.svgbox.net/social.svg?ic=stackoverflow&color=000000" width="20" height="20">
                <img src="https://s2.svgbox.net/social.svg?ic=snapchat&color=000000" width="20" height="20">
            </div>
        </div>

    </section>
    <section class="galerie">
        <div class="galerie global">
            <figure class="galerie__figure">
                <img src="" alt="" class="galerie__img">
            </figure>
            <figure class="galerie__figure">
                <img src="" alt="" class="galerie__img">
            </figure>
            <figure class="galerie__figure">
                <img src="" alt="" class="galerie__img">
            </figure>
            <figure class="galerie__figure">
                <img src="" alt="" class="galerie__img">
            </figure>
            <figure class="galerie__figure">
                <img src="" alt="" class="galerie__img">
            </figure>
        </div>
    </section>
    <section class="populaire">
        <div class="global">
            <?php if (have_posts()) : while (have_posts()) : the_post(); 
            if (in_category("galerie"))  {
                the_content() ;
            } else {    ?>
                <?php get_template_part( 'gabarits/carte' ); ?>
            <?php } ?>
            <?php endwhile; endif; ?>
        </div>
    </section>
    <footer></footer>
    <?php get_footer(); ?>
</body>
</html>