export const TableStyle = (props: any) => {
  const tableStyle = {
    width: '95%',
    align: 'center',
    margin: '20px',
    padding: '8px',
    backgroundColor: '#e6dac2a6',
    color: '#703f0dde',
  }
  return <table style={tableStyle}>{props.children}</table>
}
