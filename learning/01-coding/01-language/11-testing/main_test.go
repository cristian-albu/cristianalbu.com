package main

import "testing"

func TestAdd(t *testing.T) {
	c := Calculator{}
	result := c.Add(2, 3)

	expected := 5

	if result != expected {
		t.Errorf("Add(2, 3) = %d; expected %d", result, expected)
	}
}

func TestAddTableDriven(t *testing.T) {
	tests := []struct {
		name     string
		a, b     int
		expected int
	}{
		{"positive numbers", 2, 3, 5},
		{"negative numbers", -2, -3, -5},
		{"mixed number", -2, 3, 1},
		{"zeros", 0, 0, 0},
	}

	c := Calculator{}

	for _, tc := range tests {
		result := c.Add(tc.a, tc.b)
		if result != tc.expected {
			t.Errorf("expected %d, got %d", tc.expected, result)
		}
	}
}

func Benchmark(b *testing.B) {
	c := Calculator{}
	for i := 0; i < b.N; i++ {
		c.Add(2, 3)
	}
}

func TestAddSuite(t *testing.T) {

	c := Calculator{}

	t.Run("Add", func(t *testing.T) {
		result := c.Add(2, 5)
		if result != 7 {
			t.Errorf("expected 7, got %d", result)
		}
	})

	t.Run("Subtract", func(t *testing.T) {
		result := c.Subtract(5, 3)
		if result != 2 {
			t.Errorf("expected 2, got %d", result)
		}
	})

}
