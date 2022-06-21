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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000D7D").s().p("AFjBOQggAAgXgXQgWgXAAggQAAggAWgWQAXgXAgAAQAhAAAWAXQAXAWAAAgQAAAggXAXQgWAXghAAIAAAAgAE9glIAAAAQgPAQAAAVQAAAWAPAQQAQAPAWAAQAWAAAQgPQAQgQAAgWQAAgVgQgQIAAAAQgQgPgWAAIAAAAQgWAAgQAPgAliBOQghAAgXgXQgWgXAAggQAAggAWgWQAXgXAhAAQAgAAAXAXQAWAWAAAgQAAAggWAXQgXAXggAAIAAAAgAljA2QAWAAAQgQQAQgQAAgWQAAgVgQgPIAAgBQgQgPgWAAQgVAAgQAPIAAABQgQAPAAAVQAAAXAQAPIAAAAQAQAQAVAAgAljAuQgSAAgNgOIAAAAQgOgNAAgTQAAgSAOgNIAAAAQANgNASAAQATAAAOANIAAAAQANANAAASQAAATgNANQgOAOgTAAIAAAAgAFjAtQgTAAgNgNQgNgNAAgTQAAgSANgOIAAABQANgNATAAQATAAAOANIAAgBQANAOAAASQAAATgNANQgOANgTAAIAAAAg");
	this.shape.setTransform(43.725,8.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEnA9QgZgaAAgjQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgkAAQgjAAgZgZgAGaA3QAXgXAAggQAAgggXgWQgWgXghAAQggAAgXAXQgWAWAAAgQAAAgAWAXQAXAXAgAAQAhAAAWgXgAmfA9QgZgaAAgjQAAgjAZgZQAZgZAkAAQAjAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgjAAQgkAAgZgZgAkrA3QAWgXAAggQAAgggWgWQgXgXggAAQghAAgXAXQgWAWAAAgQAAAgAWAXQAXAXAhAAQAgAAAXgXgAmIAmIAAAAQgQgPAAgXQAAgVAQgPIAAgBQAQgPAVAAQAWAAAQAPIAAABQAQAPAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQgAmQAAQAAATAOANIAAAAQANAOASAAQATAAAOgOQANgNAAgTQAAgSgNgNIAAAAQgOgNgTAAQgSAAgNANIAAAAQgOANAAASgAE9AmQgPgQAAgWQAAgVAPgQIAAAAQAQgPAWAAQAWAAAQAPIAAAAQAQAQAAAVQAAAWgQAQQgQAPgWAAQgWAAgQgPgAGEAgQANgNAAgTQAAgSgNgOIAAABQgOgNgTAAQgTAAgNANIAAgBQgNAOAAASQAAATANANQANANATAAQATAAAOgNg");
	this.shape_1.setTransform(43.725,8.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.4,-0.4,88.30000000000001,17.2), null);


