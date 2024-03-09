const boardMemberContainer = document.querySelector(".board-members");


const fetchMembers = () => {
  fetch("./data/prarambha23.json")
    .then(res => res.json())
    .then(data => {
      console.log(data)

      data.forEach(picture => {
        const member = document.createElement("div");
        member.classList.add("member");
        member.addEventListener('click',(e) => {
          showImage(picture.imgUrl)
        })
        member.innerHTML = `
                <div class="card">
                          <img src="${picture.imgUrl}" alt="Prarambha23">
                </div>
                `

        boardMemberContainer.append(member)
        
      })

    })

}

fetchMembers();