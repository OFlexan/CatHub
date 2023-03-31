var posts = [
  {
    id: "hot_cat_bathing_with_boyfriend_went_wrong",
    thumbnail: "https://e1.nmcdn.io/anicira/wp-content/uploads/2021/06/Website-crop.png/v:1-width:600-height:411-fit:cover/Website-crop.png?signature=988f75d9",
    title: "Hot cat bathing with boyfriend *went wrong*",
    stats: "fatcat69 - 8.4K views",
    video: {
      source: "https://external-preview.redd.it/ogPEwQbUy7nk83o3AFDcoozBeKkrjIslRwneit_7Zx4.gif?format=mp4&v=enabled&s=e53e0b58160a6ab53d997dc0a161858e8cb34674",
      comments: [
        {
          user: {
            image: "https://i.pinimg.com/564x/9f/aa/a1/9faaa1fedc94c355a4256ba6207c7714.jpg",
            name: "cutiecat2"
          },
          content: "This video is purrfect!"
        },
        {
          user: {
            image: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-34182,msid-93429238/international-cat-day-2022-all-you-need-to-know-about-date-significance-history.jpg",
            name: "slleep"
          },
          content: "mmmmmm... so hot ★_★"
        }
      ]
    }
  },
  {
    id: "black_vampire_cat_tops_you_what_happens_next_will_shock_you",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WZITgG8lWfHPHtLOGDQXSnfowTrUxoLwgVuLnHYHQ6gF4V-CngMGXsKL2OUvGGepWdw&usqp=CAU",
    title: "Black vampire cat tops you~ What happens next will SHOCK you!",
    stats: "qwertycat - 5.2M views",
    verified: true,
    video: {
      source: "/database/black_vampire_cat_tops_you_what_happens_next_will_shock_you.mp4",
      comments: []
    }
  },
  {
    id: "grumpy_cat_agrees_to_owo_will_make_you_meow",
    thumbnail: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2015_25/1082591/150618-cat.jpg",
    title: "Grumpy cat agrees to... OwO (WILL MAKE YOU MEOW!)",
    stats: "kitty_uwu - 244.9K views",
    video: {
      source: "/database/grumpy_cat_agrees_to_owo_will_make_you_meow.mp4",
      comments: []
    }
  },
  {
    id: "how_to_scratch_episode_3",
    thumbnail: "https://uploads.scratch.mit.edu/users/avatars/15883188.png",
    title: "How to scratch! (Episode 3)",
    stats: "scratchie - 76.2K views",
    video: {
      source: "/database/how_to_scratch_episode_3.mp4",
      comments: []
    }
  },
  {
    id: "pov_cute_feline_licks_your_paws",
    thumbnail: "https://static.onecms.io/wp-content/uploads/sites/47/2020/06/27/striped-cat-playing-flower-552781357-2000.jpg",
    title: "POV: Cute feline licks your paws",
    stats: "qwertycat - 2.4M views",
    verified: true,
    video: {
      source: "/database/pov_cute_feline_licks_your_paws.mp4",
      comments: []
    }
  },
  {
    id: "how_to_tame_a_cat",
    thumbnail: "https://minecrafthowto.com/images/fb-how-to-tame-a-cat-in-minecraft.png",
    title: "How To Tame a Cat",
    stats: "scratchie - 25.6K views",
    video: {
      source: "/database/how_to_tame_a_cat.mp4",
      comments: []
    }
  },
  {
    id: "catto_loves_bread_bread_kink",
    thumbnail: "https://imageserver.petsbest.com/marketing/blog/catnip-effects-on-cats.jpg",
    title: "Catto LOVES bread! (BREAD KINK)",
    stats: "dongleqat - 2.1M views",
    video: {
      source: "/database/cat-loves-bread-bread-kink.mp4",
      comments: []
    }
  }
];

exports.handler = async function(event, context) {
  if (event.queryStringParameters.id) {
    for (var i = 0; i < posts.length; i++) {
      if (event.queryStringParameters.intermediate == "allow" && Math.floor(Math.random() * 4) == 2) return {
        statusCode: 200,
        body: JSON.stringify({intermediate:true})
      };
      if (posts[i].id == event.queryStringParameters.id) return {
        statusCode: 200,
        body: JSON.stringify(posts[i])
      }
    }
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Resource not found"
      })
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  }
}
