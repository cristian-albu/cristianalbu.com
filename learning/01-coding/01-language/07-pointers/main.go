package main

import "fmt"

func basicExample() {
	age := 30

	agePointer := &age // get the address

	fmt.Println("Value of age: ", age)
	fmt.Println("Memory adress: ", agePointer)
	fmt.Println("Value through pointer: ", *agePointer)

	*agePointer = 31

	fmt.Println("new value of age", age)
}

type User struct {
	Name   string
	Status string
}

func banUser(u User) {
	u.Status = "Banned" // this will change the status of the copy only
}

func actuallyBanUser(u *User) {
	u.Status = "Banned"
}

// value receivers (for read only)
func (u User) ReadName() {
	fmt.Println(u.Name)
}

// pointer receivers (for modifications)
func (u *User) UpdateName(newName string) {
	u.Name = newName
}

func main() {
	basicExample()

	someUsr := User{Name: "Alice", Status: "Active"}
	banUser(someUsr)

	fmt.Println(someUsr.Status) // still active

	actuallyBanUser(&someUsr)

	fmt.Println(someUsr.Status) // banned

	someUsr.ReadName()
	fmt.Println(someUsr.Name)
	someUsr.UpdateName("Alicent")
	fmt.Println(someUsr.Name)

	// var myPtr *int // myPtr is nil
	// fmt.Println(*myPtr) // CRASH! "panic: runtime error: invalid memory address or nil pointer dereference"

}
