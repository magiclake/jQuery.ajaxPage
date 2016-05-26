# ajax分页插件

##接口说明:
###page_event(callback):
点击事件回调函数。
回调参数:
param1:每页数
param2:起始数

###page_show():
传入参数:
- total:总数目
- per_page:每页数
- cur_page:当前页数

## HTML
```html
    <ul class="pagination" id="idPage"> </ul>
```
## JS代码

```javascript
    function getVols(num_per_page,num_start){
                ajax_getVols({
                    num: num_per_page||5,
                    start_num: num_start||0,
                    type: "counts",
                    success: function (ret) {
                        if (ret.result == true) {
                            build_well_blocks(ret.data);
                            $("#idPage").page_show({
                                "total":ret.total,
                                "per_page":ret.limit[1],
                                "cur_page":ret.limit[0]
                            });
                            $("#idTotal").html(ret.total);
                        }
                    }
                });
            }
            getVols();
            $("#idPage").page_event({
                "click":getVols
            });
