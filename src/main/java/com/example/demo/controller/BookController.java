package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3030")
public class BookController {

    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private PythonRecommendationClient pythonRecommendationClient;

    @PostMapping("/recommend")
    public ResponseEntity<?> getRecommendedBooksPost(@RequestBody RecommendationRequest request) {
        return getRecommendedBooks(request);
    }

    @GetMapping("/recommend")
    public ResponseEntity<?> getRecommendedBooksGet(
            @RequestParam String gender,
            @RequestParam int patron_type,
            @RequestParam int birthdate,
            @RequestParam String department) {

        logger.info("GET request received with params - gender: {}, patron_type: {}, birthdate: {}, department: {}", gender, patron_type, birthdate, department);


        RecommendationRequest request = new RecommendationRequest();
        request.setGender(gender);
        request.setPatronType(patron_type);
        request.setBirthdate(birthdate);
        request.setDepartment(department);

        return getRecommendedBooks(request);
    }

    private ResponseEntity<?> getRecommendedBooks(RecommendationRequest request) {
        try {
            logger.info("Received request: {}", request);

            Integer[] recommendedBookIds = pythonRecommendationClient.getRecommendations(request);
            logger.info("Received recommended book IDs from Python server: {}", Arrays.toString(recommendedBookIds));

            List<Long> bookIds = Arrays.stream(recommendedBookIds)
                    .map(Integer::longValue)
                    .collect(Collectors.toList());
            logger.info("Converted book IDs to Long: {}", bookIds);

            List<Book> books = bookService.getBooksByIds(bookIds);
            logger.info("Retrieved books from database: {}", books);

            return ResponseEntity.ok(books);
        } catch (Exception e) {
            logger.error("Error while getting recommendations from Python server: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("Error while getting recommendations from Python server: " + e.getMessage());
        }
    }

    @GetMapping("/test/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id) {
        Optional<Book> book = bookService.getBookById(id);
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.status(404).body("Book not found");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/books/test")
    public ResponseEntity<?> getTestBooks() {
        List<Long> testIds = Arrays.asList(1L, 29L, 2597L); // Change to actual existing book IDs
        List<Book> books = bookRepository.findAllById(testIds);
        return ResponseEntity.ok(books);
    }

    @GetMapping("/similarBooks")
    public ResponseEntity<?> getSimilarBooks(@RequestParam Long id) {
        List<Book> similarBooks = bookService.getSimilarBooks(id);
        if (!similarBooks.isEmpty()) {
            return ResponseEntity.ok(similarBooks);
        } else {
            return ResponseEntity.status(404).body("No similar books found");
        }
    }
}
