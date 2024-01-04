

const text = document.querySelector('.text');

// Wrap every letter in <span> then join them
const spans = text.innerText
                            .split('')
                            .map((letter, index) => {
                                return `<span>${letter}</span>`
                            })
                            .join('');

text.innerHTML = spans;                            

