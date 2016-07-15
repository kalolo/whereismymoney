package com.nearsoft.dtos;


public class PaymentDto {

    private Float amount;
    private String description;

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString(){
        return String.format(
                "PaymentDto{amount=%f, description=%s}", amount,description
        );

    }
}