!function(){
window.GridFit={
  itemsPerPage(container,itemW,itemH,gap,reserveBottom){
    const cw=container.offsetWidth||itemW;
    const cols=Math.max(1,Math.floor((cw+gap)/(itemW+gap)));
    const top=container.getBoundingClientRect().top;
    const avail=Math.max(itemH,window.innerHeight-top-(reserveBottom||0));
    const rows=Math.max(2,Math.floor((avail+gap)/(itemH+gap)));
    return Math.max(4,Math.min(12,cols*rows));
  }
};
}();
