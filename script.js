document.addEventListener('DOMContentLoaded', function() {
    const stories = {
        story1: {
            steps: [
                    { text: "Il était une fois un loup qui vivait dans une belle forêt, entouré de tous ses amis. Il s’appelait Loup. Mais ce loup avait un souci : il était trop émotif. Joyeux, fâché, triste, excité… il changeait d’humeur à cent à l’heure !", image: "Neutre.jpg" },
                
                    { text: "Ainsi, quand Loup était d’humeur joyeuse, il sifflotait, le cœur léger, faisait des blagues, parlait aux arbres… Il était plein d’énergie et débordait d’idées pour s’amuser !", image: "Joyeux.jpg" },
                
                    { text: "Cependant, si quelque chose le contrariait… Ah ! Il se renfrognait, explosait, et envoyait tout le monde balader !", image: "Colere.jpg" },
                
                    { text: "— Tu dois apprendre à te calmer, Loup, lui dit un jour Maître Hibou, excédé. Tu nous donnes le tournis !", image: "Colere.jpg" },
                
                    { text: "— Apprendre à me calmer ? Mais pourquoi ? demanda Loup.", image: "Colere.jpg" },
                
                    { text: "— Pour être plus serein ! Mais ne t’inquiète pas, nous allons t’aider… On commence demain !", image: "Neutre.jpg" },
                
                    { text: "Le lendemain, Loup se rendit chez son ami.", image: "Neutre.jpg" },
                
                    { text: "— Pour contrôler tes émotions, le yoga, c’est parfait ! déclara Maître Hibou. Respire calmement et fais le vide en toi.", image: "Neutre.jpg" },
                
                    { text: "Maître Hibou enchaîna les positions : lotus, montagne… et Loup essaya de l’imiter. Ouh là là ! Ce n’était pas facile, mais qu’est-ce que c’était rigolo ! N’y tenant plus, Loup éclata de rire.", image: "Rires.jpg" },
                
                    { text: "— On dirait que le yoga ne fonctionne pas avec toi, soupira Maître Hibou.", image: "Question.jpg" },
                
                    { text: "À l’extérieur, Alfred attendait Loup de pied ferme.", image: "Neutre.jpg" },
                
                    { text: "— Rien de tel que le sport pour se défouler, dit-il. Je t’ai préparé un parcours spécial 'Loup excité'. Prêt ?", image: "Joyeux.jpg" },
                
                    { text: "Et il fila comme une fusée. Derrière lui, Loup courait, sautait, rampait… Alfred s’arrêta au pied d’un arbre immense.", image: "Excité.jpg" },
                
                    { text: "— On se retrouve en haut ! cria-t-il en disparaissant dans les feuillages.", image: "Excité.jpg" },
                
                    { text: "Arrivé au sommet, Loup regarda en bas… Sa gorge se serra, son cœur se mit à cogner dans sa poitrine, ses jambes à trembler.", image: "Peur.jpg" },
                
                    { text: "— Alfred, j’ai peur ! paniqua-t-il. Je vais tomber !", image: "Peur.jpg" },
                
                    { text: "— Calme-toi, Loup, je suis avec toi. On va redescendre ensemble, doucement.", image: "Peur.jpg" },
                
                    { text: "Loup prit une grande inspiration et, tout tremblant, il redescendit.", image: "Peur.jpg" },
                
                    { text: "— Tu as vaincu ta peur, tu peux être fier de toi ! le félicita Alfred.", image: "Joyeux.jpg" },
                
                    { text: "Loup sourit : ah ça oui, il était fier de lui !", image: "Joyeux.jpg" },
                
                    { text: "Tout ceci m’a mis en appétit, se dit Loup. Cela tombait bien : Gros Louis l’attendait chez lui.", image: "Neutre.jpg" },
                
                    { text: "Les pattes pleines de farine, Gros Louis était avec Louve dans la cuisine.", image: "Neutre.jpg" },
                
                    { text: "— Ils ont l’air de bien s’amuser tous les deux…, pensa Loup, jaloux.", image: "Jaloux.jpg" },
                
                    { text: "— Salut Loup ! fit Gros Louis. Aujourd’hui, on prépare des macarons. Pour réussir ces gâteaux, il faut être très, très patient. Tiens, c’est un bon exercice pour toi, n’est-ce pas ?", image: "Joyeux.jpg" },
                
                    { text: "À ces mots, Louve éclata de rire.", image: "Rire.jpg" },
                
                    { text: "Loup sentit la moutarde lui monter au nez. Il devint tout rouge, tapa du pied et explosa :", image: "Colere.jpg" },
                
                    { text: "— C’est ça, moquez-vous de moi ! hurla-t-il, très en colère. Je m’en fiche ! De toute façon, je n’ai pas envie de faire des gâteaux idiots avec des idiots !", image: "Colere.jpg" },
                
                    { text: "Loup s’en alla, grommelant dans sa barbe et donnant des coups de patte dans les arbres.", image: "Colere.jpg" },
                
                    { text: "Peu à peu, Loup ralentit son allure, pour finir par se traîner comme un escargot, le cœur lourd. Une larme roula sur sa joue.", image: "Triste.jpg" },
                
                    { text: "— Je n’aurais pas dû m’énerver, renifla-t-il. Louve ne m’aimera plus jamais… Comme je suis triste…", image: "Triste.jpg" },
                
                    { text: "— Mais, qu’est-ce qui arrive à mon super copain ? fit alors une voix derrière lui.", image: "Question.jpg" },
                
                    { text: "C’était Demoiselle Yéti. Elle lui fit un gros câlin, puis elle dit :", image: "Bisous.jpg" },
                
                    { text: "— Ce qui est fait est fait. Maintenant, il faut réparer ta bêtise ! Va voir Gros Louis et Louve, et excuse-toi. Tu te sentiras beaucoup mieux après.", image: "Joyeux.jpg" },
                
                    { text: "— Et si Louve ne veut pas me pardonner ? fit Loup, inquiet.", image: "Peur.jpg" },
                
                    { text: "— Qui ne tente rien n’a rien, répondit Demoiselle Yéti. Allez, file !", image: "Joyeux.jpg" },
                
                    { text: "Tout honteux, Loup retourna frapper à la porte de Gros Louis.", image: "Peur.jpg" },
                
                    { text: "— Je vous demande pardon, les amis, fit-il. Je ne pensais pas ce que j’ai dit. Ce n’était pas gentil.", image: "Peur.jpg" },
                
                    { text: "— Excuses acceptées, sourit Louve.", image: "Joyeux.jpg" },
                
                    { text: "Loup et Louve se regardèrent, des cœurs plein les yeux. Loup leva ses pattes : il se sentait léger, léger, léger ! Et… il était affamé !", image: "Joyeux.jpg" },
                
                    { text: "À table, mes amis, les macarons sont prêts !", image: "Rire.jpg" }
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