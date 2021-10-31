import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { BodyStyle } from '../common/BodyStyle'
import { Header } from '../common/Header'
import { TableStyle } from '../common/TableStyle'
import { InputTodo } from '../only/InputTodo'
//import type {todolist} from '../types/todolist'

//todolistの型指定
type Todolist = {
  id: number
  todo: string
  deadline: string
}

//export const TodoList = React.createContext
export const Home: React.FunctionComponent = () => {
  //todoListの生成
  const [todoList, setTodoList] = useState<Array<Todolist>>([])

  //setTodoListを子コンポーネントに渡すための関数
  //const

  //完了ボタンが押されたらTodoをtodoListから削除する
  const onClickDone = (e: any) => {
    const delIndex: number = e.target.value
    const newTodoList: Array<Todolist> = [...todoList]
    newTodoList.splice(delIndex, 1)
    setTodoList(newTodoList)
  }

  return (
    <div>
      <Fragment>
        <BodyStyle>
          <Header>やることリスト</Header>
          <InputTodo todoList={{ todoList }} setTodoList={{ setTodoList }} />
          <div style={{ textAlign: 'right' }}>
            <Link to="/Page1">やれたことリスト</Link>
          </div>
          <div>
            {todoList.length > 0 && (
              <TableStyle>
                <tr>
                  <th>これを</th>
                  <th>この日までにやろう！</th>
                </tr>
                {todoList.map((todo, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'left' }}>{todo.todo}</td>
                    <td>{todo.deadline}</td>
                    <button value={index} onClick={onClickDone}>
                      完了
                    </button>
                  </tr>
                ))}
              </TableStyle>
            )}
          </div>
        </BodyStyle>
      </Fragment>
    </div>
  )
}
