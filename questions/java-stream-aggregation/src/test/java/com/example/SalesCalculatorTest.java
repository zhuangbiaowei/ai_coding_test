package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

class SalesCalculatorTest {

    private final SalesCalculator calculator = new SalesCalculator();

    static Stream<Arguments> scenarios() {
        return Stream.of(
                Arguments.of(
                        "ignores pending and cancelled",
                        List.of(
                                new SalesCalculator.Order("NA", SalesCalculator.Status.FULFILLED, new BigDecimal("12.50")),
                                new SalesCalculator.Order("NA", SalesCalculator.Status.PENDING, new BigDecimal("99.00")),
                                new SalesCalculator.Order("EMEA", SalesCalculator.Status.CANCELLED, new BigDecimal("20.00")),
                                new SalesCalculator.Order("EMEA", SalesCalculator.Status.FULFILLED, new BigDecimal("40.00"))),
                        Map.of("NA", new BigDecimal("12.50"), "EMEA", new BigDecimal("40.00"))
                ),
                Arguments.of(
                        "applies returns as negatives",
                        List.of(
                                new SalesCalculator.Order("APAC", SalesCalculator.Status.FULFILLED, new BigDecimal("120.00")),
                                new SalesCalculator.Order("APAC", SalesCalculator.Status.FULFILLED, new BigDecimal("-15.25")),
                                new SalesCalculator.Order("APAC", SalesCalculator.Status.FULFILLED, new BigDecimal("39.00"))),
                        Map.of("APAC", new BigDecimal("143.75"))
                ),
                Arguments.of(
                        "handles multiple regions",
                        List.of(
                                new SalesCalculator.Order("NA", SalesCalculator.Status.FULFILLED, new BigDecimal("45.00")),
                                new SalesCalculator.Order("EMEA", SalesCalculator.Status.FULFILLED, new BigDecimal("87.25")),
                                new SalesCalculator.Order("NA", SalesCalculator.Status.FULFILLED, new BigDecimal("15.00")),
                                new SalesCalculator.Order("LATAM", SalesCalculator.Status.FULFILLED, new BigDecimal("22.10"))),
                        Map.of(
                                "NA", new BigDecimal("60.00"),
                                "EMEA", new BigDecimal("87.25"),
                                "LATAM", new BigDecimal("22.10"))
                )
        );
    }

    @ParameterizedTest(name = "{0}")
    @MethodSource("scenarios")
    void totalsByRegion(String name, List<SalesCalculator.Order> orders, Map<String, BigDecimal> expected) {
        Map<String, BigDecimal> actual = calculator.totalsByRegion(orders);
        assertEquals(expected, actual);
    }
}
