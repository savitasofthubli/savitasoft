package com.savitasoft.temp.security.service;

import com.savitasoft.temp.security.model.LocalUser;
import com.savitasoft.temp.security.repository.LocalUserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LocalUserService implements UserDetailsService {
    @Autowired
    private LocalUserRespository localUserRespository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LocalUser localUser = localUserRespository.findByPhoneNumber(username).get();
        if(localUser.getPhoneNumber()!=username)
            return localUser;
        else
            throw new UsernameNotFoundException("Invalid username and password");
    }
}
