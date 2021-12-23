package com.ushara.studentSystem.controller;

import com.ushara.studentSystem.model.Student;
import com.ushara.studentSystem.service.StudentService;
import jdk.dynalink.linker.LinkerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student is added";
    }

    @GetMapping("getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

}
