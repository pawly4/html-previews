(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tube
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(9.5,1,0,4).p("AymlDIBcgpQBzgwBxggQFphnDQBZQCQA/BnB5QBKBZBJCWQApBRBKCZQBDB4BOA1QECCxE8hCQCeghBqhF");
	this.shape.setTransform(79.775,15.5426);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90).to({_off:false},0).wait(179).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-39.2,247.6,109.60000000000001);


(lib.Trigger_Finger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Trigger_Finger
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000E82").s().p("AAmBMQgLgFgkgcIhfhEIBIgxQAHgEAGgBIAiAaQAnAbAYATQAQALAHAOQAKAVgPAVQgOAUgYAAQgLAAgJgEg");
	this.shape.setTransform(0.5791,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBXQgKgFgYgRIgegYIhfhDIAogYIAxgjQATgMAIAHIBiBIQAWASAHAUQAHAZgQAWQgPAWgZADIgKABQgNAAgMgGg");
	this.shape_1.setTransform(0.0197,0.012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},171).to({state:[]},1).wait(188));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-9.3,24.700000000000003,18.700000000000003);


(lib.Sparkle_Base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sparkle_base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#72F4AC").ss(1,1).p("AAEh0IA3ipAh4BOIiPBoAANBzIAyCrABfgFICyAAAkQioICQBo");
	this.shape.setTransform(-0.1,-0.1,1,1,0,0,0,-0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#72F4AC").ss(1,1).p("AgFBOIgoBvAg+AEIh3AAAgvi8IAlBxABSgzIBfhGABWAsIBgBH");
	this.shape_1.setTransform(-4.4,0.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-29.6,56.5,59.2);


(lib.SCREEN03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAvQgLgJgBgRIARAAQACAVAXABQAYgBAAgRQAAgIgGgFQgGgDgNgCQgVgFgIgGQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAEAAAIQAAAHAGADQAFAEAOADQAUAEAIAEQALAIAAAPQAAAQgKAIQgLAKgUAAQgSAAgMgKg");
	this.shape.setTransform(168.875,-307.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBRIgwg5IAAA5IgSAAIAAihIASAAIAABmIAsgyIAVAAIguAyIAyA7g");
	this.shape_1.setTransform(159.175,-310.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgIQAAgOgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAoIAABHIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_2.setTransform(147.025,-307.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgUIASAAQgDARgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_3.setTransform(135.825,-307.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBRIAAihIARAAIAAChg");
	this.shape_4.setTransform(127.175,-310.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_5.setTransform(115.525,-308.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAZIAAABQAAAYgQAQQgOAQgYAAQgXAAgPgQgAgZgeQgKALAAATIAAABQAAATAKALQAKAMAPAAQARAAAJgMQAKgLAAgTIAAgBQAAgTgKgLQgJgLgRAAQgPAAgKALg");
	this.shape_6.setTransform(104.8,-307.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBRIAAhdIgQAAIAAgQIAQAAIAAgRQAAgkAgAAQAHAAAGADIAAAOQgGgCgGAAQgQAAAAATIAAATIAaAAIAAAQIgaAAIAABdg");
	this.shape_7.setTransform(94.825,-310.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_8.setTransform(82.225,-308.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgUIASAAQgDARgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_9.setTransform(71.875,-307.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBEQgOgPAAgZIAAgCQAAgZAOgPQAOgRAXAAQAXAAAMAUIAAhGIARAAIAAChIgRAAIAAgTQgFAJgKAGQgLAGgLAAQgWAAgNgOgAgYgFQgJAKAAAUIAAACQAAAUAKALQAIAKAPAAQAPAAAKgLQAKgLAAgUIAAgCQAAgogiAAQgQAAgJALg");
	this.shape_10.setTransform(58.925,-310.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcA4IAAhEQAAgcgaAAQgLAAgJAIQgJAIAAAPIAABBIgSAAIAAhtIASAAIAAASQAEgJAJgFQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_11.setTransform(46.525,-308.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBOIAAhtIARAAIAABtgAgHg5QgDgEAAgEQAAgFADgEQADgDAEAAQAEAAAEADQADAEAAAFQAAAEgDAEQgEAEgEgBQgEABgDgEg");
	this.shape_12.setTransform(37.5,-310.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBRIAAihIARAAIAAChg");
	this.shape_13.setTransform(32.175,-310.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgshiIATAAIAhBOIAehOIASAAIg8CTg");
	this.shape_14.setTransform(23.95,-306.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAqQgQgPAAgaIAAgBQAAgYAQgQQAPgQAWAAQASAAANAJQAOAKACAUIgRAAQgEgYgaAAQgPAAgKALQgKALAAATIAAABQAAAUAKALQAKALAPAAQANgBAIgGQAJgIACgMIAQAAQgCARgNAMQgNAMgUAAQgWAAgPgPg");
	this.shape_15.setTransform(12.475,-307.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAvQgLgJgBgRIARAAQACAVAXABQAYgBAAgRQAAgIgGgFQgGgDgNgCQgVgFgIgGQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAEAAAIQAAAHAGADQAFAEAOADQAUAEAIAEQALAIAAAPQAAAQgKAIQgLAKgUAAQgSAAgMgKg");
	this.shape_16.setTransform(-4.125,-307.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgIQAAgOgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAoIAABHIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_17.setTransform(-15.175,-307.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjBCQgMgJgCgOIASAAQAEASAbABQAjAAAAgjIAAgQQgFAJgKAGQgLAHgKAAQgWAAgOgPQgOgPAAgVIAAgCQAAgXAOgQQAPgQAWAAQAXAAAMAUIAAgSIARAAIAABlQAAAYgPAMQgNAMgYAAQgWAAgNgKgAgYgxQgJALAAARIAAACQAAARAKAKQAJAKAOAAQAPAAAKgKQAKgKAAgSIAAgCQAAgRgJgLQgJgKgQAAQgQAAgJALg");
	this.shape_18.setTransform(-27.425,-306.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_19.setTransform(151.525,-333.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAuQgLgKAAgXIAAhEIARAAIAABEQAAAcAaAAQALAAAJgIQAJgIAAgPIAAhBIARAAIAABtIgRAAIAAgSQgEAJgJAFQgJAGgMAAQgRAAgKgKg");
	this.shape_20.setTransform(140.825,-333.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAPAAAZIAAABQAAAYgPAQQgQAQgXAAQgXAAgPgQgAgZgeQgKALAAATIAAABQAAATAKALQAJAMAQAAQAQAAAKgMQAKgLAAgTIAAgBQAAgTgKgLQgKgLgQAAQgQAAgJALg");
	this.shape_21.setTransform(128.35,-333.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgrhiIATAAIAgBOIAehOIASAAIg8CTg");
	this.shape_22.setTransform(116.45,-331.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjBCQgMgJgCgOIASAAQAEASAbABQAjAAAAgjIAAgQQgFAJgKAGQgLAHgKAAQgWAAgOgPQgOgPAAgVIAAgCQAAgXAOgQQAPgQAWAAQAXAAAMAUIAAgSIARAAIAABlQAAAYgPAMQgNAMgYAAQgWAAgNgKgAgYgxQgJALAAARIAAACQAAARAKAKQAJAKAOAAQAPAAAKgKQAKgKAAgSIAAgCQAAgRgJgLQgJgKgQAAQgQAAgJALg");
	this.shape_23.setTransform(98.375,-331.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAcA4IAAhEQAAgcgaAAQgLAAgJAIQgJAIAAAPIAABBIgSAAIAAhtIASAAIAAASQAEgJAJgFQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_24.setTransform(85.975,-333.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHBOIAAhtIAQAAIAABtgAgHg5QgDgEgBgEQABgFADgEQADgDAEAAQAEAAAEADQADAEABAFQgBAEgDAEQgEAEgEgBQgEABgDgEg");
	this.shape_25.setTransform(76.95,-335.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXBRIgwg5IAAA5IgSAAIAAihIASAAIAABmIAsgyIAVAAIguAyIAyA7g");
	this.shape_26.setTransform(69.625,-335.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiAqQgQgPAAgaIAAgBQAAgYAQgQQAPgQAWAAQASAAANAJQAOAKACAUIgRAAQgEgYgaAAQgPAAgKALQgKALAAATIAAABQAAAUAKALQAKALAPAAQANgBAIgGQAJgIACgMIAQAAQgCASgNALQgNAMgUAAQgWAAgPgPg");
	this.shape_27.setTransform(57.575,-333.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgUIASAAQgDARgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_28.setTransform(45.625,-333.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_29.setTransform(33.425,-335.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiAqQgQgPAAgaIAAgBQAAgYAQgQQAPgQAWAAQASAAANAJQAOAKACAUIgRAAQgEgYgaAAQgPAAgKALQgKALAAATIAAABQAAAUAKALQAKALAPAAQANgBAIgGQAJgIACgMIAQAAQgCASgNALQgNAMgUAAQgWAAgPgPg");
	this.shape_30.setTransform(21.175,-333.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgrhiIASAAIAhBOIAehOIASAAIg8CTg");
	this.shape_31.setTransform(4.05,-331.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiA+IAAASIgRAAIAAihIARAAIAABHQAFgJAKgFQALgHALAAQAVAAAOAPQAOAQAAAYIAAABQAAAagNAPQgOAQgWAAQgZAAgMgUgAgYgGQgKAKAAAVIAAABQAAAVAKAKQAJALAQAAQAhAAAAgqIAAgBQAAgUgKgLQgJgKgOAAQgPAAgKAKg");
	this.shape_32.setTransform(-7.675,-335.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-346.6,211.7,50.200000000000045);


(lib.SCREEN02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgshiIATAAIAhBOIAehOIASAAIg8CTg");
	this.shape.setTransform(112.15,-295.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBEQgOgPAAgZIAAgCQAAgZAOgPQAOgRAXAAQAXAAAMAUIAAhGIARAAIAAChIgRAAIAAgTQgFAJgKAGQgLAGgLAAQgWAAgNgOgAgYgFQgJAKAAAUIAAACQAAAUAKALQAIAKAPAAQAPAAAKgLQAKgLAAgUIAAgCQAAgogiAAQgQAAgJALg");
	this.shape_1.setTransform(99.625,-299.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXgBIAQAAIAAgIQAAgNgGgGQgFgFgNAAQgWAAgCAUIgSAAQACgSANgJQALgIARAAQAoAAAAAnIAABIIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_2.setTransform(87.425,-296.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAqQgPgQAAgZIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhABQAagBADgSIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_3.setTransform(76.225,-296.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAARQgSABgIAGQgJAJAAASIAAA8g");
	this.shape_4.setTransform(66.825,-297.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAqQgPgQAAgZIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhABQAagBADgSIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_5.setTransform(50.925,-296.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAARQgSABgIAGQgJAJAAASIAAA8g");
	this.shape_6.setTransform(41.525,-297.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBOIAAhtIAQAAIAABtgAgHg5QgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_7.setTransform(34.4,-299.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBSIAAhfIgQAAIAAgPIAQAAIAAgRQAAgkAgABQAHAAAGACIAAAOQgGgCgGAAQgQAAAAATIAAATIAaAAIAAAPIgaAAIAABfg");
	this.shape_8.setTransform(28.125,-299.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAqQgPgQAAgZIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhABQAagBADgSIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_9.setTransform(138.575,-322.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA9A4IAAhFQAAgbgXAAQgMABgIAGQgJAJAAAOIAABCIgRAAIAAhFQAAgbgXAAQgLABgJAGQgJAJAAAOIAABCIgRAAIAAhtIARAAIAAARQAEgIAJgFQAJgGALAAQAYAAAHAVQAGgKALgGQAJgFAMAAQAQAAAKAKQALALgBAXIAABDg");
	this.shape_10.setTransform(123.1,-322.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAQAAAYIAAABQAAAYgPARQgQAPgXAAQgXAAgPgQgAgZgeQgKAMAAASIAAABQAAATAKALQAJAMAQAAQAQAAAKgMQAKgMAAgSIAAgBQAAgSgKgMQgKgLgQAAQgQAAgJALg");
	this.shape_11.setTransform(107.2,-322.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_12.setTransform(94.625,-324.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAARQgSABgIAGQgJAJAAASIAAA8g");
	this.shape_13.setTransform(79.325,-322.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghAuQgLgLAAgVIAAhFIARAAIAABEQAAAcAaAAQALAAAJgIQAJgIAAgPIAAhBIARAAIAABtIgRAAIAAgSQgEAJgJAFQgJAGgMAAQgRAAgKgKg");
	this.shape_14.setTransform(68.625,-322.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAQAAAYIAAABQAAAYgPARQgPAPgYAAQgWAAgQgQgAgageQgJAMAAASIAAABQAAATAJALQALAMAPAAQAQAAAKgMQAKgMAAgSIAAgBQAAgSgKgMQgKgLgQAAQgPAAgLALg");
	this.shape_15.setTransform(56.15,-322.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgrhiIATAAIAgBOIAfhOIASAAIg8CTg");
	this.shape_16.setTransform(44.25,-320.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_17.setTransform(29.275,-323.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAqQgPgQAAgZIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhABQAagBADgSIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_18.setTransform(19.775,-322.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxA4QgTgVAAgiIAAgBQAAghAUgVQAUgWAgAAQAYAAAPALQATAMADAYIgSAAQgHghgkAAQgZAAgOARQgOARAAAcIAAABQAAAcANARQAOAQAaAAQAXAAANgOQALgMAAgVIgsAAIAAgPIA+AAIAAALQAAAfgSASQgRARgeAAQghAAgUgVg");
	this.shape_19.setTransform(5.75,-324.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-335.6,151,50.200000000000045);


(lib.SCREEN01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAyIAAhXIgVAQIAAgLIAWgRIALAAIAABjg");
	this.shape.setTransform(94.525,-167.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAzIAAgDIAmgqQAPgPAAgNQAAgIgFgFQgFgFgIAAQgSAAgCAWIgMAAQABgOAJgJQAJgJANAAQAOAAAIAIQAIAHAAANQAAASgUASIgaAbIAuAAIAAAKg");
	this.shape_1.setTransform(88.2,-167.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_2.setTransform(82.625,-163.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAyIAAgVIgxAAIAAgEIAshKIARAAIAABEIAOAAIAAAKIgOAAIAAAVgAgVATIAhAAIAAg7g");
	this.shape_3.setTransform(76.5,-167.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgWIAAgFQAAgWAKgNQALgNARAAQASAAALANQAKANAAAWIAAAFQAAAWgKANQgKANgSAAQgRAAgLgNgAgTgeQgHAKAAASIAAAFQAAAmAbAAQAaAAAAgnIAAgEQAAgSgHgKQgHgLgNAAQgLAAgIALg");
	this.shape_4.setTransform(67.725,-167.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(61.7,-163.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYArQgKgJAAgNIALAAQADAVAUAAQAXAAAAgUQAAgTgVAAIgHAAIAAgJIAGAAQATAAAAgSQAAgQgSAAQgJAAgGAFQgFAFgBAJIgLAAQABgNAJgIQAJgIANAAQANAAAJAIQAIAHAAALQAAAPgQAHQATAEAAAUQAAAOgKAIQgKAHgPAAQgPAAgJgIg");
	this.shape_6.setTransform(55.625,-167.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgWIAAgFQAAgWAKgNQALgNARAAQASAAALANQAKANAAAWIAAAFQAAAWgKANQgKANgTAAQgQAAgLgNgAgTgeQgHAKAAASIAAAFQAAATAIAKQAHAJALAAQAbAAAAgnIAAgEQAAgSgHgKQgHgLgNAAQgLAAgIALg");
	this.shape_7.setTransform(46.775,-167.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhjBNQgGAAAAgGIAAhxQABgFAFAAIBtAAIAAgXQAAgGAGAAIBUAAQAGAAAAAGIAABwQAAAFgHAAIgXAAIAAAZQABAFgHAAgAAtBGIAZAAIAAgZIgZAAgAAQBGIAaAAIAAgZIgaAAgAgMBGIAZAAIAAgZIgZAAgAgoBGIAZAAIAAgZIgZAAgAhFBGIAZAAIAAgZIgZAAgAhiBGIAZAAIAAgZIgZAAgABKApIAZAAIAAgZIgZAAgAAtApIAZAAIAAgZIgZAAgAAQApIAaAAIAAgZIgaAAgAgMApIAZAAIAAgZIgZAAgAgoApIAZAAIAAgZIgZAAgAhFApIAZAAIAAgZIgZAAgAhiApIAZAAIAAgZIgZAAgABKAMIAZAAIAAgYIgZAAgAAtAMIAZAAIAAgYIgZAAgAAQAMIAaAAIAAgYIgaAAgAgMAMIAZAAIAAgYIgZAAgAgoAMIAZAAIAAgYIgZAAgAhFAMIAZAAIAAgYIgZAAgAhiAMIAZAAIAAgYIgZAAgABKgPIAZAAIAAgaIgZAAgAAtgPIAZAAIAAgaIgZAAgAAQgPIAaAAIAAgaIgaAAgAgMgPIAZAAIAAgaIgZAAgAgogPIAZAAIAAgaIgZAAgAhFgPIAZAAIAAgaIgZAAgAhigPIAZAAIAAgaIgZAAgAAtgsIAZAAIAAgZIgZAAgAAQgsIAaAAIAAgaIgaAAg");
	this.shape_8.setTransform(40.325,-135.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBNQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhBIgyhTQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAbAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAhA/IAhg/IACgBIAYAAIABABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIguBUIAABAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_9.setTransform(176.7125,-135.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBNIgCgBIgMglIg6AAIgMAlQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgXAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAyiVQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAiAAIACABIAxCWQAAAAAAABQABAAgBABQAAAAgBAAQAAAAgBAAgAAVASIgVhHIgXBHIAsAAg");
	this.shape_10.setTransform(162.3475,-135.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BNQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAiVQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAsAAQAnAAAUAVQAVAUgBAiIAAABQABAjgVAVQgUAVgnAAgAgiA3IARAAQAzAAAAg2IAAgBQAAg1gzAAIgRAAg");
	this.shape_11.setTransform(145.7,-135.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAeBNIgCgBIgmg9IgSAAIAAA8QAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgZAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAiVQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAxAAQAaAAAPALQAQAMAAAWIAAABQAAAggjAJIAqA/QAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABgAgcgFIAWAAQAdAAAAgYIAAgBQAAgYgdAAIgWAAg");
	this.shape_12.setTransform(128.5,-135.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsA/QgRgQABgdIAAhdQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAaAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAABaQABAWAHAJQAHAJARAAQARAAAHgJQAJgKAAgXIAAhYQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIAYAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAABbQAAAegQAQQgRAQgdAAQgdAAgPgPg");
	this.shape_13.setTransform(111.45,-135.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBNQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAiAIgpAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIBtAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgoAAIAACAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_14.setTransform(94.475,-135.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqBNIgCgBIgMglIg6AAIgMAlQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgXAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBABgBIAyiVQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAiAAIACABIAxCWQABAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAAVASIgVhHIgXBHIAsAAg");
	this.shape_15.setTransform(79.835,-135.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6AgQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAXAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAEAbAdAAQANAAAIgHQAIgGAAgLQAAgLgGgFQgHgFgSgDQgdgEgMgIQgNgLAAgVQAAgTAPgMQAPgNAYAAQAxAAAFAqQABABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgWAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgFgWgXABQgNgBgHAGQgHAFAAAJQAAALAGAEQAHAGASADQAdADAMAKQAOAKAAAWQAAATgPAOQgRAOgZAAQg3AAgFgvg");
	this.shape_16.setTransform(63.575,-135.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBOQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAiVQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAACVQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_17.setTransform(-26.5,-135.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBOQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAiVQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIBbAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAASQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhAAAIAAAuIAyAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgyAAIAAA9QAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_18.setTransform(-38.25,-135.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBNQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAiBIgqAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAgSQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIBvAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAASQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgqAAIAACBQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_19.setTransform(17.2,-135.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6AgQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAYAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQADAbAeAAQAMAAAJgHQAIgGAAgLQAAgLgHgFQgGgFgTgDQgcgEgMgIQgOgLAAgVQAAgUAPgMQAPgNAYAAQAxAAAGArQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgWAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQgFgVgYAAQgNAAgHAGQgHAFAAAJQABALAGAEQAGAGATACQAcAEAMAKQAOAKABAWQAAAUgQANQgQAOgZAAQg5AAgEgvg");
	this.shape_20.setTransform(1.8,-135.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAeBNQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgng9IgSAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgZAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAiXIA0AAQAZAAAQALQAQALAAAXIAAABQAAAggjAJIAqA/QACADgEAAgAgdgFIAXAAQAcAAAAgYIAAgBQAAgYgcAAIgXAAg");
	this.shape_21.setTransform(-13.5417,-135.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-172.9,226,45.10000000000001);


(lib.Lever = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lever
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000E82").s().p("Ag+BcIgBgHQgBgPAEgaQAEgYAGgTIABgDQAGgTAEgIQAGgMAPgPIAQgPQAHgIAPgMIAlAMIAHAEIgrAeQgcAWgKALQgQAQgKA2IgEAUQgEANgCAAIgIABg");
	this.shape.setTransform(0.0222,-0.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBlQgIgEAAgPQgBgQAEgbQAEgZAGgTQAGgXAFgJQAHgPASgRIAagZQAGgGAEgBQAEAAASAFIAXAHQAIADAIAGQAKAIgHADQgJAFgcAVQgiAZgKALQgLAKgHAfIgIAmIgFATQgEAIgIABIgLACIgGgBg");
	this.shape_1.setTransform(-0.015,0.0172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},171).to({state:[]},1).wait(188));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.1,15.3,20.299999999999997);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAsIAAhXIA1AAIAABXg");
	mask.setTransform(2.7,4.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000E82").s().p("AgWAnQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgDACgCIAcgeIgcgdQgFgFAFgFQACgCADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAIAnAnIgnAnQgCADgCAAQgDAAgCgDg");
	this.shape.setTransform(2.825,4.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.3,0.3,5.1000000000000005,8.299999999999999), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArVDEIAAmHIWrAAIAAGHg");
	mask.setTransform(72.575,19.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArGDEQgGAAgEgEQgFgEAAgGIAAlrQAAgGAFgEQAEgEAGAAIWNAAQAGAAAFAEQAEAEAAAGIAAFrQAAAGgEAEQgFAEgGAAg");
	this.shape.setTransform(72.575,19.625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,145.2,39.3), null);


(lib.Cylinder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cylinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AloPkIAAiHQh9gEhYhaQhXhaAAh9IAAspQAAh0BMhXQBLhXBzgQIAAmwIMUAAIAAGvQBzAQBMBXQBMBXAAB0IAAMpQAAB9hYBaQhXBah9AEIAACIgAlVPQIKqAAIAAhzIqqAAgAoqL1QBUBUB3AAIK+AAQB3AABUhUQBVhTACh3I0BAAQABB3BVBTgAqBIjIUCAAIAAsgI0CAAgAl2ojIgJABQhtAMhKBSQhJBRgBBtIUBAAQgBhthKhRQhJhShtgMIgJgBIAAmtIrtAAgABBFRIAFgHIAHgLIAFgNIAAgBIABgDIADgPQABgfgPgbQgSghgFgMQgKgbAFgZQAHgKgWAOQgVAMgKAYQgHAPgCAOIgBAJQgBAGABAGQgRgIgEgVIAAgTQghASgOAkIgEAPQgDALAAAMIAAABQAAAOAFARQAHAVAQARQgMgFgJgGQgKgGgLgJIgBgBIgIgIIgCgCIAAAAQgSgTgLgVQgYgqAAgyIAAgCQAAgXAFgUQAFgTAEgKQAahDA+ghIABAjQAHAnAhAQIAAgYIACgRQAFgcALgZQAVgtAmgXQAOgIAJgCQAJgCgDAFQgJAvAUAyQAJAYAjA8QAbAzgCA7IgFAcIgCAGIAAACQgJAbgSAWIgLAOQgHAJgIAFQgNAKgPAIIgRAHgAkTokIAAlJIImAAIAAFJgABko3ICbAAIAAkiIh3AAIAAA9IgkAAgAhco3IC3AAIAAjlIi3AAgAj/o3ICbAAIAAjlIgkAAIAAg9Ih3AAgAiBskIEBAAIAAg1IkBAAgAgiqMQgOgPAAgUIAAAAQAAgVAOgOQAOgOAUAAQAUAAAOAOQAPAPAAAUQAAAUgPAPQgOAOgUAAQgUAAgOgOgAgdrMQgMAMAAARQABARAMAMQAMAMAQAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgQAAgNAMg");
	this.shape.setTransform(-39.8752,52.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90).to({_off:false},0).wait(179).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,-47.3,132.1,199.2);


(lib.COVERMOTIONFORTWEENING = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D7D").s().p("A4IUUMAAAgonMAwRAAAMAAAAong");
	this.shape.setTransform(-335.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-490,-130,309,260);


(lib.BUBBLE_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BUBBLE_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BdQAIgBAJgEQAkgRANglQAOgkgRgkQgRgqgugMQAigIAeAPQAfAPAPAgQAQAkgOAkQgOAlgkARQgSAIgUAAQgMAAgMgDg");
	this.shape.setTransform(4.8213,-0.2549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72F4AC").s().p("AgsB4QgygSgWgxQgWgwATgxQASgyAxgWQAwgWAxATQAyASAWAxQAWAwgTAxQgSAygxAWQgaAMgbAAQgVAAgXgJg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-12.8,25.700000000000003,25.700000000000003);


(lib.BUBBLE_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BUBBLE_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglA7IAKgEQAXgKAIgYQAJgWgKgXQgLgagdgIQAVgFATAJQAUAKAJAUQALAXgJAWQgJAYgXAKQgMAGgNAAQgHAAgHgCg");
	this.shape.setTransform(3.8577,0.0385);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72F4AC").s().p("AgeBSQgigNgPghQgPghANghQANgiAhgPQAhgPAhANQAiANAPAhQAPAhgNAhQgNAighAPQgSAIgSAAQgOAAgQgGg");
	this.shape_1.setTransform(0.0323,0.0323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-8.7,17.5,17.5);


(lib.BUBBLE_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BUBBLE_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BdIARgGQAkgQANglQAOglgRgkQgIgUgRgOQgRgOgVgFQAigIAeAPQAfAPAPAfQAQAkgOAlQgOAlgkAQQgSAJgUAAQgMAAgMgDg");
	this.shape.setTransform(4.8213,-0.2583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72F4AC").s().p("AgsB4QgygSgWgxQgWgwATgxQASgyAxgWQAwgWAxATQAyASAWAxQAWAwgTAxQgSAygxAWQgaAMgaAAQgWAAgXgJg");
	this.shape_1.setTransform(0.025,-0.0073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},90).wait(270));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-12.9,25.700000000000003,25.8);


(lib.Bottle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bottle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNLPQgsgEghgmIhVhpIhUhoQgbghgDgmQgFg2AvggIEUjCQgNgXkxjDIlGjSIAJgMQAQAME2DKQE1DIASAOQA9goAUgPQASgNAYAIQBDAZA7giIBEgpQAagQAUgHQAagIAZACQANABAGAFQAGAGgDAOIAAAZQAAAXAMAOQANANAUAAQAUAAAMgNQANgNABgWIAChRQABgegagSQg2gmgagVQgWgRgdAFIjlAlQgUADgPgNIgsgjIptoJIAGgIQAJAGFIERQFGEPAKAHQAHAEAPgCIDDgfQAogGAOABQAdACATAWQAeg8A+APIA0ALQBBAPAnAzQAZAiBmB8QAIAJgBAHQAAAGgKAHQgNAJgYAVQgMAKgKgNIgQgUIgEgFIgLgSQgIgJgIgEQgWgJgTgFQgMgEgbgBQgLAAgMACQgRAFgGAJQgGAHgRAOIhFA6IBBAvQAYARgOAnQgHAPgIAGQgGAGgOAFIgZAIQAFAnggASQgdAQglgZQgIAjgQALQgPALgjgGQADAggSAbQgLAQgfAdQi8CuhGBHQghAhgqAAIgIAAgAAWA4QgGABgEACQgfAUguAgIkkDLQgnAbgHAjQgIAkAcAkQBXBzBcBsQAeAjAkABQAkABAiggIEhkRQAagZgEgqQgBgGgHgIIgOgNQgPgPACgVQABgWASgOQAFgFANgIQgcghAOghQAOggAnABIAJgcQAGgPAGgHQAHgHANgGIAWgIIgIhKQghgJgjATQgXAMgzAfQhUAzhRgdIgGgBIgEAAgAD0DwQgOAGgHAPQgFALADAMQADANAKAGQALAGAUAOQASAKARgNQANgLACgPQACgPgKgKQgRgQgSgKQgIgFgJAAQgFAAgGACgAEOCOQgOADgJAMQgIALABAOQABAPAMAPIAxAjIA2AlQALAIAOgFQAOgEAIgMQAJgLAAgOQgBgPgKgIQgtgkg9gqQgHgEgJAAIgJABgAFPBJQgOAEgJALQgJALABAPQABAOALAOIAyAlIA3AlQALAHAOgFQAOgEAIgMQAIgMgBgOQgBgPgKgIQg0gog0gkQgIgFgJAAIgIABgAKLAXIAHAKIAbAiIArgjIgjgqgAHLAgIAdgXIgcgigAJ2AIQAKAEAFgEQAPgJAZgVIgyg+Igyg9QgVgYgTgGQgsgOhLgPQgMgDgPAKQgQAKgEAMQgBAEACAGQABAGADADIAxAkQAeAWgDAYQgCASAJAPQAEAIAQASQAJAJAJgDQAUgEATAAQAtAAApAVg");
	this.shape.setTransform(0.0016,0.0153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000E82").s().p("AiVB7IgKgKQgFgGgCgIQgCgFgFg2QgBgWAKgcQAMgiAWgYQAWgZBDgXQA/gVAPAHQAMAGASASQAKALAWAaQAVAaA2BHQgZASgKAFIgPAHQgKAEgHgFIgogNQgigEgLAAQgTAAgTAJQgKAFgJASQgDAGgcAVQgbAUgPAJQgJAFgIAAQgMAAgMgKg");
	this.shape_1.setTransform(52.0656,-4.7377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(360));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000D7D").s().p("AAMBEQgQgJgOgMIgkgdQgYgUgFgGQgGgHgBgOQgBgNADgIQACgHAKgIQAKgJAJgDQAJgDAFABQAJABARAJQAPAJAyAnQAmAYAEARQADALgDANQgCAOgGAFQgGAFgOAGQgPAGgIAAQgHAAgUgMg");
	this.shape_2.setTransform(38.9482,14.6714);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-71.9,148.7,143.9);


(lib.Spray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SprayMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_90 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_91 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_92 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_93 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_94 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_95 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_96 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_97 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_98 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_99 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_100 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_101 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_102 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_103 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_104 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_105 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_106 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_107 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_108 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_109 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_110 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_111 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_112 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_113 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_114 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_115 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_116 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_117 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_118 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_119 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_120 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_121 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_122 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_123 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_124 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_125 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_126 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_127 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_128 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_129 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_130 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_131 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_132 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_133 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_134 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_135 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_136 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_137 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_138 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_139 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_140 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_141 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_142 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_143 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_144 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_145 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_146 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_147 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_148 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_149 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_150 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_151 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_152 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_153 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_154 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_155 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_156 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_157 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_158 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_159 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_160 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_161 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_162 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_163 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_164 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_165 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_166 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_167 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_168 = new cjs.Graphics().p("Almh3Qg5grgUhEQBngHBIhMQBHhMAAhoIAAgLQBMANAyA8QAzA8AABPQAABZg/BAQg/A/haAAQhJAAg5grg");
	var mask_graphics_169 = new cjs.Graphics().p("AlThMQg/gugVhLQBxgHBOhUQBOhTAAhyIAAgNQBTAPA4BCQA2BCAABWQAABihEBGQhGBFhiAAQhPAAg/gwg");
	var mask_graphics_170 = new cjs.Graphics().p("AlAggQhEgzgYhQQB7gJBVhaQBUhbAAh9IAAgNQBcAQA7BHQA8BIAABeQAABrhLBMQhLBKhrAAQhWAAhEgzg");
	var mask_graphics_171 = new cjs.Graphics().p("AkuALQhJg2gahXQCFgKBchhQBbhiAAiHIAAgOQBiARBBBNQBCBOAABlQAAB0hSBSQhRBQh0AAQhdAAhKg4g");
	var mask_graphics_172 = new cjs.Graphics().p("AkbA3QhPg7gchdQCPgKBjhpQBihpAAiSIAAgPQBpASBGBTQBHBUAABtQAAB8hYBYQhYBXh8AAQhkAAhPg8g");
	var mask_graphics_173 = new cjs.Graphics().p("AkJBiQhUg/gehjQCZgLBqhwQBphxAAibIAAgQQBwATBLBZQBMBaAAB0QAACFheBeQheBdiEAAQhsAAhVhBg");
	var mask_graphics_174 = new cjs.Graphics().p("Aj2COQhahDgfhqQCigLBxh4QBvh4AAilIAAgSQB5AVBPBfQBRBfAAB8QAACNhkBkQhlBkiMAAQhzAAhahFg");
	var mask_graphics_175 = new cjs.Graphics().p("AjhCgQhahDgfhqQCjgMBxh4QBvh4AAimIAAgRQB5AVBQBeQBQBgAAB9QAACNhkBkQhkBkiNAAQhzAAhbhFg");
	var mask_graphics_176 = new cjs.Graphics().p("AjVCyQhahEgghrQCkgKBxh5QBwh4AAimIAAgSQB5AVBQBfQBRBgAAB9QAACNhkBlQhmBliNAAQhzAAhbhGg");
	var mask_graphics_177 = new cjs.Graphics().p("AjVDEQhbhEgghrQCkgMByh3QBwh5AAinIAAgRQB5AVBRBfQBRBgAAB9QAACOhlBlQhlBliOAAQhzAAhbhGg");
	var mask_graphics_178 = new cjs.Graphics().p("AjWDWQhbhEgfhsQCkgLByh4QBwh5AAinIAAgSQB6AVBQBgQBRBgAAB+QAACOhkBlQhmBliOAAQh0AAhbhGg");
	var mask_graphics_179 = new cjs.Graphics().p("AjWDoQhbhEgghsQCkgMBzh4QBwh5AAioIAAgRQB6AVBRBgQBRBgAAB+QAACOhlBmQhmBliOAAQh0AAhbhGg");
	var mask_graphics_180 = new cjs.Graphics().p("AjXD6QhbhEgghtQClgLBzh5QBwh5AAioIAAgSQB7AWBQBfQBSBhAAB+QAACPhlBmQhmBliPAAQh0AAhchGg");
	var mask_graphics_181 = new cjs.Graphics().p("AjXEMQhchEgghtQCmgMByh4QBxh6AAioIAAgSQB7AVBRBgQBSBhAAB/QAACPhmBmQhmBliPAAQh1AAhbhGg");
	var mask_graphics_182 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_183 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_184 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_185 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_186 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_187 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_188 = new cjs.Graphics().p("Almh3Qg5grgUhEQBngHBIhMQBHhMAAhoIAAgLQBMANAyA8QAzA8AABPQAABZg/BAQg/A/haAAQhJAAg5grg");
	var mask_graphics_189 = new cjs.Graphics().p("AlThMQg/gugVhLQBxgHBOhUQBOhTAAhyIAAgNQBTAPA4BCQA2BCAABWQAABihEBGQhGBFhiAAQhPAAg/gwg");
	var mask_graphics_190 = new cjs.Graphics().p("AlAggQhEgzgYhQQB7gJBVhaQBUhbAAh9IAAgNQBcAQA7BHQA8BIAABeQAABrhLBMQhLBKhrAAQhWAAhEgzg");
	var mask_graphics_191 = new cjs.Graphics().p("AkuALQhJg2gahXQCFgKBchhQBbhiAAiHIAAgOQBiARBBBNQBCBOAABlQAAB0hSBSQhRBQh0AAQhdAAhKg4g");
	var mask_graphics_192 = new cjs.Graphics().p("AkbA3QhPg7gchdQCPgKBjhpQBihpAAiSIAAgPQBpASBGBTQBHBUAABtQAAB8hYBYQhYBXh8AAQhkAAhPg8g");
	var mask_graphics_193 = new cjs.Graphics().p("AkJBiQhUg/gehjQCZgLBqhwQBphxAAibIAAgQQBwATBLBZQBMBaAAB0QAACFheBeQheBdiEAAQhsAAhVhBg");
	var mask_graphics_194 = new cjs.Graphics().p("Aj2COQhahDgfhqQCigLBxh4QBvh4AAilIAAgSQB5AVBPBfQBRBfAAB8QAACNhkBkQhlBkiMAAQhzAAhahFg");
	var mask_graphics_195 = new cjs.Graphics().p("AjhCgQhahDgfhqQCjgMBxh4QBvh4AAimIAAgRQB5AVBQBeQBQBgAAB9QAACNhkBkQhkBkiNAAQhzAAhbhFg");
	var mask_graphics_196 = new cjs.Graphics().p("AjVCyQhahEgghrQCkgKBxh5QBwh4AAimIAAgSQB5AVBQBfQBRBgAAB9QAACNhkBlQhmBliNAAQhzAAhbhGg");
	var mask_graphics_197 = new cjs.Graphics().p("AjVDEQhbhEgghrQCkgMByh3QBwh5AAinIAAgRQB5AVBRBfQBRBgAAB9QAACOhlBlQhlBliOAAQhzAAhbhGg");
	var mask_graphics_198 = new cjs.Graphics().p("AjWDWQhbhEgfhsQCkgLByh4QBwh5AAinIAAgSQB6AVBQBgQBRBgAAB+QAACOhkBlQhmBliOAAQh0AAhbhGg");
	var mask_graphics_199 = new cjs.Graphics().p("AjWDoQhbhEgghsQCkgMBzh4QBwh5AAioIAAgRQB6AVBRBgQBRBgAAB+QAACOhlBmQhmBliOAAQh0AAhbhGg");
	var mask_graphics_200 = new cjs.Graphics().p("AjXD6QhbhEgghtQClgLBzh5QBwh5AAioIAAgSQB7AWBQBfQBSBhAAB+QAACPhlBmQhmBliPAAQh0AAhchGg");
	var mask_graphics_201 = new cjs.Graphics().p("AjXEMQhchEgghtQCmgMByh4QBxh6AAioIAAgSQB7AVBRBgQBSBhAAB/QAACPhmBmQhmBliPAAQh1AAhbhGg");
	var mask_graphics_202 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_203 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_204 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_205 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_206 = new cjs.Graphics().p("AjYETQhchFgghtQCmgLBzh6QBxh6AAioIAAgSQB7AVBSBhQBSBhAAB+QAACQhmBmQhnBmiPAAQh1AAhchGg");
	var mask_graphics_207 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_208 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_209 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_210 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_211 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_212 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_213 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_214 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_215 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_216 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_217 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_218 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_219 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_220 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_221 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_222 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_223 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_224 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_225 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_226 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_227 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_228 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_229 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_230 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_231 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_232 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_233 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_234 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_235 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_236 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_237 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_238 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_239 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_240 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_241 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_242 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_243 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_244 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_245 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_246 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_247 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_248 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_249 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_250 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_251 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_252 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_253 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_254 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_255 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_256 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_257 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_258 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_259 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_260 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_261 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_262 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_263 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_264 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_265 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_266 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_267 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_268 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_269 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_361 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_362 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_363 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_364 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_365 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_366 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_367 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_368 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_369 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_370 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_371 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_372 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");
	var mask_graphics_373 = new cjs.Graphics().p("Al4ijQg0gngSg9QBdgGBBhFQBAhEAAhfIAAgKQBFAMAtA2QAuA3AABHQAABRg5A5Qg5A5hRAAQhCAAgzgng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_graphics_90,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_91,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_92,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_93,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_94,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_95,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_96,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_97,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_98,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_99,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_100,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_101,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_102,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_103,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_104,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_105,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_106,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_107,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_108,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_109,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_110,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_111,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_112,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_113,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_114,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_115,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_116,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_117,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_118,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_119,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_120,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_121,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_122,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_123,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_124,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_125,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_126,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_127,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_128,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_129,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_130,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_131,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_132,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_133,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_134,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_135,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_136,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_137,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_138,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_139,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_140,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_141,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_142,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_143,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_144,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_145,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_146,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_147,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_148,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_149,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_150,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_151,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_152,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_153,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_154,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_155,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_156,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_157,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_158,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_159,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_160,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_161,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_162,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_163,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_164,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_165,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_166,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_167,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_168,x:-43.5569,y:-50.5185}).wait(1).to({graphics:mask_graphics_169,x:-42.4387,y:-49.8619}).wait(1).to({graphics:mask_graphics_170,x:-41.3206,y:-49.2054}).wait(1).to({graphics:mask_graphics_171,x:-40.2025,y:-48.5488}).wait(1).to({graphics:mask_graphics_172,x:-39.0843,y:-47.8923}).wait(1).to({graphics:mask_graphics_173,x:-37.9662,y:-47.2358}).wait(1).to({graphics:mask_graphics_174,x:-36.8481,y:-46.5792}).wait(1).to({graphics:mask_graphics_175,x:-34.7483,y:-44.9282}).wait(1).to({graphics:mask_graphics_176,x:-31.7214,y:-43.2772}).wait(1).to({graphics:mask_graphics_177,x:-27.4405,y:-41.6262}).wait(1).to({graphics:mask_graphics_178,x:-23.1595,y:-39.9752}).wait(1).to({graphics:mask_graphics_179,x:-18.8786,y:-38.3242}).wait(1).to({graphics:mask_graphics_180,x:-14.5976,y:-36.6732}).wait(1).to({graphics:mask_graphics_181,x:-10.3167,y:-35.0222}).wait(1).to({graphics:mask_graphics_182,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_183,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_184,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_185,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_186,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_187,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_188,x:-43.5569,y:-50.5185}).wait(1).to({graphics:mask_graphics_189,x:-42.4387,y:-49.8619}).wait(1).to({graphics:mask_graphics_190,x:-41.3206,y:-49.2054}).wait(1).to({graphics:mask_graphics_191,x:-40.2025,y:-48.5488}).wait(1).to({graphics:mask_graphics_192,x:-39.0843,y:-47.8923}).wait(1).to({graphics:mask_graphics_193,x:-37.9662,y:-47.2358}).wait(1).to({graphics:mask_graphics_194,x:-36.8481,y:-46.5792}).wait(1).to({graphics:mask_graphics_195,x:-34.7483,y:-44.9282}).wait(1).to({graphics:mask_graphics_196,x:-31.7214,y:-43.2772}).wait(1).to({graphics:mask_graphics_197,x:-27.4405,y:-41.6262}).wait(1).to({graphics:mask_graphics_198,x:-23.1595,y:-39.9752}).wait(1).to({graphics:mask_graphics_199,x:-18.8786,y:-38.3242}).wait(1).to({graphics:mask_graphics_200,x:-14.5976,y:-36.6732}).wait(1).to({graphics:mask_graphics_201,x:-10.3167,y:-35.0222}).wait(1).to({graphics:mask_graphics_202,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_203,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_204,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_205,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_206,x:-6.0357,y:-32.2321}).wait(1).to({graphics:mask_graphics_207,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_208,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_209,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_210,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_211,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_212,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_213,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_214,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_215,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_216,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_217,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_218,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_219,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_220,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_221,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_222,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_223,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_224,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_225,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_226,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_227,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_228,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_229,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_230,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_231,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_232,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_233,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_234,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_235,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_236,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_237,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_238,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_239,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_240,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_241,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_242,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_243,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_244,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_245,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_246,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_247,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_248,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_249,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_250,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_251,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_252,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_253,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_254,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_255,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_256,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_257,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_258,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_259,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_260,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_261,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_262,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_263,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_264,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_265,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_266,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_267,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_268,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_269,x:-44.675,y:-51.175}).wait(1).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_graphics_361,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_362,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_363,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_364,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_365,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_366,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_367,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_368,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_369,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_370,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_371,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_372,x:-44.675,y:-51.175}).wait(1).to({graphics:mask_graphics_373,x:-44.675,y:-51.175}).wait(1));

	// Spray
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#72F4AC").ss(1.5).p("AjUhHIGpCQ");
	this.shape.setTransform(-33.061,-57.3349,1,1,16.696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#72F4AC").ss(1.5).p("AgriKIBXEV");
	this.shape_1.setTransform(-57.7438,-52.3145,1,1,16.696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#72F4AC").ss(1.5).p("AiChyIEFDl");
	this.shape_2.setTransform(-45.4431,-53.819,1,1,16.696);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},90).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},179).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},91).to({state:[]},8).wait(5));

	// Bottle
	this.instance = new lib.Bottle("synched",0);
	this.instance.setTransform(-129.5,-78.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).to({_off:true},1).wait(104));

	// Lever
	this.instance_1 = new lib.Lever("synched",0);
	this.instance_1.setTransform(-65.5,-78.05,1,1,0,0,0,7,-7.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-72.5,y:-70.25,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({regX:7,regY:-7.8,x:-65.5,y:-78.05,startPosition:0},0).wait(1).to({regX:0,regY:0,rotation:2.1017,x:-72.7795,y:-70.5119,startPosition:1},0).wait(1).to({rotation:4.2035,x:-73.0492,y:-70.7839,startPosition:2},0).wait(1).to({rotation:6.3052,x:-73.3088,y:-71.0657,startPosition:3},0).wait(1).to({rotation:8.407,x:-73.5579,y:-71.3567,startPosition:4},0).wait(1).to({rotation:10.5087,x:-73.7961,y:-71.6567,startPosition:5},0).wait(1).to({rotation:12.6105,x:-74.0231,y:-71.9652,startPosition:6},0).wait(1).to({rotation:14.7122,x:-74.2387,y:-72.2818,startPosition:7},0).wait(1).to({rotation:12.8732,x:-74.0507,y:-72.0043,startPosition:8},0).wait(1).to({rotation:11.0342,x:-73.8539,y:-71.733,startPosition:9},0).wait(1).to({rotation:9.1951,x:-73.6485,y:-71.4682,startPosition:10},0).wait(1).to({rotation:7.3561,x:-73.4347,y:-71.21,startPosition:11},0).wait(1).to({rotation:5.5171,x:-73.2127,y:-70.9589,startPosition:12},0).wait(1).to({rotation:3.6781,x:-72.9827,y:-70.715,startPosition:13},0).wait(1).to({rotation:1.839,x:-72.7451,y:-70.4786,startPosition:14},0).wait(1).to({rotation:0,x:-72.5,y:-70.25,startPosition:15},0).wait(1).to({rotation:2.1017,x:-72.7795,y:-70.5119,startPosition:16},0).wait(1).to({rotation:4.2035,x:-73.0492,y:-70.7839,startPosition:17},0).wait(1).to({rotation:6.3052,x:-73.3088,y:-71.0657,startPosition:18},0).wait(1).to({rotation:8.407,x:-73.5579,y:-71.3567,startPosition:19},0).wait(1).to({rotation:10.5087,x:-73.7961,y:-71.6567,startPosition:20},0).wait(1).to({rotation:12.6105,x:-74.0231,y:-71.9652,startPosition:21},0).wait(1).to({rotation:14.7122,x:-74.2387,y:-72.2818,startPosition:22},0).wait(1).to({rotation:12.6105,x:-74.0231,y:-71.9652,startPosition:23},0).wait(1).to({rotation:10.5087,x:-73.7961,y:-71.6567,startPosition:24},0).wait(1).to({rotation:8.407,x:-73.5579,y:-71.3567,startPosition:25},0).wait(1).to({rotation:6.3052,x:-73.3088,y:-71.0657,startPosition:26},0).wait(1).to({rotation:4.2035,x:-73.0492,y:-70.7839,startPosition:27},0).wait(1).to({rotation:2.1017,x:-72.7795,y:-70.5119,startPosition:28},0).wait(1).to({rotation:0,x:-72.5,y:-70.25,startPosition:29},0).wait(1).to({regX:7,regY:-7.8,x:-65.5,y:-78.05,startPosition:0},0).wait(1).to({regX:0,regY:0,x:-72.5,y:-70.25,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).to({_off:true},1).wait(91).to({_off:false,regX:7,regY:-7.8,x:-65.5,y:-78.05,startPosition:0},0).wait(1).to({regX:0,regY:0,x:-72.5,y:-70.25,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).to({_off:true},1).wait(5));

	// Trigger_Finger
	this.instance_2 = new lib.Trigger_Finger("synched",0);
	this.instance_2.setTransform(-79.15,-68.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(1).to({x:-79.1515,y:-68.3015,startPosition:1},0).wait(1).to({x:-79.153,y:-68.303,startPosition:2},0).wait(1).to({x:-79.1545,y:-68.3045,startPosition:3},0).wait(1).to({x:-79.156,y:-68.306,startPosition:4},0).wait(1).to({x:-79.1575,y:-68.3075,startPosition:5},0).wait(1).to({x:-79.159,y:-68.309,startPosition:6},0).wait(1).to({x:-79.1605,y:-68.3105,startPosition:7},0).wait(1).to({x:-79.162,y:-68.312,startPosition:8},0).wait(1).to({x:-79.1635,y:-68.3135,startPosition:9},0).wait(1).to({x:-79.165,y:-68.315,startPosition:10},0).wait(1).to({x:-79.1665,y:-68.3165,startPosition:11},0).wait(1).to({x:-79.168,y:-68.318,startPosition:12},0).wait(1).to({x:-79.1695,y:-68.3195,startPosition:13},0).wait(1).to({x:-79.171,y:-68.321,startPosition:14},0).wait(1).to({x:-79.1725,y:-68.3225,startPosition:15},0).wait(1).to({x:-79.174,y:-68.324,startPosition:16},0).wait(1).to({x:-79.1754,y:-68.3254,startPosition:17},0).wait(1).to({x:-79.1769,y:-68.3269,startPosition:18},0).wait(1).to({x:-79.1784,y:-68.3284,startPosition:19},0).wait(1).to({x:-79.1799,y:-68.3299,startPosition:20},0).wait(1).to({x:-79.1814,y:-68.3314,startPosition:21},0).wait(1).to({x:-79.1829,y:-68.3329,startPosition:22},0).wait(1).to({x:-79.1844,y:-68.3344,startPosition:23},0).wait(1).to({x:-79.1859,y:-68.3359,startPosition:24},0).wait(1).to({x:-79.1874,y:-68.3374,startPosition:25},0).wait(1).to({x:-79.1889,y:-68.3389,startPosition:26},0).wait(1).to({x:-79.1904,y:-68.3404,startPosition:27},0).wait(1).to({x:-79.1919,y:-68.3419,startPosition:28},0).wait(1).to({x:-79.1934,y:-68.3434,startPosition:29},0).wait(1).to({x:-79.1949,y:-68.3449,startPosition:30},0).wait(1).to({x:-79.1964,y:-68.3464,startPosition:31},0).wait(1).to({x:-79.1979,y:-68.3479,startPosition:32},0).wait(1).to({x:-79.1994,y:-68.3494,startPosition:33},0).wait(1).to({x:-79.2009,y:-68.3509,startPosition:34},0).wait(1).to({x:-79.2024,y:-68.3524,startPosition:35},0).wait(1).to({x:-79.2039,y:-68.3539,startPosition:36},0).wait(1).to({x:-79.2054,y:-68.3554,startPosition:37},0).wait(1).to({x:-79.2069,y:-68.3569,startPosition:38},0).wait(1).to({x:-79.2084,y:-68.3584,startPosition:39},0).wait(1).to({x:-79.2099,y:-68.3599,startPosition:40},0).wait(1).to({x:-79.2114,y:-68.3614,startPosition:41},0).wait(1).to({x:-79.2129,y:-68.3629,startPosition:42},0).wait(1).to({x:-79.2144,y:-68.3644,startPosition:43},0).wait(1).to({x:-79.2159,y:-68.3659,startPosition:44},0).wait(1).to({x:-79.2174,y:-68.3674,startPosition:45},0).wait(1).to({x:-79.2189,y:-68.3689,startPosition:46},0).wait(1).to({x:-79.2204,y:-68.3704,startPosition:47},0).wait(1).to({x:-79.2219,y:-68.3719,startPosition:48},0).wait(1).to({x:-79.2234,y:-68.3734,startPosition:49},0).wait(1).to({x:-79.2248,y:-68.3748,startPosition:50},0).wait(1).to({x:-79.2263,y:-68.3763,startPosition:51},0).wait(1).to({x:-79.2278,y:-68.3778,startPosition:52},0).wait(1).to({x:-79.2293,y:-68.3793,startPosition:53},0).wait(1).to({x:-79.2308,y:-68.3808,startPosition:54},0).wait(1).to({x:-79.2323,y:-68.3823,startPosition:55},0).wait(1).to({x:-79.2338,y:-68.3838,startPosition:56},0).wait(1).to({x:-79.2353,y:-68.3853,startPosition:57},0).wait(1).to({x:-79.2368,y:-68.3868,startPosition:58},0).wait(1).to({x:-79.2383,y:-68.3883,startPosition:59},0).wait(1).to({x:-79.2398,y:-68.3898,startPosition:60},0).wait(1).to({x:-79.2413,y:-68.3913,startPosition:61},0).wait(1).to({x:-79.2428,y:-68.3928,startPosition:62},0).wait(1).to({x:-79.2443,y:-68.3943,startPosition:63},0).wait(1).to({x:-79.2458,y:-68.3958,startPosition:64},0).wait(1).to({x:-79.2473,y:-68.3973,startPosition:65},0).wait(1).to({x:-79.2488,y:-68.3988,startPosition:66},0).wait(1).to({x:-79.2503,y:-68.4003,startPosition:67},0).wait(1).to({x:-79.2518,y:-68.4018,startPosition:68},0).wait(1).to({x:-79.2533,y:-68.4033,startPosition:69},0).wait(1).to({x:-79.2548,y:-68.4048,startPosition:70},0).wait(1).to({x:-79.2563,y:-68.4063,startPosition:71},0).wait(1).to({x:-79.2578,y:-68.4078,startPosition:72},0).wait(1).to({x:-79.2593,y:-68.4093,startPosition:73},0).wait(1).to({x:-79.2608,y:-68.4108,startPosition:74},0).wait(1).to({x:-79.2623,y:-68.4123,startPosition:75},0).wait(1).to({x:-79.2638,y:-68.4138,startPosition:76},0).wait(1).to({x:-79.3,y:-68.45,startPosition:0},0).wait(1).to({x:-79.6929,y:-68.7,startPosition:1},0).wait(1).to({x:-80.0857,y:-68.95,startPosition:2},0).wait(1).to({x:-80.4786,y:-69.2,startPosition:3},0).wait(1).to({x:-80.8714,y:-69.45,startPosition:4},0).wait(1).to({x:-81.2643,y:-69.7,startPosition:5},0).wait(1).to({x:-81.6571,y:-69.95,startPosition:6},0).wait(1).to({x:-82.05,y:-70.2,startPosition:7},0).wait(1).to({x:-81.7062,y:-69.9812,startPosition:8},0).wait(1).to({x:-81.3625,y:-69.7625,startPosition:9},0).wait(1).to({x:-81.0187,y:-69.5437,startPosition:10},0).wait(1).to({x:-80.675,y:-69.325,startPosition:11},0).wait(1).to({x:-80.3312,y:-69.1062,startPosition:12},0).wait(1).to({x:-79.9875,y:-68.8875,startPosition:13},0).wait(1).to({x:-79.6437,y:-68.6687,startPosition:14},0).wait(1).to({x:-79.3,y:-68.45,startPosition:15},0).wait(1).to({x:-79.6929,y:-68.7,startPosition:16},0).wait(1).to({x:-80.0857,y:-68.95,startPosition:17},0).wait(1).to({x:-80.4786,y:-69.2,startPosition:18},0).wait(1).to({x:-80.8714,y:-69.45,startPosition:19},0).wait(1).to({x:-81.2643,y:-69.7,startPosition:20},0).wait(1).to({x:-81.6571,y:-69.95,startPosition:21},0).wait(1).to({x:-82.05,y:-70.2,startPosition:22},0).wait(1).to({x:-81.6571,y:-69.95,startPosition:23},0).wait(1).to({x:-81.2643,y:-69.7,startPosition:24},0).wait(1).to({x:-80.8714,y:-69.45,startPosition:25},0).wait(1).to({x:-80.4786,y:-69.2,startPosition:26},0).wait(1).to({x:-80.0857,y:-68.95,startPosition:27},0).wait(1).to({x:-79.6929,y:-68.7,startPosition:28},0).wait(1).to({x:-79.3,y:-68.45,startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).to({_off:true},1).wait(91).to({_off:false,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.8,-150.6,190.10000000000002,143.79999999999998);


(lib.SparkleBurst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sparkle_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_194 = new cjs.Graphics().p("AAAACIAAgBIgBAAIAAgBIAAAAIABAAIAAgBIAAAAIABAAIAAABIABAAIAAAAIAAABIgBAAIAAABIgBAAIAAAAgAAAAAIAAAAIAAABIAAAAIABAAIAAgBIAAAAIgBAAIAAAAg");
	var mask_graphics_195 = new cjs.Graphics().p("AhQDAQgmgQgcgdQgdgdgQglQgRgmAAgrQAAgqARgmQAQgmAdgdQAcgcAmgQQAmgRAqAAQArAAAmARQAmAQAcAcQAdAdAQAmQARAmAAAqQAAArgRAmQgQAlgdAdQgcAdgmAQQgmARgrAAQgqAAgmgRgAg5g5QgYAYAAAhQAAAiAYAYQAYAYAhAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQghAAgYAYg");
	var mask_graphics_196 = new cjs.Graphics().p("AhdDfQgrgTgighQghgigTgrQgTgtAAgxQAAgwATgtQATgrAhgiQAighArgTQAtgTAwAAQAxAAAtATQArATAiAhQAhAiATArQATAtAAAwQAAAxgTAtQgTArghAiQgiAhgrATQgtATgxAAQgwAAgtgTgAhDhDQgbAcAAAnQAAAnAbAdQAdAbAmAAQAnAAAdgbQAbgdAAgnQAAgngbgcQgdgbgnAAQgmAAgdAbg");
	var mask_graphics_197 = new cjs.Graphics().p("AhqD9QgxgVgmgmQgmgmgVgxQgVgzAAg4QAAg3AVgzQAVgxAmgmQAmgmAxgVQAzgVA3AAQA4AAAzAVQAxAVAmAmQAmAmAVAxQAVAzAAA3QAAA4gVAzQgVAxgmAmQgmAmgxAVQgzAVg4AAQg3AAgzgVgAhMhMQgfAgAAAsQAAAtAfAgQAgAfAsAAQAtAAAggfQAfggAAgtQAAgsgfggQgggfgtAAQgsAAggAfg");
	var mask_graphics_198 = new cjs.Graphics().p("Ah3EbQg3gXgqgrQgrgrgXg3QgYg4AAg/QAAg+AYg5QAXg3ArgrQAqgqA3gXQA5gYA+AAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+QAAA/gYA4QgXA3grArQgqArg3AXQg5AYg/AAQg+AAg5gYgAhVhVQgjAjAAAyQAAAyAjAkQAkAjAxAAQAyAAAkgjQAjgkAAgyQAAgygjgjQgkgjgyAAQgxAAgkAjg");
	var mask_graphics_199 = new cjs.Graphics().p("AiEE5Qg9gZgugwQgwgvgZg9Qgbg/AAhFQAAhEAbhAQAZg9AwgvQAugvA9gZQBAgbBEAAQBFAABAAbQA9AZAuAvQAwAvAZA9QAbBAAABEQAABFgbA/QgZA9gwAvQguAwg9AZQhAAbhFAAQhEAAhAgbgAheheQgnAnAAA3QAAA3AnAoQAoAnA2AAQA3AAAognQAngoAAg3QAAg3gngnQgogng3AAQg2AAgoAng");
	var mask_graphics_200 = new cjs.Graphics().p("AiQFYQhDgdg0gzQgzg0gdhDQgdhFAAhMQAAhLAdhFQAdhDAzg0QA0gzBDgdQBFgdBLAAQBMAABFAdQBDAdA0AzQAzA0AdBDQAdBFAABLQAABMgdBFQgdBDgzA0Qg0AzhDAdQhFAdhMAAQhLAAhFgdgAhnhnQgrArAAA8QAAA9ArArQArArA8AAQA9AAArgrQArgrAAg9QAAg8grgrQgrgrg9AAQg8AAgrArg");
	var mask_graphics_201 = new cjs.Graphics().p("AidF2QhJgfg4g4Qg4g5gfhIQgghLAAhTQAAhSAghLQAfhJA4g4QA4g4BJgfQBLggBSAAQBTAABLAgQBJAfA4A4QA4A4AfBJQAgBLAABSQAABTggBLQgfBIg4A5Qg4A4hJAfQhLAghTAAQhSAAhLgggAhxhwQguAuAABCQAABCAuAwQAwAuBBAAQBCAAAvguQAvgwAAhCQAAhCgvguQgvgvhCAAQhBAAgwAvg");
	var mask_graphics_202 = new cjs.Graphics().p("AiqGUQhPghg8g9Qg9g9ghhPQgjhRAAhZQAAhYAjhSQAhhPA9g9QA8g8BPghQBSgjBYAAQBZAABSAjQBPAhA8A8QA9A9AhBPQAjBSAABYQAABZgjBRQghBPg9A9Qg8A9hPAhQhSAjhZAAQhYAAhSgjgAh6h6QgyAzAABHQAABIAyAzQAzAyBHAAQBIAAAzgyQAygzAAhIQAAhHgygzQgzgyhIAAQhHAAgzAyg");
	var mask_graphics_203 = new cjs.Graphics().p("Ai3GzQhUgkhBhCQhChBgkhVQglhXAAhgQAAhfAlhYQAkhUBChCQBBhBBUgkQBYglBfAAQBgAABYAlQBUAkBBBBQBCBCAkBUQAlBYAABfQAABgglBXQgkBVhCBBQhBBChUAkQhYAlhgAAQhfAAhYglgAiDiDQg2A2AABNQAABNA2A3QA3A2BMAAQBNAAA3g2QA2g3AAhNQAAhNg2g2Qg3g2hNAAQhMAAg3A2g");
	var mask_graphics_204 = new cjs.Graphics().p("AjEHRQhagmhFhHQhHhGgmhaQgnhdAAhnQAAhmAnheQAmhaBHhGQBFhGBagmQBegnBmAAQBnAABeAnQBaAmBFBGQBHBGAmBaQAnBeAABmQAABngnBdQgmBahHBGQhFBHhaAmQheAnhnAAQhmAAhegngAiMiMQg6A6AABSQAABSA6A7QA7A6BRAAQBSAAA7g6QA6g7AAhSQAAhSg6g6Qg7g6hSAAQhRAAg7A6g");
	var mask_graphics_205 = new cjs.Graphics().p("AjQHvQhhgphKhKQhKhLgphgQgqhkAAhtQAAhsAqhkQAphhBKhKQBKhKBhgpQBkgqBsAAQBtAABkAqQBhApBKBKQBKBKApBhQAqBkAABsQAABtgqBkQgpBghKBLQhKBKhhApQhkAqhtAAQhsAAhkgqgAiViVQg+A+AABXQAABYA+A+QA+A+BXAAQBYAAA+g+QA+g+AAhYQAAhXg+g+Qg+g+hYAAQhXAAg+A+g");
	var mask_graphics_206 = new cjs.Graphics().p("AjdINQhngrhOhPQhPhPgrhnQgthpAAh0QAAhzAthqQArhnBPhPQBOhOBngrQBqgtBzAAQB0AABqAtQBnArBOBOQBPBPArBnQAtBqAABzQAAB0gtBpQgrBnhPBPQhOBPhnArQhqAth0AAQhzAAhqgtgAieieQhCBBAABdQAABdBCBCQBCBCBcAAQBdAABChCQBChCAAhdQAAhdhChBQhChChdAAQhcAAhCBCg");
	var mask_graphics_207 = new cjs.Graphics().p("AjqIsQhsguhThUQhUhUguhsQgvhvAAh7QAAh6AvhwQAuhsBUhUQBThTBsguQBwgvB6AAQB7AABwAvQBsAuBTBTQBUBUAuBsQAvBwAAB6QAAB7gvBvQguBshUBUQhTBUhsAuQhwAvh7AAQh6AAhwgvgAioioQhFBGAABiQAABiBFBHQBHBFBhAAQBiAABHhFQBFhHAAhiQAAhihFhGQhHhFhiAAQhhAAhHBFg");
	var mask_graphics_208 = new cjs.Graphics().p("Aj3JKQhygwhXhZQhZhYgwhyQgyh1AAiCQAAiBAyh2QAwhyBZhYQBXhYBygwQB2gyCBAAQCCAAB2AyQByAwBXBYQBZBYAwByQAyB2AACBQAACCgyB1QgwByhZBYQhXBZhyAwQh2AyiCAAQiBAAh2gygAixixQhJBJAABoQAABoBJBKQBKBJBnAAQBoAABKhJQBJhKAAhoQAAhohJhJQhKhJhoAAQhnAAhKBJg");
	var mask_graphics_209 = new cjs.Graphics().p("AkEJoQh4gzhchcQhchdgzh4Qg1h8AAiIQAAiHA1h9QAzh4BchcQBchcB4gzQB9g1CHAAQCIAAB9A1QB4AzBcBcQBcBcAzB4QA1B9AACHQAACIg1B8QgzB4hcBdQhcBch4AzQh9A1iIAAQiHAAh9g1gAi6i6QhNBNAABtQAABtBNBOQBOBNBsAAQBtAABOhNQBNhOAAhtQAAhthNhNQhOhNhtAAQhsAAhOBNg");
	var mask_graphics_210 = new cjs.Graphics().p("AkQKHQh+g2hhhhQhhhig2h+Qg3iBAAiPQAAiOA3iCQA2h+BhhiQBhhgB+g2QCCg3COAAQCPAACCA3QB+A2BhBgQBhBiA2B+QA3CCAACOQAACPg3CBQg2B+hhBiQhhBhh+A2QiCA3iPAAQiOAAiCg3gAjDjDQhRBRAAByQAAByBRBSQBSBRBxAAQByAABShRQBRhSAAhyQAAhyhRhRQhShRhyAAQhxAAhSBRg");
	var mask_graphics_211 = new cjs.Graphics().p("AkdKlQiEg4hlhmQhmhmg4iEQg6iHAAiWQAAiVA6iIQA4iEBmhmQBlhlCEg4QCIg6CVAAQCWAACIA6QCEA4BlBlQBmBmA4CEQA6CIAACVQAACWg6CHQg4CEhmBmQhlBmiEA4QiIA6iWAAQiVAAiIg6gAjMjMQhVBUAAB4QAAB4BVBVQBVBVB3AAQB4AABVhVQBVhVAAh4QAAh4hVhUQhVhVh4AAQh3AAhVBVg");
	var mask_graphics_212 = new cjs.Graphics().p("AkqLDQiKg6hphrQhrhqg6iKQg8iOAAicQAAibA8iPQA6iKBrhqQBphqCKg6QCPg8CbAAQCcAACPA8QCKA6BpBqQBrBqA6CKQA8CPAACbQAACcg8COQg6CKhrBqQhpBriKA6QiPA8icAAQibAAiPg8gAjWjWQhYBZAAB9QAAB9BYBaQBaBYB8AAQB9AABahYQBYhaAAh9QAAh9hYhZQhahYh9AAQh8AAhaBYg");
	var mask_graphics_213 = new cjs.Graphics().p("Ak3LhQiPg8huhwQhwhvg8iPQg/iUAAijQAAiiA/iVQA8iPBwhwQBuhuCPg8QCVg/CiAAQCjAACVA/QCPA8BuBuQBwBwA8CPQA/CVAACiQAACjg/CUQg8CPhwBvQhuBwiPA8QiVA/ijAAQiiAAiVg/gAjfjfQhcBcAACDQAACCBcBeQBdBcCCAAQCCAABehcQBcheAAiCQAAiDhchcQhehciCAAQiCAAhdBcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_graphics_194,x:-0.1498,y:-0.0996}).wait(1).to({graphics:mask_graphics_195,x:-0.1255,y:-0.0642}).wait(1).to({graphics:mask_graphics_196,x:-0.1216,y:-0.0586}).wait(1).to({graphics:mask_graphics_197,x:-0.1178,y:-0.1029}).wait(1).to({graphics:mask_graphics_198,x:-0.1139,y:-0.0473}).wait(1).to({graphics:mask_graphics_199,x:-0.1601,y:-0.0917}).wait(1).to({graphics:mask_graphics_200,x:-0.1062,y:-0.036}).wait(1).to({graphics:mask_graphics_201,x:-0.1023,y:-0.0804}).wait(1).to({graphics:mask_graphics_202,x:-0.1485,y:-0.0247}).wait(1).to({graphics:mask_graphics_203,x:-0.1446,y:-0.0691}).wait(1).to({graphics:mask_graphics_204,x:-0.0908,y:-0.0135}).wait(1).to({graphics:mask_graphics_205,x:-0.0869,y:-0.0578}).wait(1).to({graphics:mask_graphics_206,x:-0.1331,y:-0.0022}).wait(1).to({graphics:mask_graphics_207,x:-0.1292,y:-0.0466}).wait(1).to({graphics:mask_graphics_208,x:-0.0753,y:0.0091}).wait(1).to({graphics:mask_graphics_209,x:-0.1215,y:-0.0353}).wait(1).to({graphics:mask_graphics_210,x:-0.1176,y:0.0204}).wait(1).to({graphics:mask_graphics_211,x:-0.1138,y:-0.024}).wait(1).to({graphics:mask_graphics_212,x:-0.0599,y:0.0316}).wait(1).to({graphics:mask_graphics_213,x:-0.106,y:-0.0127}).wait(1).to({graphics:null,x:0,y:0}).wait(146));

	// Sparkle_Base
	this.instance = new lib.Sparkle_Base("synched",194);
	this.instance.setTransform(2.65,-0.05);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).wait(19).to({startPosition:213},0).to({_off:true},1).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-29.6,56.5,59.2);


(lib.SCREEN04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000E82").s().p("AgVAZQgJgJAAgPIAAgBQAAgOAJgJQAJgKANAAQANAAAIAIQAJAJAAAQIAAADIguAAQABAUAQAAQANAAACgKIAOAAQgDAVgbAAQgNAAgJgJgAgPgGIAgAAQgCgQgOAAQgNAAgDAQg");
	this.shape.setTransform(102.375,-227.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000E82").s().p("AgRAhIAAhAIAPAAIAAAMQAFgNAPAAIAAAOQgUAAAAASIAAAhg");
	this.shape_1.setTransform(96.7,-227.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000E82").s().p("AgXAZQgJgJAAgPIAAgBQAAgOAJgJQAKgKANAAQAPAAAJAKQAJAJAAAOIAAABQAAAPgJAJQgJAJgPAAQgOAAgJgJgAgRAAIAAABQAAAVARAAQAIAAAFgGQAFgFAAgKIAAgBQAAgVgSAAQgRAAAAAVg");
	this.shape_2.setTransform(90.225,-227.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000E82").s().p("AAiAhIAAgnQAAgOgMAAQgGAAgEAEQgEAEAAAHIAAAmIgPAAIAAgnQAAgOgLAAQgGAAgEAEQgEAEAAAHIAAAmIgPAAIAAhAIAPAAIAAAKQAGgLAOAAQAMAAAFAMQAHgMAOAAQAWAAAAAZIAAAog");
	this.shape_3.setTransform(80.8,-227.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000E82").s().p("AgKAVIAAgiIgIAAIAAgMIAIAAIAAgOIAOAAIAAAOIAPAAIAAAMIgPAAIAAAhQAAAHAIABIAHgBIAAAMIgKABQgTAAAAgTg");
	this.shape_4.setTransform(69.775,-228.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000E82").s().p("AgcAIIAAgoIAPAAIAAAnQAAAOANAAQAOAAAAgQIAAglIAPAAIAABAIgPAAIAAgKQgGALgOAAQgWAAAAgZg");
	this.shape_5.setTransform(63.825,-227.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000E82").s().p("AgXAZQgJgJAAgPIAAgBQAAgOAJgJQAJgKAOAAQAOAAAKAKQAJAJAAAOIAAABQAAAPgJAJQgKAJgOAAQgOAAgJgJgAgRAAIAAABQAAAKAFAFQAFAGAHAAQASAAAAgVIAAgBQAAgVgSAAQgRAAAAAVg");
	this.shape_6.setTransform(56.325,-227.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000E82").s().p("AgXAnQgIgIAAgQIAAgBQAAgOAIgJQAIgKANABQANgBAGAMIAAgoIAPAAIAABeIgPAAIAAgLQgGAMgOAAQgMAAgIgJgAgQAOIAAABQAAAVAQAAQASAAAAgVIAAgBQAAgVgSABQgQgBAAAVg");
	this.shape_7.setTransform(45.475,-228.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000E82").s().p("AAOAhIAAgmQAAgPgNAAQgGAAgEAEQgEAEAAAIIAAAlIgPAAIAAhAIAPAAIAAALQAGgMAOAAQAWAAAAAZIAAAog");
	this.shape_8.setTransform(38.05,-227.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000E82").s().p("AgHAuIAAhAIAPAAIAABAgAgGgfQgCgCAAgEQAAgIAIAAQAJAAAAAIQAAAEgCACQgDADgEAAQgCAAgEgDg");
	this.shape_9.setTransform(32.55,-228.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000E82").s().p("AgaAsIAAhXIA2AAIAAANIgmAAIAAAaIAdAAIAAAMIgdAAIAAAkg");
	this.shape_10.setTransform(27.85,-228.675);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(115.15,-228.25,1,1,0,0,0,2.7,4.4);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(69.9,-228.2,1,1,0,0,0,72.5,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhAAIIAagPIBnAAQgOAGgPAJg");
	this.shape_11.setTransform(53.35,-156.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAHQgFgCAAgDIAMgBQAOgBAOgIQAEAHAJABQgPAJgRAAQgJAAgHgCg");
	this.shape_12.setTransform(58.275,-160.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag6AIQAGgHAMgIIBkAAQgJAGgKAJg");
	this.shape_13.setTransform(49.3,-154.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAIQgEgCAAgCIAFgDQALgBAJgJIAIAHQgHAKgKABIgEABQgEAAgEgCg");
	this.shape_14.setTransform(61.975,-161.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAGQgIgDAAgDQAAgBAMAAQATABANgHIAHAJQgLAGgPAAQgJAAgIgCg");
	this.shape_15.setTransform(56.175,-168.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAGIAHgDQAJgDAEgJIALAEQgJAOgMABIgDAAQgHAAAAgEg");
	this.shape_16.setTransform(63.75,-160.8167);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAEQgOgFAAgHQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAPAFQAQAEAQgCQACAJARADQgKACgMAAQgSAAgPgHg");
	this.shape_17.setTransform(47.325,-165.3042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAFQgHgDAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAQAAQAPAAAKgGQAGAHAKABQgNAJgSAAQgMAAgJgEg");
	this.shape_18.setTransform(56.25,-161.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAEQgMgEAAgFQgBgDAGACQAWAGARgEQAEAGALADQgKADgKAAQgPAAgMgEg");
	this.shape_19.setTransform(51.35,-167.515);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAGQgFgCAAgDQAAAAAAAAQAAgBABAAQAAAAABAAQABAAACAAQAQABANgJIABABIAGAHQgLAJgLAAQgIAAgGgDg");
	this.shape_20.setTransform(60.2977,-163.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgBAHQAHgGgDgEQgDgEgHAGIgFgIQAGgFAFAAQAGAAAEAFQAFAEAAAGQAAAJgJAFg");
	this.shape_21.setTransform(61.2,-166.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAEQgMgEAAgFQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAKACIAPABQAIAAAIgCQADAGAOACQgJAGgPAAQgNAAgMgEg");
	this.shape_22.setTransform(52.925,-165.4292);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAGQgHgDAAgCQAAgCAHAAQATABAQgIIAHAJQgKAIgQAAQgIAAgIgDg");
	this.shape_23.setTransform(57.425,-166.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArByQgFAAgDgCQgCgBgEgFIg/hlIAABkQAAAFgCACQgBACgGAAIhOAAQgKAAAAgJIAAjQQAAgKAKAAIC6AAQAcAAARAQQARAQAAAbQAAAbgQAPQgOANgcAIIA9BeQACAFgBADQgBADgFAAgAgigLIAfAAQAjAAAAgkQAAgmgjABIgfAAg");
	this.shape_24.setTransform(52.4643,-136.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag/AIIAVgQIBqAAQgIAIgLAIg");
	this.shape_25.setTransform(86.725,-115.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag7AJQAJgJAGgHIBoAAIgOAQg");
	this.shape_26.setTransform(90.025,-119.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABLByQgJAAAAgJIAAiGIg3CGQgCAFgDACQgDACgFAAIgpAAQgEAAgCgCQgCgBgDgHIg6iGIAACHQAAAFgCACQgCACgGAAIgeAAQgFAAgDgCQgCgCAAgFIAAjQQAAgKAKAAIBaAAQALAAAEAKIAvBtIAshtIAFgIQADgCAGAAIBgAAQAFAAACACQACACAAAGIAADQQAAAFgCACQgBACgGAAg");
	this.shape_27.setTransform(83.075,-136.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAwByQgGAAgDgCQgDgCgCgHIgOgkIhaAAIgOAoQgCAEgCACQgCABgFAAIgiAAQgIAAADgIIBNjTQACgIAJAAIBbAAQAHAAAEAIIBODQQADAGgCADQgBACgHAAgAAFAbIgehTIgeBTIA8AAg");
	this.shape_28.setTransform(113.964,-136.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAEQgQgGAAgHQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAQAFQAOAFASAAQACAIANAFIgNAAQgUAAgQgIg");
	this.shape_29.setTransform(45.725,-167.8792);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag3AJIAKgRIBlAAIgJARg");
	this.shape_30.setTransform(92.375,-122.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhPAJQAWgFAYgLIBxAAQgVALgKAFg");
	this.shape_31.setTransform(81.05,-112.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA3ByQgGAAgDgCIgGgFIh1iJIAACHQAAAJgJAAIgfAAQgJAAAAgJIAAjQQAAgKAJAAIBNAAQAHAAAGAFIBpB6IAAh1QAAgKAJAAIAeAAQAGAAACACQACACAAAGIAADQQAAAFgCACQgCACgGAAg");
	this.shape_32.setTransform(24.2,-136.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4AIQAHgJAGgGIBkAAIgNAPg");
	this.shape_33.setTransform(46.5,-151.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAEQgIgDAAgDQAAAAAAgBQAAAAABAAQAAgBABAAQABAAABABQATABAOgEQAFAGALAEQgLADgNAAQgMABgJgEg");
	this.shape_34.setTransform(51.175,-160.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgtAJIgOgQIBoAAIAPAQg");
	this.shape_35.setTransform(48.475,-119.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgwAJQgNgHgSgJIBwAAQAYALAWAFg");
	this.shape_36.setTransform(57.5,-112.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhQACQgVgDgbgIIEBAAQgZAIgXADQgtAIgkAAQgjAAgtgIg");
	this.shape_37.setTransform(69.25,-109.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgsAIIgTgQIBqAAIAVAQg");
	this.shape_38.setTransform(51.8,-115.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AguAJIgJgRIBkAAIALARg");
	this.shape_39.setTransform(46.175,-122.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgiAJQARgDACgJQAQACAQgEIAOgFQABAAABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAHgOAFQgPAHgTAAQgLAAgKgCg");
	this.shape_40.setTransform(91.2,-165.3042);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgeACQANgCAFgGQAHACAIAAQAMAAANgDQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAFgMAEQgMAEgNAAQgPAAgJgGg");
	this.shape_41.setTransform(85.6,-165.4292);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAAQAJgBAEgHQANAIAPABIAJAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAADgFACQgGACgJAAQgRAAgQgJg");
	this.shape_42.setTransform(80.225,-160.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAAIAGgHIABgBQANAJARgBQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAADgFACQgGADgIAAQgKAAgMgJg");
	this.shape_43.setTransform(78.225,-163.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUADQgLgEAAgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAKACQAIABAKAAQAKAAAHgCQAEAHAMAEQgMAEgNAAQgPAAgMgGg");
	this.shape_44.setTransform(49.15,-162.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYABIAHgJQAQAIAUgBQAGAAAAACQAAACgHADQgIADgIAAQgQAAgKgIg");
	this.shape_45.setTransform(81.1,-166.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfAFQAOgEACgHQAHACAKAAQASAAAJgDQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAEgKAEQgNAGgPAAQgNAAgMgEg");
	this.shape_46.setTransform(89.35,-162.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AABAJQgKgBgHgKIAIgHQAIAJAMABQAFACAAABQAAACgEACQgEACgEAAIgEgBg");
	this.shape_47.setTransform(76.525,-161.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgrAIIgOgPIBkAAQAHAGAIAJg");
	this.shape_48.setTransform(92,-151.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAFAKQgMgBgIgOIAKgEQAFAJAJADIAHADQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAIgGABIgCAAg");
	this.shape_49.setTransform(74.8,-160.8187);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeAAQALgBAFgGQAKAEAJAAQANAAALgCQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAEgIADQgLAFgNAAQgRAAgLgIg");
	this.shape_50.setTransform(84,-163.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAAQAKgBAGgHQAKAGAPAAIAQAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAADgHADQgJAEgMAAQgSAAgNgJg");
	this.shape_51.setTransform(82.275,-161.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWABIAIgJQANAIATAAQAFAAAAABQAAACgHADQgGADgIAAQgOAAgKgIg");
	this.shape_52.setTransform(79.65,-164.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAEQAMgEAEgGQAOAEATgBQABgBABAAQABAAAAABQABAAAAAAQAAABAAAAQAAADgIADQgJAEgLgBQgNAAgMgDg");
	this.shape_53.setTransform(87.325,-160.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNABQAAgGAEgEQAFgFAGAAQAFAAAHAFIgGAIQgIgGgCAEQgDAEAGAGIgFAIQgJgFAAgJg");
	this.shape_54.setTransform(77.325,-166.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAGQgHgDAAgCQAAgBAAAAQABAAAAAAQABAAABAAQAAAAACAAQASAAAOgIIAIAJQgKAIgNAAQgIAAgHgDg");
	this.shape_55.setTransform(58.9,-164.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgZACIAGgJQAOAHATgBQAMAAAAABQAAADgJADQgHACgKAAQgPAAgKgGg");
	this.shape_56.setTransform(82.35,-168.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgRBAQgHgGgBgIIAAgPIgCgBIgJgBIgIgDIgIgFIgCgCQgEgCgDgEIgIgIQANgJAAgMQAAgKgGgHQgIgHgKAAQgIAAgKAGIgGgJQAMgHAMAAQAPAAAKAKQAKAKAAAOQAAAMgKALQAPAPAPgBIAAhKQABgIAHgFQAIgFAJAAQALAAAIAFQAHAFAAAIIAABKQAPABAPgPQgKgMAAgLQAAgOAKgKQAKgKAQAAQAMAAALAHIgFAJQgLgGgIAAQgKAAgHAHQgHAHAAAKQAAAMANAJIgHAIIgHAGIgCACIgIAFIgIADQgFABgFAAIgCABIAAAPQAAAIgHAGQgIAEgLAAQgJAAgIgEgAgRAxQAAALARAAQASAAAAgLIAAgMIgSARIgRgRgAgRAcIARARIASgRIAAgNIgSASIgRgSgAgRAGIARASIASgSIAAgLIgSAQIgRgQgAgRgOIARAQIASgQIAAgNIgSASIgRgSgAgRgkIARASIASgSIAAgMIgSARIgRgRgAgOg2IAOAOIAPgOQgFgFgKAAQgJAAgFAFg");
	this.shape_57.setTransform(69.25,-165.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgiAIQgTgKgMgFIBoAAIAbAPg");
	this.shape_58.setTransform(85.15,-156.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AggAMQANgFABgIQASAAAPgFIAQgFQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQABAHgRAGQgRAIgUAAg");
	this.shape_59.setTransform(92.8,-167.8792);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVADQgJgDAAgEQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAIABIAQABQAIAAALgEQAEAGAMABQgLAIgRAAQgOAAgKgFg");
	this.shape_60.setTransform(54.525,-163.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgoAIQgKgJgJgGIBkAAIATAPg");
	this.shape_61.setTransform(89.225,-154.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgeAFQAMgCAEgHQARAEAWgGQAFgCAAADQABAFgMAEQgMAEgPAAQgLAAgLgDg");
	this.shape_62.setTransform(87.15,-167.515);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA1AAIAAAMIglAAIAAAYIAeAAIAAALIgeAAIAAAaIAnAAIAAAMg");
	this.shape_63.setTransform(104.975,-94.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgcAhQgLgMAAgUIAAgBQAAgTAMgMQAMgNARAAQAQAAAKAIQAKAIABAPIgQAAQgDgSgSAAQgKAAgHAJQgHAIAAAOIAAABQAAAOAHAJQAGAIALAAQAUAAADgTIAPAAQgDAggjAAQgTAAgLgMg");
	this.shape_64.setTransform(95.625,-94.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AASArIgmhBIAABBIgPAAIAAhVIAUAAIAjA+IAAg+IAPAAIAABVg");
	this.shape_65.setTransform(85.65,-94.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAXArIgHgVIggAAIgHAVIgQAAIAehVIAUAAIAdBVgAAMAKIgMgoIgNAoIAZAAg");
	this.shape_66.setTransform(76.025,-94.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAQArIgWgjIgKAAIAAAjIgRAAIAAhVIAdAAQAhAAgBAZIAAAAQABASgUAFIAZAlgAgQgDIAMAAQARABgBgOIAAgBQABgNgRAAIgMAAg");
	this.shape_67.setTransform(67,-94.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgiAKIAAg1IARAAIAAA0QAAAMADAFQAFAFAJAAQAJAAAEgFQAGgFAAgNIAAgzIAQAAIAAA0QAAAjgjAAQgiAAAAgig");
	this.shape_68.setTransform(57.45,-94.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AghARIAQAAQACAQAQAAQAIAAAEgEQAFgEAAgGQAAgGgEgDQgEgCgKgCQgPgCgHgFQgIgGAAgMQAAgKAJgHQAIgIANAAQAcAAADAaIgPAAQgCgNgOAAQgPAAAAALQAAAGAEACQADADAKACQARACAHAFQAIAGAAAMQAAAMgJAHQgJAIgPAAQgfAAgDgcg");
	this.shape_69.setTransform(48.325,-94.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AASArIglhBIAABBIgPAAIAAhVIATAAIAjA+IAAg+IAQAAIAABVg");
	this.shape_70.setTransform(39.2,-94.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_71.setTransform(32.025,-94.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-247.8,145.2,157.60000000000002);


(lib.Bubbles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Sparkle_Burst
	this.instance = new lib.SparkleBurst("synched",195);
	this.instance.setTransform(18.35,-38.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).to({_off:true},19).wait(190));

	// BUBBLE_1
	this.instance_1 = new lib.BUBBLE_1("synched",0);
	this.instance_1.setTransform(21.75,-38.3,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({scaleX:0,scaleY:0,x:-21.7151,y:38.3,startPosition:1},0).wait(1).to({x:-21.6803,startPosition:2},0).wait(1).to({x:-21.6454,startPosition:3},0).wait(1).to({x:-21.6106,startPosition:4},0).wait(1).to({x:-21.5757,startPosition:5},0).wait(1).to({x:-21.5409,startPosition:6},0).wait(1).to({x:-21.506,startPosition:7},0).wait(1).to({x:-21.4711,startPosition:8},0).wait(1).to({x:-21.4363,startPosition:9},0).wait(1).to({x:-21.4014,startPosition:10},0).wait(1).to({x:-21.3666,startPosition:11},0).wait(1).to({x:-21.3317,startPosition:12},0).wait(1).to({x:-21.2969,startPosition:13},0).wait(1).to({x:-21.262,startPosition:14},0).wait(1).to({x:-21.2271,startPosition:15},0).wait(1).to({x:-21.1923,startPosition:16},0).wait(1).to({x:-21.1574,startPosition:17},0).wait(1).to({x:-21.1226,startPosition:18},0).wait(1).to({x:-21.0877,startPosition:19},0).wait(1).to({x:-21.0529,startPosition:20},0).wait(1).to({x:-21.018,startPosition:21},0).wait(1).to({x:-20.9831,startPosition:22},0).wait(1).to({x:-20.9483,startPosition:23},0).wait(1).to({x:-20.9134,startPosition:24},0).wait(1).to({x:-20.8786,startPosition:25},0).wait(1).to({x:-20.8437,startPosition:26},0).wait(1).to({x:-20.8089,startPosition:27},0).wait(1).to({x:-20.774,startPosition:28},0).wait(1).to({x:-20.7391,startPosition:29},0).wait(1).to({x:-20.7043,startPosition:30},0).wait(1).to({x:-20.6694,startPosition:31},0).wait(1).to({x:-20.6346,startPosition:32},0).wait(1).to({x:-20.5997,startPosition:33},0).wait(1).to({x:-20.5649,startPosition:34},0).wait(1).to({x:-20.53,startPosition:35},0).wait(1).to({x:-20.4951,startPosition:36},0).wait(1).to({x:-20.4603,startPosition:37},0).wait(1).to({x:-20.4254,startPosition:38},0).wait(1).to({x:-20.3906,startPosition:39},0).wait(1).to({x:-20.3557,startPosition:40},0).wait(1).to({x:-20.3209,startPosition:41},0).wait(1).to({x:-20.286,startPosition:42},0).wait(1).to({x:-20.2511,startPosition:43},0).wait(1).to({x:-20.2163,startPosition:44},0).wait(1).to({x:-20.1814,startPosition:45},0).wait(1).to({x:-20.1466,startPosition:46},0).wait(1).to({x:-20.1117,startPosition:47},0).wait(1).to({x:-20.0769,startPosition:48},0).wait(1).to({x:-20.042,startPosition:49},0).wait(1).to({x:-20.0071,startPosition:50},0).wait(1).to({x:-19.9723,startPosition:51},0).wait(1).to({x:-19.9374,startPosition:52},0).wait(1).to({x:-19.9026,startPosition:53},0).wait(1).to({x:-19.8677,startPosition:54},0).wait(1).to({x:-19.8329,startPosition:55},0).wait(1).to({x:-19.798,startPosition:56},0).wait(1).to({x:-19.7631,startPosition:57},0).wait(1).to({x:-19.7283,startPosition:58},0).wait(1).to({x:-19.6934,startPosition:59},0).wait(1).to({x:-19.6586,startPosition:60},0).wait(1).to({x:-19.6237,startPosition:61},0).wait(1).to({x:-19.5889,startPosition:62},0).wait(1).to({x:-19.554,startPosition:63},0).wait(1).to({x:-19.5191,startPosition:64},0).wait(1).to({x:-19.4843,startPosition:65},0).wait(1).to({x:-19.4494,startPosition:66},0).wait(1).to({x:-19.4146,startPosition:67},0).wait(1).to({x:-19.3797,startPosition:68},0).wait(1).to({x:-19.3449,startPosition:69},0).wait(1).to({x:-19.31,startPosition:70},0).wait(1).to({x:-19.2751,startPosition:71},0).wait(1).to({x:-19.2403,startPosition:72},0).wait(1).to({x:-19.2054,startPosition:73},0).wait(1).to({x:-19.1706,startPosition:74},0).wait(1).to({x:-19.1357,startPosition:75},0).wait(1).to({x:-19.1009,startPosition:76},0).wait(1).to({x:-19.066,startPosition:77},0).wait(1).to({x:-19.0311,startPosition:78},0).wait(1).to({x:-18.9963,startPosition:79},0).wait(1).to({x:-18.9614,startPosition:80},0).wait(1).to({x:-18.9266,startPosition:81},0).wait(1).to({x:-18.8917,startPosition:82},0).wait(1).to({x:-18.8569,startPosition:83},0).wait(1).to({x:-18.822,startPosition:84},0).wait(1).to({x:-18.7871,startPosition:85},0).wait(1).to({scaleX:0.0526,scaleY:0.0526,x:18.7871,y:-38.3,startPosition:86},0).wait(1).to({scaleX:0.1053,scaleY:0.1053,startPosition:87},0).wait(1).to({scaleX:0.1579,scaleY:0.1579,startPosition:88},0).wait(1).to({scaleX:0.2105,scaleY:0.2105,startPosition:89},0).wait(1).to({scaleX:0.2632,scaleY:0.2632,startPosition:90},0).wait(1).to({scaleX:0.3158,scaleY:0.3158,startPosition:91},0).wait(1).to({scaleX:0.3684,scaleY:0.3684,startPosition:92},0).wait(1).to({scaleX:0.4211,scaleY:0.4211,startPosition:93},0).wait(1).to({scaleX:0.4737,scaleY:0.4737,startPosition:94},0).wait(1).to({scaleX:0.5263,scaleY:0.5263,startPosition:95},0).wait(1).to({scaleX:0.5789,scaleY:0.5789,startPosition:96},0).wait(1).to({scaleX:0.6316,scaleY:0.6316,startPosition:97},0).wait(1).to({scaleX:0.6842,scaleY:0.6842,startPosition:98},0).wait(1).to({scaleX:0.7368,scaleY:0.7368,startPosition:99},0).wait(1).to({scaleX:0.7895,scaleY:0.7895,startPosition:100},0).wait(1).to({scaleX:0.8421,scaleY:0.8421,startPosition:101},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,startPosition:102},0).wait(1).to({scaleX:0.9474,scaleY:0.9474,startPosition:103},0).wait(1).to({scaleX:1,scaleY:1,startPosition:104},0).wait(1).to({scaleX:0,scaleY:0,x:-12.6871,y:38.3,startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).to({_off:true},1).wait(134));

	// Sparkle_Burst_copy
	this.instance_2 = new lib.SparkleBurst("synched",194);
	this.instance_2.setTransform(12.45,-45.9,0.7256,0.7256);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).to({_off:true},20).wait(168));

	// BUBBLE_2
	this.instance_3 = new lib.BUBBLE_2("synched",0);
	this.instance_3.setTransform(12,-45.9,0.01,0.01);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).wait(1).to({scaleX:0,scaleY:0,x:-12,y:45.9,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({scaleX:0.0476,scaleY:0.0476,x:12,y:-45.9,startPosition:105},0).wait(1).to({scaleX:0.0952,scaleY:0.0952,startPosition:106},0).wait(1).to({scaleX:0.1429,scaleY:0.1429,startPosition:107},0).wait(1).to({scaleX:0.1905,scaleY:0.1905,startPosition:108},0).wait(1).to({scaleX:0.2381,scaleY:0.2381,startPosition:109},0).wait(1).to({scaleX:0.2857,scaleY:0.2857,startPosition:110},0).wait(1).to({scaleX:0.3333,scaleY:0.3333,startPosition:111},0).wait(1).to({scaleX:0.381,scaleY:0.381,startPosition:112},0).wait(1).to({scaleX:0.4286,scaleY:0.4286,startPosition:113},0).wait(1).to({scaleX:0.4762,scaleY:0.4762,startPosition:114},0).wait(1).to({scaleX:0.5238,scaleY:0.5238,startPosition:115},0).wait(1).to({scaleX:0.5714,scaleY:0.5714,startPosition:116},0).wait(1).to({scaleX:0.619,scaleY:0.619,startPosition:117},0).wait(1).to({scaleX:0.6667,scaleY:0.6667,startPosition:118},0).wait(1).to({scaleX:0.7143,scaleY:0.7143,startPosition:119},0).wait(1).to({scaleX:0.7619,scaleY:0.7619,startPosition:120},0).wait(1).to({scaleX:0.8095,scaleY:0.8095,startPosition:121},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,startPosition:122},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,startPosition:123},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,startPosition:124},0).wait(1).to({scaleX:1,scaleY:1,startPosition:125},0).wait(1).to({scaleX:0,scaleY:0,x:-12,y:45.9,startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).to({_off:true},1).wait(134));

	// Sparkle_Burst_copy
	this.instance_4 = new lib.SparkleBurst("synched",195);
	this.instance_4.setTransform(31.65,-53.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(239).to({_off:false},0).to({_off:true},18).wait(147));

	// BUBBLE_3
	this.instance_5 = new lib.BUBBLE_3("synched",0);
	this.instance_5.setTransform(32.4,-51.5,0.01,0.01);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({scaleX:0,scaleY:0,x:-32.3917,y:51.5167,startPosition:1},0).wait(1).to({x:-32.3833,y:51.5333,startPosition:2},0).wait(1).to({x:-32.375,y:51.55,startPosition:3},0).wait(1).to({x:-32.3667,y:51.5667,startPosition:4},0).wait(1).to({x:-32.3583,y:51.5833,startPosition:5},0).wait(1).to({x:-32.35,y:51.6,startPosition:6},0).wait(1).to({x:-32.3417,y:51.6167,startPosition:7},0).wait(1).to({x:-32.3333,y:51.6333,startPosition:8},0).wait(1).to({x:-32.325,y:51.65,startPosition:9},0).wait(1).to({x:-32.3167,y:51.6667,startPosition:10},0).wait(1).to({x:-32.3083,y:51.6833,startPosition:11},0).wait(1).to({x:-32.3,y:51.7,startPosition:12},0).wait(1).to({x:-32.2917,y:51.7167,startPosition:13},0).wait(1).to({x:-32.2833,y:51.7333,startPosition:14},0).wait(1).to({x:-32.275,y:51.75,startPosition:15},0).wait(1).to({x:-32.2667,y:51.7667,startPosition:16},0).wait(1).to({x:-32.2583,y:51.7833,startPosition:17},0).wait(1).to({x:-32.25,y:51.8,startPosition:18},0).wait(1).to({x:-32.2417,y:51.8167,startPosition:19},0).wait(1).to({x:-32.2333,y:51.8333,startPosition:20},0).wait(1).to({x:-32.225,y:51.85,startPosition:21},0).wait(1).to({x:-32.2167,y:51.8667,startPosition:22},0).wait(1).to({x:-32.2083,y:51.8833,startPosition:23},0).wait(1).to({x:-32.2,y:51.9,startPosition:24},0).wait(1).to({x:-32.1917,y:51.9167,startPosition:25},0).wait(1).to({x:-32.1833,y:51.9333,startPosition:26},0).wait(1).to({x:-32.175,y:51.95,startPosition:27},0).wait(1).to({x:-32.1667,y:51.9667,startPosition:28},0).wait(1).to({x:-32.1583,y:51.9833,startPosition:29},0).wait(1).to({x:-32.15,y:52,startPosition:30},0).wait(1).to({x:-32.1417,y:52.0167,startPosition:31},0).wait(1).to({x:-32.1333,y:52.0333,startPosition:32},0).wait(1).to({x:-32.125,y:52.05,startPosition:33},0).wait(1).to({x:-32.1167,y:52.0667,startPosition:34},0).wait(1).to({x:-32.1083,y:52.0833,startPosition:35},0).wait(1).to({x:-32.1,y:52.1,startPosition:36},0).wait(1).to({x:-32.0917,y:52.1167,startPosition:37},0).wait(1).to({x:-32.0833,y:52.1333,startPosition:38},0).wait(1).to({x:-32.075,y:52.15,startPosition:39},0).wait(1).to({x:-32.0667,y:52.1667,startPosition:40},0).wait(1).to({x:-32.0583,y:52.1833,startPosition:41},0).wait(1).to({x:-32.05,y:52.2,startPosition:42},0).wait(1).to({x:-32.0417,y:52.2167,startPosition:43},0).wait(1).to({x:-32.0333,y:52.2333,startPosition:44},0).wait(1).to({x:-32.025,y:52.25,startPosition:45},0).wait(1).to({x:-32.0167,y:52.2667,startPosition:46},0).wait(1).to({x:-32.0083,y:52.2833,startPosition:47},0).wait(1).to({x:-32,y:52.3,startPosition:48},0).wait(1).to({x:-31.9917,y:52.3167,startPosition:49},0).wait(1).to({x:-31.9833,y:52.3333,startPosition:50},0).wait(1).to({x:-31.975,y:52.35,startPosition:51},0).wait(1).to({x:-31.9667,y:52.3667,startPosition:52},0).wait(1).to({x:-31.9583,y:52.3833,startPosition:53},0).wait(1).to({x:-31.95,y:52.4,startPosition:54},0).wait(1).to({x:-31.9417,y:52.4167,startPosition:55},0).wait(1).to({x:-31.9333,y:52.4333,startPosition:56},0).wait(1).to({x:-31.925,y:52.45,startPosition:57},0).wait(1).to({x:-31.9167,y:52.4667,startPosition:58},0).wait(1).to({x:-31.9083,y:52.4833,startPosition:59},0).wait(1).to({x:-31.9,y:52.5,startPosition:60},0).wait(1).to({x:-31.8917,y:52.5167,startPosition:61},0).wait(1).to({x:-31.8833,y:52.5333,startPosition:62},0).wait(1).to({x:-31.875,y:52.55,startPosition:63},0).wait(1).to({x:-31.8667,y:52.5667,startPosition:64},0).wait(1).to({x:-31.8583,y:52.5833,startPosition:65},0).wait(1).to({x:-31.85,y:52.6,startPosition:66},0).wait(1).to({x:-31.8417,y:52.6167,startPosition:67},0).wait(1).to({x:-31.8333,y:52.6333,startPosition:68},0).wait(1).to({x:-31.825,y:52.65,startPosition:69},0).wait(1).to({x:-31.8167,y:52.6667,startPosition:70},0).wait(1).to({x:-31.8083,y:52.6833,startPosition:71},0).wait(1).to({x:-31.8,y:52.7,startPosition:72},0).wait(1).to({x:-31.7917,y:52.7167,startPosition:73},0).wait(1).to({x:-31.7833,y:52.7333,startPosition:74},0).wait(1).to({x:-31.775,y:52.75,startPosition:75},0).wait(1).to({x:-31.7667,y:52.7667,startPosition:76},0).wait(1).to({x:-31.7583,y:52.7833,startPosition:77},0).wait(1).to({x:-31.75,y:52.8,startPosition:78},0).wait(1).to({x:-31.7417,y:52.8167,startPosition:79},0).wait(1).to({x:-31.7333,y:52.8333,startPosition:80},0).wait(1).to({x:-31.725,y:52.85,startPosition:81},0).wait(1).to({x:-31.7167,y:52.8667,startPosition:82},0).wait(1).to({x:-31.7083,y:52.8833,startPosition:83},0).wait(1).to({x:-31.7,y:52.9,startPosition:84},0).wait(1).to({x:-31.6917,y:52.9167,startPosition:85},0).wait(1).to({x:-31.6833,y:52.9333,startPosition:86},0).wait(1).to({x:-31.675,y:52.95,startPosition:87},0).wait(1).to({x:-31.6667,y:52.9667,startPosition:88},0).wait(1).to({x:-31.6583,y:52.9833,startPosition:89},0).wait(1).to({x:-31.65,y:53,startPosition:90},0).wait(1).to({x:-31.6417,y:53.0167,startPosition:91},0).wait(1).to({x:-31.6333,y:53.0333,startPosition:92},0).wait(1).to({x:-31.625,y:53.05,startPosition:93},0).wait(1).to({x:-31.6167,y:53.0667,startPosition:94},0).wait(1).to({x:-31.6083,y:53.0833,startPosition:95},0).wait(1).to({x:-31.6,y:53.1,startPosition:96},0).wait(1).to({x:-31.5917,y:53.1167,startPosition:97},0).wait(1).to({x:-31.5833,y:53.1333,startPosition:98},0).wait(1).to({x:-31.575,y:53.15,startPosition:99},0).wait(1).to({x:-31.5667,y:53.1667,startPosition:100},0).wait(1).to({x:-31.5583,y:53.1833,startPosition:101},0).wait(1).to({x:-31.55,y:53.2,startPosition:102},0).wait(1).to({x:-31.5417,y:53.2167,startPosition:103},0).wait(1).to({x:-31.5333,y:53.2333,startPosition:104},0).wait(1).to({x:-31.525,y:53.25,startPosition:105},0).wait(1).to({x:-31.5167,y:53.2667,startPosition:106},0).wait(1).to({x:-31.5083,y:53.2833,startPosition:107},0).wait(1).to({x:-31.5,y:53.3,startPosition:108},0).wait(1).to({x:-31.4917,y:53.3167,startPosition:109},0).wait(1).to({x:-31.4833,y:53.3333,startPosition:110},0).wait(1).to({x:-31.475,y:53.35,startPosition:111},0).wait(1).to({x:-31.4667,y:53.3667,startPosition:112},0).wait(1).to({x:-31.4583,y:53.3833,startPosition:113},0).wait(1).to({x:-31.45,y:53.4,startPosition:114},0).wait(1).to({x:-31.4417,y:53.4167,startPosition:115},0).wait(1).to({x:-31.4333,y:53.4333,startPosition:116},0).wait(1).to({x:-31.425,y:53.45,startPosition:117},0).wait(1).to({x:-31.4167,y:53.4667,startPosition:118},0).wait(1).to({x:-31.4083,y:53.4833,startPosition:119},0).wait(1).to({x:-31.4,y:53.5,startPosition:120},0).wait(1).to({x:-31.3917,y:53.5167,startPosition:121},0).wait(1).to({x:-31.3833,y:53.5333,startPosition:122},0).wait(1).to({x:-31.375,y:53.55,startPosition:123},0).wait(1).to({x:-31.3667,y:53.5667,startPosition:124},0).wait(1).to({x:-31.3583,y:53.5833,startPosition:125},0).wait(1).to({x:-31.35,y:53.6,startPosition:126},0).wait(1).to({scaleX:0.0455,scaleY:0.0455,x:31.35,y:-53.6,startPosition:127},0).wait(1).to({scaleX:0.0909,scaleY:0.0909,startPosition:128},0).wait(1).to({scaleX:0.1364,scaleY:0.1364,startPosition:129},0).wait(1).to({scaleX:0.1818,scaleY:0.1818,startPosition:130},0).wait(1).to({scaleX:0.2273,scaleY:0.2273,startPosition:131},0).wait(1).to({scaleX:0.2727,scaleY:0.2727,startPosition:132},0).wait(1).to({scaleX:0.3182,scaleY:0.3182,startPosition:133},0).wait(1).to({scaleX:0.3636,scaleY:0.3636,startPosition:134},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,startPosition:135},0).wait(1).to({scaleX:0.4545,scaleY:0.4545,startPosition:136},0).wait(1).to({scaleX:0.5,scaleY:0.5,startPosition:137},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,startPosition:138},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,startPosition:139},0).wait(1).to({scaleX:0.6364,scaleY:0.6364,startPosition:140},0).wait(1).to({scaleX:0.6818,scaleY:0.6818,startPosition:141},0).wait(1).to({scaleX:0.7273,scaleY:0.7273,startPosition:142},0).wait(1).to({scaleX:0.7727,scaleY:0.7727,startPosition:143},0).wait(1).to({scaleX:0.8182,scaleY:0.8182,startPosition:144},0).wait(1).to({scaleX:0.8636,scaleY:0.8636,startPosition:145},0).wait(1).to({scaleX:0.9091,scaleY:0.9091,startPosition:146},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,startPosition:147},0).wait(1).to({scaleX:1,scaleY:1,startPosition:148},0).wait(1).to({scaleX:0,scaleY:0,x:-31.35,y:53.6,startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).to({_off:true},1).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-83.1,69.8,83.1);


(lib.SubjectAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bubbles
	this.instance = new lib.Bubbles("synched",90);
	this.instance.setTransform(39.65,21.4,0.9,0.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(1).to({regX:27.6,regY:-46.1,x:64.5,y:-20.1,startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1));

	// Spray
	this.instance_1 = new lib.Spray("synched",90);
	this.instance_1.setTransform(-98.4,-4.6,1,1,0,0,0,-5,-4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({regX:-107,regY:-78.7,x:-200.4,y:-79.3,startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({x:-196.3,startPosition:122},0).wait(1).to({x:-192.25,startPosition:123},0).wait(1).to({x:-188.2,startPosition:124},0).wait(1).to({x:-184.1,startPosition:125},0).wait(1).to({x:-180.05,startPosition:126},0).wait(1).to({x:-176,startPosition:127},0).wait(1).to({x:-171.9,startPosition:128},0).wait(1).to({x:-167.85,startPosition:129},0).wait(1).to({x:-163.8,startPosition:130},0).wait(1).to({x:-159.7,startPosition:131},0).wait(1).to({x:-155.65,startPosition:132},0).wait(1).to({x:-151.6,startPosition:133},0).wait(1).to({x:-147.5,startPosition:134},0).wait(1).to({x:-143.45,startPosition:135},0).wait(1).to({x:-139.4,startPosition:136},0).wait(1).to({x:-135.3,startPosition:137},0).wait(1).to({x:-131.25,startPosition:138},0).wait(1).to({x:-127.2,startPosition:139},0).wait(1).to({x:-123.1,startPosition:140},0).wait(1).to({x:-119.05,startPosition:141},0).wait(1).to({x:-115,startPosition:142},0).wait(1).to({x:-110.9,startPosition:143},0).wait(1).to({x:-106.9,startPosition:144},0).wait(1).to({x:-102.85,startPosition:145},0).wait(1).to({x:-98.75,startPosition:146},0).wait(1).to({x:-94.7,startPosition:147},0).wait(1).to({x:-90.65,startPosition:148},0).wait(1).to({x:-86.55,startPosition:149},0).wait(1).to({x:-82.5,startPosition:150},0).wait(1).to({x:-78.45,startPosition:151},0).wait(1).to({x:-74.35,startPosition:152},0).wait(1).to({x:-70.3,startPosition:153},0).wait(1).to({x:-66.25,startPosition:154},0).wait(1).to({x:-62.15,startPosition:155},0).wait(1).to({x:-58.1,startPosition:156},0).wait(1).to({x:-54.05,startPosition:157},0).wait(1).to({x:-49.95,startPosition:158},0).wait(1).to({x:-45.9,startPosition:159},0).wait(1).to({x:-41.85,startPosition:160},0).wait(1).to({x:-37.75,startPosition:161},0).wait(1).to({x:-33.7,startPosition:162},0).wait(1).to({x:-29.65,startPosition:163},0).wait(1).to({x:-25.55,startPosition:164},0).wait(1).to({x:-21.5,startPosition:165},0).wait(1).to({x:-17.45,startPosition:166},0).wait(1).to({x:-13.35,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1));

	// Tube
	this.instance_2 = new lib.Tube("synched",90);
	this.instance_2.setTransform(93.65,-69.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(1).to({regX:79.8,regY:15.5,x:173.45,y:-53.6,startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({y:-51.65,startPosition:122},0).wait(1).to({y:-49.75,startPosition:123},0).wait(1).to({y:-47.85,startPosition:124},0).wait(1).to({y:-45.95,startPosition:125},0).wait(1).to({y:-44.05,startPosition:126},0).wait(1).to({y:-42.15,startPosition:127},0).wait(1).to({y:-40.25,startPosition:128},0).wait(1).to({y:-38.35,startPosition:129},0).wait(1).to({y:-36.45,startPosition:130},0).wait(1).to({y:-34.55,startPosition:131},0).wait(1).to({y:-32.65,startPosition:132},0).wait(1).to({y:-30.75,startPosition:133},0).wait(1).to({y:-28.85,startPosition:134},0).wait(1).to({y:-26.95,startPosition:135},0).wait(1).to({y:-25.05,startPosition:136},0).wait(1).to({y:-23.15,startPosition:137},0).wait(1).to({y:-21.25,startPosition:138},0).wait(1).to({y:-19.35,startPosition:139},0).wait(1).to({y:-17.4,startPosition:140},0).wait(1).to({y:-15.5,startPosition:141},0).wait(1).to({y:-13.6,startPosition:142},0).wait(1).to({y:-11.7,startPosition:143},0).wait(1).to({y:-9.8,startPosition:144},0).wait(1).to({y:-7.9,startPosition:145},0).wait(1).to({y:-6,startPosition:146},0).wait(1).to({y:-4.1,startPosition:147},0).wait(1).to({y:-2.2,startPosition:148},0).wait(1).to({y:-0.3,startPosition:149},0).wait(1).to({y:1.6,startPosition:150},0).wait(1).to({y:3.5,startPosition:151},0).wait(1).to({y:5.4,startPosition:152},0).wait(1).to({y:7.3,startPosition:153},0).wait(1).to({y:9.2,startPosition:154},0).wait(1).to({y:11.1,startPosition:155},0).wait(1).to({y:13,startPosition:156},0).wait(1).to({y:14.9,startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1));

	// Cylinder
	this.instance_3 = new lib.Cylinder("synched",90);
	this.instance_3.setTransform(93.65,-69.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).wait(1).to({regX:-39.9,regY:52.3,x:53.75,y:-16.8,startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({y:-14.85,startPosition:122},0).wait(1).to({y:-12.95,startPosition:123},0).wait(1).to({y:-11.05,startPosition:124},0).wait(1).to({y:-9.15,startPosition:125},0).wait(1).to({y:-7.25,startPosition:126},0).wait(1).to({y:-5.35,startPosition:127},0).wait(1).to({y:-3.45,startPosition:128},0).wait(1).to({y:-1.55,startPosition:129},0).wait(1).to({y:0.35,startPosition:130},0).wait(1).to({y:2.25,startPosition:131},0).wait(1).to({y:4.15,startPosition:132},0).wait(1).to({y:6.05,startPosition:133},0).wait(1).to({y:7.95,startPosition:134},0).wait(1).to({y:9.85,startPosition:135},0).wait(1).to({y:11.75,startPosition:136},0).wait(1).to({y:13.65,startPosition:137},0).wait(1).to({y:15.55,startPosition:138},0).wait(1).to({y:17.45,startPosition:139},0).wait(1).to({y:19.4,startPosition:140},0).wait(1).to({y:21.3,startPosition:141},0).wait(1).to({y:23.2,startPosition:142},0).wait(1).to({y:25.1,startPosition:143},0).wait(1).to({y:27,startPosition:144},0).wait(1).to({y:28.9,startPosition:145},0).wait(1).to({y:30.8,startPosition:146},0).wait(1).to({y:32.7,startPosition:147},0).wait(1).to({y:34.6,startPosition:148},0).wait(1).to({y:36.5,startPosition:149},0).wait(1).to({y:38.4,startPosition:150},0).wait(1).to({y:40.3,startPosition:151},0).wait(1).to({y:42.2,startPosition:152},0).wait(1).to({y:44.1,startPosition:153},0).wait(1).to({y:46,startPosition:154},0).wait(1).to({y:47.9,startPosition:155},0).wait(1).to({y:49.8,startPosition:156},0).wait(1).to({y:51.7,startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.2,-151.2,594.5,302.5);


// stage content:
(lib.NRMA0820_First_Saturdays_Digi_Banners_Apr_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SCREEN_04
	this.instance = new lib.SCREEN04("synched",0);
	this.instance.setTransform(80,298.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).to({alpha:1},9).wait(70).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// SCREEN_03
	this.instance_1 = new lib.SCREEN03("synched",0);
	this.instance_1.setTransform(80.15,378.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({alpha:1},11).wait(69).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(90));

	// SCREEN_02
	this.instance_2 = new lib.SCREEN02("synched",0);
	this.instance_2.setTransform(79.95,367.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({alpha:1},10).wait(69).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(180));

	// COVER_MOTION_FOR_TWEENING
	this.instance_3 = new lib.COVERMOTIONFORTWEENING("synched",0);
	this.instance_3.setTransform(486.15,125.15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({alpha:0},10).wait(160).to({startPosition:0},0).to({alpha:1},9).to({_off:true},1).wait(90));

	// Subject_Animation
	this.instance_4 = new lib.SubjectAnimation("synched",0);
	this.instance_4.setTransform(96.15,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).to({_off:true},1).wait(90));

	// SCREEN_01
	this.instance_5 = new lib.SCREEN01("synched",0);
	this.instance_5.setTransform(80.15,266.45);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},10).wait(70).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,120.2,444.5,259.40000000000003);
// library properties:
lib.properties = {
	id: 'CB4556E3236F4DFEB2A9F4F00FE04732',
	width: 300,
	height: 250,
	fps: 30,
	color: "#000D7D",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CB4556E3236F4DFEB2A9F4F00FE04732'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;