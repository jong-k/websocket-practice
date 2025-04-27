package me.jonghan.practicesb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
public class TestController {

  @Autowired
  TestService testService;

  @GetMapping("/test")
  public List<Member> getAllMembers() {
    List<Member> members = testService.getAllMembers();
    return members;
  }
}
