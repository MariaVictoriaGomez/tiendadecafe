import Routes from "./routes.js";
import UsersControllers from "../controllers/users.controllers.js"



export default class UsersRoutes extends Routes{

    constructor(){
        super()
        this.controller = new UsersControllers()
        this.getRoutes()
    }

    getRoutes(){
        this.router
        .get('/', this.controller.getUsers)
        .get('/user', this.controller.getUserbyId)
        .post('/', this.controller.addUsers)
        .put('/', this.controller.modifyUser)
        .delete('/:id', this.controller.deleteUser )
    }
}