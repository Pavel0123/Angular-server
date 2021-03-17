package register;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UsersManager {

    private static List<Users> names = new ArrayList<Users>();


    public boolean CheckUser(Users user) {
        for (int i = 0; i < names.size(); i++) {
            if (names.get(i).getUsername().equals(user.getUsername())) {
                return true;
            }
        }
        return false;
    }

    public boolean Login(Users user) {
        for (int i = 0; i < names.size(); i++) {
            if (names.get(i).getUsername().equals(user.getUsername()) && names.get(i).getPassword().equals(user.getPassword())) {
                return true;
            }
        }
        return false;
    }

    public boolean CreateUser(Users user) {
        if (CheckUser(user)) {
            return false;
        } else {
            names.add(user);
            return true;
        }
    }

    public boolean DeleteUser(Users user) {
        if (CheckUser(user)) {
            names.remove(user);
            return true;
        } else {
            return false;
        }
    }

    public List GetAllUsers()   {
            return names;
    }
}
