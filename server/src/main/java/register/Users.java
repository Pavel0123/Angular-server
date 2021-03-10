package register;

import org.graalvm.compiler.lir.LIRInstruction;

import javax.enterprise.context.SessionScoped;


public class Users {
    private String username;
    private String password;

    public Users(String username, String password) {
        this.username = username;
        this.password = password;
    }


    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
