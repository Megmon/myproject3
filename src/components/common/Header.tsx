import { GetToday } from './GetToday'

export const Header = (props: any) => {
  const titleStyle = {
    padding: '10px',
    fontSize: '1.5em',
    //fontWeight: 'bold',
  }

  return (
    <header style={{ color: '#4a2807f2' }}>
      <div style={titleStyle}>{props.children}</div>
      <GetToday />
    </header>
  )
}
