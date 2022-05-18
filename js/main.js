//------ FUNCTION ------//

//------ MAIN ------//
const posts = [
    {
        id : 1,
        content : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media : "https://unsplash.it/600/300?image=171",
        author : {
            name : "Phil Mangione",
            image : "https://unsplash.it/300/300?image=15"
        },
        likes : 80,
        created : "2021-06-25"
    },
    {
        id : 2,
        content : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media : "https://unsplash.it/600/400?image=112",
        author : {
            name : "Sofia Perlari",
            image : "https://unsplash.it/300/300?image=10"
        },
        likes : 120,
        created : "2021-09-03"
    },
    {
        id : 3,
        content : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media : "https://unsplash.it/600/400?image=234",
        author : {
            name : "Chiara Passaro",
            image : "https://unsplash.it/300/300?image=20"
        },
        likes : 78,
        created : "2021-05-15"
    },
    {
        id : 4,
        content : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media : "https://unsplash.it/600/400?image=24",
        author : {
            name : "Luca Formicola",
            image : null
        },
        likes : 56,
        created : "2021-04-03"
    },
    {
        id : 5,
        content : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media : "https://unsplash.it/600/400?image=534",
        author : {
            name : "Alessandro Sainato",
            image : "https://unsplash.it/300/300?image=29"
        },
        likes : 95,
        created : "2021-03-05"
    }
];
console.log(posts);

const postListHTML = document.querySelector("#container");
const templateHTML = document.querySelector("#template-post").content;
const postLiked = [];

for (let i = 0 ; i < posts.length ; i++) {
    const post = templateHTML.cloneNode(true);
    // scorporare l'oggetto nei suoi componenti più piccoli con questa proprietà
    const {id, content, media, author, likes, created} = posts[i];
    if (author.image !== null) {
        post.querySelector(".profile-pic").src = author.image;
        post.querySelector(".profile-pic").alt = author.name;
    }
    post.querySelector(".profile-pic").src = author.image;
    post.querySelector(".profile-pic").alt = author.name;
    post.querySelector(".post-meta__author").innerHTML = author.name;
    post.querySelector(".post-meta__time").innerHTML = created;
    post.querySelector(".post__text").innerHTML = content;
    post.querySelector(".post__image img").src = media;
    post.querySelector(".post__image img").alt = `Image post ${id}`;
    post.querySelector(".js-like-button").dataset.postid = id;
    post.querySelector(".js-likes-counter").innerHTML = likes;
    post.querySelector(".js-likes-counter").id = `like-counter-${id}`;
    post.querySelector(".js-like-button").addEventListener("click",
        function (e) {
            e.preventDefault();
            const id = this.dataset.postid;
            if (!postLiked.includes(id)) {
                this.classList.add("like-button--liked");
                document.querySelector(`#like-counter-${id}`).innerHTML++;
                postLiked.push(id);
            }
        }
    );
    console.log(post);
    postListHTML.append(post);
}

// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF)
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone