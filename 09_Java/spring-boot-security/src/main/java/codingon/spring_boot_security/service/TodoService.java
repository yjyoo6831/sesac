package codingon.spring_boot_security.service;

import codingon.spring_boot_security.dto.TodoDTO;
import codingon.spring_boot_security.entity.TodoEntity;
import codingon.spring_boot_security.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
// simple loggin facade for java
// - 로그 라이브러리
// - 용도에 따라서 info, debug, warn, error 나눠서 로깅
// - 로깅하고 싶은 클래스에 해당 어노테이션을 작성하면 됨.
@Service
public class TodoService {
    @Autowired // 의존성 주입
    private TodoRepository repository;

    // create todo
    public List<TodoEntity> create(final TodoEntity entity){
        validate(entity); // 유효성 검사

        repository.save(entity); // insert 수행
        log.info("Entity Id : {} is saved. ", entity.getId());

        // db select 수행 (추가한 그 행을 바로 다시 보여주기)
        return repository.findByUserId(entity.getUserId());
    }

    // read todo
    public List<TodoEntity> retrieve(final String userId){
        return repository.findByUserId(userId);
    }

    // update todo
    public void updateTodo(final Long id, TodoDTO todoDTO)
    {
        TodoEntity todoEntity = repository.findById(id).get();
        todoEntity.setTitle(todoEntity.getTitle());
        todoEntity.setDone(todoEntity.isDone());

        repository.save(todoEntity);

    }

    // delete todo
    public void deleteTodo(final Long id)
    {
        repository.delete(todoEntity);
    }

    // 유효성 검사
    private void validate(final TodoEntity entity){
        if(entity == null){
            log.warn("Entity cannot be null");
            throw new RuntimeException("Entity cannot be null");
        }
        if(entity.getUserId() == null){
            log.warn("Unknown user.");
            throw new RuntimeException("Unknown user");
        }
    }
}
