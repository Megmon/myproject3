import { useEffect, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

//newtodolistの型指定
type Todolist = {
  id: number
  todo: string
  deadline: string
}

type Props = {
  todoList: Todolist
  setTodoList: () => void
}

export const InputTodo = (props: Props) => {
  const { todoList, setTodoList } = props
  //やることが入力されたらnewTodoに値をセットする
  const [newTodo, setTodo] = useState<string>('')
  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  //日付が入力されたらnewDeadlineに値をセットする
  const [newDeadline, setDeadline] = useState<any>('')
  const changeDeadline = (day: any) => {
    setDeadline(day.toLocaleDateString()) //年月日をセット
  }

  //登録ボタンが押されたら以下を実行する
  //やることが空欄でない場合：notNullをtrueにし、todoListに値を追加する
  //やることが空欄の場合：notNullをfalseにする
  const [notNull, setNotNull] = useState<boolean>(true) //エラー文表示用
  //const [todoList, setTodoList] = useState<Array<todolist>>([]) //todoListの生成
  const [id, setId] = useState<number>(0) //将来使う予定の変数
  useEffect(() => console.log(todoList), [todoList])
  const onClickRegist = () => {
    if (newTodo !== '') {
      const newId: number = id + 1
      const newTodoList: Array<Todolist> = [...todoList] //todoListのコピー
      newTodoList.push({ id: newId, todo: newTodo, deadline: newDeadline }) //コピーした配列にオブジェクトを追加
      setTodoList(newTodoList) //コピーした配列をtodoListに上書き
      setId(newId)
      setNotNull(true)
    } else {
      setNotNull(false)
    }
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={changeTodo} />
      <DayPickerInput onDayChange={changeDeadline} />
      <button onClick={onClickRegist}>登録</button>
      {notNull ? <div>&nbsp;</div> : <div>やることを入力してね＾＾</div>}
    </div>
  )
}
