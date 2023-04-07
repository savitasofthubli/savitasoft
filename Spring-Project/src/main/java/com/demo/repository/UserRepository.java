package com.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	
	Optional<User> findByEmail(String email);
	Optional<User> findByPhonenumber(String Phonenumber);

}
