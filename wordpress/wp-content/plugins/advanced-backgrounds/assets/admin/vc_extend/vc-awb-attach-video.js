!function(e){e("#vc_ui-panel-edit-element").on("click",".awb_attach_video_btn",function(t){t.preventDefault();var a=e(this),i=a.prev(".awb_attach_video").children("input"),l=a.next(".awb_attach_video_label"),o=a.data("wp-frame");if(a.hasClass("awb_attach_video_btn_selected"))return i.val(""),l.html(""),a.val(a.attr("data-select-title")),void a.removeClass("awb_attach_video_btn_selected");o?o.open():wp.media?(o=wp.media({title:"Select or Upload Video",button:{text:"Use this video"},multiple:!1,library:{type:"video"}}),a.data("wp-frame",o),o.on("select",function(){var e=o.state().get("selection").first().toJSON();e&&(i.val(e.id),l.html(e.filename),a.val(a.attr("data-remove-title")),a.addClass("awb_attach_video_btn_selected"))}),o.open()):console.error("Can't access wp.media object.")})}(jQuery);