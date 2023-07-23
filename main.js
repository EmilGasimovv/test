// HTML elemanlarına referanslar alındı
let book_id = document.getElementById('id');
let book_author = document.getElementById('muellif');
let book_name = document.getElementById('kitab');
let book_price = document.getElementById('qiymet');
let book_quantity = document.getElementById('miqdar');

let submit = document.getElementById('submit');
let btn = document.getElementById('btn');
let pr = document.getElementById('parag');

submit.addEventListener('click', function(e) {
  e.preventDefault(); // Etkinlik için varsayılan davranışı engellemek için "()" eklenmelidir.

  // Göndermek istediğiniz verileri alın
  let dataToSend = {
    id: book_id.value, // input alanının değerini almalısınız (book_id.value)
    author: book_author.value,
    title: book_name.value,
    price: book_price.value,
    quantity: book_quantity.value
  };

  // Verileri API'ye gönderin
  fetch("http://192.168.0.105:8080/kitab/post", {
    method: "POST",
    body: JSON.stringify(dataToSend), // Göndermek istediğiniz veriyi JSON formatına dönüştürüp göndermelisiniz
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); // API'den gelen yanıtı konsolda gösterin
  })
  .catch(function(error) {
    console.error('Hata:', error); // Hataları konsolda gösterin
  });
});

btn.addEventListener('click', () => {
  fetch("http://localhost:8080/kitab", {
    method: "GET"
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
    pr.innerHTML = JSON.stringify(data); // API'den gelen veriyi paragraf içine yerleştirin
    console.log(data); // API'den gelen veriyi konsolda gösterin
  })
  .catch(function(error) {
    console.error('Hata:', error); // Hataları konsolda gösterin
  });
});

