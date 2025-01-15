document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    fetchMembers();
    fetchTrainers();
});

function loadNavbar() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
}

function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

function addMemberForm() {
    const memberForm = `
        <form id="add-member-form">
            <label>Name:</label>
            <input type="text" id="member-name" required>
            <label>Email:</label>
            <input type="email" id="member-email" required>
            <button type="submit">Add Member</button>
        </form>
    `;
    document.getElementById('member-list').innerHTML = memberForm;

    document.getElementById('add-member-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addMember(document.getElementById('member-name').value, document.getElementById('member-email').value);
    });
}

function addMember(name, email) {
    db.collection("members").add({
        name: name,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("Member added successfully!");
        fetchMembers();
    }).catch(error => {
        console.error("Error adding member: ", error);
    });
}

function fetchMembers() {
    db.collection("members").orderBy("createdAt").get().then(snapshot => {
        let membersHTML = '';
        snapshot.forEach(doc => {
            const member = doc.data();
            membersHTML += `
                <div class="member-card">
                    <p>Name: ${member.name}</p>
                    <p>Email: ${member.email}</p>
                </div>
            `;
        });
        document.getElementById('member-list').innerHTML = membersHTML;
    }).catch(error => {
        console.error("Error fetching members: ", error);
    });
}

function fetchTrainers() {
    // Similar logic to fetch and display trainers
}
