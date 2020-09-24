$(document).ready(function () {
    //check lang
    if (location.pathname.split('/')[1] == 'vi') {
        //update when click catLayer1
        $("#catLayer1").click(function () {
            var index = $(this).val();
            if (index != "") {
                $.ajax({
                    type: 'GET',
                    url: "/services/product/" + index + '"',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $("#catLayer2").empty();
                        $("#catLayer3").empty();
                        data.catLayers2.forEach((i) => {
                            $("#catLayer2").append(`<option value='${i.id}'>${i.name}</option>`)
                        });
                        data.catLayers3.forEach((i) => {
                            $("#catLayer3").append(`<option value='${i.id}'>${i.name}</option>`)
                        });
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.title}</a></h2><p>${data.product.body}</p>`);
                        }
                    }
                })
            }
        });
        //update when click catLayer2
        $("#catLayer2").click(function () {
            var index = $(this).val();
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/services/product/" + index + '"',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $("#catLayer3").empty();
                        data.catLayers2.forEach((i) => {
                            $("#catLayer3").append(`<option value='${i.id}'>${i.name}</option>`)
                        });
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.title}</a></h2><p>${data.product.body}</p>`);
                        }
                    }
                })
            }
        });
        //update when click catLayer3
        $("#catLayer3").click(function () {
            var index = $(this).val();
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/" + index + "/product",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.title}</a></h2><p>${data.product.body}</p>`);
                        }
                    }
                })
            }
        });

        //update catType when create new category
        $("#catType").click(function () {
            var index = $(this).val();
            console.log(index);
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/category/type/" + index,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $('#catParent').empty();
                        if (data.catParent != null) {
                            data.catParent.forEach((i) => {
                                $('#catParent').append(`<option value="${i.id}">${i.name}</option>`)
                            });
                        } else {
                            $('#catParent').append(`<option value="0">Không có danh mục cha</option>`)
                        }
                    }
                })
            }
        })
    }
    if (location.pathname.split('/')[1] == 'en') {
        //update when click catLayer1
        $("#catLayer1").click(function () {
            var index = $(this).val();
            if (index != "") {
                $.ajax({
                    type: 'GET',
                    url: "/services/product/" + index + '"',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $("#catLayer2").empty();
                        $("#catLayer3").empty();
                        data.catLayers2.forEach((i) => {
                            $("#catLayer2").append(`<option value='${i.id}'>${i.enname}</option>`)
                        });
                        data.catLayers3.forEach((i) => {
                            $("#catLayer3").append(`<option value='${i.id}'>${i.enname}</option>`)
                        });
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.entitle}</a></h2><p>${data.product.enbody}</p>`);
                        }
                    }
                })
            }
        });
        //update when click catLayer2
        $("#catLayer2").click(function () {
            var index = $(this).val();
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/services/product/" + index + '"',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $("#catLayer3").empty();
                        data.catLayers2.forEach((i) => {
                            $("#catLayer3").append(`<option value='${i.id}'>${i.enname}</option>`)
                        });
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.entitle}</a></h2><p>${data.product.enbody}</p>`);
                        }
                    }
                })
            }
        });
        //update when click catLayer3
        $("#catLayer3").click(function () {
            var index = $(this).val();
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/" + index + "/product",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        if (data.product != null) {
                            $(".productImage-wrap").empty();
                            $(".productInfo-wrap .productInfo-description-wrap").empty();
                            $(".productImage-wrap").append(`<img src="/storage/images/${data.product.image}" alt="image not found" style="width:70%;height:auto">`);
                            $(".productInfo-wrap .productInfo-description-wrap").append(`<h2><a href="#">${data.product.entitle}</a></h2><p>${data.product.enbody}</p>`);
                        }
                    }
                })
            }
        });

        //update catType when create new category
        $("#catType").click(function () {
            var index = $(this).val();
            if (index != null) {
                $.ajax({
                    type: 'GET',
                    url: "/category/type/" + index,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        $('#catParent').empty();
                        if (data.catParent != null) {
                            data.catParent.forEach((i) => {
                                $('#catParent').append(`<option value="${i.id}">${i.name}</option>`)
                            });
                        } else {
                            $('#catParent').append(`<option value="0">Không có danh mục cha</option>`)
                        }
                    }
                })
            }
        })
    }
    // change status
    $('.custom-control-input').change(function () {
        var statusInput = $(this);
        var statusLabel = $(this).closest("li.list-group-item").find(".custom-control-label");
        var productId = $(this).closest("li.list-group-item").attr("data_id");
        var productStatus = $(this).val();
        $.ajax({
            type: 'GET',
            url: "/vi/admin/product/" + productId + "/status/" + productStatus,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                let updatedStatus = '';

                if (data.product.status == 1) {
                    updatedStatus = 'Nổi bật';
                } else {
                    updatedStatus = 'Không nổi bật';
                }

                statusInput.val(data.product.status);
                statusLabel.text(updatedStatus);
            }
        })
    });
});