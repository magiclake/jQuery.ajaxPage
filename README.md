# ajax分页插件

'''
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
'''