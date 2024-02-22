import { makeObservable, observable, action, computed, reaction } from "mobx";
class ArepaStore {
    constructor() {
        makeObservable(this, {
            arepas: observable,
            agregarArepa: action,
            numeroArepas: computed,
            borrar: action,
        });
        this.arepas = [];
        const localArepas = localStorage.getItem('arepas');
        if (localArepas) {
            this.arepas = JSON.parse(localArepas);
        }
    };
    arepas = [
        {
            nombre: "Arepa con Queso",
            foto: "https://i.ytimg.com/vi/AJu0gRFsBrs/maxresdefault.jpg"
        }
    ];

    agregarArepa = (arepa) => {
        this.arepas.push(arepa);
    };

    borrar = () => {
        this.arepas=[];
    
}

    get numeroArepas(){
    return this.arepas.length;
}
}

const arepaStore = new ArepaStore();

reaction(
    () => JSON.stringify(arepaStore.arepas),
    (arepasStr) => {
        localStorage.setItem("arepas", arepasStr);
    }
)
export default arepaStore;