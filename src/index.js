class SwapyService {
	_apiBase = 'https://swapi.dev/api';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`'Could not fetch'===> ${this._apiBase}${url}  received ===> ${res.status}`);
		}

		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	}

	getPerson(id) {
		return this.getResource(`/people/${id}`);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	}

	getPlanet(id) {
		return this.getResource(`/planets/${id}`);
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}

	getStarship(id) {
		return this.getResource(`/starships/${id}`);
	}
}

//Test

const swapi = new SwapyService();

swapi.getAllPeople().then((body) => {
	const names = body.map((person) => person.name);
	console.log(body);
	console.log(names);
});

swapi.getPerson(3).then((body) => {
	console.log(body.name);
});

swapi.getAllPlanets().then((body) => {
	const names = body.map((planet) => planet.name);
	console.log(body);
	console.log(names);
});

swapi.getPlanet(3).then((body) => {
	console.log(body.name);
});

swapi.getAllStarships().then((body) => {
	const names = body.map((starship) => starship.name);
	console.log(body);
	console.log(names);
});

swapi.getStarship(3).then((body) => {
	console.log(body.name);
});
