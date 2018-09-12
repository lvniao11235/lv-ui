(function(window){
	
function Carrousel(el){
	this.el = el;
	this.$el = $(el);
	this.width = 0;
	this.height = 0;
	this.size = 0;
	this.current = 1;
	this.timer = null;
	this.direction = 1;
}

Carrousel.prototype = {
	constructor:Carrousel,
	init: function(){
		var _this = this;
		this.width = this.$el.width();
		this.height = this.$el.height();
		this.$el.find(".lv-carrousel-item").height(this.height);
		this.$el.find(".lv-carrousel-item").width(this.width);
		this.$el.find(".lv-carrousel-row img").height(this.height);
		this.$el.find(".lv-carrousel-row img").width(this.width);
		this.size = this.$el.find(".lv-carrousel-row .lv-carrousel-item").length;
		this.$el.find(".lv-carrousel-row").width(this.width * this.size);
		this.$el.find(".lv-carrousel-row").height(this.height);
		this.$el.append('<div class="lv-carrousel-btn-group"></div>');
		for(var i=1; i<=this.size; i++){
			this.$el.find(".lv-carrousel-btn-group").append('<div class="lv-carrousel-btn"></div>');
		}
		this.$el.find(".lv-carrousel-btn-group .lv-carrousel-btn:nth-child(" + _this.current + ")").addClass("selected");
		this.$el.find(".lv-carrousel-btn").click(function(){
			_this.$el.find(".lv-carrousel-btn").removeClass("selected");
			$(this).addClass("selected");
			_this.change($(this).index() + 1);
		});
		this.$el.click(function(event){
			var x = event.pageX;
			if(x < 30){
				if(_this.current > 1){
					_this.change(_this.current - 1);
				}
			} else if(x>_this.width-30 && x<_this.width){
				if(_this.current < _this.size){
					_this.change(_this.current + 1);
				}
			}
		});
		this.$el.hover(function(){
			_this.stop();
		});
		this.$el.mouseleave(function(){
			_this.start();
		});
		this.start();
	},
	change:function(index){
		if(index != this.current){
			this.$el.find(".lv-carrousel-row").animate({marginLeft: (-1 * this.width * (index-1) + "px")}, this.width);
			this.$el.find(".lv-carrousel-btn").removeClass("selected");
			this.$el.find(".lv-carrousel-btn-group .lv-carrousel-btn:nth-child(" + index + ")").addClass("selected");
			this.current = index;
		}
	},
	start:function(){
		var _this = this;
		this.timer = setInterval(function(){
			if(_this.direction == 1){
				if(_this.current == _this.size){
					_this.direction = -1;
					_this.change(_this.current-1);
				} else {
					_this.change(_this.current+1);
				}
				
			} else if(_this.direction == -1){
				if(_this.current == 1){
					_this.direction = 1;
					_this.change(_this.current+1);
				} else {
					_this.change(_this.current-1);
				}
			}
		}, 2000);
	},
	stop:function(){
		if(this.timer != null){
			clearInterval(this.timer);
		}
	}
}

window.Carrousel = Carrousel;

})(window);
