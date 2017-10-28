import axios from 'axios'

class HouseModel {
    static all() {
        let request = axios.get("https://localhost:8080/api/houses")
        console.log(request)
        return request
    }
    // static create(house) {
    //     let request = axios.post("https://localhost:8080/houses", house)
    //     return request
    // }
    // static delete(house) {
    //     let request = axios.delete(`https://localhost:8080/houses`)
    //     return request
    // }
    // static update(houseId, houseBody) {
    //     let request = axios.put(`localhost:8080/houses/:cuid`, {
    //         body: houseBody
    //     })
    //     return request
    // }
}

export default HouseModel