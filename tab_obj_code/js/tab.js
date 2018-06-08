var object = {
    tab_t_data: ["one", "two", "three"],
    tab_d_data: ["我是own!", "我是two", "我是three"],
    id: "#tab"
};
var obj_02 = {
    tab_t_data: ["one", "two", "three"],
    tab_d_data: ["我是own!", "我是two", "我是three"],
    id: "#tab01"
}

function tabFun(obj) {
    //创建页面中的元素
    this.tab = $(obj.id);
    this.tab_btn = $("<ul class='tab_t'></ul>");
    this.tab_body = $("<ul class='tab_b'></ul>");
    this.tab_li = '';
    this.tab_body_li = '';
    for (var i = 0; i < obj.tab_t_data.length; i++) {
        this.tab_li += '<li>' + obj.tab_t_data[i] + '</li>';
    }
    for (var j = 0; j < obj.tab_d_data.length; j++) {
        this.tab_body_li += '<li>' + obj.tab_d_data[j] + '</li>';
    }
    this.tab_body.append(this.tab_body_li);
    this.tab_btn.append(this.tab_li);
    this.tab.append(this.tab_btn);
    this.tab.append(this.tab_body);
    //jq的点击事件点击事件委托
    $(".tab_t").on("click", "li", function () {
        var index = $(this).index();
        $(this).parent().next().find("li").hide().eq(index).show();
        $(this).css("background-color","indianred").siblings().css("background-color","black");
    })
}
 var obj = new tabFun(object);
 var obj01 = new tabFun(obj_02);
