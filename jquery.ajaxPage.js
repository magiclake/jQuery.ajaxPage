/**
 * jquery.ajaxPage.js
 * author:huhai
 * qq:406082354
 * mail:406082354@qq.com
 * 2016/05/26
 */
;(function($){
    function build_page(total, num_per_page, cur_num) {
        var template = '<li class="{class}"><a  href="{page}">{page}</a></li>';
        var n_pages = Math.ceil(total / num_per_page);
        var cur_page = Math.ceil(cur_num / num_per_page)+1;
        var html = "";
        var i_start = cur_page-5>1?cur_page-5:1;
        var count = 0;
        var t_html = "";
        if(i_start>1){
            html += template.replace(/{page}/g, 1);
            t_html = template.replace(/{page}/g, "<<");
            t_html = t_html.replace(/{class}/g,"prev");
            html+=t_html;
        }
        for (var i = i_start; i <= n_pages; i++) {
            if (count++ >= 10) {
                t_html = template.replace(/{page}/g, ">>");
                t_html = t_html.replace(/{class}/g, "next");
                html += t_html;
                t_html = template.replace(/{page}/g, n_pages);
                t_html = t_html.replace(/{class}/g, " ");
                html += t_html;
                break;
            }
            else {
                t_html = template.replace(/{page}/g, i);
                if (i == cur_page) {
                    t_html = t_html.replace(/{class}/g, "active");
                }
                else {
                    t_html = t_html.replace(/{class}/g, " ");
                }
            }

            html += t_html;
        }
        return html;
    }

    $.fn.extend({
        "page_event":function(options){
            options=$.extend({
                "total":0,
                "per_page":5,
                "cur_page":0,
                "click":function () {
                }
            },options);

            this.on("click", "li", function () {
                var cur_page = $(this).find(".active a").html();
                cur_page = parseInt(cur_page);
                var class_name = $(this).attr("class");
                var to_page = 1;
                var num_per_page = 5;
                if (class_name.indexOf("active") >= 0) {
                    return false;
                } else if (class_name.indexOf("next") >=0) {
                    to_page = cur_page + 1;
                } else if (class_name.indexOf("prev") >=0) {
                    to_page = cur_page - 1;
                }
                else {
                    to_page = parseInt($(this).find("a").html());
                }
                to_page = parseInt(to_page)-1;
                var num_start = to_page * num_per_page;
                options.click && options.click(num_per_page, num_start);
                return false;
            });

            return this;
        },
        "page_show":function(options){
            options=$.extend({
               "total":0,
                "per_page":5,
                "cur_page":0
            },options);

            var html = build_page(options.total,options.per_page,options.cur_page);
            this.html(html);
            return this;
        }
    });
})(jQuery);