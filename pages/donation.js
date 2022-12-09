let donorPeople = 16;
let basaneungMember = 10; 

for (let i=0; i<donorPeople; i++){
  $('.donors').append(`
  <div class="person">
    <img src="../source/donation/donors/donor${i}.svg" alt="">
  </div>`)
}

for (let i=0; i<basaneungMember; i++){
  $('.members').append(`
  <div class="person">
    <img src="../source/donation/donors/member${i}.svg" alt="">
  </div>`)
}