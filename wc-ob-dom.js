// const container = document.getElementById('container')
const termInput = document.getElementById('term')
const title = document.getElementById("title")
const aim = document.getElementById("name")

title.textContent= `${"Total Numbers:"}` + countriesobj.length 
const createContent = ({name, region, languages, flag}) =>{
		return(`<div> 
			<div>
				<span>${name}</span>
				<span>${region}</span>
				<span>${languages}</span>

			</div>
			<div>
				<img src = '${flag}' />
			</div>
			</div>`)
}
const createCountriesUI = (arr)=>{
	let content = ''
	for (const country of arr){
		content += createContent(country)
	}
	container.innerHTML = content
}


createCountriesUI(countriesobj)
termInput.addEventListener('input', (e) => {
	filteredCountries = countriesobj.filter(
		({name,region,languages})=> {
			// console.log(capital)
			return(
				name.toLowerCase().includes(e.target.value.toLowerCase())||
				region.toLowerCase().includes(e.target.value.toLowerCase()) ||
				languages.join(',').toLowerCase().includes(e.target.value.toLowerCase())
			);
		}
	)
	container.innerHTML = ''
	createCountriesUI(filteredCountries)
})
function show(){
	container.innerHTML = nam.textContent
	createCountriesUI(filteredCountries)
}