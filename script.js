document.addEventListener('DOMContentLoaded', () => {
    // 1. Appliquer l'émotion sauvegardée lors du chargement de la page
    const savedEmotion = localStorage.getItem('selectedEmotion');
    if (savedEmotion) {
        document.body.classList.remove('bg-heureux', 'bg-neutre', 'bg-triste', 'bg-peur', 'bg-colere');
        document.body.classList.add('bg-' + savedEmotion);
    }

    let Joyeux = "Images/Joyeux.jpg"
    let Neutre = "Images/Neutre.jpg"
    let Colere = "Images/Colere.jpg"
    let Peur = "Images/Peur.jpg"
    let Vent = "Images/Vent.jpg"

    // 2. Définir le contenu de l'histoire et les images associées à chaque page
    const storyPages = [
        "Il était une fois 3 petits cochons qui vivaient avec leur maman dans une petite maison. Un jour, leur mère les réunit et leur dit : \"Mes enfants, vous avez beaucoup grandi, et notre maison est bien trop petite pour nous maintenant. Demain, vous partirez pour construire chacun votre maison. Et surtout, faites bien attention au grand méchant loup\".",
        "Le lendemain, ils s'embrassèrent tous et partirent. Nouf Nouf, le plus jeune et le plus paresseux, rencontra un paysan et lui demanda un peu de paille pour construire sa maison en quelques minutes. Nif Nif, le second, un peu moins paresseux, demanda du bois à un bûcheron et se construisit une maison en bois en quelques heures. Naf Naf, l'aîné et le plus travailleur, acheta des briques à un maçon et se construisit une solide maison de brique en plusieurs jours.",
        "Ses frères qui avait terminé bien avant lui, se moquaient de lui en rigolant et en jouant de la musique devant lui. Mais Naf Naf leur reprochait leur paresse et leur disait \"Nous verrons bien quand le loup viendra! Rira bien qui rira le dernier!\"",
        "Quelques jours plus tard, un horrible et énorme grand méchant loup sortit de la forêt. Il vit d’abord la maison de Nouf Nouf et cria: \“Petit cochon, ouvre-moi ta porte ou je soufflerai, et ta maison s’envolera!\” \“Non, jamais de la vie\” dit Nouf Nouf en tremblant.",
        "Alors le grand méchant loup remplit ses poumons et commença à souffler de toutes ses forces:\“Pfffffffffff Hoooo Pfffffffffffff!\” En quelques secondes, la maison s’envola.",
        "Nouf Nouf, se mit à courir de toutes ses forces vers la cabane de son frère Nif Nif. Nif Nif lui ouvrit la porte juste à temps car ils entendirent rugir la voix du loup:\“Petits cochons! Petits cochons! Ouvrez-moi la porte!\” \“Non non!\” S’exclama Nif Nif. \“Nous ne t’ouvrirons pas!\” Le loup répondit: \“Puisque c’est comme ça, je vais souffler, souffler, souffler, et votre maison s’envolera.\”",
        "Alors il gonfla sa poitrine et se mit à souffler de toutes ses forces:\“Pfffffffffff Hoooo Pfffffffffffff!\” La cabane resista un peu mais s’envola bien vite",
        "Nouf Nouf et Nif Nif se mirent à courir, courir, courir, en direction de la maison de briques de leur frère Naf Naf.Naf Naf les laissa entrer juste à temps. De grands coups retentirent à la porte. \“Boum Boum Boum\". C’était le loup.\«Petits cochons, petits cochons! Ouvrez-moi la porte ou je soufflerai, soufflerai, soufflerai, et votre maison s’envolera.\” \“Non\” dit Naf Naf, \“Nous ne t’ouvrirons pas\”",
        "Alors le Loup souffla de toutes ses forces: \“Pffffffffffffffffffffffffffffffffffffffffffffffffff!\” La maison ne bougea pas d’un pouce. Enragé, il souffla à nouveau:\“Pffffffffffffffffffffffffffffffffffffffffffffffffff!\” Mais la maison resista, solide comme un roc. Il souffla, souffla et souffla encore jusqu’à perdre haleine.\“Hufufufufufu\”",
        "À bout de souffle, le grand méchant loup, chercha une autre idée pour entrer dans la maison. Il aperçut la cheminée sur le toit, commença à escalader le mur pour y descendre et attraper son repas.",
        "Heureusement, Naf Naf, avait entendu les pas du loup sur le toit, et il avait mis rapidement une grande marmite d’eau chaude à bouillir sur le feu. Lorsque le grand méchant loup descendit par le conduit de la cheminée, il se brûla tellement fort, qu’il sauta à plusieurs mètres en passant par la cheminée en sens inverse. Il courut, courut, courut jusqu’à disparaître complètement. Et on ne le revit plus jamais dans la région.",
        "Les trois petits cochons sortirent tout heureux de la maison de briques et se mirent à danser en rond en chantant:\”Qui a peur du grand méchant loup, c’est peut-être vous? C’est pas nous!\”Naf Naf put enfin se joindre à la flûte de Nouf Nouf et au violon de Nif Nif en les accompagnant gaiement sur son piano. Finalement, il invita ses frères à vivre dans sa maison en attendant qu’ils construisent chacun leur propre maison de brique."
    ];

    const images = [
        Neutre,
        Joyeux,
        Colere,
        Peur,
        Vent,
        Peur,
        Vent,
        Peur,
        Vent,
        Peur,
        Joyeux,
        Joyeux
    ];

    let currentPage = 0;
    let readingInterval = null;

    // 3. Sélectionner les éléments du DOM
    const storyText = document.getElementById('story-text');
    const imageElement = document.getElementById('image');
    const progressBar = document.getElementById('progress-bar');
    const backBtn = document.getElementById('back-btn');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const continueBtn = document.getElementById('continue-btn');
    const endScreen = document.getElementById('end-screen');

    // 4. Fonction pour mettre à jour l'affichage de l'histoire et la barre de progression
    function updateStory() {
        // Met à jour le texte de l'histoire
        storyText.textContent = storyPages[currentPage];

        // Met à jour l'image si elle existe pour cette page
        if (images[currentPage]) {
            imageElement.src = images[currentPage];
        } else {
            imageElement.src = "";
        }

        // Met à jour la barre de progression
        const progressPercent = ((currentPage + 1) / storyPages.length) * 100;
        progressBar.style.width = progressPercent + "%";

        // Si c'est la dernière page, arrête la lecture automatique et affiche l'écran de fin
        if (currentPage === storyPages.length - 1) {
            stopReading();
            setTimeout(() => {
                // Masquer les éléments de l'histoire et afficher l'écran de fin
                document.getElementById('image-container').style.display = "none" ;
                document.getElementById('text-box').style.display = 'none';
                document.getElementById('button-container').style.display = 'none';
                endScreen.style.display = 'block';
            }, 1000);
        }
    }

    // 5. Fonction pour démarrer la lecture automatique de l'histoire
    function startReading() {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
        if (!readingInterval) {
            readingInterval = setInterval(() => {
                if (currentPage < storyPages.length - 1) {
                    currentPage++;
                    updateStory();
                } else {
                    stopReading();
                }
            }, 3000); // Passage automatique toutes les 3 secondes
        }
    }

    // 6. Fonction pour arrêter la lecture automatique
    function stopReading() {
        if (readingInterval) {
            clearInterval(readingInterval);
            readingInterval = null;
        }
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    }

    // 7. Écouteurs d'événements pour la navigation
    backBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateStory();
        }
    });

    playBtn.addEventListener('click', startReading);
    pauseBtn.addEventListener('click', stopReading);

    continueBtn.addEventListener('click', () => {
        if (currentPage < storyPages.length - 1) {
            currentPage++;
            updateStory();
        }
    });

    // Initialiser l'affichage de l'histoire
    updateStory();

    // 8. Gestion des boutons d'émotion sur l'écran de fin
    document.querySelectorAll('.emoji-btn').forEach(button => {
        button.addEventListener('click', () => {
            const emotion = button.getAttribute('data-emotion'); // Ex: "colere"
            localStorage.setItem('selectedEmotion', emotion);

            // Appliquer la classe CSS correspondante pour changer le fond
            document.body.classList.remove('bg-heureux', 'bg-neutre', 'bg-triste', 'bg-peur', 'bg-colere');
            document.body.classList.add('bg-' + emotion);

            // Afficher un message de remerciement
            const ratingMessage = document.getElementById('rating-message');
            ratingMessage.textContent = "Merci pour ton retour !";
        });
    });
});
