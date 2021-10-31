export const BodyStyle = (props: any) => {
  const bodyStyle = {
    height: '100vh',
    backgroundColor: '#e6dac2a6',
    textAlign: 'center' as const,
  }

  return <body style={bodyStyle}>{props.children}</body>
}
