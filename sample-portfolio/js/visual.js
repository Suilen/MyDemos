var t = new Trianglify();

$('.nav-icon').hover(
	function(){
		var id = $(this).attr('data-page');
		console.log(id);
		$('header').css('background-color',"transparent");
		recolor(id);
		redraw();
		
	}, function(){
		$('body').removeAttr('style');
		$('header').removeAttr('style');

	}

);
// $(window).resize(function() {
//     redraw();
//  });

function redraw() {
            console.log("drawing "+document.body.clientWidth+"x"+height());

            var pattern = t.generate(document.body.clientWidth, height());
            document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
        }


function recolor(id) {
			if (id=='web'){
				 t.options.x_gradient = ["#e41a1c","#377eb8","#4daf4a"];
			} else if(id =='media'){
				 t.options.x_gradient =Trianglify.colorbrewer.Blues[3]; 
			} else if (id == 'graphics'){
				 t.options.x_gradient = Trianglify.colorbrewer.RdPu[3];
			} else{
				 t.options.x_gradient = Trianglify.colorbrewer.Oranges[3];
			}

            t.options.y_gradient = t.options.x_gradient.map(function(c){return d3.rgb(c).brighter(0.5);});
        }

function height() {
            return Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
        }