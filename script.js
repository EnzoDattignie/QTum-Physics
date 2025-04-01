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
                
                    { text: "Et il fila comme une fusée. Derrière lui, Loup courait, sautait, rampait… Alfred s’arrêta au pied d’un arbre immense.", image: "Test.jpg" },
                
                    { text: "— On se retrouve en haut ! cria-t-il en disparaissant dans les feuillages.", image: "Test.jpg" },
                
                    { text: "Arrivé au sommet, Loup regarda en bas… Sa gorge se serra, son cœur se mit à cogner dans sa poitrine, ses jambes à trembler.", image: "Peur.jpg" },
                
                    { text: "— Alfred, j’ai peur ! paniqua-t-il. Je vais tomber !", image: "Peur.jpg" },
                
                    { text: "— Calme-toi, Loup, je suis avec toi. On va redescendre ensemble, doucement.", image: "Peur.jpg" },
                
                    { text: "Loup prit une grande inspiration et, tout tremblant, il redescendit.", image: "Peur.jpg" },
                
                    { text: "— Tu as vaincu ta peur, tu peux être fier de toi ! le félicita Alfred.", image: "Joyeux.jpg" },
                
                    { text: "Loup sourit : ah ça oui, il était fier de lui !", image: "Joyeux.jpg" },
                
                    { text: "Tout ceci m’a mis en appétit, se dit Loup. Cela tombait bien : Gros Louis l’attendait chez lui.", image: "Neutre.jpg" },
                
                    { text: "Les pattes pleines de farine, Gros Louis était avec Louve dans la cuisine.", image: "Neutre.jpg" },
                
                    { text: "— Ils ont l’air de bien s’amuser tous les deux…, pensa Loup, jaloux.", image: "Colere.jpg" },
                
                    { text: "— Salut Loup ! fit Gros Louis. Aujourd’hui, on prépare des macarons. Pour réussir ces gâteaux, il faut être très, très patient. Tiens, c’est un bon exercice pour toi, n’est-ce pas ?", image: "Joyeux.jpg" },
                
                    { text: "À ces mots, Louve éclata de rire.", image: "Rires.jpg" },
                
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
                
                    { text: "À table, mes amis, les macarons sont prêts !", image: "Rires.jpg" }
            ],
            defaultBg: "bg-heureux"
        },
        story2: {
            steps: [
                { text: "Once upon a time, there was a wolf who lived in a beautiful forest, surrounded by all his friends. His name was Wolf. But this wolf had a problem: he was too emotional. Happy, angry, sad, excited... his mood changed a hundred times a minute!", image: "Neutre.jpg" },
            
                { text: "So, when Wolf was in a joyful mood, he whistled with a light heart, cracked jokes, talked to the trees... He was bursting with energy and full of fun ideas!", image: "Joyeux.jpg" },
            
                { text: "However, if something upset him… Oh no! He would frown, explode, and send everyone away!", image: "Colere.jpg" },
                
                { text: "— You need to learn to calm down, Wolf, said Master Owl one day, exasperated. You're making us dizzy!", image: "Colere.jpg" },
                
                { text: "— Learn to calm down? But why? asked Wolf.", image: "Colere.jpg" },
                
                { text: "— To be more peaceful! But don’t worry, we’ll help you… We start tomorrow!", image: "Colere.jpg" },
                
                { text: "The next day, Wolf went to his friend’s house.", image: "Neutre.jpg" },
                
                { text: "— To control your emotions, yoga is perfect! declared Master Owl. Breathe calmly and clear your mind.", image: "Neutre.jpg" },
                
                    { text: "Master Owl flowed through the poses: lotus, mountain… and Wolf tried to copy him. Oh dear! It wasn’t easy, but it was so funny! Unable to hold it in, Wolf burst out laughing.", image: "Rires.jpg" },
                
                    { text: "— Seems like yoga doesn’t work for you, sighed Master Owl.", image: "Question.jpg" },
                
                    { text: "Outside, Alfred was waiting impatiently for Wolf.", image: "Neutre.jpg" },
                
                    { text: "— Nothing beats sport to let off steam, he said. I’ve set up a special 'Excited Wolf' course. Ready?", image: "Joyeux.jpg" },
                
                    { text: "And off he shot like a rocket. Behind him, Wolf was running, jumping, crawling… Alfred stopped at the foot of a huge tree.", image: "Test.jpg" },
                
                    { text: "— See you at the top! he shouted as he disappeared into the leaves.", image: "Test.jpg" },
                
                    { text: "Once at the top, Wolf looked down… His throat tightened, his heart pounded in his chest, his legs trembled.", image: "Peur.jpg" },
                
                    { text: "— Alfred, I’m scared! he panicked. I’m going to fall!", image: "Peur.jpg" },
                
                    { text: "— Calm down, Wolf. I’m right here with you. We’ll climb down together, slowly.", image: "Peur.jpg" },
                
                    { text: "Wolf took a deep breath and, trembling all over, climbed down.", image: "Peur.jpg" },
                
                    { text: "— You’ve conquered your fear—you can be proud of yourself! Alfred congratulated him.", image: "Joyeux.jpg" },
                
                    { text: "Wolf smiled: oh yes, he was truly proud of himself!", image: "Joyeux.jpg" },
                
                    { text: "All this made me hungry, thought Wolf. That’s perfect—Big Louie is waiting for me.", image: "Neutre.jpg" },
                
                    { text: "Covered in flour, Big Louie was in the kitchen with Lona.", image: "Neutre.jpg" },
                
                    { text: "— They look like they’re having so much fun together…, thought Wolf, jealous.", image: "Colere.jpg" },
                
                    { text: "— Hi, Wolf! said Big Louie. Today we’re making macarons. To succeed with these treats, you have to be very, very patient. It's a great exercise for you, isn’t it?", image: "Joyeux.jpg" },
                
                    { text: "At these words, Lona burst out laughing.", image: "Rires.jpg" },
                
                    { text: "Wolf felt his temper rising. He turned red, stomped his foot and exploded:", image: "Colere.jpg" },
                
                    { text: "— That’s right, go ahead and make fun of me! he shouted, furious. I don’t care! I don’t even want to make stupid cookies with stupid people!", image: "Colere.jpg" },
                
                    { text: "Wolf stormed off, muttering under his breath and swiping angrily at the trees.", image: "Colere.jpg" },
                
                    { text: "Little by little, Wolf slowed down, until he was dragging his feet like a snail, his heart heavy. A tear rolled down his cheek.", image: "Triste.jpg" },
                
                    { text: "— I shouldn’t have gotten angry, he sniffled. Lona will never love me again… I feel so sad…", image: "Triste.jpg" },
                
                    { text: "— Hey, what’s wrong with my awesome buddy? came a voice behind him.", image: "Question.jpg" },
                
                    { text: "It was Miss Yeti. She gave him a big hug, then said:", image: "Bisous.jpg" },
                
                    { text: "— What’s done is done. Now you have to fix your mistake! Go see Big Louie and Lona and apologize. You’ll feel so much better afterward.", image: "Joyeux.jpg" },
                
                    { text: "— But what if Lona doesn’t forgive me? asked Wolf, worried.", image: "Peur.jpg" },
                
                    { text: "— Nothing ventured, nothing gained, replied Miss Yeti. Go on now!", image: "Joyeux.jpg" },
                
                    { text: "Feeling ashamed, Wolf went back and knocked on Big Louie’s door.", image: "Peur.jpg" },
                
                    { text: "— I’m sorry, my friends, he said. I didn’t mean what I said. It wasn’t kind.", image: "Peur.jpg" },
                
                { text: "— Apology accepted, smiled Lona.", image: "Joyeux.jpg" },
                
                { text: "Wolf and Lona looked at each other, hearts in their eyes. Wolf lifted his paws: he felt light, light, light! And… he was starving!", image: "Joyeux.jpg" },
                
                { text: "Let’s eat now —the macarons are ready!", image: "Rires.jpg" }
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
    };

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