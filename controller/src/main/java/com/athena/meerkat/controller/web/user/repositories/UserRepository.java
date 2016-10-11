package com.athena.meerkat.controller.web.user.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.athena.meerkat.controller.web.user.entities.User;

@Repository
@Transactional
@Component
public interface UserRepository extends JpaRepository<User, Integer> {
	//User findByUsernameOrEmail(String username, String email);
	List<User> findByUsernameContaining(String username);
	User findByUsername(String username);
}
