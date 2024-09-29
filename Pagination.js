function createPagination(array, pageSize) {
    let currentPage = 1
  
    const getTotalPages = () => Math.ceil(array.length / pageSize)
  
    const getPageItems = () => {
      const startIdx = (currentPage - 1) * pageSize
      return array.slice(startIdx, startIdx + pageSize)
    }
  
    const prevPage = () => {
      if (currentPage > 1) currentPage--
      return getPageItems()
    }
  
    const nextPage = () => {
      if (currentPage < getTotalPages()) currentPage++
      return getPageItems()
    }
  
    const firstPage = () => {
      currentPage = 1
      return getPageItems()
    }
  
    const lastPage = () => {
      currentPage = getTotalPages()
      return getPageItems()
    }
  
    const goToPage = (page) => {
      if (page >= 1 && page <= getTotalPages()) {
        currentPage = page
      }
      return getPageItems()
    }
  
    return {
      getTotalPages,
      getPageItems,
      prevPage,
      nextPage,
      firstPage,
      lastPage,
      goToPage,
    }
  }
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
  const paginator = createPagination(alphabetArray, 4)
  
  console.log(paginator.nextPage())

  