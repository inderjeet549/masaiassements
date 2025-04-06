const firebaseConfig = {
  apiKey: "AIzaSyBc0dK8i10rHktJ2Oq7uHhBOw-z-5BiGGQ",
  authDomain: "massi-assessment.firebaseapp.com",
  databaseURL: "https://massi-assessment-default-rtdb.firebaseio.com",
  projectId: "massi-assessment",
  storageBucket: "massi-assessment.firebasestorage.app",
  messagingSenderId: "276722086538",
  appId: "1:276722086538:web:ada7102c941aaedfd5f373",
  measurementId: "G-HZEH0VX5M5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const novelList = document.getElementById('novelList');
const searchInput = document.getElementById('searchInput');
const yearFilter = document.getElementById('yearFilter');
const sortPrice = document.getElementById('sortPrice');
async function fetchNovels() {
  let query = db.collection('novels');
  const selectedYear = yearFilter.value;
  const selectedSort = sortPrice.value;
  const searchText = searchInput.value.toLowerCase();
  if (selectedYear) {
    query = query.where('release_year', '==', parseInt(selectedYear));
  }
  if (selectedSort === 'asc') {
    query = query.orderBy('price', 'asc');
  } else if (selectedSort === 'desc') {
    query = query.orderBy('price', 'desc');
  }
  const snapshot = await query.get();
  let novels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  if (searchText) {
    novels = novels.filter(novel =>
      novel.title.toLowerCase().includes(searchText) ||
      novel.author.toLowerCase().includes(searchText)
    );
  }
  renderNovels(novels);
}
function renderNovels(novels) {
  novelList.innerHTML = '';
  novels.forEach(novel => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${novel.title}</td>
      <td>${novel.author}</td>
      <td>${novel.price.toFixed(2)}</td>
      <td>${novel.release_year}</td>
      <td>${novel.genre}</td>
    `;
    novelList.appendChild(row);
  });
}
searchInput.addEventListener('input', fetchNovels);
yearFilter.addEventListener('change', fetchNovels);
sortPrice.addEventListener('change', fetchNovels);
fetchNovels();
