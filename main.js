const dataBtn = document.querySelector('button1')
const namesDis =document.querySelector('names')

const baseURL = 'http https://swapi.dev/api/planets/2/'

const dataCall = ({data: residents }) => displayResidents(residents)

function clickBtn(e) {
    axios.get('http https://swapi.dev/api/planets/2/')
  .then((res) => {
      namesDis.innerHTML =''
      const residnts = res.data.residents

      for(let; i < residents.length; i++) {
          axios.get(residents[i])
          .then(res) => {
              const link = document.createElement('a')
              const namedHeading = document.createElement('h2')

              link.setAttribute('href', residents[i])
              namedHeading.textContent = res.data.namedHeading
              link.appendChild(namedHeading)
              namedSection.appendChild()
          }
      }
  }

}
dataBtn.addEventListener('click', clickBtn)
getAllResidents()