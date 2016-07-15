package com.nearsoft.repository;


import com.nearsoft.entity.Payment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PaymentRepository extends CrudRepository<Payment, Long> {

    List<Payment> findAll();

    List<Payment> findByDescription(String description);
}