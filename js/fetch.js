const boardMemberContainer = document.querySelector(".board-members");


const fetchMembers = () => {
  fetch("/../data/members.json")
    .then(res => res.json())
    .then(data => {
      console.log(data)

      data.forEach(person => {
        const member = document.createElement("div");
        member.classList.add("member");
        member.innerHTML = `
                <div class="card">
                          <img src="${person.url}" alt="Jane Smith">
                          <div class="member-info">
                            <h3>${person.name}</h3>
                            <p>${person.position}</p>
                          </div>
                        </div>
                `

        boardMemberContainer.append(member)
        
      })

    })

}

fetchMembers();
