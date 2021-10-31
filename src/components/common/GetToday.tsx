export const GetToday = () => {
  //本日の日付を取得
  const today: Date = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()

  return (
    <div>
      TODAY:{year}年{month}月{day}日
    </div>
  )
}
