// Interface pour le personnage principal
interface MainCharacter {
    getFullName(): string;
}

// Implémentation de l'interface MainCharacter
class MainCharacterImpl implements MainCharacter {
    private nom: string;
    private prenom: string;

    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }

    getFullName(): string {
        return `${this.prenom} ${this.nom}`;
    }
}

// Classe abstraite pour représenter un manga
abstract class Manga {
    protected titre: string;
    protected mainCharacterPrincipal: MainCharacter;

    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        this.titre = titre;
        this.mainCharacterPrincipal = mainCharacterPrincipal;
    }

    getTitre(): string {
        return this.titre;
    }

    getPersonnagePrincipal(): MainCharacter {
        return this.mainCharacterPrincipal;
    }

    getStringType(): string {
        return "manga";
    }

    getDescription(): string {
        return `Ce ${this.getStringType()} s'appelle ${this.titre} et son personnage principal est ${this.mainCharacterPrincipal.getFullName()}`;
    }
}

// Classe Shojo qui hérite de Manga
class Shojo extends Manga {
    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        super(titre, mainCharacterPrincipal);
    }

    getStringType(): string {
        return "shojo";
    }
}

// Classe Shonen qui hérite de Manga
class Shonen extends Manga {
    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        super(titre, mainCharacterPrincipal);
    }

    getStringType(): string {
        return "shonen";
    }
}

// Enum pour le type de manga
enum TypeManga {
    SHOJO = "SHOJO",
    SHONEN = "SHONEN"
}

// Classe MangaFactory pour créer les mangas
class MangaFactory {
    createManga(type: TypeManga, titre: string, mainCharacter: MainCharacter): Manga {
        switch (type) {
            case TypeManga.SHONEN:
                return new Shonen(titre, mainCharacter);
            case TypeManga.SHOJO:
                return new Shojo(titre, mainCharacter);
            default:
                throw new Error("Type de manga non supporté");
        }
    }
}

// Décorateur pour gérer deux personnages principaux
class TwoMainCharacter implements MainCharacter {
    private firstCharacter: MainCharacter;
    private secondNom: string;
    private secondPrenom: string;

    constructor(firstCharacter: MainCharacter, secondNom: string, secondPrenom: string) {
        this.firstCharacter = firstCharacter;
        this.secondNom = secondNom;
        this.secondPrenom = secondPrenom;
    }

    getFullName(): string {
        return `${this.firstCharacter.getFullName()} ainsi que ${this.secondPrenom} ${this.secondNom}`;
    }
}

// Exemple d'utilisation
const mangaFactory = new MangaFactory();

// Création des personnages principaux
const nana1 = new MainCharacterImpl("Ōsaki", "Nana");
const mainCharacter = new TwoMainCharacter(nana1, "Komatsu", "Nana");

// Création du manga avec deux personnages principaux
const nana = mangaFactory.createManga(TypeManga.SHOJO, "Nana", mainCharacter);

console.log(nana.getDescription());
// Ce shojo s'appelle Nana et son personnage principal est Nana Ōsaki ainsi que Nana Komatsu






