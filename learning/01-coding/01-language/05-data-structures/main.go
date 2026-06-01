package main

import "fmt"

func main() {

	// arrays
	var scores [5]int

	scores[0] = 4

	colors := [3]string{"red", "green", "blue"} // [size]type{contents}

	fmt.Println(scores)
	fmt.Println(colors)

	// slices
	nums := []int{10, 20, 30}     // []type{contents}
	names := make([]string, 0, 5) // []type, length, capacity

	names = append(names, "Alice")
	names = append(names, "Bob")
	names = append(names, "John")

	// delete from slice while preserving order

	names = append(names[:1], names[1+1:]...) // remove bob

	// NOTE: Works with primitives but deleting from the slices isnt actually deleting, just moving the "window".
	// With pointers it causes memory leaks

	fmt.Println(nums)
	fmt.Println(names)

	// maps
	ages := make(map[string]int) //map[key type]value type
	ages["Alice"] = 30
	ages["Bob"] = 25

	cars := map[string]string{
		"Mazda": "japanese",
		"BMW":   "German",
	}

	fmt.Println(cars)

	delete(ages, "Bob")

	// Structs

	type User struct {
		ID       int
		Username string
		isActive bool
	}

	admin := User{
		ID:       1,
		Username: "Chief",
		isActive: true,
	}

	fmt.Printf("%#v\n", admin)

}