(lib.PROTECTEDCARBODY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BODY
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D7D").s().p("AINCgIgvAAIAAgCQgBgtggggQggghguAAQgtAAggAhQggAgAAAtIAAACInqAAIAAgCQgBgtgfggQggghguAAQguAAggAhQggAgAAAtIAAACIhNAAQgGAAgEgEQgFgEABgHIAAg8QgBgGAFgEQAEgFAGAAIAHAAIADgBIABgDIAChKQAAgMADgGIAAAAQADgFAMgKIBShBIAVgSQAFgGAAgHIAAAAQAAgFgEgEIAggFQAigEAXgCQAXgBBRgBQBSgBAlABQAkABAwAEQAxAFAPADIAAAAQANAEAYALIAxAcIBCAoIgBAAQApAaAFABIAAAAQAFACAjADIBBAFQApAEAuALQA2AMAMANQAOAQgDAlIAAACIACACQAFACACAEIABAAQACADABAFIAAAAIgFA8IAAAAQAAAHgEAEQgFAEgGAAIAAAAgAg+iRIgCACIAAACIAQBxIABACIACABIDDAFIACAAIACgCIAAgCIgFgYIAAgBIABAAQAEgCAJABIABAAQAIAAAXADIACgBIACgCIABgCIgCgCIgNgLIgbgSIgogZQgkgUgXgHIAAAAQgPgFg1gDIgzgDIAAAAIgCABgAhXiSIg4AFQg6AFgHADQgMADgIAKIAAAAQgHAHgCAJIAAAAQgDAIAAAiIAAAfIABADIACABICkACIACAAIACgCIAAgCIgOhxIgBgDIgDgBIAAAAgAj5hzQgFABgHAEQgNAIgKANIAAAAQgOARgKAVIAAAAIgGATIAAACIABACIADABIA3ABIACgBIABgBIABgCQAAgTACgVQABgRAEgXIgBgCIgBgCIgCgBIgBAAgAlgh/IgdADIgCABIhSBLIgBACIAAADIABACIADAAIAmAAIADgBIBJhOIABgCIgBgCIgBgCIgDgBIAAAAgAgpghIgOhoIAuACQAzADAPAEIgBAAQAXAHAiAUIApAZIAZARIAEACIgTgBIAAAAQgMgBgFACQgIADACAHIAAAAIAEATgAjogjIAAgbQABggACgIIgBAAQADgHAFgGIAAABQAHgJAJgDQAIgCA4gFIA0gEIANBogAkxgjIAFgNIAAABQAJgVANgQIAAAAQAJgMAMgHIAEgCIgEAiQgCAUAAARgAl6h0IAQgBIhABEIgaAAg");
	this.shape.setTransform(0,0.0167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHZCoIgCgBIgBgDIAAgGQAAgqgegeQgegegrAAQgpAAgeAeQgeAeAAAqIAAAGIgBADIgDABInzAAIgCgBIgBgDIAAgGQAAgqgegeQgegegqAAQgqAAgeAeQgeAeAAAqIAAAGIgBADIgDABIhRAAQgJAAgHgGQgGgHgBgKIAAg8QABgJAGgHQAHgHAJAAIADAAIABhGQABgPAEgHIAAAAQAEgGANgLIBShBQAQgNAEgFQADgDgBgEIAAAAQAAgCgCgDIAAAAQgCgDAAgCQAAgDADgCIAAgBQADgCAigEQAjgEAXgCQAWgBBSgBQBTgBAkABQAkABAxAEQAyAFAPADIAAABQAOADAYAMIAzAcIBAAoIABAAQAnAZAEACIAAAAQAFABAhADIBBAFIAAAAQArAEAtALQA7AOAMAOQAQAQgDAoQAEACAEAFIgBAAQAGAFAAAIIAAAAIgFA9QAAAJgHAHQgGAGgKAAgAG9BRQAgAgABAtIAAACIAvAAQAGAAAFgEQAEgEAAgHIAAAAIAFg8IAAAAQgBgFgCgDIgBAAQgCgEgFgCIgCgCIAAgCQADglgOgQQgMgNg2gMQgugLgpgEIhBgFQgjgDgFgCIAAAAQgFgBgpgaIABAAIhCgoIgxgcQgYgLgNgEIAAAAQgPgDgxgFQgwgEgkgBQglgBhSABQhRABgXABQgXACgiAEIggAFQAEAEgBAFIAAAAQABAHgFAGIgVASIhSBBQgMAKgDAFIAAAAQgDAGgBAMIgBBKIgBADIgDABIgHAAQgGAAgEAFQgFAEAAAGIAAA8QAAAHAFAEQAEAEAGAAIBNAAIAAgCQAAgtAgggQAgghAuAAQAuAAAgAhQAfAgABAtIAAACIHqAAIAAgCQAAgtAgggQAgghAtAAQAuAAAgAhgAgtgZIgCgBIgCgCIgPhxIAAgCIACgCIACgBIAzADQA1ADAOAFIABAAQAXAHAkAUIAoAZIAaASIAOALIACACIgBACIgCACIgCABQgXgDgIAAIgBAAQgJgBgEACIgBAAIAAABIAFAYIAAACIgCACIgCAAgAgpghIC6AFIgEgTIAAAAQgCgHAIgDQAFgCAMABIAAAAIATABIgEgCIgZgRIgpgZQgigUgXgHIABAAQgPgEgzgDIgugCgAhJgZIikgCIgCgBIgBgDIAAgfQAAgiACgIIABAAQACgJAGgHIAAAAQAJgKAMgDQAHgDA6gFIA4gFIADABIABADIAOBxIAAACIgCACIgCAAIAAAAgAjog+IAAAbICbACIgNhoIg0AEQg4AFgIACQgJADgHAJIAAgBQgFAGgDAHIABAAQgCAIgBAggAj/gaIg3gBIgDgBIgBgCIAAgCIAGgTIAAAAQAKgVAOgRIAAAAQAKgNANgIQAHgEAFgBIADABIABACIABACQgEAXgBARQgCAVAAATIgBACIgBABIgCABIAAAAgAkxgjIAuABQAAgRACgUIAEgiIgEACQgMAHgJAMIAAAAQgNAQgJAVIAAgBIgFANgAnRgpIgBgCIAAgDIABgCIBShLIACgBIAdgDIADABIABACIABACIgBACIhJBOIgDABIgnAAIgCAAgAl6h0IhKBDIAaAAIBAhEg");
	this.shape_1.setTransform(0,0.0166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(203));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-16.8,110.5,33.7);


(lib.PHONEandFILL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// PHONE_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgHuQgSAAgMgMQgMgMAAgSIAAuHQAAgSAMgMQAMgMASAAIHBAAQARAAANAMQAMAMAAASIAAOHQAAASgMAMQgNAMgRAAgAj2nZQgJAJAAANIAAOHQAAANAJAJQAJAJANAAIHBAAQANAAAJgJQAJgJAAgNIAAuHQAAgNgJgJQgJgJgNAAInBAAQgNAAgJAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PHONE
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj/InQgTAAgPgOQgOgOABgUIAAvtQgBgUAOgOQAPgOATAAIH+AAQAUAAAOAOQAOAOAAAUIAAPtQAAAUgOAOQgOAOgUAAgAkYoPQgJAKgBAPIAAPtQABAOAJALQALAKAOAAIH+AAQAOAAALgKQALgLAAgOIAAvtQAAgPgLgKQgLgKgOAAIn+AAQgOAAgLAKgAjpHuQgOAAgJgKQgLgJABgOIAAuZQgBgOALgJQAJgKAOAAIHTAAQAOAAAJAKQALAJgBAOIAAOZQABAOgLAJQgJAKgOAAgAj9ngQgJAIAAAMIAAOZQAAAMAJAIQAIAJAMAAIHTAAQAMAAAIgJQAJgIAAgMIAAuZQAAgMgJgIQgIgJgMAAInTAAQgMAAgIAJgAgLmsQgEgFAAgHQAAgGAEgGQAFgEAGAAQAHAAAFAEQAEAGAAAGQAAAHgEAFQgFAEgHAAIAAAAQgGAAgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// PHONE_FILL
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000D7D").s().p("Aj/InQgTAAgOgOQgOgOAAgUIAAvtQAAgUAOgOQAOgOATAAIH+AAQAUAAAOAOQAOAOAAAUIAAPtQAAAUgOAOQgOAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-55.1,60.7,110.2);


(lib.new_SCREEN035 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgFAFgEQAEgDAEAAQAGAAAEADQADAEAAAFQAAAFgDAEQgEAFgGAAQgEAAgEgFg");
	this.shape.setTransform(146.35,-303.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_1.setTransform(137.475,-307.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_2.setTransform(128.075,-307.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgJQAAgNgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAnIAABIIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_3.setTransform(117.625,-307.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBLIAAiTIARAAIAAATQAFgJAKgGQALgGALAAQAVAAAOAPQAOAPAAAaIAAABQAAAYgNAQQgOAQgWAAQgZAAgMgUIAAA4gAgYgxQgKALAAAVIAAABQAAATAKALQAJALAQAAQAhAAAAgpIAAgBQAAgVgKgLQgJgKgOAAQgPAAgKAKg");
	this.shape_4.setTransform(106.175,-305.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_5.setTransform(93.275,-307.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_6.setTransform(83.875,-307.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBLIAAiTIARAAIAAATQAFgJAKgGQALgGALAAQAVAAAOAPQAOAPAAAaIAAABQAAAYgNAQQgOAQgWAAQgZAAgMgUIAAA4gAgYgxQgKALAAAVIAAABQAAATAKALQAJALAQAAQAhAAAAgpIAAgBQAAgVgKgLQgJgKgOAAQgPAAgKAKg");
	this.shape_7.setTransform(73.275,-305.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAQAAAYIAAABQAAAYgPARQgPAPgYAAQgWAAgQgQgAgZgeQgKALAAATIAAABQAAATAKALQAJAMAQAAQAQAAAKgMQAKgMAAgSIAAgBQAAgTgKgLQgKgLgQAAQgQAAgJALg");
	this.shape_8.setTransform(54.45,-307.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_9.setTransform(44.225,-308.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_10.setTransform(29.175,-307.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA9A4IAAhFQAAgbgXAAQgMABgIAGQgJAJAAAOIAABCIgQAAIAAhFQgBgbgXAAQgLABgJAGQgJAJAAAOIAABCIgSAAIAAhtIASAAIAAARQAEgIAIgFQAJgGAMAAQAYAAAHAVQAFgKAMgGQAKgFAKAAQARAAAJAKQALALAAAXIAABDg");
	this.shape_11.setTransform(13.7,-307.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBOIAAhtIARAAIAABtgAgHg5QgEgEABgFQgBgEAEgEQADgDAEAAQAEAAAEADQAEAEgBAEQABAFgEAEQgEAEgEgBQgEABgDgEg");
	this.shape_12.setTransform(1.4,-309.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_13.setTransform(-5.125,-308.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_14.setTransform(122.825,-332.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA3IgohtIATAAIAgBbIAghbIASAAIgnBtg");
	this.shape_15.setTransform(111.25,-332.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgJQAAgNgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAnIAABIIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_16.setTransform(99.625,-332.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_17.setTransform(88.125,-335.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAuQgLgLAAgVIAAhFIARAAIAABEQAAAcAaAAQALAAAJgIQAJgIAAgPIAAhBIARAAIAABtIgRAAIAAgSQgEAJgJAFQgJAGgMAAQgRAAgKgKg");
	this.shape_18.setTransform(69.975,-332.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAQAAAYIAAABQAAAYgPARQgPAPgYAAQgWAAgQgQgAgageQgJAMAAASIAAABQAAATAJALQALAMAPAAQAQAAAKgMQAKgMAAgSIAAgBQAAgSgKgMQgKgLgQAAQgPAAgLALg");
	this.shape_19.setTransform(57.5,-332.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgrhiIATAAIAgBOIAfhOIASAAIg9CTg");
	this.shape_20.setTransform(45.6,-330.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAQgPQAPgQAWAAQAYAAAOAQQAQAQAAAYIAAABQAAAYgQARQgOAPgYAAQgXAAgPgQgAgZgeQgKAMAAASIAAABQAAATAKALQAKAMAPAAQARAAAJgMQAKgMAAgSIAAgBQAAgSgKgMQgJgLgRAAQgPAAgKALg");
	this.shape_21.setTransform(28.2,-332.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAvQgLgJgBgRIARAAQACAVAXABQAYAAAAgSQAAgIgGgFQgGgDgNgCQgVgFgIgGQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAFAAAGQAAAIAGADQAFAEAOADQAUAEAIAEQALAHAAARQAAAPgKAIQgLAKgUAAQgSAAgMgKg");
	this.shape_22.setTransform(16.825,-332.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-346.1,162.20000000000002,50.200000000000045);


(lib.new_SCREEN03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape.setTransform(135.525,-307.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA4IAAhEQAAgcgaAAQgLAAgJAIQgJAIAAAPIAABBIgSAAIAAhtIASAAIAAASQAEgJAJgFQAJgGAMAAQAnAAAAAtIAABCg");
	this.shape_1.setTransform(123.325,-307.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAPgPQAPgQAXAAQAYAAAPAQQAPAQAAAYIAAABQAAAYgPARQgPAPgYAAQgWAAgQgQgAgZgeQgKALAAATIAAABQAAATAKALQAJAMAQAAQAQAAAKgMQAKgMAAgSIAAgBQAAgTgKgLQgKgLgQAAQgQAAgJALg");
	this.shape_2.setTransform(110.7,-307.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_3.setTransform(98.125,-310.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBLIAAiTIARAAIAAATQAFgJAKgGQALgGALAAQAVAAAOAPQAOAPAAAaIAAABQAAAYgNAQQgOAQgWAAQgZAAgMgUIAAA4gAgYgxQgKALAAAVIAAABQAAATAKALQAJALAQAAQAhAAAAgpIAAgBQAAgVgKgLQgJgKgOAAQgPAAgKAKg");
	this.shape_4.setTransform(85.625,-305.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_5.setTransform(69.675,-307.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAuQgLgLAAgVIAAhFIARAAIAABEQAAAcAaAAQALAAAJgIQAJgIAAgPIAAhBIARAAIAABtIgRAAIAAgSQgEAJgJAFQgJAGgMAAQgRAAgKgKg");
	this.shape_6.setTransform(58.975,-307.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAQgPQAOgQAXAAQAXAAAPAQQAQAQAAAYIAAABQAAAYgQARQgPAPgXAAQgXAAgPgQgAgageQgJALAAATIAAABQAAATAJALQAKAMAQAAQAQAAAKgMQAKgMAAgSIAAgBQAAgTgKgLQgKgLgQAAQgQAAgKALg");
	this.shape_7.setTransform(46.5,-307.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgshiIATAAIAhBOIAfhOIASAAIg8CTg");
	this.shape_8.setTransform(34.6,-305.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcA4IAAhEQAAgcgaAAQgLAAgJAIQgJAIAAAPIAABBIgSAAIAAhtIASAAIAAASQAEgJAJgFQAJgGAMAAQAnAAAAAtIAABCg");
	this.shape_9.setTransform(17.275,-307.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgZAQgPQAOgQAXAAQAXAAAPAQQAQAQAAAYIAAABQAAAYgQARQgPAPgXAAQgXAAgPgQgAgageQgJALAAATIAAABQAAATAJALQAKAMAQAAQAQAAAKgMQAKgMAAgSIAAgBQAAgTgKgLQgKgLgQAAQgQAAgKALg");
	this.shape_10.setTransform(4.65,-307.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAvQgLgJgBgRIARAAQACAVAXABQAYAAAAgSQAAgIgGgFQgGgDgNgCQgVgFgIgGQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAFAAAGQAAAIAGADQAFAEAOADQAUAEAIAEQALAHAAARQAAAPgKAIQgLAKgUAAQgSAAgMgKg");
	this.shape_11.setTransform(186.025,-332.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_12.setTransform(177.125,-333.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_13.setTransform(170.125,-332.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_14.setTransform(159.775,-332.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBRIAAihIARAAIAAChg");
	this.shape_15.setTransform(151.125,-335.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgJQAAgNgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAnIAABIIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_16.setTransform(142.425,-332.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSACgIAGQgJAJAAASIAAA8g");
	this.shape_17.setTransform(128.175,-332.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_18.setTransform(117.825,-332.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_19.setTransform(105.625,-335.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_20.setTransform(95.425,-333.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggAxQgLgJAAgPQAAgSARgIQAOgHAXAAIAQAAIAAgJQAAgNgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoAAAAAnIAABIIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAZQAAASAVAAQANAAAJgHQAKgHAAgMIAAgOIgPAAQgmAAAAAWg");
	this.shape_21.setTransform(85.825,-332.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_22.setTransform(74.625,-332.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYA3IgXhRIgZBRIgTAAIgihtIAUAAIAZBYIAahYIAPAAIAZBYIAahYIASAAIgjBtg");
	this.shape_23.setTransform(60.35,-332.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgjBCQgMgJgCgOIASAAQAEASAbABQAjAAAAgjIAAgQQgFAJgKAGQgLAHgKAAQgWAAgOgQQgOgOAAgVIAAgCQAAgXAOgQQAPgQAWAAQAXAAAMAUIAAgSIARAAIAABlQAAAYgPAMQgNAMgYAAQgWAAgNgKgAgYgxQgJALAAARIAAACQAAARAKAKQAJAKAOAAQAPAAAKgKQAKgKAAgSIAAgBQAAgTgJgKQgJgKgQAAQgQAAgJALg");
	this.shape_24.setTransform(39.475,-330.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA4IAAhEQAAgcgaAAQgLAAgJAIQgJAIAAAPIAABBIgSAAIAAhtIASAAIAAASQAEgJAJgFQAJgGAMAAQAnAAAAAtIAABCg");
	this.shape_25.setTransform(27.075,-332.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIBOIAAhtIARAAIAABtgAgHg5QgEgEABgFQgBgEAEgEQADgDAEAAQAEAAAEADQAEAEgBAEQABAFgEAEQgEAEgEgBQgEABgDgEg");
	this.shape_26.setTransform(18.05,-334.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_27.setTransform(11.525,-333.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_28.setTransform(4.075,-333.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgaIAAgBQAAgZAOgPQAOgQAWAAQAVAAANANQAPAPAAAbIAAAEIhRAAQABAoAhAAQAaAAADgTIASAAQgDAQgNAIQgMAJgTAAQgXAAgOgPgAAhgJQgDgggdAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAg");
	this.shape_29.setTransform(-5.425,-332.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAvQgLgJgBgRIARAAQACAVAXABQAYAAAAgSQAAgIgGgFQgGgDgNgCQgVgFgIgGQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAFAAAGQAAAIAGADQAFAEAOADQAUAEAIAEQALAHAAARQAAAPgKAIQgLAKgUAAQgSAAgMgKg");
	this.shape_30.setTransform(-16.425,-332.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbBKIAVgxIgshiIATAAIAhBOIAehOIASAAIg7CTg");
	this.shape_31.setTransform(-32.55,-330.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiA+IAAASIgRAAIAAihIARAAIAABHQAFgJAKgFQALgHALAAQAVAAAOAPQAOAQAAAYIAAABQAAAagNAPQgOAQgWAAQgZAAgMgUgAgYgGQgKAKAAAVIAAABQAAAVAKAKQAJALAQAAQAhAAAAgqIAAgBQAAgUgKgLQgJgKgOAAQgPAAgKAKg");
	this.shape_32.setTransform(-44.275,-335.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-346.1,246.5,50.200000000000045);


(lib.new_SCREEN02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgbBKIAVgyIgrhhIATAAIAgBOIAfhOIASAAIg9CTg");
	this.shape.setTransform(162.25,-306.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBEQgOgPAAgZIAAgCQAAgZAOgPQAOgRAXAAQAXAAAMAUIAAhGIARAAIAAChIgRAAIAAgTQgFAJgKAGQgLAGgLAAQgWAAgNgOgAgYgFQgJAKAAAUIAAACQAAAUAKALQAIAKAPAAQAPAAAKgLQAKgLAAgUIAAgCQAAgogiAAQgQAAgJALg");
	this.shape_1.setTransform(149.725,-311.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAxQgLgIAAgRQAAgRARgIQAOgIAXABIAQAAIAAgIQAAgOgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoABAAAnIAABHIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAYQAAATAVAAQANAAAJgHQAKgHAAgNIAAgNIgPAAQgmAAAAAVg");
	this.shape_2.setTransform(137.525,-308.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgZIAAgCQAAgYAOgQQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhAAQAaABADgUIASAAQgDAQgNAJQgMAJgTAAQgXAAgOgPgAAhgKQgDgfgdAAQgMAAgJAJQgIAIgDAOIBAAAIAAAAg");
	this.shape_3.setTransform(126.325,-308.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSABgIAHQgJAJAAASIAAA8g");
	this.shape_4.setTransform(116.925,-308.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA9A4IAAhFQAAgbgXAAQgMAAgIAIQgJAIAAAOIAABCIgRAAIAAhFQAAgbgXAAQgLAAgJAIQgJAIAAAOIAABCIgRAAIAAhtIARAAIAAARQAEgIAJgFQAJgGALAAQAYAAAHAVQAGgKALgFQAJgGAMAAQAQAAAKAKQALAMgBAWIAABDg");
	this.shape_5.setTransform(97.45,-308.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaA4IAAhtIASAAIAAAUQALgVAYgBIAAAQQgSABgIAHQgJAJAAASIAAA8g");
	this.shape_6.setTransform(84.425,-308.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmApQgPgQAAgYIAAgBQAAgYAPgQQAPgQAXAAQAYAAAPAQQAPAPAAAZIAAABQAAAZgPAPQgPAQgYAAQgWAAgQgQgAgageQgJAMAAASIAAABQAAATAJALQALALAPAAQAQAAAKgLQAKgLAAgTIAAgBQAAgSgKgMQgKgLgQAAQgPAAgLALg");
	this.shape_7.setTransform(73.7,-308.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_8.setTransform(63.475,-309.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAwQgLgKgBgRIARAAQACAVAXAAQAYAAAAgRQAAgIgGgFQgGgDgNgDQgVgDgIgHQgJgGAAgPQAAgOAMgJQALgIAOAAQAjAAAEAgIgRAAQgDgRgTAAQgJAAgGAEQgGAEAAAIQAAAHAGAEQAFADAOADQAUADAIAFQALAIAAAPQAAAQgKAJQgLAJgUAAQgSAAgMgJg");
	this.shape_9.setTransform(54.875,-308.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBRIAAihIARAAIAAChg");
	this.shape_10.setTransform(47.175,-311.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHBOIAAhtIAQAAIAABtgAgHg5QgEgEABgEQgBgFAEgDQADgEAEAAQAFAAADAEQAEADgBAFQABAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(41.8,-310.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAxQgLgIAAgRQAAgRARgIQAOgIAXABIAQAAIAAgIQAAgOgGgFQgFgGgNAAQgWAAgCATIgSAAQACgRANgJQALgIARAAQAoABAAAnIAABHIgRAAIAAgOQgNAQgVAAQgQAAgJgIgAgaAYQAAATAVAAQANAAAJgHQAKgHAAgNIAAgNIgPAAQgmAAAAAVg");
	this.shape_12.setTransform(33.125,-308.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBRIAAhEQAAgbgaAAQgLAAgJAHQgJAIAAAOIAABCIgSAAIAAihIASAAIAABGQAEgIAJgGQAJgGAMAAQAnAAAAAsIAABDg");
	this.shape_13.setTransform(21.625,-311.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA8QgHgHAAgOIAAhCIgQAAIAAgPIAQAAIAAgZIAQAAIAAAZIAaAAIAAAPIgaAAIAABBQAAAQAOAAQAHAAAGgDIAAAPQgGACgJAAQgOAAgHgIg");
	this.shape_14.setTransform(5.875,-309.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAqQgPgPAAgZIAAgCQAAgYAOgQQAOgQAWAAQAVAAANANQAPAOAAAcIAAAEIhRAAQABAnAhAAQAaABADgUIASAAQgDAQgNAJQgMAJgTAAQgXAAgOgPgAAhgKQgDgfgdAAQgMAAgJAJQgIAIgDAOIBAAAIAAAAg");
	this.shape_15.setTransform(-3.625,-308.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA4QgTgVAAgiIAAgBQAAghAUgVQAUgWAgAAQAYAAAPALQATAMADAYIgSAAQgHghgkAAQgZAAgOARQgOARAAAcIAAABQAAAcANARQAOAQAaAAQAXAAANgOQALgMAAgVIgsAAIAAgPIA+AAIAAALQAAAfgTASQgQARgeAAQghAAgUgVg");
	this.shape_16.setTransform(-17.65,-310.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-322.1,197.70000000000002,25);


(lib.new_SCREEN01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhkBOQgHAAAAgGIAAiQQAAgFAHAAIDKAAQAFAAAAAGIAABzQgBAFgEAAIhvAAIAAAXQABAGgHAAgAgpBIIAaAAIAAgaIgaAAgAhGBIIAZAAIAAgaIgZAAgAhkBIIAaAAIAAgaIgaAAgABLAqIAaAAIAAgZIgaAAgAAuAqIAZAAIAAgZIgZAAgAAQAqIAaAAIAAgZIgaAAgAgMAqIAZAAIAAgZIgZAAgAgpAqIAaAAIAAgZIgaAAgAhGAqIAZAAIAAgZIgZAAgAhkAqIAaAAIAAgZIgaAAgABLANIAaAAIAAgZIgaAAgAAuANIAZAAIAAgZIgZAAgAAQANIAaAAIAAgZIgaAAgAgMANIAZAAIAAgZIgZAAgAgpANIAaAAIAAgZIgaAAgAhGANIAZAAIAAgZIgZAAgAhkANIAaAAIAAgZIgaAAgABLgPIAaAAIAAgaIgaAAgAAugPIAZAAIAAgaIgZAAgAAQgPIAaAAIAAgaIgaAAgAgMgPIAZAAIAAgaIgZAAgAgpgPIAaAAIAAgaIgaAAgAhGgPIAZAAIAAgaIgZAAgAhkgPIAaAAIAAgaIgaAAgAAugsIAZAAIAAgaIgZAAgAAQgsIAaAAIAAgaIgaAAgAgMgsIAZAAIAAgaIgZAAgAgpgsIAaAAIAAgaIgaAAgAhGgsIAZAAIAAgaIgZAAgAhkgsIAaAAIAAgaIgaAAg");
	this.shape.setTransform(40.5,-135.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBNQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhBIgyhTQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAbAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAhA/IAhg/IACgBIAYAAIABABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIguBUIAABAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(176.7625,-135.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBNIgCgBIgMglIg6AAIgMAlQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgXAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBABgBIAyiVQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAiAAIACABIAxCVQAAABAAABQAAAAAAAAQAAABAAAAQgBAAgBAAgAAVASIgVhHIgXBHIAsAAg");
	this.shape_2.setTransform(162.375,-135.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BNQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAiVQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAtAAQAmAAAWAVQATAUABAiIAAABQgBAjgTAVQgWAVgmAAgAghA3IAQAAQAzAAAAg2IAAgBQAAg1gzAAIgQAAg");
	this.shape_3.setTransform(145.75,-135.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBNIgBgBIgog9IgSAAIAAA8QAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgZAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAiVQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAyAAQAaAAAPALQAQAMAAAWIAAABQAAAggiAJIApA/QAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAAAIgCABgAgdgFIAXAAQAcAAAAgYIAAgBQAAgYgcAAIgXAAg");
	this.shape_4.setTransform(128.55,-135.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA/QgQgQAAgeIAAhcQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAYAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaQgBAWAIAJQAIAJAQAAQAQAAAIgJQAJgKAAgXIAAhYQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAZAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAABbQAAA+g9AAQgdAAgQgPg");
	this.shape_5.setTransform(111.5,-135.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBNQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAiAIgpAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAgTQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIBtAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAATQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgoAAIAACAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(94.525,-135.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBNIgCgBIgMglIg6AAIgMAlQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgWAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBABgBIAyiVQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAiAAIACABIAxCVQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAAVASIgVhHIgXBHIAsAAg");
	this.shape_7.setTransform(79.875,-135.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6AgQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAEAbAdAAQANAAAIgHQAIgGAAgLQAAgLgGgFQgHgFgSgDQgdgEgMgIQgNgLAAgVQAAgTAPgMQAPgNAYAAQAxAAAFAqQABABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgWAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgFgWgXABQgNgBgHAGQgHAFAAAJQAAALAGAEQAHAGASADQAdADAMAKQAOAKAAAWQAAATgPAOQgRAOgZAAQg3AAgFgvg");
	this.shape_8.setTransform(63.6125,-135.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBOQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAiVQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAZAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAACVQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAg");
	this.shape_9.setTransform(-26.45,-135.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBOQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAiVQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIBbAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAAASQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIhAAAIAAAuIAyAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAARQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgyAAIAAA9QAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_10.setTransform(-38.2,-135.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBNQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAiBIgoAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgSQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIBtAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAASQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgoAAIAACBQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_11.setTransform(17.25,-135.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag7AgQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAXAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAEAbAdAAQANAAAJgHQAIgGAAgLQAAgLgHgFQgGgFgTgDQgcgEgNgIQgNgLAAgVQAAgUAPgMQAPgNAYAAQAxAAAGArQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgXAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQgEgVgYAAQgNAAgHAGQgGAFAAAJQgBALAHAEQAGAGASACQAdAEANAKQAOAKAAAWQgBAUgPANQgQAOgaAAQg3AAgGgvg");
	this.shape_12.setTransform(1.85,-135.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBNIgCgBIgmg9IgTAAIAAA8QAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgYAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAiXIA0AAQAaAAAPALQAQALAAAXIAAABQAAAggiAJIApA/QACADgEAAgAgdgFIAXAAQAdAAAAgYIAAgBQAAgYgdAAIgXAAg");
	this.shape_13.setTransform(-13.5167,-135.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAyIAAhXIgVAQIAAgLIAWgRIALAAIAABjg");
	this.shape_14.setTransform(93.125,-167.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghAzIAAgDIAngqQAOgOAAgOQAAgSgSAAQgQAAgDAWIgLAAQAAgPAJgIQAJgJAMAAQAOAAAJAIQAIAIAAAMQAAARgUATIgbAbIAwAAIAAAKg");
	this.shape_15.setTransform(86.8,-167.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_16.setTransform(81.2,-163.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAsQgLgIABgOQAAgTASgGQgPgGAAgPQAAgMAJgHQAKgHALAAQAMAAAJAHQAJAHAAALQAAAPgPAHQATAFAAATQAAAOgLAJQgJAHgOAAQgMAAgLgHgAgOAGQgHAGAAAJQAAAKAHAFQAGAFAIAAQAKAAAFgFQAHgGAAgJQAAgKgHgFQgFgFgKAAQgIAAgGAFgAgMgkQgGAEABAIQgBAHAGAFQAFAEAIAAQARAAAAgQQAAgIgFgEQgFgFgIAAQgHAAgFAFg");
	this.shape_17.setTransform(75.35,-167.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgWIAAgFQAAgWAKgNQALgNARAAQASAAALANQAKANAAAWIAAAFQAAAWgKANQgLANgSAAQgRAAgKgNgAgTgfQgHALAAASIAAAFQAAATAIAKQAHAJALAAQAbAAAAgnIAAgEQAAgSgHgKQgHgLgNAAQgMAAgHAKg");
	this.shape_18.setTransform(66.475,-167.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(60.4,-163.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAyIAhhZIgxAAIAAgKIBBAAIAAACIgkBhg");
	this.shape_20.setTransform(56.25,-167.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgWIAAgFQAAgWAKgNQALgNARAAQASAAALANQAKANAAAWIAAAFQAAAWgKANQgKANgSAAQgRAAgLgNgAgTgfQgHALAAASIAAAFQAAAmAbAAQAaAAAAgnIAAgEQAAgSgHgKQgHgLgNAAQgMAAgHAKg");
	this.shape_21.setTransform(48.275,-167.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-172.4,226.1,45.10000000000001);


(lib.new_COVERMOTIONFORTWEENING = function(mode,startPosition,loop,reversed) {
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


(lib.new_Button = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.new_Button, new cjs.Rectangle(0,0,145.2,39.3), null);


(lib.new_mysteryobject = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.new_mysteryobject, new cjs.Rectangle(0.3,0.3,5.1000000000000005,8.299999999999999), null);


(lib.LIGHTING = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LIGHTING
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("AhfApIBqgLIhbjAIByAIIA+D9IiGgbIAgBbg");
	this.shape.setTransform(0.4365,-2.741,0.6477,0.6477);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73F5AD").s().p("AhJACIBMgDIg1h4IBKAGIAyCfIhVgJIAhBXg");
	this.shape_1.setTransform(0.225,-1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73F5AD").s().p("AiDgjICCAAIhIixIByAIIBbDwIiCAAIBJCxg");
	this.shape_2.setTransform(-0.0007,0.3955,0.6477,0.6477);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#73F5AD").s().p("AhdgaIBdAAIg0hyIBRAFIBBCcIhcAAIAwB4g");
	this.shape_3.setTransform(0.025,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#73F5AD").s().p("AiDgsICCAAIhIixIByAIIBbDwIiCAAIBBDDg");
	this.shape_4.setTransform(0.0507,0.9946,0.7728,0.6477);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#73F5AD").s().p("AhggbIBgAAIg2hyIBTAFIBECcIhgAAIAyB6g");
	this.shape_5.setTransform(0.05,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#73F5AD").s().p("AhagZIBZAAIgxhyIBOAFIA/CcIhZAAIAwB2g");
	this.shape_6.setTransform(0,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#73F5AD").s().p("AgngxIAcgiIg2hWIByAIIAKBjIgmAlIAtDDg");
	this.shape_7.setTransform(-0.5868,-2.3895,0.7728,0.6477);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#73F5AD").s().p("AgjgGIAbgcIg2hWIByAIIALBjIgxAfIAXBng");
	this.shape_8.setTransform(-0.8573,-5.5631,0.7728,0.6477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-13.4,20.4,28.8);


(lib.HAND = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AosJSQgEgHADgBIHFkJQBOgpBPgeQArgRAgAKIAHACQBGAXBFgbIIekEQANgFAFgNQAFgOgGgNQgGgMgNgFQgNgFgNAGIjzBjQgIADgJgDQgIgEgDgIQgDgHADgIQADgIAHgDIE5idQAMgGAFgNQAEgNgFgNIgEgHQgFgNgNgFQgNgFgNAFIlDCHQgIAEgIgDQgIgDgEgJQgEgIADgIQADgIAIgEIFPipQAMgHAFgMQAEgNgGgNIgGgOQgGgNgNgFQgNgFgMAFIlaCQQgIADgIgDQgIgDgEgIIgBgBQgDgIADgIQADgIAHgEIEsiWQANgHAEgNQAFgNgGgMIgEgJQgGgMgNgFQgNgFgMAFInPDAQgLAFgMgCQgMgCgKgJQgHgGgEgJQgCAiALAfIgGACQgQg0AKgkIABgHIAXhIQAIgbgEgcQgFgcgRgXQgKgOgNgMQgJgJgLACQgMACgFALIhnDVQgmBPgQBaQgGAjgUAeQgTAegeAUQgnAagsARIp/EFIgNgOIKHkGQApgPAmgZQAcgTARgbQASgbAGghQARhbAnhSIBmjVQAJgSATgCQATgEAPAOQAPAQAJAMQATAaAFAfQAGAggKAfIgXBHQgDALAGAKQAGAKALADQAKADAIgEIHPjAQATgIASAHQATAHAIATIAEAIQAIATgGASQgHATgSAJIksCWQgGADADAGIAAAAQADAGAGgCIFaiQQASgIATAIQASAHAJASIAGAPQAJASgHATQgHASgRAJIlPCpQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBADABACQACAGAGgDIFDiGQASgIATAHQATAHAIASIADAIQAJASgHATQgHASgRAJIk6CeQgFADACAEQADAGAGgDIDzhkQATgIATAHQATAHAIATQAIASgHATQgHATgTAJIn6DzIglAQQhJAehLgZIgHgCQgbgIgnAPQhOAehNAoInFEJIgBAAQgCAAgDgFg");
	this.shape.setTransform(0.0081,0.0196);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+iFIAGgBQAJBIAhBFQAdBEAwA4IgEAEQhih2gXiWg");
	this.shape_1.setTransform(-2.725,8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXgJQgqhhhEhNIAFgEQBFBQApBgQAtBdAPBpIgGABQgQhpgrhcg");
	this.shape_2.setTransform(35.475,-9.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000D7D").s().p("AosJSQgEgHADgBIk8lxIKHkGQApgPAmgZQAcgTARgbQASgbAGghQARhbAnhSIBmjVQAJgSATgCQATgEAPAOQAPAQAJAMQATAaAFAfQAGAggKAfIgXBHQgDALAGAKQAGAKALADQAKADAIgEIHPjAQATgIASAHQATAHAIATIAEAIQAIATgGASQgHATgSAJIksCWQgGADADAGIAAAAQADAGAGgCIFaiQQASgIATAIQASAHAJASIAGAPQAJASgHATQgHASgRAJIlPCpQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBADABACQACAGAGgDIFDiGQASgIATAHQATAHAIASIADAIQAJASgHATQgHASgRAJIk6CeQgFADACAEQADAGAGgDIDzhkQATgIATAHQATAHAIATQAIASgHATQgHATgTAJIn6DzIglAQQhJAehLgZIgHgCQgbgIgnAPQhOAehNAoInFEJIgBAAQgCAAgDgFg");
	this.shape_3.setTransform(0.0081,0.0196);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-59.9,174.8,119.9);


(lib.HAIL_GROUP_D = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("ALVEQQgEgCgCgEQgDgEACgFQACgEAEgBQAEgDAEACQAFABACAEQACAEgBAFQgCAEgFADIgDABIgFgBgAgBBMQgEgCgCgEQgDgFACgEQACgEAEgCQADgDAEACQAFACACAEQACAEgCAFQgBAEgEACIgFABIgDAAgAhsA0QgFgCgBgEQgDgEACgEQABgEAFgCQAEgDAEACQAEABADAEQACAEgCAFQgBAEgFADIgDABIgFgBgAr9jkQgEgCgCgEQgCgEABgEQACgFAEgCQAFgCAEACIAHAFQACAFgCAEQgBAEgFADIgEABIgFgBgAL2j6QgEgBgCgFQgDgEACgEQABgEAFgCQAEgDAEACQAEACADADQACAFgCAEQgBAEgFADIgEABIgEgBg");
	this.shape.setTransform(38.7,12.35,1,1,0,0,0,37.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-30.2,154.6,54.5);


(lib.HAIL_GROUP_C = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_C
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("AoDCEQgEgCgDgDQgBgFACgEQABgEAEgDQAEgCAFACQAEABACAFQACAEgBAEQgCAEgEACIgFACIgEgBgAKuBgIgHgFQgCgFACgEQABgEAFgDQADgCAFACQAEACACAEQADAEgCAEQgBAFgFACIgFABIgDgBgAhjA3QgEgBgCgEQgCgEACgFQABgEAEgDQAEgCAFACQAEACACAEQACAEgBAEQgCAEgEACQgDACgCAAIgEgBgAECACQgEgCgDgDQgBgEABgFQACgEAEgCQAEgCAFABQADACADAEQACAFgBAEQgCAEgEABQgDABgCAAIgEAAgAq0huQgEgBgDgEQgCgEACgFQABgEAFgDQAEgBAEABQAFACACAEQACAEgBAFQgCAEgEABQgDACgCAAIgEgBg");
	this.shape.setTransform(-30.85,-12.8,1,1,0,0,0,-33.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-6.5,140.2,26.5);


(lib.HAIL_GROUP_B = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_B
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("Ar8EQQgEgCgDgDQgCgFACgEQABgEAFgDQADgCAFACQAEABACAFQADAEgCAEQgBAEgFACIgFACIgDgBgAL2D6IgHgFQgCgFACgEQABgEAFgDQAEgCAFACQAEACACAEQACAEgBAEQgCAFgEACIgFABIgEgBgAA5A3QgEgBgDgEQgCgEACgFQABgEAFgDQADgCAFACQAFACABAEQADAEgCAEQgBAEgFACQgCACgDAAIgDgBgAgEATQgEgBgDgEQgBgFABgEQACgEAEgCQAEgCAEACQADABADAEQACAEgBAEQgCAEgEACQgDACgBAAIgEgBgArbj6QgFgBgCgEQgCgEABgFQACgEAFgDQADgBAFABQAEACACAEQADAEgCAFQgCAEgEABQgDACgCAAIgDgBg");
	this.shape.setTransform(-30.8,-12.8,1,1,0,0,0,-37.4,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-24.7,154.6,54.5);


(lib.HAIL_GROUP_A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_A
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("ADyBlQgFgBgDgDQgDgEAAgEQABgFADgDQAEgDAEAAQAFABADADQADAEAAAEQAAAFgEADQgDADgEAAIgBAAgAMTBOQgFAAgDgEQgDgDAAgFQABgEADgDQAEgEAEABQAFAAADADQADAEAAAFQAAAEgEAEQgDACgEAAIgBAAgAMNAUQgFgBgDgDQgDgEAAgEQABgFADgDQAEgCAEAAQAFABADACQADAEAAAEQAAAFgEADQgDADgEAAIgBAAgAKqhNQgEgBgDgDQgEgEABgEQAAgFAEgDQAEgDAEAAQAFABADADQADAEgBAEQAAAFgEADQgCADgEAAIgCAAgAsUhNQgEgBgDgDQgEgEABgEQAAgFAEgDQADgDAFAAQAEABAEADQADAEgBAEQAAAFgEADQgCADgEAAIgCAAg");
	this.shape.setTransform(49.6,-2.8,1,1,0,0,0,49.6,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-10,159.8,20.1);


(lib.HAIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("AAAAVQgJAAgGgHQgGgHAAgIQABgIAHgGQAHgGAHAAQAJABAGAGQAGAHAAAIQgBAJgHAGQgFAGgIAAIgBgBg");
	this.shape.setTransform(-62.25,-25.9,0.52,0.52,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-26.9,2.299999999999997,2.1999999999999993);


(lib.DYNAMICBOLT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DYNAMIC_BOLT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("AAAAMIgsAAIBGhUIgZA8IAsAAIhFBVg");
	this.shape.setTransform(0.025,0.025);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAMIgsAAIBGhUIgZA8IAsAAIhFBVg");
	this.shape_1.setTransform(0.0485,0.0429,1.19,1.19);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(57).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(61).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(4));

	// DYNAMIC_BOLT
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73F5AD").s().p("AAAAMIgsAAIBGhUIgZA8IAsAAIhFBVg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},57).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-8.6,10.8,17.299999999999997);


(lib.CLOUD4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CLOUD2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AnSBwIAAABQAABNA3A3QA3A4BOAAIIsAAQBOAAA4g3QA3g3AAhPQAAhBgogzQgpg0hAgPQgUhYhNgvQhMgwhYAUIgNAEQhIhIhnACQhnAChHBKQghAigSAtQgSAsAAAwIAAACQgtAZgaArQgZAsAAAzg");
	this.shape.setTransform(24.2054,-9.6728,0.6693,0.6693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000D7D").s().p("AkWEtQhOAAg3g4Qg3g3AAhNIAAgBQAAgzAZgsQAagrAtgZIAAgCQAAgwASgsQASgtAhgiQBHhKBngCQBngCBIBIIANgEQBYgUBMAwQBNAvAUBYQBAAPApA0QAoAzAABBQAABPg3A3Qg4A3hOAAg");
	this.shape_1.setTransform(24.2054,-9.6728,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CLOUD2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AnSBwIAAABQAABNA3A3QA3A4BOAAIIsAAQBOAAA4g3QA3g3AAhPQAAhBgogzQgpg0hAgPQgUhYhNgvQhMgwhYAUIgNAEQhIhIhnACQhnAChHBKQghAigSAtQgSAsAAAwIAAACQgtAZgaArQgZAsAAAzg");
	this.shape_2.setTransform(-176.5946,-9.6728,0.6693,0.6693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000D7D").s().p("AkWEtQhOAAg3g4Qg3g3AAhNIAAgBQAAgzAZgsQAagrAtgZIAAgCQAAgwASgsQASgtAhgiQBHhKBngCQBngCBIBIIANgEQBYgUBMAwQBNAvAUBYQBAAPApA0QAoAzAABBQAABPg3A3Qg4A3hOAAg");
	this.shape_3.setTransform(-176.5946,-9.6728,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-32.2,265.5,43.7);


(lib.CLOUD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CLOUD1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AqNCcIAAABQABBsBNBOQBOBNBtAAIMJABQBuAABNhNQBOhOAAhtQAAhcg5hHQg5hIhagWQgch6hrhDQhqhCh7AcIgSAEQhmhjiPACQiQAChkBnQguAxgZA+QgaA/AABDIAAACQg+AjgkA9QgkA9gBBHg");
	this.shape.setTransform(15.1701,-8.892,0.6693,0.6693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000D7D").s().p("AmEGkQhuAAhNhNQhNhOAAhsIAAgBQAAhHAkg9QAjg9A/gjIAAgCQAAhDAZg/QAZg+AvgxQBkhnCPgCQCQgCBmBjIASgEQB6gcBrBCQBrBDAcB6QBZAWA5BIQA6BHAABcQgBBthNBOQhOBNhtAAg");
	this.shape_1.setTransform(15.1701,-8.892,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CLOUD1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AqNCcIAAABQABBsBNBOQBOBNBtAAIMJABQBuAABNhNQBOhOAAhtQAAhcg5hHQg5hIhagWQgch6hrhDQhqhCh7AcIgSAEQhmhjiPACQiQAChkBnQguAxgZA+QgaA/AABDIAAACQg+AjgkA9QgkA9gBBHg");
	this.shape_2.setTransform(-181.2799,-8.892,0.6693,0.6693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000D7D").s().p("AmEGkQhuAAhNhNQhNhOAAhsIAAgBQAAhHAkg9QAjg9A/gjIAAgCQAAhDAZg/QAZg+AvgxQBkhnCPgCQCQgCBmBjIASgEQB6gcBrBCQBrBDAcB6QBZAWA5BIQA6BHAABcQgBBthNBOQhOBNhtAAg");
	this.shape_3.setTransform(-181.2799,-8.892,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-38,285.9,58.3);


(lib.CLOUD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CLOUD2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AnSBwIAAABQAABNA3A3QA3A4BOAAIIsAAQBOAAA4g3QA3g3AAhPQAAhBgogzQgpg0hAgPQgUhYhNgvQhMgwhYAUIgNAEQhIhIhnACQhnAChHBKQghAigSAtQgSAsAAAwIAAACQgtAZgaArQgZAsAAAzg");
	this.shape.setTransform(-17.3946,0.7272,0.6693,0.6693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000D7D").s().p("AkWEtQhOAAg3g4Qg3g3AAhNIAAgBQAAgzAZgsQAagrAtgZIAAgCQAAgwASgsQASgtAhgiQBHhKBngCQBngCBIBIIANgEQBYgUBMAwQBNAvAUBYQBAAPApA0QAoAzAABBQAABPg3A3Qg4A3hOAAg");
	this.shape_1.setTransform(-17.3946,0.7272,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-20.4,64.7,42.3);


(lib.CLOUD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CLOUD1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AqNCcIAAABQABBsBNBOQBOBNBtAAIMJABQBuAABNhNQBOhOAAhtQAAhcg5hHQg5hIhagWQgch6hrhDQhqhCh7AcIgSAEQhmhjiPACQiQAChkBnQguAxgZA+QgaA/AABDIAAACQg+AjgkA9QgkA9gBBHg");
	this.shape.setTransform(179.9701,0.708,0.6693,0.6693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000D7D").s().p("AmEGkQhuAAhNhNQhNhOAAhsIAAgBQAAhHAkg9QAjg9A/gjIAAgCQAAhDAZg/QAZg+AvgxQBkhnCPgCQCQgCBmBjIASgEQB6gcBrBCQBrBDAcB6QBZAWA5BIQA6BHAABcQgBBthNBOQhOBNhtAAg");
	this.shape_1.setTransform(179.9701,0.708,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CLOUD1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AqNCcIAAABQABBsBNBOQBOBNBtAAIMJABQBuAABNhNQBOhOAAhtQAAhcg5hHQg5hIhagWQgch6hrhDQhqhCh7AcIgSAEQhmhjiPACQiQAChkBnQguAxgZA+QgaA/AABDIAAACQg+AjgkA9QgkA9gBBHg");
	this.shape_2.setTransform(-16.4799,0.708,0.6693,0.6693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000D7D").s().p("AmEGkQhuAAhNhNQhNhOAAhsIAAgBQAAhHAkg9QAjg9A/gjIAAgCQAAhDAZg/QAZg+AvgxQBkhnCPgCQCQgCBmBjIASgEQB6gcBrBCQBrBDAcB6QBZAWA5BIQA6BHAABcQgBBthNBOQhOBNhtAAg");
	this.shape_3.setTransform(-16.4799,0.708,0.6693,0.6693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-29.8,285.9,59.7);


(lib.CARBODY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CAR_BODY_DENT_MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_1 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_2 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_3 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_4 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_5 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_6 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_7 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_8 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_9 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_10 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_11 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_12 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_13 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_14 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_15 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_16 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_17 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_18 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_19 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_20 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_21 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_22 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_23 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_24 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_25 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_26 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_27 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_28 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_29 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_30 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_31 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_32 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_33 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_34 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_35 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_36 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_37 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_38 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_39 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_40 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_41 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_42 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_43 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_44 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_45 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_46 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_47 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_48 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_49 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_50 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_51 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_52 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_53 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_54 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_55 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_56 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_57 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_58 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_59 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_60 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_61 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_62 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_63 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_64 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_65 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_66 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_67 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_68 = new cjs.Graphics().p("AvMEDIAAoFIVMAAIAAIFg");
	var mask_graphics_69 = new cjs.Graphics().p("Au2EDIAAoFIVMAAIAAIFg");
	var mask_graphics_70 = new cjs.Graphics().p("AugEDIAAoFIVMAAIAAIFg");
	var mask_graphics_71 = new cjs.Graphics().p("AuKEDIAAoFIVMAAIAAIFg");
	var mask_graphics_72 = new cjs.Graphics().p("At0EDIAAoFIVMAAIAAIFg");
	var mask_graphics_73 = new cjs.Graphics().p("AteEDIAAoFIVMAAIAAIFg");
	var mask_graphics_74 = new cjs.Graphics().p("AtIEDIAAoFIVMAAIAAIFg");
	var mask_graphics_75 = new cjs.Graphics().p("AsyEDIAAoFIVMAAIAAIFg");
	var mask_graphics_76 = new cjs.Graphics().p("AscEDIAAoFIVMAAIAAIFg");
	var mask_graphics_77 = new cjs.Graphics().p("AsHEDIAAoFIVMAAIAAIFg");
	var mask_graphics_78 = new cjs.Graphics().p("ArxEDIAAoFIVMAAIAAIFg");
	var mask_graphics_79 = new cjs.Graphics().p("ArbEDIAAoFIVMAAIAAIFg");
	var mask_graphics_80 = new cjs.Graphics().p("ArFEDIAAoFIVMAAIAAIFg");
	var mask_graphics_81 = new cjs.Graphics().p("AqvEDIAAoFIVMAAIAAIFg");
	var mask_graphics_82 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_graphics_83 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_graphics_84 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_graphics_85 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_graphics_86 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_graphics_87 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_graphics_88 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_graphics_89 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_graphics_90 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_91 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_graphics_92 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_93 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_graphics_94 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_95 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_graphics_96 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_97 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_graphics_98 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_99 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_100 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_101 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_102 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_103 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_104 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_105 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_106 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_107 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_108 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_109 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_110 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_111 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_112 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_113 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_114 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_115 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_116 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_117 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_118 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_119 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_120 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_121 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_122 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_123 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_124 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_125 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_126 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_127 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_128 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_129 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_130 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_131 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_132 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_133 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_134 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_135 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_136 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_137 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_138 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_139 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_140 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_141 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_142 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_143 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_144 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_145 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_146 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_graphics_147 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_1,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_2,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_3,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_4,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_5,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_6,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_7,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_8,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_9,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_10,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_11,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_12,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_13,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_14,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_15,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_16,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_17,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_18,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_19,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_20,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_21,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_22,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_23,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_24,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_25,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_26,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_27,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_28,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_29,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_30,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_31,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_32,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_33,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_34,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_35,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_36,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_37,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_38,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_39,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_40,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_41,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_42,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_43,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_44,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_45,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_46,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_47,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_48,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_49,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_50,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_51,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_52,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_53,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_54,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_55,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_56,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_57,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_58,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_59,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_60,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_61,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_62,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_63,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_64,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_65,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_66,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_67,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_68,x:-97.275,y:2.025}).wait(1).to({graphics:mask_graphics_69,x:-95.0842,y:2.025}).wait(1).to({graphics:mask_graphics_70,x:-92.8933,y:2.025}).wait(1).to({graphics:mask_graphics_71,x:-90.7025,y:2.025}).wait(1).to({graphics:mask_graphics_72,x:-88.5117,y:2.025}).wait(1).to({graphics:mask_graphics_73,x:-86.3208,y:2.025}).wait(1).to({graphics:mask_graphics_74,x:-84.13,y:2.025}).wait(1).to({graphics:mask_graphics_75,x:-81.9392,y:2.025}).wait(1).to({graphics:mask_graphics_76,x:-79.7483,y:2.025}).wait(1).to({graphics:mask_graphics_77,x:-77.5575,y:2.025}).wait(1).to({graphics:mask_graphics_78,x:-75.3667,y:2.025}).wait(1).to({graphics:mask_graphics_79,x:-73.1758,y:2.025}).wait(1).to({graphics:mask_graphics_80,x:-70.985,y:2.025}).wait(1).to({graphics:mask_graphics_81,x:-68.7942,y:2.025}).wait(1).to({graphics:mask_graphics_82,x:-65.3567,y:2.025}).wait(1).to({graphics:mask_graphics_83,x:-60.975,y:2.025}).wait(1).to({graphics:mask_graphics_84,x:-56.5933,y:2.025}).wait(1).to({graphics:mask_graphics_85,x:-52.2117,y:2.025}).wait(1).to({graphics:mask_graphics_86,x:-47.83,y:2.025}).wait(1).to({graphics:mask_graphics_87,x:-43.4483,y:2.025}).wait(1).to({graphics:mask_graphics_88,x:-39.0667,y:2.025}).wait(1).to({graphics:mask_graphics_89,x:-34.685,y:2.025}).wait(1).to({graphics:mask_graphics_90,x:-30.3033,y:2.025}).wait(1).to({graphics:mask_graphics_91,x:-25.9217,y:2.025}).wait(1).to({graphics:mask_graphics_92,x:-21.54,y:2.025}).wait(1).to({graphics:mask_graphics_93,x:-17.1583,y:2.025}).wait(1).to({graphics:mask_graphics_94,x:-12.7767,y:2.025}).wait(1).to({graphics:mask_graphics_95,x:-8.395,y:2.025}).wait(1).to({graphics:mask_graphics_96,x:-4.0133,y:2.025}).wait(1).to({graphics:mask_graphics_97,x:0.3683,y:2.025}).wait(1).to({graphics:mask_graphics_98,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_99,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_100,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_101,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_102,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_103,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_104,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_105,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_106,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_107,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_108,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_109,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_110,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_111,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_112,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_113,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_114,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_115,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_116,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_117,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_118,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_119,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_120,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_121,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_122,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_123,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_124,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_125,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_126,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_127,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_128,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_129,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_130,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_131,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_132,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_133,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_134,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_135,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_136,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_137,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_138,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_139,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_140,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_141,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_142,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_143,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_144,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_145,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_146,x:4.75,y:2.025}).wait(1).to({graphics:mask_graphics_147,x:4.75,y:2.025}).wait(1).to({graphics:null,x:0,y:0}).wait(103));

	// BODY_DENTED
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D7D").s().p("AINCgIgvAAIAAgCQgBgtggghQggggguAAQgtAAggAgQggAhAAAtIAAACInqAAIAAgCQgBgtgfghQggggguAAQguAAggAgQggAhAAAtIAAACIhNAAQgGAAgEgEQgFgFABgGIAAg8QgBgGAFgFQAEgEAGAAIAHAAIADgBIABgDIAChKQAAgMADgGIAAAAQADgFAKgIIACABIAAAAQAHAFAFgEQAHgFAAgRQAJgJAWgQIAggWIAVgTQAFgFAAgHIAAgBQAAgEgDgEIAKgBQAIAGAHgBIAAAAQAGgBAEgFIAAgBIABgCIALgBIAAAAIAagEQAFAJAIgBIAAAAQAGAAAFgGIABAAIABgCIAAgBIBhgCIADADQAHAFAGgBIAAAAQAGgBAEgDIABgBIACgCIAcAAIACADQADACAEAAQADAAAFgCIABgBIABAAIACgCIAlAAIAuADQAFAHAIAAQAHgBADgFQAeACAbADIABAAIAAABIgBAAQACAHAIACQAFABAGgEIAAAAIACgDQANAEAXALIAxAcIBCAoIgBgBQAlAXAHAEIACADIAAABQAFAGAGAAQAFAAADgDIADgDIBKAGIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAQAEAFAGABQAFABAFgEIAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQA7AIATAEIAAACQABAHAGACQAGABAQgCQAZAIAGAHQAOAPgDAmIAAACIACACQAFABACAEIABABQACADABAEIAAABIgFA8IAAAAQAAAGgEAFQgFAEgGAAIAAAAgAg+iRIgCABIAAADIAQBxIABACIACABIDDAFIACgBIACgBIAAgDIgFgYIAAAAIABAAQAEgCAJABIABAAQAIAAAXADIACgBIACgCIABgCIgCgCIgNgLIgbgSIgogZQgkgVgXgHIAAAAQgPgEg1gDIgzgDIAAAAIgCABgAhXiSIg4AFQg6AFgHACQgMAEgIAKIAAAAQgHAHgCAIIAAABQgDAIAAAiIAAAfIABADIACABICkACIACAAIACgCIAAgCIgOhxIgBgDIgDgBIAAAAgAj5hzQgFABgHAEQgNAIgKANIAAAAQgOAQgKAWIAAAAIgGATIAAACIABACIADABIA3ABIACgBIABgBIABgCQAAgTACgWQABgQAEgXIgBgDIgBgCIgCAAIgBAAgAlgh/IgdADIgCABIhSBLIgBACIAAADIABABIADABIAmAAIADgCIBJhNIABgCIgBgDIgBgBIgDgBIAAAAgAgpghIgOhpIAuADQAzADAPAEIgBAAQAXAHAiAUIApAYIAZASIAEACIgTgBIAAAAQgMgBgFACQgIADACAHIAAAAIAEATgAjogjIAAgbQABghACgHIgBAAQADgHAFgGIAAAAQAHgIAJgDQAIgCA4gFIA0gFIANBpgAkxgjIAFgNIAAAAQAJgUANgQIAAAAQAJgMAMgHIAEgCIgEAiQgCAUAAARgAl6h0IAQgCIhABFIgaAAg");
	this.shape.setTransform(0,0.0379);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHZCoIgCgBIgBgDIAAgGQAAgqgegeQgegegrAAQgpAAgeAeQgeAeAAAqIAAAGIgBADIgDABInzAAIgCgBIgBgDIAAgGQAAgqgegeQgegegqAAQgqAAgeAeQgeAeAAAqIAAAGIgBADIgDABIhRAAQgJAAgHgHQgGgGgBgKIAAg8QABgJAGgHQAHgHAJAAIADAAIABhHQABgOAEgHIAAgBQAEgFANgLIADgBIACABIAFADIgBAAIADABQAEgEAAgNIABgDQAKgKAYgRIAfgWQAQgOAEgEQADgDgBgEIAAAAQAAgDgCgCIAAgBQgCgCAAgCQAAgEADgCIABAAIARgCIACAAIABABQAFAFAFgBIAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBABAAIAAAAIABgEIABAAIABgCIABAAIAOgCQASgDAKgBIACABIACABQACAEADACIACAAIABAAIABAAIAEgDIACgEIACgBIACgBIBlgCIACABQAGAGAFAAIABAAIAFgCIACgDIABgBIACgBIAgAAIACABIACABQACACACABIAFgCIgBAAIAEgCIACgBIAnAAIAxADIACABIABABQACAEAFABQADAAABgDIACgCIACgBQAfACAdADIABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIADAFIAAAAQABABAAAAQAAABAAAAQABAAAAAAQABABAAAAIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBQAGgFABABIABAAQAOAEAYAMIAzAcIBAAoIABAAQAnAZAEABIACACIADAFIAAgBQAAABABAAQAAABABAAQAAAAAAAAQABABABAAQADAAACgEIACgBIABgBIABAAIBMAGQADAAAEAFIAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAFgEAFABQBBAJARAEIADACIAAADIAAADIAAAAIABACIAAAAQAGACANgDIACAAQAdAJAHAIQAQARgDAoQAEACAEAFIgBgBQAGAGAAAIIAAAAIgFA8QAAAKgHAGQgGAHgKAAgAG9BQQAgAhABAtIAAACIAvAAQAGAAAFgEQAEgFAAgGIAAAAIAFg8IAAgBQgBgEgCgDIgBgBQgCgEgFgBIgCgCIAAgCQADgmgOgPQgGgHgZgIQgQACgGgBQgGgCgBgHIAAgCQgTgEg7gIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIAAAAQgFAEgFgBQgGgBgEgFIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIhKgGIgDADQgDADgFAAQgGAAgFgGIAAgBIgCgDQgHgDglgYIABABIhCgoIgxgcQgXgLgNgEIgCADIAAAAQgGAEgFgBQgIgCgCgHIABAAIAAgBIgBAAQgbgDgegCQgDAFgHABQgIAAgFgHIgugDIglAAIgCACIgBAAIgBABQgFACgDAAQgEAAgDgCIgCgDIgcAAIgCACIgBABQgEADgGABIAAAAQgGABgHgFIgDgDIhhACIAAABIgBACIgBAAQgFAGgGAAIAAAAQgIABgFgJIgaAEIAAAAIgLABIgBACIAAABQgEAFgGABIAAAAQgHABgIgGIgKABQADAEgBAEIAAABQABAHgFAFIgVATIggAWQgWAQgJAJQAAARgHAFQgFAEgHgFIgBAAIgBgBQgKAIgDAFIAAAAQgDAGgBAMIgBBKIgBADIgDABIgHAAQgGAAgEAEQgFAFAAAGIAAA8QAAAGAFAFQAEAEAGAAIBNAAIAAgCQAAgtAgghQAgggAuAAQAuAAAgAgQAfAhABAtIAAACIHqAAIAAgCQAAgtAgghQAgggAtAAQAuAAAgAggAgtgZIgCgBIgCgCIgPhxIAAgDIACgBIACgBIAzADQA1ADAOAEIABAAQAXAHAkAVIAoAZIAaASIAOALIACACIgBACIgCACIgCABQgXgDgIAAIgBAAQgJgBgEACIgBAAIAAAAIAFAYIAAADIgCABIgCABgAgpghIC6AFIgEgTIAAAAQgCgHAIgDQAFgCAMABIAAAAIATABIgEgCIgZgSIgpgYQgigUgXgHIABAAQgPgEgzgDIgugDgAhJgZIikgCIgCgBIgBgDIAAgfQAAgiACgIIABgBQACgIAGgHIAAAAQAJgKAMgEQAHgCA6gFIA4gFIADABIABADIAOBxIAAACIgCACIgCAAIAAAAgAjog+IAAAbICbACIgNhpIg0AFQg4AFgIACQgJADgHAIIAAAAQgFAGgDAHIABAAQgCAHgBAhgAj/gaIg3gBIgDgBIgBgCIAAgCIAGgTIAAAAQAKgWAOgQIAAAAQAKgNANgIQAHgEAFgBIADAAIABACIABADQgEAXgBAQQgCAWAAATIgBACIgBABIgCABIAAAAgAkxgjIAuABQAAgRACgUIAEgiIgEACQgMAHgJAMIAAAAQgNAQgJAUIAAAAIgFANgAnRgqIgBgBIAAgDIABgCIBShLIACgBIAdgDIADABIABABIABADIgBACIhJBNIgDACIgnAAIgCgBgAl6h0IhKBDIAaAAIBAhFg");
	this.shape_1.setTransform(0,0.0374);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},147).to({state:[]},1).to({state:[]},19).wait(84));

	// CAR_BODY_DENT_MASK_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AqmEDIAAoFIVNAAIAAIFg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AqlEDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AqmEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AqlEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AqZEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AqDEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AptEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_85 = new cjs.Graphics().p("ApXEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_86 = new cjs.Graphics().p("ApBEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AorEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AoWEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AoAEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AnqEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AnUEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Am+EDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AmoEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AmSEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Al8EDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AlmEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AlQEDIAAoFIVMAAIAAIFg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_113 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_114 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_120 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_122 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_124 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_125 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_129 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_130 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_131 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_132 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_134 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_136 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_137 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_138 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_139 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_140 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_141 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_142 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_143 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_144 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_145 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_146 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_147 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_168 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_169 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_170 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_171 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_172 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_173 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_174 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_175 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_177 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_178 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_179 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_181 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");
	var mask_1_graphics_182 = new cjs.Graphics().p("Ak6EDIAAoFIVLAAIAAIFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_1,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_2,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_3,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_4,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_5,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_6,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_7,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_8,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_9,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_10,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_11,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_12,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_13,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_14,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_15,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_16,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_17,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_18,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_19,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_20,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_21,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_22,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_23,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_24,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_25,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_26,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_27,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_28,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_29,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_30,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_31,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_32,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_33,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_34,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_35,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_36,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_37,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_38,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_39,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_40,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_41,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_42,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_43,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_44,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_45,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_46,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_47,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_48,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_49,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_50,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_51,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_52,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_53,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_54,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_55,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_56,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_57,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_58,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_59,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_60,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_61,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_62,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_63,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_64,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_65,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_66,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_67,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_68,x:9,y:2.025}).wait(1).to({graphics:mask_1_graphics_69,x:13.3817,y:2.025}).wait(1).to({graphics:mask_1_graphics_70,x:17.7633,y:2.025}).wait(1).to({graphics:mask_1_graphics_71,x:22.145,y:2.025}).wait(1).to({graphics:mask_1_graphics_72,x:26.5267,y:2.025}).wait(1).to({graphics:mask_1_graphics_73,x:30.9083,y:2.025}).wait(1).to({graphics:mask_1_graphics_74,x:35.29,y:2.025}).wait(1).to({graphics:mask_1_graphics_75,x:39.6717,y:2.025}).wait(1).to({graphics:mask_1_graphics_76,x:44.0533,y:2.025}).wait(1).to({graphics:mask_1_graphics_77,x:48.435,y:2.025}).wait(1).to({graphics:mask_1_graphics_78,x:52.8167,y:2.025}).wait(1).to({graphics:mask_1_graphics_79,x:57.1983,y:2.025}).wait(1).to({graphics:mask_1_graphics_80,x:61.58,y:2.025}).wait(1).to({graphics:mask_1_graphics_81,x:65.9617,y:2.025}).wait(1).to({graphics:mask_1_graphics_82,x:69.0967,y:2.025}).wait(1).to({graphics:mask_1_graphics_83,x:71.2875,y:2.025}).wait(1).to({graphics:mask_1_graphics_84,x:73.4783,y:2.025}).wait(1).to({graphics:mask_1_graphics_85,x:75.6692,y:2.025}).wait(1).to({graphics:mask_1_graphics_86,x:77.86,y:2.025}).wait(1).to({graphics:mask_1_graphics_87,x:80.0508,y:2.025}).wait(1).to({graphics:mask_1_graphics_88,x:82.2417,y:2.025}).wait(1).to({graphics:mask_1_graphics_89,x:84.4325,y:2.025}).wait(1).to({graphics:mask_1_graphics_90,x:86.6233,y:2.025}).wait(1).to({graphics:mask_1_graphics_91,x:88.8142,y:2.025}).wait(1).to({graphics:mask_1_graphics_92,x:91.005,y:2.025}).wait(1).to({graphics:mask_1_graphics_93,x:93.1958,y:2.025}).wait(1).to({graphics:mask_1_graphics_94,x:95.3867,y:2.025}).wait(1).to({graphics:mask_1_graphics_95,x:97.5775,y:2.025}).wait(1).to({graphics:mask_1_graphics_96,x:99.7683,y:2.025}).wait(1).to({graphics:mask_1_graphics_97,x:101.9592,y:2.025}).wait(1).to({graphics:mask_1_graphics_98,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_99,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_100,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_101,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_102,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_103,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_104,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_105,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_106,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_107,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_108,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_109,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_110,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_111,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_112,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_113,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_114,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_115,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_116,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_117,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_118,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_119,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_120,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_121,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_122,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_123,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_124,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_125,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_126,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_127,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_128,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_129,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_130,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_131,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_132,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_133,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_134,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_135,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_136,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_137,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_138,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_139,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_140,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_141,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_142,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_143,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_144,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_145,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_146,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_147,x:104.15,y:2.025}).wait(1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_168,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_169,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_170,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_171,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_172,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_173,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_174,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_175,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_176,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_177,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_178,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_179,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_180,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_181,x:104.15,y:2.025}).wait(1).to({graphics:mask_1_graphics_182,x:104.15,y:2.025}).wait(1).to({graphics:null,x:0,y:0}).wait(68));

	// BODY
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000D7D").s().p("AINCgIgvAAIAAgCQgBgtggggQggghguAAQgtAAggAhQggAgAAAtIAAACInqAAIAAgCQgBgtgfggQggghguAAQguAAggAhQggAgAAAtIAAACIhNAAQgGAAgEgEQgFgEABgHIAAg8QgBgGAFgEQAEgFAGAAIAHAAIADgBIABgDIAChKQAAgMADgGIAAAAQADgFAMgKIBShBIAVgSQAFgGAAgHIAAAAQAAgFgEgEIAggFQAigEAXgCQAXgBBRgBQBSgBAlABQAkABAwAEQAxAFAPADIAAAAQANAEAYALIAxAcIBCAoIgBAAQApAaAFABIAAAAQAFACAjADIBBAFQApAEAuALQA2AMAMANQAOAQgDAlIAAACIACACQAFACACAEIABAAQACADABAFIAAAAIgFA8IAAAAQAAAHgEAEQgFAEgGAAIAAAAgAg+iRIgCACIAAACIAQBxIABACIACABIDDAFIACAAIACgCIAAgCIgFgYIAAgBIABAAQAEgCAJABIABAAQAIAAAXADIACgBIACgCIABgCIgCgCIgNgLIgbgSIgogZQgkgUgXgHIAAAAQgPgFg1gDIgzgDIAAAAIgCABgAhXiSIg4AFQg6AFgHADQgMADgIAKIAAAAQgHAHgCAJIAAAAQgDAIAAAiIAAAfIABADIACABICkACIACAAIACgCIAAgCIgOhxIgBgDIgDgBIAAAAgAj5hzQgFABgHAEQgNAIgKANIAAAAQgOARgKAVIAAAAIgGATIAAACIABACIADABIA3ABIACgBIABgBIABgCQAAgTACgVQABgRAEgXIgBgCIgBgCIgCgBIgBAAgAlgh/IgdADIgCABIhSBLIgBACIAAADIABACIADAAIAmAAIADgBIBJhOIABgCIgBgCIgBgCIgDgBIAAAAgAgpghIgOhoIAuACQAzADAPAEIgBAAQAXAHAiAUIApAZIAZARIAEACIgTgBIAAAAQgMgBgFACQgIADACAHIAAAAIAEATgAjogjIAAgbQABggACgIIgBAAQADgHAFgGIAAABQAHgJAJgDQAIgCA4gFIA0gEIANBogAkxgjIAFgNIAAABQAJgVANgQIAAAAQAJgMAMgHIAEgCIgEAiQgCAUAAARgAl6h0IAQgBIhABEIgaAAg");
	this.shape_2.setTransform(0,0.0167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHZCoIgCgBIgBgDIAAgGQAAgqgegeQgegegrAAQgpAAgeAeQgeAeAAAqIAAAGIgBADIgDABInzAAIgCgBIgBgDIAAgGQAAgqgegeQgegegqAAQgqAAgeAeQgeAeAAAqIAAAGIgBADIgDABIhRAAQgJAAgHgGQgGgHgBgKIAAg8QABgJAGgHQAHgHAJAAIADAAIABhGQABgPAEgHIAAAAQAEgGANgLIBShBQAQgNAEgFQADgDgBgEIAAAAQAAgCgCgDIAAAAQgCgDAAgCQAAgDADgCIAAgBQADgCAigEQAjgEAXgCQAWgBBSgBQBTgBAkABQAkABAxAEQAyAFAPADIAAABQAOADAYAMIAzAcIBAAoIABAAQAnAZAEACIAAAAQAFABAhADIBBAFIAAAAQArAEAtALQA7AOAMAOQAQAQgDAoQAEACAEAFIgBAAQAGAFAAAIIAAAAIgFA9QAAAJgHAHQgGAGgKAAgAG9BRQAgAgABAtIAAACIAvAAQAGAAAFgEQAEgEAAgHIAAAAIAFg8IAAAAQgBgFgCgDIgBAAQgCgEgFgCIgCgCIAAgCQADglgOgQQgMgNg2gMQgugLgpgEIhBgFQgjgDgFgCIAAAAQgFgBgpgaIABAAIhCgoIgxgcQgYgLgNgEIAAAAQgPgDgxgFQgwgEgkgBQglgBhSABQhRABgXABQgXACgiAEIggAFQAEAEgBAFIAAAAQABAHgFAGIgVASIhSBBQgMAKgDAFIAAAAQgDAGgBAMIgBBKIgBADIgDABIgHAAQgGAAgEAFQgFAEAAAGIAAA8QAAAHAFAEQAEAEAGAAIBNAAIAAgCQAAgtAgggQAgghAuAAQAuAAAgAhQAfAgABAtIAAACIHqAAIAAgCQAAgtAgggQAgghAtAAQAuAAAgAhgAgtgZIgCgBIgCgCIgPhxIAAgCIACgCIACgBIAzADQA1ADAOAFIABAAQAXAHAkAUIAoAZIAaASIAOALIACACIgBACIgCACIgCABQgXgDgIAAIgBAAQgJgBgEACIgBAAIAAABIAFAYIAAACIgCACIgCAAgAgpghIC6AFIgEgTIAAAAQgCgHAIgDQAFgCAMABIAAAAIATABIgEgCIgZgRIgpgZQgigUgXgHIABAAQgPgEgzgDIgugCgAhJgZIikgCIgCgBIgBgDIAAgfQAAgiACgIIABAAQACgJAGgHIAAAAQAJgKAMgDQAHgDA6gFIA4gFIADABIABADIAOBxIAAACIgCACIgCAAIAAAAgAjog+IAAAbICbACIgNhoIg0AEQg4AFgIACQgJADgHAJIAAgBQgFAGgDAHIABAAQgCAIgBAggAj/gaIg3gBIgDgBIgBgCIAAgCIAGgTIAAAAQAKgVAOgRIAAAAQAKgNANgIQAHgEAFgBIADABIABACIABACQgEAXgBARQgCAVAAATIgBACIgBABIgCABIAAAAgAkxgjIAuABQAAgRACgUIAEgiIgEACQgMAHgJAMIAAAAQgNAQgJAVIAAgBIgFANgAnRgpIgBgCIAAgDIABgCIBShLIACgBIAdgDIADABIABACIABACIgBACIhJBOIgDABIgnAAIgCAAgAl6h0IhKBDIAaAAIBAhEg");
	this.shape_3.setTransform(0,0.0166);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},147).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},20).to({state:[]},35).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-16.8,110.5,33.7);


(lib.PROTECTED_CAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CAR_BODY
	this.instance = new lib.PROTECTEDCARBODY("synched",0);
	this.instance.setTransform(-18.4,-4.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-4.1333,startPosition:1},0).wait(1).to({y:-4.1167,startPosition:2},0).wait(1).to({y:-4.1,startPosition:3},0).wait(1).to({y:-4.0833,startPosition:4},0).wait(1).to({y:-4.0667,startPosition:5},0).wait(1).to({y:-4.05,startPosition:6},0).wait(1).to({y:-4.125,startPosition:7},0).wait(1).to({y:-4.2,startPosition:8},0).wait(1).to({y:-4.275,startPosition:9},0).wait(1).to({y:-4.35,startPosition:10},0).wait(1).to({y:-4.3,startPosition:11},0).wait(1).to({y:-4.25,startPosition:12},0).wait(1).to({y:-4.2,startPosition:13},0).wait(1).to({y:-4.15,startPosition:14},0).wait(1).to({y:-4.2357,startPosition:15},0).wait(1).to({y:-4.2224,startPosition:16},0).wait(1).to({y:-4.2092,startPosition:17},0).wait(1).to({y:-4.1959,startPosition:18},0).wait(1).to({y:-4.1827,startPosition:19},0).wait(1).to({y:-4.1694,startPosition:20},0).wait(1).to({y:-4.1561,startPosition:21},0).wait(1).to({y:-4.1429,startPosition:22},0).wait(1).to({y:-4.1296,startPosition:23},0).wait(1).to({y:-4.1163,startPosition:24},0).wait(1).to({y:-4.1031,startPosition:25},0).wait(1).to({y:-4.0898,startPosition:26},0).wait(1).to({y:-4.0765,startPosition:27},0).wait(1).to({y:-4.0633,startPosition:28},0).wait(1).to({y:-4.05,startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).to({_off:true},1).wait(89).to({_off:false,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1));

	// WHEELS
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(-17.2,11.7,1,1,0,0,0,43.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:true},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-21.1,110.5,41.400000000000006);


(lib.new_SCREEN04 = function(mode,startPosition,loop,reversed) {
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

	this.instance = new lib.new_mysteryobject();
	this.instance.setTransform(115.15,-228.25,1,1,0,0,0,2.7,4.4);

	this.instance_1 = new lib.new_Button();
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


(lib.HANDANDPHONE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DYNAMIC_BOLT
	this.instance = new lib.DYNAMICBOLT("synched",0);
	this.instance.setTransform(49.55,-12.35,0.5833,0.5833,0,0,0,0,-7.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203).to({_off:false},0).wait(1).to({regY:0,y:-8.1,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({scaleX:0.6281,scaleY:0.6285,x:49.5115,y:-7.5426,startPosition:45},0).wait(1).to({scaleX:0.673,scaleY:0.6738,x:49.4731,y:-6.9852,startPosition:46},0).wait(1).to({scaleX:0.7179,scaleY:0.7191,x:49.4346,y:-6.4278,startPosition:47},0).wait(1).to({scaleX:0.7628,scaleY:0.7643,x:49.3962,y:-5.8704,startPosition:48},0).wait(1).to({scaleX:0.8076,scaleY:0.8096,x:49.3577,y:-5.313,startPosition:49},0).wait(1).to({scaleX:0.8525,scaleY:0.8549,x:49.3192,y:-4.7556,startPosition:50},0).wait(1).to({scaleX:0.8974,scaleY:0.9002,x:49.2808,y:-4.1982,startPosition:51},0).wait(1).to({scaleX:0.9423,scaleY:0.9454,x:49.2423,y:-3.6408,startPosition:52},0).wait(1).to({scaleX:0.9871,scaleY:0.9907,x:49.2038,y:-3.0834,startPosition:53},0).wait(1).to({scaleX:1.032,scaleY:1.036,x:49.1654,y:-2.526,startPosition:54},0).wait(1).to({scaleX:1.0769,scaleY:1.0812,x:49.1269,y:-1.9686,startPosition:55},0).wait(1).to({scaleX:1.1218,scaleY:1.1265,x:49.0885,y:-1.4111,startPosition:56},0).wait(1).to({scaleX:1.1666,scaleY:1.1718,x:49.05,y:-0.8537,startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).to({_off:true},1).wait(215));

	// DYNAMIC_CLOUD_MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_247 = new cjs.Graphics().p("AiAg2QA5guBJADIAAAAQBKAEA1AzIAAAAIiHCMg");
	var mask_graphics_248 = new cjs.Graphics().p("AiNg2QA/gvBQADIAAAAQBRADA7A0IAAAAIiUCOg");
	var mask_graphics_249 = new cjs.Graphics().p("AiZg3QBFgvBXADIAAAAQBXADBAA1IAAAAIihCPg");
	var mask_graphics_250 = new cjs.Graphics().p("Ailg3QBKgwBeADIAAAAQBfADBEA1IAAAAIiuCRg");
	var mask_graphics_251 = new cjs.Graphics().p("Aixg4QBPgxBlAEIAAAAQBmADBJA2IAAAAIi6CTg");
	var mask_graphics_252 = new cjs.Graphics().p("Ai9g5QBUgxBsADIAAAAQBtAEBOA2IAAAAIjHCVg");
	var mask_graphics_253 = new cjs.Graphics().p("AjKg5QBbgyByADIAAAAQB0AEBUA3IAAAAIjVCWg");
	var mask_graphics_254 = new cjs.Graphics().p("AjWg6QBggyB6ADIAAAAQB6AEBZA3IAAAAIjhCYg");
	var mask_graphics_255 = new cjs.Graphics().p("Ajig7QBlgzCBAEIAAAAQCBADBeA5IAAAAIjuCZg");
	var mask_graphics_256 = new cjs.Graphics().p("AmMg+QCxg1DiADIAAAAQDiAECkA7IAAAAImhCig");
	var mask_graphics_257 = new cjs.Graphics().p("Ao1hBQD8g4FCAEIAAAAQFEADDpA/IAAAAIpSCqg");
	var mask_graphics_258 = new cjs.Graphics().p("AqdhJQErhAF9AFIAAAAQF+AEEVBGIAAAAIrAC/g");
	var mask_graphics_259 = new cjs.Graphics().p("AsEhSQFYhGG5AFIAAAAQG5AFE/BOIAAAAIssDUg");
	var mask_graphics_260 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_261 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_262 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_263 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_264 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_265 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_266 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_267 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_268 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_269 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_270 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_271 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_272 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_273 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_274 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_275 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_276 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_277 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_278 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_279 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_280 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_281 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_282 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_283 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_284 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_285 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_286 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_287 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_288 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_289 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_290 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_291 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_292 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_293 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuaDqg");
	var mask_graphics_348 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_349 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_350 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_351 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_352 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_353 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_354 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_355 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_356 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_357 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_358 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_359 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_360 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_361 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_362 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_363 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_364 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_365 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_366 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_367 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_368 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_369 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_370 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_371 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_372 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_373 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_374 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_375 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_376 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_377 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_378 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_379 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_380 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_381 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_382 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_383 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_384 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_385 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_386 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_387 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_388 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_389 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_390 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_391 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_392 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_393 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_394 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_395 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_396 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_397 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_398 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_399 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_400 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_401 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_402 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_403 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_404 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_405 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_406 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_407 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_408 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_409 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_410 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_411 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_412 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_413 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_414 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_415 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_416 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_417 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_418 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_419 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_420 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_421 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_422 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_423 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_424 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_425 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_426 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_427 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_428 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_429 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_430 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_431 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_432 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_433 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_434 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_435 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_436 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_437 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_438 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_439 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_440 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_441 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_442 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_443 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_444 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_445 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_446 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_447 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_448 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_449 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_450 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_451 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_452 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_453 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_454 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_455 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_456 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_457 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_458 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_459 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_460 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_461 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_462 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_463 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_464 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_465 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_466 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_467 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_468 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_469 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_470 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_471 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_472 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_473 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_474 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_475 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_476 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_477 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_478 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_479 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_480 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_481 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_482 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_483 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_484 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_485 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_486 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_487 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_488 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_489 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_490 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_491 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_492 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_493 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_494 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_495 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_496 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_497 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_498 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_499 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_500 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_501 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_502 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_503 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_504 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_505 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_506 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_507 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");
	var mask_graphics_508 = new cjs.Graphics().p("AtshaQGHhNHzAFIAAAAQH1AGFqBVIAAAAIuZDqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(247).to({graphics:mask_graphics_247,x:48.6427,y:-30.3897}).wait(1).to({graphics:mask_graphics_248,x:48.6423,y:-28.359}).wait(1).to({graphics:mask_graphics_249,x:48.6414,y:-26.3282}).wait(1).to({graphics:mask_graphics_250,x:48.6409,y:-24.2971}).wait(1).to({graphics:mask_graphics_251,x:48.6405,y:-22.2663}).wait(1).to({graphics:mask_graphics_252,x:48.6396,y:-20.2356}).wait(1).to({graphics:mask_graphics_253,x:48.6392,y:-18.2044}).wait(1).to({graphics:mask_graphics_254,x:48.6387,y:-16.1737}).wait(1).to({graphics:mask_graphics_255,x:48.6373,y:-14.143}).wait(1).to({graphics:mask_graphics_256,x:49.9486,y:-13.5613}).wait(1).to({graphics:mask_graphics_257,x:51.259,y:-12.98}).wait(1).to({graphics:mask_graphics_258,x:51.2536,y:-11.5119}).wait(1).to({graphics:mask_graphics_259,x:51.2478,y:-10.0437}).wait(1).to({graphics:mask_graphics_260,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_261,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_262,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_263,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_264,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_265,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_266,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_267,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_268,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_269,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_270,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_271,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_272,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_273,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_274,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_275,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_276,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_277,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_278,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_279,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_280,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_281,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_282,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_283,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_284,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_285,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_286,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_287,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_288,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_289,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_290,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_291,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_292,x:51.2424,y:-8.5756}).wait(1).to({graphics:mask_graphics_293,x:51.2424,y:-8.5756}).wait(1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_348,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_349,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_350,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_351,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_352,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_353,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_354,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_355,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_356,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_357,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_358,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_359,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_360,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_361,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_362,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_363,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_364,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_365,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_366,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_367,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_368,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_369,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_370,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_371,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_372,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_373,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_374,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_375,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_376,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_377,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_378,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_379,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_380,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_381,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_382,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_383,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_384,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_385,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_386,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_387,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_388,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_389,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_390,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_391,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_392,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_393,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_394,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_395,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_396,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_397,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_398,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_399,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_400,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_401,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_402,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_403,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_404,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_405,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_406,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_407,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_408,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_409,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_410,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_411,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_412,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_413,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_414,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_415,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_416,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_417,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_418,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_419,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_420,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_421,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_422,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_423,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_424,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_425,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_426,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_427,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_428,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_429,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_430,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_431,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_432,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_433,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_434,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_435,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_436,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_437,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_438,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_439,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_440,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_441,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_442,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_443,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_444,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_445,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_446,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_447,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_448,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_449,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_450,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_451,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_452,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_453,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_454,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_455,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_456,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_457,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_458,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_459,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_460,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_461,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_462,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_463,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_464,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_465,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_466,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_467,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_468,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_469,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_470,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_471,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_472,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_473,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_474,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_475,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_476,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_477,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_478,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_479,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_480,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_481,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_482,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_483,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_484,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_485,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_486,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_487,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_488,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_489,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_490,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_491,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_492,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_493,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_494,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_495,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_496,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_497,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_498,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_499,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_500,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_501,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_502,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_503,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_504,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_505,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_506,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_507,x:51.5749,y:-8.4932}).wait(1).to({graphics:mask_graphics_508,x:51.5749,y:-8.4932}).wait(1));

	// DYNAMIC_CLOUD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("AheBnQgbAAgTgTQgTgTAAgaQAAgXAOgRQAOgRAWgFQAHgeAagRQAagQAeAHIAEABQAYgYAkAAQAjABAYAZQAYAZAAAiIAAAAQAPAJAJAOQAJAPAAARIAAABQAAAagTATQgTATgbAAIgfAAIAAgNIAfAAQAWAAAPgPQAPgPAAgWQAAgPgIgMQgIgMgNgGIgEgCIAAgIQAAgegVgVQgWgVgeAAQgRAAgPAIQgKAGgIAJIgDADIgEgCQgYgIgXALQgXALgJAYIgDAPIgFAAQgVAEgMAQQgNASAEAVQADATAOAMQAPAMATAAIAVAAIAAANg");
	this.shape.setTransform(49.575,-10.3005);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(247).to({_off:false},0).wait(46).to({_off:true},1).wait(215));

	// DYNAMIC_SQUARE
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AgQgzIAhAAQAOAAAKAKQALALAAAOIAAAhQAAAOgLAKQgKALgOAAIghAAQgOAAgLgLQgKgKAAgOIAAghQAAgOAKgLQALgKAOAAg");
	this.shape_1.setTransform(49.475,-8.275);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AgigzIBFAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIhFAAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_2.setTransform(49.25,-8.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AhNgzICbAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIibAAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_3.setTransform(49.45,-8.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AhogzIDRAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIjRAAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_4.setTransform(49.5,-8.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("Ah2gzIDtAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIjtAAQgOAAgLgLQgKgKAAgOIAAghQAAgOAKgLQALgKAOAAg");
	this.shape_5.setTransform(49.45,-8.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AiLgzIEXAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIkXAAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_6.setTransform(49.4,-8.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AifgzIE/AAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIk/AAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_7.setTransform(49.45,-8.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AizgzIFnAAQAPAAAKAKQAKALAAAOIAAAhQAAAOgKAKQgKALgPAAIlnAAQgPAAgKgLQgKgKAAgOIAAghQAAgOAKgLQAKgKAPAAg");
	this.shape_8.setTransform(49.45,-8.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("Aizg7IFnAAQAjAAAAAjIAAAxQAAAjgjAAIlnAAQgjAAAAgjIAAgxQAAgjAjAAg");
	this.shape_9.setTransform(49.45,-8.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AizhEIFnAAQAjAAAAAjIAABDQAAAjgjAAIlnAAQgjAAAAgjIAAhDQAAgjAjAAg");
	this.shape_10.setTransform(49.45,-8.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AizhaIFnAAQAjAAAAAjIAABwQAAAjgjAAIlnAAQgjAAAAgjIAAhwQAAgjAjAAg");
	this.shape_11.setTransform(49.45,-8.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AiziCIFnAAQAjAAAAAjIAAC/QAAAjgjAAIlnAAQgjAAAAgjIAAi/QAAgjAjAAg");
	this.shape_12.setTransform(49.45,-8.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.6,0,2).p("AizjRIFnAAQAjAAAAAjIAAFdQAAAjgjAAIlnAAQgjAAAAgjIAAldQAAgjAjAAg");
	this.shape_13.setTransform(49.45,-8.25);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},203).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},43).to({state:[]},1).to({state:[{t:this.shape_13}]},53).to({state:[]},140).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(203).to({_off:false},0).wait(25).to({_off:true},1).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(249).to({_off:false},0).wait(44).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},140).wait(22));

	// PHONEandFILL
	this.instance_1 = new lib.PHONEandFILL("synched",0);
	this.instance_1.setTransform(49.6,-11.75);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(203).to({_off:false},0).wait(90).to({startPosition:0},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},130).wait(32));

	// HAND
	this.instance_2 = new lib.HAND("synched",0);
	this.instance_2.setTransform(0,6.95);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).wait(90).to({startPosition:0},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},130).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-66.8,174.8,133.7);


(lib.HAILGROUPAGAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_D_copy_copy_copy
	this.instance = new lib.HAIL_GROUP_D("synched",0);
	this.instance.setTransform(-18.2,-46.85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(295).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:-9.65,y:-31.7},0).wait(1).to({x:-2.45,y:-13.6},0).wait(1).to({x:4.75,y:4.5},0).wait(1).to({x:12,y:22.65},0).wait(1).to({x:13.7,y:33.5},0).wait(1).to({x:15.45,y:44.35},0).wait(1));

	// HAIL_GROUP_C_copy_copy_copy
	this.instance_1 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_1.setTransform(-18.2,-46.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(292).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:-8.25,y:-22},0).wait(1).to({x:-1.05,y:-3.9},0).wait(1).to({x:6.15,y:14.2},0).wait(1).to({x:13.4,y:32.35},0).wait(1).to({x:15.1,y:43.2},0).wait(1).to({x:16.85,y:54.05},0).to({_off:true},1).wait(3));

	// HAIL_GROUP_B_copy_copy_copy
	this.instance_2 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_2.setTransform(-18.2,-46.85);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(290).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:-4.35,y:-26.2},0).wait(1).to({x:2.85,y:-8.1},0).wait(1).to({x:10.05,y:10},0).wait(1).to({x:17.3,y:28.15},0).wait(1).to({x:19,y:39},0).wait(1).to({x:20.75,y:49.85},0).to({_off:true},1).wait(5));

	// HAIL_GROUP_A_copy_copy_copy
	this.instance_3 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_3.setTransform(-18.2,-46.85);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(287).to({_off:false},0).wait(1).to({x:-10.975,y:-28.725},0).wait(1).to({x:-3.75,y:-10.6},0).wait(1).to({x:3.475,y:7.525},0).wait(1).to({x:10.7,y:25.65},0).wait(1).to({x:12.425,y:36.5},0).wait(1).to({x:14.15,y:47.35},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-77.1,196.2,154.3);


(lib.CAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CAR_BODY
	this.instance = new lib.CARBODY("synched",0);
	this.instance.setTransform(-18.4,-4.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-4.1333,startPosition:1},0).wait(1).to({y:-4.1167,startPosition:2},0).wait(1).to({y:-4.1,startPosition:3},0).wait(1).to({y:-4.0833,startPosition:4},0).wait(1).to({y:-4.0667,startPosition:5},0).wait(1).to({y:-4.05,startPosition:6},0).wait(1).to({y:-4.125,startPosition:7},0).wait(1).to({y:-4.2,startPosition:8},0).wait(1).to({y:-4.275,startPosition:9},0).wait(1).to({y:-4.35,startPosition:10},0).wait(1).to({y:-4.3,startPosition:11},0).wait(1).to({y:-4.25,startPosition:12},0).wait(1).to({y:-4.2,startPosition:13},0).wait(1).to({y:-4.15,startPosition:14},0).wait(1).to({y:-4.2357,startPosition:15},0).wait(1).to({y:-4.2224,startPosition:16},0).wait(1).to({y:-4.2092,startPosition:17},0).wait(1).to({y:-4.1959,startPosition:18},0).wait(1).to({y:-4.1827,startPosition:19},0).wait(1).to({y:-4.1694,startPosition:20},0).wait(1).to({y:-4.1561,startPosition:21},0).wait(1).to({y:-4.1429,startPosition:22},0).wait(1).to({y:-4.1296,startPosition:23},0).wait(1).to({y:-4.1163,startPosition:24},0).wait(1).to({y:-4.1031,startPosition:25},0).wait(1).to({y:-4.0898,startPosition:26},0).wait(1).to({y:-4.0765,startPosition:27},0).wait(1).to({y:-4.0633,startPosition:28},0).wait(1).to({y:-4.05,startPosition:29},0).wait(1).to({y:-4.125,startPosition:30},0).wait(1).to({y:-4.2,startPosition:31},0).wait(1).to({y:-4.275,startPosition:32},0).wait(1).to({y:-4.35,startPosition:33},0).wait(1).to({y:-4.3,startPosition:34},0).wait(1).to({y:-4.25,startPosition:35},0).wait(1).to({y:-4.2,startPosition:36},0).wait(1).to({y:-4.15,startPosition:37},0).wait(1).to({y:-4.225,startPosition:38},0).wait(1).to({y:-4.1958,startPosition:39},0).wait(1).to({y:-4.1667,startPosition:40},0).wait(1).to({y:-4.1375,startPosition:41},0).wait(1).to({y:-4.1083,startPosition:42},0).wait(1).to({y:-4.0792,startPosition:43},0).wait(1).to({y:-4.05,startPosition:44},0).wait(1).to({y:-4.125,startPosition:45},0).wait(1).to({y:-4.2,startPosition:46},0).wait(1).to({y:-4.275,startPosition:47},0).wait(1).to({y:-4.35,startPosition:48},0).wait(1).to({y:-4.3,startPosition:49},0).wait(1).to({y:-4.25,startPosition:50},0).wait(1).to({y:-4.2,startPosition:51},0).wait(1).to({y:-4.15,startPosition:52},0).wait(1).to({y:-4.2333,startPosition:53},0).wait(1).to({y:-4.1967,startPosition:54},0).wait(1).to({y:-4.16,startPosition:55},0).wait(1).to({y:-4.1233,startPosition:56},0).wait(1).to({y:-4.0867,startPosition:57},0).wait(1).to({y:-4.05,startPosition:58},0).wait(1).to({y:-4.125,startPosition:59},0).wait(1).to({y:-4.2,startPosition:60},0).wait(1).to({y:-4.275,startPosition:61},0).wait(1).to({y:-4.35,startPosition:62},0).wait(1).to({y:-4.3,startPosition:63},0).wait(1).to({y:-4.25,startPosition:64},0).wait(1).to({y:-4.2,startPosition:65},0).wait(1).to({y:-4.15,startPosition:66},0).wait(1).to({y:-4.25,startPosition:67},0).wait(1).to({y:-4.2318,startPosition:68},0).wait(1).to({y:-4.2136,startPosition:69},0).wait(1).to({y:-4.1955,startPosition:70},0).wait(1).to({y:-4.1773,startPosition:71},0).wait(1).to({y:-4.1591,startPosition:72},0).wait(1).to({y:-4.1409,startPosition:73},0).wait(1).to({y:-4.1227,startPosition:74},0).wait(1).to({y:-4.1045,startPosition:75},0).wait(1).to({y:-4.0864,startPosition:76},0).wait(1).to({y:-4.0682,startPosition:77},0).wait(1).to({y:-4.05,startPosition:78},0).wait(1).to({y:-4.125,startPosition:79},0).wait(1).to({y:-4.2,startPosition:80},0).wait(1).to({y:-4.275,startPosition:81},0).wait(1).to({y:-4.35,startPosition:82},0).wait(1).to({y:-4.3,startPosition:83},0).wait(1).to({y:-4.25,startPosition:84},0).wait(1).to({y:-4.2,startPosition:85},0).wait(1).to({y:-4.15,startPosition:86},0).wait(1).to({y:-4.2357,startPosition:87},0).wait(1).to({y:-4.2224,startPosition:88},0).wait(1).to({y:-4.2092,startPosition:89},0).wait(1).to({y:-4.1959,startPosition:90},0).wait(1).to({y:-4.1827,startPosition:91},0).wait(1).to({y:-4.1694,startPosition:92},0).wait(1).to({y:-4.1561,startPosition:93},0).wait(1).to({y:-4.1429,startPosition:94},0).wait(1).to({y:-4.1296,startPosition:95},0).wait(1).to({y:-4.1163,startPosition:96},0).wait(1).to({y:-4.1031,startPosition:97},0).wait(1).to({y:-4.0898,startPosition:98},0).wait(1).to({y:-4.0765,startPosition:99},0).wait(1).to({y:-4.0633,startPosition:100},0).wait(1).to({y:-4.05,startPosition:101},0).wait(1).to({y:-4.125,startPosition:102},0).wait(1).to({y:-4.2,startPosition:103},0).wait(1).to({y:-4.275,startPosition:104},0).wait(1).to({y:-4.35,startPosition:105},0).wait(1).to({y:-4.3,startPosition:106},0).wait(1).to({y:-4.25,startPosition:107},0).wait(1).to({y:-4.2,startPosition:108},0).wait(1).to({y:-4.15,startPosition:109},0).wait(1).to({y:-4.225,startPosition:110},0).wait(1).to({y:-4.1958,startPosition:111},0).wait(1).to({y:-4.1667,startPosition:112},0).wait(1).to({y:-4.1375,startPosition:113},0).wait(1).to({y:-4.1083,startPosition:114},0).to({_off:true},1).wait(89).to({_off:false,y:-4.35,startPosition:0},0).wait(1).to({y:-4.3,startPosition:1},0).wait(1).to({y:-4.25,startPosition:2},0).wait(1).to({y:-4.2,startPosition:3},0).wait(1).to({y:-4.15,startPosition:4},0).wait(1).to({y:-4.25,startPosition:5},0).wait(1));

	// WHEELS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D7D").s().p("AFjBOQggAAgXgXQgWgXAAggQAAggAWgWQAXgXAgAAQAhAAAXAXQAWAWAAAgQAAAggWAXQgXAXghAAIAAAAgAE9glIAAAAQgPAQAAAVQAAAWAPAQQAQAPAWAAQAWAAAQgPQAQgQAAgWQAAgVgQgQIAAAAQgQgPgWAAIAAAAQgWAAgQAPgAliBOQghAAgWgXQgXgXAAggQAAggAXgWQAWgXAhAAQAgAAAXAXQAWAWAAAgQAAAggWAXQgXAXggAAIAAAAgAljA2QAWAAAQgQQAQgQAAgWQAAgVgQgPIAAgBQgQgPgWAAQgVAAgQAPIAAABQgQAPAAAVQAAAXAQAPIAAAAQAQAQAVAAgAljAuQgSAAgOgOIAAAAQgNgNAAgTQAAgSANgNIAAAAQAOgNASAAQATAAANANIAAAAQAOANAAASQAAATgOANQgNAOgTAAIAAAAgAFjAtQgTAAgNgNQgNgNAAgTQAAgSANgOIAAABQANgNATAAQATAAANANIAAgBQAOAOAAASQAAATgOANQgNANgTAAIAAAAg");
	this.shape.setTransform(-17.175,11.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEnA8QgZgZAAgjQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjQAAAjgZAZQgZAagkAAQgjAAgZgagAGbA3QAWgXAAggQAAgggWgWQgXgXghAAQggAAgXAXQgWAWAAAgQAAAgAWAXQAXAXAgAAQAhAAAXgXgAmfA8QgZgZAAgjQAAgjAZgZQAZgZAkAAQAjAAAZAZQAZAZAAAjQAAAjgZAZQgZAagjAAQgkAAgZgagAkrA3QAWgXAAggQAAgggWgWQgXgXggAAQghAAgWAXQgXAWAAAgQAAAgAXAXQAWAXAhAAQAgAAAXgXgAmIAmIAAAAQgQgPAAgXQAAgVAQgPIAAgBQAQgPAVAAQAWAAAQAPIAAABQAQAPAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQgAmQAAQAAATANANIAAAAQAOAOASAAQATAAANgOQAOgNAAgTQAAgSgOgNIAAAAQgNgNgTAAQgSAAgOANIAAAAQgNANAAASgAE9AmQgPgQAAgWQAAgVAPgQIAAAAQAQgPAWAAQAWAAAQAPIAAAAQAQAQAAAVQAAAWgQAQQgQAPgWAAQgWAAgQgPgAGDAgQAOgNAAgTQAAgSgOgOIAAABQgNgNgTAAQgTAAgNANIAAgBQgNAOAAASQAAATANANQANANATAAQATAAANgNg");
	this.shape_1.setTransform(-17.175,11.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},114).to({state:[]},1).to({state:[]},88).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-21.1,110.5,41.400000000000006);


(lib.ALLHAIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_AGAIN_copy_copy_copy_copy
	this.instance = new lib.HAILGROUPAGAIN("synched",285);
	this.instance.setTransform(-66.5,-8.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(383).to({_off:false},0).to({_off:true},17).wait(44));

	// HAIL_GROUP_AGAIN_copy_copy_copy
	this.instance_1 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_1.setTransform(-66.5,-8.35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(374).to({_off:false},0).to({_off:true},17).wait(53));

	// HAIL_GROUP_AGAIN_copy_copy
	this.instance_2 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_2.setTransform(-66.5,-8.35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(362).to({_off:false},0).to({_off:true},17).wait(65));

	// HAIL_GROUP_AGAIN_copy
	this.instance_3 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_3.setTransform(-66.5,-8.35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(354).to({_off:false},0).to({_off:true},17).wait(73));

	// HAIL_GROUP_AGAIN_copy_copy_copy
	this.instance_4 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_4.setTransform(-66.5,-8.35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(347).to({_off:false},0).to({_off:true},17).wait(80));

	// HAIL_GROUP_AGAIN_copy_copy
	this.instance_5 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_5.setTransform(-66.5,-8.35);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(338).to({_off:false},0).to({_off:true},17).wait(89));

	// HAIL_GROUP_AGAIN_copy
	this.instance_6 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_6.setTransform(-66.5,-8.35);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(326).to({_off:false},0).to({_off:true},17).wait(101));

	// HAIL_GROUP_AGAIN
	this.instance_7 = new lib.HAILGROUPAGAIN("synched",285);
	this.instance_7.setTransform(-66.5,-8.35);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(318).to({_off:false},0).to({_off:true},17).wait(109));

	// HAIL_GROUP_D_copy_copy
	this.instance_8 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_8.setTransform(48.3,-38.55);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(404).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:56.8,y:-23.4},0).wait(1).to({x:64.05,y:-5.3},0).wait(1).to({x:71.25,y:12.8},0).wait(1).to({x:78.5,y:30.95},0).wait(1).to({x:80.2,y:41.8},0).wait(1).to({x:81.95,y:52.65},0).to({_off:true},1).wait(33));

	// HAIL_GROUP_C_copy_copy
	this.instance_9 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_9.setTransform(48.3,-38.55);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(401).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:58.2,y:-13.7},0).wait(1).to({x:65.45,y:4.4},0).wait(1).to({x:72.65,y:22.5},0).wait(1).to({x:79.9,y:40.65},0).wait(1).to({x:81.6,y:51.5},0).wait(1).to({x:83.35,y:62.35},0).to({_off:true},1).wait(36));

	// HAIL_GROUP_B_copy_copy
	this.instance_10 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_10.setTransform(48.3,-38.55);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(399).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:62.1,y:-17.9},0).wait(1).to({x:69.35,y:0.2},0).wait(1).to({x:76.55,y:18.3},0).wait(1).to({x:83.8,y:36.45},0).wait(1).to({x:85.5,y:47.3},0).wait(1).to({x:87.25,y:58.15},0).to({_off:true},1).wait(38));

	// HAIL_GROUP_A_copy_copy
	this.instance_11 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_11.setTransform(48.3,-38.55);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(396).to({_off:false},0).wait(1).to({x:55.525,y:-20.425},0).wait(1).to({x:62.75,y:-2.3},0).wait(1).to({x:69.975,y:15.825},0).wait(1).to({x:77.2,y:33.95},0).wait(1).to({x:78.925,y:44.8},0).wait(1).to({x:80.65,y:55.65},0).to({_off:true},1).wait(41));

	// HAIL_GROUP_D_copy_copy
	this.instance_12 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_12.setTransform(48.3,-38.55);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(387).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:56.8,y:-23.4},0).wait(1).to({x:64.05,y:-5.3},0).wait(1).to({x:71.25,y:12.8},0).wait(1).to({x:78.5,y:30.95},0).wait(1).to({x:80.2,y:41.8},0).wait(1).to({x:81.95,y:52.65},0).to({_off:true},1).wait(50));

	// HAIL_GROUP_C_copy_copy
	this.instance_13 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_13.setTransform(48.3,-38.55);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(384).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:58.2,y:-13.7},0).wait(1).to({x:65.45,y:4.4},0).wait(1).to({x:72.65,y:22.5},0).wait(1).to({x:79.9,y:40.65},0).wait(1).to({x:81.6,y:51.5},0).wait(1).to({x:83.35,y:62.35},0).to({_off:true},1).wait(53));

	// HAIL_GROUP_B_copy_copy
	this.instance_14 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_14.setTransform(48.3,-38.55);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(382).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:62.1,y:-17.9},0).wait(1).to({x:69.35,y:0.2},0).wait(1).to({x:76.55,y:18.3},0).wait(1).to({x:83.8,y:36.45},0).wait(1).to({x:85.5,y:47.3},0).wait(1).to({x:87.25,y:58.15},0).to({_off:true},1).wait(55));

	// HAIL_GROUP_A_copy_copy
	this.instance_15 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_15.setTransform(48.3,-38.55);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(379).to({_off:false},0).wait(1).to({x:55.525,y:-20.425},0).wait(1).to({x:62.75,y:-2.3},0).wait(1).to({x:69.975,y:15.825},0).wait(1).to({x:77.2,y:33.95},0).wait(1).to({x:78.925,y:44.8},0).wait(1).to({x:80.65,y:55.65},0).to({_off:true},1).wait(58));

	// HAIL_GROUP_D_copy
	this.instance_16 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_16.setTransform(48.3,-38.55);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(383).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:56.8,y:-23.4},0).wait(1).to({x:64.05,y:-5.3},0).wait(1).to({x:71.25,y:12.8},0).wait(1).to({x:78.5,y:30.95},0).wait(1).to({x:80.2,y:41.8},0).wait(1).to({x:81.95,y:52.65},0).to({_off:true},1).wait(54));

	// HAIL_GROUP_C_copy
	this.instance_17 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_17.setTransform(48.3,-38.55);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(380).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:58.2,y:-13.7},0).wait(1).to({x:65.45,y:4.4},0).wait(1).to({x:72.65,y:22.5},0).wait(1).to({x:79.9,y:40.65},0).wait(1).to({x:81.6,y:51.5},0).wait(1).to({x:83.35,y:62.35},0).to({_off:true},1).wait(57));

	// HAIL_GROUP_B_copy
	this.instance_18 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_18.setTransform(48.3,-38.55);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(378).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:62.1,y:-17.9},0).wait(1).to({x:69.35,y:0.2},0).wait(1).to({x:76.55,y:18.3},0).wait(1).to({x:83.8,y:36.45},0).wait(1).to({x:85.5,y:47.3},0).wait(1).to({x:87.25,y:58.15},0).to({_off:true},1).wait(59));

	// HAIL_GROUP_A_copy
	this.instance_19 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_19.setTransform(48.3,-38.55);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(375).to({_off:false},0).wait(1).to({x:55.525,y:-20.425},0).wait(1).to({x:62.75,y:-2.3},0).wait(1).to({x:69.975,y:15.825},0).wait(1).to({x:77.2,y:33.95},0).wait(1).to({x:78.925,y:44.8},0).wait(1).to({x:80.65,y:55.65},0).to({_off:true},1).wait(62));

	// HAIL_GROUP_D
	this.instance_20 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_20.setTransform(48.3,-38.55);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(371).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:56.8,y:-23.4},0).wait(1).to({x:64.05,y:-5.3},0).wait(1).to({x:71.25,y:12.8},0).wait(1).to({x:78.5,y:30.95},0).wait(1).to({x:80.2,y:41.8},0).wait(1).to({x:81.95,y:52.65},0).to({_off:true},1).wait(66));

	// HAIL_GROUP_C
	this.instance_21 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_21.setTransform(48.3,-38.55);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(368).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:58.2,y:-13.7},0).wait(1).to({x:65.45,y:4.4},0).wait(1).to({x:72.65,y:22.5},0).wait(1).to({x:79.9,y:40.65},0).wait(1).to({x:81.6,y:51.5},0).wait(1).to({x:83.35,y:62.35},0).to({_off:true},1).wait(69));

	// HAIL_GROUP_B
	this.instance_22 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_22.setTransform(48.3,-38.55);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(366).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:62.1,y:-17.9},0).wait(1).to({x:69.35,y:0.2},0).wait(1).to({x:76.55,y:18.3},0).wait(1).to({x:83.8,y:36.45},0).wait(1).to({x:85.5,y:47.3},0).wait(1).to({x:87.25,y:58.15},0).to({_off:true},1).wait(71));

	// HAIL_GROUP_A
	this.instance_23 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_23.setTransform(48.3,-38.55);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(363).to({_off:false},0).wait(1).to({x:55.525,y:-20.425},0).wait(1).to({x:62.75,y:-2.3},0).wait(1).to({x:69.975,y:15.825},0).wait(1).to({x:77.2,y:33.95},0).wait(1).to({x:78.925,y:44.8},0).wait(1).to({x:80.65,y:55.65},0).to({_off:true},1).wait(74));

	// HAIL_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_24 = new lib.HAIL("synched",0);
	this.instance_24.setTransform(85.15,-48.95,1,1,0,0,0,-75,-37.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(386).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:104.75,y:-16.55},0).wait(1).to({x:111.7,y:4.45},0).wait(1).to({x:118.6,y:25.45},0).wait(1).to({x:125.55,y:46.45},0).to({_off:true},1).wait(53));

	// HAIL_copy_copy_copy_copy_copy_copy_copy
	this.instance_25 = new lib.HAIL("synched",0);
	this.instance_25.setTransform(100.65,-59.5,1,1,0,0,0,-75,-37.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(383).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:118.8,y:-29.15},0).wait(1).to({x:124.25,y:-10.25},0).wait(1).to({x:129.75,y:8.7},0).wait(1).to({x:135.2,y:27.65},0).wait(1).to({x:140.7,y:46.6},0).to({_off:true},1).wait(55));

	// HAIL_copy_copy_copy_copy_copy_copy
	this.instance_26 = new lib.HAIL("synched",0);
	this.instance_26.setTransform(51.7,-42.05,1,1,0,0,0,-75,-37.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(375).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:64.4,y:-27.8},0).wait(1).to({y:-25.05},0).wait(1).to({y:-22.2},0).wait(1).to({y:-19.4},0).wait(1).to({y:-16.6},0).wait(1).to({y:-13.75},0).wait(1).to({x:64.8,y:-6.75},0).wait(1).to({x:65.25,y:0.25},0).wait(1).to({x:65.7,y:7.25},0).wait(1).to({x:67.8,y:7},0).wait(1).to({x:69.95,y:6.75},0).wait(1).to({x:70.9,y:10.5},0).wait(1).to({x:71.85,y:14.3},0).wait(1).to({x:72.8,y:18.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// HAIL_copy_copy_copy_copy_copy
	this.instance_27 = new lib.HAIL("synched",0);
	this.instance_27.setTransform(12.1,-40.85,1,1,0,0,0,-75,-37.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(369).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:27.3,y:-21.75},0).wait(1).to({x:29.85,y:-14},0).wait(1).to({x:32.4,y:-6.25},0).wait(1).to({x:36.6,y:-0.05},0).wait(1).to({x:40.8,y:6.15},0).wait(1).to({x:45,y:3.35},0).wait(1).to({x:47.25,y:5.8},0).wait(1).to({x:49.5,y:8.25},0).wait(1).to({x:51.8,y:10.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(6));

	// HAIL_copy_copy_copy_copy
	this.instance_28 = new lib.HAIL("synched",0);
	this.instance_28.setTransform(-16.7,-40.85,1,1,0,0,0,-75,-37.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(367).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:2.4,y:-19.45},0).wait(1).to({x:8.8,y:-9.45},0).wait(1).to({x:14.8,y:2.55},0).wait(1).to({x:20.8,y:14.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy_copy_copy
	this.instance_29 = new lib.HAIL("synched",0);
	this.instance_29.setTransform(75.7,-62,1,1,0,0,0,-75,-37.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(365).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:96.2,y:-30.8},0).wait(1).to({x:104,y:-11},0).wait(1).to({x:111.8,y:8.8},0).wait(1).to({x:113.25,y:23},0).wait(1).to({x:115.25,y:22.3},0).wait(1).to({x:117.25,y:21.65},0).wait(1).to({x:119.25,y:21},0).wait(1).to({x:125.45,y:25.8},0).wait(1).to({x:131.65,y:30.65},0).wait(1).to({x:133.7,y:33.3},0).wait(1).to({x:135.75,y:35.95},0).wait(1).to({x:137.85,y:38.6},0).wait(1).to({x:139.9,y:41.25},0).wait(1).to({x:141.95,y:43.9},0).wait(1).to({x:144.05,y:46.6},0).to({_off:true},1).wait(63));

	// HAIL_copy_copy
	this.instance_30 = new lib.HAIL("synched",0);
	this.instance_30.setTransform(67.1,-41.6,1,1,0,0,0,-75,-37.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(357).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:86.45,y:-17.55},0).wait(1).to({x:93.1,y:-4.9},0).wait(1).to({x:99.75,y:7.75},0).wait(1).to({x:106.4,y:20.4},0).wait(1).to({y:19.65},0).wait(1).to({y:18.9},0).wait(1).to({y:18.15},0).wait(1).to({y:17.4},0).wait(1).to({x:106.9,y:17.65},0).wait(1).to({x:107.4,y:17.9},0).wait(1).to({x:107.9,y:18.15},0).wait(1).to({x:108.4,y:18.4},0).wait(1).to({x:108.9,y:18.65},0).wait(1).to({x:109.4,y:18.9},0).wait(1).to({x:109.9,y:19.15},0).wait(1).to({x:110.4,y:19.4},0).wait(1).to({y:24.4},0).wait(1).to({y:29.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy
	this.instance_31 = new lib.HAIL("synched",0);
	this.instance_31.setTransform(41.85,-38.65,1,1,0,0,0,-75,-37.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(354).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:55.55,y:-20.5},0).wait(1).to({x:61.1,y:-7},0).wait(1).to({x:65.2,y:8},0).wait(1).to({x:67.8,y:5.8},0).wait(1).to({x:67.9,y:5.6},0).wait(1).to({x:68.05,y:5.4},0).wait(1).to({x:68.15,y:5.2},0).wait(1).to({x:68.3,y:5},0).wait(1).to({x:68.4,y:4.8},0).wait(1).to({x:68.55,y:4.6},0).wait(1).to({x:68.65,y:4.4},0).wait(1).to({x:68.8,y:4.2},0).wait(1).to({x:69.2,y:5.15},0).wait(1).to({x:69.65,y:6.15},0).wait(1).to({x:70.1,y:7.1},0).wait(1).to({x:70.55,y:8.1},0).wait(1).to({x:71,y:9.05},0).wait(1).to({x:71.45,y:10.05},0).wait(1).to({x:71.9,y:11},0).wait(1).to({x:72.35,y:12},0).wait(1).to({x:72.8,y:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy_copy_copy_copy_copy_copy_copy
	this.instance_32 = new lib.HAIL("synched",0);
	this.instance_32.setTransform(85.15,-48.95,1,1,0,0,0,-75,-37.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(360).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:104.75,y:-16.55},0).wait(1).to({x:111.7,y:4.45},0).wait(1).to({x:118.6,y:25.45},0).wait(1).to({x:125.55,y:46.45},0).to({_off:true},1).wait(79));

	// HAIL_copy_copy_copy_copy_copy_copy
	this.instance_33 = new lib.HAIL("synched",0);
	this.instance_33.setTransform(100.65,-59.5,1,1,0,0,0,-75,-37.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(357).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:118.8,y:-29.15},0).wait(1).to({x:124.25,y:-10.25},0).wait(1).to({x:129.75,y:8.7},0).wait(1).to({x:135.2,y:27.65},0).wait(1).to({x:140.7,y:46.6},0).to({_off:true},1).wait(81));

	// HAIL_copy_copy_copy_copy_copy
	this.instance_34 = new lib.HAIL("synched",0);
	this.instance_34.setTransform(51.7,-42.05,1,1,0,0,0,-75,-37.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(349).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:64.4,y:-27.8},0).wait(1).to({y:-25.05},0).wait(1).to({y:-22.2},0).wait(1).to({y:-19.4},0).wait(1).to({y:-16.6},0).wait(1).to({y:-13.75},0).wait(1).to({x:64.8,y:-6.75},0).wait(1).to({x:65.25,y:0.25},0).wait(1).to({x:65.7,y:7.25},0).wait(1).to({x:67.8,y:7},0).wait(1).to({x:69.95,y:6.75},0).wait(1).to({x:70.9,y:10.5},0).wait(1).to({x:71.85,y:14.3},0).wait(1).to({x:72.8,y:18.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(26));

	// HAIL_copy_copy_copy_copy
	this.instance_35 = new lib.HAIL("synched",0);
	this.instance_35.setTransform(12.1,-40.85,1,1,0,0,0,-75,-37.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(343).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:27.3,y:-21.75},0).wait(1).to({x:29.85,y:-14},0).wait(1).to({x:32.4,y:-6.25},0).wait(1).to({x:36.6,y:-0.05},0).wait(1).to({x:40.8,y:6.15},0).wait(1).to({x:45,y:3.35},0).wait(1).to({x:47.25,y:5.8},0).wait(1).to({x:49.5,y:8.25},0).wait(1).to({x:51.8,y:10.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(32));

	// HAIL_copy_copy_copy
	this.instance_36 = new lib.HAIL("synched",0);
	this.instance_36.setTransform(-16.7,-40.85,1,1,0,0,0,-75,-37.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(341).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:2.4,y:-19.45},0).wait(1).to({x:8.8,y:-9.45},0).wait(1).to({x:14.8,y:2.55},0).wait(1).to({x:20.8,y:14.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));

	// HAIL_copy_copy
	this.instance_37 = new lib.HAIL("synched",0);
	this.instance_37.setTransform(75.7,-62,1,1,0,0,0,-75,-37.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(339).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:96.2,y:-30.8},0).wait(1).to({x:104,y:-11},0).wait(1).to({x:111.8,y:8.8},0).wait(1).to({x:113.25,y:23},0).wait(1).to({x:115.25,y:22.3},0).wait(1).to({x:117.25,y:21.65},0).wait(1).to({x:119.25,y:21},0).wait(1).to({x:125.45,y:25.8},0).wait(1).to({x:131.65,y:30.65},0).wait(1).to({x:133.7,y:33.3},0).wait(1).to({x:135.75,y:35.95},0).wait(1).to({x:137.85,y:38.6},0).wait(1).to({x:139.9,y:41.25},0).wait(1).to({x:141.95,y:43.9},0).wait(1).to({x:144.05,y:46.6},0).to({_off:true},1).wait(89));

	// HAIL_copy
	this.instance_38 = new lib.HAIL("synched",0);
	this.instance_38.setTransform(67.1,-41.6,1,1,0,0,0,-75,-37.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(331).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:86.45,y:-17.55},0).wait(1).to({x:93.1,y:-4.9},0).wait(1).to({x:99.75,y:7.75},0).wait(1).to({x:106.4,y:20.4},0).wait(1).to({y:19.65},0).wait(1).to({y:18.9},0).wait(1).to({y:18.15},0).wait(1).to({y:17.4},0).wait(1).to({x:106.9,y:17.65},0).wait(1).to({x:107.4,y:17.9},0).wait(1).to({x:107.9,y:18.15},0).wait(1).to({x:108.4,y:18.4},0).wait(1).to({x:108.9,y:18.65},0).wait(1).to({x:109.4,y:18.9},0).wait(1).to({x:109.9,y:19.15},0).wait(1).to({x:110.4,y:19.4},0).wait(1).to({y:24.4},0).wait(1).to({y:29.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));

	// HAIL
	this.instance_39 = new lib.HAIL("synched",0);
	this.instance_39.setTransform(48.35,-18.4,1,1,0,0,0,-75,-37.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(330).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:65.15,y:8},0).wait(1).to({x:67.75,y:5.8},0).wait(1).to({x:67.85,y:5.6},0).wait(1).to({x:68,y:5.4},0).wait(1).to({x:68.1,y:5.2},0).wait(1).to({x:68.25,y:5},0).wait(1).to({x:68.35,y:4.8},0).wait(1).to({x:68.5,y:4.6},0).wait(1).to({x:68.6,y:4.4},0).wait(1).to({x:68.75,y:4.2},0).wait(1).to({x:69.15,y:5.15},0).wait(1).to({x:69.6,y:6.15},0).wait(1).to({x:70.05,y:7.1},0).wait(1).to({x:70.5,y:8.1},0).wait(1).to({x:70.95,y:9.05},0).wait(1).to({x:71.4,y:10.05},0).wait(1).to({x:71.85,y:11},0).wait(1).to({x:72.3,y:12},0).wait(1).to({x:72.75,y:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.6,-85.4,329.2,170.9);


(lib.CARUNDERCARPORT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CLOUD3
	this.instance = new lib.CLOUD3("synched",0);
	this.instance.setTransform(126.55,-36.75,1,1,0,0,0,111,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(295).to({_off:false},0).wait(1).to({regX:-83.1,regY:-8.9,x:-68.7,y:-49.6},0).wait(1).to({x:-69.85},0).wait(1).to({x:-71},0).wait(1).to({x:-72.1},0).wait(1).to({x:-73.25,y:-49.55},0).wait(1).to({x:-74.4},0).wait(1).to({x:-75.55},0).wait(1).to({x:-76.65},0).wait(1).to({x:-77.8},0).wait(1).to({x:-78.95,y:-49.5},0).wait(1).to({x:-80.05},0).wait(1).to({x:-81.2},0).wait(1).to({x:-82.35},0).wait(1).to({x:-83.45,y:-49.45},0).wait(1).to({x:-84.55},0).wait(1).to({x:-85.7},0).wait(1).to({x:-86.85},0).wait(1).to({x:-88},0).wait(1).to({x:-89.1,y:-49.4},0).wait(1).to({x:-90.25},0).wait(1).to({x:-91.4},0).wait(1).to({x:-92.55},0).wait(1).to({x:-93.65,y:-49.35},0).wait(1).to({x:-94.8},0).wait(1).to({x:-95.95},0).wait(1).to({x:-97.05},0).wait(1).to({x:-98.2},0).wait(1).to({x:-99.35,y:-49.3},0).wait(1).to({x:-100.5},0).wait(1).to({x:-101.6},0).wait(1).to({x:-102.75},0).wait(1).to({x:-103.9},0).wait(1).to({x:-105.05,y:-49.25},0).wait(1).to({x:-106.15},0).wait(1).to({x:-107.3},0).wait(1).to({x:-108.45},0).wait(1).to({x:-109.55,y:-49.2},0).wait(1).to({x:-110.7},0).wait(1).to({x:-111.85},0).wait(1).to({x:-113},0).wait(1).to({x:-114.1},0).wait(1).to({x:-115.25,y:-49.15},0).wait(1).to({x:-116.4},0).wait(1).to({x:-117.55},0).wait(1).to({x:-118.65},0).wait(1).to({x:-119.8,y:-49.1},0).wait(1).to({x:-120.95},0).wait(1).to({x:-122.05},0).wait(1).to({x:-123.2},0).wait(1).to({x:-124.35},0).wait(1).to({x:-125.5,y:-49.05},0).wait(1).to({x:-126.6},0).wait(1).to({x:-127.75},0).wait(1).to({x:-128.9},0).wait(1).to({x:-130.05},0).wait(1).to({x:-130.7,y:-49},0).wait(1).to({x:-131.35,y:-48.95},0).wait(1).to({x:-132.05},0).wait(1).to({x:-132.7,y:-48.9},0).wait(1).to({x:-133.4,y:-48.85},0).wait(1).to({x:-134.05},0).wait(1).to({x:-134.75,y:-48.8},0).wait(1).to({x:-135.4},0).wait(1).to({x:-136.1,y:-48.75},0).wait(1).to({x:-136.75,y:-48.7},0).wait(1).to({x:-137.45},0).wait(1).to({x:-138.1,y:-48.65},0).wait(1).to({x:-138.8,y:-48.6},0).wait(1).to({x:-139.45},0).wait(1).to({x:-140.15,y:-48.55},0).wait(1).to({x:-140.8},0).wait(1).to({x:-141.5,y:-48.5},0).wait(1).to({x:-142.15,y:-48.45},0).wait(1).to({x:-142.85},0).wait(1).to({x:-143.5,y:-48.4},0).wait(1).to({x:-144.2},0).wait(1).to({x:-144.85,y:-48.35},0).wait(1).to({x:-145.55,y:-48.3},0).wait(1).to({x:-146.2},0).wait(1).to({x:-146.9,y:-48.25},0).wait(1).to({x:-147.55,y:-48.2},0).wait(1).to({x:-148.2},0).wait(1).to({x:-148.9,y:-48.15},0).wait(1).to({x:-149.55},0).wait(1).to({x:-150.25,y:-48.1},0).wait(1).to({x:-150.9,y:-48.05},0).wait(1).to({x:-151.6},0).wait(1).to({x:-152.25,y:-48},0).wait(1).to({x:-152.95},0).wait(1).to({x:-153.6,y:-47.95},0).wait(1).to({x:-154.3,y:-47.9},0).wait(1).to({x:-154.95},0).wait(1).to({x:-155.65,y:-47.85},0).wait(1).to({x:-156.3,y:-47.8},0).wait(1).to({x:-157},0).wait(1).to({x:-157.65,y:-47.75},0).wait(1).to({x:-158.35},0).wait(1).to({x:-159,y:-47.7},0).to({_off:true},1).wait(50));

	// CLOUD4
	this.instance_1 = new lib.CLOUD4("synched",0);
	this.instance_1.setTransform(119.1,-36.95,1,1,0,0,0,73.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).wait(1).to({regX:-76.2,regY:-9.7,x:-32,y:-46.5},0).wait(1).to({x:-33},0).wait(1).to({x:-34},0).wait(1).to({x:-35,y:-46.45},0).wait(1).to({x:-36},0).wait(1).to({x:-37},0).wait(1).to({x:-38},0).wait(1).to({x:-39,y:-46.4},0).wait(1).to({x:-40},0).wait(1).to({x:-41},0).wait(1).to({x:-42},0).wait(1).to({x:-43,y:-46.35},0).wait(1).to({x:-44},0).wait(1).to({x:-45},0).wait(1).to({x:-46,y:-46.3},0).wait(1).to({x:-47},0).wait(1).to({x:-48},0).wait(1).to({x:-49},0).wait(1).to({x:-50,y:-46.25},0).wait(1).to({x:-51},0).wait(1).to({x:-52},0).wait(1).to({x:-53},0).wait(1).to({x:-54,y:-46.2},0).wait(1).to({x:-55},0).wait(1).to({x:-56},0).wait(1).to({x:-57,y:-46.15},0).wait(1).to({x:-58},0).wait(1).to({x:-59},0).wait(1).to({x:-60},0).wait(1).to({x:-61,y:-46.1},0).wait(1).to({x:-62},0).wait(1).to({x:-63},0).wait(1).to({x:-64},0).wait(1).to({x:-65,y:-46.05},0).wait(1).to({x:-66},0).wait(1).to({x:-67},0).wait(1).to({x:-68,y:-46},0).wait(1).to({x:-69},0).wait(1).to({x:-70},0).wait(1).to({x:-71},0).wait(1).to({x:-72,y:-45.95},0).wait(1).to({x:-73},0).wait(1).to({x:-74},0).wait(1).to({x:-75},0).wait(1).to({x:-76,y:-45.9},0).wait(1).to({x:-76.95},0).wait(1).to({x:-77.95},0).wait(1).to({x:-78.95,y:-45.85},0).wait(1).to({x:-79.95},0).wait(1).to({x:-80.95},0).wait(1).to({x:-81.95},0).wait(1).to({x:-82.95,y:-45.8},0).wait(1).to({x:-83.95},0).wait(1).to({x:-84.95},0).wait(1).to({x:-85.95},0).wait(1).to({x:-86.95,y:-45.75},0).wait(1).to({x:-87.95,y:-45.7},0).wait(1).to({x:-88.95},0).wait(1).to({x:-89.95,y:-45.65},0).wait(1).to({x:-90.95,y:-45.6},0).wait(1).to({x:-91.95},0).wait(1).to({x:-92.95,y:-45.55},0).wait(1).to({x:-93.95},0).wait(1).to({x:-94.95,y:-45.5},0).wait(1).to({x:-95.95,y:-45.45},0).wait(1).to({x:-96.95},0).wait(1).to({x:-97.95,y:-45.4},0).wait(1).to({x:-98.95,y:-45.35},0).wait(1).to({x:-99.95},0).wait(1).to({x:-100.95,y:-45.3},0).wait(1).to({x:-101.95},0).wait(1).to({x:-102.95,y:-45.25},0).wait(1).to({x:-103.95,y:-45.2},0).wait(1).to({x:-104.95},0).wait(1).to({x:-105.95,y:-45.15},0).wait(1).to({x:-106.95},0).wait(1).to({x:-107.95,y:-45.1},0).wait(1).to({x:-108.95,y:-45.05},0).wait(1).to({x:-109.95},0).wait(1).to({x:-110.95,y:-45},0).wait(1).to({x:-111.95,y:-44.95},0).wait(1).to({x:-112.95},0).wait(1).to({x:-113.95,y:-44.9},0).wait(1).to({x:-114.95},0).wait(1).to({x:-115.95,y:-44.85},0).wait(1).to({x:-116.95,y:-44.8},0).wait(1).to({x:-117.95},0).wait(1).to({x:-118.95,y:-44.75},0).wait(1).to({x:-119.95},0).wait(1).to({x:-120.95,y:-44.7},0).wait(1).to({x:-121.95,y:-44.65},0).wait(1).to({x:-122.95},0).wait(1).to({x:-123.95,y:-44.6},0).wait(1).to({x:-124.95,y:-44.55},0).wait(1).to({x:-125.95},0).wait(1).to({x:-126.95,y:-44.5},0).wait(1).to({x:-127.95},0).wait(1).to({x:-128.95,y:-44.45},0).to({_off:true},1).wait(50));

	// HAIL_MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_295 = new cjs.Graphics().p("AX0SbIkyosI1DhKIAAJ0IAaAAI3KACQgyAAAAgyMAAAgjRQAAgyAyAAMAxjAAAQAyAAAAAyMAAAAjRQAAAygyAAg");
	var mask_graphics_393 = new cjs.Graphics().p("AX0SbIkyosI1DhKIAAJ0IAaAAI3KACQgyAAAAgyMAAAgjRQAAgyAyAAMAxjAAAQAyAAAAAyMAAAAjRQAAAygyAAg");
	var mask_graphics_411 = new cjs.Graphics().p("AX0SbIkyosI1DhKIAAJ0IAaAAI3KACQgyAAAAgyMAAAgjRQAAgyAyAAMAxjAAAQAyAAAAAyMAAAAjRQAAAygyAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(295).to({graphics:mask_graphics_295,x:-66.8,y:-54.9}).wait(98).to({graphics:mask_graphics_393,x:-66.8,y:-54.9}).wait(1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_411,x:-66.8,y:-54.9}).wait(33));

	// ALL_HAIL
	this.instance_2 = new lib.ALLHAIL("synched",295);
	this.instance_2.setTransform(-73.8,17.35);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(295).to({_off:false},0).wait(98).to({startPosition:393},0).to({_off:true},1).wait(17).to({_off:false,startPosition:411},0).wait(33));

	// LIGHTING
	this.instance_3 = new lib.LIGHTING("synched",0);
	this.instance_3.setTransform(-162.3,2.15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(306).to({_off:false},0).wait(1).to({regX:0.1,regY:1,x:-163.2,y:3.15,startPosition:1},0).wait(1).to({x:-164.25,startPosition:2},0).wait(1).to({x:-165.3,startPosition:3},0).wait(1).to({x:-166.35,startPosition:4},0).wait(1).to({x:-167.4,startPosition:5},0).wait(1).to({x:-168.45,startPosition:6},0).wait(1).to({x:-169.5,startPosition:7},0).wait(1).to({x:-170.55,startPosition:8},0).wait(1).to({x:-171.6,startPosition:9},0).wait(1).to({x:-172.65,startPosition:10},0).wait(1).to({x:-173.7,y:3.2,startPosition:11},0).to({_off:true},1).wait(126));

	// CARPORT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73F5AD").s().p("Aw3ATMAhvgB3IAABSMghvAB3g");
	this.shape.setTransform(-14.7434,3.7625,0.6762,0.6762,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73F5AD").s().p("AgWG0IAAtkIAtgDIAANng");
	this.shape_1.setTransform(-79.5382,32.2634,0.6762,0.6762,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73F5AD").s().p("AgWF+IAAr6IAtgCIAAL8g");
	this.shape_2.setTransform(49.1892,35.864,0.6762,0.6762,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},295).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},98).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).wait(33));

	// PROTECTED_CAR
	this.instance_4 = new lib.PROTECTED_CAR("synched",0);
	this.instance_4.setTransform(-89.8,41.55);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(295).to({_off:false},0).wait(1).to({regX:-18.4,regY:-0.5,x:-103.55,y:41.05,startPosition:1},0).wait(1).to({x:-99.15,startPosition:2},0).wait(1).to({x:-94.85,startPosition:3},0).wait(1).to({x:-90.7,startPosition:4},0).wait(1).to({x:-86.65,startPosition:5},0).wait(1).to({x:-82.65,startPosition:6},0).wait(1).to({x:-78.8,startPosition:7},0).wait(1).to({x:-75,startPosition:8},0).wait(1).to({x:-71.35,startPosition:9},0).wait(1).to({x:-67.7,startPosition:10},0).wait(1).to({x:-64.2,startPosition:11},0).wait(1).to({x:-60.8,startPosition:12},0).wait(1).to({x:-57.45,startPosition:13},0).wait(1).to({x:-54.2,startPosition:14},0).wait(1).to({x:-51,startPosition:15},0).wait(1).to({x:-47.95,startPosition:16},0).wait(1).to({x:-44.95,startPosition:17},0).wait(1).to({x:-42,startPosition:18},0).wait(1).to({x:-39.2,startPosition:19},0).wait(1).to({x:-36.45,startPosition:20},0).wait(1).to({x:-33.85,startPosition:21},0).wait(1).to({x:-31.3,startPosition:22},0).wait(1).to({x:-28.8,startPosition:23},0).wait(1).to({x:-26.45,startPosition:24},0).wait(1).to({x:-24.2,startPosition:25},0).wait(1).to({x:-22,startPosition:26},0).wait(1).to({x:-19.95,startPosition:27},0).wait(1).to({x:-18,startPosition:28},0).wait(1).to({x:-16.15,startPosition:29},0).wait(1).to({x:-14.4,startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({x:-14.35,startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({x:-14.3,startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({x:-14.25,startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({x:-14.2,startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({x:-14.15,startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).to({_off:true},1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308,-80.2,409.7,143.2);


(lib.CAR_CLOUDSLIGHTINGHAIL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HAIL_GROUP_C_copy_copy_copy
	this.instance = new lib.HAIL_GROUP_C("synched",0);
	this.instance.setTransform(9.2,-15.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:19.1,y:9.05},0).wait(1).to({x:26.35,y:27.2},0).to({_off:true},1).wait(36));

	// HAIL_GROUP_B_copy_copy_copy
	this.instance_1 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_1.setTransform(9.2,-11.25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:23,y:8.25},0).wait(1).to({x:30.25,y:25.25},0).wait(1).to({x:37.45,y:42.25},0).wait(1).to({x:44.7,y:59.25},0).to({_off:true},1).wait(36));

	// HAIL_GROUP_A_copy_copy_copy
	this.instance_2 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_2.setTransform(9.2,-15.75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({_off:false},0).wait(1).to({x:16.425,y:2.375},0).wait(1).to({x:23.65,y:20.5},0).wait(1).to({x:30.875,y:38.625},0).wait(1).to({x:38.1,y:56.75},0).wait(1).to({x:39.825,y:67.6},0).wait(1).to({x:41.55,y:78.45},0).to({_off:true},1).wait(37));

	// HAIL_GROUP_D_copy_copy
	this.instance_3 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_3.setTransform(9.2,-9.15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:17.7,y:4.3},0).wait(1).to({x:24.95,y:20.8},0).wait(1).to({x:32.15,y:37.25},0).to({_off:true},1).wait(36));

	// HAIL_GROUP_C_copy_copy
	this.instance_4 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_4.setTransform(9.2,-15.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(196).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:19.1,y:9.05},0).wait(1).to({x:26.35,y:27.2},0).wait(1).to({x:33.55,y:45.3},0).wait(1).to({x:40.8,y:63.45},0).wait(1).to({x:42.5,y:74.3},0).wait(1).to({x:44.25,y:85.15},0).to({_off:true},1).wait(36));

	// HAIL_GROUP_B_copy_copy
	this.instance_5 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_5.setTransform(9.2,-15.75);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:23,y:4.85},0).wait(1).to({x:30.25,y:23},0).wait(1).to({x:37.45,y:41.1},0).wait(1).to({x:44.7,y:59.25},0).wait(1).to({x:46.4,y:70.1},0).wait(1).to({x:48.15,y:80.95},0).to({_off:true},1).wait(38));

	// HAIL_GROUP_A_copy_copy
	this.instance_6 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_6.setTransform(9.2,-15.75);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(191).to({_off:false},0).wait(1).to({x:16.425,y:2.375},0).wait(1).to({x:23.65,y:20.5},0).wait(1).to({x:30.875,y:38.625},0).wait(1).to({x:38.1,y:56.75},0).wait(1).to({x:39.825,y:67.6},0).wait(1).to({x:41.55,y:78.45},0).to({_off:true},1).wait(41));

	// HAIL_GROUP_D_copy_copy
	this.instance_7 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_7.setTransform(9.2,-11.35);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(182).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:17.7,y:2.65},0).wait(1).to({x:24.95,y:19.7},0).wait(1).to({x:32.15,y:36.7},0).wait(1).to({x:39.4,y:53.75},0).wait(1).to({x:41.1,y:64.6},0).wait(1).to({x:42.85,y:75.45},0).to({_off:true},1).wait(50));

	// HAIL_GROUP_C_copy_copy
	this.instance_8 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_8.setTransform(9.2,-15.75);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:19.1,y:9.05},0).wait(1).to({x:26.35,y:27.2},0).wait(1).to({x:33.55,y:45.3},0).wait(1).to({x:40.8,y:63.45},0).wait(1).to({x:42.5,y:74.3},0).wait(1).to({x:44.25,y:85.15},0).to({_off:true},1).wait(53));

	// HAIL_GROUP_B_copy_copy
	this.instance_9 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_9.setTransform(9.2,-15.75);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(177).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:23,y:4.85},0).wait(1).to({x:30.25,y:23},0).wait(1).to({x:37.45,y:41.1},0).wait(1).to({x:44.7,y:59.25},0).wait(1).to({x:46.4,y:70.1},0).wait(1).to({x:48.15,y:80.95},0).to({_off:true},1).wait(55));

	// HAIL_GROUP_A_copy_copy
	this.instance_10 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_10.setTransform(9.2,-15.75);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(174).to({_off:false},0).wait(1).to({x:16.425,y:2.375},0).wait(1).to({x:23.65,y:20.5},0).wait(1).to({x:30.875,y:38.625},0).wait(1).to({x:38.1,y:56.75},0).wait(1).to({x:39.825,y:67.6},0).wait(1).to({x:41.55,y:78.45},0).to({_off:true},1).wait(58));

	// HAIL_GROUP_D_copy
	this.instance_11 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_11.setTransform(9.2,-15.75);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(178).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:17.7,y:-0.65},0).wait(1).to({x:24.95,y:17.5},0).wait(1).to({x:32.15,y:35.6},0).wait(1).to({x:39.4,y:53.75},0).wait(1).to({x:41.1,y:64.6},0).wait(1).to({x:42.85,y:75.45},0).to({_off:true},1).wait(54));

	// HAIL_GROUP_C_copy
	this.instance_12 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_12.setTransform(9.2,-15.75);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(175).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:19.1,y:9.05},0).wait(1).to({x:26.35,y:27.2},0).wait(1).to({x:33.55,y:45.3},0).wait(1).to({x:40.8,y:63.45},0).wait(1).to({x:42.5,y:74.3},0).wait(1).to({x:44.25,y:85.15},0).to({_off:true},1).wait(57));

	// HAIL_GROUP_B_copy
	this.instance_13 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_13.setTransform(9.2,-15.75);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(173).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:23,y:4.85},0).wait(1).to({x:30.25,y:23},0).wait(1).to({x:37.45,y:41.1},0).wait(1).to({x:44.7,y:59.25},0).wait(1).to({x:46.4,y:70.1},0).wait(1).to({x:48.15,y:80.95},0).to({_off:true},1).wait(59));

	// HAIL_GROUP_A_copy
	this.instance_14 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_14.setTransform(9.2,-15.75);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(170).to({_off:false},0).wait(1).to({x:16.425,y:2.375},0).wait(1).to({x:23.65,y:20.5},0).wait(1).to({x:30.875,y:38.625},0).wait(1).to({x:38.1,y:56.75},0).wait(1).to({x:39.825,y:67.6},0).wait(1).to({x:41.55,y:78.45},0).to({_off:true},1).wait(62));

	// LIGHTING_copy
	this.instance_15 = new lib.LIGHTING("synched",0);
	this.instance_15.setTransform(158.4,13.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(142).to({_off:false},0).wait(1).to({regX:0.1,regY:1,x:158.35,y:14.25,startPosition:1},0).wait(1).to({x:158.2,y:14.45,startPosition:2},0).wait(1).to({x:158.05,y:14.65,startPosition:3},0).wait(1).to({x:157.95,y:14.8,startPosition:4},0).wait(1).to({x:157.8,y:15,startPosition:5},0).wait(1).to({x:157.65,y:15.2,startPosition:6},0).wait(1).to({x:157.5,y:15.4,startPosition:7},0).wait(1).to({x:157.4,y:15.55,startPosition:8},0).wait(1).to({x:157.25,y:15.75,startPosition:9},0).wait(1).to({x:157.1,y:15.95,startPosition:10},0).wait(1).to({x:157,y:16.15,startPosition:11},0).to({_off:true},1).wait(85));

	// LIGHTING
	this.instance_16 = new lib.LIGHTING("synched",0);
	this.instance_16.setTransform(48.4,7.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(109).to({_off:false},0).wait(1).to({regX:0.1,regY:1,x:47.45,y:8.6,startPosition:1},0).wait(1).to({x:46.4,startPosition:2},0).wait(1).to({x:45.35,startPosition:3},0).wait(1).to({x:44.3,startPosition:4},0).wait(1).to({x:43.25,startPosition:5},0).wait(1).to({x:42.2,startPosition:6},0).wait(1).to({x:41.15,startPosition:7},0).wait(1).to({x:40.1,startPosition:8},0).wait(1).to({x:39.05,startPosition:9},0).wait(1).to({x:38,startPosition:10},0).wait(1).to({x:37,y:8.65,startPosition:11},0).to({_off:true},1).wait(118));

	// CLOUD1
	this.instance_17 = new lib.CLOUD1("synched",0);
	this.instance_17.setTransform(161.25,-31.3,1,1,0,0,0,111,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(90).to({_off:false},0).wait(1).to({regX:81.7,regY:0.7,x:130.8,y:-34.55},0).wait(1).to({x:129.65},0).wait(1).to({x:128.5},0).wait(1).to({x:127.4},0).wait(1).to({x:126.25,y:-34.5},0).wait(1).to({x:125.1},0).wait(1).to({x:123.95},0).wait(1).to({x:122.85},0).wait(1).to({x:121.7},0).wait(1).to({x:120.55,y:-34.45},0).wait(1).to({x:119.45},0).wait(1).to({x:118.3},0).wait(1).to({x:117.15},0).wait(1).to({x:116,y:-34.4},0).wait(1).to({x:114.9},0).wait(1).to({x:113.75},0).wait(1).to({x:112.6},0).wait(1).to({x:111.45},0).wait(1).to({x:110.35,y:-34.35},0).wait(1).to({x:109.2},0).wait(1).to({x:108.05},0).wait(1).to({x:106.95},0).wait(1).to({x:105.8,y:-34.3},0).wait(1).to({x:104.65},0).wait(1).to({x:103.5},0).wait(1).to({x:102.4},0).wait(1).to({x:101.25},0).wait(1).to({x:100.1,y:-34.25},0).wait(1).to({x:98.95},0).wait(1).to({x:97.85},0).wait(1).to({x:96.7},0).wait(1).to({x:95.55},0).wait(1).to({x:94.45,y:-34.2},0).wait(1).to({x:93.3},0).wait(1).to({x:92.15},0).wait(1).to({x:91},0).wait(1).to({x:89.9,y:-34.15},0).wait(1).to({x:88.75},0).wait(1).to({x:87.6},0).wait(1).to({x:86.45},0).wait(1).to({x:85.35},0).wait(1).to({x:84.2,y:-34.1},0).wait(1).to({x:83.05},0).wait(1).to({x:81.95},0).wait(1).to({x:80.85},0).wait(1).to({x:79.7,y:-34.05},0).wait(1).to({x:78.55},0).wait(1).to({x:77.45},0).wait(1).to({x:76.3},0).wait(1).to({x:75.15},0).wait(1).to({x:74,y:-34},0).wait(1).to({x:72.9},0).wait(1).to({x:71.75},0).wait(1).to({x:70.6},0).wait(1).to({x:69.45},0).wait(1).to({x:64.45},0).wait(1).to({scaleX:1.0509,scaleY:1.0509,x:63,y:-34.15},0).wait(1).to({scaleX:1.1018,scaleY:1.1018,x:61.5,y:-34.35},0).wait(1).to({scaleX:1.1526,scaleY:1.1526,x:60,y:-34.5},0).wait(1).to({scaleX:1.2035,scaleY:1.2035,x:58.55,y:-34.65},0).wait(1).to({scaleX:1.2544,scaleY:1.2544,x:57.05,y:-34.8},0).wait(1).to({scaleX:1.3053,scaleY:1.3053,x:55.55,y:-35},0).wait(1).to({scaleX:1.3561,scaleY:1.3561,x:54.05,y:-35.15},0).wait(1).to({scaleX:1.407,scaleY:1.407,x:52.55,y:-35.3},0).wait(1).to({scaleX:1.4579,scaleY:1.4579,x:51.05,y:-35.5},0).wait(1).to({scaleX:1.5088,scaleY:1.5088,x:49.55,y:-35.65},0).wait(1).to({scaleX:1.5596,scaleY:1.5596,x:48.05,y:-35.8},0).wait(1).to({scaleX:1.6105,scaleY:1.6105,x:46.6,y:-35.95},0).wait(1).to({scaleX:1.6614,scaleY:1.6614,x:45.1,y:-36.15},0).wait(1).to({scaleX:1.7123,scaleY:1.7123,x:43.6,y:-36.3},0).wait(1).to({scaleX:1.7631,scaleY:1.7631,x:42.1,y:-36.5},0).wait(1).to({scaleX:1.814,scaleY:1.814,x:40.6,y:-36.7},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,x:39.1,y:-36.85},0).wait(1).to({scaleX:1.9158,scaleY:1.9158,x:37.6,y:-37},0).wait(1).to({scaleX:1.9666,scaleY:1.9666,x:36.1,y:-37.15},0).wait(1).to({scaleX:2.0175,scaleY:2.0175,x:34.65,y:-37.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:111,regY:4,x:93.85,y:-30.7},0).to({_off:true},1).wait(34));

	// CLOUD2
	this.instance_18 = new lib.CLOUD2("synched",0);
	this.instance_18.setTransform(153.8,-31.5,1,1,0,0,0,73.9,-0.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(90).to({_off:false},0).wait(1).to({regX:-17.4,regY:0.7,x:61.5,y:-30.65},0).wait(1).to({x:60.5},0).wait(1).to({x:59.5},0).wait(1).to({x:58.5,y:-30.6},0).wait(1).to({x:57.5},0).wait(1).to({x:56.5},0).wait(1).to({x:55.5},0).wait(1).to({x:54.5,y:-30.55},0).wait(1).to({x:53.5},0).wait(1).to({x:52.5},0).wait(1).to({x:51.5},0).wait(1).to({x:50.5,y:-30.5},0).wait(1).to({x:49.5},0).wait(1).to({x:48.5},0).wait(1).to({x:47.5,y:-30.45},0).wait(1).to({x:46.5},0).wait(1).to({x:45.5},0).wait(1).to({x:44.5},0).wait(1).to({x:43.5,y:-30.4},0).wait(1).to({x:42.5},0).wait(1).to({x:41.5},0).wait(1).to({x:40.5},0).wait(1).to({x:39.5,y:-30.35},0).wait(1).to({x:38.5},0).wait(1).to({x:37.5},0).wait(1).to({x:36.5,y:-30.3},0).wait(1).to({x:35.5},0).wait(1).to({x:34.5},0).wait(1).to({x:33.5},0).wait(1).to({x:32.5,y:-30.25},0).wait(1).to({x:31.5},0).wait(1).to({x:30.5},0).wait(1).to({x:29.5},0).wait(1).to({x:28.5,y:-30.2},0).wait(1).to({x:27.5},0).wait(1).to({x:26.5},0).wait(1).to({x:25.5,y:-30.15},0).wait(1).to({x:24.5},0).wait(1).to({x:23.5},0).wait(1).to({x:22.5},0).wait(1).to({x:21.5,y:-30.1},0).wait(1).to({x:20.5},0).wait(1).to({x:19.5},0).wait(1).to({x:18.5},0).wait(1).to({x:17.5,y:-30.05},0).wait(1).to({x:16.5},0).wait(1).to({x:15.5},0).wait(1).to({x:14.5,y:-30},0).wait(1).to({x:13.5},0).wait(1).to({x:12.5},0).wait(1).to({x:11.5},0).wait(1).to({x:10.5,y:-29.95},0).wait(1).to({x:9.5},0).wait(1).to({x:8.5},0).wait(1).to({x:7.55},0).wait(1).to({x:2.55},0).wait(1).to({scaleX:1.0421,scaleY:1.0421,x:-3.85,y:-29.85},0).wait(1).to({scaleX:1.0842,scaleY:1.0842,x:-10.15,y:-29.8},0).wait(1).to({scaleX:1.1262,scaleY:1.1262,x:-16.55,y:-29.7},0).wait(1).to({scaleX:1.1683,scaleY:1.1683,x:-22.85},0).wait(1).to({scaleX:1.2104,scaleY:1.2104,x:-29.15,y:-29.6},0).wait(1).to({scaleX:1.2525,scaleY:1.2525,x:-35.55,y:-29.5},0).wait(1).to({scaleX:1.2945,scaleY:1.2945,x:-41.85,y:-29.45},0).wait(1).to({scaleX:1.3366,scaleY:1.3366,x:-48.25,y:-29.4},0).wait(1).to({scaleX:1.3787,scaleY:1.3787,x:-54.6,y:-29.35},0).wait(1).to({scaleX:1.4208,scaleY:1.4208,x:-60.9,y:-29.25},0).wait(1).to({scaleX:1.4628,scaleY:1.4628,x:-67.3,y:-29.2},0).wait(1).to({scaleX:1.5049,scaleY:1.5049,x:-73.65,y:-29.15},0).wait(1).to({scaleX:1.547,scaleY:1.547,x:-80,y:-29.05},0).wait(1).to({scaleX:1.5891,scaleY:1.5891,x:-86.35,y:-29},0).wait(1).to({scaleX:1.6311,scaleY:1.6311,x:-92.7,y:-28.9},0).wait(1).to({scaleX:1.6732,scaleY:1.6732,x:-99.05},0).wait(1).to({scaleX:1.7153,scaleY:1.7153,x:-105.4,y:-28.8},0).wait(1).to({scaleX:1.7574,scaleY:1.7574,x:-111.8,y:-28.7},0).wait(1).to({scaleX:1.7994,scaleY:1.7994,x:-118.1,y:-28.65},0).wait(1).to({scaleX:1.8415,scaleY:1.8415,x:-124.45,y:-28.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:73.8,regY:-0.1,x:43.55,y:-30.15},0).to({_off:true},1).wait(34));

	// CAR
	this.instance_19 = new lib.CAR("synched",0);
	this.instance_19.setTransform(-55.1,47);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).wait(1).to({regX:-18.4,regY:-0.5,x:-68.85,y:46.5,startPosition:1},0).wait(1).to({x:-64.45,startPosition:2},0).wait(1).to({x:-60.15,startPosition:3},0).wait(1).to({x:-56,startPosition:4},0).wait(1).to({x:-51.95,startPosition:5},0).wait(1).to({x:-47.95,startPosition:6},0).wait(1).to({x:-44.1,startPosition:7},0).wait(1).to({x:-40.3,startPosition:8},0).wait(1).to({x:-36.65,startPosition:9},0).wait(1).to({x:-33,startPosition:10},0).wait(1).to({x:-29.5,startPosition:11},0).wait(1).to({x:-26.1,startPosition:12},0).wait(1).to({x:-22.75,startPosition:13},0).wait(1).to({x:-19.5,startPosition:14},0).wait(1).to({x:-16.35,startPosition:15},0).wait(1).to({x:-13.3,startPosition:16},0).wait(1).to({x:-10.3,startPosition:17},0).wait(1).to({x:-7.35,startPosition:18},0).wait(1).to({x:-4.55,startPosition:19},0).wait(1).to({x:-1.8,startPosition:20},0).wait(1).to({x:0.8,startPosition:21},0).wait(1).to({x:3.35,startPosition:22},0).wait(1).to({x:5.85,startPosition:23},0).wait(1).to({x:8.2,startPosition:24},0).wait(1).to({x:10.45,startPosition:25},0).wait(1).to({x:12.65,startPosition:26},0).wait(1).to({x:14.7,startPosition:27},0).wait(1).to({x:16.7,startPosition:28},0).wait(1).to({x:18.55,startPosition:29},0).wait(1).to({x:20.3,startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({x:20.35,startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({x:20.4,startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({x:20.45,startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({x:20.5,startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({x:20.55,startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).to({_off:true},1).wait(1).to({_off:false,regX:0,regY:0,x:38.95,y:47,startPosition:0},0).to({_off:true},1).wait(34));

	// HAIL_GROUP_D
	this.instance_20 = new lib.HAIL_GROUP_D("synched",0);
	this.instance_20.setTransform(9.2,-15.75);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(166).to({_off:false},0).wait(1).to({regX:1.3,regY:-3,x:17.7,y:-0.65},0).wait(1).to({x:24.95,y:17.5},0).wait(1).to({x:32.15,y:35.6},0).wait(1).to({x:39.4,y:53.75},0).wait(1).to({x:41.1,y:64.6},0).wait(1).to({x:42.85,y:75.45},0).to({_off:true},1).wait(66));

	// HAIL_GROUP_C
	this.instance_21 = new lib.HAIL_GROUP_C("synched",0);
	this.instance_21.setTransform(9.2,-15.75);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(163).to({_off:false},0).wait(1).to({regX:2.7,regY:6.7,x:19.1,y:9.05},0).wait(1).to({x:26.35,y:27.2},0).wait(1).to({x:33.55,y:45.3},0).wait(1).to({x:40.8,y:63.45},0).wait(1).to({x:42.5,y:74.3},0).wait(1).to({x:44.25,y:85.15},0).to({_off:true},1).wait(69));

	// HAIL_GROUP_B
	this.instance_22 = new lib.HAIL_GROUP_B("synched",0);
	this.instance_22.setTransform(9.2,-15.75);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(161).to({_off:false},0).wait(1).to({regX:6.6,regY:2.5,x:23,y:4.85},0).wait(1).to({x:30.25,y:23},0).wait(1).to({x:37.45,y:41.1},0).wait(1).to({x:44.7,y:59.25},0).wait(1).to({x:46.4,y:70.1},0).wait(1).to({x:48.15,y:80.95},0).to({_off:true},1).wait(71));

	// HAIL_GROUP_A
	this.instance_23 = new lib.HAIL_GROUP_A("synched",0);
	this.instance_23.setTransform(9.2,-15.75);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(158).to({_off:false},0).wait(1).to({x:16.425,y:2.375},0).wait(1).to({x:23.65,y:20.5},0).wait(1).to({x:30.875,y:38.625},0).wait(1).to({x:38.1,y:56.75},0).wait(1).to({x:39.825,y:67.6},0).wait(1).to({x:41.55,y:78.45},0).to({_off:true},1).wait(74));

	// HAIL_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_24 = new lib.HAIL("synched",0);
	this.instance_24.setTransform(46.05,-21.45,1,1,0,0,0,-75,-37.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(181).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:65.65,y:9.75},0).wait(1).to({x:72.6,y:29.6},0).wait(1).to({x:79.5,y:49.4},0).wait(1).to({x:86.45,y:69.25},0).to({_off:true},1).wait(53));

	// HAIL_copy_copy_copy_copy_copy_copy_copy
	this.instance_25 = new lib.HAIL("synched",0);
	this.instance_25.setTransform(61.55,-36.7,1,1,0,0,0,-75,-37.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(178).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:79.7,y:-6.4},0).wait(1).to({x:85.15,y:12.55},0).wait(1).to({x:90.65,y:31.5},0).wait(1).to({x:96.1,y:50.45},0).wait(1).to({x:101.6,y:69.4},0).to({_off:true},1).wait(55));

	// HAIL_copy_copy_copy_copy_copy_copy
	this.instance_26 = new lib.HAIL("synched",0);
	this.instance_26.setTransform(12.6,-19.25,1,1,0,0,0,-75,-37.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(170).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:25.3,y:-5.05},0).wait(1).to({y:-2.25},0).wait(1).to({y:0.6},0).wait(1).to({y:3.4},0).wait(1).to({y:6.2},0).wait(1).to({y:9.05},0).wait(1).to({x:25.7,y:16.05},0).wait(1).to({x:26.15,y:23.05},0).wait(1).to({x:26.6,y:30.05},0).wait(1).to({x:28.7,y:29.8},0).wait(1).to({x:30.85,y:29.55},0).wait(1).to({x:31.8,y:33.3},0).wait(1).to({x:32.75,y:37.1},0).wait(1).to({x:33.7,y:40.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:21,y:29.5},0).wait(1).to({regX:-62.3,regY:-25.8,x:33.7,y:40.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// HAIL_copy_copy_copy_copy_copy
	this.instance_27 = new lib.HAIL("synched",0);
	this.instance_27.setTransform(-27,-18.05,1,1,0,0,0,-75,-37.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(164).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:-11.8,y:1.05},0).wait(1).to({x:-9.25,y:8.8},0).wait(1).to({x:-6.7,y:16.55},0).wait(1).to({x:-2.5,y:22.75},0).wait(1).to({x:1.7,y:28.95},0).wait(1).to({x:5.9,y:26.15},0).wait(1).to({x:8.15,y:28.6},0).wait(1).to({x:10.4,y:31.05},0).wait(1).to({x:12.7,y:33.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:0,y:22.15},0).wait(1).to({regX:-62.3,regY:-25.8,x:12.7,y:33.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(6));

	// HAIL_copy_copy_copy_copy
	this.instance_28 = new lib.HAIL("synched",0);
	this.instance_28.setTransform(-55.8,-18.05,1,1,0,0,0,-75,-37.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(162).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:-36.7,y:3.35},0).wait(1).to({x:-30.3,y:13.35},0).wait(1).to({x:-24.3,y:25.35},0).wait(1).to({x:-18.3,y:37.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:-31,y:25.95},0).wait(1).to({regX:-62.3,regY:-25.8,x:-18.3,y:37.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy_copy_copy
	this.instance_29 = new lib.HAIL("synched",0);
	this.instance_29.setTransform(36.6,-39.2,1,1,0,0,0,-75,-37.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(160).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:57.1,y:-8},0).wait(1).to({x:64.9,y:11.8},0).wait(1).to({x:72.7,y:31.6},0).wait(1).to({x:74.15,y:45.8},0).wait(1).to({x:76.15,y:45.1},0).wait(1).to({x:78.15,y:44.45},0).wait(1).to({x:80.15,y:43.8},0).wait(1).to({x:86.35,y:48.6},0).wait(1).to({x:92.55,y:53.45},0).wait(1).to({x:94.6,y:56.1},0).wait(1).to({x:96.65,y:58.75},0).wait(1).to({x:98.75,y:61.4},0).wait(1).to({x:100.8,y:64.05},0).wait(1).to({x:102.85,y:66.7},0).wait(1).to({x:104.95,y:69.4},0).to({_off:true},1).wait(63));

	// HAIL_copy_copy
	this.instance_30 = new lib.HAIL("synched",0);
	this.instance_30.setTransform(28,-18.8,1,1,0,0,0,-75,-37.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(152).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:47.35,y:5.25},0).wait(1).to({x:54,y:17.9},0).wait(1).to({x:60.65,y:30.55},0).wait(1).to({x:67.3,y:43.2},0).wait(1).to({y:42.45},0).wait(1).to({y:41.7},0).wait(1).to({y:40.95},0).wait(1).to({y:40.2},0).wait(1).to({x:67.8,y:40.45},0).wait(1).to({x:68.3,y:40.7},0).wait(1).to({x:68.8,y:40.95},0).wait(1).to({x:69.3,y:41.2},0).wait(1).to({x:69.8,y:41.45},0).wait(1).to({x:70.3,y:41.7},0).wait(1).to({x:70.8,y:41.95},0).wait(1).to({x:71.3,y:42.2},0).wait(1).to({y:47.2},0).wait(1).to({y:52.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:58.6,y:40.8},0).wait(1).to({regX:-62.3,regY:-25.8,x:71.3,y:52.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy
	this.instance_31 = new lib.HAIL("synched",0);
	this.instance_31.setTransform(2.75,-15.85,1,1,0,0,0,-75,-37.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(149).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:16.45,y:2.3},0).wait(1).to({x:22,y:15.8},0).wait(1).to({x:26.1,y:30.8},0).wait(1).to({x:28.7,y:28.6},0).wait(1).to({x:28.8,y:28.4},0).wait(1).to({x:28.95,y:28.2},0).wait(1).to({x:29.05,y:28},0).wait(1).to({x:29.2,y:27.8},0).wait(1).to({x:29.3,y:27.6},0).wait(1).to({x:29.45,y:27.4},0).wait(1).to({x:29.55,y:27.2},0).wait(1).to({x:29.7,y:27},0).wait(1).to({x:30.1,y:27.95},0).wait(1).to({x:30.55,y:28.95},0).wait(1).to({x:31,y:29.9},0).wait(1).to({x:31.45,y:30.9},0).wait(1).to({x:31.9,y:31.85},0).wait(1).to({x:32.35,y:32.85},0).wait(1).to({x:32.8,y:33.8},0).wait(1).to({x:33.25,y:34.8},0).wait(1).to({x:33.7,y:35.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:21,y:24.4},0).wait(1).to({regX:-62.3,regY:-25.8,x:33.7,y:35.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8));

	// HAIL_copy_copy_copy_copy_copy_copy_copy
	this.instance_32 = new lib.HAIL("synched",0);
	this.instance_32.setTransform(46.05,-26.15,1,1,0,0,0,-75,-37.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(155).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:65.65,y:6.25},0).wait(1).to({x:72.6,y:27.25},0).wait(1).to({x:79.5,y:48.25},0).wait(1).to({x:86.45,y:69.25},0).to({_off:true},1).wait(79));

	// HAIL_copy_copy_copy_copy_copy_copy
	this.instance_33 = new lib.HAIL("synched",0);
	this.instance_33.setTransform(61.55,-36.7,1,1,0,0,0,-75,-37.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(152).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:79.7,y:-6.4},0).wait(1).to({x:85.15,y:12.55},0).wait(1).to({x:90.65,y:31.5},0).wait(1).to({x:96.1,y:50.45},0).wait(1).to({x:101.6,y:69.4},0).to({_off:true},1).wait(81));

	// HAIL_copy_copy_copy_copy_copy
	this.instance_34 = new lib.HAIL("synched",0);
	this.instance_34.setTransform(12.6,-19.25,1,1,0,0,0,-75,-37.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(144).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:25.3,y:-5.05},0).wait(1).to({y:-2.25},0).wait(1).to({y:0.6},0).wait(1).to({y:3.4},0).wait(1).to({y:6.2},0).wait(1).to({y:9.05},0).wait(1).to({x:25.7,y:16.05},0).wait(1).to({x:26.15,y:23.05},0).wait(1).to({x:26.6,y:30.05},0).wait(1).to({x:28.7,y:29.8},0).wait(1).to({x:30.85,y:29.55},0).wait(1).to({x:31.8,y:33.3},0).wait(1).to({x:32.75,y:37.1},0).wait(1).to({x:33.7,y:40.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:21,y:29.5},0).wait(1).to({regX:-62.3,regY:-25.8,x:33.7,y:40.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(26));

	// HAIL_copy_copy_copy_copy
	this.instance_35 = new lib.HAIL("synched",0);
	this.instance_35.setTransform(-27,-18.05,1,1,0,0,0,-75,-37.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(138).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:-11.8,y:1.05},0).wait(1).to({x:-9.25,y:8.8},0).wait(1).to({x:-6.7,y:16.55},0).wait(1).to({x:-2.5,y:22.75},0).wait(1).to({x:1.7,y:28.95},0).wait(1).to({x:5.9,y:26.15},0).wait(1).to({x:8.15,y:28.6},0).wait(1).to({x:10.4,y:31.05},0).wait(1).to({x:12.7,y:33.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:0,y:22.15},0).wait(1).to({regX:-62.3,regY:-25.8,x:12.7,y:33.55},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(32));

	// HAIL_copy_copy_copy
	this.instance_36 = new lib.HAIL("synched",0);
	this.instance_36.setTransform(-55.8,-18.05,1,1,0,0,0,-75,-37.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(136).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:-36.7,y:3.35},0).wait(1).to({x:-30.3,y:13.35},0).wait(1).to({x:-24.3,y:25.35},0).wait(1).to({x:-18.3,y:37.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:-31,y:25.95},0).to({_off:true},1).wait(34));

	// HAIL_copy_copy
	this.instance_37 = new lib.HAIL("synched",0);
	this.instance_37.setTransform(36.6,-39.2,1,1,0,0,0,-75,-37.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(134).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:57.1,y:-8},0).wait(1).to({x:64.9,y:11.8},0).wait(1).to({x:72.7,y:31.6},0).wait(1).to({x:74.15,y:45.8},0).wait(1).to({x:76.15,y:45.1},0).wait(1).to({x:78.15,y:44.45},0).wait(1).to({x:80.15,y:43.8},0).wait(1).to({x:86.35,y:48.6},0).wait(1).to({x:92.55,y:53.45},0).wait(1).to({x:94.6,y:56.1},0).wait(1).to({x:96.65,y:58.75},0).wait(1).to({x:98.75,y:61.4},0).wait(1).to({x:100.8,y:64.05},0).wait(1).to({x:102.85,y:66.7},0).wait(1).to({x:104.95,y:69.4},0).to({_off:true},1).wait(89));

	// HAIL_copy
	this.instance_38 = new lib.HAIL("synched",0);
	this.instance_38.setTransform(28,-18.8,1,1,0,0,0,-75,-37.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(126).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:47.35,y:5.25},0).wait(1).to({x:54,y:17.9},0).wait(1).to({x:60.65,y:30.55},0).wait(1).to({x:67.3,y:43.2},0).wait(1).to({y:42.45},0).wait(1).to({y:41.7},0).wait(1).to({y:40.95},0).wait(1).to({y:40.2},0).wait(1).to({x:67.8,y:40.45},0).wait(1).to({x:68.3,y:40.7},0).wait(1).to({x:68.8,y:40.95},0).wait(1).to({x:69.3,y:41.2},0).wait(1).to({x:69.8,y:41.45},0).wait(1).to({x:70.3,y:41.7},0).wait(1).to({x:70.8,y:41.95},0).wait(1).to({x:71.3,y:42.2},0).wait(1).to({y:47.2},0).wait(1).to({y:52.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:58.6,y:40.8},0).to({_off:true},1).wait(34));

	// HAIL
	this.instance_39 = new lib.HAIL("synched",0);
	this.instance_39.setTransform(9.25,4.4,1,1,0,0,0,-75,-37.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(125).to({_off:false},0).wait(1).to({regX:-62.3,regY:-25.8,x:26.05,y:30.8},0).wait(1).to({x:28.65,y:28.6},0).wait(1).to({x:28.75,y:28.4},0).wait(1).to({x:28.9,y:28.2},0).wait(1).to({x:29,y:28},0).wait(1).to({x:29.15,y:27.8},0).wait(1).to({x:29.25,y:27.6},0).wait(1).to({x:29.4,y:27.4},0).wait(1).to({x:29.5,y:27.2},0).wait(1).to({x:29.65,y:27},0).wait(1).to({x:30.05,y:27.95},0).wait(1).to({x:30.5,y:28.95},0).wait(1).to({x:30.95,y:29.9},0).wait(1).to({x:31.4,y:30.9},0).wait(1).to({x:31.85,y:31.85},0).wait(1).to({x:32.3,y:32.85},0).wait(1).to({x:32.75,y:33.8},0).wait(1).to({x:33.2,y:34.8},0).wait(1).to({x:33.65,y:35.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,regX:-75,regY:-37.2,x:20.95,y:24.4},0).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.6,-97.3,574.7,205.6);


// stage content:
(lib.NRMA0820_First_Saturdays_Digi_Banners_August_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.new_SCREEN04("synched",0);
	this.instance.setTransform(80,298.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(394).to({_off:false},0).to({alpha:1},9).wait(70).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// SCREEN_03_5
	this.instance_1 = new lib.new_SCREEN035("synched",0);
	this.instance_1.setTransform(80.15,378.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(294).to({_off:false},0).to({alpha:1},11).wait(79).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(90));

	// SCREEN_03
	this.instance_2 = new lib.new_SCREEN03("synched",0);
	this.instance_2.setTransform(80.15,378.55);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({alpha:1},11).wait(69).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(190));

	// SCREEN_02
	this.instance_3 = new lib.new_SCREEN02("synched",0);
	this.instance_3.setTransform(79.95,367.75);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({alpha:1},10).wait(93).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(280));

	// SCREEN_01
	this.instance_4 = new lib.new_SCREEN01("synched",0);
	this.instance_4.setTransform(80.15,266.45);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).wait(70).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(394));

	// COVER_MOTION_FOR_TWEENING
	this.instance_5 = new lib.new_COVERMOTIONFORTWEENING("synched",0);
	this.instance_5.setTransform(486.15,125.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({startPosition:0},0).to({alpha:0},10).wait(93).to({startPosition:0},0).to({alpha:1},10).to({startPosition:0},1).to({alpha:0},11).wait(69).to({startPosition:0},0).to({alpha:1},10).to({alpha:0},11).wait(79).to({startPosition:0},0).to({alpha:1},9).to({_off:true},1).wait(90));

	// CAR_UNDER_CARPORT
	this.instance_6 = new lib.CARUNDERCARPORT("synched",0);
	this.instance_6.setTransform(219.1,164.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-100.1,regY:-7.6,x:119,y:157.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({startPosition:340},0).wait(1).to({startPosition:341},0).wait(1).to({startPosition:342},0).wait(1).to({startPosition:343},0).wait(1).to({startPosition:344},0).wait(1).to({startPosition:345},0).wait(1).to({startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).to({_off:true},1).wait(90));

	// HAND_AND_PHONE
	this.instance_7 = new lib.HANDANDPHONE("synched",203);
	this.instance_7.setTransform(88.2,201.75,0.7099,0.7099,24.7329,0,0,-41.7,32);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(203).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:23.486,x:124.4137,y:192.7096,startPosition:204},0).wait(1).to({rotation:22.2381,x:124.2083,y:191.9233,startPosition:205},0).wait(1).to({rotation:20.9903,x:123.9858,y:191.1416,startPosition:206},0).wait(1).to({rotation:19.7425,x:123.7463,y:190.365,startPosition:207},0).wait(1).to({rotation:18.4946,x:123.49,y:189.5938,startPosition:208},0).wait(1).to({rotation:17.2468,x:123.217,y:188.8284,startPosition:209},0).wait(1).to({rotation:15.999,x:122.9274,y:188.069,startPosition:210},0).wait(1).to({rotation:14.7511,x:122.6212,y:187.3162,startPosition:211},0).wait(1).to({rotation:13.5033,x:122.2988,y:186.5702,startPosition:212},0).wait(1).to({rotation:12.2554,x:121.9602,y:185.8314,startPosition:213},0).wait(1).to({rotation:11.0076,x:121.6056,y:185.1002,startPosition:214},0).wait(1).to({rotation:9.7598,x:121.2352,y:184.3768,startPosition:215},0).wait(1).to({rotation:8.5119,x:120.849,y:183.6617,startPosition:216},0).wait(1).to({rotation:7.2641,x:120.4475,y:182.9552,startPosition:217},0).wait(1).to({rotation:6.0163,x:120.0306,y:182.2576,startPosition:218},0).wait(1).to({rotation:4.7684,x:119.5986,y:181.5692,startPosition:219},0).wait(1).to({rotation:3.5206,x:119.1517,y:180.8904,startPosition:220},0).wait(1).to({rotation:3.9335,x:119.3012,y:181.114,startPosition:221},0).wait(1).to({rotation:4.3464,x:119.4491,y:181.3386,startPosition:222},0).wait(1).to({rotation:4.7594,x:119.5954,y:181.5643,startPosition:223},0).wait(1).to({rotation:5.1723,x:119.74,y:181.791,startPosition:224},0).wait(1).to({rotation:5.5852,x:119.883,y:182.0187,startPosition:225},0).wait(1).to({rotation:5.9981,x:120.0244,y:182.2475,startPosition:226},0).wait(1).to({rotation:6.411,x:120.1641,y:182.4773,startPosition:227},0).wait(1).to({rotation:6.824,x:120.3021,y:182.7081,startPosition:228},0).wait(1).to({rotation:7.2369,x:120.4385,y:182.9399,startPosition:229},0).wait(1).to({rotation:6.6175,x:120.2333,y:182.5926,startPosition:230},0).wait(1).to({rotation:5.9981,x:120.0244,y:182.2475,startPosition:231},0).wait(1).to({rotation:5.3787,x:119.8117,y:181.9047,startPosition:232},0).wait(1).to({rotation:4.7594,x:119.5954,y:181.5643,startPosition:233},0).wait(1).to({rotation:4.14,x:119.3754,y:181.2261,startPosition:234},0).wait(1).to({rotation:3.5206,x:119.1517,y:180.8904,startPosition:235},0).wait(1).to({scaleX:0.7433,scaleY:0.7433,x:117.7314,y:180.4086,startPosition:236},0).wait(1).to({scaleX:0.7768,scaleY:0.7768,x:116.311,y:179.9269,startPosition:237},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,x:114.8906,y:179.4451,startPosition:238},0).wait(1).to({scaleX:0.8436,scaleY:0.8436,x:113.4702,y:178.9633,startPosition:239},0).wait(1).to({scaleX:0.877,scaleY:0.877,x:112.0499,y:178.4815,startPosition:240},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,x:110.6295,y:177.9998,startPosition:241},0).wait(1).to({scaleX:0.9439,scaleY:0.9439,x:109.2091,y:177.518,startPosition:242},0).wait(1).to({scaleX:0.9773,scaleY:0.9773,x:107.7888,y:177.0362,startPosition:243},0).wait(1).to({scaleX:1.0107,scaleY:1.0107,x:106.3684,y:176.5544,startPosition:244},0).wait(1).to({scaleX:1.0441,scaleY:1.0441,x:104.948,y:176.0727,startPosition:245},0).wait(1).to({scaleX:1.0775,scaleY:1.0775,x:103.5277,y:175.5909,startPosition:246},0).wait(1).to({scaleX:1.1109,scaleY:1.1109,x:102.1073,y:175.1091,startPosition:247},0).wait(1).to({scaleX:1.1444,scaleY:1.1444,x:100.6869,y:174.6273,startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).to({_off:true},1).wait(190));

	// MASK1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4SShMAAAglBMAwlAAAMAAAAlBg");
	mask.setTransform(150.925,109.7566);

	// CAR_CLOUDS_LIGHTING_HAIL
	this.instance_8 = new lib.CAR_CLOUDSLIGHTINGHAIL("synched",0);
	this.instance_8.setTransform(128.3,222.25,1,1,0,0,0,4.5,63.2);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:34.7,regY:6.7,x:158.5,y:165.75,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({scaleX:1.0291,scaleY:1.0291,x:158.8,y:164,startPosition:146},0).wait(1).to({scaleX:1.0582,scaleY:1.0582,x:159.1,y:162.3,startPosition:147},0).wait(1).to({scaleX:1.0872,scaleY:1.0872,x:159.45,y:160.55,startPosition:148},0).wait(1).to({scaleX:1.1163,scaleY:1.1163,x:159.75,y:158.85,startPosition:149},0).wait(1).to({scaleX:1.1454,scaleY:1.1454,x:160.05,y:157.1,startPosition:150},0).wait(1).to({scaleX:1.1745,scaleY:1.1745,x:160.35,y:155.35,startPosition:151},0).wait(1).to({scaleX:1.2036,scaleY:1.2036,x:160.65,y:153.65,startPosition:152},0).wait(1).to({scaleX:1.2327,scaleY:1.2327,x:160.95,y:151.9,startPosition:153},0).wait(1).to({scaleX:1.2617,scaleY:1.2617,x:161.3,y:150.2,startPosition:154},0).wait(1).to({scaleX:1.2908,scaleY:1.2908,x:161.6,y:148.5,startPosition:155},0).wait(1).to({scaleX:1.3199,scaleY:1.3199,x:161.9,y:146.75,startPosition:156},0).wait(1).to({scaleX:1.349,scaleY:1.349,x:162.2,y:145.05,startPosition:157},0).wait(1).to({scaleX:1.3781,scaleY:1.3781,x:162.5,y:143.3,startPosition:158},0).wait(1).to({scaleX:1.4072,scaleY:1.4072,x:162.85,y:141.6,startPosition:159},0).wait(1).to({scaleX:1.4362,scaleY:1.4362,x:163.15,y:139.85,startPosition:160},0).wait(1).to({scaleX:1.4653,scaleY:1.4653,x:163.45,y:138.1,startPosition:161},0).wait(1).to({scaleX:1.4944,scaleY:1.4944,x:163.75,y:136.4,startPosition:162},0).wait(1).to({scaleX:1.5235,scaleY:1.5235,x:164.05,y:134.65,startPosition:163},0).wait(1).to({scaleX:1.5526,scaleY:1.5526,x:164.35,y:132.95,startPosition:164},0).wait(1).to({scaleX:1.5817,scaleY:1.5817,x:164.7,y:131.25,startPosition:165},0).wait(1).to({scaleX:1.6107,scaleY:1.6107,x:165.05,y:129.5,startPosition:166},0).wait(1).to({scaleX:1.6398,scaleY:1.6398,x:165.35,y:127.8,startPosition:167},0).wait(1).to({scaleX:1.6689,scaleY:1.6689,x:165.65,y:126.05,startPosition:168},0).wait(1).to({scaleX:1.698,scaleY:1.698,x:165.95,y:124.35,startPosition:169},0).wait(1).to({scaleX:1.7271,scaleY:1.7271,x:166.3,y:122.6,startPosition:170},0).wait(1).to({scaleX:1.7562,scaleY:1.7562,x:166.6,y:120.85,startPosition:171},0).wait(1).to({scaleX:1.7641,scaleY:1.7641,x:166.25,y:120.35,startPosition:172},0).wait(1).to({scaleX:1.772,scaleY:1.772,x:165.95,y:119.8,startPosition:173},0).wait(1).to({scaleX:1.7799,scaleY:1.7799,x:165.6,y:119.25,startPosition:174},0).wait(1).to({scaleX:1.7878,scaleY:1.7878,x:165.25,y:118.8,startPosition:175},0).wait(1).to({scaleX:1.7957,scaleY:1.7957,x:164.9,y:118.25,startPosition:176},0).wait(1).to({scaleX:1.8036,scaleY:1.8036,x:164.6,y:117.7,startPosition:177},0).wait(1).to({scaleX:1.8115,scaleY:1.8115,x:164.25,y:117.2,startPosition:178},0).wait(1).to({scaleX:1.8194,scaleY:1.8194,x:163.95,y:116.65,startPosition:179},0).wait(1).to({scaleX:1.8273,scaleY:1.8273,x:163.6,y:116.15,startPosition:180},0).wait(1).to({scaleX:1.8352,scaleY:1.8352,x:163.3,y:115.6,startPosition:181},0).wait(1).to({scaleX:1.8431,scaleY:1.8431,x:162.95,y:115.05,startPosition:182},0).wait(1).to({scaleX:1.851,scaleY:1.851,x:162.65,y:114.55,startPosition:183},0).wait(1).to({scaleX:1.8589,scaleY:1.8589,x:162.3,y:114,startPosition:184},0).wait(1).to({scaleX:1.8668,scaleY:1.8668,x:162,y:113.45,startPosition:185},0).wait(1).to({scaleX:1.8747,scaleY:1.8747,x:161.65,y:112.95,startPosition:186},0).wait(1).to({scaleX:1.8826,scaleY:1.8826,x:161.3,y:112.4,startPosition:187},0).wait(1).to({scaleX:1.8905,scaleY:1.8905,x:161,y:111.9,startPosition:188},0).wait(1).to({scaleX:1.8984,scaleY:1.8984,x:160.65,y:111.35,startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).to({_off:true},1).wait(281));

	// ROAD
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EglCAAAMBKFAAA");
	this.shape.setTransform(142.625,227.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90).to({_off:false},0).to({_off:true},113).wait(91).to({_off:false},0).to({_off:true},100).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(54.5,116.2,326.3,139);
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;