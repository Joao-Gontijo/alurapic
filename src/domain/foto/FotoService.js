export default class FotoService{

    constructor(resource){
        this._resource = resource('v1/fotos{/id}');
    }

    lista(){
        return this._resource
            .query()
            .then(res => res.json());
    }

    cadastrada(foto){

    }

    apaga(id){

    }
}