import { Fragment, useEffect, useState } from 'react'
import './App.css'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

function App() {
  //本日の日付を取得
  let today = new Date()
  let year = today.getFullYear()
  var month = today.getMonth() + 1
  var day = today.getDate()

  const a = () => {
    return
    alert()
  }

  //やることが入力されたらnewTodoに値をセットする
  const [newTodo, setTodo] = useState('')
  const changeTodo = (e: any) => {
    setTodo(e.target.value)
  }

  //日付が入力されたらnewDeadlineに値をセットする
  const [newDeadline, setDeadline] = useState('')
  const changeDeadline = (day: any) => {
    setDeadline(day.toLocaleDateString()) //年月日をセット
  }

  //登録ボタンが押されたら以下を実行する
  //やることが空欄でない場合：notNullをtrueにし、todoListに値を追加する
  //やることが空欄の場合：notNullをfalseにする
  const [notNull, setNotNull] = useState(true) //エラー文表示用
  const [todoList, setTodoList] = useState<any[]>([]) //todoListの生成
  const [id, setId] = useState(0) //将来使う予定の変数
  useEffect(() => console.log(todoList), [todoList])
  const onClickRegist = () => {
    if (newTodo !== '') {
      const newId = id + 1
      const newTodoList = [...todoList] //todoListのコピー
      newTodoList.push({ id: newId, todo: newTodo, deadline: newDeadline }) //コピーした配列にオブジェクトを追加
      setTodoList(newTodoList) //コピーした配列をtodoListに上書き
      setId(newId)
      setNotNull(true)
    } else {
      setNotNull(false)
    }
  }

  //やれたこと一覧がクリックされたら、別ページへ遷移する
  //const onClickComp = (e) => {}

  //完了ボタンが押されたらTodoをtodoListから削除する
  const onClickDone = (e: any) => {
    const delIndex = e.target.value
    const newTodoList = [...todoList]
    newTodoList.splice(delIndex, 1)
    setTodoList(newTodoList)
  }

  //todoListのスタイル
  const tableStyle = {
    width: '95%',
    align: 'center',
    margin: '20px',
    padding: '8px',
    backgroundColor: '#e6dac2a6',
    color: '#703f0dde',
  }

  return (
    <Fragment>
      <body className="App" style={{ height: '100vh', backgroundColor: '#e6dac2a6' }}>
        <header className="App-header" style={{ color: '#4a2807f2' }}>
          <h2 style={{ margin: '10px' }}>やることリスト</h2>
          <div>
            TODAY:{year}年{month}月{day}日
          </div>
        </header>
        <div>
          <input type="text" value={newTodo} onChange={changeTodo} />
          <DayPickerInput onDayChange={changeDeadline} />
          <button onClick={onClickRegist}>登録</button>

          {notNull || <div>やることを入力してね＾＾</div>}
        </div>
        <div>
          {todoList.length > 0 && (
            <table style={tableStyle}>
              <tr style={{ textAlign: 'center' }}>
                <th>これを</th>
                <th>この日までにやろう！</th>
              </tr>
              {todoList.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.todo}</td>
                  <td>{todo.deadline}</td>
                  <button value={index} onClick={onClickDone}>
                    完了
                  </button>
                </tr>
              ))}
            </table>
          )}
          <table></table>
        </div>
      </body>
    </Fragment>
  )
}

export default App
