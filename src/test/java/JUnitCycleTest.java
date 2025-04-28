import org.junit.jupiter.api.*;

public class JUnitCycleTest {
  @BeforeAll // 전체 테스트를 시작하기 전에 1회 실행하므로 메서드를 static 으로 선언 예) DB 연결
  static void beforeAll() {
    System.out.println("@BeforeAll");
  }

  @BeforeEach
  public void beforeEach() {
    System.out.println("@BeforeEach");
  }

  @DisplayName("테스트1")
  @Test
  public void test1() {
    System.out.println("test1");
  }

  @DisplayName("테스트2")
  @Test
  public void test2() {
    System.out.println("test2");
  }

  @DisplayName("테스트3")
  @Test
  public void test3() {
    System.out.println("test3");
  }

  @AfterAll // 전체 테스트를 마치고 종료하기 전에 1회 실행하므로 메서드를 static 으로 선언
  static void afterAll() {
    System.out.println("@AfterAll");
  }

  @AfterEach // 테스트 케이스를 종료하기 전마다 실행
  public void afterEach() {
    System.out.println("@AfterEach");
  }
}
