# Titre level 1
## Titre level 2
### Titre level 3

Un exemple **de code** encore du gras ici _dessous_ :

``` ts Titre de l'exemple de code
export class MdTextComponent extends MdEntityBaseComponent<MdText> {
    private field:string;

    public doSomething(text:string){
        this.field = "ok";
    }
}
```

Ensuite on va mettre un peu de HTML :

``` html
<header>Salut</header>
<div class="container">
    <span>Test</span>
</div>
```

# Exemples

Maintenant une quote :
> Je suis une quote !

> Je suis très très __longue quote__, __très longue__, il me faut du __texte__, je ne sais pas quoi écrire. Donc j'écris des bêtises, encore et ~~encore et encore~~ et encore et encore et encore. Salut ça va ? Oui, je suis toujours dans une quote. En vrai j'aurai du mettre un Lorem Ipsum, mais c'est trop tard j'ai déjà écrit beaucoup trop de texte... C'est comme l'ascenseur, une fois que tu as as commencé à l'attendre....



# Liste

- Item 1
 - Item 1.1
 - Item 1.2
  - _Item 1.2.1_
- Item 2
 - Item 2.1
 - ~~Item 2.2~~
  - Item 2.2.1
  - **Item 2.2.2**
- Item 3