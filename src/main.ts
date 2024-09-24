import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


import './bases/01-const-let'
import  './bases/02-objects'
import  './bases/03-arrays'
import  './bases/04-functions'
import  './bases/05-desestructuracion'
import  './bases/07-imp-exp'
import  './bases/08-promises'
import  './bases/09-fetch-api'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`


