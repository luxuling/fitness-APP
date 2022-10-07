export  function smoothScroll(id){
      const target = document.getElementById(`${id}`).offsetTop
      window.scroll(0,target)
    }