

const text = document.querySelector('.text');

// Wrap every letter in <span> then join them
const spans = text.innerText
                            .split('')
                            .map((letter, index) => {
                                return `<span style="transition-delay:${index * 30}ms; filter: hue-rotate(${index * 30}deg)">${letter}</span>`
                            })
                            .join('');

text.innerHTML = spans;                            

