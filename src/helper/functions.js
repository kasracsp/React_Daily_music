const getChoosenCategory=(chart,key)=>{
  const filteredCategory=chart.filter(category=>category.title===key)
  return filteredCategory[0].data
}

export {getChoosenCategory}