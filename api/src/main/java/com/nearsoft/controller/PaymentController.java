package com.nearsoft.controller;

import com.nearsoft.dtos.PaymentDto;
import com.nearsoft.entity.Payment;
import com.nearsoft.repository.PaymentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaymentController {

    Logger logger = LoggerFactory.getLogger(PaymentController.class);

    @Autowired
    private PaymentRepository paymentRepo;

    @CrossOrigin
    @RequestMapping(value ="/api/payment/add", method = RequestMethod.POST)
    public ResponseEntity<Payment> addPayment(@RequestBody final PaymentDto newPayment) {

        logger.info("Payment received:" + newPayment);

        Payment payment = new Payment();

        payment.setAmount( newPayment.getAmount() );
        payment.setDescription( newPayment.getDescription() );


        paymentRepo.save( payment );

        logger.info("> Payment added:" + payment);

        return new ResponseEntity<>(payment, HttpStatus.OK);
    }


    @CrossOrigin
    @RequestMapping(value="/api/payment/all", method = RequestMethod.GET)
    public ResponseEntity<List<Payment>> getAllPayments( ) {

        return new ResponseEntity<>( paymentRepo.findAll(), HttpStatus.OK );
    }
}
