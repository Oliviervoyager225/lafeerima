import React from 'react';
import '../styles/QuotesBanner.css';

const quotes = [
    { text: "Promets-moi que tu te souviendras toujours : tu es plus courageux que tu ne le penses, et plus fort que tu n'en as l'air, et plus intelligent que tu ne le penses.", author: "Christopher Robin, Winnie the Pooh" },
    { text: "Vous n'êtes pas seul. La maladie mentale est une réalité et la guérison est possible.", author: "Inconnu" },
    { text: "Votre santé mentale est plus importante que l'opinion des autres.", author: "Inconnu" },
    { text: "N'ayez pas peur de demander de l'aide. Vous n'êtes jamais seul dans vos luttes.", author: "Inconnu" },
    { text: "La douleur émotionnelle n'est pas quelque chose qui devrait être caché et dont on ne devrait jamais parler. Il y a de la vérité dans votre douleur, il y a de la croissance dans votre douleur, mais seulement si elle est d'abord révélée au grand jour.", author: "Steven Aitchison" },
    { text: "Prendre soin de soi, c'est la façon dont vous reprenez votre pouvoir.", author: "Lalah Delia" },
    { text: "Votre santé mentale est un investissement, pas une dépense.", author: "Inconnu" },
    { text: "Vous êtes digne d'amour et d'attention, surtout de la part de vous-même.", author: "Inconnu" },
    { text: "La guérison prend du temps et demander de l'aide est une démarche courageuse.", author: "Mariska Hargitay" },
    { text: "Votre santé mentale est un trésor. Protégez-la.", author: "Inconnu" },
    { text: "N'ayez pas honte de votre histoire, elle inspirera d'autres personnes.", author: "Inconnu" },
    { text: "Vous n'êtes pas défini par votre passé ou vos luttes. Vous êtes défini par la force dont vous avez fait preuve pour les surmonter.", author: "Inconnu" },
    { text: "Votre santé mentale est une priorité. Votre bonheur est essentiel. Prendre soin de soi est une nécessité.", author: "Inconnu" },
    { text: "Vous n'êtes pas votre maladie. Vous avez une histoire personnelle à raconter. Rester vous-même fait partie du combat.", author: "Julian Seifter" },
    { text: "Vous n'avez pas besoin d'être positif tout le temps. Avoir des sentiments ne fait pas de vous une personne négative. Cela vous rend humain.", author: "Lori Deschene" },
    { text: "Votre santé mentale est primordiale – accordez-lui la priorité. Faites en sorte que votre vie en dépende, car c'est le cas.", author: "Mel Robbins" },
    { text: "Votre santé est importante. Vos sentiments sont valides. Votre voix compte. Vous comptez.", author: "Inconnu" },
    { text: "Nous ne devrions pas traiter les problèmes de santé mentale différemment des autres maladies.", author: "Michelle Obama" },
    { text: "Il n'est pas obligé de lutter en silence. Vous pouvez ne pas rester silencieux.", author: "Demi Lovato" },
    { text: "Ce dont la santé mentale a besoin, c'est de plus de soleil, de plus de franchise et de conversations sans honte.", author: "Glenn Close" },
    { text: "Le soin de soi n'est pas de l'égoïsme, c'est de l'auto-préservation.", author: "Inconnu" },
    { text: "La guérison ne signifie pas que les dommages n'ont jamais existé. Elle signifie que les dommages ne contrôlent plus nos vies.", author: "Inconnu" },
    { text: "Ne laissez pas les autres précipiter votre guérison. C'est un processus qui peut prendre des années, et ce n'est pas grave.", author: "Beau Taplin" },
    { text: "C'est normal de ne pas aller bien. Ce qui est important, c'est que vous demandez de l'aide quand vous en avez besoin.", author: "Inconnu" },
    { text: "Votre parcours de santé mentale est un marathon, pas un sprint. Soyez patient avec vous-même.", author: "Inconnu" },
    { text: "J'ai appris que ma tristesse n'a jamais détruit ce qu'il y avait de formidable en moi.", author: "Lady Gaga" },
    { text: "C'est dans nos moments les plus sombres que nous devons nous concentrer pour voir la lumière.", author: "Aristote" },
    { text: "Au cœur de l'hiver, j'ai découvert qu'il y avait en moi un été invincible.", author: "Albert Camus" },
    { text: "Les personnes les plus fortes ne sont pas celles qui montrent leur force devant nous, mais celles qui gagnent des batailles dont nous ne savons rien.", author: "Inconnu" },
    { text: "Il y a de l'espoir, même lorsque votre cerveau vous dit qu'il n'y en a pas.", author: "John Green" },
    { text: "Ce ne sont pas les ecchymures sur le corps qui font mal. Ce sont les blessures du cœur et les cicatrices de l'esprit.", author: "Aisha Mirza" },
    { text: "Vous-même, autant que n'importe qui dans l'univers entier, méritez votre amour et votre affection.", author: "Buddha" },
];

export default function QuotesBanner() {
    // Duplicate quotes for seamless infinite loop
    const allQuotes = [...quotes, ...quotes];

    return (
        <section className="quotes-banner" aria-label="Citations inspirantes">
            <div className="quotes-track">
                {allQuotes.map((q, i) => (
                    <span key={i} className="quote-item">
                        <span className="quote-text">« {q.text} »</span>
                        <span className="quote-author"> — {q.author}</span>
                        <span className="quote-separator" aria-hidden="true">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
}
