import axios from 'axios'

class HouseModel {
    static all() {
        let request = axios.get("http://localhost:8000/api/houses")
        console.log(request)
        return request
    }
    static create(house) {
        console.log(house)
        let request = axios.post("http://localhost:8000/api/houses", house)
        return request
    }
    static delete(houseId) {
        let request = axios.delete('http://localhost:8000/api/houses/' +houseId)
        return request
    }
    static update(houseId, houseBody) {
        let request = axios.put('http://localhost:8000/api/houses/:cuid'+ houseId,  {
            body: houseBody
        })
        return request
    }
     static show(houseId) {
        console.log(houseId)
        let request = axios.get(`http://localhost:8000/api/houses/`+ houseId)
        return request
    }
}

export default HouseModel