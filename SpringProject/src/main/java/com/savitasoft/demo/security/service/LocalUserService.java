package com.savitasoft.demo.security.service;

import com.savitasoft.demo.security.model.LocalUser;
import com.savitasoft.demo.security.repository.LocalUserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LocalUserService implements UserDetailsService {
    @Autowired
    private LocalUserRespository localUserRespository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final LocalUser localUser = localUserRespository.findByPhoneNumber(username).get();
        if(localUser.getPhoneNumber()!=username)
            return localUser;
        else
            throw new UsernameNotFoundException("Invalid username and password");
    }
}
