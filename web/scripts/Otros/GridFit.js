!function(){
window.GridFit={
  itemsPerPage(container,itemW,itemH,gap,reserveBottom){
    const cw=container.offsetWidth||itemW;
    const cols=Math.max(1,Math.floor((cw+gap)/(itemW+gap)));
    const avail=Math.max(itemH,window.innerHeight-(reserveBottom||0));
    const rows=Math.max(2,Math.floor((avail+gap)/(itemH+gap)));
    return cols*Math.min(Math.max(rows,Math.ceil(10/cols)),Math.max(1,Math.floor(20/cols)));
  }
};
}();
