
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('buat kamu, mitta. 🤍').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        setTimeout(showMessage, 800);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  function showMessage() {
    const messageEl = document.getElementById('message');
    messageEl.textContent = 'bunganya mungkin cuma di layar, tapi yang ngasih beneran sayang kamu.';
    messageEl.classList.add('message--visible');
    setTimeout(showOurStory, 1800);
  }

  function showOurStory() {
    document.getElementById('ourStory').classList.add('our-story--visible');
  }
};