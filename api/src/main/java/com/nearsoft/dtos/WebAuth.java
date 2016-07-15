package com.nearsoft.dtos;

import java.util.Objects;

/**
 * Created by clopez on 7/12/16.
 */
public class WebAuth {

    private String email;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String toString() {
        return "WebAuth{ " + this.email + "," + Objects.hashCode(this.password) +"}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WebAuth webAuth = (WebAuth) o;

        if (email != null ? !email.equals(webAuth.email) : webAuth.email != null) return false;
        return password != null ? password.equals(webAuth.password) : webAuth.password == null;
    }

    @Override
    public int hashCode() {
        int result = email != null ? email.hashCode() : 0;
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }
}
