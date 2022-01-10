console.log('This is script.js');

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framwork: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Neha Naik',
        age: 27,
        city: 'Maharashtra',
        language: 'HTML',
        framwork: 'React',
        image: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
        name: 'Akshay Darji',
        age: 24,
        city: 'Gujarat',
        language: 'JavaScript',
        framwork: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Anjali Varma',
        age: 54,
        city: 'Odisa',
        language: 'C++',
        framwork: '.Net',
        image: 'https://randomuser.me/api/portraits/women/30.jpg'
    },
    {
        name: 'Radhesham Tiwari',
        age: 34,
        city: 'Rajasthan',
        language: 'CSS',
        framwork: 'SASS',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
]

// CV Iterator 
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCV();

// Button listner for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}' >`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Years old</li>
    <li class="list-group-item">Lives In: ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily Work On: ${currentCandidate.language}</li>
    <li class="list-group-item">With FrameWork: ${currentCandidate.framwork}</li>
  </ul>`;
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }

}