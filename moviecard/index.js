const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBlNzFlOWUxYjc5YzkwNjEyZjM2ODc4MGNhYzA1NCIsInN1YiI6IjY0Nzg1OWEzOTM4MjhlMDBmOWQ1ZTZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FFmowIUcQETJJANfe7YSu9-3fHpZG8RH9CMCKbuJtgg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  // .then((data) => {
  //   const list = data.d;

  //   list.map((item) => {
  //     console.log(item);
  //   });
  // })

  .then((data) => {
    // console.log(data)
    data.results.forEach((movie) => {
      let title = movie["title"];
      let post_path = movie["poster_path"];
      let overview = movie["overview"];
      let popularity = movie["popularity"];

      let temp_html = `<div class="col">
                                    <div class="card h-100">
                                        <img src="${poster_path}"
                                             class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">${title}</h5>
                                            <p class="card-text">${overview}</p>
                                            <p class="popularity">${popularity}</p>
                                        </div>
                                    </div>
                                </div>`;

      $("#cards").append(temp_html);
    });
  })
  .catch((err) => console.error(err));

// const cardContainer = document.createElement("div");
// cardContainer.classList.add("card");

// const img = document.createElement("img");
// img.src = `https://image.tmdb.org/t/p/w500/${poster}`;
// img.classList.add("card-img-top");
// img.alt = "...";

// const cardBody = document.createElement("div");
// cardBody.classList.add("card-body");

// const titleElement = document.createElement("h5");
// titleElement.classList.add("card-title");
// titleElement.textContent = `title: ${title}`;

// const overviewElement = document.createElement("p");
// overviewElement.classList.add("card-overview");
// overviewElement.textContent = `overview(내용요약): ${overview}`;

// const posterElement = document.createElement("p");
// posterElement.classList.add("card_img");
// posterElement.textContent = `poster_path(포스터 이미지 경로): ${poster}`;

// const pointElement = document.createElement("p");
// pointElement.classList.add("card_point");
// pointElement.textContent = `vote_average(평점): ${point}`;

// cardBody.appendChild(titleElement);
// cardBody.appendChild(overviewElement);
// cardBody.appendChild(posterElement);
// cardBody.appendChild(pointElement);

// cardContainer.appendChild(img);
// cardContainer.appendChild(cardBody);

// // 어떤 부모 요소에 추가할지 선택한 뒤 추가합니다.
// const parentElement = document.querySelector(".parent-element");
// parentElement.appendChild(cardContainer);
