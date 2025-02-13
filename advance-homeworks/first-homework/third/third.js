const btn = document.getElementById(`btn`);
const data = document.getElementById(`data`);
const body = document.getElementById(`body`);
const appi = `https://dummyjson.com/products?limit=10`;

btn.addEventListener(`click`, function () {
  fetch(appi)
    .then(function (response) {
      const parsedAppi = response.json();

      return parsedAppi;
    })
    .then(function (details) {
      const products = details.products;
      for (const product of products) {
        const div = document.createElement(`div`);

        div.style.border = `5px solid black`;
        div.style.borderRadius = `15px`;
        div.style.backgroundColor = `grey`;
        div.style.padding = `10px`;

        const price = document.createElement(`h3`);
        price.textContent = `${product.price} $`;
        price.style.fontSize = `3rem`;
        price.style.color = `red`;
        div.appendChild(price);

        const discount = document.createElement(`h3`);
        discount.textContent = `Promo prices for Black friday with ${product.discountPercentage} % off. Don't miss the opportunity`;
        div.appendChild(discount);

        const commentsDiv = document.createElement(`div`);
        const smh = document.createElement(`h4`);
        smh.textContent = `Most recent comments for this product:`;
        commentsDiv.appendChild(smh);


       const qrDiv = document.createElement(`div`);
       
        
        for (const review of product.reviews) {
          const comment = document.createElement(`p`);
          comment.textContent = review.comment;
          commentsDiv.appendChild(comment);
        }

        div.appendChild(commentsDiv);

        const image = document.createElement(`img`);
        image.style.width = `100%`;

        image.src = product.thumbnail;
        div.appendChild(image);

        const title = document.createElement(`h1`);
        title.textContent = product.title;
        div.appendChild(title);

        const paragraph = document.createElement(`p`);
        paragraph.textContent = product.description;
        div.appendChild(paragraph);

        data.appendChild(div);
      }
    });
});
