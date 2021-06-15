(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"spacePuzzle_atlas_1", frames: [[942,0,650,650],[942,652,636,636],[802,1290,636,636],[0,942,800,533],[0,1477,640,350],[0,0,940,940]]},
		{name:"spacePuzzle_atlas_2", frames: [[0,0,1720,1720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.Bitmap10 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2205,2205);


(lib.Bitmap7 = function() {
	this.initialize(ss["spacePuzzle_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4613,2233);


(lib.Bitmap9 = function() {
	this.initialize(ss["spacePuzzle_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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


(lib.venus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-88,-58,0.22,0.22);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.venus, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.uranus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-59,-58,0.068,0.068);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uranus, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.Sun = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("A3pXqQpyp0AAt2QAAt2JypzQJzpyN2AAQN2AAJ0JyQJyJzAAN2QAAN2pyJ0Qp0Jyt2AAQt2AApzpyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sun, new cjs.Rectangle(-214,-214,428.1,428.1), null);


(lib.planetshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6D5C70").s().p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.planetshadow, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.neptune = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-51,-54,0.169,0.169);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neptune, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.mercury = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-50,-51,0.16,0.16);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mercury, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.mars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-58,-56,0.051,0.051);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-54,-54,0.17,0.17);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mars, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.library = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpE9QhkhkgYiDQjPgIisgRQlMghAAgsQAAgtFMghQCvgRDUgIQAdhuBXhXQCDiCC4AAQC6AACDCCQBXBXAdBvQC/AICfAQQFMAhAAAtQAAAslMAhQicAPi6AJQgYCDhkBlQiDCCi6AAQi4AAiDiCg");
	mask.setTransform(-1.825,0);

	// Layer_2
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-135,-66,0.058,0.058);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-54,-54,0.17,0.17);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.library, new cjs.Rectangle(-115.1,-44.7,226.6,89.5), null);


(lib.jumpiter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-52,-52,0.11,0.11);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumpiter, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


(lib.earth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8E9QiCiDAAi6QAAi5CCiDQCDiCC5AAQC6AACDCCQCCCDAAC5QAAC6iCCDQiDCCi6AAQi5AAiDiCg");

	// Layer_2
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-88,-50,0.28,0.28);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-54,-54,0.17,0.17);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.earth, new cjs.Rectangle(-44.7,-44.7,89.5,89.5), null);


// stage content:
(lib.spacePuzzle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var planets = [this.planet0, this.planet1, this.planet2, this.planet3, this.planet4, this.planet5, this.planet6, this.planet7];
		var slotsX = [this.slot0.x, this.slot1.x, this.slot2.x, this.slot3.x, this.slot4.x, this.slot5.x, this.slot6.x, this.slot7.x]
		var slotsY = [this.slot0.y, this.slot1.y, this.slot2.y, this.slot3.y, this.slot4.y, this.slot5.y, this.slot6.y, this.slot7.y]
		
		
		for (var i = 0; i < planets.length; i++) {
			planets[i].on("pressmove", function(e) {
				var p = stage.globalToLocal(e.stageX, e.stageY);
				e.currentTarget.x = p.x;
				e.currentTarget.y = p.y;
			});
			planets[i].on("pressup", function(e) { 
				console.log("Current target is" + e.currentTarget.x);
				var target = e.currentTarget.name.split("planet");
				var currentNumber = target[1]; 
				console.log("slot low is" + (slotsX[currentNumber] - (slotsX[currentNumber] / 2)) + "slot high is" + (slotsX[currentNumber] + (slotsX[currentNumber] / 2)));
				
				
				if (e.currentTarget.x > (slotsX[currentNumber] - 45) && e.currentTarget.x < (slotsX[currentNumber] + 45)) {
					e.currentTarget.x = slotsX[currentNumber];
					e.currentTarget.y = slotsY[currentNumber];
				}	
			});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Sun();
	this.instance.setTransform(-120.3,350.45,1,1.3737);

	this.planet7 = new lib.neptune();
	this.planet7.name = "planet7";
	this.planet7.setTransform(934.15,694.3,1.1125,1.1125);

	this.planet6 = new lib.uranus();
	this.planet6.name = "planet6";
	this.planet6.setTransform(808.15,695.4,1.335,1.335);

	this.planet5 = new lib.library();
	this.planet5.name = "planet5";
	this.planet5.setTransform(631.9,674.4,1.5575,1.5575);

	this.planet4 = new lib.jumpiter();
	this.planet4.name = "planet4";
	this.planet4.setTransform(454.25,675.5,1.78,1.78);

	this.planet3 = new lib.mars();
	this.planet3.name = "planet3";
	this.planet3.setTransform(325.25,695.8,0.445,0.445,0,0,0,0,0.1);

	this.planet2 = new lib.earth();
	this.planet2.name = "planet2";
	this.planet2.setTransform(257.1,704.35,0.89,0.89);

	this.planet1 = new lib.venus();
	this.planet1.name = "planet1";
	this.planet1.setTransform(180.35,707.3,0.623,0.623,0,0,0,0.1,0);

	this.planet0 = new lib.mercury();
	this.planet0.name = "planet0";
	this.planet0.setTransform(122.35,710,0.445,0.445,0,0,0,0.1,0);

	this.slot7 = new lib.planetshadow();
	this.slot7.name = "slot7";
	this.slot7.setTransform(953.95,384,1.1125,1.1125);

	this.slot6 = new lib.planetshadow();
	this.slot6.name = "slot6";
	this.slot6.setTransform(818.85,384,1.335,1.335);

	this.slot5 = new lib.planetshadow();
	this.slot5.name = "slot5";
	this.slot5.setTransform(675.85,384,1.5575,1.5575);

	this.slot4 = new lib.planetshadow();
	this.slot4.name = "slot4";
	this.slot4.setTransform(504.95,384,1.78,1.78);

	this.slot3 = new lib.planetshadow();
	this.slot3.name = "slot3";
	this.slot3.setTransform(389.85,384.1,0.445,0.445,0,0,0,0,0.2);

	this.slot2 = new lib.planetshadow();
	this.slot2.name = "slot2";
	this.slot2.setTransform(304.55,384,0.89,0.89);

	this.slot1 = new lib.planetshadow();
	this.slot1.name = "slot1";
	this.slot1.setTransform(203.25,384.05,0.623,0.623,0,0,0,0,0.1);

	this.slot0 = new lib.planetshadow();
	this.slot0.name = "slot0";
	this.slot0.setTransform(140,384.1,0.445,0.445,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot0},{t:this.slot1},{t:this.slot2},{t:this.slot3},{t:this.slot4},{t:this.slot5},{t:this.slot6},{t:this.slot7},{t:this.planet0},{t:this.planet1},{t:this.planet2},{t:this.planet3},{t:this.planet4},{t:this.planet5},{t:this.planet6},{t:this.planet7},{t:this.instance}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(177.6,440.4,826.1999999999999,333.70000000000005);
// library properties:
lib.properties = {
	id: '4EB8562230474DF7931D6BD9BC61EB1A',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/spacePuzzle_atlas_1.png", id:"spacePuzzle_atlas_1"},
		{src:"images/spacePuzzle_atlas_2.png", id:"spacePuzzle_atlas_2"}
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
an.compositions['4EB8562230474DF7931D6BD9BC61EB1A'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;