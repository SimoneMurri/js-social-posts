const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=17"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const containerPost = document.getElementById('container');

posts.forEach((post, index) => {

    let profile;

    if ( post.author.image ){
        profile = `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">`
    } else {
        profile = `<div class="profile-pic-default">
            <span>${getInitials(post.author.name)}</span>
        </div>`
    }

    containerPost.innerHTML +=
    `<div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                ${profile}
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="${post.author.name}'s post image">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <strong id="like-counter-${post.id}" data-postid="${post.id}" class="js-likes-counter">${post.likes}</strong> persone
            </div>
        </div>
    </div>
    </div>`;
});


const buttonLike = containerPost.querySelectorAll('a.like-button.js-like-button');
const counterLike = containerPost.querySelectorAll('strong.js-likes-counter');


for (let index = 0; index < buttonLike.length; index++) {

    const currentLikeButton = buttonLike[index];
    currentLikeButton.addEventListener('click', function( event ){
        event.preventDefault();

        if (currentLikeButton.classList.contains('like-button--liked')){
            currentLikeButton.classList.remove('like-button--liked');
            (containerPost.querySelectorAll('strong.js-likes-counter'))[index].innerHTML = parseInt((containerPost.querySelectorAll('strong.js-likes-counter'))[index].innerHTML, 10) - 1;
        } else {
            currentLikeButton.classList.add('like-button--liked');
            (containerPost.querySelectorAll('strong.js-likes-counter'))[index].innerHTML = parseInt((containerPost.querySelectorAll('strong.js-likes-counter'))[index].innerHTML, 10) + 1;
        }
    });
}