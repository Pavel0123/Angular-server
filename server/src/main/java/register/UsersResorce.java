package register;

import javax.enterprise.context.SessionScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;


@Produces(MediaType.APPLICATION_JSON)
@Path("/users")
public class UsersResorce {

    private static List<Users> names = new ArrayList<Users>();

    @GET
    public Response getAll() {
        return Response.ok(names).build();
    }

    @POST
    public Response create(String username, String  password) {
        Users tempUser = new Users(username, password);
        if(CheckUserE(tempUser)) {
            return Response.status(Response.Status.valueOf("User exist")).build();
        } else {
            names.add(tempUser);
            return Response.ok("User created").build();
        }
    }

    @DELETE
    public Response delete(Users user) {
        if(CheckUserE(user)) {
            names.remove(user);
            return Response.ok("User deleted").build();
        } else {
            return Response.status(Response.Status.valueOf("User dont exist")).build();
        }
    }

    private boolean CheckUserE (Users user) {
        for(int i = 0; i < names.size(); i++) {
            if(names.get(i).getUsername().equals(user.getUsername())) {
                return true;
            }
        }
        return false;
    }


}
