(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,1274,1814]]},
		{name:"game_atlas_2", frames: [[0,0,1274,1652],[0,1775,42,72],[44,1775,39,72],[121,1654,68,66],[121,1722,66,65],[191,1654,66,68],[0,1654,119,119],[259,1689,39,34],[317,1654,39,34],[259,1654,56,33]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["game_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_34 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_35 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_36 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_38 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_39 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_40 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_41 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.spritesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// svg8
	this.instance = new lib.CachedTexturedBitmap_41();
	this.instance.parent = this;
	this.instance.setTransform(129.45,60.1,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.75,39.85,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.8,39.85,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(112.85,26.1,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.05,61.45,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(112,53.5,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_34();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101.9,62.35,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_36();
	this.instance_7.parent = this;
	this.instance_7.setTransform(152.05,61.45,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.05,61.45,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_29();
	this.instance_9.parent = this;
	this.instance_9.setTransform(133.5,13.65,0.5,0.5);

	this.instance_10 = new lib.CachedTexturedBitmap_28();
	this.instance_10.parent = this;
	this.instance_10.setTransform(132.75,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.9,0,83.19999999999999,95.5);


(lib.bg_onesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// player
	this.instance = new lib.spritesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(313.25,248.35,1,1,180,0,0,143.5,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,25.65,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,106.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,25.7,637,907);


(lib.Scene_1_Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.bg_onesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(364.5,270.1,1,1,-90,0,0,346.1,492.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Background, null, null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		/* Key Pressed Event
		Executes the function fl_KeyboardDownHandler defined below when any keyboard key is pressed.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when any key is pressed.
		*/
		
		
		stage.addEventListener(Event.ENTER_FRAME, function(e:Event):void {
		  stage.addEventListener(KeyboardEvent.KEY_DOWN, fl_KeyboardDownHandler_2);
		
		  function fl_KeyboardDownHandler_2(event:KeyboardEvent):void
		  {
			// Start your custom code
			// This example code displays the words "Key Code Pressed:" and the keycode of the pressed key in the Output panel.
			trace("Key Code Pressed: " + event.keyCode);
			// End your custom code
		   }
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.parent = this;
	this.Background.setTransform(350.8,297.7,1,1,0,0,0,350.8,297.7);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 0
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.3,279.2,506.99999999999994,337.00000000000006);
// library properties:
lib.properties = {
	id: 'F13532AB6B164E70B2BF2301252DC2FC',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1552780968958", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1552780968958", id:"game_atlas_2"}
	],
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
an.compositions['F13532AB6B164E70B2BF2301252DC2FC'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;