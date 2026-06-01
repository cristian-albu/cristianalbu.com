package main

import (
	"bufio"
	"embed"
	"fmt"
	"log"
	"os"
)

//go:embed example2.txt
var embeddedFiles embed.FS

func smallFileExample() {
	data := []byte("Hello, Go File System!\n")
	err := os.WriteFile("example.txt", data, 0644) // 0644 are standard file permissions
	if err != nil {
		log.Fatal(err)
	}

	readData, err := os.ReadFile("example.txt")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Print(string(readData))

	err = os.Remove("example.txt")
	if err != nil {
		log.Fatal(err)
	}
}

func largeFileWrite() {
	file, err := os.Create("large_output.txt")
	if err != nil {
		log.Fatal(err)
	}

	// this will run at the end of the func
	defer file.Close()

	// Wrap the file in a buffered writer
	// By default, this creates a 4KB memory buffer.
	writer := bufio.NewWriter(file)

	totalLines := 1_000_000

	for i := 1; i <= totalLines; i++ {
		line := fmt.Sprintf("This is log entry number %d\n", i)

		_, err := writer.WriteString(line)
		if err != nil {
			log.Fatal("Error writing to buffer:", err)
		}
	}
	// Because bufio waits for the buffer to be full before writing to disk,
	// there will almost certainly be leftover data sitting in memory when
	// your loop finishes. Flush() forces any remaining data out to the disk.

	err = writer.Flush()
	if err != nil {
		log.Fatal("Error flushing buffer to disk", err)
	}

	fmt.Println("Successfully wrote 1 million lines!")

}

func largeFileRead() {
	file, err := os.Open("large_output.txt")
	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	counter := 0

	for scanner.Scan() {

		// just to not print 1_000_000 lines
		counter += 1
		if counter <= 100 {
			fmt.Println(scanner.Text())
		}

	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

}

func largeFileDelete() {

	filename := "large_output.txt"

	err := os.Remove(filename)
	if err != nil {
		if os.IsNotExist(err) {
			fmt.Println("File doesn't exist")
		} else {
			log.Fatal("Encountered an unexpected error: ", err)
		}
	}

	fmt.Println("File deleted successfully!")
}

func largeFiles() {
	largeFileWrite()
	largeFileRead()
	largeFileDelete()
}

func embeddedExample() {
	// We read the file from the embedded file system, not the hard drive!
	data, err := embeddedFiles.ReadFile("example2.txt")

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Loaded from inside the binary: ", string(data))
}

func main() {
	smallFileExample()
	largeFiles()
	embeddedExample()
}
