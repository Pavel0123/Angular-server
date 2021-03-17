package register;


import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import java.io.Serializable;
import java.util.List;

@SessionScoped
public class AutManager implements Serializable {

    @Inject
    private UsersManager admin;

    private Users user;

    public boolean Login(Users tempuser) {
        if (admin.Login(tempuser)) {
            this.user = tempuser;
            System.out.println(user + " prihasen");
            return true;
        } else {
            return false;
        }

    }

    public boolean CheckLogin() {
        System.out.println(user + " test");
        return this.user != null;
    }

    public boolean CreateUser(Users tempuser) {
        if (admin.CreateUser(tempuser)) {
            return true;
        } else {
            return false;
        }
    }

    public boolean DeleteUser(Users tempuser) {
        if (admin.DeleteUser(tempuser)) {
            return true;
        } else {
            return false;
        }
    }

    public List GetAllUsers() {
        if (CheckLogin()) {
            return admin.GetAllUsers();
        } else {
            return null;
        }
    }
}
