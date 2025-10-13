package com.example;

import java.math.BigDecimal;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class SalesCalculator {
    public enum Status {
        FULFILLED,
        PENDING,
        CANCELLED
    }

    public record Order(String region, Status status, BigDecimal total) {}

    public Map<String, BigDecimal> totalsByRegion(List<Order> orders) {
        return orders.stream()
                .filter(order -> !EnumSet.of(Status.CANCELLED).contains(order.status()))
                .collect(Collectors.toMap(Order::region, Order::total, BigDecimal::add));
    }
}
