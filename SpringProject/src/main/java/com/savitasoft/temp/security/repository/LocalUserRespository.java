package com.savitasoft.temp.security.repository;

import com.savitasoft.temp.security.model.LocalUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocalUserRespository extends JpaRepository<LocalUser,Integer> {
    Optional<LocalUser> findByPhoneNumber(String PhoneNumber);
}
