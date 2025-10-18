import React, { useState } from 'react';
import { Download, Dices, Users, Zap, Heart, Trophy, Smile } from 'lucide-react';

export default function BingoGameLandingPage() {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">🎰 Bingo de Nouvelle-Calédonie</h1>
          <div className="space-x-6">
            <button className="text-gray-300 hover:text-white transition">À propos</button>
            <button className="text-gray-300 hover:text-white transition">Règles</button>
            <button className="text-gray-300 hover:text-white transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            Relaxez-vous avec le <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">Bingo de Nouvelle-Calédonie</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Le bingo traditionnel revisité à la sauce calédonienne. Un jeu de détente unique 100% gratuit avec des quines, bingo et bingo inversés pour tous les niveaux !
          </p>
          
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2 transition transform hover:scale-105">
              <Download size={24} />
              Télécharger l'APK
            </button>
            <button onClick={() => setShowRules(!showRules)} className="border-2 border-emerald-400 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-emerald-400/10 transition">
              Découvrir les règles
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
              <Heart className="text-red-400 mx-auto mb-2" size={32} />
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-gray-300">Relaxation garantie</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
              <Smile className="text-yellow-400 mx-auto mb-2" size={32} />
              <p className="text-2xl font-bold text-white">Gratuit</p>
              <p className="text-gray-300">Zéro publicité invasive</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
              <Dices className="text-emerald-400 mx-auto mb-2" size={32} />
              <p className="text-2xl font-bold text-white">∞</p>
              <p className="text-gray-300">Parties infinies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-16">Les Spécificités du Jeu</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-600/20 to-transparent border border-emerald-500/20 rounded-lg p-8 hover:border-emerald-500/50 transition">
              <Trophy className="text-emerald-400 mb-4" size={40} />
              <h4 className="text-2xl font-bold text-white mb-3">Quines Cumulées</h4>
              <p className="text-gray-300">Collectionnez les lignes complètes et cumulez vos quines pour augmenter votre score global. Chaque ligne compte !</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-transparent border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition">
              <Dices className="text-cyan-400 mb-4" size={40} />
              <h4 className="text-2xl font-bold text-white mb-3">Bingo Cumulés</h4>
              <p className="text-gray-300">Complétez la grille entière et débloquez des bingo cumulés. Votre progression se construit partie après partie !</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/50 transition">
              <Zap className="text-purple-400 mb-4" size={40} />
              <h4 className="text-2xl font-bold text-white mb-3">Bingo Inversé</h4>
              <p className="text-gray-300">Un mode inversé pour les joueurs en quête de défi supplémentaire. Découvrez une toute nouvelle dimension du jeu !</p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-transparent border border-pink-500/20 rounded-lg p-8 hover:border-pink-500/50 transition">
              <Heart className="text-pink-400 mb-4" size={40} />
              <h4 className="text-2xl font-bold text-white mb-3">Détente Garantie</h4>
              <p className="text-gray-300">Une véritable pause dans votre journée avec un jeu pensé pour votre bien-être et votre relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Pourquoi Jouer ?</h3>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
              <h4 className="text-xl font-bold text-emerald-300 mb-2">😌 Moment de Détente</h4>
              <p className="text-gray-300">Échappez au stress quotidien avec un jeu calme et apaisant. Parfait pour se relaxer n'importe où, n'importe quand.</p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-cyan-500/20 rounded-lg p-6">
              <h4 className="text-xl font-bold text-cyan-300 mb-2">🧠 Stimulation Mentale</h4>
              <p className="text-gray-300">Gardez votre esprit actif avec des mécaniques originales. C'est facile à apprendre mais captivant à jouer.</p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-xl font-bold text-purple-300 mb-2">👥 Compétition Friendly</h4>
              <p className="text-gray-300">Comparez vos scores avec vos amis et créez une communauté bienveillante sans enjeu financier.</p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-pink-500/20 rounded-lg p-6">
              <h4 className="text-xl font-bold text-pink-300 mb-2">🎯 Pas d'Enjeu Monétaire</h4>
              <p className="text-gray-300">100% gratuit. Aucun pari, aucun achat caché. Juste du pur plaisir de jouer et de se détendre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Prêt à Vous Détendre ?</h3>
          <p className="text-lg text-white/90 mb-8">Téléchargez gratuitement et profitez de votre premier moment de relaxation !</p>
          
          <div className="flex flex-col gap-4">
            <button className="w-full bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition transform hover:scale-105">
              📱 Télécharger APK Gratuit
            </button>
            <p className="text-sm text-white/80">Taille: 45 MB | Nécessite Android 8.0+ | Zéro tracking</p>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Configuration Requise</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
              <h4 className="text-white font-bold mb-4">✓ Minimum</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Android 8.0</li>
                <li>512 MB RAM</li>
                <li>50 MB espace libre</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur border border-cyan-500/20 rounded-lg p-6">
              <h4 className="text-white font-bold mb-4">⭐ Recommandé</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Android 10+</li>
                <li>2 GB RAM</li>
                <li>Écran 5" ou plus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-12 px-6 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">À propos</h4>
              <p className="text-gray-400 text-sm">Un jeu simple, gratuit et relaxant créé en Nouvelle-Calédonie pour tous les amateurs de bingo.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Liens</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Nous contacter</h4>
              <p className="text-gray-400 text-sm">contact@bingonc.nc</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-emerald-400 hover:text-white transition text-sm">Facebook</a>
                <a href="#" className="text-emerald-400 hover:text-white transition text-sm">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Bingo de Nouvelle-Calédonie. Créé en Nouvelle-Calédonie 🇳🇨 • 100% Gratuit • Zéro Enjeu Monétaire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

6. Scroll en bas à droite, tu vas voir un bouton **"Valider la modification"** (ou "Commit changes")
7. Clique dessus ! ✅

---

## **ÉTAPE 2️⃣ : Créer le fichier index.html**

1. Clique à nouveau sur **"Ajouter un fichier"** → **"Créer un nouveau fichier"**

2. En haut, tape :
```
   index.html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo de Nouvelle-Calédonie</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      import React, { useState } from 'react';
      import { Download, Dices, Users, Zap, Heart, Trophy, Smile } from 'lucide-react';

      export default function BingoGameLandingPage() {
        const [showRules, setShowRules] = useState(false);

        return (
          <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-emerald-500/20">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">🎰 Bingo de Nouvelle-Calédonie</h1>
                <div className="space-x-6">
                  <button className="text-gray-300 hover:text-white transition">À propos</button>
                  <button className="text-gray-300 hover:text-white transition">Règles</button>
                  <button className="text-gray-300 hover:text-white transition">Contact</button>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                  Relaxez-vous avec le <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">Bingo de Nouvelle-Calédonie</span>
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Le bingo traditionnel revisité à la sauce calédonienne. Un jeu de détente unique 100% gratuit avec des quines, bingo et bingo inversés pour tous les niveaux !
                </p>
                
                <div className="flex justify-center gap-6 mb-12 flex-wrap">
                  <button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2 transition transform hover:scale-105">
                    <Download size={24} />
                    Télécharger l'APK
                  </button>
                  <button className="border-2 border-emerald-400 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-emerald-400/10 transition">
                    Découvrir les règles
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
                    <Heart className="text-red-400 mx-auto mb-2" size={32} />
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-gray-300">Relaxation garantie</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
                    <Smile className="text-yellow-400 mx-auto mb-2" size={32} />
                    <p className="text-2xl font-bold text-white">Gratuit</p>
                    <p className="text-gray-300">Zéro publicité invasive</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
                    <Dices className="text-emerald-400 mx-auto mb-2" size={32} />
                    <p className="text-2xl font-bold text-white">∞</p>
                    <p className="text-gray-300">Parties infinies</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Game Mechanics */}
            <section className="py-20 px-6 bg-black/40">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-bold text-white text-center mb-16">Les Spécificités du Jeu</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-emerald-600/20 to-transparent border border-emerald-500/20 rounded-lg p-8 hover:border-emerald-500/50 transition">
                    <Trophy className="text-emerald-400 mb-4" size={40} />
                    <h4 className="text-2xl font-bold text-white mb-3">Quines Cumulées</h4>
                    <p className="text-gray-300">Collectionnez les lignes complètes et cumulez vos quines pour augmenter votre score global. Chaque ligne compte !</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-600/20 to-transparent border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition">
                    <Dices className="text-cyan-400 mb-4" size={40} />
                    <h4 className="text-2xl font-bold text-white mb-3">Bingo Cumulés</h4>
                    <p className="text-gray-300">Complétez la grille entière et débloquez des bingo cumulés. Votre progression se construit partie après partie !</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/50 transition">
                    <Zap className="text-purple-400 mb-4" size={40} />
                    <h4 className="text-2xl font-bold text-white mb-3">Bingo Inversé</h4>
                    <p className="text-gray-300">Un mode inversé pour les joueurs en quête de défi supplémentaire. Découvrez une toute nouvelle dimension du jeu !</p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-600/20 to-transparent border border-pink-500/20 rounded-lg p-8 hover:border-pink-500/50 transition">
                    <Heart className="text-pink-400 mb-4" size={40} />
                    <h4 className="text-2xl font-bold text-white mb-3">Détente Garantie</h4>
                    <p className="text-gray-300">Une véritable pause dans votre journée avec un jeu pensé pour votre bien-être et votre relaxation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Play Section */}
            <section className="py-20 px-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold text-white text-center mb-12">Pourquoi Jouer ?</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-emerald-300 mb-2">😌 Moment de Détente</h4>
                    <p className="text-gray-300">Échappez au stress quotidien avec un jeu calme et apaisant. Parfait pour se relaxer n'importe où, n'importe quand.</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur border border-cyan-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-cyan-300 mb-2">🧠 Stimulation Mentale</h4>
                    <p className="text-gray-300">Gardez votre esprit actif avec des mécaniques originales. C'est facile à apprendre mais captivant à jouer.</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur border border-purple-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-2">👥 Compétition Friendly</h4>
                    <p className="text-gray-300">Comparez vos scores avec vos amis et créez une communauté bienveillante sans enjeu financier.</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur border border-pink-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-pink-300 mb-2">🎯 Pas d'Enjeu Monétaire</h4>
                    <p className="text-gray-300">100% gratuit. Aucun pari, aucun achat caché. Juste du pur plaisir de jouer et de se détendre.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section className="py-20 px-6 bg-black/40">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-center">
                <h3 className="text-4xl font-bold text-white mb-4">Prêt à Vous Détendre ?</h3>
                <p className="text-lg text-white/90 mb-8">Téléchargez gratuitement et profitez de votre premier moment de relaxation !</p>
                
                <div className="flex flex-col gap-4">
                  <button className="w-full bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition transform hover:scale-105">
                    📱 Télécharger APK Gratuit
                  </button>
                  <p className="text-sm text-white/80">Taille: 45 MB | Nécessite Android 8.0+ | Zéro tracking</p>
                </div>
              </div>
            </section>

            {/* System Requirements */}
            <section className="py-16 px-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Configuration Requise</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-4">✓ Minimum</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>Android 8.0</li>
                      <li>512 MB RAM</li>
                      <li>50 MB espace libre</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-cyan-500/20 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-4">⭐ Recommandé</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>Android 10+</li>
                      <li>2 GB RAM</li>
                      <li>Écran 5" ou plus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-emerald-500/20 py-12 px-6 bg-black/60">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-4">À propos</h4>
                    <p className="text-gray-400 text-sm">Un jeu simple, gratuit et relaxant créé en Nouvelle-Calédonie pour tous les amateurs de bingo.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4">Liens</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li><a href="#" className="hover:text-emerald-400 transition">Politique de confidentialité</a></li>
                      <li><a href="#" className="hover:text-emerald-400 transition">Conditions d'utilisation</a></li>
                      <li><a href="#" className="hover:text-emerald-400 transition">Support</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4">Nous contacter</h4>
                    <p className="text-gray-400 text-sm">contact@bingonc.nc</p>
                    <div className="flex gap-4 mt-4">
                      <a href="#" className="text-emerald-400 hover:text-white transition text-sm">Facebook</a>
                      <a href="#" className="text-emerald-400 hover:text-white transition text-sm">Instagram</a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-500 text-sm">
                  <p>© 2025 Bingo de Nouvelle-Calédonie. Créé en Nouvelle-Calédonie 🇳🇨 • 100% Gratuit • Zéro Enjeu Monétaire</p>
                </div>
              </div>
            </footer>
          </div>
        );
      }
    </script>
  </body>
</html>
