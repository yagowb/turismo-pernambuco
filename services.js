const fazerOrcamento = (destino) => {
  let value
  switch (destino) {
    case 'Araripina':
      value =  5000
      break;
  
    default:
      value = 0
      break;
  }

  return value
}

export default { fazerOrcamento }