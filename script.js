document.addEventListener('DOMContentLoaded', function() {
    const stories = {
        story1: {
            steps: [
                { text: "Bienvenue dans Histoire 1 - Partie 1", image: "Joyeux.jpg" },
                { text: "Histoire 1 - Partie 2 : L'aventure continue...", image: "Vent.jpg" },
                { text: "Histoire 1 - Partie 3 : La fin de l'histoire.", image: "Neutre.jpg" }
            ],
            defaultBg: "bg-heureux"
        },
        story2: {
            steps: [
                { text: "Il était une fois 3 petits cochons qui vivaient avec leur maman dans une petite maison. Un jour, leur mère les réunit et leur dit : \"Mes enfants, vous avez beaucoup grandi, et notre maison est bien trop petite pour nous maintenant. Demain, vous partirez pour construire chacun votre maison. Et surtout, faites bien attention au grand méchant loup\".", image: "Neutre.jpg" },
            
                { text: "Le lendemain, ils s'embrassèrent tous et partirent. Nouf Nouf, le plus jeune et le plus paresseux, rencontra un paysan et lui demanda un peu de paille pour construire sa maison en quelques minutes. Nif Nif, le second, un peu moins paresseux, demanda du bois à un bûcheron et se construisit une maison en bois en quelques heures. Naf Naf, l'aîné et le plus travailleur, acheta des briques à un maçon et se construisit une solide maison de brique en plusieurs jours.", image: "Joyeux.jpg" },
            
                { text: "Ses frères qui avaient terminé bien avant lui, se moquaient de lui en rigolant et en jouant de la musique devant lui. Mais Naf Naf leur reprochait leur paresse et leur disait \"Nous verrons bien quand le loup viendra! Rira bien qui rira le dernier!\"", image: "Colere.jpg" },
            
                { text: "Quelques jours plus tard, un horrible et énorme grand méchant loup sortit de la forêt. Il vit d’abord la maison de Nouf Nouf et cria: \"Petit cochon, ouvre-moi ta porte ou je soufflerai, et ta maison s’envolera!\" \"Non, jamais de la vie\" dit Nouf Nouf en tremblant.", image: "Peur.jpg" },
            
                { text: "Alors le grand méchant loup remplit ses poumons et commença à souffler de toutes ses forces: \"Pfffffffffff Hoooo Pfffffffffffff!\" En quelques secondes, la maison s’envola.", image: "Vent.jpg" },
            
                { text: "Nouf Nouf, se mit à courir de toutes ses forces vers la cabane de son frère Nif Nif. Nif Nif lui ouvrit la porte juste à temps car ils entendirent rugir la voix du loup: \"Petits cochons! Petits cochons! Ouvrez-moi la porte!\" \"Non non!\" S’exclama Nif Nif. \"Nous ne t’ouvrirons pas!\" Le loup répondit: \"Puisque c’est comme ça, je vais souffler, souffler, souffler, et votre maison s’envolera.\"", image: "Peur.jpg" },
            
                { text: "Alors il gonfla sa poitrine et se mit à souffler de toutes ses forces: \"Pfffffffffff Hoooo Pfffffffffffff!\" La cabane résista un peu mais s’envola bien vite.", image: "Vent.jpg" },
            
                { text: "Nouf Nouf et Nif Nif se mirent à courir, courir, courir, en direction de la maison de briques de leur frère Naf Naf. Naf Naf les laissa entrer juste à temps. De grands coups retentirent à la porte. \"Boum Boum Boum\". C’était le loup. \"Petits cochons, petits cochons! Ouvrez-moi la porte ou je soufflerai, soufflerai, soufflerai, et votre maison s’envolera.\" \"Non\" dit Naf Naf, \"Nous ne t’ouvrirons pas.\"", image: "Peur.jpg" },
            
                { text: "Alors le Loup souffla de toutes ses forces: \"Pffffffffffffffffffffffffffffffffffffffffffffffffff!\" La maison ne bougea pas d’un pouce. Enragé, il souffla à nouveau: \"Pffffffffffffffffffffffffffffffffffffffffffffffffff!\" Mais la maison résista, solide comme un roc. Il souffla, souffla et souffla encore jusqu’à perdre haleine. \"Hufufufufufu\"", image: "Vent.jpg" },
            
                { text: "À bout de souffle, le grand méchant loup, chercha une autre idée pour entrer dans la maison. Il aperçut la cheminée sur le toit, commença à escalader le mur pour y descendre et attraper son repas.", image: "Peur.jpg" },
            
                { text: "Heureusement, Naf Naf, avait entendu les pas du loup sur le toit, et il avait mis rapidement une grande marmite d’eau chaude à bouillir sur le feu. Lorsque le grand méchant loup descendit par le conduit de la cheminée, il se brûla tellement fort, qu’il sauta à plusieurs mètres en passant par la cheminée en sens inverse. Il courut, courut, courut jusqu’à disparaître complètement. Et on ne le revit plus jamais dans la région.", image: "Joyeux.jpg" },
            
                { text: "Les trois petits cochons sortirent tout heureux de la maison de briques et se mirent à danser en rond en chantant: \"Qui a peur du grand méchant loup, c’est peut-être vous? C’est pas nous!\" Naf Naf put enfin se joindre à la flûte de Nouf Nouf et au violon de Nif Nif en les accompagnant gaiement sur son piano. Finalement, il invita ses frères à vivre dans sa maison en attendant qu’ils construisent chacun leur propre maison de brique.", image: "Joyeux.jpg" }
            ],
            defaultBg: "bg-peur"
        }
    };

    let currentStory = null;
    let currentStep = 0;
    let playInterval = null;
    
    const storySelector = document.getElementById('story-selector');
    const imageContainer = document.getElementById('image-container');
    const textBox = document.getElementById('text-box');
    const buttonContainer = document.getElementById('button-container');
    const storyText = document.getElementById('story-text');
    const imageEl = document.getElementById('image');
    const progressBar = document.getElementById('progress-bar');
    const progressCont = document.getElementById('progress-container');
    const backBtn = document.getElementById('back-btn');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const continueBtn = document.getElementById('continue-btn');
    const endScreen = document.getElementById('end-screen');
    const emojiBtns = document.querySelectorAll('.emoji-btn');
    const ratingMessage = document.getElementById('rating-message');

    // Récupérer l'émotion sauvegardée
    let savedEmotion = localStorage.getItem("bg-emotion");
    if (savedEmotion) {
        document.body.classList.add(savedEmotion);
    }

    imageContainer.style.display = "none";
    textBox.style.display = "none";
    buttonContainer.style.display = "none";

    document.querySelectorAll('.story-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            imageContainer.style.display = "block";
            textBox.style.display = "block";
            buttonContainer.style.display = "flex";
            
            const selectedStory = btn.getAttribute('data-story');
            currentStory = stories[selectedStory];
            currentStep = 0;
            
            storySelector.style.display = 'none';
            
            document.body.classList.remove("bg-heureux", "bg-neutre", "bg-triste", "bg-peur", "bg-colere");
            
            if (savedEmotion) {
                document.body.classList.add(savedEmotion);
            } else {
                document.body.classList.add(currentStory.defaultBg);
            }
            
            loadStep();
        });
    });

    function loadStep() {
        if (!currentStory) return;
        const step = currentStory.steps[currentStep];
        storyText.textContent = step.text;
        imageEl.src = step.image;
        updateProgressBar();
        
        if (currentStep === currentStory.steps.length - 1) {
            setTimeout(() => {
                showEndScreen();
            }, 1500);
        }
    }

    function updateProgressBar() {
        if (!currentStory) return;
        const progress = ((currentStep + 1) / currentStory.steps.length) * 100;
        progressBar.style.width = progress + "%";
    }

    backBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            loadStep();
        }
    });

    continueBtn.addEventListener('click', function() {
        if (currentStory && currentStep < currentStory.steps.length - 1) {
            currentStep++;
            loadStep();
        }
    });

    playBtn.addEventListener('click', function() {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
        playInterval = setInterval(function() {
            if (currentStep < currentStory.steps.length - 1) {
                currentStep++;
                loadStep();
            } else {
                clearInterval(playInterval);
            }
        }, 9000);
    });

    pauseBtn.addEventListener('click', function() {
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
        clearInterval(playInterval);
    });

    function showEndScreen() {
        imageContainer.style.display = 'none';
        textBox.style.display = 'none';
        buttonContainer.style.display = 'none';
        endScreen.style.display = 'block';
        progressCont.style.display = "none";
    }

    emojiBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const emotion = btn.getAttribute('data-emotion');
            
            let emotionText;
            switch (emotion) {
                case "heureux":
                    emotionText = "de la joie";
                    break;
                case "neutre":
                    emotionText = "pas grand chose";
                    break;
                case "triste":
                    emotionText = "de la tristesse";
                    break;
                case "peur":
                    emotionText = "de la peur";
                    break;
                case "colere":
                    emotionText = "de la colère";
                    break;
                default:
                    emotionText = emotion;
            }
    
            ratingMessage.textContent = "Tu as ressenti " + emotionText;
            
            document.body.classList.remove("bg-heureux", "bg-neutre", "bg-triste", "bg-peur", "bg-colere");
            document.body.classList.add("bg-" + emotion);
            
            localStorage.setItem("bg-emotion", "bg-" + emotion);
            savedEmotion = "bg-" + emotion;
        });
    });
});