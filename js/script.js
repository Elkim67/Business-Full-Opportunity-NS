document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIQUE DU MENU BURGER ---
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.navbar .nav-links'); // Utiliser querySelector pour la classe

    // Vérifie si les éléments du menu burger existent avant d'ajouter des écouteurs
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optionnel: Empêcher le scroll du body quand le menu est ouvert
            // document.body.classList.toggle('no-scroll');
        });

        // Fermer le menu si un lien est cliqué (utile pour les SPA ou les ancres)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                // document.body.classList.remove('no-scroll');
            });
        });
    }

    // --- LOGIQUE DES ANIMATIONS AU SCROLL (.reveal) ---
    const reveals = document.querySelectorAll('.reveal');

    function checkReveals() {
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // L'élément est activé si sa partie supérieure est à moins de 100px du bas de la fenêtre
            // Vous pouvez ajuster la valeur '100' pour modifier le déclenchement
            if (revealTop < windowHeight - 100) {
                reveal.classList.add('active');
            } else {
                // Optionnel: retire la classe 'active' si l'élément quitte le viewport par le haut
                // cela permet de re-déclencher l'animation si l'utilisateur scroll de haut en bas plusieurs fois
                // reveal.classList.remove('active');
            }
        });
    }

    // Ajout des écouteurs d'événements pour le scroll
    window.addEventListener('scroll', checkReveals);
    checkReveals(); // Appel initial pour activer les éléments déjà visibles au chargement de la page


    // --- LOGIQUE DU SLIDER HÉRO (SPÉCIFIQUE À LA PAGE D'ACCUEIL) ---
    const heroSlider = document.querySelector('.hero-slider');

    // EXÉCUTE CE CODE SEULEMENT SI LE SLIDER EXISTE SUR LA PAGE ACTUELLE
    if (heroSlider) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        const dotsContainer = document.querySelector('.slider-dots');

        let currentSlide = 0;
        let autoSlideInterval;
        const autoSlideDelay = 5000; // Délai en millisecondes pour le défilement automatique (5 secondes)

        // Fonction pour afficher une slide spécifique
        function showSlide(index) {
            if (slides.length === 0) return; // S'assurer qu'il y a des slides

            const totalSlides = slides.length;
            currentSlide = (index + totalSlides) % totalSlides; // S'assurer que l'index reste dans les limites

            const sliderContainer = document.querySelector('.slider-container');
            if (sliderContainer) {
                sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
            updateDots(); // Met à jour l'état des points de navigation
        }

        // Fonctions de navigation
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Démarrer le défilement automatique
        function startAutoSlide() {
            stopAutoSlide(); // S'assurer qu'il n'y a qu'un seul intervalle actif
            autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
        }

        // Arrêter le défilement automatique
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Mettre à jour les points de navigation
        function updateDots() {
            if (!dotsContainer) return; // S'assurer que le conteneur des points existe
            dotsContainer.innerHTML = ''; // Nettoyer les points existants

            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                if (index === currentSlide) {
                    dot.classList.add('active'); // Active le point de la slide actuelle
                }
                dot.addEventListener('click', () => {
                    stopAutoSlide(); // Arrête le défilement auto lors d'une navigation manuelle
                    showSlide(index);
                    startAutoSlide(); // Redémarre le défilement auto
                });
                dotsContainer.appendChild(dot);
            });
        }

        // Ajout des écouteurs d'événements pour les boutons de navigation (si ils existent)
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }

        // Initialisation du slider au chargement de la page
        showSlide(currentSlide);
        startAutoSlide(); // Démarre le défilement automatique au chargement

    } // FIN DU BLOC if (heroSlider)

}); // FIN DU LISTENER DOMContentLoaded