!function(a){if("undefined"!=typeof AWB_TinyMCE_Options){var e=AWB_TinyMCE_Options;tinymce.PluginManager.add("awb",function(i,t){function l(a,e){var i="";for(var t in a)i+='<option value="'+t+'" '+(e===a[t]?"selected":"")+">"+a[t]+"</option>";return i}function d(a){return 1==a||"1"==a||1==a||"true"==a||"on"==a?'checked="checked"':""}function s(a,e,i){switch($result="",i){case"video":$result=['<div class="awb_attach_video">','<input name="'+a+'" class="'+a+' awb_attach_video_field" type="hidden" value="'+e+'">',"</div>",'<input type="button" class="awb_attach_video_btn button" value="Select Video" data-select-title="Select Video" data-remove-title="&times;">','<small class="awb_attach_video_label">'+e+"</small>"].join(" ");break;default:$result=['<div class="awb_attach_image">','<input name="'+a+'" class="'+a+' awb_attach_image_field" type="hidden" value="'+e+'">',"</div>",'<input type="button" class="awb_attach_image_btn button" value="Select Image" data-select-title="Select Image" data-remove-title="&times;">','<small class="awb_attach_image_label">'+e+"</small>"].join(" ")}return $result}var o={awb_type:"",awb_stretch:"false",awb_color:"",awb_image:"",awb_video:"",awb_image_size:"full",awb_image_background_size:"cover",awb_image_background_position:"50% 50%",awb_video_mp4:"",awb_video_webm:"",awb_video_ogv:"",awb_video_start_time:0,awb_video_end_time:0,awb_video_volume:0,awb_video_always_play:"false",awb_parallax:"",awb_parallax_speed:.5,awb_parallax_mobile:"false",awb_mouse_parallax:"",awb_mouse_parallax_size:30,awb_mouse_parallax_speed:1e4,awb_class:""};i.addCommand("awb_popup",function(t,c){i.windowManager.open({title:"AWB Shortcode",width:600,height:400,classes:"awb-panel",html:['<form class="awb-mce-form">','<div class="awb-tabs">','<a href="#awb-tab-general" class="awb-tab awb-tab-active">General</a>','<a href="#awb-tab-styles" class="awb-tab">Styles</a>',"</div>",'<div data-tab="awb-tab-general" class="awb-tab-active">','<div class="awb-col-6">',"<h3>Background Type</h3>",'<select name="awb_type">',l({"":"None",color:"Color",image:"Image",yt_vm_video:"YouTube / Vimeo",video:"Local Video"},c.awb_type),"</select>","</div>",'<div class="awb-col-6" data-cond="[name=awb_type]">',"<h3>Stretch</h3>",'<input type="checkbox" value="1" name="awb_stretch" '+d(c.awb_stretch)+">","</div>",'<div data-cond="[name=awb_type] && [name=awb_type] != color">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Image</h3>','<div class="awb-col-6">',s("awb_image",c.awb_image,"image"),"</div>",'<div class="awb-col-6" data-cond="[name=awb_image]">','<select name="awb_image_size">',l(e.imageSizes,c.awb_image_size),"</select>","</div>",'<div class="awb-clearfix"></div>','<div class="awb-col-6" data-cond="[name=awb_image]">','<select name="awb_image_background_size">',l({cover:"Cover",contain:"Contain",pattern:"Pattern"},c.awb_image_background_size),"</select>","</div>",'<div class="awb-col-6" data-cond="[name=awb_image]">','<input type="text" name="awb_image_background_position" value="'+c.awb_image_background_position+'">','<div class="awb-description">Image position. Example: 50% 50%</div>',"</div>","</div>",'<div data-cond="[name=awb_type] == yt_vm_video">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Youtube / Vimeo</h3>','<div class="awb-col-12">','<input type="text" name="awb_video" value="'+c.awb_video+'">','<div class="awb-description">Supported YouTube and Vimeo URLs</div>',"</div>","</div>",'<div data-cond="[name=awb_type] == video">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Video</h3>','<div class="awb-col-4">',"<h3>MP4</h3>",s("awb_video_mp4",c.awb_video_mp4,"video"),"</div>",'<div class="awb-col-4">',"<h3>WEBM</h3>",s("awb_video_webm",c.awb_video_webm,"video"),"</div>",'<div class="awb-col-4">',"<h3>OGV</h3>",s("awb_video_ogv",c.awb_video_ogv,"video"),"</div>","</div>",'<div data-cond="[name=awb_type] *= video">','<div class="awb-clearfix"></div>','<div class="awb-col-6">',"<h3>Start Time</h3>",'<input type="text" name="awb_video_start_time" value="'+c.awb_video_start_time+'">','<div class="awb-description">Start time in seconds when video <br> will be started (this value will be <br> applied also after loop)</div>',"</div>",'<div class="awb-col-6">',"<h3>End Time</h3>",'<input type="text" name="awb_video_end_time" value="'+c.awb_video_end_time+'">','<div class="awb-description">End time in seconds when video <br> will be ended</div>',"</div>","</div>",'<div data-cond="[name=awb_type] *= video">','<div class="awb-clearfix"></div>','<div class="awb-col-6">',"<h3>Volume</h3>",'<input type="text" name="awb_video_volume" value="'+c.awb_video_volume+'">','<div class="awb-description">Volume from 0 to 100.</div>',"</div>",'<div class="awb-col-6">',"<h3>Always Play</h3>",'<input type="checkbox" value="1" name="awb_video_always_play" '+d(c.awb_video_always_play)+">",'<div class="awb-description">Play video also when not in viewport.</div>',"</div>","</div>",'<div data-cond="[name=awb_type]">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Overlay Color</h3>','<div class="awb-col-12">','<input class="awb-colorpicker" type="text" name="awb_color" value="'+c.awb_color+'" data-alpha="true">',"</div>","</div>",'<div data-cond="[name=awb_type] && [name=awb_type] != color">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Parallax</h3>','<div class="awb-col-4">',"<h3>Type</h3>",'<select name="awb_parallax">',l({"":"Disabled",scroll:"Scroll",scale:"Scale",opacity:"Opacity","scroll-opacity":"Opacity + Scroll","scale-opacity":"Opacity + Scale"},c.awb_parallax),"</select>","</div>",'<div data-cond="[name=awb_parallax]">','<div class="awb-col-4">',"<h3>Speed</h3>",'<input type="text" name="awb_parallax_speed" value="'+c.awb_parallax_speed+'">','<div class="awb-description">Provide number <br> from -1.0 to 2.0</div>',"</div>",'<div class="awb-col-4">',"<h3>Enable on Mobile Devices</h3>",'<input type="checkbox" value="1" name="awb_parallax_mobile" '+d(c.awb_parallax_mobile)+">","</div>","</div>","</div>",'<div data-cond="[name=awb_type] && [name=awb_type] != color">','<div class="awb-clearfix"></div>','<h3 class="awb-title">Mouse Parallax</h3>','<div class="awb-col-4">',"<h3>Enable</h3>",'<input type="checkbox" value="1" name="awb_mouse_parallax" '+d(c.awb_mouse_parallax)+">","</div>",'<div data-cond="[name=awb_mouse_parallax]">','<div class="awb-col-4">',"<h3>Size</h3>",'<input type="text" name="awb_mouse_parallax_size" value="'+c.awb_mouse_parallax_size+'">','<div class="awb-description">pixels</div>',"</div>",'<div class="awb-col-4">',"<h3>Speed</h3>",'<input type="text" name="awb_mouse_parallax_speed" value="'+c.awb_mouse_parallax_speed+'">','<div class="awb-description">milliseconds</div>',"</div>","</div>","</div>","</div>",'<div data-tab="awb-tab-styles">','<div class="awb-clearfix"></div>','<div class="awb-col-12"><h3>Padding</h3></div>','<div class="awb-col-3">',"<h3>Top</h3>",'<input type="text" name="awb_styles_padding_top" data-style="padding-top" value="">',"</div>",'<div class="awb-col-3">',"<h3>Bottom</h3>",'<input type="text" name="awb_styles_padding_bottom" data-style="padding-bottom" value="">',"</div>",'<div class="awb-col-3">',"<h3>Left</h3>",'<input type="text" name="awb_styles_padding_left" data-style="padding-left" value="">',"</div>",'<div class="awb-col-3">',"<h3>Right</h3>",'<input type="text" name="awb_styles_padding_right" data-style="padding-right" value="">',"</div>",'<div class="awb-clearfix"></div>','<h3 class="awb-title">Margin</h3>','<div class="awb-col-3">',"<h3>Top</h3>",'<input type="text" name="awb_styles_margin_top" data-style="margin-top" value="">',"</div>",'<div class="awb-col-3">',"<h3>Bottom</h3>",'<input type="text" name="awb_styles_margin_bottom" data-style="margin-bottom" value="">',"</div>",'<div class="awb-col-3">',"<h3>Left</h3>",'<input type="text" name="awb_styles_margin_left" data-style="margin-left" value="">',"</div>",'<div class="awb-col-3">',"<h3>Right</h3>",'<input type="text" name="awb_styles_margin_right" data-style="margin-right" value="">',"</div>","</div>","</form>"].join(" "),buttons:[{text:"Insert",classes:"widget btn primary",id:"awb-panel-insert",onclick:"submit",minHeight:32,minWidth:70},{text:"Close",classes:"widget btn secondary",onclick:"close",minHeight:32,minWidth:70}],onSubmit:function(e){var t=i.windowManager.getWindows()[0],l=jQuery(t.$el[0]);l.find(".wp-picker-container:visible").each(function(){a(this).find(".awb-colorpicker").css("display","inline-block")});var d=l.find(".awb-mce-form [name]"),s={};d.each(function(){var e=a(this);if(e.is("[type=hidden]")){if(!e.parent().is(":visible"))return}else if(!e.is(":visible"))return;s[this.name]="checkbox"===this.type?this.checked:this.value});var n="[nk_awb";for(var b in o)void 0!==s[b]&&s[b]&&(n+=" "+b+'="'+s[b]+'"');var v="";d.filter("[data-style]").each(function(){var e=a(this),i=e.val();i&&(a.isNumeric(i)&&(i+="px"),v+=" "+e.attr("data-style")+": "+i+";")}),v&&(n+=' awb_styles="'+v+'"'),n+="]"+(c.content||"<p>Your Content Here</p>")+"[/nk_awb]",i.insertContent(n)},onOpen:function(e){var t=i.windowManager.getWindows()[0],l=jQuery(t.$el[0]);"object"==typeof a.wp&&"function"==typeof a.wp.wpColorPicker&&l.find(".awb-colorpicker").wpColorPicker({alpha:!0});var d=l.find(".awb-tabs");if(d.length){var s=d.parent().children("[data-tab]");d.on("click",".awb-tab",function(e){e.preventDefault();var i=a(this),t=s.filter('[data-tab="'+this.hash.replace("#","")+'"]');t.length&&(s.removeClass("awb-tab-active"),t.addClass("awb-tab-active"),i.addClass("awb-tab-active").siblings().removeClass("awb-tab-active"))})}l.conditionize()}})}),i.addButton("awb",{icon:"awb",tooltip:"Advanced WordPress Backgrounds",onclick:function(e,t){i.execCommand("awb_popup","",a.extend({content:i.selection.getContent()},o))}})})}}(jQuery);