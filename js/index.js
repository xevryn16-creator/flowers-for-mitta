const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')
const text = `aku punya sesuatu kecil buat kamu`.split('')

title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

const subText = `buka pelan-pelan ya 🤍`.split('')
for (let index = 0; index < subText.length; index++) {
  if (subText[index] !== ' ') {
    subtitle.innerHTML += `<span>${subText[index]}</span>`
  } else {
    subtitle.innerHTML += `<span style='width: 0.6rem'></span>`
  }
}

const subElements = document.querySelectorAll('.subtitle span');
subElements.forEach((element, i) => {
  const delay = 3 + (i * 0.05);
  element.style.animationDelay = `${delay}s`;
});